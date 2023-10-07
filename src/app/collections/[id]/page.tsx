// import { type Metadata } from "next";
import { getProductListByCollectionId } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";

// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { category: string; page: string };
// }): Promise<Metadata> => {
// 	return {
// 		title: `${capitalizeFirstLetter(params.category)} - Shop`,
// 	};
// };

export default async function CollectionsPage({ params }: { params: { id: string } }) {
	const products = await getProductListByCollectionId(params.id);

	return (
		<div>
			<h1>Collection:</h1>
			<ProductList products={products} />
		</div>
	);
}
