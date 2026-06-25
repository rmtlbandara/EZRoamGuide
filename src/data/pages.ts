export type InfoPage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[]; links?: { label: string; href: string }[] }[];
};

export const infoPages: InfoPage[] = [
  {
    slug: "about", title: "About EZ Roam Guide", seoTitle: "About EZ Roam Guide | Practical First-Day Travel Help",
    description: "Learn why EZ Roam Guide focuses on calm, practical first-day travel information and how our guides are researched and maintained.",
    intro: "EZ Roam Guide is built around a small but important part of travel: the hours between landing and feeling settled.",
    sections: [
      { heading: "What we cover", paragraphs: ["Our guides explain airport exits, first transfers, mobile data, cash and cards, local transport, everyday safety, etiquette, food, water, and a realistic first-day pace.", "We focus on practical decisions rather than destination promotion. You will not find photo galleries, hotel rankings disguised as advice, or claims that one itinerary fits everyone."] },
      { heading: "Who the guides are for", paragraphs: ["The site is written for international travelers, especially people taking a first trip abroad or entering an unfamiliar travel system. We use simple English so the guidance is useful across backgrounds.", "Experienced travelers can also use each page as an arrival checklist—a way to catch the small details that are easy to miss while planning the larger trip."] },
      { heading: "How we think about accuracy", paragraphs: ["Travel rules and services change. We separate durable planning principles from details that need current verification and direct readers to official immigration, airport, transport, health, and government sources.", "We do not invent prices, schedules, entry requirements, or safety claims. Every guide includes a reminder to confirm information for the reader's own dates, nationality, route, and circumstances."] }
    ]
  },
  {
    slug: "contact", title: "Contact EZ Roam Guide", seoTitle: "Contact EZ Roam Guide",
    description: "Contact EZ Roam Guide with corrections, feedback, accessibility concerns, editorial questions, or business inquiries.",
    intro: "A travel guide improves when readers point out what is unclear, outdated, or missing.",
    sections: [
      { heading: "How to reach us", paragraphs: ["Email us at hello@ezroamguide.com. Please include the page URL and enough detail for us to understand the issue.", "We welcome factual corrections, accessibility feedback, editorial questions, and responsible business inquiries. We do not accept payment to hide sponsorship or alter safety guidance."] },
      { heading: "Before you send personal information", paragraphs: ["Do not email passport scans, card details, booking credentials, medical records, or other sensitive information. EZ Roam Guide is an information publisher, not an emergency, visa, booking, or legal service.", "For an urgent situation abroad, contact local emergency services, your travel insurer, transport provider, accommodation, or relevant consular service."] },
      { heading: "Response expectations", paragraphs: ["We review messages in good faith but cannot guarantee an individual response or provide personalized travel clearance. Rules must be confirmed with the authority responsible for them.", "Correction reports are prioritized when they include an official source and the date the information was checked."] }
    ]
  },
  {
    slug: "privacy-policy", title: "Privacy Policy", seoTitle: "Privacy Policy | EZ Roam Guide",
    description: "Read the EZ Roam Guide privacy policy, including information about server logs, email, cookies, analytics, advertising, and user rights.",
    intro: "This policy explains what information EZ Roam Guide may receive and how it is handled. Last updated June 25, 2026.",
    sections: [
      { heading: "Information we may receive", paragraphs: ["The static website does not require an account and does not ask for personal data to read guides. Hosting providers may process standard technical logs such as IP address, browser type, requested pages, referring page, and timestamp for security and delivery.", "If you email us, we receive your address and any information you choose to include. Do not send sensitive identity, financial, medical, or booking information."] },
      { heading: "How information may be used", paragraphs: ["Technical information may be used to operate, secure, troubleshoot, and understand the general use of the site. Email is used to respond to the message, review corrections, and maintain an appropriate record of the conversation.", "We do not sell personal information. We do not use contact details to add someone to a marketing list without clear permission."] },
      { heading: "Analytics and advertising", paragraphs: ["We use Google Analytics to understand aggregate site usage, such as pages visited, approximate location, device and browser information, and referral sources. Google may process identifiers and set analytics cookies according to its own terms and privacy practices.", "The site does not include active Google AdSense code. If advertising services are added later, this policy and the cookie controls will be updated before or when those services are enabled. Where required, consent choices will be provided."] },
      { heading: "Future Google advertising", paragraphs: ["If Google AdSense or another advertising service is enabled, third-party vendors, including Google, may use cookies or similar technologies to serve and measure ads on this site.", "Google may use advertising cookies to show personalized ads based on a user's visits to this and other websites, or non-personalized ads based on factors such as general location and the current page. Users can manage Google ad personalization through Google Ads Settings. EZ Roam Guide does not sell personal information."], links: [{ label: "Manage Google ad personalization", href: "https://adssettings.google.com/" }, { label: "How Google uses information from sites and apps", href: "https://policies.google.com/technologies/partner-sites" }] },
      { heading: "Retention, security, and rights", paragraphs: ["Information is retained only as reasonably needed for operations, legal obligations, security, and correspondence. No internet service can promise absolute security.", "Depending on where you live, you may have rights to request access, correction, deletion, restriction, or objection. Contact hello@ezroamguide.com with a clear request. We may need to verify identity without collecting unnecessary data."] },
      { heading: "External links and children", paragraphs: ["External websites have their own privacy practices. A link does not place their processing under our control.", "The site is intended for a general audience and is not designed to knowingly collect personal information from children."] }
    ]
  },
  {
    slug: "terms-of-use", title: "Terms of Use", seoTitle: "Terms of Use | EZ Roam Guide",
    description: "Terms governing use of EZ Roam Guide, including informational purpose, acceptable use, intellectual property, links, and liability limits.",
    intro: "By using EZ Roam Guide, you agree to these terms. If you do not agree, please do not use the site. Last updated June 25, 2026.",
    sections: [
      { heading: "Information, not professional advice", paragraphs: ["The site provides general travel-planning information. It is not immigration, legal, medical, financial, security, or emergency advice and does not create a professional or client relationship.", "You are responsible for confirming official requirements and deciding whether any destination, route, activity, or purchase is appropriate for you."] },
      { heading: "Permitted use", paragraphs: ["You may read, link to, and quote short portions of the site with clear attribution. You may not scrape, republish, sell, systematically reproduce, or present the content as your own without written permission.", "Do not misuse the site, attempt unauthorized access, interfere with delivery, introduce malicious code, or use the content to facilitate unlawful activity."] },
      { heading: "Accuracy and availability", paragraphs: ["We aim for useful, careful content but do not warrant that every detail is complete, current, or suitable for every traveler. Transport, laws, health rules, prices, and conditions can change without notice.", "The site may be changed, suspended, or unavailable. We are not responsible for losses caused by relying on outdated information or by third-party services."] },
      { heading: "External services and liability", paragraphs: ["Links are provided for context and convenience. We do not control external websites, transport operators, governments, insurers, or businesses.", "To the extent permitted by law, EZ Roam Guide is not liable for indirect, incidental, or consequential loss arising from use of the site. Nothing in these terms excludes liability that cannot legally be excluded."] }
    ]
  },
  {
    slug: "disclaimer", title: "Travel Information Disclaimer", seoTitle: "Travel Disclaimer | EZ Roam Guide",
    description: "Important limitations of EZ Roam Guide's general travel information, including changing rules, safety, health, transport, and external links.",
    intro: "EZ Roam Guide is a planning resource, not an official authority or personalized advisory service.",
    sections: [
      { heading: "Travel conditions change", paragraphs: ["Visa and immigration rules, health requirements, prices, schedules, routes, mobile plans, laws, and safety conditions can change at any time. Publication or update dates do not guarantee that a detail remains current.", "Confirm important information with the government, embassy, airport, transport operator, health authority, insurer, or other organization responsible for it."] },
      { heading: "Safety and health", paragraphs: ["No destination or activity can be described as universally safe. Risk depends on current events, weather, health, personal circumstances, location, behavior, and many factors beyond a guide's scope.", "Seek qualified medical advice for health decisions and use local emergency services for urgent help. Follow official travel advisories and local law."] },
      { heading: "Financial and commercial decisions", paragraphs: ["Examples about cards, cash, SIMs, taxis, or insurance are general education, not endorsements or guarantees. Review current fees, contracts, exclusions, and provider terms yourself.", "A future advertising or affiliate relationship will be disclosed where relevant. It will not convert commercial material into official or professional advice."] },
      { heading: "Use your judgment", paragraphs: ["The reader remains responsible for bookings, documents, conduct, purchases, and travel decisions. If a guide conflicts with an official instruction, follow the official instruction.", "Contact us if you find a possible error, but do not delay an urgent decision while waiting for a response."] }
    ]
  },
  {
    slug: "editorial-policy", title: "Editorial Policy", seoTitle: "Editorial Policy | EZ Roam Guide",
    description: "How EZ Roam Guide selects topics, researches travel information, writes original content, handles corrections, and separates editorial work from advertising.",
    intro: "Our editorial standard is simple: help a traveler make a calmer, better-informed first-day decision without pretending travel is static.",
    sections: [
      { heading: "Topic selection and purpose", paragraphs: ["We prioritize arrival questions with real practical consequences: official transport, connectivity, money, local movement, safety habits, etiquette, and recovery from a long journey.", "Pages are not commissioned to inflate a destination, create artificial search volume, or repeat a generic list under a different place name."] },
      { heading: "Research and verification", paragraphs: ["Durable advice is based on established travel-planning practice. Time-sensitive facts should be checked against first-party sources such as governments, airports, transit operators, health authorities, and service providers.", "When a current number is not essential, we avoid publishing a price or schedule that will become misleading. We tell readers where verification is necessary."] },
      { heading: "Originality and voice", paragraphs: ["Content is written and edited for EZ Roam Guide. We do not scrape or lightly rewrite other travel sites, invent personal experiences, or present promotional claims as independent judgment.", "The voice is calm, specific, and accessible. We explain tradeoffs instead of declaring a universal best option."] },
      { heading: "Updates and corrections", paragraphs: ["Guide pages show a last-updated date. An update may address facts, links, structure, clarity, accessibility, or the usefulness of the arrival sequence.", "Readers can report a possible error at hello@ezroamguide.com. We assess reliable evidence, correct material errors, and avoid retaining a claim merely because it once ranked well."] },
      { heading: "Advertising independence", paragraphs: ["The site is designed to support future advertising, but no active AdSense code is included at launch. Advertising will not buy favorable coverage or remove necessary warnings.", "Sponsored or affiliate material, if introduced, will be clearly disclosed and separated from editorial judgment."] }
    ]
  },
  {
    slug: "cookie-policy", title: "Cookie Policy", seoTitle: "Cookie Policy | EZ Roam Guide",
    description: "Learn how EZ Roam Guide uses or may use essential cookies, analytics, advertising technologies, and consent controls.",
    intro: "This policy describes cookies and similar technologies on EZ Roam Guide. Last updated June 25, 2026.",
    sections: [
      { heading: "Current use of cookies", paragraphs: ["The site uses Google Analytics to understand aggregate usage and improve its content. Google Analytics may set cookies or use similar identifiers to distinguish visits and collect information such as pages viewed, approximate location, device type, browser, and referral source.", "The site does not include active Google AdSense code. The empty future ad positions do not load ads or display blank boxes. The hosting platform may also use essential security or delivery mechanisms according to its own documentation."] },
      { heading: "Cookie categories", paragraphs: ["Essential technologies support security and delivery. Analytics technologies help us understand aggregate site use. Advertising technologies may measure, personalize, or limit repetition of ads if advertising is introduced later.", "Where required by applicable law, the site will provide appropriate notices or consent choices for non-essential technologies."] },
      { heading: "Managing cookies", paragraphs: ["Browser settings can block or delete cookies, though doing so can affect some website functions. Device and browser controls may also limit advertising identifiers or cross-site tracking.", "Google Analytics and advertising preferences can also be managed through Google's controls. If advertising is enabled, an appropriate consent management platform will be used where Google policy or applicable law requires it."], links: [{ label: "Google privacy controls", href: "https://myaccount.google.com/data-and-privacy" }, { label: "Google Ads Settings", href: "https://adssettings.google.com/" }] },
      { heading: "Questions", paragraphs: ["Contact hello@ezroamguide.com with questions about this policy. For broader information about personal data, read the Privacy Policy.", "External websites linked from our guides set their own cookies and are governed by their own policies."] }
    ]
  }
];
