import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '4915292612720';
  const message = 'Hallo, ich interessiere mich für Ihre Bauelemente und möchte gerne mehr erfahren.';

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={28} />
    </button>
  );
}
