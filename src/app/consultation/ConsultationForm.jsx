"use client";

import { useState, useEffect, useRef } from "react";
import { STUDIO } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ConsultationForm() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    location: "",
    scope: "",
    format: "In-studio",
    notes: "",
  });

  useEffect(() => {
    if (formRef.current) {
      const timer = setTimeout(() => {
        const headerOffset = 100; // Account for the fixed navbar height and spacing
        const elementPosition = formRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 180);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormatChange = (formatVal) => {
    setFormData((prev) => ({ ...prev, format: formatVal }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setError("Web3Forms Access Key is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local.");
        setLoading(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Consultation Request: ${formData.name}`,
          from_name: "Souvenir Consultation",
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          location: formData.location || "Not specified",
          scope: formData.scope || "Not specified",
          format: formData.format,
          notes: formData.notes || "None"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(result.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={formRef} className="p-6 sm:p-8 md:p-12 border" style={{ borderColor: "#e5e5e0", backgroundColor: "#ffffff" }}>
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
        <form onSubmit={handleSubmit} className="space-y-7">
          <h2 className="heading-3 mb-6">Book your consultation.</h2>
          
          {error && (
            <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label className="field-label">Full Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className="field"
              />
            </div>
            <div>
              <label className="field-label">WhatsApp</label>
              <input
                required
                type="tel"
                name="whatsapp"
                placeholder="+91"
                value={formData.whatsapp}
                onChange={handleChange}
                disabled={loading}
                className="field"
              />
            </div>
          </div>
          <div>
            <label className="field-label">Email</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="field"
            />
          </div>
          <div>
            <label className="field-label">Project Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, Sector"
              value={formData.location}
              onChange={handleChange}
              disabled={loading}
              className="field"
            />
          </div>
          <div>
            <label className="field-label">Project Scope</label>
            <Select
              value={formData.scope}
              onValueChange={(val) => setFormData((prev) => ({ ...prev, scope: val }))}
              disabled={loading}
            >
                <SelectTrigger className="field h-auto border-t-0 border-x-0 rounded-none px-0 py-3.5 text-base shadow-none focus:ring-0 focus:border-b-gold flex items-center justify-between">
                  <SelectValue placeholder="Select scope" />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground border shadow-md rounded-md p-1">
                  <SelectItem value="Flat or House">Flat or House</SelectItem>
                  <SelectItem value="Full home — turnkey">Full home — turnkey</SelectItem>
                  <SelectItem value="Single room — kitchen">Single room — kitchen</SelectItem>
                  <SelectItem value="Single room — living">Single room — living</SelectItem>
                  <SelectItem value="Single room — bedroom">Single room — bedroom</SelectItem>
                  <SelectItem value="Office / commercial">Office / commercial</SelectItem>
                  <SelectItem value="Still exploring">Still exploring</SelectItem>
                </SelectContent>
              </Select>
          </div>
          <div>
            <label className="field-label">Meeting Format</label>
            <div className="flex flex-wrap gap-6 mt-3">
              {["In-studio", "Virtual call", "Site visit"].map((o) => (
                <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    checked={formData.format === o}
                    onChange={() => handleFormatChange(o)}
                    disabled={loading}
                    className="accent-[#c9a86a]"
                  />
                  {o}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="field-label">A few words about your project</label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              disabled={loading}
              className="field resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? "Sending..." : "Request Consultation"}
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
