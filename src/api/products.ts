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

const productResponseItemToProductType = (product: ProductResponseItem): ProductType => {
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
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductType);

	return products;
};

export const getPaginatedProductList = async (take: number = 20, offset: number = 0) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductType> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductType(productsResponse);
};
