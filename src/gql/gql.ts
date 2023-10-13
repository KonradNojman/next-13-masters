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
    "mutation CartAddProduct($cartId: ID!, $productId: ID!, $publishedDate: DateTime!, $quantity: Int!, $total: Int!) {\n  createCartOrderItem(\n    data: {quantity: $quantity, total: $total, cart_order: $cartId, product: $productId, publishedAt: $publishedDate}\n  ) {\n    data {\n      id\n      attributes {\n        quantity\n        total\n        product {\n          data {\n            id\n          }\n        }\n        cart_order {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate($publishedDate: DateTime!) {\n  createCartOrder(data: {publishedAt: $publishedDate}) {\n    data {\n      ...Cart\n    }\n  }\n}": types.CartCreateDocument,
    "fragment Cart on CartOrderEntity {\n  id\n  attributes {\n    cart_order_items {\n      data {\n        ...CartOrderItemFragment\n      }\n    }\n  }\n}": types.CartFragmentDoc,
    "query CartGetById($cartId: ID!) {\n  cartOrder(id: $cartId) {\n    data {\n      ...Cart\n    }\n  }\n}": types.CartGetByIdDocument,
    "query CartItemGetById($id: ID!) {\n  cartOrderItem(id: $id) {\n    data {\n      id\n      attributes {\n        total\n        product {\n          data {\n            attributes {\n              price\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CartItemGetByIdDocument,
    "fragment CartOrderItemFragment on CartOrderItemEntity {\n  id\n  attributes {\n    quantity\n    total\n    product {\n      data {\n        id\n        attributes {\n          name\n          price\n          images(pagination: {page: 1, pageSize: 1}) {\n            data {\n              attributes {\n                alternativeText\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CartOrderItemFragmentFragmentDoc,
    "mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!, $total: Int!) {\n  updateCartOrderItem(id: $itemId, data: {quantity: $quantity, total: $total}) {\n    data {\n      id\n      attributes {\n        quantity\n      }\n    }\n  }\n}": types.CartSetItemQuantityDocument,
    "query CategoryGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n      }\n    }\n  }\n}": types.CategoryGetListDocument,
    "query CollectionGetList {\n  collections {\n    data {\n      id\n      attributes {\n        name\n        slug\n        cover_image {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CollectionGetListDocument,
    "query CollectionGetProductListByCollectionId($collectionId: ID!) {\n  collection(id: $collectionId) {\n    data {\n      attributes {\n        name\n        products {\n          data {\n            ...ProductListItem\n          }\n        }\n      }\n    }\n  }\n}": types.CollectionGetProductListByCollectionIdDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        price\n        description\n        seo_description\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    avg_rating\n    description\n    images {\n      data {\n        id\n        attributes {\n          url\n          alternativeText\n          width\n          height\n        }\n      }\n    }\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductSearch($query: String!) {\n  products(filters: {name: {containsi: $query}}) {\n    data {\n      id\n      ...ProductListItem\n    }\n  }\n}": types.ProductSearchDocument,
    "query ProductsGetList {\n  products {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategoryPaginated($categoryName: String!, $page: Int!, $pageSize: Int!) {\n  products(\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: {category: {name: {containsi: $categoryName}}}\n  ) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}": types.ProductsGetListByCategoryPaginatedDocument,
    "query ProductsGetListPaginated($page: Int!, $pageSize: Int!, $sort: [String]) {\n  products(pagination: {page: $page, pageSize: $pageSize}, sort: $sort) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}": types.ProductsGetListPaginatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($cartId: ID!, $productId: ID!, $publishedDate: DateTime!, $quantity: Int!, $total: Int!) {\n  createCartOrderItem(\n    data: {quantity: $quantity, total: $total, cart_order: $cartId, product: $productId, publishedAt: $publishedDate}\n  ) {\n    data {\n      id\n      attributes {\n        quantity\n        total\n        product {\n          data {\n            id\n          }\n        }\n        cart_order {\n          data {\n            id\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($publishedDate: DateTime!) {\n  createCartOrder(data: {publishedAt: $publishedDate}) {\n    data {\n      ...Cart\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on CartOrderEntity {\n  id\n  attributes {\n    cart_order_items {\n      data {\n        ...CartOrderItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($cartId: ID!) {\n  cartOrder(id: $cartId) {\n    data {\n      ...Cart\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartItemGetById($id: ID!) {\n  cartOrderItem(id: $id) {\n    data {\n      id\n      attributes {\n        total\n        product {\n          data {\n            attributes {\n              price\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartItemGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartOrderItemFragment on CartOrderItemEntity {\n  id\n  attributes {\n    quantity\n    total\n    product {\n      data {\n        id\n        attributes {\n          name\n          price\n          images(pagination: {page: 1, pageSize: 1}) {\n            data {\n              attributes {\n                alternativeText\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartOrderItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!, $total: Int!) {\n  updateCartOrderItem(id: $itemId, data: {quantity: $quantity, total: $total}) {\n    data {\n      id\n      attributes {\n        quantity\n      }\n    }\n  }\n}"): typeof import('./graphql').CartSetItemQuantityDocument;
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
export function graphql(source: "query CollectionGetProductListByCollectionId($collectionId: ID!) {\n  collection(id: $collectionId) {\n    data {\n      attributes {\n        name\n        products {\n          data {\n            ...ProductListItem\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetProductListByCollectionIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      id\n      attributes {\n        name\n        price\n        description\n        seo_description\n        category {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              url\n              alternativeText\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    name\n    price\n    avg_rating\n    description\n    images {\n      data {\n        id\n        attributes {\n          url\n          alternativeText\n          width\n          height\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductSearch($query: String!) {\n  products(filters: {name: {containsi: $query}}) {\n    data {\n      id\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductSearchDocument;
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
export function graphql(source: "query ProductsGetListPaginated($page: Int!, $pageSize: Int!, $sort: [String]) {\n  products(pagination: {page: $page, pageSize: $pageSize}, sort: $sort) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListPaginatedDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
