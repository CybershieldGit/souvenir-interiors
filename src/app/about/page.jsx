import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/data";

export const metadata = {
  title: "About Souvenir Interiors — A Legacy of Design Excellence",
  description:
    "Souvenir Interiors is a luxury design studio in Greater Noida West serving discerning homeowners across Delhi NCR. Meet the team behind 150+ projects.",
  openGraph: {
    title: "About Souvenir Interiors",
    description: "A legacy of design excellence — meet our leadership team.",
    url: "/about",
  },
};

const getSrc = (img) => (img && typeof img === "object" ? img.src : img);

export default function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-16 md:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-6"><span className="rule" /> About The Studio</div>
            <h1 className="display-l max-w-4xl">
              A legacy of design excellence in <em className="italic">Greater Noida.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="aspect-[4/3] md:aspect-[16/8] overflow-hidden">
            <img src={getSrc(images.hero)} alt="Souvenir Interiors studio environment" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-y" style={{ backgroundColor: "#f5f3ef" }}>
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow mb-5"><span className="rule" /> Our Story</div>
              <h2 className="heading-1">
                More than interiors. A commitment to <em className="italic">your legacy.</em>
              </h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg leading-relaxed" style={{ color: "#1a1a1a" }}>
              <p>
                Souvenir Interiors was founded on a simple conviction: that every home deserves to be
                beautiful, functional, and built to last.
              </p>
              <p style={{ color: "#6b6b6b" }}>
                Based in Greater Noida West, we serve the most discerning homeowners and businesses
                across Delhi NCR — delivering interior environments that combine artistic vision with
                engineering precision. Our clients trust us with their most significant investment, and
                we treat that trust as the most important material we work with.
              </p>
              <p style={{ color: "#6b6b6b" }}>
                Our name is intentional. A souvenir is an object that carries meaning — a keepsake of
                a moment, a place, a feeling. Your home is the most significant souvenir of the life
                you have built. Every room, every material choice, every detail we place is done in
                service of making that souvenir worthy of you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy pull-quote */}
      <section className="section-y">
        <div className="container-x text-center">
          <Reveal>
            <div className="eyebrow mb-8 inline-block"><span className="rule" /> Design Philosophy</div>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] max-w-5xl mx-auto">
              Bespoke over branded.
              <br />
              <em className="italic" style={{ color: "#c9a86a" }}>Crafted over convenient.</em>
            </p>
            <p className="lead mt-10 max-w-2xl mx-auto">
              We do not design with templates. We do not apply trends without purpose. Every project
              begins with a deep understanding of the person who will inhabit the space. The result is
              an interior that is unmistakably yours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-y" style={{ backgroundColor: "#1a1a1a", color: "#faf8f5" }}>
        <div className="container-x">
          <Reveal>
            <div className="eyebrow eyebrow-light mb-5"><span className="rule" /> The Leadership</div>
            <h2 className="heading-1" style={{ color: "#faf8f5" }}>
              The people who will work on <em className="italic" style={{ color: "#e8d5a3" }}>your home.</em>
            </h2>
          </Reveal>

          <div className="mt-20 space-y-24 md:space-y-32">
            {[
              {
                name: "Nitin Garg",
                role: "Founder & CEO · 10+ Years Experience",
                img: images.nitin,
                body: "Nitin founded Souvenir Interiors with a clear mission: to bring global design standards and genuinely bespoke experiences to the luxury homeowners of Delhi NCR — without the impersonal, assembly-line approach larger platforms have normalised.",
                quote: "Every client deserves a design partner as invested in the outcome as they are.",
              },
              {
                name: "Mr. Noor",
                role: "Design Head · 35+ Years Experience",
                img: images.noor,
                body: "In three and a half decades of designing interiors across India, Mr. Noor has never once approached a project with a formula. At Souvenir Interiors, every design decision passes through his review. Every project carries his personal commitment.",
                quote: "Thirty-five years, and I still approach every project as if it is the most important space I have ever designed. Because for the family who lives there, it is.",
              },
              {
                name: "Mr. Nadeem",
                role: "Delivery & Quality Head",
                img: images.nadeem,
                body: "If Mr. Noor is the vision, Mr. Nadeem is the discipline. Every material delivered to site is verified against the approved specification. Every contractor team is briefed to the same quality standard. Every milestone is signed off against a detailed inspection checklist.",
                quote: "Beautiful design means nothing if execution fails. My responsibility is that the design you approved is exactly what gets built.",
              },
              {
                name: "Mrs. Rashi",
                role: "Client Experience Head",
                img: images.rashi,
                body: "The experience of working with Souvenir Interiors — from first inquiry to the day you receive your keys — is Mrs. Rashi's domain. She ensures that every client interaction reflects the premium standard our brand promises.",
                quote: "Our clients' experience isn't just about the final space. It's about every single interaction in between.",
              },

            ].map((p, i) => (
              <Reveal key={p.name}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/5] overflow-hidden">
                      <img src={getSrc(p.img)} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="text-xs uppercase tracking-[0.14em] mb-3" style={{ color: "#c9a86a" }}>0{i + 1} · {p.role}</div>
                    <h3 className="font-display text-4xl md:text-5xl" style={{ color: "#faf8f5" }}>{p.name}</h3>
                    <p className="mt-6 text-lg opacity-85 leading-relaxed">{p.body}</p>
                    <p className="mt-8 font-display italic text-xl md:text-2xl border-l-2 pl-6" style={{ borderColor: "#c9a86a", color: "#e8d5a3" }}>
                      {p.quote}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio CTA */}
      <section className="section-y">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="eyebrow mb-5"><span className="rule" /> Visit Us</div>
            <h2 className="heading-1">Our Greater Noida studio.</h2>
            <p className="lead mt-6">
              Galaxy Diamond Plaza, Sector 4, Opposite Gaur City Mall, Greater Noida West. Studio
              visits by appointment.
            </p>
            <Link href="/contact" className="btn btn-ghost mt-10">Book A Studio Visit</Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={getSrc(images.dining)} alt="Souvenir Interiors studio" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
