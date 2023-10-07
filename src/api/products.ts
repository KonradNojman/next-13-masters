// import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import { mapEntity } from "./utils";
import {
	type ProductEntity,
	ProductsGetListDocument,
	type Product,
	ProductsGetListPaginatedDocument,
	ProductGetByIdDocument,
	ProductsGetListByCategoryPaginatedDocument,
	ProductSearchDocument,
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

export const productResponseItemToProductType = (product: {
	id: string;
	attributes: Product;
}): ProductType => {
	const image = product.attributes.images?.data[0]?.attributes?.url;
	return {
		id: product.id,
		name: product.attributes.name,
		price: product.attributes.price.toString(),
		description: product.attributes.description || "",
		seoDescription: product.attributes.seo_description || "",
		image: image
			? {
					url: product.attributes.images?.data[0]?.attributes?.url || "",
					alt: product.attributes.images?.data[0]?.attributes?.alternativeText || "",
			  }
			: undefined,
	};
};

export const getProductList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	const mappedGqlResponse = graphqlResponse.products?.data.map((product) =>
		mapEntity<Product>(product as ProductEntity),
	);

	if (!mappedGqlResponse) return [];

	return mappedGqlResponse.map(productResponseItemToProductType);
};

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

	return {
		products: mappedGqlResponse.map(productResponseItemToProductType),
		pagination: pagination ? pagination : undefined,
	};
};

export const getPaginatedProductListByCategory = async (
	category: string,
	take: number = 20,
	offset: number = 0,
) => {
	const graphqlResponse = await executeGraphql(ProductsGetListByCategoryPaginatedDocument, {
		categoryName: category,
		page: offset,
		pageSize: take,
	});

	const mappedGqlResponse = graphqlResponse.products?.data.map((product) =>
		mapEntity<Product>(product as ProductEntity),
	);

	const pagination = graphqlResponse.products?.meta.pagination;

	if (!mappedGqlResponse) return { products: [], pagination: pagination ? pagination : undefined };

	return {
		products: mappedGqlResponse.map(productResponseItemToProductType),
		pagination: pagination ? pagination : undefined,
	};
};

export const getProductById = async (id: string): Promise<ProductType | null> => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });
	if (!graphqlResponse.product?.data) return null;

	const mappedGqlResponse = mapEntity<Product>(graphqlResponse.product.data as ProductEntity);

	return productResponseItemToProductType(mappedGqlResponse);
};

export const getProductSearch = async (query: string) => {
	const graphqlResponse = await executeGraphql(ProductSearchDocument, { query });
	const mappedGqlResponse = graphqlResponse.products?.data.map((product) =>
		mapEntity<Product>(product as ProductEntity),
	);

	if (!mappedGqlResponse) return [];

	return mappedGqlResponse.map(productResponseItemToProductType);
};
