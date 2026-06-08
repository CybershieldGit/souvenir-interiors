"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/data";

const filters = ["All", "Residential", "Kitchens", "Living Rooms", "Bedrooms", "Offices", "Videos"];

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default function PortfolioContent() {
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    const fetchVideoInfo = async (key, videoUrl) => {
      try {
        const response = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(videoUrl)}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.title) {
            setVideoData((prev) => ({
              ...prev,
              [key]: {
                title: data.title,
                author: data.author_name || "YouTube Creator",
              },
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching video oembed data:", error);
      }
    };

    fetchVideoInfo("video1", "https://www.youtube.com/watch?v=1muP_POgVd0");
    fetchVideoInfo("video2", "https://www.youtube.com/watch?v=hmtQbL7AA0I");
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  // Compile all gallery images for the active category
  const galleryItems = [];
  if (active !== "All" && active !== "Videos") {
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

  // Define structured item list for lightbox browsing
  const itemsToBrowse = active === "All"
    ? filtered.map((p) => ({
        image: getSrc(p.cover),
        title: p.name,
        subtitle: `${p.location} · ${p.type}`
      }))
    : galleryItems.map((item) => ({
        image: getSrc(item.image),
        title: item.project.name,
        subtitle: item.project.type
      }));

  // Handlers for lightbox navigation
  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : itemsToBrowse.length - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev < itemsToBrowse.length - 1 ? prev + 1 : 0));
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  // Keyboard navigation & scroll lock
  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, itemsToBrowse]);

  // Reset index when active filter changes
  useEffect(() => {
    setSelectedIndex(null);
  }, [active]);

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
                  <div
                    onClick={() => setSelectedIndex(i)}
                    className="group block cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedIndex(i);
                      }
                    }}
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-surface" style={{ backgroundColor: "#f5f3ef" }}>
                      <img src={getSrc(p.cover)} alt={p.name} loading="lazy" className="project-card-img w-full h-full object-cover" />
                    </div>
                    <div className="pt-5">
                      <h2 className="font-display text-2xl">{p.name}</h2>
                      <div className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: "#6b6b6b" }}>
                        {p.location} · {p.type}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : active === "Videos" ? (
            /* Video Section (YouTube Embeds) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <Reveal delay={100}>
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-surface rounded-sm shadow-xl border" style={{ backgroundColor: "#000", borderColor: "#e5e5e0" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/1muP_POgVd0?si=pO92MkSagEX6Dkfi"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-6">
                    <span className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: "#c9a86a" }}>
                      Featured Walkthrough
                    </span>
                    <h3 className="font-display text-2xl mt-1 text-neutral-900">
                      {videoData.video1?.title || "Souvenir Interiors Signature Tour"}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-sans">
                      {videoData.video1 
                        ? `Published by ${videoData.video1.author} · YouTube Feature` 
                        : "Take a detailed look at our completed premium projects, showcasing the high-end materials, execution quality, and bespoke layouts designed for modern living."
                      }
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-surface rounded-sm shadow-xl border" style={{ backgroundColor: "#000", borderColor: "#e5e5e0" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/hmtQbL7AA0I?si=pqDnVCewBqNZLx-1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-6">
                    <span className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: "#c9a86a" }}>
                      Project Showcase
                    </span>
                    <h3 className="font-display text-2xl mt-1 text-neutral-900">
                      {videoData.video2?.title || "Craftsmanship & Design Tour"}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-sans">
                      {videoData.video2 
                        ? `Published by ${videoData.video2.author} · YouTube Feature` 
                        : "An inside look at our design process, meticulous material selection, and site executions, showing what makes a Souvenir project truly stand out."
                      }
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ) : (
            /* Pinterest Masonry Grid of gallery images */
            <div className="pinterest-grid">
              {galleryItems.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 80} className="pinterest-item">
                  <div
                    onClick={() => setSelectedIndex(i)}
                    className="group block relative overflow-hidden cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedIndex(i);
                      }
                    }}
                  >
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
                      <div className="text-xs uppercase tracking-[0.14em] text-gold font-semibold" style={{ color: "#c9a86a" }}>
                        {item.project.type}
                      </div>
                      <h3 className="font-display text-xl mt-1 text-white">{item.project.name}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {filtered.length === 0 && active !== "Videos" && (
            <p className="text-center py-20 text-mid-grey" style={{ color: "#6b6b6b" }}>
              No projects in this category yet. Please check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && itemsToBrowse[selectedIndex] && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          {itemsToBrowse.length > 1 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {itemsToBrowse.length > 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Modal Container */}
          <div
            className="flex flex-col items-center justify-center max-w-[90vw] max-h-[85vh] md:max-h-[80vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image display */}
            <div className="relative overflow-hidden bg-neutral-900 rounded-sm shadow-2xl flex items-center justify-center max-h-[60vh] md:max-h-[65vh]">
              <img
                src={itemsToBrowse[selectedIndex].image}
                alt={itemsToBrowse[selectedIndex].title}
                className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain select-none scale-100"
                style={{ animation: "fadeInScale 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
              />
            </div>

            {/* Captions */}
            <div className="mt-6 text-center max-w-2xl px-4">
              <h4 className="font-display text-xl md:text-2xl text-white tracking-wide">
                {itemsToBrowse[selectedIndex].title}
              </h4>
              <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.15em]" style={{ color: "#c9a86a" }}>
                {itemsToBrowse[selectedIndex].subtitle}
              </p>
              <div className="mt-3 text-[10px] md:text-xs tracking-widest text-neutral-500 uppercase font-semibold">
                {selectedIndex + 1} / {itemsToBrowse.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
