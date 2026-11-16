import React from 'react';
import { useProperty } from '../context/PropertyContext';
import {
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Check,
  Zap,
  Sun,
  Droplets,
  Trees,
  Route,
  Home,
  Activity,
  ArrowRight,
  Waves,
  Camera,
  Cpu,
  Volume2,
  UtensilsCrossed,
  Sparkles,
  Lock,
  Building,
  Award,
  FileText
} from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const PropertySpecs: React.FC = () => {
  const { currentProperty } = useProperty();

  const getFacilityIcon = (iconName: string) => {
    const key = iconName.toLowerCase();
    const iconClass = "w-5 h-5 text-[#1c3829] transition-transform duration-200 group-hover/fac:scale-105";

    switch (true) {
      case key.includes('road') || key.includes('route') || key.includes('paved'):
        return <Route className={iconClass} />;
      case key.includes('sun') || key.includes('solar'):
        return <Sun className={iconClass} />;
      case key.includes('shield') || key.includes('guard') || key.includes('security'):
        return <ShieldCheck className={iconClass} />;
      case key.includes('cctv') || key.includes('camera'):
        return <Camera className={iconClass} />;
      case key.includes('droplet') || key.includes('water'):
        return <Droplets className={iconClass} />;
      case key.includes('zap') || key.includes('power') || key.includes('light') || key.includes('electric'):
        return <Zap className={iconClass} />;
      case key.includes('tree') || key.includes('green') || key.includes('landscape'):
        return <Trees className={iconClass} />;
      case key.includes('pool') || key.includes('swim') || key.includes('wave'):
        return <Waves className={iconClass} />;
      case key.includes('speaker') || key.includes('sound') || key.includes('bluetooth') || key.includes('audio'):
        return <Volume2 className={iconClass} />;
      case key.includes('auto') || key.includes('smart') || key.includes('cpu'):
        return <Cpu className={iconClass} />;
      case key.includes('kitchen') || key.includes('fitted'):
        return <UtensilsCrossed className={iconClass} />;
      case key.includes('light') || key.includes('aesthetic') || key.includes('chandelier'):
        return <Sparkles className={iconClass} />;
      case key.includes('gate') || key.includes('lock'):
        return <Lock className={iconClass} />;
      case key.includes('home') || key.includes('lounge') || key.includes('bq'):
        return <Home className={iconClass} />;
      case key.includes('activity') || key.includes('gym'):
        return <Activity className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };

  const titleEnquiryUrl = createWhatsAppLink(
    currentProperty.companyContact.whatsappNumber,
    `Hello Property Dey Ltd. I am reviewing the title documents for ${currentProperty.name} (${currentProperty.titleDocumentation.titleType}, ${currentProperty.titleDocumentation.registrationNumber}). Please share the survey beacon coordinates and verification file.`
  );

  return (
    <section id="specifications" className="py-12 sm:py-16 bg-[#f7f7f4] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span>Documentation & Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-stone-900 font-serif-luxury tracking-tight">
            Property Specifications & Legal Verification
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            Every Property Dey estate is verified for 100% legal security, authentic government title, and high-standard engineering infrastructure.
          </p>
        </div>

        {/* 2-Column Split: Detailed Narrative vs Title Documentation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description & Key Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>{currentProperty.description}</p>
            </div>

            {/* Highlights List with calm check icons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  Key Development Highlights
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(currentProperty.highlights || []).map((highlight, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-2.5 p-2 rounded-xl bg-white/80 border border-stone-200/70 text-xs sm:text-sm text-stone-800 transition-colors"
                  >
                    <span className="w-5 h-5 rounded-lg bg-stone-100 text-[#1c3829] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="leading-snug pt-0.5">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Landmarks Banner with calm pin */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span>Strategic Geographic Location</span>
                </div>
                <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-md font-medium">
                  {currentProperty.location.city}
                </span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                <strong className="text-stone-900 font-semibold">Address:</strong> {currentProperty.location.address}, {currentProperty.location.city}, {currentProperty.location.state}.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong className="text-stone-900 font-semibold">Landmarks:</strong> {currentProperty.location.landmark}.
              </p>
            </div>
          </div>

          {/* Right Column: Title & Documentation Card (5 cols) - Styled in Serene Deep Forest & Warm Stone */}
          <div className="lg:col-span-5 bg-[#1c3829] text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-[#254936] space-y-5">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-normal text-white font-serif-luxury">Title & Legal Deed</h3>
                  <p className="text-[11px] text-stone-300">Government Verified & Guaranteed</p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-white/10 text-emerald-200 rounded-lg border border-white/15">
                100% Secure
              </span>
            </div>

            <div className="space-y-3">
              <div className="bg-black/20 p-3.5 rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-stone-300 font-medium block">
                  Documented Title Type
                </span>
                <span className="text-lg font-normal text-emerald-200 font-serif-luxury tracking-wide">
                  {currentProperty.titleDocumentation.titleType}
                </span>
              </div>

              <div className="bg-black/20 p-3.5 rounded-2xl border border-white/5 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-stone-300 font-medium block">
                  Registry / File Number
                </span>
                <span className="text-xs font-mono font-medium text-stone-100 bg-black/30 px-3 py-1 rounded-lg inline-block border border-white/10">
                  {currentProperty.titleDocumentation.registrationNumber}
                </span>
              </div>

              <p className="text-xs text-stone-200 leading-relaxed pt-1">
                {currentProperty.titleDocumentation.description}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
              <div className="text-[11px] font-semibold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-300" />
                <span>Included Legal Documentation:</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-stone-200">
                {(currentProperty.titleDocumentation.documents || [
                  "Governors Consent",
                  "C of O",
                  "Deed of Assignment",
                  "Allocation Letter",
                  "Offer Letter",
                  "Registered Survey"
                ]).map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-1 rounded bg-black/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span className="truncate text-[11px]">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={titleEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-stone-100 text-[#1c3829] font-bold text-xs transition-colors shadow-sm active:scale-[0.98]"
            >
              <span>Verify Title File on WhatsApp (0904 767 4938)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1c3829]" />
            </a>
          </div>
        </div>

        {/* Facilities & Infrastructure Section with Calm Monochromatic Icons */}
        <div className="pt-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                <span>On-Site Infrastructure</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-stone-900 font-serif-luxury tracking-tight">
                Estate Facilities & Amenities
              </h3>
            </div>
            <div className="text-xs text-stone-500">
              High-standard civil engineering & 24/7 security
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(currentProperty.facilities || []).map((facility) => (
              <div
                key={facility.id}
                className="group/fac relative p-4 rounded-2xl border border-stone-200/90 bg-white hover:border-stone-300 transition-colors flex items-start gap-3.5 shadow-2xs"
              >
                {/* Calm monochromatic icon housing */}
                <div className="w-10 h-10 rounded-xl bg-[#f4f2eb] border border-stone-200/80 flex items-center justify-center shrink-0">
                  {getFacilityIcon(facility.iconName)}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-stone-900 mb-0.5 truncate">
                    {facility.name}
                  </h4>
                  <p className="text-xs text-stone-600 leading-snug">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Benefits */}
        <div className="pt-4 space-y-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              Investor Rationale
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-stone-900 font-serif-luxury tracking-tight">
              Why Invest in {currentProperty.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(currentProperty.investmentBenefits || []).map((benefit) => (
              <div
                key={benefit.id}
                className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      {benefit.title}
                    </span>
                    <TrendingUp className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                  <div className="text-lg font-bold text-[#1c3829] font-mono tracking-tight">
                    {benefit.highlight}
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pt-1 border-t border-stone-100">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
