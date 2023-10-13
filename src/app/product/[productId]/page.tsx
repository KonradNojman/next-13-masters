import { Suspense } from "react";
import { type Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";
import { revalidateTag } from "next/cache";
import { getProductById } from "@/api/products";
// import { ProductItem } from "@/ui/molecules/ProductItem";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { Button } from "@/ui/atoms/Button";
import { formatMoney } from "@/lib/utils";
import { addProductToCart } from "@/api/cart";
import { getOrCreateCart } from "@/api/actions";
import { CustomLabel } from "@/ui/atoms/CustomLabel";
import { InputWithLabel } from "@/ui/molecules/InputWithLabel";
import { CustomTextarea } from "@/ui/atoms/CustomTextarea";

// export const generateStaticParams = async () => {
// 	const products = await getProductList();
// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
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
	const product = await getProductById(params.productId);
	if (!product) return null;

	const { name, description, price, image } = product;

	async function addProductToCartAction(_form: FormData) {
		"use server";
		// console.log("product name", _form.get("productId"));
		const quantity = Number(_form.get("quantity")?.toString());
		const cart = await getOrCreateCart();
		await addProductToCart({ cartId: cart.id, productId: params.productId, quantity });
		revalidateTag("cart");
	}

	return (
		<div>
			<div className="grid grid-cols-2 ">
				<div>
					{image && (
						<div className="flex h-52 w-52 items-center justify-center overflow-hidden">
							<Image src={image.url} alt={image.alt} width={200} height={200} />
						</div>
					)}
					<div>
						<h1>{name}</h1>
						<p>{formatMoney(Number(price))}</p>
						{/* <p>{formatMoney() price}</p> */}
						<div className="prose-md prose">
							<Markdown>{description}</Markdown>
						</div>
						<form action={addProductToCartAction}>
							<input type="hidden" name="quantity" value={1} />
							<Button type="submit" className="mt-6" data-testid="add-to-cart-button">
								Add to Cart
							</Button>
						</form>
					</div>
				</div>
				<div>
					<form data-testid="add-review-form">
						<InputWithLabel name="name" label="Name" type="text" placeholder="Your Name" />
						<InputWithLabel name="email" label="Email" type="email" placeholder="Your Email" />
						<InputWithLabel name="headline" label="Headline" type="text" placeholder="Headline" />
						<InputWithLabel
							name="rating"
							label="Rating"
							type="number"
							min={1}
							max={5}
							placeholder=""
						/>

						<CustomLabel htmlFor="content">Content</CustomLabel>
						<CustomTextarea id="content" name="content" />
					</form>
				</div>
			</div>

			<aside className="mt-10">
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
