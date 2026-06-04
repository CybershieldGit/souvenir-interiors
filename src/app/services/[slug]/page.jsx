import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { services, projects } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((sv) => sv.slug === slug);
  if (!s) return { title: "Service Not Found" };

  const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

  return {
    title: `${s.name} — Souvenir Interiors`,
    description: s.tagline,
    openGraph: {
      title: `${s.name} — Souvenir Interiors`,
      description: s.tagline,
      images: [getSrc(s.cover)],
      url: `/services/${s.slug}`,
      type: "article",
    },
  };
}

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const related = projects.slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img src={getSrc(svc.cover)} alt={svc.name} className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.2) 40%, rgba(26,26,26,0.75) 100%)" }} />
        <div className="container-x relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28" style={{ color: "#faf8f5" }}>
          <div className="text-xs uppercase tracking-[0.14em] opacity-70 mb-4 animate-fade-in">
            <Link href="/" style={{ color: "inherit" }}>Home</Link> · <Link href="/services" style={{ color: "inherit" }}>Services</Link> · {svc.shortName}
          </div>
          <h1 className="display-l max-w-4xl animate-fade-up">{svc.name}</h1>
          <p className="lead mt-6 max-w-2xl animate-fade-up delay-200" style={{ color: "rgba(250,248,245,0.88)" }}>
            {svc.tagline}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-y">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-5"><span className="rule" /> The Service</div>
            <h2 className="heading-1">
              Designed and delivered <em className="italic">end-to-end.</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed">{svc.intro}</p>
            <Link href="/consultation" className="btn btn-primary mt-10">
              Discuss Your {svc.shortName} Project
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Scope */}
      <section className="section-y" style={{ backgroundColor: "#f5f3ef" }}>
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-5"><span className="rule" /> What's Included</div>
            <h2 className="heading-2">The complete scope.</h2>
            <p className="lead mt-6">
              Itemised deliverables — from initial consultation through final handover and warranty.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y" style={{ borderColor: "#e5e5e0" }}>
              {svc.scope.map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-5" style={{ borderColor: "#e5e5e0" }}>
                  <Check size={18} strokeWidth={1.5} style={{ color: "#c9a86a", marginTop: 4, flexShrink: 0 }} />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-y text-center">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-8 inline-block"><span className="rule" /> A Note From Mr. Noor</div>
            <p className="font-display italic text-3xl md:text-5xl leading-[1.2] max-w-4xl mx-auto" style={{ color: "#1a1a1a" }}>
              "{svc.philosophy}"
            </p>
            <div className="mt-8 text-xs uppercase tracking-[0.14em]" style={{ color: "#c9a86a" }}>
              Mr. Noor · Design Head
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related projects */}
      <section className="section-y" style={{ backgroundColor: "#f5f3ef" }}>
        <div className="container-x">
          <div className="flex items-end justify-between gap-8 mb-12">
            <Reveal>
              <div className="eyebrow mb-5"><span className="rule" /> Selected Work</div>
              <h2 className="heading-2">From our portfolio.</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/portfolio" className="link-arrow">View Full Portfolio <ArrowRight size={14} /></Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link href={`/portfolio/${p.slug}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={getSrc(p.cover)} alt={p.name} loading="lazy" className="project-card-img w-full h-full object-cover" />
                  </div>
                  <div className="pt-5">
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: "#6b6b6b" }}>
                      {p.location} · {p.type}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y text-center" style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
        <div className="container-x">
          <Reveal>
            <h2 className="display-l max-w-4xl mx-auto" style={{ color: "#faf8f5" }}>
              Begin your <em className="italic" style={{ color: "#e8d5a3" }}>{svc.shortName.toLowerCase()}</em> project.
            </h2>
            <Link href="/consultation" className="btn btn-primary mt-10">Schedule A Consultation</Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
