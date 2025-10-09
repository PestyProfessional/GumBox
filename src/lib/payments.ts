// Payment service utilities for GumBox

export interface OrderData {
  subscriptionLength: number;
  totalAmount: number;
  taxAmount: number;
  subtotalAmount: number;
}

export interface CustomerData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface PaymentResult {
  success: boolean;
  redirectUrl?: string;
  sessionId?: string;
  reference?: string;
  error?: string;
}

export type PaymentMethod = 'klarna' | 'vipps' | 'stripe';

class PaymentService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
  }

  async createPaymentSession(
    method: PaymentMethod,
    orderData: OrderData,
    customerData: CustomerData
  ): Promise<PaymentResult> {
    try {
      const response = await fetch(`/api/payments/${method}/session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderData,
          customerData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: result.error || 'Failed to create payment session',
        };
      }

      return {
        success: true,
        redirectUrl: result.redirectUrl,
        sessionId: result.sessionId,
        reference: result.reference,
      };
    } catch (error) {
      console.error('Payment service error:', error);
      return {
        success: false,
        error: 'Network error occurred',
      };
    }
  }

  calculateOrderTotals(subscriptionLength: number): OrderData {
    const monthlyPrice = 269; // NOK per month
    const subtotalAmount = monthlyPrice * subscriptionLength;
    const taxRate = 0.25; // 25% Norwegian VAT
    const taxAmount = Math.round(subtotalAmount * taxRate);
    const totalAmount = subtotalAmount + taxAmount;

    return {
      subscriptionLength,
      subtotalAmount,
      taxAmount,
      totalAmount,
    };
  }

  getPaymentMethodIcon(method: PaymentMethod): string {
    switch (method) {
      case 'klarna':
        return '🛒'; // Or use Klarna logo
      case 'vipps':
        return '📱'; // Or use Vipps logo
      case 'stripe':
        return '💳'; // Or use card icons
      default:
        return '💰';
    }
  }

  getPaymentMethodName(method: PaymentMethod): string {
    switch (method) {
      case 'klarna':
        return 'Klarna - Betal senere';
      case 'vipps':
        return 'Vipps - Mobilbetaling';
      case 'stripe':
        return 'Kort (Visa/MasterCard)';
      default:
        return 'Ukjent betalingsmetode';
    }
  }

  validateCustomerData(data: CustomerData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.fullName || data.fullName.length < 2) {
      errors.push('Fullt navn må være minst 2 tegn');
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Ugyldig e-postadresse');
    }

    if (!data.address || data.address.length < 5) {
      errors.push('Adresse må være minst 5 tegn');
    }

    if (!data.city || data.city.length < 2) {
      errors.push('Poststed må være minst 2 tegn');
    }

    if (!data.postalCode || !/^\d{4}$/.test(data.postalCode)) {
      errors.push('Postnummer må være 4 siffer');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

export const paymentService = new PaymentService();

// Subscription plan configurations
export const subscriptionPlans = [
  {
    length: 1,
    name: '1 Måned',
    description: 'Prøv én måned',
    price: 269,
    originalPrice: 299,
    discount: 10,
    popular: false,
  },
  {
    length: 3,
    name: '3 Måneder',
    description: 'Mest populær',
    price: 249,
    originalPrice: 299,
    discount: 17,
    popular: true,
  },
  {
    length: 6,
    name: '6 Måneder',
    description: 'Beste verdi',
    price: 229,
    originalPrice: 299,
    discount: 23,
    popular: false,
  },
  {
    length: 12,
    name: '12 Måneder',
    description: 'Maksimal besparelse',
    price: 199,
    originalPrice: 299,
    discount: 33,
    popular: false,
  },
] as const;

export type SubscriptionPlan = typeof subscriptionPlans[number];