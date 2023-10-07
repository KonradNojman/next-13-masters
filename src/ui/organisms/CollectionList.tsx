import Link from "next/link";
import { CollectionItem } from "../molecules/CollectionItem";
import { type CollectionItemType } from "@/api/collections";

export const CollectionList = ({ collections }: { collections: CollectionItemType[] }) => {
	return (
		<ul data-testid="products-list" className="grid grid-cols-3 gap-3 py-4">
			{collections.map((collection) => (
				<li key={collection.id}>
					<Link href={`/collections/${collection.id}`}>
						<CollectionItem collection={collection} />
					</Link>
				</li>
			))}
		</ul>
	);
};
