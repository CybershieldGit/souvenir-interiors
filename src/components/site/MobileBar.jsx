import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { STUDIO } from "@/lib/data";
export function MobileBar() {
    return (<div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t" style={{ backgroundColor: "#faf8f5", borderColor: "#e5e5e0" }}>
      <a href={`tel:${STUDIO.phone}`} className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.12em]">
        <Phone size={16} strokeWidth={1.5}/> Call
      </a>
      <a href={`https://wa.me/${STUDIO.whatsapp.replace("+", "")}`} className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.12em] border-x" style={{ borderColor: "#e5e5e0" }}>
        <MessageCircle size={16} strokeWidth={1.5}/> WhatsApp
      </a>
      <Link href="/consultation" className="flex items-center justify-center py-4 text-xs font-semibold uppercase tracking-[0.12em]" style={{ backgroundColor: "#c9a86a", color: "#1a1a1a" }}>
        Consult →
      </Link>
    </div>);
}

