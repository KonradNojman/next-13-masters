import { ProductItem, type ProductType } from "@/ui/molecules/ProductItem";

export type ProductListProps = {
	products: ProductType[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul data-testid="products-list" className="grid grid-cols-4 gap-3 py-4">
			{products.map((product) => (
				<li key={product.id}>
					<ProductItem product={product} />
				</li>
			))}
		</ul>
	);
};
