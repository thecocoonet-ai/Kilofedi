"use client";

import { InlineWidget } from "react-calendly";

export default function ContactForm() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f4f1eb] p-2 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
      <div className="h-[700px] w-full overflow-hidden rounded-xl">
        <InlineWidget
          url="https://calendly.com/contactkilofedi/new-meeting"
          styles={{ height: "80%", minHeight: "700px" }}
          pageSettings={{
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
        />
      </div>
    </div>
  );
}
