import { Suspense } from "react";
import { type Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";
import { getProductById, getProductList } from "@/api/products";
// import { ProductItem } from "@/ui/molecules/ProductItem";
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
	if (!product) return {};

	return {
		title: `${product.name} - Shop`,
		description: product.seoDescription,
		openGraph: {
			title: `${product.name} - Shop`,
			description: product.seoDescription,
			images: [{ url: product.image?.url || "", alt: product.image?.alt || "" }],
		},
	};
};

export default async function SingleProductPage({
	params, // searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	// const product = await getProductById(params.productId);
	const product = await getProductById(params.productId);
	if (!product) return null;

	const { name, description, price, image } = product;

	// const referral = searchParams.referral?.toString();
	return (
		<div>
			{/* <ProductItem product={product} /> */}
			<div>
				{image && (
					<div className="flex h-52 w-52 items-center justify-center overflow-hidden">
						<Image src={image.url} alt={image.alt} width={200} height={200} />
					</div>
				)}
				<div>
					<h1>{name}</h1>
					<p>{price}</p>
					<div className="prose-md prose">
						<Markdown>{description}</Markdown>
					</div>
				</div>
			</div>

			<aside>
				<div className="prose-md prose">
					<h2>Suggested Products</h2>
				</div>
				<Suspense>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</div>
	);
}
