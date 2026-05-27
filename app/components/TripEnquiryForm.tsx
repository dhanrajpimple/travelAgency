import { useEffect, useRef } from "react";
import { Send, User, Mail, Phone as PhoneIcon, MessageSquare } from "lucide-react";
import { useFetcher } from "react-router";
import Button from "~/components/ui/Button";
import type { ContactActionData } from "~/routes/contact";

type TripEnquiryFormProps = {
  compact?: boolean;
  onSuccess?: () => void;
};

export default function TripEnquiryForm({ compact = false, onSuccess }: TripEnquiryFormProps) {
  const fetcher = useFetcher<ContactActionData>();
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = fetcher.state !== "idle";
  const errors = fetcher.data?.fieldErrors || {};

  useEffect(() => {
    if (fetcher.data?.ok) {
      formRef.current?.reset();
      if (onSuccess) {
        // Wait 1.5s to show success state, then close
        const timer = setTimeout(() => {
          onSuccess();
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [fetcher.data, onSuccess]);

  return (
    <fetcher.Form ref={formRef} method="post" action="/contact" className={compact ? "space-y-4" : "space-y-6"}>
      <div>
        {compact ? (
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1A2B4A] border border-[#1A2B4A]/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              Quick Travel Enquiry
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#1A2B4A]">Plan Your CPHI Trip</h3>
            <p className="mt-1 text-xs text-gray-500">
              Share details and get a focused quote in 24 business hours.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-[#1A2B4A]">Send Us a Message</h3>
            <p className="mt-1.5 text-sm text-gray-600">
              Share your travel preferences and our experts will design the perfect itinerary for you.
            </p>
          </div>
        )}
      </div>

      <div className={`grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2 gap-4"}`}>
        {/* Name Field */}
        <div className={compact ? "col-span-1" : "col-span-1"}>
          <label className="block text-[11px] font-bold text-[#1A2B4A]/70 uppercase tracking-wider mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <User size={15} />
            </div>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                errors.name
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
              }`}
            />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Phone Field */}
        <div className={compact ? "col-span-1" : "col-span-1"}>
          <label className="block text-[11px] font-bold text-[#1A2B4A]/70 uppercase tracking-wider mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <PhoneIcon size={15} />
            </div>
            <input
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
              className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
              }`}
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        {/* Email Field */}
        <div className={compact ? "col-span-2" : "col-span-1 md:col-span-2"}>
          <label className="block text-[11px] font-bold text-[#1A2B4A]/70 uppercase tracking-wider mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail size={15} />
            </div>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
              }`}
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-[11px] font-bold text-[#1A2B4A]/70 uppercase tracking-wider mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute top-2.5 left-3 pointer-events-none text-gray-400">
            <MessageSquare size={15} />
          </div>
          <textarea
            name="message"
            rows={compact ? 2 : 4}
            placeholder={compact ? "Travel details (e.g. city, dates, passengers)" : "Tell us how we can help with your travel plans."}
            required
            className={`w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
              errors.message
                ? "border-red-500 focus:ring-red-500/20"
                : "border-gray-200 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]"
            }`}
          />
        </div>
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {fetcher.data?.message ? (
        <p
          className={`rounded-xl px-4 py-2.5 text-xs font-semibold ${
            fetcher.data.ok
              ? "bg-green-50 text-green-700 border border-green-150"
              : "bg-red-50 text-red-700 border border-red-150"
          }`}
        >
          {fetcher.data.message}
        </p>
      ) : null}

      <Button
        type="submit"
        className="w-full bg-[#1A2B4A] hover:bg-[#243B61] text-white hover:scale-[1.02] active:scale-[0.98] transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 shadow-lg"
        isLoading={isSubmitting}
      >
        <span className="flex items-center justify-center gap-2 text-sm font-bold">
          <Send size={15} />
          Send Enquiry
        </span>
      </Button>
    </fetcher.Form>
  );
}
