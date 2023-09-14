import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductList } from "@/api/products";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductList();
	return products.map((product) => ({
		productId: product.id,
	}));
};

// export const metadata: Metadata = {
// 	title: "Product",
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Shop`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Shop`,
			description: product.description,
			images: [{ url: product.image.url, alt: product.image.alt }],
		},
	};
};

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

			<aside>
				<Suspense>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</div>
	);
}
