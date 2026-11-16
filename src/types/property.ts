export type PropertyStatus = 'Available' | 'Selling Fast' | 'Limited Units' | 'Sold Out';

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  category: 'site_inspection' | 'construction' | 'render' | 'aerial';
  url: string;
  thumbnailUrl?: string;
  dateAdded?: string;
  description?: string;
  videoDuration?: string;
}

export interface PaymentPlan {
  id: string;
  name: string;
  duration: string;
  initialDeposit: string;
  monthlyInstallment: string;
  totalAmount: string;
  isPopular?: boolean;
  savingsNote?: string;
}

export interface Facility {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface InvestmentBenefit {
  id: string;
  title: string;
  highlight: string;
  description: string;
}



export interface CompanyContact {
  phone: string;
  whatsappNumber: string;
  displayPhone: string;
  defaultMessage: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  location: {
    address: string;
    landmark: string;
    city: string;
    state: string;
    googleMapsUrl?: string;
  };
  description: string;
  highlights: string[];
  landSize: string;
  buildingDimensions: string;
  price: {
    amount: number;
    currency: string;
    display: string;
    initialDeposit: string;
    pricePerSqm: string;
    promoNote?: string;
  };
  titleDocumentation: {
    titleType: string;
    registrationNumber: string;
    description: string;
    isVerified: boolean;
    documents?: string[];
  };
  availability: {
    status: PropertyStatus;
    totalUnits: number;
    availableUnits: number;
    unitType: string; // e.g., "Plots", "Duplex Units"
  };
  facilities: Facility[];
  paymentPlans: PaymentPlan[];
  investmentBenefits: InvestmentBenefit[];
  gallery: GalleryItem[];
  availableUnitTypes?: Array<{
    name: string;
    price: string;
    amount: number;
    deposit: string;
    description: string;
    isPopular?: boolean;
  }>;
  companyContact: CompanyContact;
  updatedAt: string;
}
