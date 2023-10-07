import Image from "next/image";
import { getCollectionList } from "@/api/collections";
import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { CollectionList } from "@/ui/organisms/CollectionList";
// import { Camera } from "lucide-react";

export default async function HomePage() {
	const products = await getProductList();
	const collections = await getCollectionList();

	return (
		<div>
			<h2>Collections</h2>
			<CollectionList collections={collections} />

			<h2>Products</h2>
			<ProductList products={products} />
		</div>
	);
	// return (
	// 	<div>
	// 		<Camera className="text-blue-600" size={48} />
	// 		Index Page
	// 	</div>
	// );
}
