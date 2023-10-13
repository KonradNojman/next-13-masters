import { executeGraphql } from "./graphqlApi";
import { mapEntity } from "./utils";
import { productResponseItemToProductType } from "./products";
import {
	CollectionGetListDocument,
	type CollectionGetListQuery,
	type Product,
	type ProductEntity,
	CollectionGetProductListByCollectionIdDocument,
} from "@/gql/graphql";

export type CollectionItemGQLType = NonNullable<CollectionGetListQuery["collections"]>["data"][0];
export type CollectionItemType = {
	id: NonNullable<CollectionItemGQLType["id"]>;
	name: NonNullable<CollectionItemGQLType["attributes"]>["name"];
	slug: NonNullable<CollectionItemGQLType["attributes"]>["slug"];
	image: {
		url: NonNullable<
			NonNullable<
				NonNullable<CollectionItemGQLType["attributes"]>["cover_image"]["data"]
			>["attributes"]
		>["url"];
		alt: NonNullable<
			NonNullable<
				NonNullable<
					NonNullable<CollectionItemGQLType["attributes"]>["cover_image"]["data"]
				>["attributes"]
			>["alternativeText"]
		>;
	};
};

export const getCollectionList = async (): Promise<CollectionItemType[]> => {
	const graphqlResponse = await executeGraphql({ query: CollectionGetListDocument });
	const mappedGqlResponse = graphqlResponse.collections?.data.map((collection) =>
		mapEntity(collection),
	);

	if (!mappedGqlResponse) return [];

	return mappedGqlResponse.map((collection) => ({
		id: collection.id,
		name: collection.attributes.name,
		slug: collection.attributes.slug,
		image: {
			url: collection.attributes.cover_image.data?.attributes?.url || "",
			alt: collection.attributes.cover_image.data?.attributes?.alternativeText || "",
		},
	}));
};

export const getProductListByCollectionId = async (collectionId: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetProductListByCollectionIdDocument,
		variables: {
			collectionId,
		},
	});
	if (!graphqlResponse.collection?.data?.attributes) return { collectionName: "", products: [] };

	const mappedProducts = graphqlResponse.collection?.data?.attributes.products?.data.map(
		(product) => mapEntity<Product>(product as ProductEntity),
	);

	const collectionName = graphqlResponse.collection.data.attributes.name;

	if (!mappedProducts) return { collectionName, products: [] };

	return { collectionName, products: mappedProducts.map(productResponseItemToProductType) };
};
