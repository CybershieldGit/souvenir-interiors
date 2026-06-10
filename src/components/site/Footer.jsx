import Link from "next/link";
import { STUDIO, services } from "@/lib/data";
export function Footer() {
    return (<footer style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
      <div className="container-x section-y">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-[26px] md:text-[32px] tracking-[0.04em]">
              Luxury Interiors,
              <br />
              Delivered With Precision.
            </div>
            <p className="mt-6 text-sm leading-relaxed opacity-70 max-w-md">
              A premier luxury interior design studio based in Greater Noida West, serving discerning
              homeowners and businesses across Delhi NCR. Founded on the belief that every home deserves
              to be beautiful, functional, and built to last.
            </p>
            <Link href="/consultation" className="btn btn-primary mt-8">
              Schedule A Consultation
            </Link>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow eyebrow-light mb-5">Services</div>
            <ul className="space-y-3">
              {services.slice(0, 8).map((s) => (<li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm opacity-75 hover:opacity-100 hover:text-gold transition-colors">
                    {s.shortName}
                  </Link>
                </li>))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow eyebrow-light mb-5">Studio</div>
            <ul className="space-y-3">
              {[
            { href: "/about", label: "About" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
            { href: "/consultation", label: "Consultation" },
        ].map((l) => (<li key={l.href}>
                  <Link href={l.href} className="text-sm opacity-75 hover:opacity-100 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow eyebrow-light mb-5">Visit</div>
            <p className="text-sm opacity-75 leading-relaxed">
              {STUDIO.address}
              <br />
              {STUDIO.addressLine2}
            </p>
            <a href={`tel:${STUDIO.phone}`} className="block text-sm mt-4 hover:text-gold transition-colors">
              {STUDIO.phone}
            </a>
            <a href={`mailto:${STUDIO.email}`} className="block text-sm opacity-75 hover:text-gold transition-colors">
              {STUDIO.email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs opacity-60">
          <div>© {new Date().getFullYear()} Souvenir Interiors. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/souvenirinteriors/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61590661046034" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Facebook
            </a>
            <a href="https://www.youtube.com/@SouvenirInteriors" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>);
}

