"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { STUDIO } from "@/lib/data";
const links = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];
export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const onHome = pathname === "/";
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    const transparent = onHome && !scrolled;
    return (<>
      <header className={[
            "fixed top-0 inset-x-0 z-50 transition-all duration-500",
            transparent
                ? "bg-transparent"
                : "bg-[rgba(250,248,245,0.92)] backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.04)]",
        ].join(" ")}>
        <div className="container-x flex items-center justify-between h-[76px] md:h-[88px]">
          <Link href="/" className="font-display text-[18px] md:text-[20px] tracking-[0.18em] uppercase" style={{ color: transparent ? "#faf8f5" : "#1a1a1a" }}>
            Souvenir
            <span className="text-gold ml-1">·</span>
            <span className="ml-1">Interiors</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className={`text-[13px] font-medium tracking-[0.12em] uppercase transition-colors ${active ? "text-gold" : ""}`} style={{ color: transparent && !active ? "#faf8f5" : active ? "#c9a86a" : "#1a1a1a" }}>
                  {l.label}
                </Link>
              );
            })}
            <a
              href={`https://wa.me/${STUDIO.whatsapp.replace("+","")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold-outline flex items-center justify-center gap-2"
              style={{ height: "46px", padding: "0 24px", fontSize: 12 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.593ZM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-4.294c-.202-.1-.1.195-.582-.765-.083-.139-.282-.208-.48-.3-.2-.09-.176-.388-.823-.66l-.282-.12c-.23-.1-.43-.05-.59.1l-.31.39c-.1.13-.2.15-.38.05-.18-.1-.77-.28-1.46-.9-.54-.48-.9-.88-1.01-1.07-.11-.19-.01-.29.09-.38.08-.08.18-.21.28-.32.09-.1.12-.17.18-.29.06-.12.03-.23-.01-.32-.04-.09-.38-.92-.52-1.26-.14-.33-.28-.29-.38-.29h-.33c-.11 0-.3.04-.46.21-.16.18-.62.6-.62 1.48s.64 1.73.73 1.85c.09.12 1.25 1.91 3.03 2.68.42.18.75.29 1 .37.43.14.82.12 1.13.07.35-.05 1.07-.44 1.22-.86.15-.42.15-.78.1-.86-.05-.08-.18-.13-.38-.23"/>
              </svg>
              WhatsApp
            </a>
            <Link href="/consultation" className="btn btn-gold-outline flex items-center justify-center" style={{ height: "46px", padding: "0 24px", fontSize: 12 }}>
              Schedule Consultation
            </Link>
          </nav>

          <button className="lg:hidden p-2 -mr-2" aria-label="Open menu" onClick={() => setOpen(true)} style={{ color: transparent ? "#faf8f5" : "#1a1a1a" }}>
            <Menu size={26} strokeWidth={1.25}/>
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div className={[
            "fixed inset-0 z-[60] bg-charcoal text-warm-white transition-all duration-500 flex flex-col overflow-y-auto pb-10",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")} style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
        <div className="container-x flex items-center justify-between h-[76px] flex-shrink-0">
          <span className="font-display text-[18px] tracking-[0.18em] uppercase">
            Souvenir<span className="text-gold mx-1">·</span>Interiors
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
            <X size={26} strokeWidth={1.25}/>
          </button>
        </div>
        <nav className="container-x flex flex-col gap-8 mt-12 md:mt-16 flex-shrink-0">
          {links.map((l) => (<Link key={l.href} href={l.href} className="font-display text-[36px] leading-none" style={{ color: "#faf8f5" }}>
              {l.label}
            </Link>))}
          <a
            href={`https://wa.me/${STUDIO.whatsapp.replace("+","")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[36px] leading-none"
            style={{ color: "#faf8f5" }}
          >
            WhatsApp
          </a>
          <Link href="/consultation" className="font-display text-[36px] leading-none" style={{ color: "#c9a86a" }}>
            Consultation
          </Link>
        </nav>
        <div className="container-x mt-12 pt-8 border-t border-white/10 flex-shrink-0">
          <div className="eyebrow eyebrow-light mb-4">Reach Us</div>
          <a href={`tel:${STUDIO.phone}`} className="block text-lg mb-2">
            {STUDIO.phone}
          </a>
          <a
            href={`https://wa.me/${STUDIO.whatsapp.replace("+","")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg mb-2 text-gold"
          >
            WhatsApp Chat
          </a>
          <a href={`mailto:${STUDIO.email}`} className="block text-sm opacity-80">
            {STUDIO.email}
          </a>
        </div>
      </div>
    </>);
}

