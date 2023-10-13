import { executeGraphql } from "./graphqlApi";
import { getProductById } from "./products";
import { mapEntity } from "./utils";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartSetItemQuantityDocument,
	// CartOrderItemEntity,
	type CartOrder,
	type CartOrderEntity,
	type CartOrderItem,
	type CartOrderItemEntity,
	CartItemGetByIdDocument,
	type Maybe,
} from "@/gql/graphql";

const mapCart = (
	cartData: {
		id: string;
		attributes: CartOrder;
	},
	cartOrderItems:
		| {
				id: string;
				attributes: CartOrderItem;
		  }[]
		| undefined,
) => {
	const mappedCartOrderItems = cartOrderItems?.map((item) => {
		if (!item.attributes.product?.data?.attributes) {
			throw new Error("Product is not defined in the Cart Order Item");
		}

		return {
			id: item.id,
			quantity: item.attributes.quantity,
			total: item.attributes.total,
			product: {
				id: item.attributes.product.data.id,
				name: item.attributes.product.data.attributes.name,
				price: item.attributes.product.data.attributes.price,
				imageUrl: item.attributes.product.data.attributes.images?.data[0]?.attributes?.url,
				imageAlt:
					item.attributes.product.data.attributes.images?.data[0]?.attributes?.alternativeText,
			},
		};
	});

	return {
		id: cartData.id,
		cartOrderItems: mappedCartOrderItems || [],
	};
};

export const createCart = async () => {
	const graphqlResponse = await executeGraphql({
		query: CartCreateDocument,
		cache: "no-cache",
		next: {
			tags: ["cart"],
		},
		variables: {
			publishedDate: new Date().toISOString(),
		},
	});
	if (!graphqlResponse.createCartOrder?.data) return null;
	const cartData = mapEntity<CartOrder>(graphqlResponse.createCartOrder.data as CartOrderEntity);

	const cartOrderItems = cartData.attributes.cart_order_items?.data.map((cartOrderItem) =>
		mapEntity(cartOrderItem),
	);

	return mapCart(cartData, cartOrderItems);
};

export type CartType = {
	id: string;
	cartOrderItems: {
		id: string;
		quantity: Maybe<number> | undefined;
		total: number;
		product: {
			id: Maybe<string> | undefined;
			name: string;
			price: number;
			imageUrl: string | undefined;
			imageAlt: Maybe<string> | undefined;
		};
	}[];
};

export const getCartById = async (cartId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartGetByIdDocument,
		cache: "no-cache",
		next: {
			tags: ["cart"],
		},
		variables: { cartId },
	});
	if (!graphqlResponse.cartOrder?.data) return null;
	const cartData = mapEntity<CartOrder>(graphqlResponse.cartOrder.data as CartOrderEntity);

	const cartOrderItems = cartData.attributes.cart_order_items?.data.map((cartOrderItem) =>
		mapEntity(cartOrderItem),
	);

	return mapCart(cartData, cartOrderItems);
};

export const addProductToCart = async ({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) => {
	const product = await getProductById(productId);

	if (!product) {
		throw new Error("Product not found");
	}

	const cart = await getCartById(cartId);

	if (!cart) {
		throw new Error("Cart not found");
	}

	const cartItemForProductId = cart.cartOrderItems.find((item) => item.product.id === productId);
	const currentCartItemQuantity = cartItemForProductId?.quantity || 0;

	if (cartItemForProductId) {
		await changeCartItemQuantity(cartItemForProductId.id, currentCartItemQuantity + quantity);
		return;
	}

	const price = Number(product.price);
	if (Number.isNaN(price)) {
		throw new Error("Price is not a number");
	}

	await executeGraphql({
		query: CartAddProductDocument,
		cache: "no-cache",
		next: {
			tags: ["cart"],
		},
		variables: {
			cartId,
			productId,
			quantity,
			total: quantity * price,
			publishedDate: new Date().toISOString(),
		},
	});
	// if (!graphqlResponse.createCartOrderItem?.data) return null;
	// const cartItemData = mapEntity<CartOrderItem>(graphqlResponse.createCartOrderItem.data as CartOrderItemEntity);

	// cartItemData.attributes.
	// const cartOrderItems = cartData.attributes.cart_order_items?.data.map((cartOrderItem) =>
	// 	mapEntity(cartOrderItem),
	// );

	// return mapCart(cartData, cartOrderItems);
};

export const getCartItemById = async (cartItemId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartItemGetByIdDocument,
		cache: "no-cache",
		next: {
			tags: ["cart"],
		},
		variables: {
			id: cartItemId,
		},
	});
	if (!graphqlResponse.cartOrderItem?.data) return null;

	const cartItemData = mapEntity<CartOrderItem>(
		graphqlResponse.cartOrderItem.data as CartOrderItemEntity,
	);

	return cartItemData;
};

export const changeCartItemQuantity = async (cartItemId: string, quantity: number) => {
	const cartItem = await getCartItemById(cartItemId);
	const productPrice = cartItem?.attributes.product?.data?.attributes?.price;

	if (!productPrice) {
		throw new Error("Product price is not defined");
	}

	const newTotal = Number(productPrice) * quantity;

	const graphqlResponse = await executeGraphql({
		query: CartSetItemQuantityDocument,
		cache: "no-cache",
		next: {
			tags: ["cart"],
		},
		variables: {
			itemId: cartItemId,
			quantity,
			total: newTotal,
		},
	});
	if (!graphqlResponse.updateCartOrderItem?.data) return null;

	const cartItemData = mapEntity<CartOrderItem>(
		graphqlResponse.updateCartOrderItem.data as CartOrderItemEntity,
	);

	return cartItemData;
};
