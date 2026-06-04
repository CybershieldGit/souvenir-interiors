"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {sent ? (
        <div className="border p-10 text-center" style={{ borderColor: "#c9a86a" }}>
          <h2 className="heading-3">Thank you.</h2>
          <p className="mt-4" style={{ color: "#6b6b6b" }}>
            We've received your enquiry and will respond within 4 business hours.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="field-label">Full Name</label>
              <input required type="text" className="field" placeholder="Your name" />
            </div>
            <div>
              <label className="field-label">Email</label>
              <input required type="email" className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="field-label">WhatsApp Number</label>
              <input required type="tel" className="field" placeholder="+91" />
            </div>
            <div>
              <label className="field-label">Project Type</label>
              <select className="field" defaultValue="">
                <option value="" disabled>Select</option>
                <option>New Home</option>
                <option>Renovation</option>
                <option>Modular Kitchen</option>
                <option>Office</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="field-label">Preferred Meeting Format</label>
            <div className="flex flex-wrap gap-6 mt-3">
              {["In-Studio Visit", "Virtual Call", "Site Visit"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="format" defaultChecked={opt === "In-Studio Visit"} className="accent-[#c9a86a]" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="field-label">Tell us about your project</label>
            <textarea rows={4} className="field resize-none" placeholder="Property, scope, timeline..." />
          </div>

          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Request Consultation
          </button>

          <p className="text-xs" style={{ color: "#6b6b6b" }}>
            We respond to every inquiry within 4 business hours. Your details are never shared.
          </p>
        </form>
      )}
    </>
  );
}
