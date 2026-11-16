/**
 * Formats a phone number and message into a direct WhatsApp Web/Mobile link.
 * Removes non-numeric characters from the phone number.
 */
export function createWhatsAppLink(phoneNumber: string, message: string): string {
  // Strip spaces, dashes, parentheses, plus sign
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', '₦');
}
