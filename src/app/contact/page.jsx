import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { STUDIO } from "@/lib/data";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
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
            <div className="p-10 h-full" style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
              <div className="eyebrow eyebrow-light mb-6"><span className="rule" /> Speak Directly</div>
              <h2 className="heading-2" style={{ color: "#faf8f5" }}>Or reach us another way.</h2>

              <div className="mt-10 space-y-8">
                <a href={`tel:${STUDIO.phone}`} className="flex items-start gap-4 group">
                  <Phone size={20} strokeWidth={1.5} style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">Phone</div>
                    <div className="font-display text-2xl mt-1 group-hover:text-gold transition-colors" style={{ color: "#faf8f5" }}>{STUDIO.phone}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${STUDIO.whatsapp.replace("+","")}`} className="flex items-start gap-4 group">
                  <MessageCircle size={20} strokeWidth={1.5} style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">WhatsApp</div>
                    <div className="font-display text-2xl mt-1" style={{ color: "#faf8f5" }}>Open Chat →</div>
                    <div className="text-xs opacity-60 mt-1">Fastest response · typically under 1 hour</div>
                  </div>
                </a>
                <a href={`mailto:${STUDIO.email}`} className="flex items-start gap-4 group">
                  <Mail size={20} strokeWidth={1.5} style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">Email</div>
                    <div className="font-display text-xl mt-1" style={{ color: "#faf8f5" }}>{STUDIO.email}</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin size={20} strokeWidth={1.5} style={{ color: "#c9a86a", marginTop: 4 }} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] opacity-70">Studio</div>
                    <div className="mt-1 leading-relaxed">{STUDIO.address}<br />{STUDIO.addressLine2}</div>
                    <div className="text-xs opacity-60 mt-2">Studio visits by appointment only.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} strokeWidth={1.5} style={{ color: "#c9a86a", marginTop: 4 }} />
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
