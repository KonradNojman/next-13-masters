/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n      }\n    }\n  }\n}": types.CategoryGetListDocument,
    "query CollectionGetList {\n  collections {\n    data {\n      id\n      attributes {\n        name\n        slug\n        cover_image {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CollectionGetListDocument,
    "query CollectionGetProductListByCollectionId($collectionId: ID!) {\n  collection(id: $collectionId) {\n    data {\n      attributes {\n        products {\n          data {\n            ...ProductListItem\n          }\n        }\n      }\n    }\n  }\n}": types.CollectionGetProductListByCollectionIdDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        price\n        description\n        seo_description\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    description\n    images {\n      data {\n        id\n        attributes {\n          url\n          alternativeText\n          width\n          height\n        }\n      }\n    }\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategoryPaginated($categoryName: String!, $page: Int!, $pageSize: Int!) {\n  products(\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {name: {containsi: $categoryName}}}\n  ) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}": types.ProductsGetListByCategoryPaginatedDocument,
    "query ProductsGetListPaginated($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}": types.ProductsGetListPaginatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    data {\n      id\n      attributes {\n        name\n        slug\n        cover_image {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetProductListByCollectionId($collectionId: ID!) {\n  collection(id: $collectionId) {\n    data {\n      attributes {\n        products {\n          data {\n            ...ProductListItem\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetProductListByCollectionIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        price\n        description\n        seo_description\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    description\n    images {\n      data {\n        id\n        attributes {\n          url\n          alternativeText\n          width\n          height\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategoryPaginated($categoryName: String!, $page: Int!, $pageSize: Int!) {\n  products(\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {name: {containsi: $categoryName}}}\n  ) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByCategoryPaginatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListPaginated($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListPaginatedDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
