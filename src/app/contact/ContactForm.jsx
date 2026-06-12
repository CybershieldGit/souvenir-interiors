"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    projectType: "",
    format: "In-Studio Visit",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      let numericValue = value.replace(/\D/g, "");
      if (numericValue.startsWith("0")) {
        numericValue = numericValue.substring(1);
      }
      numericValue = numericValue.slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormatChange = (formatVal) => {
    setFormData((prev) => ({ ...prev, format: formatVal }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
      if (!sheetsUrl) {
        setError("Google Sheets URL is not configured. Please add NEXT_PUBLIC_GOOGLE_SHEETS_URL to your .env.local.");
        setLoading(false);
        return;
      }

      const getParam = (key) => {
        if (typeof window !== "undefined") {
          return localStorage.getItem(key) || "";
        }
        return "";
      };

      const payload = {
        leadType: "Contact Form",
        name: formData.name,
        whatsapp: `'+91 ${formData.whatsapp}`,
        email: formData.email,
        pincode: "",
        location: "Contact Page",
        scope: formData.projectType || "Not specified",
        meetingFormat: formData.format,
        description: formData.notes || "None",
        gclid: getParam("gclid"),
        fbclid: getParam("fbclid"),
        utm_source: getParam("utm_source"),
        utm_medium: getParam("utm_medium"),
        utm_campaign: getParam("utm_campaign"),
        utm_content: getParam("utm_content"),
        utm_term: getParam("utm_term"),
        referrer: typeof document !== "undefined" ? document.referrer : "",
        landing_page: typeof window !== "undefined" ? window.location.href : ""
      };

      const response = await fetch(sheetsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(result.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {sent ? (
        <div className="border p-6 sm:p-10 text-center" style={{ borderColor: "#c9a86a" }}>
          <h2 className="heading-3">Thank you.</h2>
          <p className="mt-4" style={{ color: "#6b6b6b" }}>
            We've received your enquiry and will respond within 4 business hours.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {error && (
            <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                placeholder="Your name"
              />
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
                placeholder="you@example.com"
                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                title="Please enter a valid email address (e.g. user@example.com)"
              />
            </div>
            <div>
              <label className="field-label">WhatsApp Number</label>
              <div className="relative">
                <span 
                  className="absolute left-0 top-[14px] text-[16px] font-sans select-none pointer-events-none" 
                  style={{ color: "var(--charcoal)" }}
                >
                  +91
                </span>
                <input
                  required
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  disabled={loading}
                  className="field"
                  style={{ paddingLeft: "34px" }}
                  placeholder="10-digit number"
                  pattern="[1-9][0-9]{9}"
                  title="Please enter exactly 10 digits (cannot start with 0)"
                  maxLength={10}
                />
              </div>
            </div>
            <div>
              <label className="field-label">Project Type</label>
              <Select
                value={formData.projectType}
                onValueChange={(val) => setFormData((prev) => ({ ...prev, projectType: val }))}
                disabled={loading}
              >
                <SelectTrigger className="field h-auto border-t-0 border-x-0 rounded-none px-0 py-3.5 text-base shadow-none focus:ring-0 focus:border-b-gold flex items-center justify-between">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground border shadow-md rounded-md p-1">
                  <SelectItem value="Flat or House">Flat or House</SelectItem>
                  <SelectItem value="Full home — turnkey">Full home — turnkey</SelectItem>
                  <SelectItem value="Single room — kitchen">Single room — kitchen</SelectItem>
                  <SelectItem value="Single room — living">Single room — living</SelectItem>
                  <SelectItem value="Single room — bedroom">Single room — bedroom</SelectItem>
                  <SelectItem value="Office / commercial">Office / commercial</SelectItem>
                  <SelectItem value="Possession Planned">Possession Planned</SelectItem>
                  <SelectItem value="Still exploring">Still exploring</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="field-label">Preferred Meeting Format</label>
            <div className="flex flex-wrap gap-6 mt-3">
              {["In-Studio Visit", "Virtual Call", "Site Visit"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    checked={formData.format === opt}
                    onChange={() => handleFormatChange(opt)}
                    disabled={loading}
                    className="accent-[#c9a86a]"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="field-label">Tell us about your project</label>
            <textarea
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              disabled={loading}
              className="field resize-none"
              placeholder="Property, scope, timeline..."
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary w-full md:w-auto">
            {loading ? "Sending..." : "Request Consultation"}
          </button>

          <p className="text-xs" style={{ color: "#6b6b6b" }}>
            We respond to every inquiry within 4 business hours. Your details are never shared.
          </p>
        </form>
      )}
    </>
  );
}
