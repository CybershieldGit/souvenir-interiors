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
          subject: `New Contact Form Submission: ${formData.name}`,
          from_name: "Souvenir Contact Form",
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          projectType: formData.projectType || "Not specified",
          format: formData.format,
          notes: formData.notes || "None"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(result.message || "Failed to submit enquiry. Please try again.");
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
              />
            </div>
            <div>
              <label className="field-label">WhatsApp Number</label>
              <input
                required
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                disabled={loading}
                className="field"
                placeholder="+91"
              />
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
                  <SelectItem value="New Home">New Home</SelectItem>
                  <SelectItem value="Renovation">Renovation</SelectItem>
                  <SelectItem value="Modular Kitchen">Modular Kitchen</SelectItem>
                  <SelectItem value="Office">Office</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
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
