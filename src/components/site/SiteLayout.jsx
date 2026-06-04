import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";
export function SiteLayout({ children }) {
    return (<div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileBar />
    </div>);
}
