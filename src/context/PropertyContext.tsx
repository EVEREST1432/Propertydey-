import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property, GalleryItem, CompanyContact } from '../types/property';
import { INITIAL_PROPERTIES, DEFAULT_COMPANY_CONTACT } from '../data/initialProperties';

interface PropertyContextType {
  properties: Property[];
  currentProperty: Property;
  selectProperty: (idOrSlug: string) => void;
  updateProperty: (updated: Property) => void;
  createProperty: (newProp: Omit<Property, 'id' | 'updatedAt'>) => Property;
  deleteProperty: (id: string) => void;
  addGalleryItem: (propertyId: string, item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (propertyId: string, itemId: string) => void;
  updateGalleryItem: (propertyId: string, item: GalleryItem) => void;
  updateCompanyContact: (propertyId: string, contact: CompanyContact) => void;
  resetToDefaults: () => void;
  
  // UI & Viewport States
  isAdminMode: boolean;
  setIsAdminMode: (val: boolean) => void;
  mobileFrameMode: boolean;
  setMobileFrameMode: (val: boolean) => void;
  qrModalOpen: boolean;
  setQrModalOpen: (val: boolean) => void;
  inspectionModalOpen: boolean;
  setInspectionModalOpen: (val: boolean) => void;
  selectedMedia: GalleryItem | null;
  setSelectedMedia: (item: GalleryItem | null) => void;
  
  // Helpers
  getPropertyUrl: (slug: string) => string;
}

const STORAGE_KEY = 'propertydey_portfolio_v18';

function sanitizeProperty(raw: any, fallback: Property): Property {
  if (!raw || typeof raw !== 'object') return fallback;

  const isCorruptedMedia = (item: any) =>
    !item ||
    item.id === 'penn-gal-video' ||
    (typeof item.url === 'string' && item.url.includes('VID-20261110-WA0005')) ||
    (typeof item.thumbnailUrl === 'string' && item.thumbnailUrl.includes('VID-20261110-WA0005'));

  const rawGallery = Array.isArray(raw.gallery) && raw.gallery.length > 0
    ? raw.gallery.filter((item: any) => !isCorruptedMedia(item))
    : fallback.gallery;
  const mergedGallery = [...rawGallery];
  for (const defaultItem of fallback.gallery) {
    if (!mergedGallery.some(item => item && item.id === defaultItem.id)) {
      mergedGallery.push(defaultItem);
    }
  }

  const heroImage =
    typeof raw.heroImage === 'string' && raw.heroImage && !raw.heroImage.includes('VID-20261110-WA0005')
      ? raw.heroImage
      : fallback.heroImage;

  return {
    ...fallback,
    ...raw,
    id: raw.id || fallback.id,
    slug: raw.slug || fallback.slug,
    name: raw.name || fallback.name,
    tagline: raw.tagline || fallback.tagline,
    heroImage,
    location: {
      ...fallback.location,
      ...(raw.location || {})
    },
    description: raw.description || fallback.description,
    highlights: Array.isArray(raw.highlights) && raw.highlights.length > 0 ? raw.highlights : fallback.highlights,
    landSize: raw.landSize || fallback.landSize,
    buildingDimensions: raw.buildingDimensions || fallback.buildingDimensions,
    price: {
      ...fallback.price,
      ...(raw.price || {})
    },
    availableUnitTypes: Array.isArray(raw.availableUnitTypes) && raw.availableUnitTypes.length > 0 ? raw.availableUnitTypes : fallback.availableUnitTypes,
    paymentPlans: Array.isArray(raw.paymentPlans) && raw.paymentPlans.length > 0 ? raw.paymentPlans : fallback.paymentPlans,
    facilities: Array.isArray(raw.facilities) && raw.facilities.length > 0 ? raw.facilities : fallback.facilities,
    investmentBenefits: Array.isArray(raw.investmentBenefits) && raw.investmentBenefits.length > 0 ? raw.investmentBenefits : fallback.investmentBenefits,
    gallery: mergedGallery,
    titleDocumentation: {
      ...fallback.titleDocumentation,
      ...(raw.titleDocumentation || {})
    },
    availability: {
      ...fallback.availability,
      ...(raw.availability || {})
    },
    companyContact: {
      ...fallback.companyContact,
      ...(raw.companyContact || DEFAULT_COMPANY_CONTACT)
    }
  };
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const merged = INITIAL_PROPERTIES.map(initProp => {
              const storedProp = parsed.find((p: any) => p && p.id === initProp.id);
              return storedProp ? sanitizeProperty(storedProp, initProp) : initProp;
            });
            const customProps = parsed
              .filter((p: any) => p && !INITIAL_PROPERTIES.some(ip => ip.id === p.id))
              .map((p: any) => sanitizeProperty(p, INITIAL_PROPERTIES[0]));
            return [...merged, ...customProps];
          }
        }
      }
    } catch (e) {
      console.error('Failed to load properties from localStorage', e);
    }
    return INITIAL_PROPERTIES;
  });

  const [currentPropertyId, setCurrentPropertyId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const propParam = params.get('property');
        if (propParam) {
          const found = properties.find(p => p.slug === propParam || p.id === propParam);
          if (found) return found.id;
        }
      } catch (e) {
        // ignore
      }
    }
    return properties[0]?.id || 'garelt-court';
  });

  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [mobileFrameMode, setMobileFrameMode] = useState<boolean>(false);
  const [qrModalOpen, setQrModalOpen] = useState<boolean>(false);
  const [inspectionModalOpen, setInspectionModalOpen] = useState<boolean>(false);
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
      }
    } catch (e) {
      console.error('Failed to persist properties', e);
    }
  }, [properties]);

  // Safe resolution of currentProperty
  const currentProperty = (properties && properties.length > 0)
    ? (properties.find(p => p.id === currentPropertyId) || properties[0])
    : INITIAL_PROPERTIES[0];


  const selectProperty = (idOrSlug: string) => {
    const found = properties.find(p => p.id === idOrSlug || p.slug === idOrSlug);
    if (found) {
      setCurrentPropertyId(found.id);
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('property', found.slug);
        window.history.replaceState({}, '', url.toString());
      }
    }
  };

  const updateProperty = (updated: Property) => {
    setProperties(prev => prev.map(p => {
      if (p.id === updated.id) {
        return {
          ...updated,
          updatedAt: new Date().toISOString()
        };
      }
      return p;
    }));
  };

  const createProperty = (newProp: Omit<Property, 'id' | 'updatedAt'>): Property => {
    const id = newProp.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `prop-${Date.now()}`;
    const fullProp: Property = {
      ...newProp,
      id,
      companyContact: newProp.companyContact || DEFAULT_COMPANY_CONTACT,
      updatedAt: new Date().toISOString()
    };
    setProperties(prev => [fullProp, ...prev]);
    selectProperty(id);
    return fullProp;
  };

  const deleteProperty = (id: string) => {
    setProperties(prev => {
      const remaining = prev.filter(p => p.id !== id);
      if (currentPropertyId === id && remaining.length > 0) {
        setCurrentPropertyId(remaining[0].id);
      }
      return remaining;
    });
  };

  const addGalleryItem = (propertyId: string, item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };

    setProperties(prev => prev.map(p => {
      if (p.id === propertyId) {
        return {
          ...p,
          gallery: [newItem, ...p.gallery],
          updatedAt: new Date().toISOString()
        };
      }
      return p;
    }));
  };

  const deleteGalleryItem = (propertyId: string, itemId: string) => {
    setProperties(prev => prev.map(p => {
      if (p.id === propertyId) {
        return {
          ...p,
          gallery: p.gallery.filter(g => g.id !== itemId),
          updatedAt: new Date().toISOString()
        };
      }
      return p;
    }));
  };

  const updateGalleryItem = (propertyId: string, updatedItem: GalleryItem) => {
    setProperties(prev => prev.map(p => {
      if (p.id === propertyId) {
        return {
          ...p,
          gallery: p.gallery.map(g => g.id === updatedItem.id ? updatedItem : g),
          updatedAt: new Date().toISOString()
        };
      }
      return p;
    }));
  };

  const updateCompanyContact = (propertyId: string, contact: CompanyContact) => {
    setProperties(prev => prev.map(p => {
      if (p.id === propertyId) {
        return {
          ...p,
          companyContact: contact,
          updatedAt: new Date().toISOString()
        };
      }
      return p;
    }));
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProperties(INITIAL_PROPERTIES);
    setCurrentPropertyId(INITIAL_PROPERTIES[0].id);
  };

  const getPropertyUrl = (slug: string) => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      return `${origin}/?property=${slug}`;
    }
    return `https://propertydey.com/property/${slug}`;
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        currentProperty,
        selectProperty,
        updateProperty,
        createProperty,
        deleteProperty,
        addGalleryItem,
        deleteGalleryItem,
        updateGalleryItem,
        updateCompanyContact,
        resetToDefaults,
        isAdminMode,
        setIsAdminMode,
        mobileFrameMode,
        setMobileFrameMode,
        qrModalOpen,
        setQrModalOpen,
        inspectionModalOpen,
        setInspectionModalOpen,
        selectedMedia,
        setSelectedMedia,
        getPropertyUrl
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
};
