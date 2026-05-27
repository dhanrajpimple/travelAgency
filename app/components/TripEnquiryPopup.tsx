import { useEffect, useState } from "react";
import { X } from "lucide-react";
import TripEnquiryForm from "~/components/TripEnquiryForm";

const DISMISSED_KEY = "flexi-trip-enquiry-dismissed";

type TripEnquiryPopupProps = {
  pathname: string;
};

export default function TripEnquiryPopup({ pathname }: TripEnquiryPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isContactPage = pathname.replace(/\/+$/, "") === "/contact";

  useEffect(() => {
    if (isContactPage) {
      setIsVisible(false);
      return;
    }

    // Auto open only if not dismissed before
    if (window.localStorage.getItem(DISMISSED_KEY) !== "true") {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 15000); // 15 seconds
      return () => window.clearTimeout(timer);
    }
  }, [isContactPage, pathname]);

  // Listen to manual triggers from "Book Now" / "Enquire Now" buttons
  useEffect(() => {
    const handleOpen = () => {
      setIsVisible(true);
    };
    window.addEventListener("open-enquiry-popup", handleOpen);
    return () => {
      window.removeEventListener("open-enquiry-popup", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDismissClose = () => {
    window.localStorage.setItem(DISMISSED_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible || isContactPage) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-transparent" onClick={handleClose} />
      
      {/* Form Container Card */}
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-gray-100 transform transition-all duration-300 scale-100 opacity-100 overflow-hidden">
        {/* Top gold/blue accent strip */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#1A2B4A] via-[#D4AF37] to-[#1A2B4A]" />

        <button
          type="button"
          onClick={handleDismissClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 rounded-full bg-gray-50 p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors z-10"
        >
          <X size={16} />
        </button>
        
        <div className="pt-2">
          <TripEnquiryForm compact onSuccess={handleClose} />
        </div>
      </div>
    </div>
  );
}
