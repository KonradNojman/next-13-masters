import { executeGraphql } from "./graphqlApi";
import { mapEntity } from "./utils";
import { CategoryGetListDocument } from "@/gql/graphql";

export const getCategoryList = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoryGetListDocument });
	const mappedGqlResponse = graphqlResponse.categories?.data.map((category) => mapEntity(category));

	if (!mappedGqlResponse) return [];

	return mappedGqlResponse.map((category) => ({
		id: category.id,
		name: category.attributes.name,
	}));
};
