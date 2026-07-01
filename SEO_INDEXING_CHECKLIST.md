# EZ Roam Guide SEO Indexing Checklist

Use this checklist after deployment. It is for the site owner/developer and is not a public website page.

## 1. Submit the sitemap

1. Open Google Search Console for `https://ezroamguide.com/`.
2. Go to **Sitemaps**.
3. Submit or resubmit:
   - `https://ezroamguide.com/sitemap.xml`
4. Confirm Google can fetch the sitemap successfully.

## 2. Inspect and request indexing

Use URL Inspection in Google Search Console for representative pages:

- Homepage: `https://ezroamguide.com/`
- Countries hub: `https://ezroamguide.com/countries/`
- Cities hub: `https://ezroamguide.com/cities/`
- Travel Basics hub: `https://ezroamguide.com/travel-basics/`
- Tools hub: `https://ezroamguide.com/tools/`
- Top country articles, such as Japan, South Korea, France, and United States
- Top city articles, such as Tokyo, Seoul, Paris, London, Dubai, and New York City
- Top travel basics articles, such as SIM/eSIM, airport transport, taxi scams, travel safety, and first international trip checklist
- Top tools, such as the First 24 Hours Travel Planner, Airport Transport Decision Helper, SIM/eSIM Finder, Hotel Address Card Generator, and Offline Travel Documents Checklist

For each inspected URL, confirm:

- The page is available to Google.
- The canonical URL is the same clean production URL.
- The page is not blocked by `robots.txt`.
- The page does not show an unexpected `noindex`.
- The page renders important content in the live test.

## 3. Watch indexing statuses

Review these Search Console statuses weekly:

- Indexed
- Discovered – currently not indexed
- Crawled – currently not indexed
- Duplicate without user-selected canonical
- Alternate page with proper canonical
- Blocked by robots.txt
- Page with redirect
- Not found (404)

If important pages are discovered or crawled but not indexed, improve internal links, content clarity, and page usefulness before requesting indexing again.

## 4. Recheck after content changes

After major guide, tool, policy, or navigation updates:

1. Deploy the site.
2. Confirm `https://ezroamguide.com/robots.txt` loads.
3. Confirm `https://ezroamguide.com/sitemap.xml` loads.
4. Resubmit the sitemap in Search Console.
5. Inspect a few updated URLs and request indexing where appropriate.

## 5. Before Google AdSense review

Confirm:

- Navigation links work on desktop and mobile.
- Privacy Policy, Cookie Policy, Terms, Disclaimer, Editorial Policy, About, and Contact pages are reachable.
- No important page contains placeholder, draft, or “coming soon” content.
- No important public page is accidentally marked `noindex`.
- No broken internal links appear in navigation, cards, related links, footer, sitemap, or tool pages.
- Contact email is visible and correct.
- The site does not claim to be an official government, airport, embassy, tourism board, or Google-approved source.
