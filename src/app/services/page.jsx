import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Luxury Interior Design Services in Delhi NCR — Souvenir Interiors",
  description:
    "Ten end-to-end interior design services for discerning homes and offices across Delhi NCR — from residential design to turnkey solutions.",
  openGraph: {
    title: "Services — Souvenir Interiors",
    description: "Residential, kitchens, turnkey, custom furniture and more.",
    url: "/services",
  },
};

export default function ServicesIndexPage() {
  return (
    <SiteLayout>
      <section className="pt-40 md:pt-48 pb-16 md:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-6"><span className="rule" /> What We Do</div>
            <h1 className="display-l max-w-4xl">
              Luxury interior design services in <em className="italic">Delhi NCR.</em>
            </h1>
            <p className="lead mt-10 max-w-2xl">
              Every service we offer is an integrated part of a complete design vision. Whether you
              are transforming a single room or commissioning a full-scale home, our approach combines
              senior design expertise, premium material sourcing, and precision execution — managed
              end-to-end by a team that has been doing this for over three decades.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#e5e5e0" }}>
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full p-8 md:p-12 transition-colors"
                  style={{ backgroundColor: "#faf8f5" }}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-[0.14em] mb-4" style={{ color: "#c9a86a" }}>
                        Service · {String(i + 1).padStart(2, "0")}
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl group-hover:text-gold transition-colors" style={{ color: "#1a1a1a" }}>
                        {s.name}
                      </h2>
                      <p className="mt-5 leading-relaxed max-w-md" style={{ color: "#6b6b6b" }}>
                        {s.tagline}
                      </p>
                      <span className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: "#c9a86a" }}>
                        Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y text-center" style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
        <div className="container-x">
          <Reveal>
            <h2 className="display-l max-w-3xl mx-auto" style={{ color: "#faf8f5" }}>
              Not sure where to begin?
            </h2>
            <p className="lead mt-6 mx-auto max-w-xl" style={{ color: "rgba(250,248,245,0.8)" }}>
              A complimentary consultation is the simplest place to start. We will help define the
              scope and the right service for your project.
            </p>
            <Link href="/consultation" className="btn btn-primary mt-10">Schedule A Consultation</Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
