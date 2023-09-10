import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/atoms/Card";

const products = [
	{
		id: 1,
		name: "Product 1",
		price: "$100",
		image: {
			url: "https://picsum.photos/200",
			alt: "Product 1",
		},
	},
	{
		id: 2,
		name: "Product 2",
		price: "$100",
		image: {
			url: "https://picsum.photos/300",
			alt: "Product 2",
		},
	},
	{
		id: 3,
		name: "Product 3",
		price: "$100",
		image: {
			url: "https://picsum.photos/400",
			alt: "Product 3",
		},
	},
	{
		id: 4,
		name: "Product 4",
		price: "$100",
		image: {
			url: "https://picsum.photos/500",
			alt: "Product 4",
		},
	},
];

export default function Page() {
	return (
		<div className="bg-slate h-screen w-screen bg-white p-6 text-white">
			<ul data-testid="products-list" className="grid grid-cols-4 gap-3 py-4">
				{products.map(({ id, name, price, image }) => (
					<li key={id}>
						<Card>
							<CardHeader>
								<Image src={image.url} alt={image.alt} width={200} height={200} />
							</CardHeader>
							<CardContent>
								<CardTitle>{name}</CardTitle>
								<CardDescription>{price}</CardDescription>
							</CardContent>
						</Card>
					</li>
				))}
			</ul>
		</div>
	);
}
