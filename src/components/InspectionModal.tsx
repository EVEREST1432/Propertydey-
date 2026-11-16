import React, { useState } from 'react';
import { useProperty } from '../context/PropertyContext';
import { Calendar, MapPin, Users, CheckCircle2, MessageCircle, X } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

export const InspectionModal: React.FC = () => {
  const { currentProperty, inspectionModalOpen, setInspectionModalOpen } = useProperty();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [inspectionDate, setInspectionDate] = useState('Upcoming Saturday (10:00 AM)');
  const [pickupLocation, setPickupLocation] = useState('Property Dey Lekki Phase 1 Office (Free Executive Bus)');
  const [attendeeCount, setAttendeeCount] = useState('1 Person');

  if (!inspectionModalOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingMessage = `Hello Property Dey Ltd. I would like to book a site inspection to ${currentProperty.name}.\n\n` +
      `• Name: ${fullName || 'Investor'}\n` +
      `• Phone: ${phone || 'Not specified'}\n` +
      `• Date: ${inspectionDate}\n` +
      `• Pickup: ${pickupLocation}\n` +
      `• Attendees: ${attendeeCount}\n\n` +
      `Please confirm seat reservation and pickup guidelines.`;

    const waLink = createWhatsAppLink(
      currentProperty.companyContact.whatsappNumber,
      bookingMessage
    );

    const anchor = document.createElement('a');
    anchor.href = waLink;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setInspectionModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-stone-200 relative">
        <button
          onClick={() => setInspectionModalOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center text-sm font-semibold transition-colors"
        >
          ✕
        </button>

        <div className="space-y-1.5 mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
            <Calendar className="w-3.5 h-3.5 text-emerald-800" />
            <span>Weekend Inspection Reservation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-stone-900 font-serif-luxury">
            Book Site Visit to {currentProperty.name}
          </h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            Join our licensed surveyors and investment advisors for an on-ground tour of layout beacons and civil engineering progress.
          </p>
        </div>

        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Your Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Chief Babatunde Adeleke"
              className="w-full text-xs px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-900"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Phone Number / WhatsApp</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 0803 123 4567"
              className="w-full text-xs px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Preferred Date & Time</label>
              <select
                value={inspectionDate}
                onChange={(e) => setInspectionDate(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-900"
              >
                <option value="Upcoming Saturday (10:00 AM)">This Saturday (10:00 AM)</option>
                <option value="Upcoming Sunday (2:00 PM)">This Sunday (2:00 PM)</option>
                <option value="Wednesday Midweek (11:00 AM)">Wednesday Midweek (11:00 AM)</option>
                <option value="Custom Private Date">Custom Private Date</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Number of Visitors</label>
              <select
                value={attendeeCount}
                onChange={(e) => setAttendeeCount(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-900"
              >
                <option value="1 Person (Self)">1 Person (Self)</option>
                <option value="2 Persons (Couple / Partner)">2 Persons (Couple / Partner)</option>
                <option value="3 - 5 Persons (Family / Syndicate)">3 - 5 Persons (Syndicate)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Pickup / Meeting Point</label>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full text-xs px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-900"
            >
              <option value="Property Dey Lekki Phase 1 Office (Free Executive Bus)">
                Property Dey Lekki Phase 1 Office (Free Executive Bus)
              </option>
              <option value="Circle Mall / Jakande Roundabout Pickup (Lekki Corridor)">
                Circle Mall / Jakande Roundabout Pickup (Lekki Corridor)
              </option>
              <option value="Ikeja Mall Departure (Mainland Pickup)">Ikeja Mall Departure (Mainland Pickup)</option>
              <option value={`Self-Drive Direct to Site Gatehouse (${currentProperty.name}, ${currentProperty.location.city})`}>
                {`Self-Drive Direct to Site Gatehouse (${currentProperty.name})`}
              </option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#1c3829] hover:bg-[#254936] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Confirm Reservation on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
