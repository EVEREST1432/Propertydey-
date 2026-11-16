import React, { useState, useEffect } from 'react';
import { useProperty } from '../context/PropertyContext';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Tag, Building, MapPin } from 'lucide-react';
import { createWhatsAppLink, formatNaira } from '../utils/whatsapp';

export const PaymentCalculator: React.FC = () => {
  const { currentProperty } = useProperty();
  const isPlots = currentProperty?.availability?.unitType === 'Plots';
  const paymentPlans = currentProperty?.paymentPlans || [];

  const unitTypes = (currentProperty?.availableUnitTypes && currentProperty.availableUnitTypes.length > 0)
    ? currentProperty.availableUnitTypes
    : [
        {
          name: "Standard Allocation",
          price: currentProperty?.price?.display || '₦170,000,000',
          amount: currentProperty?.price?.amount || 170000000,
          deposit: currentProperty?.price?.initialDeposit || '30%',
          description: currentProperty?.tagline || '',
          isPopular: true
        }
      ];

  const [selectedUnitIndex, setSelectedUnitIndex] = useState<number>(0);
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    paymentPlans[0]?.id || ''
  );
  const [unitCount, setUnitCount] = useState<number>(1);

  // Reset selection on property change
  useEffect(() => {
    setSelectedUnitIndex(0);
    setSelectedPlanId(paymentPlans[0]?.id || '');
    setUnitCount(1);
  }, [currentProperty?.id]);

  const selectedUnit = unitTypes[selectedUnitIndex] || unitTypes[0] || {
    name: "Standard Allocation",
    price: "₦170,000,000",
    amount: 170000000,
    deposit: "30%",
    description: "",
    isPopular: true
  };
  const selectedPlan = paymentPlans.find(p => p.id === selectedPlanId) || paymentPlans[0] || {
    id: "outright",
    name: "Outright Payment",
    duration: "0-3 Months",
    description: "Standard allocation"
  };

  const unitBasePrice = selectedUnit?.amount || 170000000;
  const totalPrice = unitBasePrice * unitCount;

  // Plan specific calculations
  const calculatePlanDetails = (planId: string) => {
    if (isPlots) {
      // Urbanlux Estate / Land plots logic
      if (planId.includes('0-3m') || planId.includes('outright')) {
        const total = totalPrice;
        const minDeposit = 3000000 * unitCount;
        const instantAllocDeposit = Math.round(total * 0.5);
        return {
          totalAmount: total,
          depositDisplay: `From ₦3M (or ${formatNaira(instantAllocDeposit)} for instant allocation)`,
          depositVal: minDeposit,
          monthlyNote: "Spread balance over 3 months (Zero interest)",
          instantAllocNote: "50% down payment gets instant physical plot allocation"
        };
      } else if (planId.includes('3-6m')) {
        const total = Math.round(totalPrice * 1.10); // +10%
        const deposit = 3000000 * unitCount;
        const balance = Math.max(0, total - deposit);
        const monthly = Math.round(balance / 5);
        return {
          totalAmount: total,
          depositDisplay: formatNaira(deposit),
          depositVal: deposit,
          monthlyNote: `${formatNaira(monthly)} / mo (5 installments)`,
          instantAllocNote: "+10% structured spread"
        };
      } else {
        // 6-9 months (+15%)
        const total = Math.round(totalPrice * 1.15); // +15%
        const deposit = 3000000 * unitCount;
        const balance = Math.max(0, total - deposit);
        const monthly = Math.round(balance / 8);
        return {
          totalAmount: total,
          depositDisplay: formatNaira(deposit),
          depositVal: deposit,
          monthlyNote: `${formatNaira(monthly)} / mo (8 installments)`,
          instantAllocNote: "+15% extended tenure"
        };
      }
    } else {
      // Duplex / Apartments logic
      const isOutright = planId.includes('outright');
      const is3M = planId.includes('3m');
      const is12M = planId.includes('12m');
      const deposit30Percent = Math.round(totalPrice * 0.3);

      if (isOutright) {
        return {
          totalAmount: totalPrice,
          depositDisplay: formatNaira(totalPrice),
          depositVal: totalPrice,
          monthlyNote: "One-time full payment settlement",
          instantAllocNote: "Immediate keys handover & physical possession"
        };
      } else if (is3M) {
        const total = totalPrice;
        const balance = total - deposit30Percent;
        const monthlyBalance = Math.round(balance / 2);
        return {
          totalAmount: total,
          depositDisplay: `${formatNaira(deposit30Percent)} (30%)`,
          depositVal: deposit30Percent,
          monthlyNote: `${formatNaira(monthlyBalance)} / mo (2 installments)`,
          instantAllocNote: "Zero interest structured spread"
        };
      } else if (is12M) {
        const total = Math.round(totalPrice * 1.03);
        const monthlyBalance = Math.round((total - deposit30Percent) / 11);
        return {
          totalAmount: total,
          depositDisplay: `${formatNaira(deposit30Percent)} (30%)`,
          depositVal: deposit30Percent,
          monthlyNote: `${formatNaira(monthlyBalance)} / mo (11 installments)`,
          instantAllocNote: "30% deposit secures temporary allocation"
        };
      } else {
        // 6 months
        const total = currentProperty.id === 'ikota-lekki-duplex' ? Math.round(totalPrice * 1.0167) : totalPrice;
        const balance = total - deposit30Percent;
        const monthlyBalance = Math.round(balance / 5);
        return {
          totalAmount: total,
          depositDisplay: `${formatNaira(deposit30Percent)} (30%)`,
          depositVal: deposit30Percent,
          monthlyNote: `${formatNaira(monthlyBalance)} / mo (5 installments)`,
          instantAllocNote: "Structured completion schedule"
        };
      }
    }
  };

  const activePlanDetails = calculatePlanDetails(selectedPlan?.id || '');

  const planWhatsAppUrl = createWhatsAppLink(
    currentProperty.companyContact.whatsappNumber,
    `Hello Property Dey Ltd. I scanned the QR code for ${currentProperty.name} (${currentProperty.location.city}). I would like to reserve ${unitCount} ${isPlots ? 'plot(s)' : 'unit(s)'} of the "${selectedUnit.name}" (${formatNaira(activePlanDetails.totalAmount)}) on the "${selectedPlan?.name || 'Selected'}" plan. Initial deposit: ${activePlanDetails.depositDisplay}. Please provide subscription form and verified company payment details.`
  );

  return (
    <section id="payment-plans" className="py-12 sm:py-16 bg-[#faf9f6] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              Structured Real Estate Financing
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-stone-900 font-serif-luxury">
              {isPlots
                ? 'Plot Sizes & Flexible Payment Plans'
                : currentProperty.availability.unitType === 'Duplex'
                ? 'Duplex Specifications & Payment Plans'
                : 'Apartment Options & Flexible Payment Plans'}
            </h2>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              {isPlots
                ? 'Select your preferred plot size in Elerangbe, Ibeju Lekki. Start with just ₦3 Million deposit or pay 50% for instant physical plot allocation with zero extra charges for up to 3 months.'
                : currentProperty.availability.unitType === 'Duplex'
                ? 'Turnkey 5-bedroom luxury fully detached duplex with private swimming pool and BQ in Ikota GRA by 2nd Toll Gate, Lekki. Flexible payment terms and immediate handover.'
                : 'Select your preferred luxury apartment configuration in Osapa London, Lekki. A 30% initial deposit secures temporary allocation with the balance spread comfortably over 12 months.'}
            </p>
          </div>

          {/* Unit Count Selector */}
          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs self-start sm:self-auto">
            <span className="text-xs font-medium text-stone-600">Quantity:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setUnitCount(num)}
                  className={`w-7 h-7 text-xs font-bold rounded-lg transition-colors ${
                    unitCount === num
                      ? 'bg-[#1c3829] text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <span className="text-xs text-stone-500">
              {isPlots ? 'Plot(s)' : currentProperty.availability.unitType === 'Duplex' ? 'Duplex' : 'Apartment(s)'}
            </span>
          </div>
        </div>

        {/* Available Unit Types Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
              <span>
                {isPlots
                  ? 'Step 1: Choose Plot Size'
                  : currentProperty.availability.unitType === 'Duplex'
                  ? 'Step 1: Property Configuration'
                  : 'Step 1: Choose Apartment Configuration'}
              </span>
            </label>
            <span className="text-[11px] text-stone-500 font-medium">Click to select & recalculate</span>
          </div>

          <div className={`grid grid-cols-1 ${unitTypes.length > 2 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'} gap-4`}>
            {unitTypes.map((unit, idx) => {
              const isSelected = selectedUnitIndex === idx;
              return (
                <div
                  key={unit.name}
                  onClick={() => setSelectedUnitIndex(idx)}
                  className={`group cursor-pointer rounded-2xl p-5 transition-all border relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#1c3829] ring-1 ring-[#1c3829] shadow-sm'
                      : 'bg-white border-stone-200/90 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  {unit.isPopular && (
                    <span className="absolute -top-2.5 right-4 bg-[#1c3829] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                      Popular Choice
                    </span>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                          isSelected
                            ? 'bg-[#f4f2eb] text-[#1c3829] border border-stone-300'
                            : 'bg-stone-100 text-stone-500 group-hover:text-stone-800'
                        }`}>
                          {isPlots ? (
                            <MapPin className="w-4 h-4" />
                          ) : (
                            <Building className="w-4 h-4" />
                          )}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">{unit.name}</h3>
                      </div>
                    </div>

                    <div className="pt-0.5">
                      <span className="text-xl font-bold text-[#1c3829] font-mono tracking-tight">
                        {unit.price}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">{unit.description}</p>

                    <div className="pt-2 text-xs text-stone-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-t border-stone-100">
                      <span className="text-stone-500 text-[11px]">Deposit Terms:</span>
                      <strong className="text-stone-800 font-mono text-[11px] truncate">{unit.deposit}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Promo Note Banner */}
        {currentProperty.price.promoNote && (
          <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 text-xs sm:text-sm font-medium">
            <Tag className="w-4 h-4 text-emerald-800 shrink-0" />
            <span>{currentProperty.price.promoNote}</span>
          </div>
        )}

        {/* Payment Plan Cards */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
            Step 2: Select Your Preferred Payment Schedule
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentPlans.map((plan) => {
              const isSelected = selectedPlan?.id === plan.id;
              const details = calculatePlanDetails(plan.id);

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all flex flex-col justify-between relative border ${
                    isSelected
                      ? 'bg-white border-[#1c3829] ring-1 ring-[#1c3829] shadow-sm'
                      : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-stone-900">{plan.name}</h3>
                        <p className="text-xs text-stone-500">{plan.duration}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-[#1c3829] bg-[#1c3829] text-white'
                            : 'border-stone-300'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-100 space-y-2">
                      <div>
                        <span className="text-[11px] text-stone-400 uppercase tracking-wider block">
                          Total For {unitCount} {isPlots ? 'Plot(s)' : 'Unit(s)'}
                        </span>
                        <span className="text-xl font-bold text-stone-900 font-mono">
                          {formatNaira(details.totalAmount)}
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-2 text-xs text-stone-600">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-stone-500">Initial Deposit:</span>
                          <span className="font-semibold text-stone-800 font-mono text-right text-xs">
                            {details.depositDisplay}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <span className="text-stone-500">Installment Schedule:</span>
                          <span className="font-semibold text-stone-800 font-mono text-right text-xs">
                            {details.monthlyNote}
                          </span>
                        </div>
                      </div>
                    </div>

                    {(plan.savingsNote || details.instantAllocNote) && (
                      <div className="text-xs text-stone-700 bg-stone-100 p-2.5 rounded-lg border border-stone-200/80 leading-snug">
                        {plan.savingsNote || details.instantAllocNote}
                      </div>
                    )}
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#1c3829] text-white hover:bg-[#254936]'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      <span>{isSelected ? 'Selected Schedule' : 'Choose This Plan'}</span>
                      {isSelected && <ArrowRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lock In CTA Banner in Calm Deep Forest Tone */}
        <div className="bg-[#1c3829] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#254936]">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-200 font-semibold mb-0.5">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {isPlots
                  ? 'Start from ₦3M · Pay 50% for Instant Physical Plot Allocation with Beacon Points'
                  : '30% Initial Deposit Secures Temporary Allocation · Offer Letter & Survey'}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-normal font-serif-luxury">
              Reserve {unitCount} x {selectedUnit.name} ({currentProperty.name})
            </h3>
            <p className="text-xs sm:text-sm text-stone-200">
              Total: <strong className="text-white font-mono">{formatNaira(activePlanDetails.totalAmount)}</strong> · Schedule:{' '}
              <strong className="text-emerald-200">{selectedPlan?.name}</strong>.
            </p>
          </div>

          <a
            href={planWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-[#1c3829] font-bold text-xs sm:text-sm text-center transition-all shadow-sm active:scale-[0.98] sm:whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#1c3829] shrink-0" />
            <span>Lock In on WhatsApp (0904 767 4938)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

