import React, { useState, useRef, useEffect } from 'react';
import { useProperty } from '../context/PropertyContext';
import { Smartphone, Monitor, ChevronDown, MapPin, Check, Phone, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const {
    properties,
    currentProperty,
    selectProperty,
    mobileFrameMode,
    setMobileFrameMode
  } = useProperty();

  const [propMenuOpen, setPropMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setPropMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const headerWhatsAppUrl = createWhatsAppLink(
    currentProperty.companyContact.whatsappNumber,
    currentProperty.companyContact.defaultMessage
  );

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200 text-stone-800 transition-colors">
      {/* Top Utility bar for Property Switcher & Direct Contact */}
      <div className="bg-[#f2efe9] border-b border-stone-200/80 px-4 sm:px-6 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Active Property Switcher */}
          <div className="flex items-center gap-2 relative" ref={menuRef}>
            <span className="text-stone-500 font-medium hidden sm:inline text-[11px]">Active Listing:</span>
            
            <button
              onClick={() => setPropMenuOpen(!propMenuOpen)}
              className="group flex items-center gap-2 py-1 px-3 rounded-lg bg-white hover:bg-stone-50 border border-stone-300/80 text-stone-900 transition-all text-xs shadow-2xs"
              title="Click to switch digital property listing"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span className="font-semibold text-stone-900 tracking-tight truncate max-w-[170px] sm:max-w-[280px]">
                {currentProperty.name}
              </span>
              <span className="text-[10px] text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200 hidden md:inline font-mono">
                {currentProperty.price.display}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${propMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Rich Property Portfolio Dropdown */}
            {propMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-[min(calc(100vw-2rem),24rem)] bg-white border border-stone-200 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-stone-100 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 py-2.5 bg-stone-50 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                    Property Dey Portfolio ({properties.length} Estates)
                  </span>
                  <span className="text-[10px] text-emerald-800 font-medium">Select to View</span>
                </div>

                <div className="max-h-[380px] overflow-y-auto divide-y divide-stone-100">
                  {properties.map(p => {
                    const isSelected = p.id === currentProperty.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          selectProperty(p.id);
                          setPropMenuOpen(false);
                        }}
                        className={`w-full text-left p-3 flex items-center gap-3 transition-colors ${
                          isSelected
                            ? 'bg-emerald-50/70 border-l-4 border-emerald-700'
                            : 'hover:bg-stone-50 border-l-4 border-transparent'
                        }`}
                      >
                        {/* Thumbnail */}
                        <div className="w-14 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                          <img
                            src={p.heroImage}
                            alt={p.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              const firstImg = p.gallery?.find(g => g.type === 'image');
                              if (firstImg && target.src !== firstImg.url) {
                                target.src = firstImg.url;
                              }
                            }}
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-emerald-900' : 'text-stone-900'}`}>
                              {p.name}
                            </h4>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-0.5">
                            <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                            <span className="truncate">{p.location.city}</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] mt-1">
                            <span className="font-mono font-semibold text-emerald-800">
                              {p.price.display}
                            </span>
                            <span className="text-[10px] text-stone-400">
                              {p.availability.status}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="p-2.5 bg-stone-50 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Property Dey Ltd</span>
                  <span className="font-mono text-stone-400">propertydey.com</span>
                </div>
              </div>
            )}
          </div>

          {/* Right utility buttons: Calm Phone & Viewport controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone Link */}
            <a
              href="tel:09047674938"
              className="flex items-center gap-1.5 text-[11px] font-medium text-stone-700 hover:text-stone-950 transition-colors"
              title="Direct Telephone Line"
            >
              <Phone className="w-3 h-3 text-emerald-700" />
              <span className="font-mono font-semibold">0904 767 4938</span>
            </a>

            {/* Viewport Frame Toggle */}
            <button
              onClick={() => setMobileFrameMode(!mobileFrameMode)}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-stone-100 text-stone-600 transition-colors border border-stone-200 text-xs shadow-2xs"
              title="Toggle mobile device frame preview"
            >
              {mobileFrameMode ? (
                <>
                  <Monitor className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Full View</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-stone-500" />
                  <span>Mobile View</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-6">
        {/* Real Estate Crest & Wordmark */}
        <a href="#overview" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-[#1c3829] text-stone-100 flex items-center justify-center font-serif font-bold text-sm tracking-wider shadow-sm group-hover:bg-[#254936] transition-colors">
            PD
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 font-serif-luxury">
                Property Dey
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-600 border border-stone-300 px-1 py-0.2 rounded bg-stone-100">
                LTD
              </span>
            </div>
            <div className="text-[10px] text-stone-500 uppercase tracking-wider font-medium">
              Verified Real Estate Developments
            </div>
          </div>
        </a>

        {/* Calm Section Navigation (Tablet & Desktop) */}
        <nav className="hidden md:flex items-center md:gap-4 lg:gap-7 text-xs font-medium text-stone-600">
          <a href="#overview" className="hover:text-stone-950 transition-colors whitespace-nowrap">Overview</a>
          <a href="#specifications" className="hover:text-stone-950 transition-colors whitespace-nowrap">Specifications</a>
          <a href="#payment-plans" className="hover:text-stone-950 transition-colors whitespace-nowrap">Payment Plans</a>
          <a href="#gallery" className="hover:text-stone-950 transition-colors whitespace-nowrap">Gallery & Video</a>
          <a href="#contact" className="hover:text-stone-950 transition-colors whitespace-nowrap">Company Info</a>
        </nav>

        {/* Direct WhatsApp Contact CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={headerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 text-xs font-semibold text-white bg-[#1c3829] hover:bg-[#254936] rounded-xl shadow-xs transition-all active:scale-95"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
            <span><span className="hidden sm:inline">Inquire on </span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mobile & Small Tablet Quick-Jump Bar */}
      <nav
        aria-label="Mobile section navigation"
        className="flex md:hidden items-center gap-5 px-4 py-2 bg-[#faf9f6] border-t border-stone-200/70 overflow-x-auto no-scrollbar text-[11px] font-medium text-stone-600"
      >
        <a href="#overview" className="hover:text-stone-950 whitespace-nowrap py-0.5">Overview</a>
        <a href="#specifications" className="hover:text-stone-950 whitespace-nowrap py-0.5">Specifications</a>
        <a href="#payment-plans" className="hover:text-stone-950 whitespace-nowrap py-0.5">Payment Plans</a>
        <a href="#gallery" className="hover:text-stone-950 whitespace-nowrap py-0.5">Gallery & Video</a>
        <a href="#contact" className="hover:text-stone-950 whitespace-nowrap py-0.5">Company Info</a>
      </nav>
    </header>
  );
};

