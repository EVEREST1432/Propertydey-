import React, { useState } from 'react';
import { useProperty } from '../context/PropertyContext';
import {
  MessageCircle,
  Phone,
  Building2,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const WhatsAppHub: React.FC = () => {
  const { currentProperty } = useProperty();
  const contact = currentProperty.companyContact;

  const [message, setMessage] = useState(
    `Hello Property Dey Ltd. I scanned the QR code for ${currentProperty.name} and would like to speak with a representative regarding subscription and inspection.`
  );

  const waUrl = createWhatsAppLink(contact.whatsappNumber, message);
  const telUrl = `tel:${contact.phone}`;

  return (
    <section id="contact" className="py-14 sm:py-18 bg-[#f2efe9] text-stone-900 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
            <ShieldCheck className="w-4 h-4 text-emerald-800" />
            <span>Direct Developer Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-stone-900 font-serif-luxury">
            Contact Property Dey Ltd
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Connect directly with Property Dey Ltd on our official developer line for allocation documentation, title file verification, or private site inspections.
          </p>
        </div>

        {/* Central Company Phone & WhatsApp Card */}
        <div className="max-w-2xl mx-auto bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden space-y-6">
          {/* Top Company Badge */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#f4f2eb] border border-stone-200 flex items-center justify-center text-[#1c3829]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 font-serif-luxury">Property Dey Ltd</h3>
                <p className="text-xs text-stone-500">Official Company Communication Line</p>
              </div>
            </div>

            <span className="text-[11px] font-mono text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
              Verified Developer
            </span>
          </div>

          {/* Big Phone Number Display */}
          <div className="text-center py-2 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
              Official Telephone & WhatsApp Line
            </span>
            <a
              href={telUrl}
              className="text-3xl sm:text-4xl font-bold text-[#1c3829] hover:text-[#254936] font-mono tracking-tight transition-colors inline-block"
            >
              {contact.displayPhone}
            </a>
            <p className="text-xs text-stone-500">
              Tap above to call directly or send a message on WhatsApp below.
            </p>
          </div>

          {/* Pre-filled Message Input */}
          <div className="space-y-1.5 pt-2">
            <label className="text-xs font-semibold text-stone-700 flex items-center justify-between">
              <span>Introductory Inquiry Message:</span>
              <span className="text-[11px] text-stone-400">Customizable</span>
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs sm:text-sm p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400 leading-relaxed resize-none"
            />
          </div>

          {/* Primary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#1c3829] hover:bg-[#254936] text-white font-semibold text-xs sm:text-sm transition-all active:scale-[0.98] shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Message on WhatsApp</span>
            </a>

            <a
              href={telUrl}
              className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-medium text-xs sm:text-sm border border-stone-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-stone-600" />
              <span>Call: {contact.phone}</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Direct access to Property Dey management</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Response time: Under 15 minutes (Mon-Sat)</span>
            </div>
          </div>
        </div>

        {/* Corporate Address Banner */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 text-center sm:text-left shadow-2xs">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
            <span>
              <strong className="text-stone-900">Property Dey Ltd:</strong> Plot 12, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.
            </span>
          </div>
          <span className="text-[#1c3829] font-mono font-semibold text-[11px] shrink-0">
            {contact.phone}
          </span>
        </div>
      </div>
    </section>
  );
};
