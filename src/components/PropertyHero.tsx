import React from 'react';
import { useProperty } from '../context/PropertyContext';
import { MapPin, CheckCircle2, ShieldCheck, MessageCircle, Calendar, Phone, Play } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const PropertyHero: React.FC = () => {
  const { currentProperty, setInspectionModalOpen, setSelectedMedia } = useProperty();

  const primaryWhatsAppUrl = createWhatsAppLink(
    currentProperty.companyContact.whatsappNumber,
    currentProperty.companyContact.defaultMessage
  );

  const phoneUrl = `tel:${currentProperty.companyContact.phone}`;

  return (
    <section id="overview" className="relative bg-stone-900 text-white overflow-hidden">
      {/* Hero Media Container with Calm Architectural Vignette */}
      <div className="relative w-full min-h-[430px] sm:min-h-[490px] lg:min-h-[540px] flex flex-col justify-between gap-8 p-4 sm:p-8">
        <img
          src={currentProperty.heroImage}
          alt={currentProperty.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const firstImg = currentProperty.gallery?.find(g => g.type === 'image');
            if (firstImg && e.currentTarget.src !== firstImg.url) {
              e.currentTarget.src = firstImg.url;
            }
          }}
        />
        {/* Soft, calm architectural vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/45 to-stone-950/25" />

        {/* Top Badges / Metadata row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          {/* Calm, unboxed live metadata banner */}
          <div className="inline-flex items-center gap-2 bg-stone-950/65 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-medium text-stone-200 shadow-sm max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-semibold text-white tracking-wide shrink-0">{currentProperty.availability.status}</span>
            <span className="text-stone-400" aria-hidden="true">·</span>
            <span className="text-stone-300 font-mono text-[11px] truncate">
              {currentProperty.availability.availableUnits} of {currentProperty.availability.totalUnits} {currentProperty.availability.unitType}
            </span>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl">
          {/* Location marker */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-300 font-medium mb-2">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
            <span className="truncate">{currentProperty.location.address}, {currentProperty.location.city}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-2 font-serif-luxury">
            {currentProperty.name}
          </h1>

          {/* Tagline */}
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl line-clamp-3 sm:line-clamp-2 mb-5 leading-relaxed font-light">
            {currentProperty.tagline}
          </p>

          {/* Calm Action Buttons on Hero */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1c3829] hover:bg-[#254936] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 min-h-[42px] rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>WhatsApp Inquiries</span>
            </a>

            {currentProperty.gallery?.find(item => item.type === 'video') && (
              <button
                onClick={() => {
                  const videoItem = currentProperty.gallery.find(item => item.type === 'video');
                  if (videoItem) setSelectedMedia(videoItem);
                }}
                className="group inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium text-xs sm:text-sm px-4 py-2.5 min-h-[42px] rounded-xl border border-white/20 backdrop-blur-md transition-all active:scale-[0.98]"
              >
                <Play className="w-3.5 h-3.5 fill-current text-emerald-300 ml-0.5 shrink-0" />
                <span>
                  Video Tour ({currentProperty.gallery.find(item => item.type === 'video')?.videoDuration || '1:31'})
                </span>
              </button>
            )}

            <a
              href={phoneUrl}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-stone-200 font-medium text-xs sm:text-sm px-4 py-2.5 min-h-[42px] rounded-xl border border-white/15 backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5 text-stone-300 shrink-0" />
              <span>Call: {currentProperty.companyContact.displayPhone}</span>
            </a>

            <button
              onClick={() => setInspectionModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-stone-200 font-medium text-xs sm:text-sm px-4 py-2.5 min-h-[42px] rounded-xl border border-white/15 backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-stone-300 shrink-0" />
              <span>Book Inspection</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4-Item Key Specifications Strip (Calm Light Stone Design) */}
      <div className="bg-[#faf9f6] border-b border-stone-200/90 text-stone-800 px-4 sm:px-8 py-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Price */}
          <div className="pb-3 sm:pb-0 border-b sm:border-b-0 lg:border-r border-stone-200/80 lg:pr-4">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-stone-500 mb-1">
              Selling Price
            </div>
            <div className="text-xl sm:text-2xl font-bold text-[#1c3829] font-mono tabular-nums">
              {currentProperty.price.display}
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5 truncate">
              {currentProperty.price.pricePerSqm}
            </div>
          </div>

          {/* Initial Deposit */}
          <div className="pb-3 sm:pb-0 border-b sm:border-b-0 lg:border-r border-stone-200/80 lg:pr-4">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-stone-500 mb-1">
              Initial Deposit
            </div>
            <div className="text-xl sm:text-2xl font-bold text-stone-900 font-mono tabular-nums">
              {currentProperty.price.initialDeposit}
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5 truncate">
              {currentProperty.availability.unitType === 'Plots' ? '50% Gets Instant Allocation' : 'Secures Temporary Allocation'}
            </div>
          </div>

          {/* Configuration */}
          <div className="pb-3 sm:pb-0 border-b sm:border-b-0 lg:border-r border-stone-200/80 lg:pr-4">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-stone-500 mb-1">
              {currentProperty.availability.unitType === 'Plots' ? 'Available Plot Sizes' : 'Apartment Configuration'}
            </div>
            <div className="text-base sm:text-lg font-bold text-stone-900 truncate">
              {currentProperty.landSize}
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5 truncate">
              {currentProperty.buildingDimensions}
            </div>
          </div>

          {/* Title Documentation */}
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-stone-500 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Verified Title</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#1c3829] truncate">
              {currentProperty.titleDocumentation.titleType}
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5 flex items-center gap-1 truncate">
              <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
              <span className="truncate">{currentProperty.titleDocumentation.registrationNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
