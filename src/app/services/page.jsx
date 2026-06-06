import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { services, images } from "@/lib/data";
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

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default function ServicesIndexPage() {
  return (
    <SiteLayout>
      {/* ─── Hero / Header ─── */}
      <section 
        className="relative pt-40 md:pt-48 pb-16 md:pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f2e9e0 0%, #faf8f5 100%)"
        }}
      >
        {/* Decorative side image — desktop only */}
        <div
          className="hidden lg:block absolute right-0"
          style={{ 
            top: "5%",
            width: 450, 
            height: 500, 
            opacity: 0.9,
            mixBlendMode: "darken",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 100% 60%, black 20%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 80% 60% at 100% 60%, black 20%, transparent 100%)"
          }}
        >
          <img
            src={getSrc(images.servicesHeaderDecor)}
            alt=""
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              objectPosition: "right 60%"
            }}
          />
        </div>

        <div className="container-x relative z-10">
          <Reveal>
            <div className="text-center" style={{ maxWidth: 640, margin: "0 auto" }}>
              {/* Eyebrow */}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#c9a86a",
                  marginBottom: 20,
                }}
              >
                Services
              </div>

              {/* Heading */}
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(44px, 6vw, 72px)",
                  fontWeight: 300,
                  lineHeight: 1.06,
                  color: "#1a1a1a",
                }}
              >
                Our Services
              </h1>

              {/* Description */}
              <p
                style={{
                  marginTop: 24,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#6b6b6b",
                  maxWidth: 520,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                From concept to completion, we craft beautiful, functional spaces
                that reflect your style and elevate the way you live and work.
              </p>

              {/* Gold diamond divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  marginTop: 32,
                }}
              >
                <span style={{ display: "block", width: 48, height: 1, backgroundColor: "#c9a86a" }} />
                <span
                  style={{
                    display: "block",
                    width: 10,
                    height: 10,
                    backgroundColor: "#c9a86a",
                    transform: "rotate(45deg)",
                  }}
                />
                <span style={{ display: "block", width: 48, height: 1, backgroundColor: "#c9a86a" }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container-x">
          <Reveal>
            <div className="services-grid" style={{ display: "grid", gap: 24 }}>
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group service-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: 0,
                    overflow: "hidden",
                    border: "1px solid #e5e5e0",
                    backgroundColor: "#ffffff",
                    textDecoration: "none",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  {/* Card Image */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={getSrc(s.cover)}
                      alt={s.name}
                      loading={i < 5 ? "eager" : "lazy"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.7s ease",
                      }}
                      className="group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Service index */}
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#c9a86a",
                        marginBottom: 8,
                      }}
                    >
                      Service · {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Service name */}
                    <h2
                      className="font-display group-hover:text-gold transition-colors"
                      style={{
                        fontSize: 18,
                        lineHeight: 1.3,
                        color: "#1a1a1a",
                        margin: 0,
                      }}
                    >
                      {s.name}
                    </h2>

                    {/* Tagline */}
                    <p
                      style={{
                        marginTop: 8,
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: "#6b6b6b",
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {s.tagline}
                    </p>

                    {/* Explore link */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 16,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#c9a86a",
                      }}
                    >
                      Explore
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="section-y text-center"
        style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}
      >
        <div className="container-x">
          <Reveal>
            <h2 className="display-l max-w-3xl mx-auto" style={{ color: "#faf8f5" }}>
              Not sure where to begin?
            </h2>
            <p
              className="lead mt-6 mx-auto max-w-xl"
              style={{ color: "rgba(250,248,245,0.8)" }}
            >
              A complimentary consultation is the simplest place to start. We will help define the
              scope and the right service for your project.
            </p>
            <Link href="/consultation" className="btn btn-primary mt-10">
              Schedule A Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
