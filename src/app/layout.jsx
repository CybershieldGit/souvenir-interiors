import { Noto_Serif_Display, DM_Sans } from "next/font/google";
import "../styles.css";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport = {
  themeColor: "#1a1a1a",
};

export const metadata = {
  metadataBase: new URL("https://www.souvenirinteriors.com"),
  title: "Souvenir Interiors — Luxury Interior Design Studio · Delhi NCR",
  description:
    "Bespoke luxury interior design and turnkey execution for discerning homes across Delhi NCR. 35+ years of design excellence, led by Mr. Noor.",
  authors: [{ name: "Souvenir Interiors" }],
  openGraph: {
    title: "Souvenir Interiors — Luxury Interior Design Studio · Delhi NCR",
    description:
      "Bespoke luxury interior design and turnkey execution for discerning homes across Delhi NCR. 35+ years of design excellence, led by Mr. Noor.",
    siteName: "Souvenir Interiors",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSerifDisplay.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
