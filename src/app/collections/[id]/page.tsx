// import { type Metadata } from "next";
import { type Metadata } from "next";
import { getProductListByCollectionId } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> => {
	const { collectionName } = await getProductListByCollectionId(params.id);
	return {
		title: `${collectionName} - Shop`,
	};
};

export default async function CollectionsPage({ params }: { params: { id: string } }) {
	const { collectionName, products } = await getProductListByCollectionId(params.id);

	return (
		<div>
			<h1>Collection: {collectionName}</h1>
			<ProductList products={products} />
		</div>
	);
}
