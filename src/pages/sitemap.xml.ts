import type { APIRoute } from "astro";
import { allGuides, basicGuides, cityGuides, countryGuides, hrefFor, site } from "../data/site";
import { infoPages } from "../data/pages";
import { hrefForTool, travelTools } from "../data/tools";

const fallbackLastmod = "2026-07-01";
const trustPageLastmod = "2026-06-25";

const toIsoDate = (value?: string) => {
  const timestamp = Date.parse(value ?? "");
  return Number.isNaN(timestamp) ? fallbackLastmod : new Date(timestamp).toISOString().slice(0, 10);
};

const newestDate = (items: { lastUpdated?: string }[]) =>
  items.map((item) => toIsoDate(item.lastUpdated)).sort().at(-1) ?? fallbackLastmod;

export const GET: APIRoute = () => {
  const urls = [
    { path: "/", lastmod: fallbackLastmod },
    { path: "/countries/", lastmod: newestDate(countryGuides) },
    { path: "/cities/", lastmod: newestDate(cityGuides) },
    { path: "/travel-basics/", lastmod: newestDate(basicGuides) },
    { path: "/tools/", lastmod: newestDate(travelTools) },
    { path: "/search/", lastmod: fallbackLastmod },
    { path: "/sitemap/", lastmod: fallbackLastmod },
    ...infoPages.map((page) => ({ path: `/${page.slug}/`, lastmod: trustPageLastmod })),
    ...allGuides.map((guide) => ({ path: hrefFor(guide), lastmod: toIsoDate(guide.lastUpdated) })),
    ...travelTools.map((tool) => ({ path: hrefForTool(tool), lastmod: toIsoDate(tool.lastUpdated) }))
  ];
  const uniqueUrls = Array.from(new Map(urls.map((item) => [item.path, item])).values());
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls.map((item) => `  <url><loc>${new URL(item.path, site.url)}</loc><lastmod>${item.lastmod}</lastmod></url>`).join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
