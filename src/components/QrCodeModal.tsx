import React, { useEffect, useState, useRef } from 'react';
import { useProperty } from '../context/PropertyContext';
import QRCode from 'qrcode';
import {
  QrCode,
  Download,
  Copy,
  Check,
  Printer,
  ExternalLink,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles
} from 'lucide-react';

export const QrCodeModal: React.FC = () => {
  const { currentProperty, qrModalOpen, setQrModalOpen, getPropertyUrl } = useProperty();
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'qr_only' | 'flyer'>('qr_only');
  const printableRef = useRef<HTMLDivElement>(null);

  const propertyUrl = getPropertyUrl(currentProperty.slug);
  const displayUrl = `propertydey.com/property/${currentProperty.slug}`;

  // Generate QR Code
  useEffect(() => {
    if (!qrModalOpen) return;

    QRCode.toDataURL(propertyUrl, {
      width: 500,
      margin: 2,
      color: {
        dark: '#064e3b', // Deep emerald
        light: '#ffffff'
      },
      errorCorrectionLevel: 'H'
    })
      .then(url => setQrDataUrl(url))
      .catch(err => console.error('Failed to generate QR code', err));
  }, [propertyUrl, qrModalOpen]);

  if (!qrModalOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(propertyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `propertydey-qr-${currentProperty.slug}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePrintFlyer = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-xl border border-stone-200 relative my-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setQrModalOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center text-sm font-semibold transition-colors"
        >
          ✕
        </button>

        {/* Tab switch between Quick QR Code and Marketing Flyer Layout */}
        <div className="flex items-center gap-2 mb-6 border-b border-stone-100 pb-4">
          <button
            onClick={() => setViewMode('qr_only')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              viewMode === 'qr_only'
                ? 'bg-[#1c3829] text-white shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Dedicated QR Code</span>
          </button>

          <button
            onClick={() => setViewMode('flyer')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              viewMode === 'flyer'
                ? 'bg-[#1c3829] text-white shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>Print Marketing Flyer / Signboard</span>
          </button>
        </div>

        {viewMode === 'qr_only' ? (
          <div className="space-y-6 text-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                <span>Unique Property Link</span>
              </div>
              <h3 className="text-2xl font-normal text-stone-900 font-serif-luxury">
                {currentProperty.name} QR Code
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mt-1 leading-relaxed">
                Print on banners, signposts, and brochures. Directs clients straight to this digital brochure without re-printing when you update prices or videos.
              </p>
            </div>

            {/* QR Code Container */}
            <div className="flex flex-col items-center justify-center p-6 bg-stone-50 rounded-2xl border border-stone-200/80 max-w-xs mx-auto">
              {qrDataUrl ? (
                <div className="relative p-3 bg-white rounded-xl shadow-sm border border-stone-200">
                  <img
                    src={qrDataUrl}
                    alt={`${currentProperty.name} QR Code`}
                    className="w-56 h-56 object-contain"
                  />
                  {/* Center Brand Tag */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-[#1c3829] text-white flex items-center justify-center text-[10px] font-bold shadow-md border-2 border-white">
                      PD
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-56 h-56 flex items-center justify-center text-xs text-stone-400">
                  Generating QR Code...
                </div>
              )}

              <div className="mt-3 text-xs font-mono text-stone-700 font-medium bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                {displayUrl}
              </div>
            </div>

            {/* Web Link Input & Copy */}
            <div className="space-y-2 max-w-md mx-auto">
              <label className="text-xs font-medium text-stone-600 block text-left">
                Direct Destination URL:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={propertyUrl}
                  className="flex-1 text-xs px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-700 font-mono truncate"
                />
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadQr}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1c3829] hover:bg-[#254936] text-white text-xs font-semibold transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4 text-emerald-300" />
                <span>Download QR Image (PNG)</span>
              </button>

              <button
                onClick={() => setViewMode('flyer')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-colors"
              >
                <Printer className="w-4 h-4 text-stone-600" />
                <span>Open Printable Flyer</span>
              </button>
            </div>
          </div>
        ) : (
          /* Printable Marketing Flyer Layout */
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-normal text-stone-900 font-serif-luxury">
                  Print Marketing Flyer / Signboard Banner
                </h3>
                <p className="text-xs text-stone-500">
                  Ready-to-print flyer template featuring Property Dey branding, property specs, and scannable QR.
                </p>
              </div>

              <button
                onClick={handlePrintFlyer}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1c3829] hover:bg-[#254936] text-white text-xs font-semibold transition-colors shadow-2xs"
              >
                <Printer className="w-4 h-4 text-emerald-300" />
                <span>Print Flyer</span>
              </button>
            </div>

            {/* Flyer Preview Container */}
            <div
              ref={printableRef}
              className="p-6 bg-[#1c3829] text-white rounded-3xl border border-[#254936] shadow-lg space-y-4 print:p-8 print:bg-white print:text-black print:border-none"
            >
              {/* Header on Flyer */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white text-[#1c3829] font-serif font-black flex items-center justify-center text-xs">
                    PD
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">PROPERTY DEY LTD</h4>
                    <p className="text-[10px] text-emerald-200">Digital Real Estate Marketing Flyer</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase bg-white/10 text-emerald-200 px-2 py-0.5 rounded border border-white/15">
                    {currentProperty.availability.status}
                  </span>
                </div>
              </div>

              {/* Property Hero Snapshot */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-7 space-y-2">
                  <h2 className="text-2xl font-bold font-serif-luxury text-white">
                    {currentProperty.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{currentProperty.location.address}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2 bg-slate-800/80 rounded-lg">
                      <span className="text-[10px] text-slate-400 block uppercase">Price</span>
                      <strong className="text-emerald-400 font-mono text-sm">{currentProperty.price.display}</strong>
                    </div>
                    <div className="p-2 bg-slate-800/80 rounded-lg">
                      <span className="text-[10px] text-slate-400 block uppercase">
                        {currentProperty.availability.unitType === 'Plots' ? 'Plot Sizes' : 'Apartments'}
                      </span>
                      <strong className="text-white text-sm truncate block">{currentProperty.landSize}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Title: {currentProperty.titleDocumentation.titleType}</span>
                  </div>
                </div>

                {/* QR Section */}
                <div className="sm:col-span-5 bg-white text-slate-900 rounded-xl p-3 flex flex-col items-center text-center shadow-lg">
                  {qrDataUrl && (
                    <img
                      src={qrDataUrl}
                      alt="Property QR"
                      className="w-36 h-36 object-contain"
                    />
                  )}
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mt-1">
                    Scan with Phone Camera
                  </span>
                  <span className="text-[9px] text-slate-500 mt-0.5">
                    For Video Tour & Instant Brochure
                  </span>
                </div>
              </div>

              {/* Footer with WhatsApp Contacts */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call / WhatsApp: <strong>{currentProperty.companyContact.displayPhone}</strong></span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {displayUrl}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
