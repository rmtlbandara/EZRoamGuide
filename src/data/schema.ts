import { hrefFor, site, type FAQ, type Guide } from "./site";
import { hrefForTool, type ToolFAQ, type TravelTool } from "./tools";

const context = "https://schema.org";
const editorialUrl = new URL("/editorial-policy/", site.url).toString();

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export const toIsoDate = (value?: string) => {
  const timestamp = Date.parse(value ?? "");
  return Number.isNaN(timestamp) ? undefined : new Date(timestamp).toISOString().slice(0, 10);
};

export const organizationSchema = {
  "@context": context,
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  url: absoluteUrl("/"),
  email: site.email,
  logo: absoluteUrl("/favicon.svg")
};

export const websiteSchema = {
  "@context": context,
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: site.name,
  url: absoluteUrl("/"),
  description: "First 24 hours travel guides and planning tools for airport arrivals, transport, SIMs, money, safety, and settling in calmly.",
  publisher: { "@id": absoluteUrl("/#organization") },
  potentialAction: {
    "@type": "SearchAction",
    target: `${absoluteUrl("/search/")}?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbListSchema = (items: { name: string; url: string }[]) => ({
  "@context": context,
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const faqPageSchema = (faqs: (FAQ | ToolFAQ)[]) => faqs.length ? ({
  "@context": context,
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
}) : undefined;

export const articleSchema = (guide: Guide) => {
  const url = absoluteUrl(hrefFor(guide));
  const modified = toIsoDate(guide.lastUpdated);

  return {
    "@context": context,
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    ...(modified ? { datePublished: modified, dateModified: modified } : {}),
    author: {
      "@type": "Organization",
      name: `${site.name} Editorial Team`,
      url: editorialUrl
    },
    publisher: {
      "@id": absoluteUrl("/#organization")
    }
  };
};

export const toolWebApplicationSchema = (tool: TravelTool) => ({
  "@context": context,
  "@type": "WebApplication",
  name: tool.title,
  description: tool.description,
  url: absoluteUrl(hrefForTool(tool)),
  applicationCategory: "TravelApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  publisher: {
    "@id": absoluteUrl("/#organization")
  }
});

export const webPageSchema = (name: string, description: string, path: string) => ({
  "@context": context,
  "@type": "WebPage",
  name,
  description,
  url: absoluteUrl(path),
  isPartOf: { "@id": absoluteUrl("/#website") },
  publisher: { "@id": absoluteUrl("/#organization") }
});
