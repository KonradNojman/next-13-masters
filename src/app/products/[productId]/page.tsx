import { getProductById } from "@/api/products";
import { ProductItem } from "@/ui/molecules/ProductItem";

export default async function SingleProductPage({
	params, // searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const product = await getProductById(params.productId);

	// const referral = searchParams.referral?.toString();
	return (
		<div>
			<ProductItem product={product} />
		</div>
	);
}
