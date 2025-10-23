// API Types for GumBox application

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  duration: number;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  subscriptionId?: string;
  createdAt: string;
}

export interface OrderData {
  planId: string;
  userEmail: string;
  paymentMethod: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

// Additional types for API adapters
export interface ApiGumProduct {
  id: string;
  name: string;
  brand?: string;
  country: string;
  flavor: string;
  description?: string;
  image?: string;
  weight?: number;
}

export interface GumProduct {
  id: string;
  name: string;
  brand: string;
  origin: string;
  flavor: string;
  color: string;
  description: string;
  image?: string;
}

export interface ApiGumBox {
  id: string;
  theme: string;
  month: string;
  year: number;
  contents: ApiGumProduct[];
  totalItems: number;
}

export interface GumBox {
  id: string;
  theme: string;
  month: string;
  year: number;
  products: GumProduct[];
  totalItems: number;
}

export interface BoxContent {
  product: GumProduct;
  quantity: number;
  featured?: boolean;
}