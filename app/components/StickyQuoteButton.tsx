import { FileText } from "lucide-react";
import { Link } from "react-router";

export default function StickyQuoteButton() {
  return (
    <Link
      to="/contact"
      className="fixed left-4 bottom-6 z-[997] inline-flex items-center gap-2 rounded-full bg-[#1A2B4A] px-4 py-3 text-sm font-semibold text-white shadow-2xl transition-transform hover:scale-105"
      aria-label="Get a quote"
    >
      <FileText size={18} />
      <span>Get Quote</span>
    </Link>
  );
}
