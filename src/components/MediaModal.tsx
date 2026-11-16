import React, { useEffect } from 'react';
import { useProperty } from '../context/PropertyContext';
import { ChevronLeft, ChevronRight, X, MessageCircle, Calendar, Film, Play, ExternalLink } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const MediaModal: React.FC = () => {
  const { currentProperty, selectedMedia, setSelectedMedia } = useProperty();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;
      if (e.key === 'Escape') setSelectedMedia(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, currentProperty]);

  if (!selectedMedia) return null;

  const gallery = currentProperty.gallery;
  const currentIndex = gallery.findIndex(item => item.id === selectedMedia.id);

  const handleNext = () => {
    if (currentIndex < gallery.length - 1) {
      setSelectedMedia(gallery[currentIndex + 1]);
    } else {
      setSelectedMedia(gallery[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedMedia(gallery[currentIndex - 1]);
    } else {
      setSelectedMedia(gallery[gallery.length - 1]);
    }
  };

  const mediaEnquiryUrl = createWhatsAppLink(
    currentProperty.companyContact.whatsappNumber,
    `Hello Property Dey Ltd. I am reviewing "${selectedMedia.title}" for ${currentProperty.name}. Can you provide more details regarding this specific stage/view?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={() => setSelectedMedia(null)}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white flex items-center justify-center transition-colors border border-slate-700 shadow-xl"
        title="Close (Esc)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 z-20 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white items-center justify-center transition-colors border border-slate-700 shadow-xl"
        title="Previous media (Left arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 z-20 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white items-center justify-center transition-colors border border-slate-700 shadow-xl"
        title="Next media (Right arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Media Content Card */}
      <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]">
        {/* Media Frame */}
        <div className="relative bg-black flex items-center justify-center min-h-[260px] sm:min-h-[360px] max-h-[58vh] overflow-hidden">
          {selectedMedia.type === 'video' ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <video
                key={selectedMedia.url}
                poster={selectedMedia.thumbnailUrl}
                controls
                playsInline
                preload="metadata"
                className="w-full max-h-[56vh] object-contain bg-black"
              >
                <source src={selectedMedia.url} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>
            </div>
          ) : (
            <img
              key={selectedMedia.url}
              src={selectedMedia.url}
              alt={selectedMedia.title}
              className="w-full max-h-[56vh] object-contain select-none"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (selectedMedia.thumbnailUrl && target.src !== selectedMedia.thumbnailUrl) {
                  target.src = selectedMedia.thumbnailUrl;
                }
              }}
            />
          )}

          {/* Category Chip */}
          <div className="absolute top-3 left-3 bg-slate-950/85 text-emerald-400 text-[11px] px-2.5 py-1 rounded-lg border border-slate-700 font-semibold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
            {selectedMedia.type === 'video' ? <Film className="w-3.5 h-3.5" /> : null}
            <span>{selectedMedia.type === 'video' ? 'Inspection Video' : selectedMedia.category.replace('_', ' ')}</span>
            {selectedMedia.videoDuration && (
              <span className="font-mono text-white ml-1">({selectedMedia.videoDuration})</span>
            )}
          </div>
        </div>

        {/* Thumbnail Filmstrip for fast navigation */}
        <div className="bg-slate-950/80 border-t border-slate-800/80 px-3 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {gallery.map((item, idx) => {
            const isSelected = item.id === selectedMedia.id;
            const thumb = item.type === 'video' ? (item.thumbnailUrl || item.url) : item.url;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className={`relative shrink-0 w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden border transition-all ${
                  isSelected ? 'border-emerald-400 ring-2 ring-emerald-500/40 scale-105' : 'border-slate-700 opacity-60 hover:opacity-100'
                }`}
                title={item.title}
              >
                <img
                  src={thumb}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-3 h-3 text-white fill-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Media Info & Inquiry Footer */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{selectedMedia.dateAdded || 'Latest update'}</span>
              </span>
              <span>·</span>
              <span>{currentIndex + 1} of {gallery.length}</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white font-serif-luxury">
              {selectedMedia.title}
            </h3>
            {selectedMedia.description && (
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {selectedMedia.description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="flex sm:hidden items-center gap-1.5 mr-auto">
              <button
                onClick={handlePrev}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                title="Previous media"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                title="Next media"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {selectedMedia.type === 'video' && (
              <a
                href={selectedMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                title="Open video in external player"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Direct Link</span>
              </a>
            )}

            <a
              href={mediaEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

