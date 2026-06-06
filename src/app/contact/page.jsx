import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { STUDIO } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Souvenir Interiors — Greater Noida Studio",
  description:
    "Speak with our design team. Studio visits by appointment. WhatsApp, phone and email — typical response within 4 business hours.",
  openGraph: {
    title: "Contact — Souvenir Interiors",
    description: "Reach our Greater Noida studio.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="pt-40 md:pt-48 pb-12">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-6"><span className="rule" /> Get In Touch</div>
            <h1 className="display-l max-w-4xl">
              Let's begin your <em className="italic">transformation.</em>
            </h1>
            <p className="lead mt-8 max-w-2xl">
              Whether you are ready to start your project or simply want to understand what is
              possible, our team is available for a private design consultation. No sales pressure —
              just an honest conversation about your space.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="eyebrow mb-6"><span className="rule" /> Schedule A Consultation</div>
            <ContactForm />
          </Reveal>

          {/* Direct contact */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="p-6 sm:p-10 h-full" style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
              <div className="eyebrow eyebrow-light mb-6"><span className="rule" /> Speak Directly</div>
              <h2 className="heading-2" style={{ color: "#faf8f5" }}>Or reach us another way.</h2>

              <div className="mt-10 space-y-8">
                <a href={`tel:${STUDIO.phone}`} className="flex items-start gap-4 group">
                  <Phone size={20} strokeWidth={1.5} className="shrink-0" style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">Phone</div>
                    <div className="font-display text-2xl mt-1 group-hover:text-gold transition-colors" style={{ color: "#faf8f5" }}>{STUDIO.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${STUDIO.whatsapp.replace("+","")}`} className="flex items-start gap-4 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="shrink-0"
                    style={{ color: "#c9a86a", marginTop: 4 }}
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.593ZM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-4.294c-.202-.1-.1.195-.582-.765-.083-.139-.282-.208-.48-.3-.2-.09-.176-.388-.823-.66l-.282-.12c-.23-.1-.43-.05-.59.1l-.31.39c-.1.13-.2.15-.38.05-.18-.1-.77-.28-1.46-.9-.54-.48-.9-.88-1.01-1.07-.11-.19-.01-.29.09-.38.08-.08.18-.21.28-.32.09-.1.12-.17.18-.29.06-.12.03-.23-.01-.32-.04-.09-.38-.92-.52-1.26-.14-.33-.28-.29-.38-.29h-.33c-.11 0-.3.04-.46.21-.16.18-.62.6-.62 1.48s.64 1.73.73 1.85c.09.12 1.25 1.91 3.03 2.68.42.18.75.29 1 .37.43.14.82.12 1.13.07.35-.05 1.07-.44 1.22-.86.15-.42.15-.78.1-.86-.05-.08-.18-.13-.38-.23"/>
                  </svg>
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">WhatsApp</div>
                    <div className="font-display text-2xl mt-1" style={{ color: "#faf8f5" }}>Open Chat →</div>
                    <div className="text-xs opacity-60 mt-1">Fastest response · typically under 1 hour</div>
                  </div>
                </a>
                <a href={`mailto:${STUDIO.email}`} className="flex items-start gap-4 group">
                  <Mail size={20} strokeWidth={1.5} className="shrink-0" style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">Email</div>
                    <div className="font-display text-xl mt-1" style={{ color: "#faf8f5" }}>{STUDIO.email}</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin size={20} strokeWidth={1.5} className="shrink-0" style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">Studio</div>
                    <div className="mt-1 leading-relaxed">{STUDIO.address}<br />{STUDIO.addressLine2}</div>
                    <div className="text-xs opacity-60 mt-2">Studio visits by appointment only.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} strokeWidth={1.5} className="shrink-0" style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">Hours</div>
                    <div className="mt-1">{STUDIO.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
