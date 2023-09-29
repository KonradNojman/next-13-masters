// import Image from "next/image";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/atoms/Card";
// import { type FragmentType, graphql, getFragmentData } from "@/gql";

// export type ProductType = {
// 	id: string;
// 	name: string;
// 	price: string;
// 	description: string;
// 	category?: string;
// 	image?: {
// 		url: string;
// 		alt: string;
// 	};
// };

// // const ProductListItemDescription_Product = graphql(/* GraphQL */ `
// // 	fragment ProductListItemDescription_Product on Product {
// // 		name
// // 		images(first: 1) {
// // 			url
// // 		}
// // 		price
// // 	}
// // `);

// export type ProductItemProps = {
// 	product: FragmentType<typeof ProductListItemDescription_Product>;
// };

// export const ProductItem = (props: ProductItemProps) => {
// 	const product = getFragmentData(ProductListItemDescription_Product, props.product);
// 	const { name, price, images } = product;
// 	return (
// 		<Card>
// 			<CardHeader className="flex h-52 w-52 items-center justify-center overflow-hidden">
// 				{images[0] && <Image src={images[0].url} alt={name} width={200} height={200} />}
// 			</CardHeader>
// 			<CardContent>
// 				<CardTitle>{name}</CardTitle>
// 				<CardDescription>{price}</CardDescription>
// 			</CardContent>
// 		</Card>
// 	);
// };
