import { projects, services } from "@/lib/data";

export default async function sitemap() {
  const BASE_URL = "https://www.souvenirinteriors.com";

  const staticPaths = ["", "/about", "/services", "/portfolio", "/contact", "/consultation"];
  const servicePaths = services.map((s) => `/services/${s.slug}`);
  const projectPaths = projects.map((p) => `/portfolio/${p.slug}`);
  
  const allPaths = [...staticPaths, ...servicePaths, ...projectPaths];

  return allPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
