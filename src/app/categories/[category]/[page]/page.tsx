import { type Metadata } from "next";
import { getPaginatedProductListByCategory } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/organisms/Pagination";

// const capitalizeFirstLetter = (text: string) => {
// 	const [firstLetter, ...rest] = [...text];
// 	const capitalizedText = `${firstLetter?.toUpperCase()}${rest.join("")}`;
// 	return capitalizedText;
// };

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; page: string };
}): Promise<Metadata> => {
	return {
		title: `${params.category} - Shop`,
	};
};

export default async function ProductsPaginationPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	const DEFAULT_PAGINATION = 4;
	const currentPage = parseInt(params.page);

	const { products, pagination } = await getPaginatedProductListByCategory(
		params.category,
		DEFAULT_PAGINATION,
		currentPage,
	);

	const pageCount = pagination?.pageCount || 1;

	return (
		<div>
			<h1>Category: {params.category}</h1>
			<ProductList products={products} />
			<div className="mt-6 flex justify-center gap-2">
				<Pagination
					currentPage={currentPage}
					amountOfPages={pageCount}
					redirectUrl={`/categories/${params.category}`}
				/>
			</div>
		</div>
	);
}
