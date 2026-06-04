import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

  return {
    title: `${project.name} — ${project.location} · Souvenir Interiors`,
    description: project.vision.slice(0, 160),
    openGraph: {
      title: `${project.name} — Souvenir Interiors`,
      description: project.vision.slice(0, 160),
      images: [getSrc(project.cover)],
      url: `/portfolio/${project.slug}`,
      type: "article",
    },
  };
}

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <img src={getSrc(project.cover)} alt={project.name} className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.1) 40%, rgba(26,26,26,0.8) 100%)" }} />
        <div className="container-x relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28" style={{ color: "#faf8f5" }}>
          <div className="text-xs uppercase tracking-[0.14em] opacity-70 mb-4 animate-fade-in">
            <Link href="/portfolio" style={{ color: "inherit" }}>Portfolio</Link> · {project.category}
          </div>
          <h1 className="display-l max-w-4xl animate-fade-up">{project.name}</h1>
          <p className="mt-4 text-base md:text-lg opacity-80 animate-fade-up delay-200">{project.type} · {project.location}</p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-b" style={{ borderColor: "#e5e5e0", backgroundColor: "#faf8f5" }}>
        <div className="container-x py-10 grid grid-cols-2 md:grid-cols-5 gap-y-8">
          {[
            ["Type", project.type],
            ["Location", project.location],
            ["Area", project.area],
            ["Year", project.year],
            ["Category", project.category],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="text-xs uppercase tracking-[0.14em]" style={{ color: "#c9a86a" }}>{label}</div>
              <div className="mt-2 font-display text-lg md:text-xl">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & approach */}
      <section className="section-y">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <div className="eyebrow mb-5"><span className="rule" /> The Vision</div>
            <h2 className="heading-2">What the client wanted.</h2>
            <p className="mt-8 text-lg leading-relaxed" style={{ color: "#1a1a1a" }}>{project.vision}</p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-6">
            <div className="eyebrow mb-5"><span className="rule" /> The Approach</div>
            <h2 className="heading-2">How we resolved it.</h2>
            <p className="mt-8 text-lg leading-relaxed" style={{ color: "#1a1a1a" }}>{project.approach}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="space-y-6 md:space-y-10 pb-20 md:pb-32">
        {project.gallery.map((src, i) => {
          const isFull = i === 0;
          return (
            <Reveal key={i}>
              <div className={isFull ? "w-full" : "container-x"}>
                <div className={`overflow-hidden ${i % 2 ? "aspect-[4/3]" : "aspect-[16/9]"}`}>
                  <img src={getSrc(src)} alt={`${project.name} — image ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Client testimonial */}
      <section className="section-y text-center" style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
        <div className="container-x">
          <Reveal>
            <div className="font-display text-6xl leading-none mb-6" style={{ color: "#c9a86a" }}>"</div>
            <p className="font-display italic text-2xl md:text-4xl leading-[1.3] max-w-4xl mx-auto" style={{ color: "#e8d5a3" }}>
              {project.client.quote}
            </p>
            <div className="mt-10 text-xs uppercase tracking-[0.14em]" style={{ color: "rgba(250,248,245,0.7)" }}>
              {project.client.author}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-5"><span className="rule" /> You May Also Like</div>
            <h2 className="heading-2 mb-12">More from the studio.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="mt-20 text-center">
            <Link href="/consultation" className="btn btn-primary">Begin Your Own Project</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}


// Simple layout wrapper for related scripts
function LayoutAdjuster({ children }) {
  return children;
}
