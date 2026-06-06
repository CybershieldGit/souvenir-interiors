"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/data";

const filters = ["All", "Residential", "Kitchens", "Living Rooms", "Bedrooms", "Offices", "Turnkey"];

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default function PortfolioContent() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  // Compile all gallery images for the active category
  const galleryItems = [];
  if (active !== "All") {
    filtered.forEach((project) => {
      project.gallery.forEach((img, index) => {
        galleryItems.push({
          id: `${project.slug}-${index}`,
          image: img,
          project
        });
      });
    });
  }

  return (
    <>
      {/* Filter bar */}
      <section className="sticky top-[76px] md:top-[88px] z-30 border-y" style={{ backgroundColor: "rgba(250,248,245,0.94)", backdropFilter: "blur(10px)", borderColor: "#e5e5e0" }}>
        <div className="container-x py-5 flex gap-8 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="text-xs uppercase tracking-[0.14em] font-semibold whitespace-nowrap pb-1 border-b-2 transition-colors cursor-pointer"
              style={{
                color: active === f ? "#1a1a1a" : "#6b6b6b",
                borderColor: active === f ? "#c9a86a" : "transparent",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          {active === "All" ? (
            /* Original Projects Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <Link href={`/portfolio/${p.slug}`} className="group block">
                    <div className="aspect-[4/5] overflow-hidden bg-surface" style={{ backgroundColor: "#f5f3ef" }}>
                      <img src={getSrc(p.cover)} alt={p.name} loading="lazy" className="project-card-img w-full h-full object-cover" />
                    </div>
                    <div className="pt-5">
                      <h2 className="font-display text-2xl">{p.name}</h2>
                      <div className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: "#6b6b6b" }}>
                        {p.location} · {p.type}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Pinterest Masonry Grid of gallery images */
            <div className="pinterest-grid">
              {galleryItems.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 80} className="pinterest-item">
                  <Link href={`/portfolio/${item.project.slug}`} className="group block relative overflow-hidden">
                    <div className="overflow-hidden bg-surface" style={{ backgroundColor: "#f5f3ef" }}>
                      <img
                        src={getSrc(item.image)}
                        alt={item.project.name}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                      <div className="text-xs uppercase tracking-[0.14em] text-gold font-semibold">
                        {item.project.type}
                      </div>
                      <h3 className="font-display text-xl mt-1 text-white">{item.project.name}</h3>
                      <div className="text-xs mt-3 opacity-80 underline tracking-[0.1em] uppercase">
                        View Project →
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center py-20 text-mid-grey" style={{ color: "#6b6b6b" }}>
              No projects in this category yet. Please check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
