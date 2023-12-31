/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartOrder = {
  cart_order_items?: Maybe<CartOrderItemRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CartOrderCart_Order_ItemsArgs = {
  filters?: InputMaybe<CartOrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CartOrderEntity = {
  attributes?: Maybe<CartOrder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CartOrderEntityResponse = {
  data?: Maybe<CartOrderEntity>;
};

export type CartOrderEntityResponseCollection = {
  data: Array<CartOrderEntity>;
  meta: ResponseCollectionMeta;
};

export type CartOrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CartOrderFiltersInput>>>;
  cart_order_items?: InputMaybe<CartOrderItemFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CartOrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CartOrderFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CartOrderInput = {
  cart_order_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartOrderItem = {
  cart_order?: Maybe<CartOrderEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CartOrderItemEntity = {
  attributes?: Maybe<CartOrderItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CartOrderItemEntityResponse = {
  data?: Maybe<CartOrderItemEntity>;
};

export type CartOrderItemEntityResponseCollection = {
  data: Array<CartOrderItemEntity>;
  meta: ResponseCollectionMeta;
};

export type CartOrderItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CartOrderItemFiltersInput>>>;
  cart_order?: InputMaybe<CartOrderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CartOrderItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CartOrderItemFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  total?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CartOrderItemInput = {
  cart_order?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type CartOrderItemRelationResponseCollection = {
  data: Array<CartOrderItemEntity>;
};

export type Category = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  product_attribute_values?: Maybe<ProductAttributeValueRelationResponseCollection>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryProduct_Attribute_ValuesArgs = {
  filters?: InputMaybe<ProductAttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  product_attribute_values?: InputMaybe<ProductAttributeValueFiltersInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  product_attribute_values?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryRelationResponseCollection = {
  data: Array<CategoryEntity>;
};

export type Collection = {
  cover_image: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CollectionProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CollectionEntity = {
  attributes?: Maybe<Collection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CollectionEntityResponse = {
  data?: Maybe<CollectionEntity>;
};

export type CollectionEntityResponseCollection = {
  data: Array<CollectionEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectionInput = {
  cover_image?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = CartOrder | CartOrderItem | Category | Collection | I18NLocale | Product | ProductAttribute | ProductAttributeValue | ProductVariant | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VariantOptionSelection;

export type I18NLocale = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCartOrder?: Maybe<CartOrderEntityResponse>;
  createCartOrderItem?: Maybe<CartOrderItemEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCollection?: Maybe<CollectionEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createProductAttribute?: Maybe<ProductAttributeEntityResponse>;
  createProductAttributeValue?: Maybe<ProductAttributeValueEntityResponse>;
  createProductVariant?: Maybe<ProductVariantEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVariantOptionSelection?: Maybe<VariantOptionSelectionEntityResponse>;
  deleteCartOrder?: Maybe<CartOrderEntityResponse>;
  deleteCartOrderItem?: Maybe<CartOrderItemEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCollection?: Maybe<CollectionEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteProductAttribute?: Maybe<ProductAttributeEntityResponse>;
  deleteProductAttributeValue?: Maybe<ProductAttributeValueEntityResponse>;
  deleteProductVariant?: Maybe<ProductVariantEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVariantOptionSelection?: Maybe<VariantOptionSelectionEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCartOrder?: Maybe<CartOrderEntityResponse>;
  updateCartOrderItem?: Maybe<CartOrderItemEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCollection?: Maybe<CollectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateProductAttribute?: Maybe<ProductAttributeEntityResponse>;
  updateProductAttributeValue?: Maybe<ProductAttributeValueEntityResponse>;
  updateProductVariant?: Maybe<ProductVariantEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVariantOptionSelection?: Maybe<VariantOptionSelectionEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCartOrderArgs = {
  data: CartOrderInput;
};


export type MutationCreateCartOrderItemArgs = {
  data: CartOrderItemInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCollectionArgs = {
  data: CollectionInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateProductAttributeArgs = {
  data: ProductAttributeInput;
};


export type MutationCreateProductAttributeValueArgs = {
  data: ProductAttributeValueInput;
};


export type MutationCreateProductVariantArgs = {
  data: ProductVariantInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVariantOptionSelectionArgs = {
  data: VariantOptionSelectionInput;
};


export type MutationDeleteCartOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCartOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductAttributeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductAttributeValueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVariantOptionSelectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCartOrderArgs = {
  data: CartOrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCartOrderItemArgs = {
  data: CartOrderItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductAttributeArgs = {
  data: ProductAttributeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductAttributeValueArgs = {
  data: ProductAttributeValueInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductVariantArgs = {
  data: ProductVariantInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVariantOptionSelectionArgs = {
  data: VariantOptionSelectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  avg_rating?: Maybe<Scalars['Float']['output']>;
  cart_order_items?: Maybe<CartOrderItemRelationResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  collection?: Maybe<CollectionEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  product_variants?: Maybe<ProductVariantRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo_description?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCart_Order_ItemsArgs = {
  filters?: InputMaybe<CartOrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductProduct_VariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductAttribute = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product_attribute_values?: Maybe<ProductAttributeValueRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductAttributeProduct_Attribute_ValuesArgs = {
  filters?: InputMaybe<ProductAttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductAttributeEntity = {
  attributes?: Maybe<ProductAttribute>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductAttributeEntityResponse = {
  data?: Maybe<ProductAttributeEntity>;
};

export type ProductAttributeEntityResponseCollection = {
  data: Array<ProductAttributeEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductAttributeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductAttributeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductAttributeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductAttributeFiltersInput>>>;
  product_attribute_values?: InputMaybe<ProductAttributeValueFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductAttributeInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  product_attribute_values?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductAttributeValue = {
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  option_name: Scalars['String']['output'];
  product_attribute?: Maybe<ProductAttributeEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductAttributeValueCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductAttributeValueEntity = {
  attributes?: Maybe<ProductAttributeValue>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductAttributeValueEntityResponse = {
  data?: Maybe<ProductAttributeValueEntity>;
};

export type ProductAttributeValueEntityResponseCollection = {
  data: Array<ProductAttributeValueEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductAttributeValueFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductAttributeValueFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductAttributeValueFiltersInput>;
  option_name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ProductAttributeValueFiltersInput>>>;
  product_attribute?: InputMaybe<ProductAttributeFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductAttributeValueInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  option_name?: InputMaybe<Scalars['String']['input']>;
  product_attribute?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductAttributeValueRelationResponseCollection = {
  data: Array<ProductAttributeValueEntity>;
};

export type ProductEntity = {
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  avg_rating?: InputMaybe<FloatFilterInput>;
  cart_order_items?: InputMaybe<CartOrderItemFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  collection?: InputMaybe<CollectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price?: InputMaybe<IntFilterInput>;
  product_variants?: InputMaybe<ProductVariantFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo_description?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  avg_rating?: InputMaybe<Scalars['Float']['input']>;
  cart_order_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  category?: InputMaybe<Scalars['ID']['input']>;
  collection?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  product_variants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo_description?: InputMaybe<Scalars['String']['input']>;
};

export type ProductRelationResponseCollection = {
  data: Array<ProductEntity>;
};

export type ProductVariant = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sku: Scalars['String']['output'];
  stock_quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variant_option_selections?: Maybe<VariantOptionSelectionRelationResponseCollection>;
};


export type ProductVariantVariant_Option_SelectionsArgs = {
  filters?: InputMaybe<VariantOptionSelectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductVariantEntity = {
  attributes?: Maybe<ProductVariant>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductVariantEntityResponse = {
  data?: Maybe<ProductVariantEntity>;
};

export type ProductVariantEntityResponseCollection = {
  data: Array<ProductVariantEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductVariantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductVariantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
  stock_quantity?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  variant_option_selections?: InputMaybe<VariantOptionSelectionFiltersInput>;
};

export type ProductVariantInput = {
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_quantity?: InputMaybe<Scalars['Int']['input']>;
  variant_option_selections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProductVariantRelationResponseCollection = {
  data: Array<ProductVariantEntity>;
};

export type PublicationState =
  | 'LIVE'
  | 'PREVIEW';

export type Query = {
  cartOrder?: Maybe<CartOrderEntityResponse>;
  cartOrderItem?: Maybe<CartOrderItemEntityResponse>;
  cartOrderItems?: Maybe<CartOrderItemEntityResponseCollection>;
  cartOrders?: Maybe<CartOrderEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  collection?: Maybe<CollectionEntityResponse>;
  collections?: Maybe<CollectionEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<ProductEntityResponse>;
  productAttribute?: Maybe<ProductAttributeEntityResponse>;
  productAttributeValue?: Maybe<ProductAttributeValueEntityResponse>;
  productAttributeValues?: Maybe<ProductAttributeValueEntityResponseCollection>;
  productAttributes?: Maybe<ProductAttributeEntityResponseCollection>;
  productVariant?: Maybe<ProductVariantEntityResponse>;
  productVariants?: Maybe<ProductVariantEntityResponseCollection>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  variantOptionSelection?: Maybe<VariantOptionSelectionEntityResponse>;
  variantOptionSelections?: Maybe<VariantOptionSelectionEntityResponseCollection>;
};


export type QueryCartOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCartOrderItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCartOrderItemsArgs = {
  filters?: InputMaybe<CartOrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCartOrdersArgs = {
  filters?: InputMaybe<CartOrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductAttributeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductAttributeValueArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductAttributeValuesArgs = {
  filters?: InputMaybe<ProductAttributeValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductAttributesArgs = {
  filters?: InputMaybe<ProductAttributeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductVariantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductVariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVariantOptionSelectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVariantOptionSelectionsArgs = {
  filters?: InputMaybe<VariantOptionSelectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

export type VariantOptionSelection = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  product_attribute_value?: Maybe<ProductAttributeValueEntityResponse>;
  product_variant?: Maybe<ProductVariantEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VariantOptionSelectionEntity = {
  attributes?: Maybe<VariantOptionSelection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VariantOptionSelectionEntityResponse = {
  data?: Maybe<VariantOptionSelectionEntity>;
};

export type VariantOptionSelectionEntityResponseCollection = {
  data: Array<VariantOptionSelectionEntity>;
  meta: ResponseCollectionMeta;
};

export type VariantOptionSelectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VariantOptionSelectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VariantOptionSelectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VariantOptionSelectionFiltersInput>>>;
  product_attribute_value?: InputMaybe<ProductAttributeValueFiltersInput>;
  product_variant?: InputMaybe<ProductVariantFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VariantOptionSelectionInput = {
  product_attribute_value?: InputMaybe<Scalars['ID']['input']>;
  product_variant?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VariantOptionSelectionRelationResponseCollection = {
  data: Array<VariantOptionSelectionEntity>;
};

export type CartAddProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  publishedDate: Scalars['DateTime']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
}>;


export type CartAddProductMutation = { createCartOrderItem?: { data?: { id?: string | null, attributes?: { quantity?: number | null, total: number, product?: { data?: { id?: string | null } | null } | null, cart_order?: { data?: { id?: string | null } | null } | null } | null } | null } | null };

export type CartCreateMutationVariables = Exact<{
  publishedDate: Scalars['DateTime']['input'];
}>;


export type CartCreateMutation = { createCartOrder?: { data?: { id?: string | null, attributes?: { cart_order_items?: { data: Array<{ id?: string | null, attributes?: { quantity?: number | null, total: number, product?: { data?: { id?: string | null, attributes?: { name: string, price: number, images?: { data: Array<{ attributes?: { alternativeText?: string | null, url: string } | null }> } | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type CartFragment = { id?: string | null, attributes?: { cart_order_items?: { data: Array<{ id?: string | null, attributes?: { quantity?: number | null, total: number, product?: { data?: { id?: string | null, attributes?: { name: string, price: number, images?: { data: Array<{ attributes?: { alternativeText?: string | null, url: string } | null }> } | null } | null } | null } | null } | null }> } | null } | null };

export type CartGetByIdQueryVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cartOrder?: { data?: { id?: string | null, attributes?: { cart_order_items?: { data: Array<{ id?: string | null, attributes?: { quantity?: number | null, total: number, product?: { data?: { id?: string | null, attributes?: { name: string, price: number, images?: { data: Array<{ attributes?: { alternativeText?: string | null, url: string } | null }> } | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type CartItemGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartItemGetByIdQuery = { cartOrderItem?: { data?: { id?: string | null, attributes?: { total: number, product?: { data?: { attributes?: { price: number } | null } | null } | null } | null } | null } | null };

export type CartOrderItemFragmentFragment = { id?: string | null, attributes?: { quantity?: number | null, total: number, product?: { data?: { id?: string | null, attributes?: { name: string, price: number, images?: { data: Array<{ attributes?: { alternativeText?: string | null, url: string } | null }> } | null } | null } | null } | null } | null };

export type CartSetItemQuantityMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
}>;


export type CartSetItemQuantityMutation = { updateCartOrderItem?: { data?: { id?: string | null, attributes?: { quantity?: number | null } | null } | null } | null };

export type CategoryGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryGetListQuery = { categories?: { data: Array<{ id?: string | null, attributes?: { name: string } | null }> } | null };

export type CollectionGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionGetListQuery = { collections?: { data: Array<{ id?: string | null, attributes?: { name: string, slug: string, cover_image: { data?: { attributes?: { url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type CollectionGetProductListByCollectionIdQueryVariables = Exact<{
  collectionId: Scalars['ID']['input'];
}>;


export type CollectionGetProductListByCollectionIdQuery = { collection?: { data?: { attributes?: { name: string, products?: { data: Array<{ id?: string | null, attributes?: { name: string, price: number, avg_rating?: number | null, description?: string | null, images?: { data: Array<{ id?: string | null, attributes?: { url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null }> } | null } | null } | null } | null };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { data?: { id?: string | null, attributes?: { name: string, price: number, description?: string | null, seo_description?: string | null, category?: { data?: { attributes?: { name: string } | null } | null } | null, images?: { data: Array<{ attributes?: { url: string, alternativeText?: string | null } | null }> } | null } | null } | null } | null };

export type ProductListItemFragment = { id?: string | null, attributes?: { name: string, price: number, avg_rating?: number | null, description?: string | null, images?: { data: Array<{ id?: string | null, attributes?: { url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null };

export type ProductSearchQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type ProductSearchQuery = { products?: { data: Array<{ id?: string | null, attributes?: { name: string, price: number, avg_rating?: number | null, description?: string | null, images?: { data: Array<{ id?: string | null, attributes?: { url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null }> } | null };

export type ProductsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetListQuery = { products?: { data: Array<{ id?: string | null, attributes?: { name: string, price: number, avg_rating?: number | null, description?: string | null, images?: { data: Array<{ id?: string | null, attributes?: { url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null }> } | null };

export type ProductsGetListByCategoryPaginatedQueryVariables = Exact<{
  categoryName: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type ProductsGetListByCategoryPaginatedQuery = { products?: { data: Array<{ id?: string | null, attributes?: { name: string, price: number, avg_rating?: number | null, description?: string | null, images?: { data: Array<{ id?: string | null, attributes?: { url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null }>, meta: { pagination: { pageCount: number } } } | null };

export type ProductsGetListPaginatedQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ProductsGetListPaginatedQuery = { products?: { data: Array<{ id?: string | null, attributes?: { name: string, price: number, avg_rating?: number | null, description?: string | null, images?: { data: Array<{ id?: string | null, attributes?: { url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null }>, meta: { pagination: { pageCount: number } } } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartOrderItemFragmentFragmentDoc = new TypedDocumentString(`
    fragment CartOrderItemFragment on CartOrderItemEntity {
  id
  attributes {
    quantity
    total
    product {
      data {
        id
        attributes {
          name
          price
          images(pagination: {page: 1, pageSize: 1}) {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}
    `, {"fragmentName":"CartOrderItemFragment"}) as unknown as TypedDocumentString<CartOrderItemFragmentFragment, unknown>;
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on CartOrderEntity {
  id
  attributes {
    cart_order_items {
      data {
        ...CartOrderItemFragment
      }
    }
  }
}
    fragment CartOrderItemFragment on CartOrderItemEntity {
  id
  attributes {
    quantity
    total
    product {
      data {
        id
        attributes {
          name
          price
          images(pagination: {page: 1, pageSize: 1}) {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}`, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    name
    price
    avg_rating
    description
    images {
      data {
        id
        attributes {
          url
          alternativeText
          width
          height
        }
      }
    }
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($cartId: ID!, $productId: ID!, $publishedDate: DateTime!, $quantity: Int!, $total: Int!) {
  createCartOrderItem(
    data: {quantity: $quantity, total: $total, cart_order: $cartId, product: $productId, publishedAt: $publishedDate}
  ) {
    data {
      id
      attributes {
        quantity
        total
        product {
          data {
            id
          }
        }
        cart_order {
          data {
            id
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($publishedDate: DateTime!) {
  createCartOrder(data: {publishedAt: $publishedDate}) {
    data {
      ...Cart
    }
  }
}
    fragment Cart on CartOrderEntity {
  id
  attributes {
    cart_order_items {
      data {
        ...CartOrderItemFragment
      }
    }
  }
}
fragment CartOrderItemFragment on CartOrderItemEntity {
  id
  attributes {
    quantity
    total
    product {
      data {
        id
        attributes {
          name
          price
          images(pagination: {page: 1, pageSize: 1}) {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($cartId: ID!) {
  cartOrder(id: $cartId) {
    data {
      ...Cart
    }
  }
}
    fragment Cart on CartOrderEntity {
  id
  attributes {
    cart_order_items {
      data {
        ...CartOrderItemFragment
      }
    }
  }
}
fragment CartOrderItemFragment on CartOrderItemEntity {
  id
  attributes {
    quantity
    total
    product {
      data {
        id
        attributes {
          name
          price
          images(pagination: {page: 1, pageSize: 1}) {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartItemGetByIdDocument = new TypedDocumentString(`
    query CartItemGetById($id: ID!) {
  cartOrderItem(id: $id) {
    data {
      id
      attributes {
        total
        product {
          data {
            attributes {
              price
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartItemGetByIdQuery, CartItemGetByIdQueryVariables>;
export const CartSetItemQuantityDocument = new TypedDocumentString(`
    mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!, $total: Int!) {
  updateCartOrderItem(id: $itemId, data: {quantity: $quantity, total: $total}) {
    data {
      id
      attributes {
        quantity
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartSetItemQuantityMutation, CartSetItemQuantityMutationVariables>;
export const CategoryGetListDocument = new TypedDocumentString(`
    query CategoryGetList {
  categories {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryGetListQuery, CategoryGetListQueryVariables>;
export const CollectionGetListDocument = new TypedDocumentString(`
    query CollectionGetList {
  collections {
    data {
      id
      attributes {
        name
        slug
        cover_image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionGetListQuery, CollectionGetListQueryVariables>;
export const CollectionGetProductListByCollectionIdDocument = new TypedDocumentString(`
    query CollectionGetProductListByCollectionId($collectionId: ID!) {
  collection(id: $collectionId) {
    data {
      attributes {
        name
        products {
          data {
            ...ProductListItem
          }
        }
      }
    }
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    name
    price
    avg_rating
    description
    images {
      data {
        id
        attributes {
          url
          alternativeText
          width
          height
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<CollectionGetProductListByCollectionIdQuery, CollectionGetProductListByCollectionIdQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    data {
      id
      attributes {
        name
        price
        description
        seo_description
        category {
          data {
            attributes {
              name
            }
          }
        }
        images {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductSearchDocument = new TypedDocumentString(`
    query ProductSearch($query: String!) {
  products(filters: {name: {containsi: $query}}) {
    data {
      id
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    name
    price
    avg_rating
    description
    images {
      data {
        id
        attributes {
          url
          alternativeText
          width
          height
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductSearchQuery, ProductSearchQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList {
  products {
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    name
    price
    avg_rating
    description
    images {
      data {
        id
        attributes {
          url
          alternativeText
          width
          height
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByCategoryPaginatedDocument = new TypedDocumentString(`
    query ProductsGetListByCategoryPaginated($categoryName: String!, $page: Int!, $pageSize: Int!) {
  products(
    pagination: {page: $page, pageSize: $pageSize}
    filters: {category: {name: {containsi: $categoryName}}}
  ) {
    data {
      ...ProductListItem
    }
    meta {
      pagination {
        pageCount
      }
    }
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    name
    price
    avg_rating
    description
    images {
      data {
        id
        attributes {
          url
          alternativeText
          width
          height
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductsGetListByCategoryPaginatedQuery, ProductsGetListByCategoryPaginatedQueryVariables>;
export const ProductsGetListPaginatedDocument = new TypedDocumentString(`
    query ProductsGetListPaginated($page: Int!, $pageSize: Int!, $sort: [String]) {
  products(pagination: {page: $page, pageSize: $pageSize}, sort: $sort) {
    data {
      ...ProductListItem
    }
    meta {
      pagination {
        pageCount
      }
    }
  }
}
    fragment ProductListItem on ProductEntity {
  id
  attributes {
    name
    price
    avg_rating
    description
    images {
      data {
        id
        attributes {
          url
          alternativeText
          width
          height
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<ProductsGetListPaginatedQuery, ProductsGetListPaginatedQueryVariables>;