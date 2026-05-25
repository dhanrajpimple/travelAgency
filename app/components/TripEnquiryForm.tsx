import { useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { useFetcher } from "react-router";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";
import Textarea from "~/components/ui/Textarea";
import type { ContactActionData } from "~/routes/contact";

type TripEnquiryFormProps = {
  compact?: boolean;
};

export default function TripEnquiryForm({ compact = false }: TripEnquiryFormProps) {
  const fetcher = useFetcher<ContactActionData>();
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = fetcher.state !== "idle";
  const errors = fetcher.data?.fieldErrors || {};

  useEffect(() => {
    if (fetcher.data?.ok) {
      formRef.current?.reset();
    }
  }, [fetcher.data]);

  return (
    <fetcher.Form ref={formRef} method="post" action="/contact" className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-gray-800">Send Us a Message</h3>
        <p className="mt-1 text-sm text-gray-600">
          Share your details and our travel expert will get back to you shortly.
        </p>
      </div>

      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <Input name="name" label="Name" placeholder="Your name" required error={errors.name} />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          error={errors.email}
        />
        <Input
          name="phone"
          label="Phone"
          type="tel"
          placeholder="+91 98765 43210"
          required
          error={errors.phone}
        />
      </div>

      <Textarea
        name="message"
        label="Message"
        rows={compact ? 3 : 5}
        placeholder="Tell us how we can help with your travel plans."
        required
        error={errors.message}
      />

      {fetcher.data?.message ? (
        <p
          className={`rounded-lg px-4 py-3 text-sm ${
            fetcher.data.ok
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {fetcher.data.message}
        </p>
      ) : null}

      <Button type="submit" size={compact ? "md" : "lg"} className="w-full" isLoading={isSubmitting}>
        <span className="flex items-center justify-center gap-2">
          <Send size={18} />
          Send Message
        </span>
      </Button>
    </fetcher.Form>
  );
}
