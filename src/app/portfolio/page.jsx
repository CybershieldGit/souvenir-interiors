import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import PortfolioContent from "./PortfolioContent";

export const metadata = {
  title: "Portfolio — Luxury Interior Projects in Delhi NCR · Souvenir Interiors",
  description:
    "A selection of luxury residential and commercial interiors designed and delivered by Souvenir Interiors across Delhi NCR.",
  openGraph: {
    title: "Portfolio — Souvenir Interiors",
    description: "Luxury homes and spaces across Delhi NCR.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="pt-40 md:pt-48 pb-16">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-6"><span className="rule" /> The Portfolio</div>
            <h1 className="display-l max-w-4xl">
              Luxury interiors, executed without <em className="italic">compromise.</em>
            </h1>
            <p className="lead mt-8 max-w-2xl">
              Every project in our portfolio represents a family, a vision, and a transformation
              delivered to specification. Browse a selection of homes and spaces designed by Souvenir
              Interiors across Delhi NCR.
            </p>
          </Reveal>
        </div>
      </section>

      <PortfolioContent />
    </SiteLayout>
  );
}
