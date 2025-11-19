import { MessageCircle } from 'lucide-react';
import { CONFIG } from '~/config/constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONFIG.WHATSAPP_MESSAGE)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[998] bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle size={28} className="md:w-8 md:h-8" />
        <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </span>
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}

