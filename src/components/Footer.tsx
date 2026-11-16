import React from 'react';
import { useProperty } from '../context/PropertyContext';
import { ShieldCheck, MessageCircle, Phone, MapPin } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const { currentProperty } = useProperty();

  const generalWhatsAppUrl = createWhatsAppLink(
    currentProperty.companyContact.whatsappNumber,
    currentProperty.companyContact.defaultMessage
  );

  return (
    <footer className="bg-[#172e21] text-stone-300 py-12 border-t border-[#234331] pb-24 md:pb-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-white/10 text-emerald-300 font-serif font-bold text-xs flex items-center justify-center">
                PD
              </div>
              <span className="text-base font-bold text-white tracking-tight">Property Dey Ltd</span>
            </div>
            <p className="text-stone-300 leading-relaxed text-xs">
              Property Dey Ltd is a premier Nigerian real estate development firm providing verified, unencumbered land assets, title regularization, and contemporary turnkey residential developments across Lagos.
            </p>
            <div className="pt-1 flex items-center gap-2 text-emerald-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>RC Number: RC 1789422 · Certified Real Estate Developer</span>
            </div>
          </div>

          {/* Direct Office Address & Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Corporate Headquarters</h4>
            <div className="flex items-start gap-2 text-stone-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Plot 12, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria.</span>
            </div>
            <div className="pt-2 flex flex-col space-y-1.5">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                <span>WhatsApp: {currentProperty.companyContact.displayPhone}</span>
              </a>
              <a
                href={`tel:${currentProperty.companyContact.phone}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300" />
                <span>Tel: {currentProperty.companyContact.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Site Inspections Schedule */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Site Inspections</h4>
            <p className="text-[11px] text-stone-300 leading-snug">
              Physical and virtual guided inspections run Monday through Saturday (9:00 AM – 5:00 PM).
            </p>
            <div className="pt-1 text-[11px] text-stone-300 space-y-1.5">
              <p className="text-emerald-300 font-medium">✓ Immediate Documentation Review</p>
              <p className="text-stone-300">✓ On-Site Survey Verification</p>
              <p className="text-stone-300">✓ Instant Allocation on Confirmation</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <div>
            © {new Date().getFullYear()} Property Dey Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Verified Title</span>
            <span>·</span>
            <span>Zero Omo-Onile Encumbrance</span>
            <span>·</span>
            <span>Instant Beacon Allocation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
