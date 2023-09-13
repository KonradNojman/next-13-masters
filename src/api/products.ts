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
		image: {
			url: product.image,
			alt: product.title,
		},
	};
};

export const getProductList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductType> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductType(productsResponse);
};
