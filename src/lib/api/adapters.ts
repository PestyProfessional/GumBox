import type { 
  ApiGumProduct, 
  ApiGumBox, 
  GumProduct, 
  GumBox,
  BoxContent 
} from './types';

// Helper function to get country flag emoji
export function getCountryFlag(country: string): string {
  const flagMap: Record<string, string> = {
    'Japan': '🇯🇵',
    'USA': '🇺🇸',
    'United States': '🇺🇸',
    'Europe': '🇪🇺',
    'European': '🇪🇺',
    'Norway': '🇳🇴',
    'Sweden': '🇸🇪',
    'Denmark': '🇩🇰',
    'Finland': '🇫🇮',
    'Germany': '🇩🇪',
    'France': '🇫🇷',
    'Italy': '🇮🇹',
    'Spain': '🇪🇸',
    'UK': '🇬🇧',
    'United Kingdom': '🇬🇧',
    'Brazil': '🇧🇷',
    'Mexico': '🇲🇽',
    'Canada': '🇨🇦',
    'Australia': '🇦🇺',
    'South Korea': '🇰🇷',
    'China': '🇨🇳',
    'Thailand': '🇹🇭',
    'International': '🌍',
    'Mixed': '🌍'
  };
  return flagMap[country] || '🌍';
}

// Convert .NET API GumProduct to React frontend model
export function adaptGumProduct(apiProduct: ApiGumProduct): GumProduct {
  // Find primary image or use first available
  const primaryImage = apiProduct.Images?.find(img => img.IsPrimary) || apiProduct.Images?.[0];

  return {
    id: apiProduct.Id,
    name: apiProduct.Name,
    brand: apiProduct.Brand,
    flavor: apiProduct.Flavor,
    country: apiProduct.CountryOfOrigin,
    price: 0, // Individual products don't have customer-facing prices
    image: primaryImage?.Url || '',
    description: apiProduct.ProductDetails?.Description || '',
    isInformational: true, // Individual gum products are informational only
    features: apiProduct.Features || [],
    weight: apiProduct.Weight,
    nutritionalInfo: apiProduct.NutritionalInformation ? {
      calories: apiProduct.NutritionalInformation.CaloriesPerPiece,
      sugarContent: apiProduct.NutritionalInformation.SugarContent,
      isLowCalorie: apiProduct.NutritionalInformation.IsLowCalorie
    } : undefined
  };
}

// Convert .NET API GumBox to React frontend model
export function adaptGumBox(apiBox: ApiGumBox): GumBox {
  // Get the first pricing (should be filtered by currency/region from API)
  const pricing = apiBox.Pricing && apiBox.Pricing.length > 0 ? apiBox.Pricing[0] : null;
  const price = pricing ? Math.round(pricing.FinalPrice) : 0;

  // Convert box contents
  const contents: BoxContent[] = apiBox.Contents?.map(content => ({
    productId: content.GumProductId,
    quantity: content.Quantity,
    specialNote: content.SpecialNote || undefined
  })) || [];

  return {
    id: apiBox.Id,
    name: apiBox.Name,
    theme: apiBox.Theme,
    country: apiBox.CountryFocus,
    flag: getCountryFlag(apiBox.CountryFocus),
    price: price,
    image: apiBox.ImageUrls && apiBox.ImageUrls.length > 0 ? apiBox.ImageUrls[0] : '',
    description: apiBox.Description,
    countryStory: apiBox.CountryStory,
    contents: contents,
    available: apiBox.IsAvailable,
    featured: apiBox.IsFeatured,
    totalWeight: apiBox.TotalWeight
  };
}

// Helper function to get pricing parameters based on environment or user preferences
export function getPricingParams(): { currency: string; vatRegion: string } {
  // Default to Norwegian settings, can be overridden by environment variables
  const defaultCurrency = process.env.NEXT_PUBLIC_DEFAULT_CURRENCY || 'NOK';
  const defaultVatRegion = process.env.NEXT_PUBLIC_DEFAULT_VAT_REGION || 'NO';
  
  // TODO: In the future, this could be determined by:
  // - User geolocation
  // - User preferences/account settings
  // - Browser language/locale
  return {
    currency: defaultCurrency,
    vatRegion: defaultVatRegion
  };
}

// Convert query parameters to URL search params
export function buildQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        searchParams.append(key, value.join(','));
      } else {
        searchParams.append(key, value.toString());
      }
    }
  });
  
  return searchParams.toString();
}