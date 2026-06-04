"use client";

import { useState } from "react";
import { STUDIO } from "@/lib/data";

export default function ConsultationForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="p-8 md:p-12 border" style={{ borderColor: "#e5e5e0", backgroundColor: "#ffffff" }}>
      {sent ? (
        <div className="py-12 text-center">
          <div className="font-display text-5xl mb-4" style={{ color: "#c9a86a" }}>✓</div>
          <h2 className="heading-2">Thank you.</h2>
          <p className="mt-4 lead">
            Your consultation request has been received. We'll be in touch within 4 business
            hours to confirm a time that suits you.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="space-y-7"
        >
          <h2 className="heading-3 mb-6">Book your consultation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label className="field-label">Full Name</label>
              <input required type="text" className="field" />
            </div>
            <div>
              <label className="field-label">WhatsApp</label>
              <input required type="tel" className="field" placeholder="+91" />
            </div>
          </div>
          <div>
            <label className="field-label">Email</label>
            <input required type="email" className="field" />
          </div>
          <div>
            <label className="field-label">Project Location</label>
            <input type="text" className="field" placeholder="City, Sector" />
          </div>
          <div>
            <label className="field-label">Project Scope</label>
            <select className="field" defaultValue="">
              <option value="" disabled>Select scope</option>
              <option>Full home — turnkey</option>
              <option>Single room — kitchen</option>
              <option>Single room — living</option>
              <option>Single room — bedroom</option>
              <option>Office / commercial</option>
              <option>Still exploring</option>
            </select>
          </div>
          <div>
            <label className="field-label">Meeting Format</label>
            <div className="flex flex-wrap gap-6 mt-3">
              {["In-studio", "Virtual call", "Site visit"].map((o) => (
                <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="format" defaultChecked={o === "In-studio"} className="accent-[#c9a86a]" />
                  {o}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="field-label">A few words about your project</label>
            <textarea rows={3} className="field resize-none" />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Request Consultation
          </button>
          <p className="text-xs text-center" style={{ color: "#6b6b6b" }}>
            Or WhatsApp us directly on{" "}
            <a href={`https://wa.me/${STUDIO.whatsapp.replace("+","")}`} style={{ color: "#c9a86a" }}>
              {STUDIO.phone}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
