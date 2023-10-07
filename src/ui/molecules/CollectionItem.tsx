import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/atoms/Card";
import { type CollectionItemType } from "@/api/collections";

export const CollectionItem = ({ collection }: { collection: CollectionItemType }) => {
	const { name, image } = collection;
	return (
		<Card>
			<CardHeader className="flex h-60 w-full items-center justify-center overflow-hidden">
				{image && (
					<Image
						src={image.url}
						alt={image.alt}
						width={400}
						height={250}
						className="h-60 overflow-hidden object-cover"
					/>
				)}
			</CardHeader>
			<CardContent>
				<CardTitle>{name}</CardTitle>
			</CardContent>
		</Card>
	);
};
