import { type } from "os";
import { executeGraphql } from "./graphqlApi";
import { mapEntity } from "./utils";
import { productResponseItemToProductType } from "./products";
import {
	CollectionGetListDocument,
	type CollectionGetListQuery,
	CollectionGetProductsDocument,
	type Product,
	type ProductEntity,
	CollectionGetProductListByCollectionIdDocument,
} from "@/gql/graphql";

// const collectionResponseItemToType = (collection: { id: string; attributes: Collection }) => {
// 	return {
// 		name: collection.attributes.name,
// 		slug: collection.attributes.slug,
// 		image: {
// 			url: collection.attributes.cover_image.data?.attributes?.url,
// 			alt: collection.attributes.cover_image.data?.attributes?.alternativeText,
// 		},
// 		description: collection.attributes.description || "",
// 		products: collection.attributes.products,
// 	};
// };

// export type CollectionItemType = Pick<NonNullable<NonNullable<CollectionGetListQuery['collections']>['data'][0]['attributes']>, 'name' | 'cover_image' | "slug">
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
	const graphqlResponse = await executeGraphql(CollectionGetListDocument, {});
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

// @Todo: add collection data to display on the page.
export const getProductListByCollectionId = async (collectionId: string) => {
	const graphqlResponse = await executeGraphql(CollectionGetProductListByCollectionIdDocument, {
		collectionId,
	});
	if (!graphqlResponse.collection?.data?.attributes) return [];

	const mappedProducts = graphqlResponse.collection?.data?.attributes.products?.data.map(
		(product) => mapEntity<Product>(product as ProductEntity),
	);

	if (!mappedProducts) return [];

	return mappedProducts.map(productResponseItemToProductType);

	// if (!mappedGqlResponse) return [];

	// const x = mappedGqlResponse.map((collection) => {
	// 	const mappedProducts = collection.attributes.products?.data.map((product) =>
	// 		mapEntity<Product>(product as ProductEntity),
	// 	);
	// });

	// return {
	// 	products: mappedGqlResponse.map(productResponseItemToProductType),
	// 	pagination: pagination ? pagination : undefined,
	// };
};
