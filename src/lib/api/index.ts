// Export the main API client
export { default as apiClient } from './client';

// Export types for use in components
export type {
  GumProduct,
  GumBox,
  BoxContent,
  ProductsQueryParams,
  BoxesQueryParams,
  SearchQueryParams,
  ApiResponse,
  PagedResponse,
  SearchResponse
} from './types';

// Export utility functions
export { 
  adaptGumProduct, 
  adaptGumBox, 
  getPricingParams, 
  getCountryFlag,
  buildQueryString 
} from './adapters';

// Import the client first
import apiClient from './client';

// Re-export client methods for convenience
export const {
  getProducts,
  getBoxes,
  searchProducts,
  getProduct,
  getBox,
  getFeaturedBoxes,
  healthCheck
} = apiClient;