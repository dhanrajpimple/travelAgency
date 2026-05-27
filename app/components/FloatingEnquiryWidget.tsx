import { CONFIG } from "~/config/constants";

export default function FloatingEnquiryWidget() {
  const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONFIG.WHATSAPP_MESSAGE)}`;
  const phoneUrl = `tel:${CONFIG.PHONE_PRIMARY}`;

  const triggerPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-enquiry-popup"));
  };

  return (
    <>
      {/* DESKTOP FLOATING SIDEBAR (Docked to the Right) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[990] hidden md:flex flex-col items-end gap-1.5 select-none">
        
        {/* Book Now Tab */}
        <button
          onClick={triggerPopup}
          className="bg-[#FD5E09] text-white p-3.5 rounded-l-2xl shadow-xl flex flex-col items-center border border-r-0 border-white/10 hover:bg-[#E05300] hover:-translate-x-1.5 transition-all duration-300 cursor-pointer w-12 hover:w-14"
          aria-label="Enquire Now"
        >
          {/* Arrow Icon */}
          <svg className="w-4 h-4 text-white mb-2 transform -rotate-135 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          
          <div className="flex flex-col items-center font-black text-[11px] leading-tight tracking-[0.2em] uppercase">
            <span>B</span>
            <span>O</span>
            <span>O</span>
            <span>K</span>
            <span className="h-2.5" />
            <span>N</span>
            <span>O</span>
            <span>W</span>
          </div>
        </button>

        {/* Call Button */}
        <a
          href={phoneUrl}
          className="p-3.5 bg-[#FD5E09] text-white rounded-l-2xl shadow-xl border border-r-0 border-white/10 hover:bg-[#E05300] hover:-translate-x-1.5 transition-all duration-300 flex items-center justify-center w-12 hover:w-14"
          aria-label="Call Us"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.9 11.9 0 003.84 1.22 1 1 0 01.93 1v3.78a1 1 0 01-1 1A19.88 19.88 0 013 4a1 1 0 011-1h3.78a1 1 0 011 .93 11.9 11.9 0 001.22 3.84 1 1 0 01-.27 1.11z" />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-[#25D366] text-white rounded-l-2xl shadow-xl border border-r-0 border-white/10 hover:bg-[#20ba5a] hover:-translate-x-1.5 transition-all duration-300 flex items-center justify-center w-12 hover:w-14"
          aria-label="WhatsApp Chat"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997a11.9 11.9 0 01-5.708-1.476L0 24zm6.338-1.666c1.748.955 3.712 1.46 5.713 1.461h.005c5.854 0 10.617-4.761 10.62-10.62.002-2.837-1.1-5.505-3.1-7.509-2-2.003-4.668-3.104-7.51-3.106-5.856 0-10.62 4.76-10.624 10.62-.001 2.094.547 4.14 1.588 5.943l-.234.372-3.742.981.999-3.649-.36-.214a10.59 10.59 0 01-1.508-5.26c0-5.854 4.764-10.617 10.62-10.617a10.595 10.595 0 017.509 3.107c2.003 2 3.105 4.671 3.103 7.511-.004 5.854-4.766 10.617-10.622 10.617h-.004a10.6 10.6 0 01-5.034-1.378l-.361-.214zm11.134-7.95c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
        </a>

      </div>

      {/* MOBILE FIXED BOTTOM ACTION STRIP (Docked to the Bottom) */}
      <div className="fixed bottom-0 inset-x-0 z-[990] md:hidden bg-[#FD5E09] text-white py-3 px-4 flex items-center justify-between shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border-t border-white/10 select-none">
        
        {/* Call Icon Link */}
        <a
          href={phoneUrl}
          className="flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all text-white active:scale-95"
          aria-label="Call Phone"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.9 11.9 0 003.84 1.22 1 1 0 01.93 1v3.78a1 1 0 01-1 1A19.88 19.88 0 013 4a1 1 0 011-1h3.78a1 1 0 011 .93 11.9 11.9 0 001.22 3.84 1 1 0 01-.27 1.11z" />
          </svg>
        </a>

        {/* Enquire Now Main Button */}
        <button
          onClick={triggerPopup}
          className="flex-1 mx-4 py-2.5 px-6 rounded-full bg-white text-[#FD5E09] font-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md text-center uppercase tracking-wider border-2 border-white"
        >
          Enquire Now
        </button>

        {/* WhatsApp Icon Link */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] rounded-full shadow-lg text-white active:scale-95 transition-all"
          aria-label="WhatsApp Us"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997a11.9 11.9 0 01-5.708-1.476L0 24zm6.338-1.666c1.748.955 3.712 1.46 5.713 1.461h.005c5.854 0 10.617-4.761 10.62-10.62.002-2.837-1.1-5.505-3.1-7.509-2-2.003-4.668-3.104-7.51-3.106-5.856 0-10.62 4.76-10.624 10.62-.001 2.094.547 4.14 1.588 5.943l-.234.372-3.742.981.999-3.649-.36-.214a10.59 10.59 0 01-1.508-5.26c0-5.854 4.764-10.617 10.62-10.617a10.595 10.595 0 017.509 3.107c2.003 2 3.105 4.671 3.103 7.511-.004 5.854-4.766 10.617-10.622 10.617h-.004a10.6 10.6 0 01-5.034-1.378l-.361-.214zm11.134-7.95c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
        </a>

      </div>
    </>
  );
}
