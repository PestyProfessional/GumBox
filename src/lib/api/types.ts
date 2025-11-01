// API Response Types matching the .NET backend
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  correlationId: string;
  timestamp: string;
  error?: string;
  message?: string;
}

export interface PagedResponse<T> extends ApiResponse<T[]> {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  metadata?: {
    processingTimeMs: number;
    cacheHit: boolean;
    appliedFilters: string[];
  };
}

export interface SearchResponse<T> extends PagedResponse<SearchResultItem<T>> {
  searchMetadata: {
    query: string;
    totalResults: number;
    searchTimeMs: number;
  };
}

export interface SearchResultItem<T> {
  item: T;
  relevanceScore: number;
  matchedFields: string[];
}

// Backend Product Model (PascalCase from .NET)
export interface ApiGumProduct {
  Id: string;
  Name: string;
  Brand: string;
  Flavor: string;
  CountryOfOrigin: string;
  Cost: number;
  Weight: number;
  IsAvailable: boolean;
  Features: string[];
  Images: ApiProductImage[];
  ProductDetails: {
    Description: string;
    Ingredients: string[];
    AllergenInfo: string;
    ShelfLifeDays: number;
  };
  NutritionalInformation: {
    CaloriesPerPiece: number;
    SugarContent: number;
    IsLowCalorie: boolean;
    ArtificialSweeteners: string[];
  };
  CreatedAt: string;
  UpdatedAt: string;
}

export interface ApiProductImage {
  Id: string;
  Url: string;
  IsPrimary: boolean;
  Description?: string;
}

// Backend GumBox Model (PascalCase from .NET)
export interface ApiGumBox {
  Id: string;
  Name: string;
  Theme: string;
  CountryFocus: string;
  FeaturedMonth: string;
  Pricing: ApiGumBoxPricing[];
  TotalWeight: number;
  Description: string;
  CountryStory: string;
  Contents: ApiBoxContent[];
  ImageUrls: string[];
  IsFeatured: boolean;
  IsAvailable: boolean;
  StockQuantity: number;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface ApiGumBoxPricing {
  Currency: string;
  VatRegion: string;
  BasePrice: number;
  VatRate: number;
  FinalPrice: number;
  IsDefault: boolean;
}

export interface ApiBoxContent {
  GumProductId: string;
  Quantity: number;
  SpecialNote: string;
}

// Frontend Models (camelCase for React)
export interface GumProduct {
  id: string;
  name: string;
  brand: string;
  flavor: string;
  country: string;
  price: number;
  image: string;
  description: string;
  isInformational?: boolean;
  features: string[];
  weight: number;
  nutritionalInfo?: {
    calories: number;
    sugarContent: number;
    isLowCalorie: boolean;
  };
}

export interface GumBox {
  id: string;
  name: string;
  theme: string;
  country: string;
  flag: string;
  price: number;
  image: string;
  description: string;
  countryStory: string;
  contents: BoxContent[];
  available: boolean;
  featured: boolean;
  totalWeight: number;
}

export interface BoxContent {
  productId: string;
  quantity: number;
  specialNote?: string;
}

// API Query Parameters
export interface ProductsQueryParams {
  search?: string;
  brand?: string;
  country?: string;
  flavor?: string;
  available?: boolean;
  minPrice?: number;
  maxPrice?: number;
  features?: string;
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'brand' | 'cost' | 'weight' | 'countryOfOrigin' | 'createdAt' | 'updatedAt';
  sortOrder?: 'ascending' | 'descending';
}

export interface BoxesQueryParams {
  search?: string;
  country?: string;
  theme?: string;
  featured?: boolean;
  available?: boolean;
  featuredAfter?: string;
  featuredBefore?: string;
  currency?: string;
  vatRegion?: string;
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'theme' | 'countryFocus' | 'featuredMonth' | 'totalWeight' | 'createdAt' | 'updatedAt';
  sortOrder?: 'ascending' | 'descending';
}

export interface SearchQueryParams {
  q?: string;
  query?: string;
  page?: number;
  limit?: number;
}