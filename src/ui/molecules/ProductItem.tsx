import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/atoms/Card";
import { formatMoney } from "@/lib/utils";

export type ProductType = {
	id: string;
	name: string;
	price: string;
	avgRating: number;
	description: string;
	seoDescription?: string;
	category?: string;
	image?: {
		url: string;
		alt: string;
	};
};

export type ProductItemProps = {
	product: ProductType;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	const { name, price, avgRating, image } = product;
	return (
		<Card>
			<CardHeader className="flex h-52 w-52 items-center justify-center overflow-hidden">
				{image && <Image src={image.url} alt={image.alt} width={200} height={200} />}
			</CardHeader>
			<CardContent>
				<CardTitle>{name}</CardTitle>
				<CardDescription>
					Price: <span data-testid="product-price">{formatMoney(Number(price))}</span>
				</CardDescription>
				<CardDescription>
					Rating: <span data-testid="product-rating">{avgRating}</span>
				</CardDescription>
			</CardContent>
		</Card>
	);
};
