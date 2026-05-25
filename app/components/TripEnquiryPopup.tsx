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

    if (window.localStorage.getItem(DISMISSED_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [isContactPage, pathname]);

  const handleClose = () => {
    window.localStorage.setItem(DISMISSED_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible || isContactPage) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 top-24 z-[100] flex items-start justify-center bg-black/60 px-4 pb-6 pt-4 backdrop-blur-sm md:top-28">
      <div className="relative max-h-[calc(100vh-8rem)] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl md:max-h-[calc(100vh-9rem)] md:p-7">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200"
        >
          <X size={20} />
        </button>
        <TripEnquiryForm compact />
      </div>
    </div>
  );
}
