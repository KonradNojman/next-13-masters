import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByCategorySlugDocument,
	ProductsGetListDocument,
	type ProductsGetListQuery,
} from "@/gql/graphql";
import { type ProductType } from "@/ui/molecules/ProductItem";

export interface ProductResponseItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
}

export interface Rating {
	rate: number;
	count: number;
}

const productResponseItemToProductType = (
	product: ProductsGetListQuery["products"][0],
): ProductType => {
	return {
		id: product.id,
		name: product.name,
		price: product.price.toString(),
		description: product.description,
		category: product.categories[0]?.name || "",
		image: product.images[0] && {
			url: product.images[0]?.url || "",
			alt: product.name,
		},
	};
};

const oldProductResponseItemToProductType = (product: ProductResponseItem): ProductType => {
	return {
		id: product.id,
		name: product.title,
		price: product.price.toString(),
		description: product.description,
		image: {
			url: product.image,
			alt: product.title,
		},
	};
};

export const getProductList = async () => {
	// const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	const products = graphqlResponse.products.map(productResponseItemToProductType);

	return products;
};

// export const getPaginatedProductList = async (take: number = 20, offset: number = 0) => {
export const getPaginatedProductList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	// const response = await fetch("", {
	// 	method: "POST",
	// 	body: JSON.stringify(/* GraphQL */ `
	// 	query GetProductsList {
	// 		products(first: 10) {
	// 			id
	// 			name
	// 			description
	// 			images {
	// 				url
	// 			}
	// 			price
	// 		}
	// 	`),
	// 	headers: { "Content-Type": "application/json" },
	// });

	// const gqlRes =  graphqlResponse;

	// const res = await fetch(
	// 	`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	// );
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map(productResponseItemToProductType);
	const products = graphqlResponse.products.map(productResponseItemToProductType);

	return products;
};

export const getProductListByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductGetByCategorySlugDocument, {
		slug: categorySlug,
	});

	const products = graphqlResponse.categories[0]?.products;
	// const products = graphqlResponse.products.map(productResponseItemToProductType);

	if (!products) {
		throw notFound();
	}

	return products.map(productResponseItemToProductType);
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductType> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductResponseItem;

	return oldProductResponseItemToProductType(productsResponse);
};
