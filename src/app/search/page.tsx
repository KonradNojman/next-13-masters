import { type Metadata } from "next";
import { getProductSearch } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type TSearchPaginationPage = {
	searchParams: {
		query: string;
	};
};

export const metadata: Metadata = {
	title: "Awesome Search",
};

export default async function SearchPaginationPage({ searchParams }: TSearchPaginationPage) {
	const products = await getProductSearch(searchParams.query);

	if (products.length === 0) {
		return <h1>No products found</h1>;
	}

	return (
		<>
			Search: {searchParams.query}
			<ProductList products={products} />
		</>
	);
}
