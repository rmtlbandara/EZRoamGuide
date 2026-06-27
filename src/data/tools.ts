import { site } from "./site";

export type ToolField =
  | { id: string; label: string; type: "select"; options: string[]; defaultValue?: string; required?: boolean; help?: string }
  | { id: string; label: string; type: "number"; defaultValue?: string; required?: boolean; min?: string; step?: string; help?: string }
  | { id: string; label: string; type: "text"; defaultValue?: string; required?: boolean; placeholder?: string; help?: string }
  | { id: string; label: string; type: "checkbox"; options: string[]; help?: string };

export type ToolFAQ = { question: string; answer: string };

export type TravelTool = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  intro: string;
  lastUpdated: string;
  readingTime: string;
  toolType: string;
  buttonLabel: string;
  canPrint?: boolean;
  fields: ToolField[];
  howItHelps: string[];
  advice: { heading: string; paragraphs: string[] };
  faqs: ToolFAQ[];
  relatedGuides: string[];
};

const updated = "June 27, 2026";

export const toolsIntro = {
  seoTitle: "Free Travel Tools for Your First 24 Hours Abroad | EZ Roam Guide",
  description: "Use free travel tools to plan your first 24 hours abroad, including airport transport, documents, SIM options, money, and late-night arrival safety.",
  title: "Free Travel Tools for Your First 24 Hours Abroad",
  intro: "These free travel tools help you make simple arrival-day decisions before and after landing in a new country. They are designed for the practical first 24 hours: leaving the airport, getting connected, handling money, checking in, and keeping the first day calm.",
  faqs: [
    { question: "Are these travel tools free?", answer: "Yes. The tools are free to use, do not require signup, and do not have a paywall." },
    { question: "Do the tools save my answers?", answer: "No. The tools run in your browser and do not save or transmit your answers to EZ Roam Guide." },
    { question: "Are these tools a replacement for official travel advice?", answer: "No. They are planning helpers. Always confirm entry rules, transport details, prices, safety information, and local requirements through official sources before travel." },
    { question: "Do the tools use live prices or exchange rates?", answer: "No. The tools avoid live prices and external APIs. Where money is involved, you enter your own estimates." }
  ]
};

export const travelTools: TravelTool[] = [
  {
    slug: "first-24-hours-travel-planner",
    title: "First 24 Hours Travel Planner",
    seoTitle: "First 24 Hours Travel Planner | Free Arrival Day Tool",
    description: "Plan your first 24 hours abroad with a free travel planner for airport arrival, SIM setup, money, transport, check-in, food, and rest.",
    category: "Arrival planning",
    intro: "Use this planner to turn a vague arrival day into a short, realistic sequence. Choose your arrival conditions and it will create a simple first-day plan you can copy before you fly.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "first24",
    buttonLabel: "Generate first-day plan",
    fields: [
      { id: "arrivalTime", label: "Arrival time", type: "select", options: ["morning", "afternoon", "evening", "late night"], defaultValue: "afternoon", required: true },
      { id: "travelerType", label: "Traveler type", type: "select", options: ["solo", "couple", "family", "business traveler"], defaultValue: "solo", required: true },
      { id: "internetStatus", label: "Internet status", type: "select", options: ["already have SIM/eSIM", "need internet after landing", "not sure"], defaultValue: "not sure", required: true },
      { id: "moneyStatus", label: "Money status", type: "select", options: ["have local cash", "card only", "need ATM/exchange"], defaultValue: "card only", required: true },
      { id: "accommodation", label: "Accommodation location", type: "select", options: ["near airport", "city center", "unknown"], defaultValue: "city center", required: true },
      { id: "energy", label: "Energy level", type: "select", options: ["low", "normal", "high"], defaultValue: "normal", required: true }
    ],
    howItHelps: ["Builds a short airport-to-bed plan instead of a packed sightseeing day.", "Highlights the order for internet, money, transport, check-in, food, and rest.", "Adds a practical checklist you can copy into your notes app."],
    advice: { heading: "Keep the first day flexible", paragraphs: ["Arrival-day plans work best when they remove decisions, not when they fill every hour. Leave space for immigration, baggage, traffic, weather, and tiredness.", "Rules, prices, transport options, and local requirements can change. Confirm official information before your trip."] },
    faqs: [
      { question: "What should I plan for the first 24 hours abroad?", answer: "Plan airport exit, internet, money, official transport, check-in, food, water, rest, and one simple next-day preparation step." },
      { question: "Should I plan sightseeing on arrival day?", answer: "Keep it optional. A short nearby walk is usually better than a fixed cross-city plan after a long flight." },
      { question: "Is this planner useful for families?", answer: "Yes. Choose family as the traveler type and the result will favor fewer transfers, simpler check-in, and rest." },
      { question: "Can I copy the plan?", answer: "Yes. Generate the result and use the Copy Plan button to place the text on your clipboard." }
    ],
    relatedGuides: ["/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/arriving-late-at-night/", "/travel-basics/travel-safety-basics/"]
  },
  {
    slug: "airport-transport-helper",
    title: "Airport Transport Decision Helper",
    seoTitle: "Airport Transport Decision Helper | Taxi, Train, Bus or Transfer?",
    description: "Use this free airport transport helper to choose between train, bus, taxi, ride-hailing, hotel transfer, or private transfer after landing.",
    category: "Airport transport",
    intro: "Airport transport is easier when you compare the whole journey, not just the cheapest fare. This helper suggests practical options based on timing, bags, budget, and comfort.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "transport",
    buttonLabel: "Recommend transport options",
    fields: [
      { id: "arrivalTime", label: "Arrival time", type: "select", options: ["daytime", "evening", "late night"], defaultValue: "daytime", required: true },
      { id: "luggage", label: "Luggage amount", type: "select", options: ["light", "medium", "heavy"], defaultValue: "medium", required: true },
      { id: "travelerType", label: "Traveler type", type: "select", options: ["solo", "family", "business", "group"], defaultValue: "solo", required: true },
      { id: "budget", label: "Budget", type: "select", options: ["low", "medium", "flexible"], defaultValue: "medium", required: true },
      { id: "publicComfort", label: "Public transport comfort", type: "select", options: ["comfortable", "unsure", "not comfortable"], defaultValue: "unsure", required: true },
      { id: "directDrop", label: "Need direct hotel drop-off?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true }
    ],
    howItHelps: ["Compares public transport, official taxis, ride-hailing, hotel transfers, and private transfers.", "Explains why an option fits your arrival conditions.", "Reminds you what to check before leaving the airport."],
    advice: { heading: "Choose the route you can verify", paragraphs: ["A good airport transfer has clear signs, a ticket or booking record, a known pickup point, and a payment method you understand.", "Avoid unofficial offers that create urgency or pull you away from signed transport areas. Verify closures or fare changes through airport staff or official channels."] },
    faqs: [
      { question: "Is train or metro always the best airport transport?", answer: "No. Rail can be excellent with light luggage and a convenient station, but a taxi or transfer may be better late at night or with children." },
      { question: "When should I choose an official taxi?", answer: "Choose an official taxi when you need a direct route, arrive late, carry heavy bags, or are not comfortable using public transport on day one." },
      { question: "Are ride-hailing apps safe at airports?", answer: "They can be useful, but you still need data, battery, the correct pickup zone, and a vehicle plate match." },
      { question: "What should I avoid at the airport?", answer: "Avoid drivers who approach before the official area, ask you to cancel app rides, or claim all official options are closed without proof." }
    ],
    relatedGuides: ["/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/airport-taxi-scams/", "/travel-basics/arriving-late-at-night/"]
  },
  {
    slug: "sim-esim-roaming-finder",
    title: "SIM vs eSIM vs Roaming Finder",
    seoTitle: "SIM vs eSIM vs Roaming Finder | Free Travel Internet Tool",
    description: "Find the best travel internet option for your trip: local SIM, eSIM, roaming, or airport Wi-Fi first. Free and simple to use.",
    category: "Internet setup",
    intro: "Use this finder to choose a sensible travel internet option without live prices or confusing plan comparisons. It focuses on arrival-day practicality.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "internet",
    buttonLabel: "Find internet option",
    fields: [
      { id: "esim", label: "Phone supports eSIM", type: "select", options: ["yes", "no", "not sure"], defaultValue: "not sure", required: true },
      { id: "tripLength", label: "Trip length", type: "select", options: ["1–3 days", "4–7 days", "more than 1 week"], defaultValue: "4–7 days", required: true },
      { id: "calls", label: "Need local calls?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "maps", label: "Need data mostly for maps and messaging?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "before", label: "Want setup before landing?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "buyAfter", label: "Comfortable buying SIM after arrival?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true }
    ],
    howItHelps: ["Suggests eSIM, local SIM, roaming, or airport Wi-Fi first.", "Explains who the option suits and what to watch out for.", "Avoids live price claims and keeps the advice evergreen."],
    advice: { heading: "Test before leaving the airport", paragraphs: ["Whatever option you choose, test maps and messaging before you walk away from airport Wi-Fi or a staffed counter.", "Do not delete an eSIM while abroad unless the provider confirms it can be reinstalled. Keep your home SIM safe if you remove it."] },
    faqs: [
      { question: "Is an eSIM better than a local SIM?", answer: "An eSIM is convenient for setup before landing, while a local SIM may suit longer stays or local calls. Phone support and trip needs decide the answer." },
      { question: "Should I use roaming?", answer: "Roaming can be simplest for a short trip if your home plan is reasonable. Check fees and data limits before turning on data roaming." },
      { question: "What if my phone may not support eSIM?", answer: "Use airport Wi-Fi first, confirm phone compatibility, then compare roaming or a physical local SIM." },
      { question: "Does this tool show current SIM prices?", answer: "No. It does not use live prices or external APIs. Confirm current plans and availability before buying." }
    ],
    relatedGuides: ["/travel-basics/sim-card-vs-esim/", "/travel-basics/offline-travel-documents-checklist/", "/travel-basics/no-phone-signal-after-landing/", "/travel-basics/plan-your-first-24-hours-abroad/"]
  },
  {
    slug: "offline-travel-documents-checklist",
    title: "Offline Travel Documents Checklist Generator",
    seoTitle: "Offline Travel Documents Checklist | Free Travel Prep Tool",
    description: "Create a simple offline travel documents checklist for passport copies, bookings, insurance, emergency contacts, maps, and arrival details.",
    category: "Document prep",
    intro: "This checklist generator helps you see what is already saved offline and what still needs attention before departure.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "documents",
    buttonLabel: "Generate document checklist",
    canPrint: true,
    fields: [
      { id: "documents", label: "Select what you have already saved offline", type: "checkbox", options: ["Passport copy", "Visa or ETA approval", "Flight booking", "Boarding pass", "Hotel booking", "Hotel address", "Travel insurance", "Emergency contacts", "Local emergency number", "Embassy or consulate contact", "Offline map", "Airport-to-hotel route", "SIM/eSIM instructions", "Bank support contact", "Important medical notes"] }
    ],
    howItHelps: ["Separates completed offline items from missing ones.", "Creates a short final preparation note.", "Includes copy and print options for a practical pre-trip list."],
    advice: { heading: "Privacy note", paragraphs: ["This tool works in your browser and does not save your selections. Avoid entering sensitive passport, banking, medical, or booking details into any travel planning tool you do not trust.", "Keep offline copies secure with a device lock and a sensible backup outside the phone you carry in your hand."] },
    faqs: [
      { question: "Do I need every item on the checklist?", answer: "Not every trip needs every item, but passport copies, bookings, insurance, emergency contacts, maps, and your first address are useful for most international arrivals." },
      { question: "Should I print offline documents?", answer: "A small paper backup can help if a phone dies, but keep sensitive papers secure and do not carry more personal data than needed." },
      { question: "Are digital copies accepted at immigration?", answer: "Usually copies are only supporting information, not replacements for original documents or official approvals." },
      { question: "Does this tool store my checklist?", answer: "No. It runs in your browser and does not save or send your selections." }
    ],
    relatedGuides: ["/travel-basics/offline-travel-documents-checklist/", "/travel-basics/first-international-trip-checklist/", "/travel-basics/travel-safety-basics/", "/travel-basics/arriving-late-at-night/"]
  },
  {
    slug: "first-day-travel-money-estimator",
    title: "First-Day Travel Money Estimator",
    seoTitle: "First-Day Travel Money Estimator | Free Arrival Budget Tool",
    description: "Estimate simple first-day travel money needs for airport transport, food, SIM, small purchases, and emergency backup after landing.",
    category: "Travel money",
    intro: "Use your own estimated amounts to build a first-day money buffer. This is not a currency converter and does not fetch live exchange rates.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "money",
    buttonLabel: "Estimate first-day money",
    fields: [
      { id: "currency", label: "Currency label", type: "text", defaultValue: "USD", placeholder: "USD, EUR, LKR, JPY", required: true },
      { id: "transport", label: "Airport transport estimate", type: "number", defaultValue: "40", min: "0", step: "0.01", required: true },
      { id: "meal", label: "First meal estimate", type: "number", defaultValue: "20", min: "0", step: "0.01", required: true },
      { id: "sim", label: "SIM/eSIM estimate", type: "number", defaultValue: "15", min: "0", step: "0.01", required: true },
      { id: "small", label: "Small purchases estimate", type: "number", defaultValue: "15", min: "0", step: "0.01", required: true },
      { id: "backup", label: "Emergency backup amount", type: "number", defaultValue: "50", min: "0", step: "0.01", required: true }
    ],
    howItHelps: ["Adds your own arrival-day estimates into one simple total.", "Suggests a practical cash/card split without claiming destination prices.", "Reminds you to keep backup payment options separate."],
    advice: { heading: "Use your own estimates", paragraphs: ["This tool is not a live currency converter. Enter amounts in the currency you plan to use and confirm current local costs before travel.", "For the first 24 hours, aim for enough money to leave the airport, eat, connect, check in, and handle one small backup."] },
    faqs: [
      { question: "Does this estimate real country costs?", answer: "No. You enter your own estimates. The tool only adds them and suggests how to think about cash, card, and backup money." },
      { question: "How much cash should I carry on arrival?", answer: "Carry enough for small purchases and any cash-only transport, but avoid carrying more than you can protect." },
      { question: "Should I use card or cash first?", answer: "Use both where practical. Cards are convenient, while a small cash reserve helps when terminals, apps, or foreign cards fail." },
      { question: "Does this tool save my budget?", answer: "No. It runs in your browser and does not save or transmit your estimates." }
    ],
    relatedGuides: ["/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/money-first-24-hours-abroad/", "/travel-basics/airport-taxi-scams/", "/travel-basics/plan-your-first-24-hours-abroad/"]
  },
  {
    slug: "late-night-arrival-planner",
    title: "Late-Night Arrival Safety Planner",
    seoTitle: "Late-Night Arrival Safety Planner | Free Travel Arrival Tool",
    description: "Plan a safer late-night arrival abroad with simple advice for transport, accommodation, internet, money, and first-night decisions.",
    category: "Late arrivals",
    intro: "A late arrival is easier when the next steps are already plain. This planner gives calm priorities for transport, check-in, connectivity, money, and first-night choices.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "lateNight",
    buttonLabel: "Generate late-night plan",
    fields: [
      { id: "arrivalTime", label: "Arrival time", type: "select", options: ["after 8 PM", "after midnight", "early morning"], defaultValue: "after 8 PM", required: true },
      { id: "alone", label: "Traveling alone?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "accommodation", label: "Accommodation confirmed?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "transport", label: "Transport pre-booked?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "internet", label: "Internet ready?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "cash", label: "Local cash available?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "address", label: "Hotel address saved offline?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true }
    ],
    howItHelps: ["Creates a priority list for night arrivals.", "Keeps the tone practical and not fear-based.", "Shows what to avoid when transport and check-in options are limited."],
    advice: { heading: "Late-night choices should be simple", paragraphs: ["After dark, a direct and verifiable route is often better than the cheapest route. Use official transport, a confirmed hotel transfer, or a staffed airport option.", "If a plan fails, stay in a staffed public area while you reorganize. Do not follow unsolicited accommodation or transport offers."] },
    faqs: [
      { question: "Is arriving late at night unsafe?", answer: "Not automatically. The main issue is that fewer services are open and tired travelers have fewer options. Preparation reduces the stress." },
      { question: "What matters most for a late arrival?", answer: "Confirmed check-in, verified transport, working communication, a saved address, and a simple backup plan matter most." },
      { question: "Should I pre-book transport at night?", answer: "It can be useful, especially when alone, with family, or after midnight. Use a provider you can verify and save pickup details offline." },
      { question: "What should I avoid after a late flight?", answer: "Avoid unofficial rides, changing hotels based on a stranger's suggestion, long orientation walks, and plans that depend on a nearly dead phone." }
    ],
    relatedGuides: ["/travel-basics/arriving-late-at-night/", "/travel-basics/travel-safety-basics/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/airport-taxi-scams/"]
  },
  {
    slug: "first-day-packing-checklist",
    title: "First-Day Travel Packing Mini Checklist",
    seoTitle: "First-Day Travel Packing Checklist | Free Arrival Essentials Tool",
    description: "Create a simple first-day travel packing checklist for documents, phone, money, medication, comfort items, and arrival essentials.",
    category: "Packing",
    intro: "This is not a full-trip packing list. It focuses on the items that make the first day abroad easier if checked luggage is delayed or you arrive tired.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "packing",
    buttonLabel: "Create packing checklist",
    canPrint: true,
    fields: [
      { id: "items", label: "Select arrival essentials you plan to pack", type: "checkbox", options: ["Documents", "Phone and charger", "Power bank", "Local cash or card", "Medication", "Light snacks", "Water bottle", "Hotel address", "Transport details", "Change of clothes", "Basic toiletries", "Pen", "Travel adapter"] }
    ],
    howItHelps: ["Builds a carry-on-focused mini checklist.", "Separates must-have and nice-to-have items.", "Highlights what should not depend on checked luggage."],
    advice: { heading: "Pack for the first day, not every possibility", paragraphs: ["The first-day bag should protect documents, medicine, payment, phone power, and basic comfort. Heavy bags make every airport, station, and staircase harder.", "Check airline and security rules before packing liquids, batteries, medicine, food, or sharp items."] },
    faqs: [
      { question: "What should I keep in carry-on for arrival day?", answer: "Keep documents, essential medicine, payment methods, phone power, first-night address, transport details, and basic comfort items with you." },
      { question: "Should I pack a change of clothes in carry-on?", answer: "Yes if possible. It is useful when checked luggage is delayed or you arrive before check-in." },
      { question: "Can I pack medication in checked luggage?", answer: "Essential medication should usually stay in cabin baggage with any supporting documentation required by your route." },
      { question: "Does this replace a full packing list?", answer: "No. It is a mini checklist for arrival essentials only." }
    ],
    relatedGuides: ["/travel-basics/first-international-trip-checklist/", "/travel-basics/offline-travel-documents-checklist/", "/travel-basics/plan-your-first-24-hours-abroad/"]
  },
  {
    slug: "first-day-itinerary-builder",
    title: "First Day Travel Itinerary Builder",
    seoTitle: "First Day Travel Itinerary Builder | Free Low-Stress Arrival Planner",
    description: "Build a simple first-day travel itinerary after landing, with time for airport arrival, transport, check-in, food, rest, and orientation.",
    category: "Itinerary",
    intro: "Build a low-stress first-day itinerary that leaves space for real arrival conditions. The goal is to reach the next morning rested and oriented.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "itinerary",
    buttonLabel: "Build first-day itinerary",
    fields: [
      { id: "arrivalTime", label: "Arrival time", type: "select", options: ["morning", "afternoon", "evening", "late night"], defaultValue: "afternoon", required: true },
      { id: "checkin", label: "Hotel check-in time", type: "text", defaultValue: "3:00 PM", required: true },
      { id: "energy", label: "Travel energy level", type: "select", options: ["low", "normal", "high"], defaultValue: "normal", required: true },
      { id: "transportConfidence", label: "Transport confidence", type: "select", options: ["comfortable", "unsure", "not comfortable"], defaultValue: "unsure", required: true },
      { id: "activity", label: "Want one light activity?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "rest", label: "Needs rest?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true }
    ],
    howItHelps: ["Creates a sample sequence for airport arrival, transport, check-in, food, rest, and orientation.", "Keeps activities light instead of overloading day one.", "Includes copy and reset controls."],
    advice: { heading: "Plan one useful win", paragraphs: ["A good first-day itinerary has one useful win: reaching the hotel, eating well, learning the nearby area, or preparing tomorrow's route.", "Avoid long cross-city trips unless they are necessary. The first day should make the rest of the trip easier."] },
    faqs: [
      { question: "What is a good first-day itinerary after landing?", answer: "Airport exit, transport, check-in or luggage storage, simple food, rest, a short nearby walk if energy allows, and preparation for tomorrow." },
      { question: "Should I add activities to the first day?", answer: "Add only one light nearby activity if you have energy. Avoid expensive or time-sensitive plans close to landing." },
      { question: "What if I cannot check in yet?", answer: "Use luggage storage if available, eat nearby, and keep the plan simple until the room is ready." },
      { question: "Can I reset the itinerary?", answer: "Yes. Use the Reset button to clear the result and return the form to its default values." }
    ],
    relatedGuides: ["/travel-basics/low-stress-first-day-new-city/", "/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/arriving-late-at-night/", "/cities/tokyo-arrival-guide/", "/cities/bangkok-arrival-guide/", "/cities/dubai-arrival-guide/"]
  }
];

export function hrefForTool(tool: TravelTool) {
  return `/tools/${tool.slug}/`;
}

export function toolUrl(tool: TravelTool) {
  return new URL(hrefForTool(tool), site.url).toString();
}
