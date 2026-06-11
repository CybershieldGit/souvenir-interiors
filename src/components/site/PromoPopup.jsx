"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import indianLuxuryKitchen from "@/assets/indian_luxury_kitchen.png";

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
  });

  useEffect(() => {
    // Check if the user has already seen the popup
    const hasSeenPopup = localStorage.getItem("souvenir_promo_seen");

    if (!hasSeenPopup) {
      // Show the popup after 7 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark as seen so it doesn't show again on refresh
        localStorage.setItem("souvenir_promo_seen", "true");
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      let numericValue = value.replace(/\D/g, "");
      if (numericValue.startsWith("0")) {
        numericValue = numericValue.substring(1);
      }
      numericValue = numericValue.slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else if (name === "pincode") {
      const numericValue = value.replace(/\D/g, "").slice(0, 6);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
        leadType: "Offer Popup",
        name: formData.name,
        whatsapp: `+91 ${formData.mobile}`,
        email: "",
        pincode: formData.pincode,
        location: "",
        scope: "Promo Popup Offer",
        meetingFormat: "Not specified",
        description: "Promo Offer requested",
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
        // Automatically close the popup after a few seconds
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        setError(result.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-[480px] flex flex-col"
        style={{ animation: "fadeInScale 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full text-black shadow hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top Image Section */}
        <div className="relative w-full h-48">
          <Image 
            src={indianLuxuryKitchen} 
            alt="Modular Interiors" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8">
          {sent ? (
            <div className="py-8 text-center">
              <div className="text-4xl mb-3" style={{ color: "#c9a86a" }}>✓</div>
              <h3 className="font-display text-2xl text-neutral-900">Thank you</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Our team will contact you shortly with the details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-bold text-center text-neutral-900 mb-2">
                Fill details to unlock the offer
              </h3>

              {error && (
                <div className="p-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded text-center">
                  {error}
                </div>
              )}

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                disabled={loading}
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-neutral-500 focus:ring-0 transition-colors"
              />

              <div className="flex w-full border border-gray-300 rounded overflow-hidden focus-within:border-neutral-500 transition-colors">
                <div className="bg-gray-50 px-3 py-2.5 border-r border-gray-300 flex items-center justify-center text-sm text-neutral-700 select-none">
                  <span className="mr-1">🇮🇳</span> +91
                </div>
                <input
                  required
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit number"
                  disabled={loading}
                  className="w-full px-3 py-2.5 text-sm outline-none border-none focus:ring-0"
                  pattern="[1-9][0-9]{9}"
                  title="Please enter exactly 10 digits (cannot start with 0)"
                  maxLength={10}
                />
              </div>

              <input
                required
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter 6-digit Pincode"
                disabled={loading}
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-neutral-500 focus:ring-0 transition-colors"
                pattern="[0-9]{6}"
                title="Please enter exactly 6 digits"
                maxLength={6}
              />

              <p className="text-[10px] text-gray-500 leading-tight text-center mt-1">
                By continuing, I agree to the Souvenir Interiors Terms of Use & Privacy Policy
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-neutral-600 hover:bg-neutral-700 text-white font-semibold text-sm py-3 rounded mt-2 transition-colors uppercase tracking-wider disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Continue"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
