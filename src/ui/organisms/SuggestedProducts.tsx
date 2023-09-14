import { ProductList } from "./ProductList";
import { getProductList } from "@/api/products";

const sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	await sleep(2000);
	const products = await getProductList();

	return <ProductList products={products.slice(-4)} />;
};