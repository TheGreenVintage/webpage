import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BusinessEventsPageContentDynamicZoneInput: { input: any; output: any; }
  ContactPagePostcontentDynamicZoneInput: { input: any; output: any; }
  ContactPagePrecontentDynamicZoneInput: { input: any; output: any; }
  CorporativePartiesPageContentDynamicZoneInput: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  HomePageContentDynamicZoneInput: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  ManifestPageContentDynamicZoneInput: { input: any; output: any; }
  PostContentDynamicZoneInput: { input: any; output: any; }
  ProjectContentDynamicZoneInput: { input: any; output: any; }
  ProjectsPagePostcontentDynamicZoneInput: { input: any; output: any; }
  ProjectsPagePrecontentDynamicZoneInput: { input: any; output: any; }
  ReceptiveTripsPageContentDynamicZoneInput: { input: any; output: any; }
  ServicesPageContentDynamicZoneInput: { input: any; output: any; }
  SustainabilityPageContentDynamicZoneInput: { input: any; output: any; }
  TeamBuildingContentDynamicZoneInput: { input: any; output: any; }
  TeamBuildingsPagePostcontentDynamicZoneInput: { input: any; output: any; }
  TeamBuildingsPagePrecontentDynamicZoneInput: { input: any; output: any; }
  TeamPagePostcontentDynamicZoneInput: { input: any; output: any; }
  TeamPagePrecontentDynamicZoneInput: { input: any; output: any; }
};

export type Author = {
  __typename?: 'Author';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo: UploadFile;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  nodes: Array<Author>;
  pageInfo: Pagination;
};

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type BusinessEventsPage = {
  __typename?: 'BusinessEventsPage';
  content: Array<Maybe<BusinessEventsPageContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<BusinessEventsPage>>;
  localizations_connection?: Maybe<BusinessEventsPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BusinessEventsPageContentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type BusinessEventsPageInput = {
  content?: InputMaybe<Array<Scalars['BusinessEventsPageContentDynamicZoneInput']['input']>>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessEventsPageRelationResponseCollection = {
  __typename?: 'BusinessEventsPageRelationResponseCollection';
  nodes: Array<BusinessEventsPage>;
};

export type ComponentBlocksBigGallery = {
  __typename?: 'ComponentBlocksBigGallery';
  id: Scalars['ID']['output'];
  items: Array<Maybe<UploadFile>>;
  items_connection: UploadFileRelationResponseCollection;
};


export type ComponentBlocksBigGalleryItemsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlocksBigGalleryItems_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksCallToAction = {
  __typename?: 'ComponentBlocksCallToAction';
  background?: Maybe<UploadFile>;
  callToAction: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentBlocksCounters = {
  __typename?: 'ComponentBlocksCounters';
  counters: Array<Maybe<ComponentBlocksSubcount>>;
  id: Scalars['ID']['output'];
};


export type ComponentBlocksCountersCountersArgs = {
  filters?: InputMaybe<ComponentBlocksSubcountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksDoublePictureDetail = {
  __typename?: 'ComponentBlocksDoublePictureDetail';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items: Array<Maybe<ComponentBlocksSubservice>>;
  picture1: UploadFile;
  picture2: UploadFile;
  pretitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type ComponentBlocksDoublePictureDetailItemsArgs = {
  filters?: InputMaybe<ComponentBlocksSubserviceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksFaqItem = {
  __typename?: 'ComponentBlocksFaqItem';
  answer: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type ComponentBlocksFaqItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFaqItemFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksFaqItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFaqItemFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFaqs = {
  __typename?: 'ComponentBlocksFaqs';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<ComponentBlocksFaqItem>>>;
};


export type ComponentBlocksFaqsItemsArgs = {
  filters?: InputMaybe<ComponentBlocksFaqItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksGallery = {
  __typename?: 'ComponentBlocksGallery';
  id: Scalars['ID']['output'];
  images: Array<Maybe<UploadFile>>;
  images_connection: UploadFileRelationResponseCollection;
};


export type ComponentBlocksGalleryImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentBlocksGalleryImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksHero = {
  __typename?: 'ComponentBlocksHero';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pretitle?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Enum_Componentblockshero_Tag>;
  title: Scalars['String']['output'];
};

export type ComponentBlocksHeroGallery = {
  __typename?: 'ComponentBlocksHeroGallery';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items: Array<Maybe<ComponentBlocksHeroGalleryItem>>;
  pretitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type ComponentBlocksHeroGalleryItemsArgs = {
  filters?: InputMaybe<ComponentBlocksHeroGalleryItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksHeroGalleryItem = {
  __typename?: 'ComponentBlocksHeroGalleryItem';
  id: Scalars['ID']['output'];
  image: UploadFile;
  tag?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksHeroGalleryItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksHeroGalleryItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksHeroGalleryItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksHeroGalleryItemFiltersInput>>>;
  tag?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksHeroSlide = {
  __typename?: 'ComponentBlocksHeroSlide';
  id: Scalars['ID']['output'];
  picture: UploadFile;
  url: Scalars['String']['output'];
};

export type ComponentBlocksHeroSlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksHeroSlideFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksHeroSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksHeroSlideFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksHeroSlider = {
  __typename?: 'ComponentBlocksHeroSlider';
  id: Scalars['ID']['output'];
  slides?: Maybe<Array<Maybe<ComponentBlocksHeroSlide>>>;
};


export type ComponentBlocksHeroSliderSlidesArgs = {
  filters?: InputMaybe<ComponentBlocksHeroSlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksHeroVideo = {
  __typename?: 'ComponentBlocksHeroVideo';
  background: UploadFile;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentBlocksImage = {
  __typename?: 'ComponentBlocksImage';
  id: Scalars['ID']['output'];
  image: UploadFile;
  size?: Maybe<Enum_Componentblocksimage_Size>;
};

export type ComponentBlocksLogos = {
  __typename?: 'ComponentBlocksLogos';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  pretitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksParagraph = {
  __typename?: 'ComponentBlocksParagraph';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ComponentBlocksProgresses = {
  __typename?: 'ComponentBlocksProgresses';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items: Array<Maybe<ComponentBlocksSubprogress>>;
  pretitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type ComponentBlocksProgressesItemsArgs = {
  filters?: InputMaybe<ComponentBlocksSubprogressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksServices = {
  __typename?: 'ComponentBlocksServices';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pretitle?: Maybe<Scalars['String']['output']>;
  subservices: Array<Maybe<ComponentBlocksSubservice>>;
  tag?: Maybe<Enum_Componentblocksservices_Tag>;
  title: Scalars['String']['output'];
};


export type ComponentBlocksServicesSubservicesArgs = {
  filters?: InputMaybe<ComponentBlocksSubserviceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksSinglePictureDetail = {
  __typename?: 'ComponentBlocksSinglePictureDetail';
  callToActionLabel?: Maybe<Scalars['String']['output']>;
  callToActionUrl?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  picture: UploadFile;
  pretitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ComponentBlocksSubcount = {
  __typename?: 'ComponentBlocksSubcount';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  value: Scalars['Int']['output'];
};

export type ComponentBlocksSubcountFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSubcountFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSubcountFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSubcountFiltersInput>>>;
  value?: InputMaybe<IntFilterInput>;
};

export type ComponentBlocksSubprogress = {
  __typename?: 'ComponentBlocksSubprogress';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  percentage: Scalars['Int']['output'];
};

export type ComponentBlocksSubprogressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSubprogressFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSubprogressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSubprogressFiltersInput>>>;
  percentage?: InputMaybe<IntFilterInput>;
};

export type ComponentBlocksSubservice = {
  __typename?: 'ComponentBlocksSubservice';
  description?: Maybe<Scalars['String']['output']>;
  icon: Enum_Componentblockssubservice_Icon;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksSubserviceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSubserviceFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSubserviceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSubserviceFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksTeamBuildings = {
  __typename?: 'ComponentBlocksTeamBuildings';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pretitle?: Maybe<Scalars['String']['output']>;
  random: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type ComponentBlocksTestimonials = {
  __typename?: 'ComponentBlocksTestimonials';
  id: Scalars['ID']['output'];
  items: Array<Maybe<ComponentBlocksTestimonialtem>>;
};


export type ComponentBlocksTestimonialsItemsArgs = {
  filters?: InputMaybe<ComponentBlocksTestimonialtemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksTestimonialtem = {
  __typename?: 'ComponentBlocksTestimonialtem';
  avatar: UploadFile;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type ComponentBlocksTestimonialtemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksTestimonialtemFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksTestimonialtemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksTestimonialtemFiltersInput>>>;
  role?: InputMaybe<StringFilterInput>;
};

export type ComponentContentChecklist = {
  __typename?: 'ComponentContentChecklist';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<ComponentContentItems>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentContentChecklistItemsArgs = {
  filters?: InputMaybe<ComponentContentItemsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentFaqs = {
  __typename?: 'ComponentContentFaqs';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<ComponentContentSubfaq>>>;
};


export type ComponentContentFaqsItemsArgs = {
  filters?: InputMaybe<ComponentContentSubfaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentGallery = {
  __typename?: 'ComponentContentGallery';
  id: Scalars['ID']['output'];
  media: Array<Maybe<UploadFile>>;
  media_connection: UploadFileRelationResponseCollection;
};


export type ComponentContentGalleryMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentContentGalleryMedia_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentImage = {
  __typename?: 'ComponentContentImage';
  alt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  picture?: Maybe<UploadFile>;
};

export type ComponentContentItems = {
  __typename?: 'ComponentContentItems';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentItemsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentItemsFiltersInput>>>;
  not?: InputMaybe<ComponentContentItemsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentItemsFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentContentQuote = {
  __typename?: 'ComponentContentQuote';
  author: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ComponentContentSubfaq = {
  __typename?: 'ComponentContentSubfaq';
  answer: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

export type ComponentContentSubfaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentSubfaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContentSubfaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentSubfaqFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentContentText = {
  __typename?: 'ComponentContentText';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentOtherBenefits = {
  __typename?: 'ComponentOtherBenefits';
  benefit?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentOtherBenefitsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOtherBenefitsFiltersInput>>>;
  benefit?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOtherBenefitsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOtherBenefitsFiltersInput>>>;
};

export type ComponentOtherBenefitsInput = {
  benefit?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ContactPage = {
  __typename?: 'ContactPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<ContactPage>>;
  localizations_connection?: Maybe<ContactPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  postcontent?: Maybe<Array<Maybe<ContactPagePostcontentDynamicZone>>>;
  precontent?: Maybe<Array<Maybe<ContactPagePrecontentDynamicZone>>>;
  pretitle?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactPageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  postcontent?: InputMaybe<Array<Scalars['ContactPagePostcontentDynamicZoneInput']['input']>>;
  precontent?: InputMaybe<Array<Scalars['ContactPagePrecontentDynamicZoneInput']['input']>>;
  pretitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPagePostcontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type ContactPagePrecontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type ContactPageRelationResponseCollection = {
  __typename?: 'ContactPageRelationResponseCollection';
  nodes: Array<ContactPage>;
};

export type CookiesPolicyPage = {
  __typename?: 'CookiesPolicyPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<CookiesPolicyPage>>;
  localizations_connection?: Maybe<CookiesPolicyPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CookiesPolicyPageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CookiesPolicyPageRelationResponseCollection = {
  __typename?: 'CookiesPolicyPageRelationResponseCollection';
  nodes: Array<CookiesPolicyPage>;
};

export type CorporativePartiesPage = {
  __typename?: 'CorporativePartiesPage';
  content: Array<Maybe<CorporativePartiesPageContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<CorporativePartiesPage>>;
  localizations_connection?: Maybe<CorporativePartiesPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CorporativePartiesPageContentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type CorporativePartiesPageInput = {
  content?: InputMaybe<Array<Scalars['CorporativePartiesPageContentDynamicZoneInput']['input']>>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CorporativePartiesPageRelationResponseCollection = {
  __typename?: 'CorporativePartiesPageRelationResponseCollection';
  nodes: Array<CorporativePartiesPage>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
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

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Enum_Componentblockshero_Tag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type Enum_Componentblocksimage_Size =
  | 'fullwidth'
  | 'large'
  | 'medium'
  | 'micro'
  | 'small';

export type Enum_Componentblocksservices_Tag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type Enum_Componentblockssubservice_Icon =
  | 'airplane_journey'
  | 'animated_icon'
  | 'badget_check_alt'
  | 'ballot_check'
  | 'bed_alt'
  | 'bio_leaves'
  | 'bolt'
  | 'bulb'
  | 'bullhorn'
  | 'cake_birthday'
  | 'check_circle'
  | 'circle_star'
  | 'comment_alt_check'
  | 'confetti'
  | 'constellation'
  | 'customize_edit'
  | 'family'
  | 'ferris_wheel'
  | 'first_award'
  | 'galaxy_star'
  | 'glass_cheers'
  | 'graphic_style'
  | 'hands_heart'
  | 'handshake'
  | 'hat_chef'
  | 'head_side_heart'
  | 'hotel'
  | 'house_chimney_window'
  | 'invite_alt'
  | 'lasso_sparkles'
  | 'leadership'
  | 'lightbulb_setting'
  | 'meeting'
  | 'meeting_alt'
  | 'membership'
  | 'microphone_alt'
  | 'note'
  | 'objects_column'
  | 'party_horn'
  | 'people_arrows_left_right'
  | 'plane_alt'
  | 'rocket_lunch'
  | 'stage_theatre'
  | 'subway'
  | 'suitcase_alt'
  | 'tachometer_alt_fastest'
  | 'trophy_star'
  | 'utensils';

export type Employee = {
  __typename?: 'Employee';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Employee>>;
  localizations_connection?: Maybe<EmployeeRelationResponseCollection>;
  name: Scalars['String']['output'];
  photo: UploadFile;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EmployeeLocalizationsArgs = {
  filters?: InputMaybe<EmployeeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EmployeeLocalizations_ConnectionArgs = {
  filters?: InputMaybe<EmployeeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EmployeeEntityResponseCollection = {
  __typename?: 'EmployeeEntityResponseCollection';
  nodes: Array<Employee>;
  pageInfo: Pagination;
};

export type EmployeeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmployeeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EmployeeFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmployeeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmployeeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmployeeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeRelationResponseCollection = {
  __typename?: 'EmployeeRelationResponseCollection';
  nodes: Array<Employee>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  cover: UploadFile;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  gallery: Array<Maybe<UploadFile>>;
  gallery_connection: UploadFileRelationResponseCollection;
  hidden: Scalars['Boolean']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Event>>;
  localizations_connection?: Maybe<EventRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  selected: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EventGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventGallery_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventLocalizationsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type EventLocalizations_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventEntityResponseCollection = {
  __typename?: 'EventEntityResponseCollection';
  nodes: Array<Event>;
  pageInfo: Pagination;
};

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  hidden?: InputMaybe<BooleanFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventFiltersInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  selected?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  cover?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  selected?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EventRelationResponseCollection = {
  __typename?: 'EventRelationResponseCollection';
  nodes: Array<Event>;
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

export type GenericMorph = Author | BusinessEventsPage | ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqItem | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroGalleryItem | ComponentBlocksHeroSlide | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksSubcount | ComponentBlocksSubprogress | ComponentBlocksSubservice | ComponentBlocksTeamBuildings | ComponentBlocksTestimonials | ComponentBlocksTestimonialtem | ComponentContentChecklist | ComponentContentFaqs | ComponentContentGallery | ComponentContentImage | ComponentContentItems | ComponentContentQuote | ComponentContentSubfaq | ComponentContentText | ComponentOtherBenefits | ContactPage | CookiesPolicyPage | CorporativePartiesPage | Employee | Event | HomePage | I18NLocale | LegalNoticePage | Logo | ManifestPage | Post | Project | ProjectsPage | ReceptiveTripsPage | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | ServicesPage | SustainabilityPage | TeamBuilding | TeamBuildingsPage | TeamPage | TermsConditionsPage | UploadFile;

export type HomePage = {
  __typename?: 'HomePage';
  content: Array<Maybe<HomePageContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<HomePage>>;
  localizations_connection?: Maybe<HomePageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageContentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTeamBuildings | ComponentBlocksTestimonials | Error;

export type HomePageInput = {
  content?: InputMaybe<Array<Scalars['HomePageContentDynamicZoneInput']['input']>>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  nodes: Array<HomePage>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
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

export type LegalNoticePage = {
  __typename?: 'LegalNoticePage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<LegalNoticePage>>;
  localizations_connection?: Maybe<LegalNoticePageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LegalNoticePageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LegalNoticePageRelationResponseCollection = {
  __typename?: 'LegalNoticePageRelationResponseCollection';
  nodes: Array<LegalNoticePage>;
};

export type Logo = {
  __typename?: 'Logo';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  image: UploadFile;
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type LogoEntityResponseCollection = {
  __typename?: 'LogoEntityResponseCollection';
  nodes: Array<Logo>;
  pageInfo: Pagination;
};

export type LogoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LogoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LogoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LogoFiltersInput>>>;
  priority?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type LogoInput = {
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ManifestPage = {
  __typename?: 'ManifestPage';
  content: Array<Maybe<ManifestPageContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<ManifestPage>>;
  localizations_connection?: Maybe<ManifestPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ManifestPageContentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type ManifestPageInput = {
  content?: InputMaybe<Array<Scalars['ManifestPageContentDynamicZoneInput']['input']>>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ManifestPageRelationResponseCollection = {
  __typename?: 'ManifestPageRelationResponseCollection';
  nodes: Array<ManifestPage>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<Author>;
  createEmployee?: Maybe<Employee>;
  createEvent?: Maybe<Event>;
  createLogo?: Maybe<Logo>;
  createPost?: Maybe<Post>;
  createProject?: Maybe<Project>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createTeamBuilding?: Maybe<TeamBuilding>;
  deleteAuthor?: Maybe<DeleteMutationResponse>;
  deleteBusinessEventsPage?: Maybe<DeleteMutationResponse>;
  deleteContactPage?: Maybe<DeleteMutationResponse>;
  deleteCookiesPolicyPage?: Maybe<DeleteMutationResponse>;
  deleteCorporativePartiesPage?: Maybe<DeleteMutationResponse>;
  deleteEmployee?: Maybe<DeleteMutationResponse>;
  deleteEvent?: Maybe<DeleteMutationResponse>;
  deleteHomePage?: Maybe<DeleteMutationResponse>;
  deleteLegalNoticePage?: Maybe<DeleteMutationResponse>;
  deleteLogo?: Maybe<DeleteMutationResponse>;
  deleteManifestPage?: Maybe<DeleteMutationResponse>;
  deletePost?: Maybe<DeleteMutationResponse>;
  deleteProject?: Maybe<DeleteMutationResponse>;
  deleteProjectsPage?: Maybe<DeleteMutationResponse>;
  deleteReceptiveTripsPage?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteServicesPage?: Maybe<DeleteMutationResponse>;
  deleteSustainabilityPage?: Maybe<DeleteMutationResponse>;
  deleteTeamBuilding?: Maybe<DeleteMutationResponse>;
  deleteTeamBuildingsPage?: Maybe<DeleteMutationResponse>;
  deleteTeamPage?: Maybe<DeleteMutationResponse>;
  deleteTermsConditionsPage?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  updateAuthor?: Maybe<Author>;
  updateBusinessEventsPage?: Maybe<BusinessEventsPage>;
  updateContactPage?: Maybe<ContactPage>;
  updateCookiesPolicyPage?: Maybe<CookiesPolicyPage>;
  updateCorporativePartiesPage?: Maybe<CorporativePartiesPage>;
  updateEmployee?: Maybe<Employee>;
  updateEvent?: Maybe<Event>;
  updateHomePage?: Maybe<HomePage>;
  updateLegalNoticePage?: Maybe<LegalNoticePage>;
  updateLogo?: Maybe<Logo>;
  updateManifestPage?: Maybe<ManifestPage>;
  updatePost?: Maybe<Post>;
  updateProject?: Maybe<Project>;
  updateProjectsPage?: Maybe<ProjectsPage>;
  updateReceptiveTripsPage?: Maybe<ReceptiveTripsPage>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateServicesPage?: Maybe<ServicesPage>;
  updateSustainabilityPage?: Maybe<SustainabilityPage>;
  updateTeamBuilding?: Maybe<TeamBuilding>;
  updateTeamBuildingsPage?: Maybe<TeamBuildingsPage>;
  updateTeamPage?: Maybe<TeamPage>;
  updateTermsConditionsPage?: Maybe<TermsConditionsPage>;
  updateUploadFile: UploadFile;
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateEmployeeArgs = {
  data: EmployeeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateEventArgs = {
  data: EventInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateLogoArgs = {
  data: LogoInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTeamBuildingArgs = {
  data: TeamBuildingInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationDeleteAuthorArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteBusinessEventsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCookiesPolicyPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCorporativePartiesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteEmployeeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteEventArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteLegalNoticePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteLogoArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteManifestPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteReceptiveTripsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteServicesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSustainabilityPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTeamBuildingArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTeamBuildingsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTeamPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTermsConditionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBusinessEventsPageArgs = {
  data: BusinessEventsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateContactPageArgs = {
  data: ContactPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCookiesPolicyPageArgs = {
  data: CookiesPolicyPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCorporativePartiesPageArgs = {
  data: CorporativePartiesPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateEmployeeArgs = {
  data: EmployeeInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateEventArgs = {
  data: EventInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLegalNoticePageArgs = {
  data: LegalNoticePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLogoArgs = {
  data: LogoInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateManifestPageArgs = {
  data: ManifestPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProjectsPageArgs = {
  data: ProjectsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReceptiveTripsPageArgs = {
  data: ReceptiveTripsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateServicesPageArgs = {
  data: ServicesPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSustainabilityPageArgs = {
  data: SustainabilityPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTeamBuildingArgs = {
  data: TeamBuildingInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTeamBuildingsPageArgs = {
  data: TeamBuildingsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTeamPageArgs = {
  data: TeamPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTermsConditionsPageArgs = {
  data: TermsConditionsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};

export type Pagination = {
  __typename?: 'Pagination';
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

export type Post = {
  __typename?: 'Post';
  author?: Maybe<Author>;
  content: Array<Maybe<PostContentDynamicZone>>;
  cover?: Maybe<UploadFile>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Post>>;
  localizations_connection?: Maybe<PostRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostLocalizationsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostContentDynamicZone = ComponentContentChecklist | ComponentContentFaqs | ComponentContentGallery | ComponentContentImage | ComponentContentQuote | ComponentContentText | Error;

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  nodes: Array<Post>;
  pageInfo: Pagination;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  author?: InputMaybe<AuthorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostFiltersInput>;
  meta_description?: InputMaybe<StringFilterInput>;
  meta_title?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  author?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Array<Scalars['PostContentDynamicZoneInput']['input']>>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  nodes: Array<Post>;
};

export type Project = {
  __typename?: 'Project';
  content: Array<Maybe<ProjectContentDynamicZone>>;
  cover: UploadFile;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Project>>;
  localizations_connection?: Maybe<ProjectRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProjectLocalizationsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProjectLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectContentDynamicZone = ComponentContentChecklist | ComponentContentFaqs | ComponentContentGallery | ComponentContentImage | ComponentContentItems | ComponentContentQuote | ComponentContentText | Error;

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  nodes: Array<Project>;
  pageInfo: Pagination;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProjectFiltersInput>;
  meta_description?: InputMaybe<StringFilterInput>;
  meta_title?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  priority?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectInput = {
  content?: InputMaybe<Array<Scalars['ProjectContentDynamicZoneInput']['input']>>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  nodes: Array<Project>;
};

export type ProjectsPage = {
  __typename?: 'ProjectsPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<ProjectsPage>>;
  localizations_connection?: Maybe<ProjectsPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  postcontent: Array<Maybe<ProjectsPagePostcontentDynamicZone>>;
  precontent: Array<Maybe<ProjectsPagePrecontentDynamicZone>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectsPageInput = {
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  postcontent?: InputMaybe<Array<Scalars['ProjectsPagePostcontentDynamicZoneInput']['input']>>;
  precontent?: InputMaybe<Array<Scalars['ProjectsPagePrecontentDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsPagePostcontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type ProjectsPagePrecontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type ProjectsPageRelationResponseCollection = {
  __typename?: 'ProjectsPageRelationResponseCollection';
  nodes: Array<ProjectsPage>;
};

export type PublicationStatus =
  | 'DRAFT'
  | 'PUBLISHED';

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors: Array<Maybe<Author>>;
  authors_connection?: Maybe<AuthorEntityResponseCollection>;
  businessEventsPage?: Maybe<BusinessEventsPage>;
  contactPage?: Maybe<ContactPage>;
  cookiesPolicyPage?: Maybe<CookiesPolicyPage>;
  corporativePartiesPage?: Maybe<CorporativePartiesPage>;
  employee?: Maybe<Employee>;
  employees: Array<Maybe<Employee>>;
  employees_connection?: Maybe<EmployeeEntityResponseCollection>;
  event?: Maybe<Event>;
  events: Array<Maybe<Event>>;
  events_connection?: Maybe<EventEntityResponseCollection>;
  homePage?: Maybe<HomePage>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  legalNoticePage?: Maybe<LegalNoticePage>;
  logo?: Maybe<Logo>;
  logos: Array<Maybe<Logo>>;
  logos_connection?: Maybe<LogoEntityResponseCollection>;
  manifestPage?: Maybe<ManifestPage>;
  post?: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  posts_connection?: Maybe<PostEntityResponseCollection>;
  project?: Maybe<Project>;
  projects: Array<Maybe<Project>>;
  projectsPage?: Maybe<ProjectsPage>;
  projects_connection?: Maybe<ProjectEntityResponseCollection>;
  receptiveTripsPage?: Maybe<ReceptiveTripsPage>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  servicesPage?: Maybe<ServicesPage>;
  sustainabilityPage?: Maybe<SustainabilityPage>;
  teamBuilding?: Maybe<TeamBuilding>;
  teamBuildings: Array<Maybe<TeamBuilding>>;
  teamBuildingsPage?: Maybe<TeamBuildingsPage>;
  teamBuildings_connection?: Maybe<TeamBuildingEntityResponseCollection>;
  teamPage?: Maybe<TeamPage>;
  termsConditionsPage?: Maybe<TermsConditionsPage>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
};


export type QueryAuthorArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthors_ConnectionArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBusinessEventsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCookiesPolicyPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCorporativePartiesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmployeeArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmployeesArgs = {
  filters?: InputMaybe<EmployeeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmployees_ConnectionArgs = {
  filters?: InputMaybe<EmployeeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEventArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEvents_ConnectionArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLegalNoticePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLogoArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLogosArgs = {
  filters?: InputMaybe<LogoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLogos_ConnectionArgs = {
  filters?: InputMaybe<LogoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryManifestPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProjectArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProjectsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProjects_ConnectionArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReceptiveTripsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServicesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySustainabilityPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTeamBuildingArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTeamBuildingsArgs = {
  filters?: InputMaybe<TeamBuildingFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTeamBuildingsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTeamBuildings_ConnectionArgs = {
  filters?: InputMaybe<TeamBuildingFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTeamPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTermsConditionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReceptiveTripsPage = {
  __typename?: 'ReceptiveTripsPage';
  content: Array<Maybe<ReceptiveTripsPageContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<ReceptiveTripsPage>>;
  localizations_connection?: Maybe<ReceptiveTripsPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReceptiveTripsPageContentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type ReceptiveTripsPageInput = {
  content?: InputMaybe<Array<Scalars['ReceptiveTripsPageContentDynamicZoneInput']['input']>>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReceptiveTripsPageRelationResponseCollection = {
  __typename?: 'ReceptiveTripsPageRelationResponseCollection';
  nodes: Array<ReceptiveTripsPage>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type ServicesPage = {
  __typename?: 'ServicesPage';
  content: Array<Maybe<ServicesPageContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<ServicesPage>>;
  localizations_connection?: Maybe<ServicesPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServicesPageContentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlide | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type ServicesPageInput = {
  content?: InputMaybe<Array<Scalars['ServicesPageContentDynamicZoneInput']['input']>>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ServicesPageRelationResponseCollection = {
  __typename?: 'ServicesPageRelationResponseCollection';
  nodes: Array<ServicesPage>;
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

export type SustainabilityPage = {
  __typename?: 'SustainabilityPage';
  content?: Maybe<Array<Maybe<SustainabilityPageContentDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<SustainabilityPage>>;
  localizations_connection?: Maybe<SustainabilityPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SustainabilityPageContentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type SustainabilityPageInput = {
  content?: InputMaybe<Array<Scalars['SustainabilityPageContentDynamicZoneInput']['input']>>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SustainabilityPageRelationResponseCollection = {
  __typename?: 'SustainabilityPageRelationResponseCollection';
  nodes: Array<SustainabilityPage>;
};

export type TeamBuilding = {
  __typename?: 'TeamBuilding';
  accessible: Scalars['Boolean']['output'];
  benefits: Array<Maybe<ComponentOtherBenefits>>;
  benefitsTitle?: Maybe<Scalars['String']['output']>;
  content: Array<Maybe<TeamBuildingContentDynamicZone>>;
  cover: UploadFile;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  duration?: Maybe<Scalars['Float']['output']>;
  language?: Maybe<Scalars['JSON']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localization: Scalars['String']['output'];
  localizations: Array<Maybe<TeamBuilding>>;
  localizations_connection?: Maybe<TeamBuildingRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TeamBuildingBenefitsArgs = {
  filters?: InputMaybe<ComponentOtherBenefitsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamBuildingLocalizationsArgs = {
  filters?: InputMaybe<TeamBuildingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamBuildingLocalizations_ConnectionArgs = {
  filters?: InputMaybe<TeamBuildingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TeamBuildingContentDynamicZone = ComponentContentChecklist | ComponentContentFaqs | ComponentContentGallery | ComponentContentImage | ComponentContentQuote | ComponentContentText | Error;

export type TeamBuildingEntityResponseCollection = {
  __typename?: 'TeamBuildingEntityResponseCollection';
  nodes: Array<TeamBuilding>;
  pageInfo: Pagination;
};

export type TeamBuildingFiltersInput = {
  accessible?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TeamBuildingFiltersInput>>>;
  benefits?: InputMaybe<ComponentOtherBenefitsFiltersInput>;
  benefitsTitle?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  duration?: InputMaybe<FloatFilterInput>;
  language?: InputMaybe<JsonFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localization?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TeamBuildingFiltersInput>;
  meta_description?: InputMaybe<StringFilterInput>;
  meta_title?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TeamBuildingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeamBuildingFiltersInput>>>;
  priority?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamBuildingInput = {
  accessible?: InputMaybe<Scalars['Boolean']['input']>;
  benefits?: InputMaybe<Array<InputMaybe<ComponentOtherBenefitsInput>>>;
  benefitsTitle?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Array<Scalars['TeamBuildingContentDynamicZoneInput']['input']>>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  language?: InputMaybe<Scalars['JSON']['input']>;
  localization?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TeamBuildingRelationResponseCollection = {
  __typename?: 'TeamBuildingRelationResponseCollection';
  nodes: Array<TeamBuilding>;
};

export type TeamBuildingsPage = {
  __typename?: 'TeamBuildingsPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<TeamBuildingsPage>>;
  localizations_connection?: Maybe<TeamBuildingsPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  postcontent?: Maybe<Array<Maybe<TeamBuildingsPagePostcontentDynamicZone>>>;
  precontent?: Maybe<Array<Maybe<TeamBuildingsPagePrecontentDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TeamBuildingsPageInput = {
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  postcontent?: InputMaybe<Array<Scalars['TeamBuildingsPagePostcontentDynamicZoneInput']['input']>>;
  precontent?: InputMaybe<Array<Scalars['TeamBuildingsPagePrecontentDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TeamBuildingsPagePostcontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type TeamBuildingsPagePrecontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksLogos | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type TeamBuildingsPageRelationResponseCollection = {
  __typename?: 'TeamBuildingsPageRelationResponseCollection';
  nodes: Array<TeamBuildingsPage>;
};

export type TeamPage = {
  __typename?: 'TeamPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<TeamPage>>;
  localizations_connection?: Maybe<TeamPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  postcontent?: Maybe<Array<Maybe<TeamPagePostcontentDynamicZone>>>;
  precontent?: Maybe<Array<Maybe<TeamPagePrecontentDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TeamPageInput = {
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  postcontent?: InputMaybe<Array<Scalars['TeamPagePostcontentDynamicZoneInput']['input']>>;
  precontent?: InputMaybe<Array<Scalars['TeamPagePrecontentDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TeamPagePostcontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type TeamPagePrecontentDynamicZone = ComponentBlocksBigGallery | ComponentBlocksCallToAction | ComponentBlocksCounters | ComponentBlocksDoublePictureDetail | ComponentBlocksFaqs | ComponentBlocksGallery | ComponentBlocksHero | ComponentBlocksHeroGallery | ComponentBlocksHeroSlider | ComponentBlocksHeroVideo | ComponentBlocksImage | ComponentBlocksParagraph | ComponentBlocksProgresses | ComponentBlocksServices | ComponentBlocksSinglePictureDetail | ComponentBlocksTestimonials | Error;

export type TeamPageRelationResponseCollection = {
  __typename?: 'TeamPageRelationResponseCollection';
  nodes: Array<TeamPage>;
};

export type TermsConditionsPage = {
  __typename?: 'TermsConditionsPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<TermsConditionsPage>>;
  localizations_connection?: Maybe<TermsConditionsPageRelationResponseCollection>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TermsConditionsPageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TermsConditionsPageRelationResponseCollection = {
  __typename?: 'TermsConditionsPageRelationResponseCollection';
  nodes: Array<TermsConditionsPage>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type GetBusinessEventsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetBusinessEventsQuery = { __typename?: 'Query', businessEventsPage?: { __typename?: 'BusinessEventsPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, content: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> } | null };

export type GetContactQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetContactQuery = { __typename?: 'Query', contactPage?: { __typename?: 'ContactPage', pretitle?: string | null, title: string, description: string, meta_title?: string | null, meta_description?: string | null, precontent?: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials' } | { __typename: 'Error' } | null> | null, postcontent?: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials' } | { __typename: 'Error' } | null> | null } | null };

export type GetCorporativePartiesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetCorporativePartiesQuery = { __typename?: 'Query', corporativePartiesPage?: { __typename?: 'CorporativePartiesPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, content: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> } | null };

export type GetEmployeesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetEmployeesQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', name: string, description: string, role: string, slug: string, photo: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null>, teamPage?: { __typename?: 'TeamPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, precontent?: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> | null, postcontent?: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> | null } | null };

export type GetEventQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetEventQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', title: string, description: string, slug: string, cover: { __typename?: 'UploadFile', name: string, url: string }, gallery: Array<{ __typename?: 'UploadFile', name: string, url: string } | null> } | null> };

export type GetEventsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', title: string, description: string, slug: string, cover: { __typename?: 'UploadFile', name: string, url: string } } | null> };

export type GetHomeQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetHomeQuery = { __typename?: 'Query', logos: Array<{ __typename?: 'Logo', name: string, url: string, priority: number, image: { __typename?: 'UploadFile', name: string, url: string, width?: number | null, height?: number | null } } | null>, teamBuildings: Array<{ __typename?: 'TeamBuilding', title: string, slug: string, cover: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null>, homePage?: { __typename?: 'HomePage', meta_title?: string | null, meta_description?: string | null, content: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos', logosPretitle?: string | null, logosTitle?: string | null, logosDescription?: string | null } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTeamBuildings', pretitle?: string | null, title: string, description: string, random: boolean } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> } | null };

export type GetLegalQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetLegalQuery = { __typename?: 'Query', legalNoticePage?: { __typename?: 'LegalNoticePage', description: string, meta_title?: string | null, meta_description?: string | null } | null };

export type GetManifestQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetManifestQuery = { __typename?: 'Query', manifestPage?: { __typename?: 'ManifestPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, content: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> } | null };

export type GetPostQueryVariables = Exact<{
  status: PublicationStatus;
  locale: Scalars['I18NLocaleCode']['input'];
  slug: Scalars['String']['input'];
  lteDate: Scalars['Date']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', title: string, slug: string, meta_title?: string | null, meta_description?: string | null, publishedAt?: any | null, date?: any | null, author?: { __typename?: 'Author', name: string, photo: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null, cover?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null, content: Array<{ __typename: 'ComponentContentChecklist', title?: string | null, items?: Array<{ __typename?: 'ComponentContentItems', text?: string | null } | null> | null } | { __typename: 'ComponentContentFaqs', items?: Array<{ __typename?: 'ComponentContentSubfaq', question: string, answer: string } | null> | null } | { __typename: 'ComponentContentGallery', id: string, media: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentContentImage', id: string, alt?: string | null, picture?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentContentQuote', author: string, quote: string } | { __typename: 'ComponentContentText', id: string, text?: string | null } | { __typename: 'Error' } | null> } | null>, recent: Array<{ __typename?: 'Post', title: string, slug: string, publishedAt?: any | null, date?: any | null, author?: { __typename?: 'Author', name: string, photo: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null, cover?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null> };

export type GetPostsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  lteDate: Scalars['Date']['input'];
}>;


export type GetPostsQuery = { __typename?: 'Query', posts_connection?: { __typename?: 'PostEntityResponseCollection', nodes: Array<{ __typename?: 'Post', title: string, slug: string, publishedAt?: any | null, date?: any | null, author?: { __typename?: 'Author', name: string, photo: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null, cover?: { __typename?: 'UploadFile', url: string, width?: number | null } | null }>, pageInfo: { __typename?: 'Pagination', page: number, pageSize: number, pageCount: number, total: number } } | null };

export type GetProjectQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetProjectQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', title: string, meta_title?: string | null, meta_description?: string | null, slug: string, cover: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, content: Array<{ __typename: 'ComponentContentChecklist', title?: string | null, items?: Array<{ __typename?: 'ComponentContentItems', text?: string | null } | null> | null } | { __typename: 'ComponentContentFaqs', items?: Array<{ __typename?: 'ComponentContentSubfaq', question: string, answer: string } | null> | null } | { __typename: 'ComponentContentGallery', id: string, media: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, caption?: string | null } | null> } | { __typename: 'ComponentContentImage', id: string, picture?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, caption?: string | null } | null } | { __typename: 'ComponentContentItems' } | { __typename: 'ComponentContentQuote', author: string, quote: string } | { __typename: 'ComponentContentText', id: string, text?: string | null } | { __typename: 'Error' } | null> } | null> };

export type GetProjectsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', title: string, slug: string, cover: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null>, projectsPage?: { __typename?: 'ProjectsPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, precontent: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials' } | { __typename: 'Error' } | null>, postcontent: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials' } | { __typename: 'Error' } | null> } | null };

export type GetReceptiveTripsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetReceptiveTripsQuery = { __typename?: 'Query', receptiveTripsPage?: { __typename?: 'ReceptiveTripsPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, content: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> } | null };

export type GetRelatedPostQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  lteDate: Scalars['Date']['input'];
}>;


export type GetRelatedPostQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', title: string, slug: string, publishedAt?: any | null, date?: any | null, author?: { __typename?: 'Author', name: string, photo: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null, cover?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, caption?: string | null } | null } | null> };

export type GetServicesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetServicesQuery = { __typename?: 'Query', servicesPage?: { __typename?: 'ServicesPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, content: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlide' } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> } | null };

export type GetSustainabilityQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetSustainabilityQuery = { __typename?: 'Query', sustainabilityPage?: { __typename?: 'SustainabilityPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, content?: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> | null } | null };

export type GetTeamBuildingQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetTeamBuildingQuery = { __typename?: 'Query', teamBuildings: Array<{ __typename?: 'TeamBuilding', title: string, meta_title?: string | null, meta_description?: string | null, duration?: number | null, localization: string, accessible: boolean, language?: any | null, slug: string, benefitsTitle?: string | null, cover: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, benefits: Array<{ __typename?: 'ComponentOtherBenefits', benefit?: string | null } | null>, content: Array<{ __typename: 'ComponentContentChecklist', title?: string | null, items?: Array<{ __typename?: 'ComponentContentItems', text?: string | null } | null> | null } | { __typename: 'ComponentContentFaqs', items?: Array<{ __typename?: 'ComponentContentSubfaq', question: string, answer: string } | null> | null } | { __typename: 'ComponentContentGallery', id: string, media: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentContentImage', id: string, picture?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentContentQuote', author: string, quote: string } | { __typename: 'ComponentContentText', id: string, text?: string | null } | { __typename: 'Error' } | null> } | null>, others: Array<{ __typename?: 'TeamBuilding', title: string, slug: string, cover: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> };

export type GetTeamBuildingsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetTeamBuildingsQuery = { __typename?: 'Query', teamBuildings: Array<{ __typename?: 'TeamBuilding', title: string, duration?: number | null, localization: string, accessible: boolean, language?: any | null, slug: string, cover: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null>, teamBuildingsPage?: { __typename?: 'TeamBuildingsPage', title?: string | null, meta_title?: string | null, meta_description?: string | null, precontent?: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials' } | { __typename: 'Error' } | null> | null, postcontent?: Array<{ __typename: 'ComponentBlocksBigGallery', bigGalleryItems: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksCallToAction', title: string, url: string, callToAction: string, callToActionBackground?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | { __typename: 'ComponentBlocksCounters', counters: Array<{ __typename?: 'ComponentBlocksSubcount', value: number, description: string } | null> } | { __typename: 'ComponentBlocksDoublePictureDetail', pretitle?: string | null, title: string, description: string, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, icon: Enum_Componentblockssubservice_Icon } | null>, picture1: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null }, picture2: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksFaqs', faqs?: Array<{ __typename?: 'ComponentBlocksFaqItem', question: string, answer: string } | null> | null } | { __typename: 'ComponentBlocksGallery', images: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null> } | { __typename: 'ComponentBlocksHero', pretitle?: string | null, title: string, description: string, tag?: Enum_Componentblockshero_Tag | null } | { __typename: 'ComponentBlocksHeroGallery', pretitle?: string | null, title: string, description: string, galleryItems: Array<{ __typename?: 'ComponentBlocksHeroGalleryItem', url?: string | null, title?: string | null, tag?: string | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'ComponentBlocksHeroSlider', slides?: Array<{ __typename?: 'ComponentBlocksHeroSlide', url: string, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> | null } | { __typename: 'ComponentBlocksHeroVideo', title: string, url: string, background: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksImage', size?: Enum_Componentblocksimage_Size | null, image: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksLogos' } | { __typename: 'ComponentBlocksParagraph', text: string } | { __typename: 'ComponentBlocksProgresses', pretitle?: string | null, title: string, description: string, items: Array<{ __typename?: 'ComponentBlocksSubprogress', label: string, percentage: number } | null> } | { __typename: 'ComponentBlocksServices', pretitle?: string | null, title: string, description: string, servicesTag?: Enum_Componentblocksservices_Tag | null, subservices: Array<{ __typename?: 'ComponentBlocksSubservice', title: string, description?: string | null, url?: string | null, icon: Enum_Componentblockssubservice_Icon } | null> } | { __typename: 'ComponentBlocksSinglePictureDetail', pretitle?: string | null, title: string, description: string, callToActionLabel?: string | null, callToActionUrl?: string | null, picture: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | { __typename: 'ComponentBlocksTestimonials', testimonials: Array<{ __typename?: 'ComponentBlocksTestimonialtem', name: string, role: string, description: string, avatar: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } } | null> } | { __typename: 'Error' } | null> | null } | null };

export type GetTermsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetTermsQuery = { __typename?: 'Query', termsConditionsPage?: { __typename?: 'TermsConditionsPage', description: string, meta_title?: string | null, meta_description?: string | null } | null };


export const GetBusinessEventsDocument = gql`
    query GetBusinessEvents($locale: I18NLocaleCode!) {
  businessEventsPage(locale: $locale) {
    title
    meta_title
    meta_description
    content {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetContactDocument = gql`
    query GetContact($locale: I18NLocaleCode!) {
  contactPage(locale: $locale) {
    pretitle
    title
    description
    meta_title
    meta_description
    precontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
    }
    postcontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
    }
  }
}
    `;
export const GetCorporativePartiesDocument = gql`
    query GetCorporativeParties($locale: I18NLocaleCode!) {
  corporativePartiesPage(locale: $locale) {
    title
    meta_title
    meta_description
    content {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetEmployeesDocument = gql`
    query GetEmployees($locale: I18NLocaleCode!) {
  employees(locale: $locale) {
    name
    description
    role
    slug
    photo {
      url
      width
      height
      alternativeText
    }
  }
  teamPage(locale: $locale) {
    title
    meta_title
    meta_description
    precontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
    postcontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetEventDocument = gql`
    query GetEvent($locale: I18NLocaleCode!, $slug: String!) {
  events(locale: $locale, filters: {slug: {eq: $slug}}) {
    title
    description
    slug
    cover {
      name
      url
    }
    gallery {
      name
      url
    }
  }
}
    `;
export const GetEventsDocument = gql`
    query GetEvents($locale: I18NLocaleCode!) {
  events(locale: $locale) {
    title
    description
    slug
    cover {
      name
      url
    }
  }
}
    `;
export const GetHomeDocument = gql`
    query GetHome($locale: I18NLocaleCode!) {
  logos(sort: "priority:desc", pagination: {pageSize: 50}) {
    name
    url
    priority
    image {
      name
      url
      width
      height
    }
  }
  teamBuildings(locale: $locale, pagination: {page: 1, pageSize: 15}) {
    title
    slug
    cover {
      url
      width
      height
      alternativeText
    }
  }
  homePage(locale: $locale) {
    meta_title
    meta_description
    content {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksTeamBuildings {
        pretitle
        title
        description
        random
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
      ... on ComponentBlocksLogos {
        logosPretitle: pretitle
        logosTitle: title
        logosDescription: description
      }
    }
  }
}
    `;
export const GetLegalDocument = gql`
    query GetLegal($locale: I18NLocaleCode!) {
  legalNoticePage(locale: $locale) {
    description
    meta_title
    meta_description
  }
}
    `;
export const GetManifestDocument = gql`
    query GetManifest($locale: I18NLocaleCode!) {
  manifestPage(locale: $locale) {
    title
    meta_title
    meta_description
    content {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetPostDocument = gql`
    query GetPost($status: PublicationStatus!, $locale: I18NLocaleCode!, $slug: String!, $lteDate: Date!) {
  posts(
    status: $status
    locale: $locale
    filters: {slug: {eq: $slug}, date: {lte: $lteDate}}
  ) {
    title
    slug
    meta_title
    meta_description
    author {
      name
      photo {
        url
        width
        height
        alternativeText
      }
    }
    cover {
      url
      width
      height
      alternativeText
    }
    publishedAt
    date
    content {
      __typename
      ... on ComponentContentText {
        id
        text
      }
      ... on ComponentContentImage {
        id
        picture {
          url
          width
          height
          alternativeText
        }
        alt
      }
      ... on ComponentContentGallery {
        id
        media {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentContentQuote {
        quote: text
        author
      }
      ... on ComponentContentChecklist {
        title
        items {
          text
        }
      }
      ... on ComponentContentFaqs {
        items {
          question
          answer
        }
      }
    }
  }
  recent: posts(
    status: PUBLISHED
    locale: $locale
    pagination: {page: 1, pageSize: 3}
    sort: ["date:desc", "publishedAt:desc"]
    filters: {date: {lte: $lteDate}}
  ) {
    title
    slug
    publishedAt
    date
    author {
      name
      photo {
        url
        width
        height
        alternativeText
      }
    }
    cover {
      url
      width
      height
      alternativeText
    }
  }
}
    `;
export const GetPostsDocument = gql`
    query GetPosts($locale: I18NLocaleCode!, $page: Int!, $pageSize: Int!, $lteDate: Date!) {
  posts_connection(
    status: PUBLISHED
    locale: $locale
    pagination: {page: $page, pageSize: $pageSize}
    sort: ["date:desc", "publishedAt:desc"]
    filters: {date: {lte: $lteDate}}
  ) {
    nodes {
      title
      slug
      author {
        name
        photo {
          url
          width
          height
          alternativeText
        }
      }
      cover {
        url
        width
      }
      publishedAt
      date
    }
    pageInfo {
      page
      pageSize
      pageCount
      total
    }
  }
}
    `;
export const GetProjectDocument = gql`
    query GetProject($locale: I18NLocaleCode!, $slug: String!) {
  projects(locale: $locale, filters: {slug: {eq: $slug}}, status: PUBLISHED) {
    title
    meta_title
    meta_description
    slug
    cover {
      url
      width
      height
      alternativeText
    }
    content {
      __typename
      ... on ComponentContentText {
        id
        text
      }
      ... on ComponentContentImage {
        id
        picture {
          url
          width
          height
          alternativeText
          caption
        }
      }
      ... on ComponentContentGallery {
        id
        media {
          url
          width
          height
          alternativeText
          caption
        }
      }
      ... on ComponentContentQuote {
        quote: text
        author
      }
      ... on ComponentContentChecklist {
        title
        items {
          text
        }
      }
      ... on ComponentContentFaqs {
        items {
          question
          answer
        }
      }
    }
  }
}
    `;
export const GetProjectsDocument = gql`
    query GetProjects($locale: I18NLocaleCode!) {
  projects(
    locale: $locale
    pagination: {page: 1, pageSize: 15}
    sort: ["priority:desc", "publishedAt:desc"]
    status: PUBLISHED
  ) {
    title
    slug
    cover {
      url
      width
      height
      alternativeText
    }
  }
  projectsPage(locale: $locale) {
    title
    meta_title
    meta_description
    precontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
    }
    postcontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
    }
  }
}
    `;
export const GetReceptiveTripsDocument = gql`
    query GetReceptiveTrips($locale: I18NLocaleCode!) {
  receptiveTripsPage(locale: $locale) {
    title
    meta_title
    meta_description
    content {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetRelatedPostDocument = gql`
    query GetRelatedPost($locale: I18NLocaleCode!, $lteDate: Date!) {
  posts(
    status: PUBLISHED
    locale: $locale
    pagination: {page: 1, pageSize: 3}
    sort: ["date:desc", "publishedAt:desc"]
    filters: {date: {lte: $lteDate}}
  ) {
    title
    slug
    publishedAt
    date
    author {
      name
      photo {
        url
        width
        height
        alternativeText
      }
    }
    cover {
      url
      alternativeText
      caption
    }
  }
}
    `;
export const GetServicesDocument = gql`
    query GetServices($locale: I18NLocaleCode!) {
  servicesPage(locale: $locale) {
    title
    meta_title
    meta_description
    content {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetSustainabilityDocument = gql`
    query GetSustainability($locale: I18NLocaleCode!) {
  sustainabilityPage(locale: $locale) {
    title
    meta_title
    meta_description
    content {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetTeamBuildingDocument = gql`
    query GetTeamBuilding($locale: I18NLocaleCode!, $slug: String!) {
  teamBuildings(locale: $locale, filters: {slug: {eq: $slug}}, status: PUBLISHED) {
    title
    meta_title
    meta_description
    duration
    localization
    accessible
    language
    slug
    cover {
      url
      width
      height
      alternativeText
    }
    benefitsTitle
    benefits {
      benefit
    }
    content {
      __typename
      ... on ComponentContentText {
        id
        text
      }
      ... on ComponentContentImage {
        id
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentContentGallery {
        id
        media {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentContentQuote {
        quote: text
        author
      }
      ... on ComponentContentChecklist {
        title
        items {
          text
        }
      }
      ... on ComponentContentFaqs {
        items {
          question
          answer
        }
      }
    }
  }
  others: teamBuildings(
    locale: $locale
    pagination: {page: 1, pageSize: 15}
    status: PUBLISHED
  ) {
    title
    slug
    cover {
      url
      width
      height
      alternativeText
    }
  }
}
    `;
export const GetTeamBuildingsDocument = gql`
    query GetTeamBuildings($locale: I18NLocaleCode!) {
  teamBuildings(
    locale: $locale
    pagination: {page: 1, pageSize: 30}
    sort: ["priority:desc", "publishedAt:desc"]
    status: PUBLISHED
  ) {
    title
    duration
    localization
    accessible
    language
    slug
    cover {
      url
      width
      height
      alternativeText
    }
  }
  teamBuildingsPage(locale: $locale) {
    title
    meta_title
    meta_description
    precontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
    }
    postcontent {
      __typename
      ... on ComponentBlocksHero {
        pretitle
        title
        description
        tag
      }
      ... on ComponentBlocksHeroVideo {
        title
        url
        background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksCallToAction {
        title
        url
        callToAction
        callToActionBackground: background {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksServices {
        pretitle
        title
        description
        servicesTag: tag
        subservices {
          title
          description
          url
          icon
        }
      }
      ... on ComponentBlocksCounters {
        counters {
          value
          description
        }
      }
      ... on ComponentBlocksProgresses {
        pretitle
        title
        description
        items {
          label
          percentage
        }
      }
      ... on ComponentBlocksParagraph {
        text
      }
      ... on ComponentBlocksImage {
        image {
          url
          width
          height
          alternativeText
        }
        size
      }
      ... on ComponentBlocksHeroGallery {
        pretitle
        title
        description
        galleryItems: items {
          image {
            url
            width
            height
            alternativeText
          }
          url
          title
          tag
        }
      }
      ... on ComponentBlocksGallery {
        images(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksBigGallery {
        bigGalleryItems: items(pagination: {pageSize: 50}) {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksFaqs {
        faqs: items {
          question
          answer
        }
      }
      ... on ComponentBlocksSinglePictureDetail {
        pretitle
        title
        description
        callToActionLabel
        callToActionUrl
        picture {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksDoublePictureDetail {
        pretitle
        title
        description
        subservices: items {
          title
          description
          icon
        }
        picture1 {
          url
          width
          height
          alternativeText
        }
        picture2 {
          url
          width
          height
          alternativeText
        }
      }
      ... on ComponentBlocksHeroSlider {
        slides {
          picture {
            url
            width
            height
            alternativeText
          }
          url
        }
      }
      ... on ComponentBlocksTestimonials {
        testimonials: items {
          name
          role
          description
          avatar {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
  }
}
    `;
export const GetTermsDocument = gql`
    query GetTerms($locale: I18NLocaleCode!) {
  termsConditionsPage(locale: $locale) {
    description
    meta_title
    meta_description
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetBusinessEvents(variables: GetBusinessEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBusinessEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBusinessEventsQuery>(GetBusinessEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBusinessEvents', 'query', variables);
    },
    GetContact(variables: GetContactQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetContactQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContactQuery>(GetContactDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetContact', 'query', variables);
    },
    GetCorporativeParties(variables: GetCorporativePartiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCorporativePartiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCorporativePartiesQuery>(GetCorporativePartiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCorporativeParties', 'query', variables);
    },
    GetEmployees(variables: GetEmployeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetEmployeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEmployeesQuery>(GetEmployeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEmployees', 'query', variables);
    },
    GetEvent(variables: GetEventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetEventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEventQuery>(GetEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEvent', 'query', variables);
    },
    GetEvents(variables: GetEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEventsQuery>(GetEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEvents', 'query', variables);
    },
    GetHome(variables: GetHomeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomeQuery>(GetHomeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHome', 'query', variables);
    },
    GetLegal(variables: GetLegalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLegalQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLegalQuery>(GetLegalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLegal', 'query', variables);
    },
    GetManifest(variables: GetManifestQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetManifestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetManifestQuery>(GetManifestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetManifest', 'query', variables);
    },
    GetPost(variables: GetPostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostQuery>(GetPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPost', 'query', variables);
    },
    GetPosts(variables: GetPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostsQuery>(GetPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPosts', 'query', variables);
    },
    GetProject(variables: GetProjectQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectQuery>(GetProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProject', 'query', variables);
    },
    GetProjects(variables: GetProjectsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectsQuery>(GetProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProjects', 'query', variables);
    },
    GetReceptiveTrips(variables: GetReceptiveTripsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetReceptiveTripsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetReceptiveTripsQuery>(GetReceptiveTripsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetReceptiveTrips', 'query', variables);
    },
    GetRelatedPost(variables: GetRelatedPostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetRelatedPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRelatedPostQuery>(GetRelatedPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetRelatedPost', 'query', variables);
    },
    GetServices(variables: GetServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetServicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetServicesQuery>(GetServicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetServices', 'query', variables);
    },
    GetSustainability(variables: GetSustainabilityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSustainabilityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSustainabilityQuery>(GetSustainabilityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSustainability', 'query', variables);
    },
    GetTeamBuilding(variables: GetTeamBuildingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTeamBuildingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTeamBuildingQuery>(GetTeamBuildingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTeamBuilding', 'query', variables);
    },
    GetTeamBuildings(variables: GetTeamBuildingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTeamBuildingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTeamBuildingsQuery>(GetTeamBuildingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTeamBuildings', 'query', variables);
    },
    GetTerms(variables: GetTermsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTermsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTermsQuery>(GetTermsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTerms', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;