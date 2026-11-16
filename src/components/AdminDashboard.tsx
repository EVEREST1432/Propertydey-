import React, { useState, useRef } from 'react';
import { useProperty } from '../context/PropertyContext';
import { Property, GalleryItem, PropertyStatus, CompanyContact } from '../types/property';
import {
  Shield,
  Save,
  Plus,
  Trash2,
  Upload,
  RefreshCw,
  Image as ImageIcon,
  DollarSign,
  Phone,
  CheckCircle2,
  X,
  FileText
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    properties,
    currentProperty,
    updateProperty,
    createProperty,
    deleteProperty,
    resetToDefaults,
    setIsAdminMode,
    selectProperty
  } = useProperty();

  // Local draft state of the active property
  const [formData, setFormData] = useState<Property>({ ...currentProperty });
  const [activeTab, setActiveTab] = useState<'info' | 'pricing' | 'media' | 'contact' | 'new_prop'>('info');
  const [savedNotice, setSavedNotice] = useState(false);

  // File upload refs
  const heroFileRef = useRef<HTMLInputElement>(null);
  const galleryFileRef = useRef<HTMLInputElement>(null);

  // New property draft
  const [newPropName, setNewPropName] = useState('');
  const [newPropSlug, setNewPropSlug] = useState('');
  const [newPropPrice, setNewPropPrice] = useState('₦25,000,000');
  const [newPropDeposit, setNewPropDeposit] = useState('₦3,500,000');
  const [newPropSize, setNewPropSize] = useState('500 SQM');
  const [newPropLocation, setNewPropLocation] = useState('Lekki-Epe Corridor, Lagos');
  const [newPropTitle, setNewPropTitle] = useState('Certificate of Occupancy (C of O)');

  // Sync formData when currentProperty changes externally
  React.useEffect(() => {
    setFormData({ ...currentProperty });
  }, [currentProperty.id]);

  const handleSave = () => {
    updateProperty(formData);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  // Handle direct file upload for Hero
  const handleHeroUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData(prev => ({ ...prev, heroImage: event.target?.result as string }));
    };
    reader.readAsDataURL(file);
  };

  // Handle direct file upload for Gallery
  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const isVideo = file.type.startsWith('video');

    const reader = new FileReader();
    reader.onload = (event) => {
      const newItem: GalleryItem = {
        id: `media-${Date.now()}`,
        title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        type: isVideo ? 'video' : 'image',
        category: 'site_inspection',
        url: event.target?.result as string,
        dateAdded: 'Just now',
        description: 'Uploaded via Admin Dashboard from mobile gallery'
      };

      setFormData(prev => ({
        ...prev,
        gallery: [newItem, ...prev.gallery]
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteGalleryItem = (id: string) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter(item => item.id !== id)
    }));
  };

  // Create new property submission
  const handleCreateNewProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPropName.trim()) return;

    const slug = (newPropSlug || newPropName).toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const created = createProperty({
      slug,
      name: newPropName,
      tagline: 'Exclusive Real Estate Investment Enclave',
      heroImage: currentProperty.heroImage,
      location: {
        address: newPropLocation,
        landmark: 'Near Major Expressway Corridor',
        city: 'Lagos',
        state: 'Lagos State, Nigeria'
      },
      description: `${newPropName} is a premier master-planned development by Property Dey Ltd, providing immediate allocation, clean documentation, and high capital growth.`,
      highlights: [
        '100% Dry Tableland with Immediate Allocation',
        'Direct road frontage on expanding arterial expressway',
        'Free from any government acquisition'
      ],
      landSize: newPropSize,
      buildingDimensions: '15m x 33.3m (Standard Plot)',
      price: {
        amount: 25000000,
        currency: '₦',
        display: newPropPrice,
        initialDeposit: newPropDeposit,
        pricePerSqm: '₦50,000 / SQM',
        promoNote: 'Launch pricing valid for first 10 subscribers'
      },
      titleDocumentation: {
        titleType: newPropTitle,
        registrationNumber: 'Reg No. 12/12/2024 Lagos Registry',
        description: 'Registered title with verified survey beacons and government clearance.',
        isVerified: true
      },
      availability: {
        status: 'Available',
        totalUnits: 50,
        availableUnits: 50,
        unitType: 'Plots'
      },
      facilities: currentProperty.facilities,
      paymentPlans: currentProperty.paymentPlans,
      investmentBenefits: currentProperty.investmentBenefits,
      gallery: currentProperty.gallery,
      companyContact: {
        phone: "09047674938",
        whatsappNumber: "2349047674938",
        displayPhone: "0904 767 4938",
        defaultMessage: `Hello Property Dey Ltd. I scanned the QR code for ${newPropName} and would like to make enquiries.`
      }
    });

    setNewPropName('');
    setNewPropSlug('');
    setActiveTab('info');
    selectProperty(created.id);
  };

  return (
    <div className="bg-slate-900 border-b-2 border-emerald-500 text-slate-100 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Property Dey Admin Dashboard</h2>
                <span className="text-[10px] font-mono uppercase bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
                  Console
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Updating: <span className="text-emerald-400 font-semibold">{formData.name}</span> · Company Phone: <span className="text-emerald-400 font-mono font-semibold">{formData.companyContact.phone}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {savedNotice && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                <span>Published Live!</span>
              </span>
            )}

            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Publish Changes</span>
            </button>

            <button
              onClick={() => setIsAdminMode(false)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Close Admin Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-800 text-xs">
          {[
            { id: 'info', label: 'Property Info', icon: FileText },
            { id: 'pricing', label: 'Price & Status', icon: DollarSign },
            { id: 'media', label: 'Pictures & Videos', icon: ImageIcon },
            { id: 'contact', label: 'Company Phone (09047674938)', icon: Phone },
            { id: 'new_prop', label: '+ New Property', icon: Plus }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Property Info */}
        {activeTab === 'info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-3">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Property / Project Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Address / Corridor</label>
                <input
                  type="text"
                  value={formData.location.address}
                  onChange={(e) => setFormData({
                    ...formData,
                    location: { ...formData.location, address: e.target.value }
                  })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Landmarks & Proximity</label>
                <input
                  type="text"
                  value={formData.location.landmark}
                  onChange={(e) => setFormData({
                    ...formData,
                    location: { ...formData.location, landmark: e.target.value }
                  })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Description</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Land Size</label>
                  <input
                    type="text"
                    value={formData.landSize}
                    onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Building Dimensions</label>
                  <input
                    type="text"
                    value={formData.buildingDimensions}
                    onChange={(e) => setFormData({ ...formData, buildingDimensions: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Title Type</label>
                <input
                  type="text"
                  value={formData.titleDocumentation.titleType}
                  onChange={(e) => setFormData({
                    ...formData,
                    titleDocumentation: { ...formData.titleDocumentation, titleType: e.target.value }
                  })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Pricing & Availability */}
        {activeTab === 'pricing' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Selling Price (Display)</label>
              <input
                type="text"
                value={formData.price.display}
                onChange={(e) => setFormData({
                  ...formData,
                  price: { ...formData.price, display: e.target.value }
                })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Initial Deposit</label>
              <input
                type="text"
                value={formData.price.initialDeposit}
                onChange={(e) => setFormData({
                  ...formData,
                  price: { ...formData.price, initialDeposit: e.target.value }
                })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Price per SQM</label>
              <input
                type="text"
                value={formData.price.pricePerSqm}
                onChange={(e) => setFormData({
                  ...formData,
                  price: { ...formData.price, pricePerSqm: e.target.value }
                })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Property Availability Status</label>
              <select
                value={formData.availability.status}
                onChange={(e) => setFormData({
                  ...formData,
                  availability: { ...formData.availability, status: e.target.value as PropertyStatus }
                })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
              >
                <option value="Available">Available</option>
                <option value="Selling Fast">Selling Fast</option>
                <option value="Limited Units">Limited Units</option>
                <option value="Sold Out">Sold Out</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Available Units Remaining</label>
              <input
                type="number"
                value={formData.availability.availableUnits}
                onChange={(e) => setFormData({
                  ...formData,
                  availability: { ...formData.availability, availableUnits: parseInt(e.target.value) || 0 }
                })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Total Project Units</label>
              <input
                type="number"
                value={formData.availability.totalUnits}
                onChange={(e) => setFormData({
                  ...formData,
                  availability: { ...formData.availability, totalUnits: parseInt(e.target.value) || 0 }
                })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div className="sm:col-span-2 md:col-span-3">
              <label className="block text-slate-400 mb-1 font-semibold">Promotional Notice / Outright Perk</label>
              <input
                type="text"
                value={formData.price.promoNote || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  price: { ...formData.price, promoNote: e.target.value }
                })}
                placeholder="e.g. 5% Outright Discount Valid this month"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
              />
            </div>
          </div>
        )}

        {/* TAB 3: Media & Gallery */}
        {activeTab === 'media' && (
          <div className="space-y-4 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
              <div>
                <h4 className="font-bold text-white">Direct Picture & Video Upload</h4>
                <p className="text-[11px] text-slate-400">
                  Select media from your phone gallery or computer to upload directly to this property.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={galleryFileRef}
                  accept="image/*,video/*"
                  onChange={handleGalleryUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => galleryFileRef.current?.click()}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Choose from Phone/Computer</span>
                </button>
              </div>
            </div>

            {/* Hero Picture Replacement */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={formData.heroImage}
                  alt="Hero"
                  className="w-16 h-12 object-cover rounded-lg border border-slate-700"
                />
                <div>
                  <h5 className="font-bold text-white">Hero Header Banner</h5>
                  <p className="text-[11px] text-slate-400">Main photograph displayed when QR code is scanned</p>
                </div>
              </div>

              <div>
                <input
                  type="file"
                  ref={heroFileRef}
                  accept="image/*"
                  onChange={handleHeroUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => heroFileRef.current?.click()}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold text-xs border border-slate-700"
                >
                  Replace Hero Photo
                </button>
              </div>
            </div>

            {/* Current Gallery Items List */}
            <div className="space-y-2">
              <h5 className="font-semibold text-slate-400">Active Gallery Items ({formData.gallery.length})</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {formData.gallery.map(item => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 overflow-hidden">
                        <img src={item.thumbnailUrl || item.url} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="truncate">
                        <div className="font-semibold text-white truncate">{item.title}</div>
                        <div className="text-[10px] text-slate-500 uppercase">{item.category}</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteGalleryItem(item.id)}
                      className="p-1.5 text-slate-400 hover:text-red-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Company Phone & WhatsApp */}
        {activeTab === 'contact' && (
          <div className="space-y-4 text-xs max-w-xl">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-white text-sm">Official Company Contact Number</h4>
              </div>
              <p className="text-slate-400 text-xs">
                All client calls, WhatsApp inquiries, inspection bookings, and marketing flyers will exclusively use this single company phone number.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Company Phone Number</label>
                  <input
                    type="text"
                    value={formData.companyContact.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      companyContact: {
                        ...formData.companyContact,
                        phone: e.target.value,
                        displayPhone: e.target.value
                      }
                    })}
                    placeholder="09047674938"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">WhatsApp Number (e.g. 2349047674938)</label>
                  <input
                    type="text"
                    value={formData.companyContact.whatsappNumber}
                    onChange={(e) => setFormData({
                      ...formData,
                      companyContact: {
                        ...formData.companyContact,
                        whatsappNumber: e.target.value
                      }
                    })}
                    placeholder="2349047674938"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Default WhatsApp Message Template</label>
                <textarea
                  rows={2}
                  value={formData.companyContact.defaultMessage}
                  onChange={(e) => setFormData({
                    ...formData,
                    companyContact: {
                      ...formData.companyContact,
                      defaultMessage: e.target.value
                    }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Create New Property */}
        {activeTab === 'new_prop' && (
          <form onSubmit={handleCreateNewProperty} className="space-y-4 text-xs max-w-xl">
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
              <h4 className="font-bold text-white">Create New Digital Property Brochure</h4>
              <p className="text-slate-400 text-[11px]">
                Generates a brand new property page with its own unique link and dedicated QR code.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Property Name</label>
                <input
                  type="text"
                  required
                  value={newPropName}
                  onChange={(e) => {
                    setNewPropName(e.target.value);
                    if (!newPropSlug) {
                      setNewPropSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
                    }
                  }}
                  placeholder="e.g. The Crestwood Estate"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Unique Web Link Slug</label>
                <input
                  type="text"
                  required
                  value={newPropSlug}
                  onChange={(e) => setNewPropSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}
                  placeholder="e.g. crestwood-estate"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Selling Price</label>
                <input
                  type="text"
                  value={newPropPrice}
                  onChange={(e) => setNewPropPrice(e.target.value)}
                  placeholder="₦25,000,000"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Initial Deposit</label>
                <input
                  type="text"
                  value={newPropDeposit}
                  onChange={(e) => setNewPropDeposit(e.target.value)}
                  placeholder="₦3,500,000"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Plot Size</label>
                <input
                  type="text"
                  value={newPropSize}
                  onChange={(e) => setNewPropSize(e.target.value)}
                  placeholder="500 SQM"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Location / Address</label>
                <input
                  type="text"
                  value={newPropLocation}
                  onChange={(e) => setNewPropLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Title Type</label>
                <input
                  type="text"
                  value={newPropTitle}
                  onChange={(e) => setNewPropTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Create & Switch to New Property</span>
              </button>
            </div>
          </form>
        )}

        {/* Bottom Actions */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <button
            onClick={() => {
              if (confirm('Reset all properties back to original demo state?')) {
                resetToDefaults();
              }
            }}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Properties to Defaults</span>
          </button>

          <span className="text-[11px] text-slate-500">
            Property Dey Ltd CMS v2.0
          </span>
        </div>
      </div>
    </div>
  );
};
