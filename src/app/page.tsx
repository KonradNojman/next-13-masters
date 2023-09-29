import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
// import { Camera } from "lucide-react";

export default async function HomePage() {
	const products = await getProductList();

	return (
		<div>
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
