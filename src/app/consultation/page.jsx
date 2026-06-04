import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/data";
import { Check } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

export const metadata = {
  title: "Schedule A Private Design Consultation — Souvenir Interiors",
  description:
    "Book a complimentary private consultation with our senior design team. In-studio, virtual or on-site. No sales pressure.",
  openGraph: {
    title: "Schedule A Consultation — Souvenir Interiors",
    description: "Begin your project with a private design consultation.",
    url: "/consultation",
  },
};

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default function ConsultationPage() {
  return (
    <SiteLayout>
      <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden">
        <img src={getSrc(images.foyer)} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,26,26,0.82)" }} />
        <div className="container-x relative z-10 text-center" style={{ color: "#faf8f5" }}>
          <Reveal>
            <div className="eyebrow eyebrow-light mb-6 inline-block"><span className="rule" /> Private Consultation</div>
            <h1 className="display-l max-w-4xl mx-auto" style={{ color: "#faf8f5" }}>
              Your dream space is one <em className="italic" style={{ color: "#e8d5a3" }}>conversation away.</em>
            </h1>
            <p className="lead mt-8 max-w-2xl mx-auto" style={{ color: "rgba(250,248,245,0.85)" }}>
              Schedule a private design consultation with our senior design team. We will discuss your
              space, your vision, and how Souvenir Interiors can bring it to life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-6"><span className="rule" /> What To Expect</div>
            <h2 className="heading-1">A conversation, not a sales pitch.</h2>
            <ul className="mt-10 space-y-5">
              {[
                "A 45-minute private conversation with our senior design team",
                "Discussion of your space, lifestyle, and project scope",
                "Honest guidance on scope, timeline, and indicative investment",
                "Studio visit available — by appointment",
                "Complimentary · no obligation",
              ].map((line) => (
                <li key={line} className="flex items-start gap-4">
                  <Check size={18} strokeWidth={1.5} style={{ color: "#c9a86a", marginTop: 4 }} />
                  <span className="text-base leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 p-6 border-l-2" style={{ borderColor: "#c9a86a", backgroundColor: "#f5f3ef" }}>
              <p className="font-display italic text-xl leading-relaxed" style={{ color: "#1a1a1a" }}>
                "Thirty-five years, and I still approach every project as if it is the most important
                space I have ever designed."
              </p>
              <div className="mt-4 text-xs uppercase tracking-[0.14em]" style={{ color: "#c9a86a" }}>
                Mr. Noor · Design Head
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
