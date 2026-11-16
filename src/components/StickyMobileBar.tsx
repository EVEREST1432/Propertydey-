import React from 'react';
import { useProperty } from '../context/PropertyContext';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const StickyMobileBar: React.FC = () => {
  const { currentProperty, setInspectionModalOpen } = useProperty();

  const primaryWhatsAppUrl = createWhatsAppLink(
    currentProperty.companyContact.whatsappNumber,
    currentProperty.companyContact.defaultMessage
  );

  const phoneUrl = `tel:${currentProperty.companyContact.phone}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#faf9f6]/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg">
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">

        {/* Book Inspection Icon */}
        <button
          onClick={() => setInspectionModalOpen(true)}
          className="group flex flex-col items-center justify-center p-1.5 rounded-xl text-stone-600 hover:text-stone-900 active:scale-95 transition-all shrink-0"
          title="Book Inspection"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-medium mt-1">Inspect</span>
        </button>

        {/* Direct Call Icon */}
        <a
          href={phoneUrl}
          className="group flex flex-col items-center justify-center p-1.5 rounded-xl text-stone-600 hover:text-stone-900 active:scale-95 transition-all shrink-0"
          title="Call Property Dey: 09047674938"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-medium mt-1">Call</span>
        </a>

        {/* Primary WhatsApp Action Button */}
        <a
          href={primaryWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#1c3829] hover:bg-[#254936] active:scale-[0.98] text-white font-semibold text-xs shadow-xs transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
          <span className="truncate">WhatsApp (0904 767 4938)</span>
        </a>
      </div>
    </div>
  );
};
