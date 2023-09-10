import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/atoms/Card";

export type ProductType = {
	id: number;
	name: string;
	price: string;
	image: {
		url: string;
		alt: string;
	};
};

export type ProductItemProps = {
	product: ProductType;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	const { name, price, image } = product;
	return (
		<Card>
			<CardHeader>
				<Image src={image.url} alt={image.alt} width={200} height={200} />
			</CardHeader>
			<CardContent>
				<CardTitle>{name}</CardTitle>
				<CardDescription>{price}</CardDescription>
			</CardContent>
		</Card>
	);
};
