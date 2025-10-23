import type {
  ApiResponse,
  PagedResponse,
  SearchResponse,
  ApiGumProduct,
  ApiGumBox,
  GumProduct,
  GumBox,
  ProductsQueryParams,
  BoxesQueryParams,
  SearchQueryParams
} from './types';

import { 
  adaptGumProduct, 
  adaptGumBox, 
  getPricingParams, 
  buildQueryString 
} from './adapters';

class GumBoxApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor() {
    // Use environment variable for API URL, fallback to localhost for development
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:7071';
    
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  private async makeRequest<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Check if the API returned an error in the response body
      if (data.success === false) {
        throw new Error(data.message || data.error || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Get products with filtering, pagination, and search
  async getProducts(params: ProductsQueryParams = {}): Promise<{
    products: GumProduct[];
    pagination: {
      page: number;
      limit: number;
      totalCount: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    metadata?: any;
  }> {
    // Add default pricing parameters
    const pricingParams = getPricingParams();
    const queryParams = {
      ...params,
      currency: pricingParams.currency,
      vatRegion: pricingParams.vatRegion,
      page: params.page || 1,
      limit: params.limit || 20
    };

    const queryString = buildQueryString(queryParams);
    const endpoint = `/api/v2/products${queryString ? `?${queryString}` : ''}`;
    
    const response = await this.makeRequest<PagedResponse<ApiGumProduct>>(endpoint);
    
    return {
      products: response.data.map(adaptGumProduct),
      pagination: {
        page: response.page,
        limit: response.limit,
        totalCount: response.totalCount,
        totalPages: response.totalPages,
        hasNextPage: response.hasNextPage,
        hasPreviousPage: response.hasPreviousPage
      },
      metadata: response.metadata
    };
  }

  // Get GumBoxes with filtering, pagination, and pricing
  async getBoxes(params: BoxesQueryParams = {}): Promise<{
    boxes: GumBox[];
    pagination: {
      page: number;
      limit: number;
      totalCount: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    metadata?: any;
  }> {
    // Add default pricing parameters
    const pricingParams = getPricingParams();
    const queryParams = {
      ...params,
      currency: params.currency || pricingParams.currency,
      vatRegion: params.vatRegion || pricingParams.vatRegion,
      page: params.page || 1,
      limit: params.limit || 12
    };

    const queryString = buildQueryString(queryParams);
    const endpoint = `/api/v2/boxes${queryString ? `?${queryString}` : ''}`;
    
    const response = await this.makeRequest<PagedResponse<ApiGumBox>>(endpoint);
    
    return {
      boxes: response.data.map(adaptGumBox),
      pagination: {
        page: response.page,
        limit: response.limit,
        totalCount: response.totalCount,
        totalPages: response.totalPages,
        hasNextPage: response.hasNextPage,
        hasPreviousPage: response.hasPreviousPage
      },
      metadata: response.metadata
    };
  }

  // Search products with relevance scoring
  async searchProducts(params: SearchQueryParams): Promise<{
    products: Array<{
      product: GumProduct;
      relevanceScore: number;
      matchedFields: string[];
    }>;
    searchMetadata: {
      query: string;
      totalResults: number;
      searchTimeMs: number;
    };
    pagination: {
      page: number;
      limit: number;
      totalCount: number;
      totalPages: number;
    };
  }> {
    const queryParams = {
      q: params.q || params.query,
      page: params.page || 1,
      limit: params.limit || 10
    };

    const queryString = buildQueryString(queryParams);
    const endpoint = `/api/v2/search/products${queryString ? `?${queryString}` : ''}`;
    
    const response = await this.makeRequest<SearchResponse<ApiGumProduct>>(endpoint);
    
    return {
      products: response.data.map(result => ({
        product: adaptGumProduct(result.item),
        relevanceScore: result.relevanceScore,
        matchedFields: result.matchedFields
      })),
      searchMetadata: response.searchMetadata,
      pagination: {
        page: response.page,
        limit: response.limit,
        totalCount: response.totalCount,
        totalPages: response.totalPages
      }
    };
  }

  // Get a single product by ID
  async getProduct(id: string): Promise<GumProduct | null> {
    try {
      const pricingParams = getPricingParams();
      const queryString = buildQueryString(pricingParams);
      const endpoint = `/api/v2/products/${id}${queryString ? `?${queryString}` : ''}`;
      
      const response = await this.makeRequest<ApiResponse<ApiGumProduct>>(endpoint);
      return adaptGumProduct(response.data);
    } catch (error) {
      console.error(`Failed to get product ${id}:`, error);
      return null;
    }
  }

  // Get a single GumBox by ID
  async getBox(id: string): Promise<GumBox | null> {
    try {
      const pricingParams = getPricingParams();
      const queryString = buildQueryString(pricingParams);
      const endpoint = `/api/v2/boxes/${id}${queryString ? `?${queryString}` : ''}`;
      
      const response = await this.makeRequest<ApiResponse<ApiGumBox>>(endpoint);
      return adaptGumBox(response.data);
    } catch (error) {
      console.error(`Failed to get box ${id}:`, error);
      return null;
    }
  }

  // Get featured boxes for homepage
  async getFeaturedBoxes(limit: number = 6): Promise<GumBox[]> {
    try {
      const result = await this.getBoxes({
        featured: true,
        available: true,
        limit: limit,
        sortBy: 'featuredMonth',
        sortOrder: 'descending'
      });
      return result.boxes;
    } catch (error) {
      console.error('Failed to get featured boxes:', error);
      return [];
    }
  }

  // Health check endpoint
  async healthCheck(): Promise<boolean> {
    try {
      await this.makeRequest('/api/health');
      return true;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const apiClient = new GumBoxApiClient();
export default apiClient;