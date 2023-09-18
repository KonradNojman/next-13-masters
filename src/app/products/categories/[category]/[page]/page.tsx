// import { getPaginatedProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
// import { Pagination } from "@/ui/organisms/Pagination";

import { getProductListByCategorySlug } from "@/api/products";

export default async function ProductsCategoryPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	// const PRODUCTS = 200;
	// const DEFAULT_PAGINATION = 4;

	// const currentPage = parseInt(params.page);

	// const currentOffset = (parseInt(params.page) - 1) * DEFAULT_PAGINATION;

	const products = await getProductListByCategorySlug(params.category);

	return (
		<div>
			test {params.category} {params.page}
			<ProductList products={products} />
			{/*<div className="mt-6 flex justify-center gap-2">
				<Pagination
					currentPage={currentPage}
					itemsAmount={PRODUCTS}
					itemsPerPage={DEFAULT_PAGINATION}
					redirectUrl="/products"
				/>
			</div> */}
		</div>
	);
}
