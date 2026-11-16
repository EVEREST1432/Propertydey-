import React, { useState, useRef, useEffect } from 'react';
import { useProperty } from '../context/PropertyContext';
import { GalleryItem } from '../types/property';
import {
  Play,
  Image as ImageIcon,
  Video,
  Upload,
  Plus,
  Trash2,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  Eye,
  Film,
  MessageCircle
} from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const MediaGallery: React.FC = () => {
  const {
    currentProperty,
    addGalleryItem,
    deleteGalleryItem,
    setSelectedMedia,
    isAdminMode
  } = useProperty();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [featuredVideoId, setFeaturedVideoId] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  useEffect(() => {
    setFeaturedVideoId(null);
    setActiveCategory('all');
  }, [currentProperty.id]);

  const gallery = currentProperty.gallery || [];
  const videoItems = gallery.filter(item => item && item.type === 'video');
  const activeVideo = (featuredVideoId ? videoItems.find(v => v.id === featuredVideoId) : null) || videoItems[0];

  // Quick upload state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'site_inspection' | 'construction' | 'render' | 'aerial'>('site_inspection');
  const [newType, setNewType] = useState<'image' | 'video'>('image');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaDesc, setMediaDesc] = useState('');
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'site_inspection', label: 'Site Inspection Videos' },
    { id: 'construction', label: 'Construction Updates' },
    { id: 'render', label: 'Architectural Renders' },
    { id: 'aerial', label: 'Aerial Drone' }
  ];

  const filteredItems = activeCategory === 'all'
    ? gallery
    : gallery.filter(item => {
        if (!item) return false;
        if (activeCategory === 'site_inspection') {
          return item.category === 'site_inspection' || item.type === 'video';
        }
        return item.category === activeCategory;
      });

  // Handle direct file upload from phone gallery or computer
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setFileError(null);
    setIsProcessingFile(true);
    const file = files[0];
    const isVideo = file.type.startsWith('video');

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setMediaUrl(result);
      if (!newTitle) {
        setNewTitle(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
      }
      setNewType(isVideo ? 'video' : 'image');
      setIsProcessingFile(false);
    };
    reader.onerror = () => {
      setIsProcessingFile(false);
      setFileError('Error reading file. Please try another media file.');
    };
    reader.readAsDataURL(file);
  };

  const handleSaveMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaUrl.trim() && !newTitle.trim()) return;

    addGalleryItem(currentProperty.id, {
      title: newTitle || 'Property Update',
      type: newType,
      category: newCategory,
      url: mediaUrl || currentProperty.heroImage,
      description: mediaDesc,
      videoDuration: newType === 'video' ? '1:30' : undefined
    });

    // Reset
    setNewTitle('');
    setMediaUrl('');
    setMediaDesc('');
    setShowUploadModal(false);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#f7f7f4] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header with Category Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              Visual Documentation
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-stone-900 font-serif-luxury">
              Site Inspection & Media Gallery
            </h2>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Real-time site inspection videos, civil engineering progress, and 3D architectural prototypes. Updates reflect live across all generated QR codes.
            </p>
          </div>

          {/* Quick Upload Button for Mobile or Admin */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 self-start md:self-auto px-4 py-2.5 rounded-xl bg-[#1c3829] hover:bg-[#254936] text-white text-xs font-semibold transition-colors shadow-xs"
          >
            <Upload className="w-4 h-4 text-emerald-300" />
            <span>Upload Photo / Video</span>
          </button>
        </div>

        {/* Featured Embedded Video Player in Serene Deep Forest Theater */}
        {activeVideo && (
          <div className="bg-[#1c3829] text-white rounded-3xl p-4 sm:p-6 border border-[#254936] shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-emerald-200 text-xs font-medium border border-white/15 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Site Inspection Video</span>
                </span>
                {activeVideo.videoDuration && (
                  <span className="text-xs font-mono text-stone-300 bg-black/25 px-2.5 py-1 rounded-md border border-white/10">
                    Duration: {activeVideo.videoDuration}
                  </span>
                )}
              </div>

              {/* Video Switcher if property has multiple videos */}
              {videoItems.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                  {videoItems.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setFeaturedVideoId(v.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                        activeVideo.id === v.id
                          ? 'bg-white text-[#1c3829] font-bold shadow-xs'
                          : 'bg-white/10 text-stone-200 hover:bg-white/15 border border-white/10'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span className="truncate max-w-[200px]">{v.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Video Canvas Container */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video max-h-[500px] w-full flex items-center justify-center border border-black/40 shadow-inner">
              <video
                key={activeVideo.url}
                poster={activeVideo.thumbnailUrl}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              >
                <source src={activeVideo.url} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>
            </div>

            {/* Video Caption & WhatsApp Contact */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-normal text-white font-serif-luxury">
                  {activeVideo.title}
                </h3>
                {activeVideo.description && (
                  <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                    {activeVideo.description}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <button
                  onClick={() => setSelectedMedia(activeVideo)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 text-xs font-semibold border border-white/15 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-stone-300" />
                  <span>Full Screen</span>
                </button>

                <a
                  href={createWhatsAppLink(
                    currentProperty.companyContact.whatsappNumber,
                    `Hello Property Dey Ltd. I just watched "${activeVideo.title}" for ${currentProperty.name}. I would like more information or to book a site inspection.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-100 text-[#1c3829] font-bold text-xs transition-all shadow-xs active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-[#1c3829]" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Filter Tabs (Calm Segmented Control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-200/80 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1c3829] text-white shadow-2xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-stone-300 bg-white/60">
            <ImageIcon className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-stone-700">No media in this category yet</p>
            <p className="text-xs text-stone-500 mt-1">Upload the latest site photos or inspection video.</p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1c3829] hover:bg-[#254936] text-white rounded-xl text-xs font-bold transition-colors shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Media Now</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/90 shadow-2xs hover:border-stone-400 transition-all flex flex-col justify-between"
              >
                {/* Media Image / Thumbnail */}
                <div
                  className="relative aspect-video w-full overflow-hidden cursor-pointer bg-stone-100"
                  onClick={() => {
                    if (item.type === 'video') setFeaturedVideoId(item.id);
                    setSelectedMedia(item);
                  }}
                >
                  <img
                    src={item.type === 'video' ? (item.thumbnailUrl || item.url) : item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (item.thumbnailUrl && target.src !== item.thumbnailUrl) {
                        target.src = item.thumbnailUrl;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                  {/* Play Overlay with calm center icon if Video */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/95 text-[#1c3829] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Category & Type Chip */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-900/80 text-white backdrop-blur-md shadow-2xs">
                      {item.type === 'video' ? 'Video Tour' : item.category.replace('_', ' ')}
                    </span>
                    {item.videoDuration && (
                      <span className="text-[10px] font-mono text-stone-200 bg-stone-900/80 px-1.5 py-0.5 rounded-md backdrop-blur-md">
                        {item.videoDuration}
                      </span>
                    )}
                  </div>

                  {/* Quick Expand hover hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-1.5 rounded-lg bg-stone-900/80 text-white text-xs backdrop-blur-md inline-flex items-center shadow-2xs">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Caption / Details */}
                <div className="p-4 bg-white space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className="text-sm font-bold text-stone-900 truncate hover:text-[#1c3829] cursor-pointer transition-colors"
                      onClick={() => setSelectedMedia(item)}
                    >
                      {item.title}
                    </h3>
                    {isAdminMode && (
                      <button
                        onClick={() => deleteGalleryItem(currentProperty.id, item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        title="Delete this media"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  <div className="pt-2 flex items-center justify-between text-[11px] text-stone-400 border-t border-stone-100">
                    <span className="flex items-center gap-1 text-stone-500">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      <span>{item.dateAdded || 'Latest Inspection'}</span>
                    </span>
                    <button
                      onClick={() => setSelectedMedia(item)}
                      className="text-[#1c3829] hover:text-[#254936] font-semibold text-[11px] flex items-center gap-1 transition-colors"
                    >
                      <span>{item.type === 'video' ? 'Watch Tour' : 'View Image'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Modal Drawer */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-bold text-slate-900">Upload Site Photo or Video</h3>
                </div>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-semibold p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveMedia} className="space-y-4">
                {/* Media Type Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Media Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setNewType('image')}
                      className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold border ${
                        newType === 'image'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Photograph</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewType('video')}
                      className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold border ${
                        newType === 'video'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Video className="w-4 h-4" />
                      <span>Inspection Video</span>
                    </button>
                  </div>
                </div>

                {/* Direct Mobile / Computer File Upload */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Upload from Phone Gallery / Computer
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-4 text-center transition-colors bg-slate-50/60 flex flex-col items-center justify-center gap-1.5"
                  >
                    <Upload className="w-6 h-6 text-slate-400" />
                    <span className="text-xs font-bold text-slate-800">
                      Tap to Choose from Photo Library / Camera
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Supports JPG, PNG, WEBP, MP4
                    </span>
                  </button>
                  {isProcessingFile && (
                    <p className="text-xs text-emerald-600 mt-1 font-medium">Processing media file...</p>
                  )}
                  {fileError && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{fileError}</p>
                  )}
                  {mediaUrl && (
                    <div className="mt-2 text-xs text-slate-600 flex items-center justify-between bg-emerald-50 p-2 rounded border border-emerald-200">
                      <span className="truncate max-w-[250px]">Media loaded ready to publish</span>
                      <button
                        type="button"
                        onClick={() => setMediaUrl('')}
                        className="text-red-600 text-[11px] font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Or Web URL */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Or Enter Direct URL (Image or MP4 / Video)
                  </label>
                  <input
                    type="url"
                    value={mediaUrl.startsWith('data:') ? '' : mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                    placeholder="https://... (or use upload above)"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Drainage Paving Week 4"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="site_inspection">Site Inspection</option>
                    <option value="construction">Construction & Progress Update</option>
                    <option value="render">Architectural 3D Prototype</option>
                    <option value="aerial">Aerial Drone View</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Description / Notes</label>
                  <textarea
                    rows={2}
                    value={mediaDesc}
                    onChange={(e) => setMediaDesc(e.target.value)}
                    placeholder="Brief inspection note for prospective buyers..."
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
                  >
                    Publish to Digital Listing
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
