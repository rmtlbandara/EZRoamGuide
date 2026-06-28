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
  bestFor: string;
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
  seoTitle: "Free Travel Planning Tools | EZ Roam Guide",
  description: "Use simple travel planning tools to prepare for airport arrival, transport, money, SIM options, safety, and your first day abroad.",
  title: "Free Travel Planning Tools",
  intro: "Prepare for your arrival day with simple tools made for international travelers. Choose a tool, answer a few basic questions, and get practical guidance you can use before your trip.",
  faqs: [
    { question: "Are these travel tools free?", answer: "Yes. The tools are free to use, do not require signup, and do not have a paywall." },
    { question: "Do the tools save my answers?", answer: "No. Your choices are only used to prepare the suggestion you see on the page." },
    { question: "Are these tools a replacement for official travel advice?", answer: "No. They are planning helpers. Always confirm entry rules, transport details, prices, safety information, and local requirements through official sources before travel." },
    { question: "Do the tools use live prices or exchange rates?", answer: "No. The money tool uses the estimates you enter. Confirm current prices and exchange details before you travel." }
  ]
};

export const travelTools: TravelTool[] = [
  {
    slug: "first-24-hours-travel-planner",
    title: "First 24 Hours Travel Planner",
    seoTitle: "First 24 Hours Travel Planner | Free Arrival Day Tool",
    description: "Plan your first 24 hours abroad with a free travel planner for airport arrival, SIM setup, money, transport, check-in, food, and rest.",
    bestFor: "First-time visitors, solo travelers, families, and late-night arrivals.",
    category: "Arrival planning",
    intro: "Use this planner to turn a vague arrival day into a short, realistic sequence. Choose your arrival conditions and it will create a simple first-day plan you can copy before you fly.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "first24",
    buttonLabel: "Plan my first day",
    fields: [
      { id: "arrivalTime", label: "What time do you arrive?", type: "select", options: ["morning", "afternoon", "evening", "late night"], defaultValue: "afternoon", required: true, help: "Choose the closest time of day." },
      { id: "travelerType", label: "Who are you traveling with?", type: "select", options: ["solo", "couple", "family", "business traveler"], defaultValue: "solo", required: true },
      { id: "internetStatus", label: "Will you have internet after landing?", type: "select", options: ["already have SIM/eSIM", "need internet after landing", "not sure"], defaultValue: "not sure", required: true },
      { id: "moneyStatus", label: "How will you pay on arrival?", type: "select", options: ["have local cash", "card only", "need ATM/exchange"], defaultValue: "card only", required: true },
      { id: "accommodation", label: "Where is your first stay?", type: "select", options: ["near airport", "city center", "unknown"], defaultValue: "city center", required: true },
      { id: "energy", label: "How much energy do you expect to have?", type: "select", options: ["low", "normal", "high"], defaultValue: "normal", required: true }
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
    bestFor: "Travelers comparing taxis, trains, buses, ride apps, and transfers.",
    category: "Airport transport",
    intro: "Airport transport is easier when you compare the whole journey, not just the cheapest fare. This helper suggests practical options based on timing, bags, budget, and comfort.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "transport",
    buttonLabel: "Compare options",
    fields: [
      { id: "arrivalTime", label: "What time do you arrive?", type: "select", options: ["daytime", "evening", "late night"], defaultValue: "daytime", required: true },
      { id: "luggage", label: "How much luggage will you have?", type: "select", options: ["light", "medium", "heavy"], defaultValue: "medium", required: true },
      { id: "travelerType", label: "Who is traveling?", type: "select", options: ["solo", "family", "business", "group"], defaultValue: "solo", required: true },
      { id: "budget", label: "How flexible is your transport budget?", type: "select", options: ["low", "medium", "flexible"], defaultValue: "medium", required: true },
      { id: "publicComfort", label: "How comfortable are you with public transport?", type: "select", options: ["comfortable", "unsure", "not comfortable"], defaultValue: "unsure", required: true },
      { id: "directDrop", label: "Do you want to be dropped at your hotel door?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true }
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
    bestFor: "Travelers choosing between roaming, eSIMs, local SIMs, and airport Wi-Fi.",
    category: "Internet setup",
    intro: "Use this finder to choose a sensible travel internet option without live prices or confusing plan comparisons. It focuses on arrival-day practicality.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "internet",
    buttonLabel: "Show travel tips",
    fields: [
      { id: "esim", label: "Does your phone support eSIM?", type: "select", options: ["yes", "no", "not sure"], defaultValue: "not sure", required: true },
      { id: "tripLength", label: "How long is your trip?", type: "select", options: ["1–3 days", "4–7 days", "more than 1 week"], defaultValue: "4–7 days", required: true },
      { id: "calls", label: "Do you need local calls?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "maps", label: "Will you mainly use maps and messaging?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "before", label: "Do you want internet ready before landing?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "buyAfter", label: "Are you comfortable buying a SIM after arrival?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true }
    ],
    howItHelps: ["Suggests eSIM, local SIM, roaming, or airport Wi-Fi first.", "Explains who the option suits and what to watch out for.", "Avoids live price claims and keeps the advice evergreen."],
    advice: { heading: "Test before leaving the airport", paragraphs: ["Whatever option you choose, test maps and messaging before you walk away from airport Wi-Fi or a staffed counter.", "Do not delete an eSIM while abroad unless the provider confirms it can be reinstalled. Keep your home SIM safe if you remove it."] },
    faqs: [
      { question: "Is an eSIM better than a local SIM?", answer: "An eSIM is convenient for setup before landing, while a local SIM may suit longer stays or local calls. Phone support and trip needs decide the answer." },
      { question: "Should I use roaming?", answer: "Roaming can be simplest for a short trip if your home plan is reasonable. Check fees and data limits before turning on data roaming." },
      { question: "What if my phone may not support eSIM?", answer: "Use airport Wi-Fi first, confirm phone compatibility, then compare roaming or a physical local SIM." },
      { question: "Does this tool show current SIM prices?", answer: "No. It does not show live prices. Confirm current plans and availability before buying." }
    ],
    relatedGuides: ["/travel-basics/sim-card-vs-esim/", "/travel-basics/offline-travel-documents-checklist/", "/travel-basics/no-phone-signal-after-landing/", "/travel-basics/plan-your-first-24-hours-abroad/"]
  },
  {
    slug: "offline-travel-documents-checklist",
    title: "Offline Travel Documents Checklist Generator",
    seoTitle: "Offline Travel Documents Checklist | Free Travel Prep Tool",
    description: "Create a simple offline travel documents checklist for passport copies, bookings, insurance, emergency contacts, maps, and arrival details.",
    bestFor: "Travelers preparing important documents before departure.",
    category: "Document prep",
    intro: "This checklist generator helps you see what is already saved offline and what still needs attention before departure.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "documents",
    buttonLabel: "Create checklist",
    canPrint: true,
    fields: [
      { id: "documents", label: "What have you already saved for your trip?", type: "checkbox", options: ["Passport copy", "Visa or ETA approval", "Flight booking", "Boarding pass", "Hotel booking", "Hotel address", "Travel insurance", "Emergency contacts", "Local emergency number", "Embassy or consulate contact", "Offline map", "Airport-to-hotel route", "SIM/eSIM instructions", "Bank support contact", "Important medical notes"], help: "Select only the items you already have ready." }
    ],
    howItHelps: ["Separates completed offline items from missing ones.", "Creates a short final preparation note.", "Includes copy and print options for a practical pre-trip list."],
    advice: { heading: "Privacy note", paragraphs: ["This page only uses your selections to prepare the checklist you see. Avoid entering sensitive passport, banking, medical, or booking details into travel planning notes you do not trust.", "Keep offline copies secure with a device lock and a sensible backup outside the phone you carry in your hand."] },
    faqs: [
      { question: "Do I need every item on the checklist?", answer: "Not every trip needs every item, but passport copies, bookings, insurance, emergency contacts, maps, and your first address are useful for most international arrivals." },
      { question: "Should I print offline documents?", answer: "A small paper backup can help if a phone dies, but keep sensitive papers secure and do not carry more personal data than needed." },
      { question: "Are digital copies accepted at immigration?", answer: "Usually copies are only supporting information, not replacements for original documents or official approvals." },
      { question: "Does this tool store my checklist?", answer: "No. Your selections are only used to prepare the checklist shown on the page." }
    ],
    relatedGuides: ["/travel-basics/offline-travel-documents-checklist/", "/travel-basics/first-international-trip-checklist/", "/travel-basics/travel-safety-basics/", "/travel-basics/arriving-late-at-night/"]
  },
  {
    slug: "first-day-travel-money-estimator",
    title: "First-Day Travel Money Estimator",
    seoTitle: "First-Day Travel Money Estimator | Free Arrival Budget Tool",
    description: "Estimate simple first-day travel money needs for airport transport, food, SIM, small purchases, and emergency backup after landing.",
    bestFor: "Travelers planning a simple first-day money buffer.",
    category: "Travel money",
    intro: "Use your own estimated amounts to build a first-day money buffer. This is not a currency converter and does not fetch live exchange rates.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "money",
    buttonLabel: "Estimate my first-day money",
    fields: [
      { id: "currency", label: "What currency are you estimating in?", type: "text", defaultValue: "USD", placeholder: "USD, EUR, LKR, JPY", required: true },
      { id: "transport", label: "Estimated airport transport cost", type: "number", defaultValue: "40", min: "0", step: "0.01", required: true },
      { id: "meal", label: "Estimated first meal cost", type: "number", defaultValue: "20", min: "0", step: "0.01", required: true },
      { id: "sim", label: "Estimated SIM or eSIM cost", type: "number", defaultValue: "15", min: "0", step: "0.01", required: true },
      { id: "small", label: "Estimated small purchases", type: "number", defaultValue: "15", min: "0", step: "0.01", required: true },
      { id: "backup", label: "Backup amount for surprises", type: "number", defaultValue: "50", min: "0", step: "0.01", required: true }
    ],
    howItHelps: ["Adds your own arrival-day estimates into one simple total.", "Suggests a practical cash/card split without claiming destination prices.", "Reminds you to keep backup payment options separate."],
    advice: { heading: "Use your own estimates", paragraphs: ["This tool is not a live currency converter. Enter amounts in the currency you plan to use and confirm current local costs before travel.", "For the first 24 hours, aim for enough money to leave the airport, eat, connect, check in, and handle one small backup."] },
    faqs: [
      { question: "Does this estimate real country costs?", answer: "No. You enter your own estimates. The tool only adds them and suggests how to think about cash, card, and backup money." },
      { question: "How much cash should I carry on arrival?", answer: "Carry enough for small purchases and any cash-only transport, but avoid carrying more than you can protect." },
      { question: "Should I use card or cash first?", answer: "Use both where practical. Cards are convenient, while a small cash reserve helps when terminals, apps, or foreign cards fail." },
      { question: "Does this tool save my budget?", answer: "No. Your estimates are only used to prepare the result shown on the page." }
    ],
    relatedGuides: ["/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/money-first-24-hours-abroad/", "/travel-basics/airport-taxi-scams/", "/travel-basics/plan-your-first-24-hours-abroad/"]
  },
  {
    slug: "late-night-arrival-planner",
    title: "Late-Night Arrival Safety Planner",
    seoTitle: "Late-Night Arrival Safety Planner | Free Travel Arrival Tool",
    description: "Plan a safer late-night arrival abroad with simple advice for transport, accommodation, internet, money, and first-night decisions.",
    bestFor: "Travelers landing after dark or after midnight.",
    category: "Late arrivals",
    intro: "A late arrival is easier when the next steps are already plain. This planner gives calm priorities for transport, check-in, connectivity, money, and first-night choices.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "lateNight",
    buttonLabel: "Plan my late arrival",
    fields: [
      { id: "arrivalTime", label: "How late do you arrive?", type: "select", options: ["after 8 PM", "after midnight", "early morning"], defaultValue: "after 8 PM", required: true },
      { id: "alone", label: "Are you traveling alone?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "accommodation", label: "Is your first stay confirmed?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "transport", label: "Have you arranged transport?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "internet", label: "Will your phone work after landing?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "cash", label: "Will you have some local cash?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "address", label: "Have you saved your hotel address?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true }
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
    bestFor: "Travelers packing carry-on essentials for arrival day.",
    category: "Packing",
    intro: "This is not a full-trip packing list. It focuses on the items that make the first day abroad easier if checked luggage is delayed or you arrive tired.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "packing",
    buttonLabel: "Create checklist",
    canPrint: true,
    fields: [
      { id: "items", label: "Which arrival essentials will you pack?", type: "checkbox", options: ["Documents", "Phone and charger", "Power bank", "Local cash or card", "Medication", "Light snacks", "Water bottle", "Hotel address", "Transport details", "Change of clothes", "Basic toiletries", "Pen", "Travel adapter"], help: "Choose the items you plan to keep easy to reach." }
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
    bestFor: "Travelers who want a calm first-day schedule.",
    category: "Itinerary",
    intro: "Build a low-stress first-day itinerary that leaves space for real arrival conditions. The goal is to reach the next morning rested and oriented.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "itinerary",
    buttonLabel: "Plan my first day",
    fields: [
      { id: "arrivalTime", label: "What time do you arrive?", type: "select", options: ["morning", "afternoon", "evening", "late night"], defaultValue: "afternoon", required: true },
      { id: "checkin", label: "What time can you check in?", type: "text", defaultValue: "3:00 PM", required: true },
      { id: "energy", label: "How much energy do you expect to have?", type: "select", options: ["low", "normal", "high"], defaultValue: "normal", required: true },
      { id: "transportConfidence", label: "How confident are you with local transport?", type: "select", options: ["comfortable", "unsure", "not comfortable"], defaultValue: "unsure", required: true },
      { id: "activity", label: "Do you want one light activity?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true },
      { id: "rest", label: "Do you need extra rest?", type: "select", options: ["yes", "no"], defaultValue: "yes", required: true }
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
  },
  {
    slug: "airport-layover-comfort-planner",
    title: "Airport Layover Comfort Planner",
    seoTitle: "Airport Layover Comfort Planner | Free Travel Tool",
    description: "Plan a more comfortable airport layover with simple tips for rest, food, luggage, workspace, airport exits, and connection timing.",
    bestFor: "Travelers with airport connections, long waits, or uncertain transit plans.",
    category: "Airport comfort",
    intro: "Use this planner to make an airport layover feel less improvised. It suggests whether to stay airside, what to check before moving around, and how to use the waiting time without creating avoidable stress.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "layover",
    buttonLabel: "Plan my layover",
    fields: [
      { id: "layoverLength", label: "How long is your layover?", type: "select", options: ["under 3 hours", "3–6 hours", "6–10 hours", "over 10 hours"], defaultValue: "3–6 hours", required: true },
      { id: "connectionType", label: "What type of connection is it?", type: "select", options: ["domestic", "international", "not sure"], defaultValue: "not sure", required: true },
      { id: "baggage", label: "What is your baggage situation?", type: "select", options: ["checked through", "carrying luggage", "not sure"], defaultValue: "checked through", required: true },
      { id: "energy", label: "How do you expect to feel?", type: "select", options: ["tired", "normal", "energetic"], defaultValue: "normal", required: true },
      { id: "leaveAirport", label: "Do you want to leave the airport?", type: "select", options: ["yes", "no", "not sure"], defaultValue: "not sure", required: true },
      { id: "mainNeed", label: "What do you need most?", type: "select", options: ["rest", "food", "shower", "work", "walking", "quiet place"], defaultValue: "rest", required: true },
      { id: "travelType", label: "Who is traveling?", type: "select", options: ["solo", "couple", "family", "business traveler"], defaultValue: "solo", required: true }
    ],
    howItHelps: ["Suggests whether staying inside the airport is wiser than leaving transit.", "Turns waiting time into simple blocks for rest, food, work, walking, or quiet recovery.", "Lists the checks to make before changing terminals, exiting the airport, or relaxing too far from your gate."],
    advice: { heading: "Keep layovers conservative", paragraphs: ["Layovers are easiest when you protect the next flight first. Food, rest, showers, and short walks are useful only if gate, baggage, security, immigration, and boarding timing remain clear.", "This tool does not provide airport-specific immigration, visa, or transit advice. Confirm official airport, airline, immigration, and visa rules before leaving a transit area or airport."] },
    faqs: [
      { question: "Should I leave the airport during a layover?", answer: "Only consider it when the layover is long enough, baggage is handled, re-entry rules are clear, and official immigration or transit requirements allow it." },
      { question: "What should I do during a short layover?", answer: "Prioritize the next gate, restroom, water, a simple snack, and staying near your departure area." },
      { question: "Is a long layover good for sightseeing?", answer: "Sometimes, but it depends on official entry rules, airport distance, traffic, luggage, and your energy. A paid lounge or airport hotel may be calmer." },
      { question: "Does this tool check visa or airport rules?", answer: "No. It gives general planning guidance only. Confirm official rules for your exact route before leaving transit." }
    ],
    relatedGuides: ["/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/arriving-late-at-night/", "/travel-basics/travel-safety-basics/", "/tools/first-24-hours-travel-planner/", "/tools/airport-transport-helper/"]
  },
  {
    slug: "travel-adapter-charging-checklist",
    title: "Travel Adapter & Charging Checklist",
    seoTitle: "Travel Adapter & Charging Checklist | Free Travel Tool",
    description: "Create a simple travel charging checklist for adapters, cables, power banks, laptops, phones, and airport waiting time.",
    bestFor: "Travelers packing phone, laptop, camera, and charging essentials.",
    category: "Travel preparation",
    intro: "Use this checklist to avoid the small charging problems that become big arrival-day problems: missing cables, low battery, no adapter, or a power bank packed where you cannot reach it.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "charging",
    buttonLabel: "Create charging checklist",
    canPrint: true,
    fields: [
      { id: "devices", label: "Which devices are you bringing?", type: "checkbox", options: ["phone", "laptop", "tablet", "camera", "smartwatch", "headphones"], help: "Choose the devices you want to keep charged during travel." },
      { id: "tripType", label: "What type of trip is it?", type: "select", options: ["short trip", "long trip", "business trip", "family trip"], defaultValue: "short trip", required: true },
      { id: "airportWait", label: "Will you have long airport waiting time?", type: "select", options: ["yes", "no"], defaultValue: "no", required: true },
      { id: "powerBank", label: "Do you need a power bank?", type: "select", options: ["yes", "no", "not sure"], defaultValue: "not sure", required: true },
      { id: "stayType", label: "Where are you staying?", type: "select", options: ["hotel", "hostel", "apartment", "mixed/not sure"], defaultValue: "hotel", required: true },
      { id: "workNeeds", label: "How much work charging do you need?", type: "select", options: ["no work", "light work", "heavy work"], defaultValue: "light work", required: true },
      { id: "travelers", label: "How many travelers are sharing chargers?", type: "select", options: ["1", "2", "3", "4+"], defaultValue: "1", required: true }
    ],
    howItHelps: ["Creates a must-have and nice-to-have charging list.", "Reminds you what should stay in carry-on for airports and arrival day.", "Keeps adapter advice honest by telling you what to confirm instead of guessing plug types."],
    advice: { heading: "Confirm plug type and voltage before departure", paragraphs: ["This tool does not claim destination plug types or voltage. Check your destination's plug type, voltage, and your device charger labels before you pack.", "Power banks and spare batteries are often restricted to cabin baggage and may have capacity limits. Confirm airline and airport rules before travel."] },
    faqs: [
      { question: "What charging items should I pack for international travel?", answer: "Pack the right travel adapter, device cables, wall charger, power bank where allowed, and any laptop or camera chargers you cannot easily replace." },
      { question: "Can I pack a power bank in checked luggage?", answer: "Many airlines require power banks in cabin baggage and set capacity limits. Confirm your airline and route rules before packing." },
      { question: "Does this tool tell me the plug type for a country?", answer: "No. It reminds you to confirm the plug type and voltage for your destination through reliable sources." },
      { question: "Should I bring extra cables?", answer: "For essential devices, one spare cable is useful, especially when you rely on your phone for maps, boarding passes, and hotel details." }
    ],
    relatedGuides: ["/travel-basics/first-international-trip-checklist/", "/travel-basics/offline-travel-documents-checklist/", "/travel-basics/no-phone-signal-after-landing/", "/tools/offline-travel-documents-checklist/", "/tools/sim-esim-roaming-finder/"]
  },
  {
    slug: "hotel-address-card-generator",
    title: "Airport to Hotel Address Card Generator",
    seoTitle: "Airport to Hotel Address Card Generator | Free Travel Tool",
    description: "Create a simple hotel address card to copy or print before arrival, including accommodation address, phone, landmark, and notes.",
    bestFor: "Travelers who want one clear address card for airport transport and check-in.",
    category: "Arrival preparation",
    intro: "Create a simple address card you can copy, screenshot, or print before arrival. It keeps your first-night address, phone number, landmark, and transport note in one clean place.",
    lastUpdated: updated,
    readingTime: "4 min read",
    toolType: "addressCard",
    buttonLabel: "Create address card",
    canPrint: true,
    fields: [
      { id: "accommodationName", label: "Accommodation name", type: "text", placeholder: "Hotel, hostel, apartment, or guesthouse name", required: true },
      { id: "accommodationAddress", label: "Accommodation address", type: "text", placeholder: "Full street address", required: true },
      { id: "phone", label: "Accommodation phone", type: "text", placeholder: "+00 ..." },
      { id: "checkin", label: "Check-in time", type: "text", placeholder: "Example: 3:00 PM" },
      { id: "bookingRef", label: "Booking reference", type: "text", placeholder: "Optional" },
      { id: "landmark", label: "Nearby landmark", type: "text", placeholder: "Station, mall, temple, street, or gate" },
      { id: "city", label: "Destination city", type: "text", placeholder: "City or district" },
      { id: "driverNotes", label: "Notes for driver or staff", type: "text", placeholder: "Example: Please use official hotel entrance" },
      { id: "emergencyContactName", label: "Emergency contact name", type: "text", placeholder: "Optional trusted contact" },
      { id: "emergencyContactPhone", label: "Emergency contact phone", type: "text", placeholder: "Optional phone number" }
    ],
    howItHelps: ["Creates one clean address card for airport transport, hotel reception, or offline notes.", "Avoids relying only on a map pin when your phone signal or battery is uncertain.", "Keeps optional sensitive details under your control."],
    advice: { heading: "Use only the details you are comfortable saving", paragraphs: ["Accommodation name and address are the most important fields. Do not enter private booking, passport, payment, or emergency details unless you are comfortable storing them in your own browser view, notes, screenshot, or printout.", "Show this address to official airport transport staff if needed, and confirm the route through your accommodation or an official transport desk when uncertain."] },
    faqs: [
      { question: "What should I include on a hotel address card?", answer: "Include accommodation name, full address, phone number, destination city, nearby landmark, check-in time, and a short note for transport staff if useful." },
      { question: "Should I print my hotel address?", answer: "A small printed backup can help when your phone battery, signal, or language support fails. Keep it secure and avoid unnecessary sensitive details." },
      { question: "Can I show this card to airport transport staff?", answer: "Yes. Show the address to official airport transport staff if needed, then keep the card private once you no longer need it." },
      { question: "Does this tool save my hotel details?", answer: "No. The card is generated in your browser view only. Your answers are not saved or sent anywhere by this site." }
    ],
    relatedGuides: ["/travel-basics/offline-travel-documents-checklist/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/arriving-late-at-night/", "/tools/offline-travel-documents-checklist/", "/tools/late-night-arrival-planner/", "/tools/airport-transport-helper/"]
  },
  {
    slug: "first-time-traveler-confidence-checker",
    title: "First-Time Traveler Confidence Checker",
    seoTitle: "First-Time Traveler Confidence Checker | Free Travel Readiness Tool",
    description: "Check if you are ready for your first international trip with a simple travel readiness score and priority preparation steps.",
    bestFor: "First-time international travelers checking readiness before departure.",
    category: "Travel readiness",
    intro: "Use this checker to see which basic preparation items are already handled and which deserve attention before your first international trip.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "confidence",
    buttonLabel: "Check my readiness",
    fields: [
      { id: "readiness", label: "Which items have you completed?", type: "checkbox", options: ["Passport checked", "Visa/ETA/entry rule checked", "Flight details saved", "Accommodation confirmed", "Airport transport planned", "Internet plan ready", "Money plan ready", "Travel documents saved offline", "Emergency contacts saved", "Travel insurance considered", "First-day plan prepared", "Important medication packed", "Phone charger and adapter packed", "Local customs reviewed"], help: "Select only the items you have already handled." }
    ],
    howItHelps: ["Creates a simple readiness score out of 100.", "Highlights missing preparation items without making the process feel overwhelming.", "Suggests priority actions for documents, arrival planning, money, phone setup, and first-day confidence."],
    advice: { heading: "Use the score as a planning prompt", paragraphs: ["A readiness score is not official approval to travel. It is a simple way to notice gaps before they become arrival-day stress.", "This tool does not provide official visa, legal, immigration, health, or insurance advice. Confirm destination requirements through official sources for your nationality, route, and travel dates."] },
    faqs: [
      { question: "What score means I am ready for my first international trip?", answer: "A high score means the basics are in place, but you should still confirm official entry rules, transport details, and current requirements before departure." },
      { question: "What should first-time travelers prepare first?", answer: "Start with passport validity, entry rules, flight details, accommodation, insurance considerations, payment backup, and an arrival transport plan." },
      { question: "Does this replace official travel advice?", answer: "No. It is a preparation helper only. Confirm official destination and transit requirements before you travel." },
      { question: "Does the checker save my answers?", answer: "No. Your selections are only used to show the result on this page." }
    ],
    relatedGuides: ["/travel-basics/first-international-trip-checklist/", "/travel-basics/offline-travel-documents-checklist/", "/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/travel-safety-basics/", "/tools/first-24-hours-travel-planner/", "/tools/offline-travel-documents-checklist/", "/tools/first-day-packing-checklist/"]
  },
  {
    slug: "arrival-day-walking-distance-helper",
    title: "Arrival Day Walking Distance Helper",
    seoTitle: "Arrival Day Walking Distance Helper | Free Luggage Walk Tool",
    description: "Check whether a planned walk with luggage is reasonable on arrival day based on distance, bags, time, weather, and energy level.",
    bestFor: "Travelers deciding whether to walk from a station, stop, or nearby airport hotel with bags.",
    category: "Arrival transport",
    intro: "A walk that looks short on a map can feel very different with luggage, heat, rain, stairs, jet lag, or a dark final street. This helper keeps the decision practical and calm.",
    lastUpdated: updated,
    readingTime: "5 min read",
    toolType: "walking",
    buttonLabel: "Check walking plan",
    fields: [
      { id: "distance", label: "Planned walking distance", type: "select", options: ["under 500m", "500m–1km", "1–2km", "over 2km"], defaultValue: "500m–1km", required: true },
      { id: "luggage", label: "How much luggage will you carry?", type: "select", options: ["backpack only", "small suitcase", "large suitcase", "multiple bags"], defaultValue: "small suitcase", required: true },
      { id: "arrivalTime", label: "When will you walk?", type: "select", options: ["daytime", "evening", "late night"], defaultValue: "daytime", required: true },
      { id: "weather", label: "Weather condition", type: "select", options: ["normal", "hot", "rainy", "cold", "not sure"], defaultValue: "not sure", required: true },
      { id: "travelerType", label: "Who is traveling?", type: "select", options: ["solo", "couple", "family", "senior traveler", "business traveler"], defaultValue: "solo", required: true },
      { id: "energy", label: "How much energy will you have?", type: "select", options: ["low", "normal", "high"], defaultValue: "normal", required: true },
      { id: "familiarity", label: "How familiar is the area?", type: "select", options: ["know the area", "first time", "not sure"], defaultValue: "first time", required: true }
    ],
    howItHelps: ["Gives a calm recommendation: walking seems reasonable, consider transport, or avoid walking if possible.", "Explains how luggage, distance, darkness, weather, and energy change the decision.", "Suggests simple alternatives without turning the advice into fear-based messaging."],
    advice: { heading: "Map distance is not the same as arrival-day effort", paragraphs: ["A short walk can be fine when it is bright, flat, familiar, and luggage is light. The same distance can be frustrating after a long flight or in bad weather.", "Use this as a comfort and safety prompt, then confirm the actual route, sidewalks, station exits, stairs, and local conditions before you go."] },
    faqs: [
      { question: "How far is reasonable to walk with luggage after landing?", answer: "It depends on bags, weather, surface, daylight, energy, and route clarity. Under one kilometer can be fine in good conditions; longer or darker routes deserve more caution." },
      { question: "Should I walk from a station to my hotel at night?", answer: "Only if the route is clear, short, well lit, and you feel steady. Otherwise use a verified taxi, ride-hailing pickup, hotel transfer, or public transport connection." },
      { question: "Is this tool meant to scare travelers?", answer: "No. It is designed to keep arrival-day walking realistic, especially when luggage and fatigue change what a map suggests." },
      { question: "What should I check before walking?", answer: "Check route lighting, sidewalks, stairs, weather, final entrance, luggage weight, phone battery, and one backup transport option." }
    ],
    relatedGuides: ["/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/arriving-late-at-night/", "/travel-basics/travel-safety-basics/", "/tools/airport-transport-helper/", "/tools/late-night-arrival-planner/", "/tools/first-day-itinerary-builder/"]
  }
];

export function hrefForTool(tool: TravelTool) {
  return `/tools/${tool.slug}/`;
}

export function toolUrl(tool: TravelTool) {
  return new URL(hrefForTool(tool), site.url).toString();
}
