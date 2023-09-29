import { getPaginatedProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/organisms/Pagination";

export default async function ProductsPaginationPage({ params }: { params: { page: string } }) {
	// const PRODUCTS = 200;
	const DEFAULT_PAGINATION = 4;

	const currentPage = parseInt(params.page);

	// const currentOffset = (parseInt(params.page) - 1) * DEFAULT_PAGINATION;

	const { products, pagination } = await getPaginatedProductList(DEFAULT_PAGINATION, currentPage);

	const pageCount = pagination?.pageCount || 1;

	return (
		<div>
			<ProductList products={products} />
			<div className="mt-6 flex justify-center gap-2">
				<Pagination currentPage={currentPage} amountOfPages={pageCount} redirectUrl="/products" />
			</div>
		</div>
	);
}
