import type { APIRoute } from "astro";
import { allGuides, hrefFor, site } from "../data/site";
import { infoPages } from "../data/pages";

export const GET: APIRoute = () => {
  const paths = ["/", "/countries/", "/cities/", "/travel-basics/", "/sitemap/", ...infoPages.map((p) => `/${p.slug}/`), ...allGuides.map(hrefFor)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${new URL(path, site.url)}</loc><lastmod>2026-06-25</lastmod></url>`).join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
