"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className={`text-[13px] font-medium tracking-[0.12em] uppercase transition-colors ${active ? "text-gold" : ""}`} style={{ color: transparent && !active ? "#faf8f5" : active ? "#c9a86a" : "#1a1a1a" }}>
                  {l.label}
                </Link>
              );
            })}
            <Link href="/consultation" className="btn btn-gold-outline" style={{ padding: "14px 24px", fontSize: 12 }}>
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
            "fixed inset-0 z-[60] bg-charcoal text-warm-white transition-all duration-500",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")} style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
        <div className="container-x flex items-center justify-between h-[76px]">
          <span className="font-display text-[18px] tracking-[0.18em] uppercase">
            Souvenir<span className="text-gold mx-1">·</span>Interiors
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
            <X size={26} strokeWidth={1.25}/>
          </button>
        </div>
        <nav className="container-x flex flex-col gap-8 mt-16">
          {links.map((l) => (<Link key={l.href} href={l.href} className="font-display text-[36px] leading-none" style={{ color: "#faf8f5" }}>
              {l.label}
            </Link>))}
          <Link href="/consultation" className="font-display text-[36px] leading-none" style={{ color: "#c9a86a" }}>
            Consultation
          </Link>
        </nav>
        <div className="container-x absolute bottom-20 left-0 right-0">
          <div className="eyebrow eyebrow-light mb-4">Reach Us</div>
          <a href="tel:+918178232328" className="block text-lg mb-2">
            +91 81782 32328
          </a>
          <a href="mailto:welcome@souvenirinteriors.com" className="block text-sm opacity-80">
            welcome@souvenirinteriors.com
          </a>
        </div>
      </div>
    </>);
}

