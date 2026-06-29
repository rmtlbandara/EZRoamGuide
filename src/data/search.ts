import { infoPages } from "./pages";
import { allGuides, hrefFor } from "./site";
import { hrefForTool, travelTools } from "./tools";

export type SearchItem = {
  title: string;
  description: string;
  url: string;
  type: "Country Guide" | "City Guide" | "Travel Basics" | "Tool" | "Page";
  category: string;
  keywords: string[];
  excerpt: string;
  lastUpdated?: string;
  readingTime?: string;
};

const wordsFrom = (...values: (string | string[] | undefined)[]) =>
  Array.from(
    new Set(
      values
        .flatMap((value) => (Array.isArray(value) ? value : value ? [value] : []))
        .join(" ")
        .toLowerCase()
        .replace(/[^a-z0-9\s/-]/g, " ")
        .split(/\s+/)
        .filter((word) => word.length > 2)
    )
  ).slice(0, 28);

const corePages: SearchItem[] = [
  {
    title: "EZ Roam Guide",
    description: "Practical first 24 hours travel guides for arriving in a new country or city with less stress.",
    url: "/",
    type: "Page",
    category: "Home",
    keywords: wordsFrom("home", "first 24 hours", "arrival guides", "travel planning", "countries", "cities", "tools"),
    excerpt: "Browse practical arrival guides, travel basics, and free tools for your first 24 hours abroad."
  },
  {
    title: "Country Arrival Guides",
    description: "Browse first 24 hours travel guides by country, including airport arrival, money, SIM/eSIM, transport, etiquette, and safety basics.",
    url: "/countries/",
    type: "Page",
    category: "Countries",
    keywords: wordsFrom("countries", "country guides", "arrival guides", "airport", "SIM", "transport", "money", "safety"),
    excerpt: "Find country guides for the decisions travelers make immediately after landing."
  },
  {
    title: "City Arrival Guides",
    description: "Browse city arrival guides for practical first-day decisions after reaching a major destination.",
    url: "/cities/",
    type: "Page",
    category: "Cities",
    keywords: wordsFrom("cities", "city guides", "arrival guides", "airport", "hotel", "transport", "first day"),
    excerpt: "Find city guides for the first day in a new destination, from airport exit to settling in."
  },
  {
    title: "Travel Basics",
    description: "Read practical travel basics for airport exits, SIM/eSIM choices, money, transport, safety, scams, and first-day planning.",
    url: "/travel-basics/",
    type: "Page",
    category: "Travel Basics",
    keywords: wordsFrom("travel basics", "SIM", "eSIM", "money", "transport", "safety", "airport", "planning"),
    excerpt: "Browse practical travel basics that help with common first-day questions abroad."
  },
  {
    title: "Travel Tools",
    description: "Use free travel tools for first-day planning, airport transport, SIM/eSIM decisions, money estimates, documents, and arrival confidence.",
    url: "/tools/",
    type: "Page",
    category: "Tools",
    keywords: wordsFrom("tools", "travel tools", "planner", "calculator", "checklist", "airport", "SIM", "money"),
    excerpt: "Use lightweight travel tools to plan your first 24 hours abroad more calmly."
  },
  {
    title: "Search EZ Roam Guide",
    description: "Search EZ Roam Guide for country guides, city guides, travel basics, and free travel tools.",
    url: "/search/",
    type: "Page",
    category: "Search",
    keywords: wordsFrom("search", "find guides", "find tools", "travel topics", "country", "city"),
    excerpt: "Search for countries, cities, airport arrival topics, SIM/eSIM, money, transport, safety, and free travel tools."
  },
  {
    title: "Sitemap",
    description: "Browse the public pages available on EZ Roam Guide.",
    url: "/sitemap/",
    type: "Page",
    category: "Sitemap",
    keywords: wordsFrom("sitemap", "browse pages", "all pages", "site links"),
    excerpt: "Use the sitemap to browse the main public sections of EZ Roam Guide."
  }
];

export const searchIndex: SearchItem[] = [
  ...corePages,
  ...allGuides.map((guide) => {
    const type = guide.kind === "country" ? "Country Guide" : guide.kind === "city" ? "City Guide" : "Travel Basics";
    const sectionText = guide.sections.slice(0, 4).flatMap((section) => [section.heading, ...section.paragraphs]).join(" ");
    return {
      title: guide.title,
      description: guide.description,
      url: hrefFor(guide),
      type,
      category: guide.eyebrow,
      keywords: wordsFrom(type, guide.title, guide.label, guide.eyebrow, guide.quick, guide.checklist, guide.mistakes, sectionText),
      excerpt: [guide.intro, sectionText].join(" ").slice(0, 360),
      lastUpdated: guide.lastUpdated,
      readingTime: guide.readingTime
    };
  }),
  ...travelTools.map((tool) => ({
    title: tool.title,
    description: tool.description,
    url: hrefForTool(tool),
    type: "Tool" as const,
    category: tool.category,
    keywords: wordsFrom("tool", "travel tool", tool.title, tool.category, tool.bestFor, tool.howItHelps, tool.advice.heading, tool.advice.paragraphs, tool.fields.map((field) => field.label)),
    excerpt: [tool.intro, tool.bestFor, tool.howItHelps.join(" ")].join(" ").slice(0, 360),
    lastUpdated: tool.lastUpdated,
    readingTime: tool.readingTime
  })),
  ...infoPages.map((page) => ({
    title: page.title,
    description: page.description,
    url: `/${page.slug}/`,
    type: "Page" as const,
    category: "Information page",
    keywords: wordsFrom("page", page.title, page.description, page.sections.map((section) => section.heading)),
    excerpt: [page.intro, page.sections.slice(0, 2).flatMap((section) => section.paragraphs).join(" ")].join(" ").slice(0, 320)
  }))
];
