import { Property, CompanyContact } from '../types/property';

export const DEFAULT_COMPANY_CONTACT: CompanyContact = {
  phone: "09047674938",
  whatsappNumber: "2349047674938",
  displayPhone: "0904 767 4938",
  defaultMessage: "Hello Property Dey Ltd. I scanned the QR code for Garelt Court and would like to make enquiries."
};

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: "garelt-court",
    slug: "garelt-court",
    name: "Garelt Court",
    tagline: "Luxury Living. Smart Investment. Lasting Value.",
    heroImage: "/images/garelt_uploads/garelt_photo_2.jpg",
    location: {
      address: "In the Heart of Osapa London, Lekki",
      landmark: "Minutes from Lekki Phase 1, Victoria Island, Ikoyi, Circle Mall, premium schools, hospitals, business districts & entertainment centres",
      city: "Osapa London, Lekki",
      state: "Lagos State, Nigeria",
      googleMapsUrl: "https://maps.google.com/?q=Osapa+London+Lekki+Lagos"
    },
    description: "Exclusive premium apartments in the heart of Osapa London, Lekki — one of Lagos’ most sought-after and high-value neighbourhoods.\n\nDeveloped by Property Dey Limited, Garelt Court is designed for discerning homeowners and investors who value quality, security, elegance, and strong long-term appreciation.\n\nFeaturing spacious living & dining areas, fully fitted modern kitchen with premium cabinetry, marble countertops, heat extractor & integrated appliances, spacious ensuite bedrooms with premium wardrobes, contemporary bathrooms, smart home readiness, elegant finishes, and large windows for natural light and ventilation. Garelt Court offers the perfect blend of luxury lifestyle and high-performing real estate with limited units available.",
    highlights: [
      "Exclusive premium apartments in the heart of Osapa London, Lekki",
      "Available Units: 2-Bedroom Luxury Apartment (₦170M) & 3-Bedroom Luxury Apartment (₦230M)",
      "Flexible Payment Plan: 30% initial deposit secures temporary allocation, balance spread over 12 months",
      "Fully fitted modern kitchen with premium cabinetry, marble countertops, heat extractor & integrated appliances",
      "Spacious ensuite bedrooms with premium wardrobes & contemporary bathrooms",
      "24-Hour continuous power supply + dedicated soundproof backup generator",
      "Secured estate with gatehouse, 24-hour security & CCTV surveillance",
      "Treated central water plant, central waste management & professional facility management",
      "1-Year developer warranty on all installed appliances, fittings & systems",
      "Secure Title: Governors Consent, C of O, Deed of Assignment, Allocation Letter, Offer Letter, Survey"
    ],
    landSize: "2-Bed (₦170M) & 3-Bed (₦230M)",
    buildingDimensions: "Contemporary 4-Storey Architectural Enclave · Allocated Parking · Green Areas",
    price: {
      amount: 170000000,
      currency: "₦",
      display: "From ₦170,000,000",
      initialDeposit: "30% (From ₦51,000,000)",
      pricePerSqm: "Osapa London, Lekki",
      promoNote: "2-Bed: ₦170M · 3-Bed: ₦230M · 30% Initial Deposit Secures Temporary Allocation"
    },
    availableUnitTypes: [
      {
        name: "2-Bedroom Luxury Apartment",
        price: "₦170,000,000",
        amount: 170000000,
        deposit: "₦51,000,000 (30%)",
        description: "Spacious living & dining areas, fully fitted kitchen with marble countertops, all ensuite bedrooms, contemporary bathrooms, smart home readiness, elegant finishes & balcony.",
        isPopular: true
      },
      {
        name: "3-Bedroom Luxury Apartment",
        price: "₦230,000,000",
        amount: 230000000,
        deposit: "₦69,000,000 (30%)",
        description: "Palatial open-concept living & dining, integrated chef kitchen with island, 3 ensuite luxury bedrooms with custom wardrobes, family lounge & dual balconies."
      }
    ],
    titleDocumentation: {
      titleType: "Governors Consent & C of O",
      registrationNumber: "Governors Consent · Certificate of Occupancy (C of O) · Registered Survey",
      description: "100% verified legal security with Governors Consent, Certificate of Occupancy (C of O), Deed of Assignment, Allocation Letter, Offer Letter, and Registered Survey. 100% unencumbered and verifiable at Lagos State Lands Bureau.",
      isVerified: true,
      documents: [
        "Governors Consent",
        "Certificate of Occupancy (C of O)",
        "Deed of Assignment",
        "Allocation Letter",
        "Offer Letter",
        "Registered Survey"
      ]
    },
    availability: {
      status: "Limited Units",
      totalUnits: 16,
      availableUnits: 5,
      unitType: "Apartments"
    },
    facilities: [
      {
        id: "gc-1",
        name: "24-Hour Security & CCTV",
        iconName: "ShieldCheck",
        description: "Secured estate with access-controlled gatehouse, perimeter fencing, and 24/7 CCTV surveillance"
      },
      {
        id: "gc-2",
        name: "24-Hour Power + Generator",
        iconName: "Zap",
        description: "Uninterrupted continuous power supply backed by heavy-duty industrial soundproof generator"
      },
      {
        id: "gc-3",
        name: "Treated Central Water Plant",
        iconName: "Droplets",
        description: "Multi-stage industrial water treatment plant ensuring continuous potable pressurized water"
      },
      {
        id: "gc-4",
        name: "Fitted Marble Kitchen & Appliances",
        iconName: "Home",
        description: "Premium cabinetry, marble countertops, heat extractor, integrated oven, burner & microwave"
      },
      {
        id: "gc-5",
        name: "Smart Home Readiness",
        iconName: "Sun",
        description: "Automated lighting conduits, smart intercom, climate control wiring, and high-speed fiber internet"
      },
      {
        id: "gc-6",
        name: "1-Year Appliance Warranty",
        iconName: "Activity",
        description: "Full 1-year developer warranty on all installed appliances, fittings, and integrated systems"
      },
      {
        id: "gc-7",
        name: "Facility & Waste Management",
        iconName: "Route",
        description: "Professional round-the-clock on-site facility maintenance and central waste disposal services"
      },
      {
        id: "gc-8",
        name: "Landscaped Green Areas & Parking",
        iconName: "Trees",
        description: "Ample allocated resident parking bays, visitor parking, and serene landscaped green recreation"
      }
    ],
    paymentPlans: [
      {
        id: "plan-outright",
        name: "Outright Purchase",
        duration: "0 - 30 Days",
        initialDeposit: "100%",
        monthlyInstallment: "One-Time Payment",
        totalAmount: "₦170,000,000 (2-Bed) / ₦230,000,000 (3-Bed)",
        isPopular: true,
        savingsNote: "Immediate Deed of Assignment & Allocation Letter execution"
      },
      {
        id: "plan-6m",
        name: "6-Month Structured Plan",
        duration: "6 Months",
        initialDeposit: "30% (₦51M for 2-Bed / ₦69M for 3-Bed)",
        monthlyInstallment: "Balance spread across 5 equal installments",
        totalAmount: "₦170,000,000 (2-Bed) / ₦230,000,000 (3-Bed)",
        savingsNote: "Zero Interest structured milestone plan"
      },
      {
        id: "plan-12m",
        name: "12-Month Flexible Spread",
        duration: "12 Months",
        initialDeposit: "30% Initial Deposit",
        monthlyInstallment: "Spread conveniently across 11 monthly installments",
        totalAmount: "₦175,000,000 (2-Bed) / ₦236,000,000 (3-Bed)",
        savingsNote: "Secures temporary allocation upon 30% initial deposit"
      }
    ],
    investmentBenefits: [
      {
        id: "benefit-1",
        title: "Prime Osapa London Location",
        highlight: "Top Rental Yield",
        description: "Osapa London is one of Lekki's highest rental demand zones with annual rental yields of ₦12M - ₦18M and high Airbnb/short-let occupancy."
      },
      {
        id: "benefit-2",
        title: "Flexible 30% Entry Barrier",
        highlight: "12-Month Spread",
        description: "Secure your temporary apartment allocation with a 30% deposit and spread the remaining balance comfortably over 12 months."
      },
      {
        id: "benefit-3",
        title: "100% Secure Government Title",
        highlight: "Governors Consent & C of O",
        description: "Flawless legal documentation with Governors Consent, C of O, Deed of Assignment, Allocation Letter, and Survey."
      },
      {
        id: "benefit-4",
        title: "Proximity to Commercial Hubs",
        highlight: "Minutes to VI & Ikoyi",
        description: "Effortless commute to Lekki Phase 1, Victoria Island, Ikoyi, Circle Mall, prestigious private schools, and health facilities."
      }
    ],
    gallery: [
      {
        id: "gc-gal-video",
        title: "Garelt Court Exterior & Site Inspection Tour",
        type: "video",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/VID-20261109-WA0010.mp4",
        thumbnailUrl: "https://res.cloudinary.com/auxlootd/video/upload/so_1,w_800,c_scale/VID-20261109-WA0010.jpg",
        videoDuration: "1:31",
        dateAdded: "November 2026",
        description: "Official on-site walkthrough and development inspection of Garelt Court in Osapa London, Lekki showcasing structural progress, quality finishes, and perimeter security."
      },
      {
        id: "gc-photo-2",
        title: "Garelt Court Exterior Architecture & Private Entrance",
        type: "image",
        category: "render",
        url: "/images/garelt_uploads/garelt_photo_2.jpg",
        dateAdded: "November 2026",
        description: "Contemporary 4-storey residential architecture in Osapa London with glass balconies, exterior sconce lighting, and private entrance gate"
      },
      {
        id: "gc-photo-1",
        title: "Spacious Luxury Living & Dining Area",
        type: "image",
        category: "render",
        url: "/images/garelt_uploads/garelt_photo_1.jpg",
        dateAdded: "November 2026",
        description: "Designer-furnished open concept living room with modern chandelier, dining space, TV feature wall, and marble flooring"
      },
      {
        id: "gc-photo-5",
        title: "Fully Fitted Chef's Kitchen & Marble Counters",
        type: "image",
        category: "render",
        url: "/images/garelt_uploads/garelt_photo_5.jpg",
        dateAdded: "November 2026",
        description: "Custom two-tone cabinetry, marble countertops, heat extractor, integrated microwave, built-in oven, and illuminated display cabinets"
      },
      {
        id: "gc-photo-3",
        title: "Aerial Drone Master View & Resident Parking",
        type: "image",
        category: "aerial",
        url: "/images/garelt_uploads/garelt_photo_3.jpg",
        dateAdded: "November 2026",
        description: "Full aerial drone layout showcasing the building footprint, perimeter fencing, ample allocated parking bays, and the Osapa London enclave"
      },
      {
        id: "gc-photo-4",
        title: "Master Bedroom Suite & Acoustic Wood Paneling",
        type: "image",
        category: "render",
        url: "/images/garelt_uploads/garelt_photo_4.jpg",
        dateAdded: "November 2026",
        description: "Ensuite master bedroom with fluted wood slat wall, designer halo pendant, sheer drapery, and marble floors"
      },
      {
        id: "gc-photo-6",
        title: "Second Ensuite Bedroom with Wood Slats & Sconces",
        type: "image",
        category: "render",
        url: "/images/garelt_uploads/garelt_photo_6.jpg",
        dateAdded: "November 2026",
        description: "Spacious luxury ensuite bedroom with illuminated wood headboard, bedside floating tables, and modern minimalist styling"
      }
    ],
    companyContact: {
      phone: "09047674938",
      whatsappNumber: "2349047674938",
      displayPhone: "0904 767 4938",
      defaultMessage: "Hello Property Dey Ltd. I scanned the QR code for Garelt Court (Osapa London, Lekki) and would like to reserve an apartment."
    },
    updatedAt: "2026-11-10T12:00:00.000Z"
  },
  {
    id: "urbanlux-estate",
    slug: "urbanlux-estate",
    name: "Urbanlux Estate",
    tagline: "Prime Land in Lagos' Fastest-Growing Investment Corridor",
    heroImage: "/images/urbanlux_estate_gatehouse_1794228416059.jpg",
    location: {
      address: "Elerangbe, Ibeju Lekki",
      landmark: "Surrounded by Lekki Deep Sea Port, Lekki Free Trade Zone, Alaro City & easy access via Lekki-Epe Expressway",
      city: "Elerangbe, Ibeju Lekki",
      state: "Lagos State, Nigeria",
      googleMapsUrl: "https://maps.google.com/?q=Elerangbe+Ibeju+Lekki+Lagos"
    },
    description: "Urbanlux Estate offers prime, 100% dry tableland situated in Elerangbe, Ibeju Lekki — one of Lagos' most dynamic, fastest-growing real estate corridors.\n\nStrategically surrounded by multibillion-dollar mega developments including the Lekki Deep Sea Port, Lekki Free Trade Zone, Dangote Refinery industrial zone, and Alaro City, Urbanlux Estate delivers explosive capital appreciation and secure land title. Perfect for residential development, long-term wealth preservation, land banking, or commercial resale. Start with just ₦3 Million deposit or pay 50% for instant physical plot allocation.",
    highlights: [
      "Prime 100% dry tableland in Elerangbe, Ibeju Lekki",
      "Secure Title: Government Excision with Approved Registered Survey Plan",
      "Available Plots: 300sqm (₦10.8M), 500sqm (₦18M), 600sqm (₦22M) & 1,000sqm (₦40M)",
      "Flexible entry: Start with just ₦3 Million initial deposit",
      "Pay 50% down payment and receive instant physical plot allocation",
      "0–3 months plan: No extra charges (Zero interest)",
      "3–6 months: +10% · 6–9 months: +15% flexible installment spread",
      "Surrounded by Lekki Deep Sea Port, Lekki Free Trade Zone & Alaro City",
      "Easy, direct access via the expanded Lekki-Epe Expressway corridor",
      "Ideal for immediate building, commercial ventures, high-yield land banking, or resale"
    ],
    landSize: "300sqm, 500sqm, 600sqm & 1,000sqm Plots",
    buildingDimensions: "100% Dry Tableland · Instant Allocation with 50% Down Payment",
    price: {
      amount: 10800000,
      currency: "₦",
      display: "From ₦10,800,000",
      initialDeposit: "From ₦3,000,000",
      pricePerSqm: "From ₦36,000 / SQM",
      promoNote: "Start with just ₦3M Deposit · Pay 50% for Instant Physical Plot Allocation"
    },
    availableUnitTypes: [
      {
        name: "300sqm Starter Plot",
        price: "₦10,800,000",
        amount: 10800000,
        deposit: "₦3,000,000 (or ₦5.4M for instant allocation)",
        description: "Compact residential plot suitable for 3-4 bedroom semi-detached duplex or residential bungalow with private parking."
      },
      {
        name: "500sqm Standard Plot",
        price: "₦18,000,000",
        amount: 18000000,
        deposit: "₦3,000,000 (or ₦9.0M for instant allocation)",
        description: "Full standard residential plot ideal for detached luxury duplex with pent floor, swimming pool & boys quarters.",
        isPopular: true
      },
      {
        name: "600sqm Executive Plot",
        price: "₦22,000,000",
        amount: 22000000,
        deposit: "₦3,000,000 (or ₦11.0M for instant allocation)",
        description: "Large executive plot ideal for twin duplexes, multi-family flats, or expansive personal private residence."
      },
      {
        name: "1,000sqm Commercial / Estate Plot",
        price: "₦40,000,000",
        amount: 40000000,
        deposit: "₦6,000,000 (or ₦20.0M for instant allocation)",
        description: "Prime commercial corner-piece or high-density residential development plot on central access boulevard."
      }
    ],
    titleDocumentation: {
      titleType: "Government Excision",
      registrationNumber: "Gazette Government Excision & Approved Registered Survey Plan",
      description: "100% verified legal security with authentic Government Excision, Approved Registered Survey Plan, and Deed of Assignment. 100% dry land free from government acquisition, court disputes, and customary encumbrances (Omo-Onile free). Plus complete documentation.",
      isVerified: true,
      documents: [
        "Government Excision",
        "Approved Survey Plan",
        "Deed of Assignment",
        "Instant Allocation Letter",
        "Contract of Sale",
        "Official Payment Receipt"
      ]
    },
    availability: {
      status: "Selling Fast",
      totalUnits: 80,
      availableUnits: 27,
      unitType: "Plots"
    },
    facilities: [
      {
        id: "ul-1",
        name: "Security Gatehouse & Boom Barrier",
        iconName: "ShieldCheck",
        description: "Gated estate entrance with round-the-clock security personnel and vehicular access control"
      },
      {
        id: "ul-2",
        name: "Graded Road Network & Drainage",
        iconName: "Route",
        description: "Well-engineered road layout with standardized drainage channels ensuring year-round access"
      },
      {
        id: "ul-3",
        name: "Perimeter Fencing & Beacons",
        iconName: "Home",
        description: "Substantial perimeter boundary fence with verified surveyor beacon points for each plot"
      },
      {
        id: "ul-4",
        name: "Solar Street Lighting",
        iconName: "Sun",
        description: "Stand-alone solar streetlights illuminating internal roads, intersections, and gatehouse"
      },
      {
        id: "ul-5",
        name: "Central Water Reticulation",
        iconName: "Droplets",
        description: "Borehole and central water piping infrastructure designed for estate residents"
      },
      {
        id: "ul-6",
        name: "Green Parks & Commercial Zone",
        iconName: "Trees",
        description: "Designated open green recreation spaces and community commercial shopping hub"
      }
    ],
    paymentPlans: [
      {
        id: "plan-0-3m",
        name: "0–3 Months Plan (Outright)",
        duration: "0 - 3 Months",
        initialDeposit: "Start with ₦3M deposit (or 50% for instant allocation)",
        monthlyInstallment: "Spread balance comfortably across 3 months",
        totalAmount: "₦10.8M (300sqm) / ₦18M (500sqm)",
        isPopular: true,
        savingsNote: "No extra charges (Zero interest). Pay 50% and get instant physical allocation."
      },
      {
        id: "plan-3-6m",
        name: "3–6 Months Structured Plan",
        duration: "3 - 6 Months",
        initialDeposit: "Start from ₦3,000,000 deposit",
        monthlyInstallment: "+10% total spread across 5 equal monthly installments",
        totalAmount: "₦11.88M (300sqm) / ₦19.8M (500sqm)",
        savingsNote: "+10% structured spread for smooth cash flow management."
      },
      {
        id: "plan-6-9m",
        name: "6–9 Months Extended Plan",
        duration: "6 - 9 Months",
        initialDeposit: "Start from ₦3,000,000 deposit",
        monthlyInstallment: "+15% total spread across 8 equal monthly installments",
        totalAmount: "₦12.42M (300sqm) / ₦20.7M (500sqm)",
        savingsNote: "+15% extended tenure allowing low capital entry for high-yield land banking."
      }
    ],
    investmentBenefits: [
      {
        id: "benefit-ul-1",
        title: "Fastest-Growing Corridor",
        highlight: "Surrounded by Mega Projects",
        description: "Strategically located in Elerangbe, Ibeju Lekki, near Lekki Deep Sea Port, Free Trade Zone, and Alaro City with massive infrastructure investments."
      },
      {
        id: "benefit-ul-2",
        title: "Instant Physical Allocation",
        highlight: "Pay 50% to Allocate",
        description: "Pay 50% initial down payment and receive immediate physical allocation with survey beacons on site."
      },
      {
        id: "benefit-ul-3",
        title: "Flexible Entry Barrier",
        highlight: "Start with ₦3 Million",
        description: "Low entry threshold: start with just ₦3 Million deposit and spread payments comfortably with zero extra charges for up to 3 months."
      },
      {
        id: "benefit-ul-4",
        title: "Versatile Property Utility",
        highlight: "Build · Invest · Resell",
        description: "100% dry tableland ideal for immediate building, commercial development, or holding for high capital gains."
      }
    ],
    gallery: [
      {
        id: "ul-gal-1",
        title: "Urbanlux Estate Gatehouse & Entrance Signage",
        type: "image",
        category: "render",
        url: "/images/urbanlux_estate_gatehouse_1794228416059.jpg",
        dateAdded: "November 2026",
        description: "Modern gatehouse with security control post, boom barrier, perimeter fence, and official estate signage in Elerangbe"
      },
      {
        id: "ul-gal-2",
        title: "Aerial Drone Master Layout of Elerangbe Corridor",
        type: "image",
        category: "aerial",
        url: "/images/urbanlux_estate_hero_1794228415816.jpg",
        dateAdded: "November 2026",
        description: "Top-down master plan view showing 100% dry tableland, marked road networks, and proximity to Lekki-Epe Expressway"
      },
      {
        id: "ul-gal-3",
        title: "Active Site Inspection & Survey Beacons",
        type: "image",
        category: "site_inspection",
        url: "/images/urbanlux_estate_plots_1794228416086.jpg",
        dateAdded: "November 2026",
        description: "Clients and surveyors on site reviewing cleared plots, beacon layout markers, and verified boundary coordinates"
      },
      {
        id: "ul-gal-4",
        title: "Site Drone Inspection & Surrounding Infrastructure",
        type: "video",
        category: "site_inspection",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnailUrl: "/images/urbanlux_estate_hero_1794228415816.jpg",
        videoDuration: "2:10",
        dateAdded: "November 2026",
        description: "Comprehensive aerial video tour of Elerangbe road access, dry ground topography, and nearby developments"
      }
    ],
    companyContact: {
      phone: "09047674938",
      whatsappNumber: "2349047674938",
      displayPhone: "0904 767 4938",
      defaultMessage: "Hello Property Dey Ltd. I scanned the QR code for Urbanlux Estate (Elerangbe, Ibeju Lekki) and would like to reserve a plot."
    },
    updatedAt: "2026-11-09T04:00:00.000Z"
  },
  {
    id: "ikota-lekki-duplex",
    slug: "ikota-lekki-duplex",
    name: "5-Bedroom Luxury Detached Duplex",
    tagline: "Turnkey 5-Bed Duplex with Swimming Pool, BQ & Line 33 Power in Ikota GRA, Lekki",
    heroImage: "https://res.cloudinary.com/auxlootd/video/upload/so_3,w_960,c_scale/v1794305768/VID-20261110-WA0003.jpg",
    location: {
      address: "Ikota GRA by 2nd Toll Gate",
      landmark: "Directly accessible by 2nd Toll Gate, minutes to Lekki Phase 1, Victoria Island, Chevron, Megamound Estate & top international schools",
      city: "Ikota Lekki",
      state: "Lagos State, Nigeria",
      googleMapsUrl: "https://maps.google.com/?q=Ikota+GRA+Lekki+Lagos"
    },
    description: "An architectural masterpiece: 5-Bedroom Fully Detached Luxury Duplex with private swimming pool and self-contained Boys Quarters (BQ) in the prestigious, secured enclave of Ikota GRA by 2nd Toll Gate, Lekki, Lagos.\n\nDesigned for discerning buyers seeking turnkey luxury, this magnificent residence features all ensuite bedrooms, dedicated Line 33 uninterrupted 24-hour power supply, integrated Bluetooth surround ceiling speakers, contemporary POP ceilings with ambient lighting, fully fitted chef's kitchen with integrated appliances, CCTV security, walk-in closets, frameless walk-in showers, and a spa jacuzzi in the primary suite. 100% verified legal title with Certificate of Occupancy (C of O), Governor's Consent, and Lagos State Approved Building Permit.",
    highlights: [
      "5 Lavish Bedrooms — All Ensuite with Designer Baths & Fitted Wardrobes",
      "Private In-Ground Swimming Pool with Water Fountain & Poolside Deck",
      "Self-Contained Staff Quarters (BQ) with Private Access",
      "Connected to Dedicated Line 33 for Uninterrupted 24/7 Power Supply",
      "24-Hour Uniformed Security & Estate Gatehouse Access Control",
      "Integrated Bluetooth Ceiling Speakers throughout Living & Master Suites",
      "Contemporary Architectural POP Ceilings with Concealed LED Accent Lighting",
      "Fully Fitted Chef Kitchen with Extractor, Oven, Microwave & Custom Cabinetry",
      "360-Degree CCTV Security Cameras & Motion Surveillance",
      "Central Water Heating, High-Pressure Treated Water System & Jacuzzi",
      "Frameless Glass Walk-in Showers & Custom Master Walk-in Closet",
      "Secure Verified Title: Certificate of Occupancy (C of O), Governor's Consent & Building Permit"
    ],
    landSize: "5-Bedroom Detached Duplex + Pool & BQ",
    buildingDimensions: "Spacious Multi-Level Compound, Private Pool Deck & Ample 4+ Car Parking",
    price: {
      amount: 300000000,
      currency: "₦",
      display: "₦300,000,000",
      initialDeposit: "30% (₦90,000,000)",
      pricePerSqm: "Ikota GRA by 2nd Toll Gate, Lekki",
      promoNote: "Brand New Turnkey Duplex Ready for Immediate Handover · 100% Verified Title"
    },
    availableUnitTypes: [
      {
        name: "5-Bedroom Fully Detached Duplex + Pool & BQ",
        price: "₦300,000,000",
        amount: 300000000,
        deposit: "₦90,000,000 (30%)",
        description: "5 all-ensuite bedrooms, swimming pool, self-contained BQ, dedicated Line 33 power, Bluetooth speakers, POP ceilings, fitted kitchen, CCTV & jacuzzi.",
        isPopular: true
      }
    ],
    titleDocumentation: {
      titleType: "C of O, Governor's Consent & Building Permit",
      registrationNumber: "Certificate of Occupancy (C of O) · Governor's Consent · Lagos State Approved Building Permit",
      description: "100% verified legal title and structural authorization with genuine Certificate of Occupancy (C of O), Governor's Consent, and Lagos State Government Approved Building Permit. Free from any dispute or encumbrance.",
      isVerified: true,
      documents: [
        "Certificate of Occupancy (C of O)",
        "Governor's Consent",
        "Lagos State Approved Building Permit",
        "Deed of Assignment",
        "Registered Survey Plan",
        "Homeowner Handover Keys & Pack"
      ]
    },
    availability: {
      status: "Selling Fast",
      totalUnits: 1,
      availableUnits: 1,
      unitType: "Duplex"
    },
    facilities: [
      {
        id: "ik-1",
        name: "Private Swimming Pool",
        iconName: "Droplets",
        description: "Private in-ground swimming pool with poolside lounge area and water fountain feature"
      },
      {
        id: "ik-2",
        name: "Dedicated Power Line 33",
        iconName: "Zap",
        description: "Direct connection to the high-reliability Line 33 grid ensuring continuous 24/7 power supply"
      },
      {
        id: "ik-3",
        name: "24-Hour Security & CCTV",
        iconName: "ShieldCheck",
        description: "Gated estate security patrol, access-controlled gatehouse, and complete CCTV perimeter surveillance"
      },
      {
        id: "ik-4",
        name: "Bluetooth Ceiling Speakers",
        iconName: "Activity",
        description: "Smart integrated surround sound Bluetooth speakers in main living area and master bedroom"
      },
      {
        id: "ik-5",
        name: "Fully Fitted Chef's Kitchen",
        iconName: "Home",
        description: "Modern cabinetry, heat extractor, integrated microwave, oven, gas burner, and island counter"
      },
      {
        id: "ik-6",
        name: "Spa Jacuzzi & Walk-in Showers",
        iconName: "Sun",
        description: "Primary bathroom features spa-grade jacuzzi, dual vanity, and frameless walk-in glass shower"
      },
      {
        id: "ik-7",
        name: "Self-Contained BQ & Parking",
        iconName: "Home",
        description: "Dedicated boys quarters with private bath and spacious stamped concrete parking for 4+ cars"
      },
      {
        id: "ik-8",
        name: "Ikota GRA by 2nd Toll Gate",
        iconName: "Route",
        description: "Prime location just off the Lekki-Epe expressway by the 2nd toll gate, minutes to Lekki Phase 1"
      }
    ],
    paymentPlans: [
      {
        id: "plan-ikota-outright",
        name: "Outright Purchase",
        duration: "0 - 30 Days",
        initialDeposit: "100%",
        monthlyInstallment: "One-Time Payment",
        totalAmount: "₦300,000,000",
        isPopular: true,
        savingsNote: "Immediate keys handover, Deed of Assignment execution & instant physical move-in."
      },
      {
        id: "plan-ikota-3m",
        name: "3-Month Structured Spread",
        duration: "0 - 3 Months",
        initialDeposit: "30% (₦90,000,000)",
        monthlyInstallment: "₦105,000,000 / mo (2 installments)",
        totalAmount: "₦300,000,000",
        savingsNote: "Zero interest structured spread with 30% initial commitment."
      },
      {
        id: "plan-ikota-6m",
        name: "6-Month Flexible Plan",
        duration: "6 Months",
        initialDeposit: "30% (₦90,000,000)",
        monthlyInstallment: "₦43,000,000 / mo (5 installments)",
        totalAmount: "₦305,000,000",
        savingsNote: "Convenient 6-month milestone payment schedule."
      }
    ],
    investmentBenefits: [
      {
        id: "benefit-ik-1",
        title: "High Capital Value Area",
        highlight: "Ikota GRA Prime Zone",
        description: "Ikota GRA by the 2nd toll gate is one of Lekki's fastest appreciating residential corridors with strong capital appreciation and premium rental values."
      },
      {
        id: "benefit-ik-2",
        title: "Turnkey Ready for Possession",
        highlight: "Brand New Construction",
        description: "100% completed brand-new home with premium fittings, swimming pool, BQ, and smart appliances ready for immediate occupation or rental."
      },
      {
        id: "benefit-ik-3",
        title: "Flawless Legal Documentation",
        highlight: "C of O & Building Permit",
        description: "Complete legal security with Certificate of Occupancy, Governor's Consent, and Lagos State Approved Building Permit."
      },
      {
        id: "benefit-ik-4",
        title: "Exceptional Rental & Short-Let Yield",
        highlight: "₦25M - ₦35M / Yr Yield",
        description: "Detached duplexes with swimming pools in this corridor command substantial annual rental income and high occupancy on luxury short-let platforms."
      }
    ],
    gallery: [
      {
        id: "ikota-gal-video",
        title: "5-Bedroom Duplex with Pool & BQ Full Walkthrough Tour",
        type: "video",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/v1794305768/VID-20261110-WA0003.mp4",
        thumbnailUrl: "https://res.cloudinary.com/auxlootd/video/upload/so_1,w_800,c_scale/v1794305768/VID-20261110-WA0003.jpg",
        videoDuration: "1:02",
        dateAdded: "November 2026",
        description: "Official comprehensive video walkthrough of the 5-bedroom detached duplex in Ikota GRA showing facade, swimming pool, fitted kitchen, master suite with jacuzzi, and POP ceilings."
      },
      {
        id: "ikota-gal-1",
        title: "Exterior Architecture & Private Compound",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_3,w_960,c_scale/v1794305768/VID-20261110-WA0003.jpg",
        dateAdded: "November 2026",
        description: "Contemporary multi-level facade in Ikota GRA featuring glass balconies, perimeter security fence, and private gatehouse"
      },
      {
        id: "ikota-gal-2",
        title: "Spacious Living Lounge with POP & Bluetooth Speakers",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_15,w_960,c_scale/v1794305768/VID-20261110-WA0003.jpg",
        dateAdded: "November 2026",
        description: "Expansive open-plan living room with high-grade POP ceilings, recessed LED lighting, and integrated ceiling Bluetooth sound system"
      },
      {
        id: "ikota-gal-3",
        title: "Private In-Ground Swimming Pool & Relaxation Deck",
        type: "image",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_25,w_960,c_scale/v1794305768/VID-20261110-WA0003.jpg",
        dateAdded: "November 2026",
        description: "Crystal clear swimming pool with water fountain spouts and private patio deck for family relaxation and entertaining"
      },
      {
        id: "ikota-gal-4",
        title: "Fully Fitted Chef's Kitchen & Marble Island",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_38,w_960,c_scale/v1794305768/VID-20261110-WA0003.jpg",
        dateAdded: "November 2026",
        description: "Modern kitchen equipped with custom cabinetry, heat extractor, integrated microwave and oven, double sink, and marble countertops"
      },
      {
        id: "ikota-gal-5",
        title: "Luxury Primary Bedroom Suite & Walk-in Wardrobe",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_48,w_960,c_scale/v1794305768/VID-20261110-WA0003.jpg",
        dateAdded: "November 2026",
        description: "Palatial primary master bedroom with large viewing windows, custom walk-in wardrobe closets, and ambient mood lighting"
      },
      {
        id: "ikota-gal-6",
        title: "Primary Ensuite Bathroom, Spa Jacuzzi & Glass Shower",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_56,w_960,c_scale/v1794305768/VID-20261110-WA0003.jpg",
        dateAdded: "November 2026",
        description: "Designer master bathroom complete with deep soaking jacuzzi tub, frameless glass walk-in rain shower, and water heater system"
      }
    ],
    companyContact: {
      phone: "09047674938",
      whatsappNumber: "2349047674938",
      displayPhone: "0904 767 4938",
      defaultMessage: "Hello Property Dey Ltd. I scanned the QR code for the 5-Bedroom Luxury Duplex in Ikota Lekki (₦300M with Pool & BQ) and would like to schedule a private inspection."
    },
    updatedAt: "2026-11-10T02:30:00.000Z"
  },
  {
    id: "pennsylvania-sangotedo-duplex",
    slug: "pennsylvania-sangotedo-duplex",
    name: "4-Bed Automated Detached Duplexes",
    tagline: "Fully Automated 3-Unit Enclave with Private Cinema, Pool & BQ in Lekki Pennsylvania, Sangotedo",
    heroImage: "https://res.cloudinary.com/auxlootd/video/upload/so_2,w_960,c_scale/v1794307764/VID-20261110-WA0005.jpg",
    location: {
      address: "Lekki Pennsylvania, Sangotedo, Ajah",
      landmark: "Directly located in Lekki Pennsylvania, Sangotedo, minutes from Novare Lekki Mall (Shoprite), Lagos Business School, Crown Estate & Monastery Road",
      city: "Sangotedo, Ajah",
      state: "Lagos State, Nigeria",
      googleMapsUrl: "https://maps.google.com/?q=Sangotedo+Ajah+Lekki+Lagos"
    },
    description: "Exclusive private development of 3 fully automated 4-bedroom detached luxury duplexes with private cinema, swimming pool, and self-contained BQ in the serene, highly secured enclave of Lekki Pennsylvania, Sangotedo, Ajah.\n\nCrafted with cutting-edge smart home automation, each residence features keyless smart automated door access, all-ensuite bedrooms, contemporary POP ceilings with aesthetic light fittings and chandeliers, a designer fully fitted kitchen equipped with double-door refrigerator and washing machine, built-in Bluetooth ceiling speakers, private family lounge, expansive balconies, central water heating, walk-in closets, CCTV security, private in-ground swimming pool, and private cinema. 100% verified title with Certificate of Occupancy (C of O) and approved Lagos State building approval.",
    highlights: [
      "3 Brand New Fully Automated 4-Bedroom Detached Luxury Duplexes",
      "Front Unit: ₦450M (Asking) · Back Units: ₦380M (Asking)",
      "Private In-House Cinema Room with Acoustic Design & Ambient Lighting",
      "Private In-Ground Swimming Pool with Poolside Relaxation Deck",
      "Smart Keyless Automated Entry Door & Smart Home Integration",
      "All Rooms Ensuite with Contemporary POP Ceilings & Crystal Chandeliers",
      "Fully Fitted Modern Kitchen with Double-Door Refrigerator & Washing Machine",
      "Integrated Bluetooth Ceiling Surround Sound Speakers",
      "Dedicated Upper-Floor Family Lounge & Scenic Private Balconies",
      "Self-Contained Staff Quarters (BQ) with Private Access",
      "Comprehensive CCTV Surveillance & Highly Secured Gated Neighborhood",
      "Secure Verified Title: Certificate of Occupancy (C of O) & Building Approval"
    ],
    landSize: "4-Bed Fully Detached + Cinema, Pool & BQ",
    buildingDimensions: "Multi-Level Smart Architectural Mansion · 4 Ensuite Beds · Private Cinema · Pool · BQ",
    price: {
      amount: 380000000,
      currency: "₦",
      display: "₦380M - ₦450M (Asking)",
      initialDeposit: "30% Initial Deposit",
      pricePerSqm: "Lekki Pennsylvania, Sangotedo",
      promoNote: "Front Unit: ₦450M (Asking) · Back Units: ₦380M (Asking) · Brand New with C of O & Cinema"
    },
    availableUnitTypes: [
      {
        name: "4-Bedroom Back Unit + Cinema, Pool & BQ",
        price: "₦380,000,000 (Asking)",
        amount: 380000000,
        deposit: "₦114,000,000 (30%)",
        description: "Fully automated detached 4-bed duplex with private cinema room, swimming pool, self-contained BQ, double-door fridge, washing machine, Bluetooth speakers & CCTV (Serene rear positioning).",
        isPopular: true
      },
      {
        name: "4-Bedroom Prime Front Unit + Cinema, Pool & BQ",
        price: "₦450,000,000 (Asking)",
        amount: 450000000,
        deposit: "₦135,000,000 (30%)",
        description: "Premier front-facing 4-bed detached duplex with commanding street elevation, expanded private driveway, private cinema, swimming pool, BQ & smart home automation."
      }
    ],
    titleDocumentation: {
      titleType: "C of O & Building Approval",
      registrationNumber: "Certificate of Occupancy (C of O) · Lagos State Building Approval",
      description: "100% verified legal security and building authorization with authentic Certificate of Occupancy (C of O), Lagos State Government Building Approval, Registered Survey, and Deed of Assignment. Zero encumbrance.",
      isVerified: true,
      documents: [
        "Certificate of Occupancy (C of O)",
        "Lagos State Building Approval",
        "Deed of Assignment",
        "Registered Survey Plan",
        "Smart Automation Handover Pack",
        "Homeowner Keys & Warranty"
      ]
    },
    availability: {
      status: "Selling Fast",
      totalUnits: 3,
      availableUnits: 3,
      unitType: "Duplex Units"
    },
    facilities: [
      {
        id: "penn-1",
        name: "Smart Automated Access Door",
        iconName: "ShieldCheck",
        description: "Keyless automated smart door locks with biometric fingerprint, passcode, and remote app entry"
      },
      {
        id: "penn-2",
        name: "Private Cinema Room",
        iconName: "Activity",
        description: "Dedicated private cinema hall with acoustic insulation and theater-grade ambient LED lighting"
      },
      {
        id: "penn-3",
        name: "Private Swimming Pool",
        iconName: "Droplets",
        description: "In-ground swimming pool with poolside entertainment terrace and relaxation lounge"
      },
      {
        id: "penn-4",
        name: "Kitchen with Fridge & Washing Machine",
        iconName: "Home",
        description: "Fully fitted kitchen with double-door refrigerator, washing machine, heat extractor, oven & microwave"
      },
      {
        id: "penn-5",
        name: "Bluetooth Ceiling Speakers",
        iconName: "Sun",
        description: "Integrated Bluetooth surround sound speakers throughout the living areas and master suite"
      },
      {
        id: "penn-6",
        name: "Family Lounge & Chandeliers",
        iconName: "Home",
        description: "Private upper-floor family lounge, designer chandeliers, and architectural POP ceiling craft"
      },
      {
        id: "penn-7",
        name: "24/7 Security & CCTV",
        iconName: "ShieldCheck",
        description: "Gated secured neighborhood with 24-hour manned gatehouse and perimeter CCTV surveillance"
      },
      {
        id: "penn-8",
        name: "Lekki Pennsylvania Location",
        iconName: "Route",
        description: "Prime Sangotedo Ajah location minutes from Novare Mall, Shoprite, and Lekki-Epe expressway"
      }
    ],
    paymentPlans: [
      {
        id: "plan-penn-outright",
        name: "Outright Purchase",
        duration: "0 - 30 Days",
        initialDeposit: "100%",
        monthlyInstallment: "One-Time Payment",
        totalAmount: "₦380,000,000 (Back) / ₦450,000,000 (Front)",
        isPopular: true,
        savingsNote: "Immediate automated keys handover, Deed of Assignment execution & instant physical move-in."
      },
      {
        id: "plan-penn-3m",
        name: "3-Month Structured Spread",
        duration: "0 - 3 Months",
        initialDeposit: "30% Initial Deposit",
        monthlyInstallment: "Balance spread across 2 equal monthly installments",
        totalAmount: "₦380,000,000 (Back) / ₦450,000,000 (Front)",
        savingsNote: "Zero interest developer transition plan with 30% initial commitment."
      },
      {
        id: "plan-penn-6m",
        name: "6-Month Flexible Spread",
        duration: "6 Months",
        initialDeposit: "30% Initial Deposit",
        monthlyInstallment: "Balance spread across 5 equal installments",
        totalAmount: "₦385,000,000 (Back) / ₦455,000,000 (Front)",
        savingsNote: "Convenient 6-month developer milestone payment schedule."
      }
    ],
    investmentBenefits: [
      {
        id: "benefit-penn-1",
        title: "High-Growth Lekki Corridor",
        highlight: "Sangotedo Ajah Hotspot",
        description: "Lekki Pennsylvania Sangotedo is experiencing rapid residential appreciation near Novare Mall, Sky Mall, and business corridors."
      },
      {
        id: "benefit-penn-2",
        title: "Fully Automated & Move-in Ready",
        highlight: "Brand New Turnkey Build",
        description: "Equipped with automated smart doors, private cinema, swimming pool, double-door fridge, washing machine, and integrated Bluetooth sound."
      },
      {
        id: "benefit-penn-3",
        title: "Secure Government Title",
        highlight: "C of O & Building Approval",
        description: "Flawless legal documentation with Certificate of Occupancy (C of O), Lagos State Building Approval, and Deed of Assignment."
      },
      {
        id: "benefit-penn-4",
        title: "Strong Rental & Short-Let Demand",
        highlight: "₦20M - ₦30M / Yr Yield",
        description: "Luxury 4-bed detached homes with cinema and pool command top-tier rental rates and high short-let occupancy in Lekki."
      }
    ],
    gallery: [
      {
        id: "penn-gal-video",
        title: "4-Bedroom Duplex with Cinema & Pool Full Walkthrough Tour",
        type: "video",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/v1794307764/VID-20261110-WA0005.mp4",
        thumbnailUrl: "https://res.cloudinary.com/auxlootd/video/upload/so_2,w_800,c_scale/v1794307764/VID-20261110-WA0005.jpg",
        videoDuration: "2:22",
        dateAdded: "November 2026",
        description: "Official comprehensive 2:22 walkthrough of the 4-bedroom automated detached duplex in Lekki Pennsylvania Sangotedo featuring automated door, cinema room, pool, double-door fridge, washing machine, and chandeliers."
      },
      {
        id: "penn-gal-video-2",
        title: "4-Bed Automated Detached Duplex — Interior & Exterior Video Tour",
        type: "video",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/v1794408381/VID-20261110-WA0001.mp4",
        thumbnailUrl: "https://res.cloudinary.com/auxlootd/video/upload/so_2,w_800,c_scale/v1794408381/VID-20261110-WA0001.jpg",
        videoDuration: "2:02",
        dateAdded: "November 2026",
        description: "Additional inspection walkthrough of the 4-bedroom automated detached duplexes in Lekki Pennsylvania, Sangotedo highlighting smart automation, spacious living quarters, modern finishes, and exterior frontage."
      },
      {
        id: "penn-gal-1",
        title: "Modern Architectural Facade & Automated Entry",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_2,w_960,c_scale/v1794307764/VID-20261110-WA0005.jpg",
        dateAdded: "November 2026",
        description: "Brand new contemporary exterior architecture with smart automated door, expansive private parking, and perimeter security in Lekki Pennsylvania"
      },
      {
        id: "penn-gal-2",
        title: "Spacious Living Room, POP Ceilings & Crystal Chandelier",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_20,w_960,c_scale/v1794307764/VID-20261110-WA0005.jpg",
        dateAdded: "November 2026",
        description: "Palatial living lounge with designer POP ceiling, statement crystal chandelier, aesthetic light fittings, and Bluetooth surround sound speakers"
      },
      {
        id: "penn-gal-3",
        title: "Fitted Kitchen with Double-Door Fridge & Washing Machine",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_50,w_960,c_scale/v1794307764/VID-20261110-WA0005.jpg",
        dateAdded: "November 2026",
        description: "Fully fitted luxury kitchen complete with integrated double-door refrigerator, automatic washing machine, heat extractor, and custom cabinetry"
      },
      {
        id: "penn-gal-4",
        title: "Private In-House Cinema Room & Acoustic Lighting",
        type: "image",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_80,w_960,c_scale/v1794307764/VID-20261110-WA0005.jpg",
        dateAdded: "November 2026",
        description: "Exclusive private cinema theater room with sound acoustic insulation, tiered viewing space, and immersive mood lighting"
      },
      {
        id: "penn-gal-5",
        title: "Private Swimming Pool & Outdoor Relaxation Terrace",
        type: "image",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_105,w_960,c_scale/v1794307764/VID-20261110-WA0005.jpg",
        dateAdded: "November 2026",
        description: "Private in-ground swimming pool with clean filtration system, outdoor shower, and entertainment patio"
      },
      {
        id: "penn-gal-6",
        title: "Luxury Primary Bedroom Suite, Walk-in Closet & Balcony",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_125,w_960,c_scale/v1794307764/VID-20261110-WA0005.jpg",
        dateAdded: "November 2026",
        description: "Expansive master bedroom with walk-in wardrobe closet, water heater, private balcony, and contemporary ensuite bathroom"
      }
    ],
    companyContact: {
      phone: "09047674938",
      whatsappNumber: "2349047674938",
      displayPhone: "0904 767 4938",
      defaultMessage: "Hello Property Dey Ltd. I scanned the QR code for the 4-Bedroom Automated Detached Duplex in Lekki Pennsylvania Sangotedo (₦380M-₦450M with Cinema & Pool) and would like to schedule a private inspection."
    },
    updatedAt: "2026-11-10T02:50:00.000Z"
  },
  {
    id: "ikate-lekki-apartments",
    slug: "ikate-lekki-apartments",
    name: "14 Units of 2-Bedroom Luxury Apartments",
    tagline: "Brand New Automated 2-Bedroom Apartments with Chandeliers & Balcony in Ikate Lekki, Lagos",
    heroImage: "https://res.cloudinary.com/suah9ntb/video/upload/so_2,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
    location: {
      address: "Prime Residential Enclave, Ikate Lekki",
      landmark: "Minutes from Lekki Phase 1, Meadow Hall Way, Elegushi Beach Road, Nike Art Gallery & Victoria Island",
      city: "Ikate Lekki",
      state: "Lagos State, Nigeria",
      googleMapsUrl: "https://maps.google.com/?q=Ikate+Lekki+Lagos"
    },
    description: "An exceptional luxury residential development comprising 14 units of brand new, beautifully finished 2-bedroom apartments available for sale in the prime, highly coveted neighbourhood of Ikate Lekki, Lagos.\n\nCrafted with cutting-edge smart home automation and modern architectural elegance, each apartment features keyless automated door access, all ensuite bedrooms with premium contemporary bathrooms, modern POP ceilings adorned with crystal chandeliers and aesthetic light fittings, a fully fitted modern kitchen with custom cabinetry, private scenic balconies, central water heating, comprehensive CCTV security surveillance, and 24-hour uninterrupted power in a serene and secured gated neighborhood. 100% verified documentation with Certificate of Occupancy (C of O), Lagos State Building Approval, and Governor's Consent in view.",
    highlights: [
      "14 Brand New Beautifully Finished 2-Bedroom Luxury Apartments (₦220M each)",
      "Keyless Automated Smart Entry Door Access & Modern Security Architecture",
      "All Bedrooms Ensuite with Contemporary Designer Bathrooms & Water Heaters",
      "Architectural POP Ceilings with Aesthetic Concealed Light Fittings & Chandeliers",
      "Fully Fitted Modern Kitchen with Custom Cabinetry, Polished Countertops & Heat Extractor",
      "Private Scenic Living Balconies Offering Natural Light & Fresh Ventilation",
      "Comprehensive 24/7 CCTV Surveillance & Gated Neighborhood Security Patrol",
      "24-Hour Continuous Power Supply, Backup Generator & Central Water Treatment",
      "Secure Title: Certificate of Occupancy (C of O), Building Approval & Governor's Consent (In View)",
      "Flexible 30% Initial Deposit Secures Temporary Allocation with 12-Month Spread"
    ],
    landSize: "14 Units of 2-Bedroom Luxury Apartments",
    buildingDimensions: "Spacious Open Living & Dining, Ensuite Bedrooms with Balcony & Fitted Kitchen",
    price: {
      amount: 220000000,
      currency: "₦",
      display: "₦220,000,000",
      initialDeposit: "30% (₦66,000,000)",
      pricePerSqm: "Ikate Lekki, Lagos",
      promoNote: "Brand New Turnkey 2-Bed Luxury Apartments · 14 Units Available · 30% Initial Deposit"
    },
    availableUnitTypes: [
      {
        name: "2-Bedroom Luxury Apartment (Automated)",
        price: "₦220,000,000",
        amount: 220000000,
        deposit: "₦66,000,000 (30%)",
        description: "Brand new automated 2-bed apartment featuring smart door, crystal chandeliers, fully fitted kitchen, all ensuite bedrooms, private balcony, POP ceilings, aesthetic lighting & CCTV.",
        isPopular: true
      }
    ],
    titleDocumentation: {
      titleType: "C of O, Building Approval & Governor's Consent (In View)",
      registrationNumber: "Certificate of Occupancy (C of O) · Lagos State Building Approval · Governor's Consent (In View)",
      description: "100% verified legal title and structural authorization with genuine Certificate of Occupancy (C of O), approved Lagos State Building Permit, and Governor's Consent in view. Free from any dispute or encumbrance.",
      isVerified: true,
      documents: [
        "Certificate of Occupancy (C of O)",
        "Lagos State Building Approval",
        "Governor's Consent (In View)",
        "Deed of Assignment",
        "Allocation Letter",
        "Registered Survey Plan"
      ]
    },
    availability: {
      status: "Available",
      totalUnits: 14,
      availableUnits: 14,
      unitType: "Apartments"
    },
    facilities: [
      {
        id: "ikate-1",
        name: "Smart Automated Access Door",
        iconName: "ShieldCheck",
        description: "Keyless automated smart door locks with biometric, passcode, and remote secure access"
      },
      {
        id: "ikate-2",
        name: "Chandeliers & POP Ceilings",
        iconName: "Sun",
        description: "Designer statement crystal chandeliers and high-grade POP ceilings with ambient lighting"
      },
      {
        id: "ikate-3",
        name: "Fully Fitted Modern Kitchen",
        iconName: "Home",
        description: "Modern cabinetry, heat extractor, marble-style countertops, double sink, and integrated storage"
      },
      {
        id: "ikate-4",
        name: "All Rooms Ensuite + Water Heaters",
        iconName: "Droplets",
        description: "Contemporary ensuite bathrooms with central water heaters, modern vanity, and walk-in shower"
      },
      {
        id: "ikate-5",
        name: "Private Scenic Balconies",
        iconName: "Home",
        description: "Private balconies offering outdoor relaxation, natural ventilation, and panoramic views"
      },
      {
        id: "ikate-6",
        name: "24-Hour Power + Backup",
        iconName: "Zap",
        description: "Continuous power supply supported by dedicated industrial generator and stable electricity"
      },
      {
        id: "ikate-7",
        name: "24/7 Security & CCTV",
        iconName: "ShieldCheck",
        description: "Gated secured neighborhood with round-the-clock security personnel and complete CCTV surveillance"
      },
      {
        id: "ikate-8",
        name: "Prime Ikate Lekki Location",
        iconName: "Route",
        description: "Superb central location minutes from Lekki Phase 1, Victoria Island, and top commercial centers"
      }
    ],
    paymentPlans: [
      {
        id: "plan-ikate-outright",
        name: "Outright Purchase",
        duration: "0 - 30 Days",
        initialDeposit: "100%",
        monthlyInstallment: "One-Time Payment",
        totalAmount: "₦220,000,000",
        isPopular: true,
        savingsNote: "Immediate keys handover, Deed of Assignment execution & instant physical move-in."
      },
      {
        id: "plan-ikate-6m",
        name: "6-Month Structured Plan",
        duration: "6 Months",
        initialDeposit: "30% (₦66,000,000)",
        monthlyInstallment: "Balance spread across 5 equal installments",
        totalAmount: "₦220,000,000",
        savingsNote: "Zero interest developer transition plan with 30% initial commitment."
      },
      {
        id: "plan-ikate-12m",
        name: "12-Month Flexible Spread",
        duration: "12 Months",
        initialDeposit: "30% Initial Deposit",
        monthlyInstallment: "Balance spread conveniently across 11 monthly installments",
        totalAmount: "₦226,000,000",
        savingsNote: "Secures temporary allocation upon 30% initial deposit."
      }
    ],
    investmentBenefits: [
      {
        id: "benefit-ikate-1",
        title: "Prime Ikate Lekki Location",
        highlight: "Top Rental Yield",
        description: "Ikate Lekki is one of Lagos' top rental hotspots with annual rental yields of ₦12M - ₦18M and high short-let occupancy."
      },
      {
        id: "benefit-ikate-2",
        title: "Turnkey Brand New Construction",
        highlight: "14 Units Ready",
        description: "Brand new multi-unit enclave equipped with automated smart doors, chandeliers, fitted kitchen, and luxury finishes ready for immediate occupation."
      },
      {
        id: "benefit-ikate-3",
        title: "Secure Government Title",
        highlight: "C of O & Building Approval",
        description: "Flawless legal documentation with Certificate of Occupancy (C of O), Lagos State Building Approval, and Governor's Consent in view."
      },
      {
        id: "benefit-ikate-4",
        title: "Proximity to Lekki Phase 1 & VI",
        highlight: "Minutes to City Center",
        description: "Prime positioning just off Lekki expressway, offering effortless access to Victoria Island, Ikoyi, Meadow Hall, and top business districts."
      }
    ],
    gallery: [
      {
        id: "ikate-gal-video",
        title: "14-Unit 2-Bedroom Luxury Apartment Full Walkthrough Video Tour",
        type: "video",
        category: "site_inspection",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/v1794316562/VID-20261110-WA0008.mp4",
        thumbnailUrl: "https://res.cloudinary.com/suah9ntb/video/upload/so_2,w_800,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        videoDuration: "1:20",
        dateAdded: "November 2026",
        description: "Official walkthrough tour of the beautifully finished 2-bedroom apartment in Ikate Lekki showcasing automated door, chandeliers, POP ceilings, fitted kitchen, all ensuite rooms, balcony, water heaters, and CCTV."
      },
      {
        id: "ikate-gal-1",
        title: "Automated Entry Door & Living Lounge with Chandelier",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/so_2,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        dateAdded: "November 2026",
        description: "Front entrance and spacious living area featuring keyless automated smart door, statement crystal chandelier, and aesthetic lighting"
      },
      {
        id: "ikate-gal-2",
        title: "Spacious Living Room, POP Ceilings & Ambient Lighting",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/so_15,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        dateAdded: "November 2026",
        description: "High-grade POP ceilings with recessed LED ambient light fixtures and contemporary porcelain tile flooring"
      },
      {
        id: "ikate-gal-3",
        title: "Fully Fitted Modern Kitchen with Cabinetry & Extractor",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/so_30,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        dateAdded: "November 2026",
        description: "Designer kitchen fitted with modern storage cabinets, heat extractor, marble-patterned countertops, and double sink"
      },
      {
        id: "ikate-gal-4",
        title: "Contemporary Corridor & Architectural Structure",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/so_45,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        dateAdded: "November 2026",
        description: "Clean interior hallway exhibiting modern structure, solid doors, and concealed lighting channels"
      },
      {
        id: "ikate-gal-5",
        title: "Ensuite Primary Bedroom Suite with Built-in Wardrobes",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/so_55,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        dateAdded: "November 2026",
        description: "Spacious master ensuite bedroom with floor-to-ceiling wardrobe storage, large windows, and serene ventilation"
      },
      {
        id: "ikate-gal-6",
        title: "Designer Bathroom with Water Heater & Walk-in Shower",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/so_65,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        dateAdded: "November 2026",
        description: "Contemporary ensuite bathroom complete with central water heater system, modern vanity, and glass walk-in shower"
      },
      {
        id: "ikate-gal-7",
        title: "Second Ensuite Bedroom & Scenic Balcony",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/suah9ntb/video/upload/so_75,w_960,c_scale/v1794316562/VID-20261110-WA0008.jpg",
        dateAdded: "November 2026",
        description: "Second all-ensuite bedroom with private access to outdoor balcony, modern POP styling, and fitted wardrobe"
      }
    ],
    companyContact: {
      phone: "09047674938",
      whatsappNumber: "2349047674938",
      displayPhone: "0904 767 4938",
      defaultMessage: "Hello Property Dey Ltd. I scanned the QR code for the 14 Units of 2-Bedroom Apartments in Ikate Lekki (₦220M) and would like to make enquiries."
    },
    updatedAt: "2026-11-10T05:30:00.000Z"
  },
  {
    id: "osapa-2bed-apartment",
    slug: "osapa-2bed-apartment",
    name: "2-Bedroom Luxury Apartment, Osapa London",
    tagline: "Beautifully Finished Turnkey 2-Bedroom Apartment with CCTV & POP Ceilings in Osapa London, Lekki",
    heroImage: "https://res.cloudinary.com/auxlootd/video/upload/so_2,w_960,c_scale/v1794308566/VID-20261110-WA0006.jpg",
    location: {
      address: "Osapa London, Lekki",
      landmark: "Minutes from Circle Mall, Lekki Phase 1, Victoria Island & Ikoyi",
      city: "Osapa London, Lekki",
      state: "Lagos State, Nigeria",
      googleMapsUrl: "https://maps.google.com/?q=Osapa+London+Lekki+Lagos"
    },
    description: "Beautifully finished 2-bedroom luxury apartment for sale in Osapa London, Lekki, Lagos.\n\nFeaturing all rooms ensuite, contemporary POP ceilings with aesthetic light fittings, fully fitted modern kitchen, water heaters, CCTV surveillance, 24-hour power and treated water in a highly secured gated neighborhood. 100% verified legal security with Certificate of Occupancy (C of O) and approved Building Approval.",
    highlights: [
      "Beautifully finished turnkey 2-Bedroom Apartment in Osapa London, Lekki",
      "All bedrooms ensuite with contemporary finishes & water heaters",
      "Architectural POP ceilings with aesthetic ambient light fittings",
      "Fully fitted modern kitchen with premium cabinetry & heat extractor",
      "Secured gated neighborhood with 24-hour security & CCTV surveillance",
      "Modern architectural structure with private balcony",
      "24-Hour continuous power supply + backup generator",
      "Secure Verified Title: Certificate of Occupancy (C of O) & Building Approval",
      "30% Initial deposit secures allocation with flexible payment spread"
    ],
    landSize: "2-Bedroom Luxury Apartment",
    buildingDimensions: "Spacious Living & Dining, Ensuite Bedrooms with Balcony & Fitted Kitchen",
    price: {
      amount: 170000000,
      currency: "₦",
      display: "₦170,000,000",
      initialDeposit: "30% (₦51,000,000)",
      pricePerSqm: "Osapa London, Lekki",
      promoNote: "Turnkey Ready for Immediate Move-in · 100% Verified C of O & Building Approval"
    },
    availableUnitTypes: [
      {
        name: "2-Bedroom Luxury Apartment (Turnkey)",
        price: "₦170,000,000",
        amount: 170000000,
        deposit: "₦51,000,000 (30%)",
        description: "All rooms ensuite, POP ceilings, fitted kitchen, aesthetic light fittings, modern structure, secured neighborhood, CCTV, water heater.",
        isPopular: true
      }
    ],
    titleDocumentation: {
      titleType: "C of O & Building Approval",
      registrationNumber: "Certificate of Occupancy (C of O) · Approved Building Permit",
      description: "100% verified legal security and structural authorization with genuine Certificate of Occupancy (C of O) and Lagos State Building Approval.",
      isVerified: true,
      documents: [
        "Certificate of Occupancy (C of O)",
        "Lagos State Building Approval",
        "Deed of Assignment",
        "Registered Survey Plan",
        "Allocation Letter"
      ]
    },
    availability: {
      status: "Available",
      totalUnits: 4,
      availableUnits: 2,
      unitType: "Apartments"
    },
    facilities: [
      {
        id: "osapa-1",
        name: "All Rooms Ensuite",
        iconName: "Home",
        description: "Spacious ensuite bedrooms with contemporary bathrooms and built-in wardrobes"
      },
      {
        id: "osapa-2",
        name: "POP Ceilings & Aesthetic Lighting",
        iconName: "Sun",
        description: "Designer POP ceilings with concealed ambient LED light fittings"
      },
      {
        id: "osapa-3",
        name: "Fully Fitted Kitchen",
        iconName: "Home",
        description: "Custom cabinetry, heat extractor, marble-style countertops and double sink"
      },
      {
        id: "osapa-4",
        name: "CCTV & 24/7 Security",
        iconName: "ShieldCheck",
        description: "Secured neighborhood with perimeter surveillance and round-the-clock guards"
      },
      {
        id: "osapa-5",
        name: "Central Water Heaters",
        iconName: "Droplets",
        description: "High-pressure treated water and quick-recovery water heaters installed"
      },
      {
        id: "osapa-6",
        name: "24-Hour Continuous Power",
        iconName: "Zap",
        description: "Uninterrupted electricity supported by heavy-duty estate generator"
      }
    ],
    paymentPlans: [
      {
        id: "plan-osapa-outright",
        name: "Outright Purchase",
        duration: "0 - 30 Days",
        initialDeposit: "100%",
        monthlyInstallment: "One-Time Payment",
        totalAmount: "₦170,000,000",
        isPopular: true,
        savingsNote: "Immediate keys handover & physical possession."
      },
      {
        id: "plan-osapa-6m",
        name: "6-Month Structured Plan",
        duration: "6 Months",
        initialDeposit: "30% (₦51,000,000)",
        monthlyInstallment: "Balance spread across 5 equal installments",
        totalAmount: "₦170,000,000",
        savingsNote: "Zero interest developer transition plan."
      }
    ],
    investmentBenefits: [
      {
        id: "benefit-osapa-1",
        title: "Prime Osapa London Enclave",
        highlight: "High Rental Return",
        description: "Osapa London is one of Lekki's top-performing residential pockets commanding strong annual rental yields."
      },
      {
        id: "benefit-osapa-2",
        title: "Turnkey Ready For Move-in",
        highlight: "100% Completed",
        description: "Fully finished luxury apartment ready for immediate personal occupation or short-let rental."
      },
      {
        id: "benefit-osapa-3",
        title: "Clean Verified Documentation",
        highlight: "C of O & Approval",
        description: "Verified Certificate of Occupancy and approved structural building permit with zero encumbrances."
      }
    ],
    gallery: [
      {
        id: "osapa-gal-video",
        title: "2-Bedroom Luxury Apartment Interior Walkthrough Video Tour",
        type: "video",
        category: "site_inspection",
        url: "https://res.cloudinary.com/auxlootd/video/upload/v1794308566/VID-20261110-WA0006.mp4",
        thumbnailUrl: "https://res.cloudinary.com/auxlootd/video/upload/so_2,w_800,c_scale/v1794308566/VID-20261110-WA0006.jpg",
        videoDuration: "1:22",
        dateAdded: "November 2026",
        description: "Official interior walkthrough of the beautifully finished 2-bedroom luxury apartment in Osapa London Lekki showcasing ensuite rooms, POP ceilings, fitted kitchen, aesthetic lighting, and CCTV."
      },
      {
        id: "osapa-gal-1",
        title: "Living Lounge with POP Ceilings & Aesthetic Lighting",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_15,w_960,c_scale/v1794308566/VID-20261110-WA0006.jpg",
        dateAdded: "November 2026",
        description: "Spacious living room featuring contemporary POP ceiling craft, ambient mood lighting, and sleek modern floor finishes"
      },
      {
        id: "osapa-gal-2",
        title: "Fully Fitted Modern Kitchen with Cabinetry & Extractor",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_30,w_960,c_scale/v1794308566/VID-20261110-WA0006.jpg",
        dateAdded: "November 2026",
        description: "Designer kitchen fitted with modern cabinetry, heat extractor, polished countertops, double sink, and integrated storage"
      },
      {
        id: "osapa-gal-3",
        title: "Modern Corridor & Architectural Structure",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_45,w_960,c_scale/v1794308566/VID-20261110-WA0006.jpg",
        dateAdded: "November 2026",
        description: "Internal hallway exhibiting clean architectural lines, solid core wooden doors, and continuous recessed illumination"
      },
      {
        id: "osapa-gal-4",
        title: "Primary Ensuite Bedroom Suite",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_50,w_960,c_scale/v1794308566/VID-20261110-WA0006.jpg",
        dateAdded: "November 2026",
        description: "Generous ensuite master bedroom with premium wardrobe cabinetry, natural ventilation, and warm aesthetic lighting"
      },
      {
        id: "osapa-gal-5",
        title: "Contemporary Ensuite Bathroom & Water Heater",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_70,w_960,c_scale/v1794308566/VID-20261110-WA0006.jpg",
        dateAdded: "November 2026",
        description: "Modern ensuite bathroom with central water heater system, designer vanity, premium chrome tapware, and walk-in shower"
      },
      {
        id: "osapa-gal-6",
        title: "Second Ensuite Bedroom with Built-in Wardrobes",
        type: "image",
        category: "render",
        url: "https://res.cloudinary.com/auxlootd/video/upload/so_78,w_960,c_scale/v1794308566/VID-20261110-WA0006.jpg",
        dateAdded: "November 2026",
        description: "Second bedroom featuring its own private ensuite bathroom, built-in wardrobes, and oversized windows for abundant natural light"
      }
    ],
    companyContact: {
      phone: "09047674938",
      whatsappNumber: "2349047674938",
      displayPhone: "0904 767 4938",
      defaultMessage: "Hello Property Dey Ltd. I scanned the QR code for the 2-Bedroom Luxury Apartment in Osapa London (₦170M) and would like to schedule an inspection."
    },
    updatedAt: "2026-11-10T05:30:00.000Z"
  }
];
