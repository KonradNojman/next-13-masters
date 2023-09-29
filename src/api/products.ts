// import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import { mapEntity } from "./utils";
import {
	type ProductEntity,
	ProductsGetListDocument,
	type Product,
	ProductsGetListPaginatedDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { type ProductType } from "@/ui/molecules/ProductItem";

export interface ProductResponseItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
}

export interface Rating {
	rate: number;
	count: number;
}

const productResponseItemToProductType = (product: {
	id: string;
	attributes: Product;
}): ProductType => {
	const image = product.attributes.images?.data[0]?.attributes?.url;
	return {
		id: product.id,
		name: product.attributes.name,
		price: product.attributes.price.toString(),
		description: product.attributes.description || "",
		image: image
			? {
					url: product.attributes.images?.data[0]?.attributes?.url || "",
					alt: product.attributes.images?.data[0]?.attributes?.alternativeText || "",
			  }
			: undefined,
	};
};

const oldProductResponseItemToProductType = (product: ProductResponseItem): ProductType => {
	return {
		id: product.id,
		name: product.title,
		price: product.price.toString(),
		description: product.description,
		image: {
			url: product.image,
			alt: product.title,
		},
	};
};

export const getProductList = async () => {
	// const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	const mappedGqlResponse = graphqlResponse.products?.data.map((product) =>
		mapEntity<Product>(product as ProductEntity),
	);

	if (!mappedGqlResponse) return [];

	// const products = mappedGqlResponse?.map((product) => {
	// 	return {
	// 		id: product.id,
	// 		name: product.attributes.name,
	// 		price: product.attributes.price,
	// 		description: product.attributes.description,
	// 		image: {
	// 			url: product.attributes.images?.data[0]?.attributes?.url,
	// 			alt: product.attributes.images?.data[0]?.attributes?.alternativeText,
	// 		},
	// 	};
	// });

	return mappedGqlResponse.map(productResponseItemToProductType);
};

// export const getPaginatedProductList = async (take: number = 20, offset: number = 0) => {
export const getPaginatedProductList = async (take: number = 20, offset: number = 0) => {
	const graphqlResponse = await executeGraphql(ProductsGetListPaginatedDocument, {
		page: offset,
		pageSize: take,
	});
	const mappedGqlResponse = graphqlResponse.products?.data.map((product) =>
		mapEntity<Product>(product as ProductEntity),
	);

	const pagination = graphqlResponse.products?.meta.pagination;

	if (!mappedGqlResponse) return { products: [], pagination: pagination ? pagination : undefined };

	// const response = await fetch("", {
	// 	method: "POST",
	// 	body: JSON.stringify(/* GraphQL */ `
	// 	query GetProductsList {
	// 		products(first: 10) {
	// 			id
	// 			name
	// 			description
	// 			images {
	// 				url
	// 			}
	// 			price
	// 		}
	// 	`),
	// 	headers: { "Content-Type": "application/json" },
	// });

	// const gqlRes =  graphqlResponse;

	// const res = await fetch(
	// 	`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	// );
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map(productResponseItemToProductType);
	return {
		products: mappedGqlResponse.map(productResponseItemToProductType),
		pagination: pagination ? pagination : undefined,
	};
};

// export const getProductListByCategorySlug = async (categorySlug: string) => {
// 	const graphqlResponse = await executeGraphql(ProductGetByCategorySlugDocument, {
// 		slug: categorySlug,
// 	});

// 	const products = graphqlResponse.categories[0]?.products;
// 	// const products = graphqlResponse.products.map(productResponseItemToProductType);

// 	if (!products) {
// 		throw notFound();
// 	}

// 	return products.map(productResponseItemToProductType);
// };

export const getProductById = async (id: string): Promise<ProductType | null> => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });
	if (!graphqlResponse.product?.data) return null;

	const mappedGqlResponse = mapEntity<Product>(graphqlResponse.product.data as ProductEntity);

	return productResponseItemToProductType(mappedGqlResponse);

	// const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	// const productsResponse = (await res.json()) as ProductResponseItem;

	// return oldProductResponseItemToProductType(productsResponse);
};
