import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { images, projects, services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Souvenir Interiors — Luxury Interior Design · Delhi NCR",
  description:
    "Bespoke luxury interiors for discerning homes across Delhi NCR. Designed with mastery. Delivered without compromise. 35 years of design excellence.",
  openGraph: {
    title: "Souvenir Interiors — Where Artistry Meets Precision",
    description:
      "Bespoke luxury interiors for discerning homes across Delhi NCR. 150+ projects delivered, 35 years of design excellence.",
    url: "/",
  },
};

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={getSrc(images.hero)}
          alt="Luxury living room interior by Souvenir Interiors, Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }} />
        <div className="container-x relative z-10 h-full flex flex-col justify-end pb-24 sm:pb-20 md:pb-24" style={{ color: "#ffffff" }}>
          <div className="animate-fade-up max-w-[850px]">
            <div className="eyebrow mb-4 sm:mb-6 animate-fade-in flex items-center text-[11px] sm:text-[13px] font-bold" style={{ textShadow: "none" }}>
              <span className="rule" style={{ backgroundColor: "#ffffff", marginRight: "12px", height: "1px" }} />
              <span className="px-4 py-1.5 tracking-[0.15em] uppercase" style={{ backgroundColor: "#ffffff", color: "#1a1a1a", borderRadius: "2px" }}>
                Luxury Interiors · Delhi NCR
              </span>
            </div>
            <h1 className="display-xl font-light" style={{ color: "inherit", textShadow: "0 4px 20px rgba(0,0,0,0.45)", lineHeight: "1.15", fontSize: "clamp(38px, 8.5vw, 96px)" }}>
              <span style={{ color: "#ffffff" }}>Where Artistry</span>
              <br />
              <em className="italic font-light" style={{ color: "#e8d5a3" }}>Meets Precision.</em>
            </h1>
            <p className="lead mt-6 sm:mt-8 md:mt-10 max-w-xl animate-fade-up delay-200 font-medium" style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.4)", fontSize: "clamp(15px, 1.3vw, 19px)" }}>
              Bespoke luxury interiors for discerning homes across Delhi NCR. Designed with mastery.
              Delivered without compromise.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up delay-300 w-full sm:w-auto">
              <Link href="/consultation" className="btn btn-primary w-full sm:w-auto py-3.5 px-6 md:py-5 md:px-9 text-center text-xs sm:text-sm" style={{ fontWeight: "700", boxShadow: "0 10px 25px rgba(201, 168, 106, 0.4)" }}>
                Schedule A Consultation
              </Link>
              <Link href="/portfolio" className="btn btn-ghost-light w-full sm:w-auto py-3.5 px-6 md:py-5 md:px-9 text-center text-xs sm:text-sm" style={{ fontWeight: "700", borderWidth: "2px", borderColor: "#ffffff" }}>
                Explore Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y" style={{ borderColor: "#e5e5e0", backgroundColor: "#faf8f5" }}>
        <div className="container-x py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-12">
          {[
            { stat: "150+", label: "Projects Delivered Across Delhi NCR" },
            { stat: "35 Years", label: "Of Design Excellence" },
            { stat: "100%", label: "Turnkey Execution" },
            { stat: "★★★★★", label: "Rated By Our Clients" },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 80} className="text-center md:text-left">
              <div className="font-display text-3xl lg:text-5xl font-light" style={{ color: "#1a1a1a" }}>
                {t.stat}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.14em] text-mid-grey" style={{ color: "#6b6b6b" }}>
                {t.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
            <Reveal>
              <div className="eyebrow mb-5">
                <span className="rule" /> Our Work
              </div>
              <h2 className="heading-1 max-w-3xl">
                Spaces designed to be lived in  <em className="italic">and admired.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="lead max-w-md">
                Each project begins as a conversation and ends as a home that is unmistakably yours.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {projects.slice(0, 5).map((p, i) => {
              const spans = [
                "lg:col-span-7 lg:row-span-2",
                "lg:col-span-5",
                "lg:col-span-5",
                "lg:col-span-6",
                "lg:col-span-6",
              ];
              const aspects = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[4/3]", "aspect-[5/4]", "aspect-[5/4]"];
              return (
                <Reveal key={p.slug} delay={i * 100} className={spans[i]}>
                  <Link href={`/portfolio/${p.slug}`} className="group block">
                    <div className={`relative overflow-hidden ${aspects[i]} bg-surface`} style={{ backgroundColor: "#f5f3ef" }}>
                      <img
                        src={getSrc(p.cover)}
                        alt={p.name}
                        loading="lazy"
                        className="project-card-img absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(26,26,26,0.7) 100%)" }} />
                    </div>
                    <div className="pt-5 flex items-baseline justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl">{p.name}</h3>
                        <div className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: "#6b6b6b" }}>
                          {p.location} · {p.type}
                        </div>
                      </div>
                      <ArrowRight size={18} strokeWidth={1.25} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: "#c9a86a" }} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link href="/portfolio" className="link-arrow">
              View All Projects <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" style={{ backgroundColor: "#f5f3ef" }}>
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-5">
              <span className="rule" /> What We Do
            </div>
            <h2 className="heading-1 max-w-3xl">
              Every space. Designed with <em className="italic">intention.</em>
            </h2>
            <p className="lead mt-8 max-w-2xl">
              From concept to installation, we design and deliver complete interior environments — each
              one a precise reflection of the life you wish to live.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {services.slice(0, 9).map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-7 border-b transition-colors"
                  style={{ borderColor: "#e5e5e0" }}
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] mb-2" style={{ color: "#c9a86a" }}>
                      0{i + 1}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl group-hover:text-gold transition-colors" style={{ transition: "color 0.4s ease" }}>
                      {s.shortName}
                    </h3>
                  </div>
                  <ArrowRight size={20} strokeWidth={1.25} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" style={{ color: "#c9a86a" }} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <div className="eyebrow mb-5">
                <span className="rule" /> How We Work
              </div>
              <h2 className="heading-1">
                A process designed
                <br />
                <em className="italic">around you.</em>
              </h2>
              <p className="lead mt-8">
                Exceptional interiors are born from exceptional process. A structured methodology that
                eliminates uncertainty and protects your investment.
              </p>
              <Link href="/consultation" className="btn btn-ghost mt-10">
                Begin Your Project
              </Link>
            </Reveal>

            <div className="lg:col-span-8 space-y-0">
              {[
                ["Discovery Session", "A private consultation to understand your vision, lifestyle, preferences, and project scope. Your home takes shape as a defined brief."],
                ["Design Proposal", "Our senior design team develops a comprehensive concept — layouts, mood boards, material palette, and photorealistic 3D visualisations."],
                ["Material Selection", "A curated selection of premium materials, finishes, and fixtures. Every choice documented. No substitutions without your written approval."],
                ["Execution & Build", "Our execution team, supervised personally by Mr. Nadeem, transforms approved designs into reality. Progress reported at every milestone."],
                ["Reveal & Handover", "Completed with comprehensive quality inspection, warranty documentation, and a care guide. Complete only when you are completely satisfied."],
              ].map(([title, body], i) => (
                <Reveal key={title} delay={i * 80}>
                  <div className="flex gap-8 md:gap-12 py-8 border-b" style={{ borderColor: "#e5e5e0" }}>
                    <div className="font-display text-2xl md:text-3xl font-light flex-shrink-0 w-14" style={{ color: "#c9a86a" }}>
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
                      <p className="mt-3 text-mid-grey leading-relaxed" style={{ color: "#6b6b6b" }}>
                        {body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-y relative overflow-hidden" style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={getSrc(images.noor)} alt="Mr. Noor, Design Head at Souvenir Interiors" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-7">
              <div className="eyebrow eyebrow-light mb-5">
                <span className="rule" /> The People
              </div>
              <h2 className="heading-1" style={{ color: "#faf8f5" }}>
                The expertise behind <em className="italic" style={{ color: "#e8d5a3" }}>your dream space.</em>
              </h2>
              <p className="mt-8 text-lg leading-relaxed opacity-85 max-w-xl">
                Nitin founded Souvenir Interiors with a clear mission: to bring global design standards and genuinely bespoke experiences to the luxury homeowners of Delhi NCR — without the impersonal, assembly-line approach larger platforms have normalised.


              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {[
                  ["Nitin Garg", "Founder & CEO"],
                  ["Mr. Noor", "Design Head"],
                  ["Mr. Nadeem", "Delivery & Quality Head"],
                  ["Mrs. Rashi", "Client Experience"],
                ].map(([name, role]) => (
                  <div key={name}>
                    <div className="font-display text-xl" style={{ color: "#faf8f5" }}>{name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: "#c9a86a" }}>{role}</div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="link-arrow mt-12" style={{ color: "#faf8f5", borderColor: "#c9a86a" }}>
                Meet the Full Team <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-5">
              <span className="rule" /> Client Stories
            </div>
            <h2 className="heading-1 max-w-2xl">
              The homes speak.
              <br />
              <em className="italic">So do our clients.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {[
              {
                quote:
                  "Working with Souvenir Interiors was unlike any experience we had anticipated. Mr. Noor understood our vision before we could fully articulate it. The result is a home that feels entirely ours.",
                author: "Ananya & Vikram S.",
                meta: "Villa Interior · Greater Noida West",
              },
              {
                quote:
                  "Based in Dubai, I needed complete trust in a team. Souvenir Interiors gave us weekly video updates, milestone documentation, and a finished home that exceeded every expectation.",
                author: "Rajesh M.",
                meta: "NRI · 4BHK · Noida",
              },
              {
                quote:
                  "The modular kitchen they designed is the most-discussed room by every guest. Every detail — lighting, hardware, storage — has been thought through with extraordinary care.",
                author: "Priya K.",
                meta: "Modular Kitchen · Ghaziabad",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="h-full flex flex-col">
                  <div className="font-display text-5xl leading-none mb-6" style={{ color: "#c9a86a" }}>"</div>
                  <p className="font-display italic text-xl md:text-[22px] leading-[1.5] flex-1" style={{ color: "#1a1a1a" }}>
                    {t.quote}
                  </p>
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: "#e5e5e0" }}>
                    <div className="text-sm font-semibold">{t.author}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: "#6b6b6b" }}>{t.meta}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img src={getSrc(images.foyer)} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,26,26,0.78)" }} />
        <div className="container-x relative z-10 py-28 md:py-40 text-center" style={{ color: "#faf8f5" }}>
          <Reveal>
            <div className="eyebrow eyebrow-light mb-6 inline-block"><span className="rule" /> Begin Your Souvenir</div>
            <h2 className="display-l max-w-4xl mx-auto" style={{ color: "#faf8f5" }}>
              Your dream space is one
              <br />
              <em className="italic" style={{ color: "#e8d5a3" }}>conversation away.</em>
            </h2>
            <p className="lead mt-8 max-w-xl mx-auto" style={{ color: "rgba(250,248,245,0.85)" }}>
              Schedule a private design consultation. We'll discuss your space, your vision, and how
              Souvenir Interiors can bring it to life — precisely as you imagine it.
            </p>
            <div className="mt-10">
              <Link href="/consultation" className="btn btn-primary">
                Schedule A Consultation
              </Link>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.14em] opacity-70">
              Complimentary · No sales pressure · Serving Delhi NCR
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
