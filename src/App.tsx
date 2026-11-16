/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PropertyProvider, useProperty } from './context/PropertyContext';
import { Header } from './components/Header';
import { PropertyHero } from './components/PropertyHero';
import { PropertySpecs } from './components/PropertySpecs';
import { PaymentCalculator } from './components/PaymentCalculator';
import { MediaGallery } from './components/MediaGallery';
import { WhatsAppHub } from './components/WhatsAppHub';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { InspectionModal } from './components/InspectionModal';
import { MediaModal } from './components/MediaModal';
import { Smartphone } from 'lucide-react';

function PropertyBrochureApp() {
  const { mobileFrameMode, setMobileFrameMode } = useProperty();

  return (
    <div className="min-h-screen bg-[#edece6] text-stone-900 flex flex-col items-center antialiased">
      {/* Mobile Frame Wrapper for Desktop Testing */}
      {mobileFrameMode ? (
        <div className="w-full min-h-screen py-8 px-2 flex flex-col items-center justify-center bg-stone-900/95">
          <div className="flex items-center justify-between w-full max-w-[420px] px-3 mb-3 text-xs text-stone-300">
            <span className="font-medium text-emerald-400 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Phone Preview (390px)</span>
            </span>
            <button
              onClick={() => setMobileFrameMode(false)}
              className="text-stone-300 hover:text-white underline text-[11px] transition-colors"
            >
              Exit to Full Desktop
            </button>
          </div>

          {/* Smartphone Hardware Mockup Frame */}
          <div className="w-full max-w-[412px] h-[850px] bg-stone-950 rounded-[48px] p-3 shadow-2xl ring-1 ring-stone-800 relative flex flex-col overflow-hidden">
            {/* Phone Speaker & Dynamic Island */}
            <div className="absolute top-4 inset-x-0 flex justify-center z-50 pointer-events-none">
              <div className="w-24 h-4 bg-black rounded-full" />
            </div>

            {/* Inner Phone Screen */}
            <div className="w-full h-full bg-[#f7f7f4] rounded-[38px] overflow-y-auto relative no-scrollbar flex flex-col">
              <Header />
              <main className="flex-1">
                <PropertyHero />
                <PropertySpecs />
                <PaymentCalculator />
                <MediaGallery />
                <WhatsAppHub />
              </main>
              <Footer />
              <StickyMobileBar />
            </div>
          </div>
        </div>
      ) : (
        /* Full Responsive View */
        <div className="w-full min-h-screen flex flex-col bg-[#f7f7f4] overflow-x-clip">
          <Header />
          <main className="flex-1">
            <PropertyHero />
            <PropertySpecs />
            <PaymentCalculator />
            <MediaGallery />
            <WhatsAppHub />
          </main>
          <Footer />
          <StickyMobileBar />
        </div>
      )}

      {/* Global Modals */}
      <InspectionModal />
      <MediaModal />
    </div>
  );
}

export default function App() {
  return (
    <PropertyProvider>
      <PropertyBrochureApp />
    </PropertyProvider>
  );
}
