export const site = {
  name: "EZ Roam Guide",
  url: "https://ezroamguide.com",
  description: "Simple travel guides for your first day in a new place.",
  email: "ezroamguide@gmail.com"
};

export type FAQ = { question: string; answer: string };
export type GuideSection = { id: string; heading: string; paragraphs: string[] };
export type OfficialSource = { label: string; href: string };

export type Guide = {
  kind: "country" | "city" | "basic";
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  label: string;
  eyebrow: string;
  intro: string;
  lastUpdated: string;
  readingTime: string;
  quick: string[];
  sections: GuideSection[];
  checklist?: string[];
  mistakes?: string[];
  faqs: FAQ[];
  related: string[];
  officialSources?: OfficialSource[];
};

const updated = "June 25, 2026";

const countryBlueprints = [
  {
    slug: "sri-lanka-first-24-hours",
    name: "Sri Lanka",
    city: "Colombo",
    airport: "Bandaranaike International Airport",
    transport: "Use the official taxi counter, a reputable app-based ride, or a pre-arranged hotel transfer. The airport is outside central Colombo, so allow time for traffic.",
    internet: "Airport SIM desks are convenient, but compare the included data and validity rather than choosing by headline price. Coverage is generally useful on the main travel corridor.",
    money: "Sri Lankan rupees are needed for small shops, buses, and tuk-tuks. Withdraw a modest amount from a bank ATM and keep smaller notes.",
    local: "Trains and buses are inexpensive but can be crowded. For your first trip, app-based rides or metered taxis reduce negotiation while you learn local routes.",
    food: "Choose a busy, clean restaurant and begin gently if you are not used to spicy food. Sealed bottled water is the simplest first-day option.",
    safety: "Agree on a tuk-tuk price before departure when no meter is used. Be cautious with unsolicited tour, gem, or shopping detours.",
    etiquette: "Dress modestly at religious sites, remove shoes where requested, and never pose disrespectfully with Buddha images.",
    mistake: "Scheduling a long cross-island transfer immediately after landing; road distances often take longer than the map suggests."
  },
  {
    slug: "japan-first-24-hours",
    name: "Japan",
    city: "Tokyo",
    airport: "Narita or Haneda Airport",
    transport: "Choose your route by hotel location, not simply by the fastest advertised train. Airport rail, limousine buses, and taxis serve different districts and luggage needs.",
    internet: "An eSIM is often the quickest setup for an unlocked phone. Pocket Wi-Fi can suit groups, while airport Wi-Fi helps you make the initial connection.",
    money: "Cards are widely useful, but cash still matters at smaller restaurants, ticket machines, and rural businesses. Convenience-store ATMs are a practical backup.",
    local: "Load a compatible transit card or buy one through a supported mobile wallet. Keep your ticket or phone ready when changing between rail operators.",
    food: "Convenience stores are dependable for a simple first meal and drinks. At small restaurants, check whether ordering happens at a vending machine near the entrance.",
    safety: "Japan is generally orderly, but tired travelers still lose bags and phones. Keep track of belongings during crowded transfers and last-train rushes.",
    etiquette: "Queue neatly, keep calls quiet on public transport, and follow local rules about eating while walking.",
    mistake: "Assuming every train marked for the city stops near your accommodation; express patterns and operators matter."
  },
  {
    slug: "thailand-first-24-hours",
    name: "Thailand",
    city: "Bangkok",
    airport: "Suvarnabhumi or Don Mueang Airport",
    transport: "Use the airport rail link where it fits your district, the official taxi queue, or a licensed app-based ride. Confirm the correct airport before arranging pickup.",
    internet: "Tourist SIM and eSIM options are easy to find. Check whether hotspot use is included if you plan to connect a laptop or another traveler.",
    money: "Carry Thai baht for markets, street food, and small transport fares. ATM fees can make frequent small withdrawals poor value.",
    local: "Bangkok's rail systems avoid road congestion, while river boats can be useful along the Chao Phraya. Taxis should use the meter when available.",
    food: "Busy food courts are an easy first-day choice. Drink sealed or properly filtered water and tell vendors clearly if you need less spice.",
    safety: "Decline claims that a major attraction is closed unless you verify it yourself. Avoid tuk-tuk itineraries built around commission-paying shops.",
    etiquette: "Treat temples respectfully, cover shoulders and knees where required, and avoid touching anyone's head.",
    mistake: "Trying to cross Bangkok repeatedly on arrival day; cluster your first errands around one neighborhood."
  },
  {
    slug: "singapore-first-24-hours",
    name: "Singapore",
    city: "Singapore",
    airport: "Changi Airport",
    transport: "The MRT is efficient if it is operating and your luggage is manageable. Taxis and licensed ride services are straightforward for late arrivals or door-to-door travel.",
    internet: "Airport Wi-Fi is strong enough for setup. An eSIM is convenient, while local prepaid plans may suit longer stays after registration.",
    money: "Contactless payment works in many places, including much of the transport network, but a little Singapore-dollar cash is useful at some hawker stalls.",
    local: "The MRT and buses are clean and clearly signed. Tap with the same card or device at entry and exit so fares calculate correctly.",
    food: "Hawker centres are ideal for a first meal: look for displayed prices, return trays where required, and keep tissues for informal seat-saving customs.",
    safety: "Street crime is relatively low, but local laws are enforced. Do not assume rules about vaping, medication, alcohol, or public behavior match home.",
    etiquette: "Queue, keep shared spaces tidy, and respect reserved seating on transport.",
    mistake: "Packing restricted products without checking Singapore's official rules, especially vaping items and controlled medicines."
  },
  {
    slug: "united-arab-emirates-first-24-hours",
    name: "United Arab Emirates",
    city: "Dubai",
    airport: "Dubai, Abu Dhabi, or another emirate's airport",
    transport: "Match the airport to your destination emirate before booking onward travel. Metro, official taxis, and arranged transfers are reliable, but cross-emirate trips can be long.",
    internet: "Free airport Wi-Fi covers initial needs. Compare local SIM and eSIM plans carefully, particularly voice-app access and data allowances.",
    money: "Cards are accepted widely, though dirham cash remains useful for small purchases and tips. Use bank ATMs and decline unnecessary currency conversion.",
    local: "Dubai has a useful metro; elsewhere, buses and taxis may be more practical. Distances between landmarks can be larger than they appear.",
    food: "Malls and established restaurants provide easy, air-conditioned first meals. Hydrate steadily, especially after a long flight into hot weather.",
    safety: "The UAE is generally secure, but laws on medication, online conduct, photography, and public behavior deserve careful attention.",
    etiquette: "Dress respectfully in public places, ask before photographing people, and be especially considerate during Ramadan.",
    mistake: "Treating Dubai and Abu Dhabi as neighboring city districts rather than separate destinations requiring real transfer time."
  },
  {
    slug: "malaysia-first-24-hours",
    name: "Malaysia",
    city: "Kuala Lumpur",
    airport: "Kuala Lumpur International Airport or a regional gateway",
    transport: "From KLIA, rail is predictable while airport buses cost less and taxis or ride services help with luggage. Check your terminal before meeting a driver.",
    internet: "Local prepaid data is competitive, but registration is required. An eSIM saves counter time if your phone supports it.",
    money: "Cards work in malls and hotels; ringgit cash is useful at food stalls and smaller shops. Keep small notes for everyday purchases.",
    local: "Kuala Lumpur combines rail, buses, and app-based rides. Covered walkways help in heat and rain, but some short map distances are awkward on foot.",
    food: "Food courts and busy kopitiams make comfortable introductions to local food. Tap water quality and building plumbing vary, so many visitors prefer filtered or bottled water.",
    safety: "Watch phones and bags in crowded areas and verify the vehicle plate before entering a booked ride.",
    etiquette: "Use the right hand when giving or receiving items, dress modestly at mosques, and remove shoes in homes and some places of worship.",
    mistake: "Underestimating tropical rain and planning every transfer on foot without a covered alternative."
  },
  {
    slug: "indonesia-first-24-hours",
    name: "Indonesia",
    city: "Bali",
    airport: "your Indonesian port of entry",
    transport: "Use an official airport taxi desk, a permitted ride pickup point, or a transfer arranged by your accommodation. Pickup rules vary by airport.",
    internet: "Confirm that any SIM is properly registered for your device. An eSIM can reduce setup time, but coverage differs across islands.",
    money: "Use rupiah and count zeros carefully. Prefer ATMs attached to banks, shield your PIN, and avoid exchanging money at unusually generous rates.",
    local: "Transport differs sharply by island. In Bali, app-based rides and hired drivers are common; in large cities, rail or bus systems may be useful.",
    food: "Choose busy kitchens, wash hands, and use sealed water where local tap water is not considered drinkable.",
    safety: "Traffic is the most immediate risk for many visitors. Do not rent a scooter without the correct licence, insurance, helmet, and experience.",
    etiquette: "Dress modestly at temples, do not step on offerings, and use your right hand for polite exchanges.",
    mistake: "Assuming Bali represents transport, culture, and travel conditions across the entire Indonesian archipelago."
  },
  {
    slug: "vietnam-first-24-hours",
    name: "Vietnam",
    city: "Ho Chi Minh City",
    airport: "your arrival airport",
    transport: "Use the official taxi rank, a recognized ride app, or a confirmed transfer. Screenshot your address because many streets have similar names.",
    internet: "Local data is inexpensive, but buy from an identifiable provider counter and confirm activation before leaving.",
    money: "Vietnamese dong uses large denominations. Separate notes, check the number of zeros, and keep smaller cash for food and short rides.",
    local: "Ride-hailing is practical in major cities. When crossing streets, move predictably, use crossings where possible, and avoid sudden changes of direction.",
    food: "Choose busy stalls with high turnover, drink sealed water, and ease into raw herbs or ice if your stomach is sensitive.",
    safety: "Keep phones away from the road edge and bags on the side away from traffic to reduce snatch-theft opportunities.",
    etiquette: "Speak calmly, dress respectfully at religious sites, and avoid public confrontation when resolving a misunderstanding.",
    mistake: "Holding a phone loosely beside moving traffic while navigating or waiting for a ride."
  },
  {
    slug: "turkey-first-24-hours",
    name: "Turkey",
    city: "Istanbul",
    airport: "Istanbul, Sabiha Gökçen, or another Turkish airport",
    transport: "Istanbul's airports are far apart. Use airport buses, metro connections, official taxis, or a booked transfer based on your exact district and arrival time.",
    internet: "Airport offers can be convenient but costly. Compare city options if you can manage the transfer using Wi-Fi or an eSIM.",
    money: "Prices and exchange conditions can change. Carry some Turkish lira, use bank ATMs, and check the bill before approving card payment.",
    local: "An Istanbul transport card simplifies metro, tram, ferry, and bus travel. Ferries can be both practical and less stressful than road traffic.",
    food: "A soup, pide, or simple lokanta meal is gentle after a flight. Bottled water is widely available.",
    safety: "Confirm taxi routing, avoid informal currency exchange, and be wary of strangers steering you toward a particular bar or shop.",
    etiquette: "Remove shoes where requested, dress modestly in mosques, and avoid entering during prayer unless visitors are clearly welcomed.",
    mistake: "Booking accommodation on one side of Istanbul without considering airport, bridge, and rush-hour travel."
  },
  {
    slug: "india-first-24-hours",
    name: "India",
    city: "Delhi",
    airport: "your Indian port of entry",
    transport: "Use prepaid taxi counters, official apps, airport rail where available, or a hotel transfer. Keep the full address and a working phone number offline.",
    internet: "SIM activation can require identity checks and may not be instant. Arrive with offline maps and a backup way to contact your accommodation.",
    money: "Carry rupees in mixed denominations. Cards and instant payments are common in cities, but international visitors still benefit from cash for small transactions.",
    local: "Metro systems in major cities are efficient; roads can be intense and travel times variable. Use registered vehicles and verify number plates.",
    food: "Start with freshly cooked, piping-hot food and sealed water. A busy restaurant is a calmer first choice than an ambitious street-food tour.",
    safety: "Ignore unsolicited helpers at ticket machines and transport hubs. Solo travelers should share arrival details and use well-reviewed transport after dark.",
    etiquette: "Dress modestly at religious places, remove shoes where requested, and use the right hand for food and exchanges when practical.",
    mistake: "Trying to solve transport, SIM, currency, sightseeing, and an onward journey all within a few hours of a long flight."
  }
];

function countryGuide(d: typeof countryBlueprints[number]): Guide {
  const sections: GuideSection[] = [
    { id: "airport", heading: "Before you leave the airport", paragraphs: [`Finish the practical tasks you cannot easily redo: connect to Wi-Fi, save your accommodation address, check the pickup point, use the restroom, and confirm that your baggage has arrived. At ${d.airport}, follow official signs rather than accepting the first offer in the arrivals hall.`, "Keep your passport and arrival documents secure but accessible until all formalities are complete. Take a screenshot of any entry record or transport booking you may need offline."] },
    { id: "internet", heading: "Internet, SIM, and eSIM basics", paragraphs: [d.internet, "Test mobile data, maps, and messaging before walking away from a staffed counter. Keep your home SIM safe, and understand whether receiving calls or texts could trigger roaming charges."] },
    { id: "airport-transport", heading: "Airport to city transport", paragraphs: [d.transport, "Compare the total trip, including waiting, changes, luggage, and the walk at the destination. After a long flight, the cheapest route is not always the easiest or safest one."] },
    { id: "money", heading: "Money, cards, and cash", paragraphs: [d.money, "Carry at least two payment methods separately. When a terminal or ATM offers to charge in your home currency, the local-currency option is often clearer, but check your bank's fees."] },
    { id: "local-transport", heading: "Local transport basics", paragraphs: [d.local, "Save your accommodation as a favorite in your map app. Download an offline area and learn the name of the nearest station, landmark, or major road."] },
    { id: "food", heading: "Food, water, and first-day comfort", paragraphs: [d.food, "Jet lag can disguise dehydration and poor judgment. Eat something simple, drink water, shower, and postpone demanding plans until you know how you feel."] },
    { id: "safety", heading: "Safety and common scams", paragraphs: [d.safety, "A calm pause is useful when someone creates urgency. Verify closures, fares, and booking problems through an official desk, app, or your accommodation rather than relying on a stranger's alternative."] },
    { id: "etiquette", heading: "Local etiquette", paragraphs: [d.etiquette, "Observe before acting, especially in places of worship, queues, homes, and shared transport. A quiet apology and willingness to follow a local cue usually matter more than perfect knowledge."] }
  ];
  return {
    kind: "country", slug: d.slug, label: d.name, eyebrow: "Country arrival guide",
    title: `First 24 Hours in ${d.name}`,
    seoTitle: `First 24 Hours in ${d.name}: Arrival Guide | EZ Roam Guide`,
    description: `A practical first-day guide to ${d.name}, covering airport transport, SIMs, money, safety, etiquette, and a calm arrival plan.`,
    intro: `Landing in ${d.name} is easier when the first decisions are already simple. This guide takes you from the arrivals hall to a settled first evening, without turning day one into a race.`,
    lastUpdated: updated, readingTime: "10 min read",
    quick: [`Choose an official route from ${d.airport}.`, "Get connected before you need to navigate.", "Carry a small amount of local cash plus a backup card.", `Use ${d.city} as a gentle first base if it fits your itinerary.`, "Keep the first evening light and flexible."],
    sections,
    mistakes: [d.mistake, "Exchanging all your money at the first counter without comparing the rate.", "Leaving the airport without an offline address or transport plan.", "Letting a stranger redirect you to an unverified hotel, shop, or ticket office."],
    checklist: ["Clear immigration and check every bag", "Connect and save key details offline", "Arrange official onward transport", "Get a modest amount of local currency", "Message someone that you arrived", "Check in, hydrate, and eat a simple meal", "Confirm only the next morning's plan"],
    faqs: [
      { question: `Should I buy a SIM at the airport in ${d.name}?`, answer: "Airport purchase is convenient, especially when you need transport immediately. Compare validity, data, registration requirements, and eSIM alternatives rather than assuming it is the best price." },
      { question: `How much should I plan for on my first day in ${d.name}?`, answer: "Budget for airport transport, one or two meals, mobile data, a small cash reserve, and your accommodation. Current prices vary, so confirm them shortly before travel." },
      { question: "Is it sensible to travel onward immediately?", answer: "Sometimes, but a buffer is wise after a long flight. Immigration delays, traffic, weather, and fatigue can make a tight connection unnecessarily stressful." }
    ],
    related: [`/cities/${d.city === "Ho Chi Minh City" ? "ho-chi-minh-city" : d.city.toLowerCase().replaceAll(" ", "-")}-arrival-guide/`, "/travel-basics/first-international-trip-checklist/", "/travel-basics/plan-your-first-24-hours-abroad/"]
  };
}

const countryEnhancements: Record<string, Partial<Guide>> = {
  "sri-lanka-first-24-hours": {
    seoTitle: "First 24 Hours in Sri Lanka: Arrival Guide | EZ Roam Guide",
    description: "Arriving in Sri Lanka? Plan airport transport, SIM setup, cash, your first night, safety, etiquette, late arrivals, and the first 24 hours.",
    sections: [
      { id: "first-steps", heading: "The first thing to do after arriving", paragraphs: ["Before joining a SIM, taxi, or exchange queue, connect to airport Wi-Fi and message your accommodation. Confirm whether you are going to Colombo, Negombo, or directly elsewhere; drivers may hear “Colombo” as the city even when a booking is closer to the airport.", "Keep the address in English and, if supplied by the property, Sinhala or Tamil. A nearby landmark and telephone number help when a map pin falls on the wrong entrance."] },
      { id: "arrival-process", heading: "Arrival process at Bandaranaike International Airport", paragraphs: ["International arrivals normally move through immigration, baggage reclaim, and customs before entering the public arrivals hall. Complete any required travel authorization through Sri Lanka's official immigration channels before departure and keep the confirmation available offline.", "Baggage, immigration, and customs requirements depend on your circumstances. Follow airport signs and officers' instructions rather than advice from unofficial helpers."] },
      { id: "first-night", heading: "Where to stay on the first night", paragraphs: ["Negombo is closer to the airport and can be practical after a late flight or before an early departure. Colombo makes more sense when your next step is in the capital, at Colombo Fort railway station, or south along the coast.", "If you plan to continue to Kandy, Galle, or another region, check the real door-to-door journey before committing to a same-night transfer. A rested morning departure is often easier than navigating an unfamiliar road after midnight."] },
      { id: "late-arrival", heading: "Arriving late at night", paragraphs: ["Pre-arrange check-in and save the property's night contact. Use an official airport taxi channel or a ride booked through a recognized app, verify the vehicle, and avoid changing accommodation because someone in the arrivals area says your booking is closed.", "Get water and any essential snack before the final drive. Smaller shops near your accommodation may be closed, and a late arrival is not the moment to search for a better exchange rate across town."] }
    ],
    related: ["/cities/colombo-arrival-guide/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/airport-taxi-scams/", "/travel-basics/first-international-trip-checklist/"],
    officialSources: [
      { label: "Bandaranaike International Airport passenger information", href: "https://www.airport.lk/" },
      { label: "Sri Lanka Department of Immigration and Emigration", href: "https://www.immigration.gov.lk/" },
      { label: "Sri Lanka Electronic Travel Authorization", href: "https://eta.gov.lk/" },
      { label: "Sri Lanka Tourism Development Authority", href: "https://www.sltda.gov.lk/" },
      { label: "Sri Lanka Railways", href: "https://railway.gov.lk/" }
    ]
  },
  "japan-first-24-hours": {
    description: "First time in Japan? Plan immigration, Narita or Haneda transport, internet, cash, local transport, etiquette, your first night, and arrival.",
    sections: [
      { id: "first-steps", heading: "The first thing to do after arriving", paragraphs: ["Check which airport and terminal you are actually in before opening a route app. Haneda and Narita have different operators, journey times, and last departures; a saved “Tokyo airport” plan is not enough.", "Connect to official airport Wi-Fi, confirm your hotel's nearest station and exit, and decide whether your luggage makes a direct airport bus simpler than a faster route with several rail changes."] },
      { id: "arrival-process", heading: "Immigration, customs, and baggage", paragraphs: ["Japan provides official digital arrival services that can reduce form-filling at the airport, but eligibility and procedures can change. Complete only official government forms and keep your passport and any generated codes accessible.", "After baggage reclaim, follow the customs route that applies to your declaration. Do not pack prohibited food, medication, or other controlled items without checking Japanese government guidance before departure."] },
      { id: "first-night", heading: "Choosing a sensible first-night area", paragraphs: ["Choose a district with a direct or simple route from your arrival airport. Ueno and Tokyo Station can be convenient from Narita; Shinagawa and central southern districts can work well from Haneda. The best choice still depends on the service operating when you land.", "A hotel beside the correct station is often more useful on night one than a famous neighborhood requiring two transfers and a long walk through a large interchange."] },
      { id: "late-arrival", heading: "Late-night arrival in Japan", paragraphs: ["Last trains and airport buses do not wait for delayed flights. Check the official timetable for your date and keep a late-arrival option: an airport hotel, a confirmed night bus, or a taxi budget you are genuinely prepared to pay.", "If you miss the last practical service, stay in a staffed airport area while reorganizing. Do not rush onto an unfamiliar train simply because it is the final departure shown."] }
    ],
    related: ["/cities/tokyo-arrival-guide/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/arriving-late-at-night/"],
    officialSources: [
      { label: "Narita International Airport", href: "https://www.narita-airport.jp/en/" },
      { label: "Haneda Airport Passenger Terminal", href: "https://tokyo-haneda.com/en/" },
      { label: "Visit Japan Web — Digital Agency", href: "https://www.vjw.digital.go.jp/" },
      { label: "Japan National Tourism Organization", href: "https://www.japan.travel/en/" },
      { label: "Tokyo Metro", href: "https://www.tokyometro.jp/en/" }
    ]
  },
  "thailand-first-24-hours": {
    description: "Arriving in Thailand? Learn how to handle Bangkok airports, transport, SIMs, baht, food, safety, etiquette, late arrivals, and your first night.",
    sections: [
      { id: "first-steps", heading: "The first thing to do after arriving", paragraphs: ["Confirm whether your baggage and onward booking are at Suvarnabhumi (BKK) or Don Mueang (DMK). The airports are not interchangeable, and a same-day airport transfer needs a generous buffer.", "Connect, save your hotel address in Thai if the property provides it, and check the correct pickup level before requesting a ride. Airport pickup zones can differ from ordinary city pickup points."] },
      { id: "arrival-process", heading: "Airport arrival process", paragraphs: ["Follow immigration, baggage, and customs signs before entering the public arrivals hall. Use only official Thai government channels for visas, arrival forms, and immigration information; paid lookalike form sites are not necessary.", "Keep onward-flight details available if you are transferring between airports. An airside connection and a landside airport change are very different journeys."] },
      { id: "first-night", heading: "Where to stay on the first night", paragraphs: ["For a short Bangkok stay, choose a district that connects cleanly to your airport route and next-day plans. A hotel near the Airport Rail Link, BTS, or MRT can reduce the need for a long road journey during peak traffic.", "If you land late and fly domestically early, staying near the correct airport may be calmer than crossing Bangkok twice. Always check that the hotel shuttle or reception operates at your actual arrival hour."] },
      { id: "late-arrival", heading: "Late-night arrival in Thailand", paragraphs: ["Check the last rail service before flying. After rail closes, use the official taxi queue, a licensed app pickup point, or a confirmed transfer; screenshot the booking and vehicle details.", "Do not let a driver or tout replace your hotel with a “better” property. If reception is closed, contact the booking platform or move to a staffed hotel desk rather than following an unsolicited offer."] }
    ],
    related: ["/cities/bangkok-arrival-guide/", "/travel-basics/airport-taxi-scams/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/"],
    officialSources: [
      { label: "Suvarnabhumi Airport", href: "https://suvarnabhumi.airportthai.co.th/" },
      { label: "Don Mueang International Airport", href: "https://donmueang.airportthai.co.th/" },
      { label: "Thailand Immigration Bureau", href: "https://www.immigration.go.th/" },
      { label: "Tourism Authority of Thailand", href: "https://www.tourismthailand.org/" },
      { label: "BTS Skytrain", href: "https://www.bts.co.th/eng/" }
    ]
  },
  "singapore-first-24-hours": {
    description: "Arriving in Singapore? Plan Changi immigration, MRT or taxi transport, mobile data, payment, safety, local rules, and your first 24 hours.",
    sections: [
      { id: "first-steps", heading: "The first thing to do after arriving", paragraphs: ["Complete immigration and collect every bag before treating Changi as an attraction. Confirm your terminal, hotel address, and the operating time of your chosen city transport; terminal transfers add time.", "Connect to airport Wi-Fi and check whether your bank card or mobile wallet is suitable for contactless transport. Keep one alternative payment method available until you know it works locally."] },
      { id: "arrival-process", heading: "Immigration and arrival formalities", paragraphs: ["Check Singapore's official Immigration & Checkpoints Authority guidance for visa requirements, the SG Arrival Card, medication, and restricted goods. The arrival card is not a visa, and unofficial sites may charge for a government process.", "After immigration and baggage reclaim, follow the customs channel that applies to you. Singapore enforces import controls closely, so uncertainty should be resolved before travel rather than at the checkpoint."] },
      { id: "first-night", heading: "Where to stay on the first night", paragraphs: ["Choose for transport convenience, not only the lowest room rate. City Hall, Bugis, Lavender, and other central MRT-connected areas can make a short visit simple, while an airport-area hotel may suit a late arrival or early onward flight.", "Check the walking route from the station. Tropical rain, heat, road crossings, and luggage can turn a short map distance into an awkward final leg."] },
      { id: "late-arrival", heading: "Late-night arrival at Changi", paragraphs: ["Confirm the final MRT departure for your date before relying on rail. Official taxis and licensed ride services remain the practical fallback, but pickup points and surcharges can vary.", "If you have a long overnight layover, check Changi's current transit and landside rules before booking a room or leaving the secure area."] }
    ],
    related: ["/cities/singapore-arrival-guide/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/arriving-late-at-night/"],
    officialSources: [
      { label: "Changi Airport arrival guide", href: "https://www.changiairport.com/en/fly/arrival-guide.html" },
      { label: "Immigration & Checkpoints Authority", href: "https://www.ica.gov.sg/" },
      { label: "Singapore visa information — Ministry of Foreign Affairs", href: "https://www.mfa.gov.sg/visiting-singapore/check-if-you-need-a-singapore-visa/" },
      { label: "Visit Singapore", href: "https://www.visitsingapore.com/" },
      { label: "Land Transport Authority", href: "https://www.lta.gov.sg/" }
    ]
  }
};

export const countryGuides: Guide[] = countryBlueprints.map((item) => {
  const guide = countryGuide(item);
  const enhancement = countryEnhancements[guide.slug];
  return enhancement ? { ...guide, ...enhancement, sections: [...(enhancement.sections ?? []), ...guide.sections] } : guide;
});

const cityBlueprints = [
  ["colombo-arrival-guide", "Colombo", "Sri Lanka", "Bandaranaike International Airport", "Colombo is roughly a road transfer from the airport, not an airport district. Official taxis, ride apps, buses, and arranged transfers serve the route; traffic changes the timing.", "Use app-based rides for simple point-to-point trips, and try trains or buses once you understand the route. Fort is the main rail hub.", "Heat, humidity, and traffic can drain energy quickly. Plan one useful errand and one relaxed meal."],
  ["tokyo-arrival-guide", "Tokyo", "Japan", "Narita or Haneda", "Haneda is closer to central districts; Narita has several rail and bus choices. Pick the service that stops nearest your hotel, especially with luggage.", "Rail is the default for many trips. A transit card helps, but separate operators and express services mean you should still check the route.", "Avoid crossing the city for a famous meal on arrival night. Your own neighborhood will have excellent, easier options."],
  ["bangkok-arrival-guide", "Bangkok", "Thailand", "Suvarnabhumi or Don Mueang", "The two airports are on different sides of the city. Airport rail serves Suvarnabhumi; official taxis, buses, and ride services cover both.", "BTS, MRT, boats, taxis, and ride apps each solve different journeys. Rail is especially valuable during congested hours.", "Choose one riverside or neighborhood walk, not a list of distant attractions connected by traffic."],
  ["singapore-arrival-guide", "Singapore", "Singapore", "Changi Airport", "MRT, taxis, and ride services make arrival unusually straightforward. Check late-night operating hours before relying on rail.", "Use MRT and buses with a compatible contactless card or local transit option. Tap consistently with the same payment method.", "Local rules can be stricter than visitors expect; check official guidance for medication, vaping products, and restricted goods."],
  ["dubai-arrival-guide", "Dubai", "United Arab Emirates", "Dubai International or Al Maktoum", "Dubai International connects to the metro and official taxi system. Al Maktoum is much farther from many visitor districts.", "The metro is useful along its corridor; taxis fill the gaps. Walking between map pins is often uncomfortable because of heat and road design.", "Indoor distances can also be large. Leave margin for malls, stations, and hotel complexes."],
  ["kuala-lumpur-arrival-guide", "Kuala Lumpur", "Malaysia", "Kuala Lumpur International Airport", "Express rail is predictable; buses cost less; taxis and app rides provide door-to-door service. KLIA terminals require careful pickup coordination.", "Combine urban rail with app rides. Sidewalk continuity varies, so a short-looking walk may involve crossings or uncovered sections.", "Expect sudden rain. Keep your first plan flexible and have an indoor alternative."],
  ["bali-arrival-guide", "Bali", "Indonesia", "I Gusti Ngurah Rai International Airport", "Official taxis, arranged drivers, and designated app pickup areas serve the airport. Traffic to beach and inland areas varies greatly.", "There is no island-wide rail system. Drivers and ride apps are practical; scooters carry meaningful legal and injury risks.", "Do not schedule a distant temple or ferry connection after landing. Bali traffic rewards generous buffers."],
  ["istanbul-arrival-guide", "Istanbul", "Turkey", "Istanbul Airport or Sabiha Gökçen", "Both airports are distant from central districts and from each other. Metro, airport coaches, taxis, and transfers depend on the side of the city.", "Metro, tram, ferry, and bus networks are extensive. A transport card reduces friction, and ferries can bypass road congestion.", "Check whether your hotel is on the European or Asian side before choosing any onward route."],
  ["delhi-arrival-guide", "Delhi", "India", "Indira Gandhi International Airport", "Airport metro, prepaid taxis, app rides, and hotel transfers are the main options. Confirm your terminal and exact hotel address.", "Delhi Metro is often the most predictable way around. For road trips, verify the car and avoid accepting substitute drivers.", "Keep arrival day geographically small. Noise, weather, traffic, and jet lag can make ordinary tasks feel bigger."],
  ["ho-chi-minh-city-arrival-guide", "Ho Chi Minh City", "Vietnam", "Tan Son Nhat International Airport", "Official taxis, ride apps, buses, and transfers serve the airport. Keep your address visible and verify the vehicle before loading bags.", "Ride apps and taxis are practical; buses suit confident travelers. Walk carefully and treat road crossing as a predictable, attentive process.", "Keep your phone away from the traffic side of the pavement, particularly while waiting for a ride."]
] as const;

function cityGuide(d: typeof cityBlueprints[number]): Guide {
  const [slug, name, country, airport, arrival, local, nuance] = d;
  return {
    kind: "city", slug, label: name, eyebrow: "City arrival guide",
    title: `${name} Arrival Guide: Your First 24 Hours`,
    seoTitle: `${name} Arrival Guide: First 24 Hours | EZ Roam Guide`,
    description: `Plan a calm first day in ${name}: airport transfer, transport, money, internet, food, etiquette, safety, and an easy arrival schedule.`,
    intro: `${name} becomes much more manageable when you solve arrival transport, connectivity, and one good meal before thinking about sightseeing. Here is a grounded plan for the hours when you are most tired and least familiar with the city.`,
    lastUpdated: updated, readingTime: "8 min read",
    quick: [`Arrive through ${airport}.`, "Save your hotel address in the local language when useful.", "Use an official transport channel.", "Carry one backup payment method.", "Plan only one optional activity."],
    sections: [
      { id: "plan", heading: "Best way to plan your arrival", paragraphs: [`Build your plan around your landing time, luggage, hotel check-in, and energy—not a sightseeing checklist. ${nuance}`, "Save the route, hotel phone number, and a backup transport option before your flight. If your room is not ready, confirm whether the property will securely hold luggage."] },
      { id: "airport", heading: "Airport to city overview", paragraphs: [arrival, "Do not judge routes only by distance. Waiting time, changes, stairs, road congestion, and the final walk can matter more when you are carrying bags."] },
      { id: "transport", heading: "Local transport basics", paragraphs: [local, "Download an offline map and mark your accommodation. Learn one nearby station or landmark you can say or show if your phone connection fails."] },
      { id: "money", heading: "Cash and card tips", paragraphs: [`Cards are useful across much of ${name}, but small cash remains a sensible backup for local businesses, minor fares, or a payment outage. Use bank-operated ATMs and review the amount before confirming.`, "Keep a spare card separate from your wallet. Avoid carrying your entire travel fund during the first walk around a new neighborhood."] },
      { id: "internet", heading: "Internet access", paragraphs: ["Airport Wi-Fi can get you through the first transfer. For longer use, compare eSIM, local prepaid SIM, and roaming based on phone compatibility, trip length, hotspot needs, and registration rules.", "Activate and test maps and messaging while you still have a reliable connection. Save essential confirmations offline."] },
      { id: "meal", heading: "First meal and water tips", paragraphs: [`Choose a busy, clean place near your accommodation for your first meal in ${name}. Freshly cooked food and a simple order let you settle in without turning dinner into another transport project.`, "Hydrate after the flight. Where tap-water guidance is uncertain or building plumbing varies, use properly sealed or filtered water and confirm local official advice."] },
      { id: "safety", heading: "Safety reminders", paragraphs: ["Use official taxi ranks or verify the plate and driver in your ride app. Keep valuables controlled while loading bags, paying, and checking directions—the moments when attention is divided.", "If someone says your hotel, attraction, or transport is unavailable, verify independently before accepting a replacement. Urgency is a common ingredient in travel scams."] },
      { id: "etiquette", heading: "Cultural etiquette", paragraphs: [`In ${country}, watch how local people queue, speak in shared spaces, dress at religious sites, and handle shoes or payment. Following a visible cue is usually better than relying on a universal rule.`, "Ask before photographing people. A calm tone and a brief apology are useful when language or custom creates a misunderstanding."] },
      { id: "avoid", heading: "What to avoid on day one", paragraphs: ["Avoid a tightly timed attraction booking, an unverified street exchange, and a long cross-city dinner trip. Do not hand your phone to a stranger who offers to fix a booking or payment problem.", `Most of all, avoid treating tiredness as a challenge to defeat. ${name} will still be there after sleep.`] },
      { id: "plan-day", heading: "A simple first-day plan", paragraphs: ["Connect at the airport, take your planned transport, check in or leave luggage, then eat nearby. Walk one familiar loop in daylight if possible: accommodation, convenience shop, transit stop, and a clear landmark.", "End by checking tomorrow's weather and first route. Charge devices, place passport and cards securely, and leave the morning spacious enough to recover from delays or jet lag."] }
    ],
    checklist: ["Connect and message your arrival", "Verify transport and vehicle", "Check in or store luggage", "Get a small cash reserve", "Eat and hydrate nearby", "Walk one short orientation loop", "Prepare tomorrow's first route"],
    mistakes: ["Booking a non-refundable activity close to landing time", "Accepting an unverified ride or helpful stranger's detour", "Carrying all cards and cash in one place", "Planning around ideal traffic rather than real buffers"],
    faqs: [
      { question: `What is the easiest way from the airport to ${name}?`, answer: "It depends on landing time, district, luggage, and current operations. Use the airport's official transport pages shortly before travel and choose the route with the simplest complete journey." },
      { question: `Do I need cash immediately in ${name}?`, answer: "A modest amount is useful even where cards are common. Avoid exchanging or withdrawing more than you are comfortable carrying on arrival day." },
      { question: `What should I do first after checking in?`, answer: "Hydrate, eat nearby, confirm connectivity, and learn the immediate block around your accommodation. Save ambitious sightseeing for when you are rested." }
    ],
    related: [`/countries/${country.toLowerCase().replaceAll(" ", "-")}-first-24-hours/`, "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/arriving-late-at-night/"]
  };
}

const cityEnhancements: Record<string, Partial<Guide>> = {
  "colombo-arrival-guide": {
    description: "Arriving in Colombo? Plan the airport transfer, SIM, cash, first-night area, local transport, food, late arrival, safety, and day-one essentials.",
    sections: [
      { id: "first-hour", heading: "Your first hour after landing", paragraphs: ["Bandaranaike International Airport is near Katunayake, outside Colombo. Before leaving the terminal, confirm whether your booking is in Colombo city, Negombo, or another district with a similar address.", "Set up enough connectivity to contact your accommodation and driver, then choose transport through an official counter or a recognized app. Keep the booking screen open until you match the vehicle."] },
      { id: "stay", heading: "Choosing your first-night area", paragraphs: ["Fort and Pettah place you near the main railway station and commercial center, but the streets can feel busy on a first arrival. Kollupitiya and Bambalapitiya offer coastal access and many everyday services; Negombo is the practical choice when airport proximity matters more than central Colombo.", "Choose a property with clear late check-in and a map pin that matches the written address. Colombo hotel names and road names can be similar, so save the telephone number too."] },
      { id: "late", heading: "Late-night arrival in Colombo", paragraphs: ["Confirm reception before boarding the flight and use a direct airport ride. Public transport choices narrow late at night, while road travel may still take longer than expected.", "Do not plan a train connection, long-distance bus, or same-night coastal transfer unless the timing has been confirmed independently. A simple airport-to-room journey is the safer first objective."] }
    ],
    related: ["/countries/sri-lanka-first-24-hours/", "/travel-basics/airport-taxi-scams/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/arriving-late-at-night/"],
    officialSources: [
      { label: "Bandaranaike International Airport", href: "https://www.airport.lk/" },
      { label: "Sri Lanka Immigration and Emigration", href: "https://www.immigration.gov.lk/" },
      { label: "Sri Lanka Railways", href: "https://railway.gov.lk/" },
      { label: "Sri Lanka Tourism Development Authority", href: "https://www.sltda.gov.lk/" }
    ]
  },
  "tokyo-arrival-guide": {
    description: "Arriving in Tokyo? Compare Narita and Haneda transfers, set up internet and payment, choose a first-night area, use trains, and plan day one.",
    sections: [
      { id: "first-hour", heading: "Your first hour at Narita or Haneda", paragraphs: ["Identify the terminal and the exact airport before buying any ticket. At Narita, rail choices can favor Ueno, Tokyo Station, Shinjuku, or other corridors differently. At Haneda, rail and monorail routes reach different central interchange stations.", "Ask the staffed counter which service gives you the simplest final walk—not merely the shortest platform-to-platform time. A direct bus can be easier with large luggage or a hotel stop."] },
      { id: "stay", heading: "Where to stay on the first night", paragraphs: ["Stay near a station served directly from the airport or with one clear transfer. Ueno, Tokyo Station, Shinagawa, Shinjuku, and Asakusa each suit different airport routes; none is universally best.", "Check the station exit number and hotel entrance before arrival. Tokyo stations can cover several blocks, and choosing the wrong exit with luggage is a tiring way to begin the trip."] },
      { id: "late", heading: "If your Tokyo flight lands late", paragraphs: ["Look up the final airport train and bus on the operator's official timetable. Immigration and baggage delays can consume a connection that looked comfortable on the flight schedule.", "Keep an airport-area hotel or confirmed taxi plan as a real fallback. Sleeping near the airport and starting early can cost less—and feel much better—than a long taxi ride across Tokyo."] }
    ],
    related: ["/countries/japan-first-24-hours/", "/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/arriving-late-at-night/"],
    officialSources: [
      { label: "Narita International Airport access information", href: "https://www.narita-airport.jp/en/access/" },
      { label: "Haneda Airport access information", href: "https://tokyo-haneda.com/en/access/" },
      { label: "GO TOKYO — official Tokyo travel guide", href: "https://www.gotokyo.org/en/" },
      { label: "Tokyo Metro", href: "https://www.tokyometro.jp/en/" }
    ]
  },
  "bangkok-arrival-guide": {
    description: "Arriving in Bangkok? Understand BKK and DMK transfers, mobile data, baht, first-night areas, local trains, taxi safety, and a realistic day one.",
    sections: [
      { id: "first-hour", heading: "Your first hour at BKK or DMK", paragraphs: ["Check the airport code before arranging anything: Suvarnabhumi is BKK and Don Mueang is DMK. Save your hotel address in Thai where possible and confirm the correct public-transport or app-ride pickup level.", "If you need cash, make one considered ATM withdrawal rather than several small ones. Test your data connection before leaving the terminal because pickup areas can be confusing without messaging."] },
      { id: "stay", heading: "Where to stay on your first night", paragraphs: ["For a first visit, a hotel near the BTS or MRT usually makes the next morning easier. From Suvarnabhumi, areas with straightforward Airport Rail Link connections reduce road exposure; from Don Mueang, your best route may be rail, bus, or road depending on the district.", "A cheap room far beyond the rail network can lose its advantage in traffic and taxi fares. Check the final walk and late check-in, not only the district name."] },
      { id: "late", heading: "Late-night Bangkok arrivals", paragraphs: ["Once rail services finish, use the official taxi queue, a licensed app pickup zone, or a pre-confirmed transfer. Keep the queue ticket or app record until the ride is complete.", "Ask to go directly to the booked address. Decline shopping stops, tour offices, and claims that your hotel has closed unless you verify with the property yourself."] }
    ],
    related: ["/countries/thailand-first-24-hours/", "/travel-basics/airport-taxi-scams/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/"],
    officialSources: [
      { label: "Suvarnabhumi Airport", href: "https://suvarnabhumi.airportthai.co.th/" },
      { label: "Don Mueang International Airport", href: "https://donmueang.airportthai.co.th/" },
      { label: "Tourism Authority of Thailand", href: "https://www.tourismthailand.org/" },
      { label: "BTS Skytrain", href: "https://www.bts.co.th/eng/" }
    ]
  }
};

export const cityGuides: Guide[] = cityBlueprints.map((item) => {
  const guide = cityGuide(item);
  const enhancement = cityEnhancements[guide.slug];
  return enhancement ? { ...guide, ...enhancement, sections: [...(enhancement.sections ?? []), ...guide.sections] } : guide;
});

const basicBlueprints = [
  {
    slug: "first-international-trip-checklist", title: "First International Trip Checklist", desc: "A calm, practical checklist for documents, money, connectivity, packing, airport arrival, and the first day of an international trip.",
    intro: "A first international trip contains dozens of small decisions, but only a handful can seriously disrupt the journey. This checklist puts the irreversible tasks first and leaves room for the trip to feel like a trip.",
    sections: [
      ["documents", "Documents and entry preparation", ["Check passport validity, blank-page requirements, visas or electronic authorizations, and any transit-country rules using official government sources. Names on tickets should match travel documents.", "Keep secure digital copies of the passport identity page, visa, insurance, prescriptions, and important bookings. Store one copy somewhere you can reach without the phone that travels in your pocket."]],
      ["money", "Set up resilient travel money", ["Tell your bank about travel if it still requires notice, check foreign transaction and ATM fees, and carry at least two payment methods from different accounts where possible.", "Do not carry every card together. Bring a modest emergency reserve in a widely exchangeable currency only if it is useful for your route; otherwise plan a bank ATM withdrawal after arrival."]],
      ["phone", "Prepare your phone and internet", ["Check whether the phone is unlocked and supports eSIM. Compare roaming, eSIM, and local SIM options based on trip length and whether you need calls, texts, or hotspot data.", "Download offline maps, translation data, airline apps, bookings, and the first accommodation address. Add a screen lock, device tracking, and secure backup before departure."]],
      ["health", "Health, medication, and insurance", ["Confirm destination-specific health advice with an official clinic or health authority well before travel. Carry medicine in original packaging with supporting documentation where required.", "Buy insurance that fits the trip rather than the cheapest label. Read exclusions for existing conditions, scooters, adventure activities, delays, and expensive electronics."]],
      ["packing", "Pack for recovery, not perfection", ["Put one change of clothes, essential medicine, chargers, documents, and basic toiletries in cabin baggage. Checked bags can be delayed even when the flight runs perfectly.", "Use a short packing list built around weather, local norms, laundry access, and activities. Extra weight makes every station, stair, and transfer harder."]],
      ["final-check", "The 72-hour final check", ["Reconfirm the flight, terminal, baggage allowance, airport transfer, accommodation check-in, and any official arrival form. Download fresh copies instead of relying on links buried in email.", "Check the destination weather and any transport disruption. Put the first-night address, emergency contacts, and insurance details into one offline note that can be opened quickly."]],
      ["arrival", "Plan the arrival before departure", ["Know the airport, terminal, immigration steps, official transport choices, accommodation check-in window, and what you will do if the flight is late.", "Save the hotel address offline and, where useful, in the local script. Decide whether you will get cash or data at the airport and set a maximum acceptable convenience cost."]],
      ["day-one", "Keep the first 24 hours simple", ["Prioritize immigration, transport, check-in, food, water, sleep, and one short orientation walk. A flexible first day protects the rest of the trip.", "Send a trusted person the flight and accommodation details. Agree on how and when you will check in, particularly if traveling alone."]],
      ["airport-folder", "Build a small airport folder", ["Keep the passport, boarding pass, arrival address, official entry confirmation, return or onward booking, and essential medication documents together. Do not place the only copies in checked baggage.", "Use a slim folder or one secure phone note rather than repeatedly unpacking your main bag at counters. Return each document to the same place after use."]],
      ["do-not-delay", "Tasks not to leave until the airport", ["Do not wait until check-in to discover a passport issue, missing transit visa, carrier-locked phone, or card that cannot be used abroad. Airport staff cannot rewrite another country's entry rules or unlock a device.", "Complete airline document checks when offered, but still verify requirements through official government sources. An airline allowing online check-in does not guarantee permission to enter the destination."]]
    ]
  },
  {
    slug: "how-to-leave-an-airport-safely", title: "How to Leave an Airport Safely in a New Country", desc: "A step-by-step guide to choosing official airport transport, avoiding arrival scams, protecting luggage, and reaching your accommodation safely.",
    intro: "The arrivals hall is a difficult place to make good decisions: you may be tired, offline, carrying everything important, and surrounded by confident offers. A short routine makes the exit much calmer.",
    sections: [
      ["before", "Prepare before the doors open", ["Save your accommodation's exact address, phone number, check-in instructions, and official airport transport page before flying. Screenshot the booking and route so a weak connection cannot strand you.", "Know the names of two acceptable transport options. A backup prevents one closed counter, delayed train, or unavailable app from becoming an emergency."]],
      ["inside", "Finish essential tasks inside the terminal", ["Use the restroom, connect to official Wi-Fi, check messages, and account for every bag. If you need cash, prefer a bank ATM in a controlled area and put money away before walking on.", "Do not display your full cash reserve or leave a phone on top of luggage. Arrange bags so you can move without setting down your passport or wallet."]],
      ["official", "Identify official transport", ["Follow airport signs to rail, bus, taxi, or booked-ride areas. Official taxi systems may use a counter, numbered queue, meter, fixed-zone receipt, or app; learn the local process.", "Ignore people who intercept you before the signed area and claim the official service is closed. Verify closures at an information desk or official website."]],
      ["ride", "Check the ride before entering", ["Match the plate, driver, company, or receipt to your booking. Ask the driver to state your destination rather than revealing every detail first when identity is uncertain.", "Keep small bags with you. If luggage goes in a trunk, wait until it is removed before completing payment or letting the vehicle depart."]],
      ["route", "Stay oriented without policing the driver", ["Follow the route at a broad level using offline maps. Detours can be legitimate because of one-way streets, toll roads, closures, or congestion, so ask calmly before assuming the worst.", "Share live trip details with a trusted contact if practical. Avoid broadcasting publicly that you have just arrived alone."]],
      ["problem", "If something feels wrong", ["Return to a staffed, public area if you have not entered the vehicle. If already moving, ask to stop at a hotel, police point, fuel station, or busy business rather than escalating in an isolated place.", "Use the local emergency number for immediate danger. For a fare dispute without danger, preserve receipts, vehicle details, and screenshots for the transport company or airport authority."]]
    ]
  },
  {
    slug: "sim-card-vs-esim", title: "SIM Card vs eSIM for International Travel", desc: "Compare travel SIM cards, eSIMs, and roaming by setup, phone compatibility, calls, hotspot use, reliability, and trip length.",
    intro: "The best travel connection is not automatically the cheapest data package. It is the option that works with your phone, starts when you need it, and lets you receive the messages your trip depends on.",
    sections: [
      ["roaming", "International roaming: simplest, sometimes expensive", ["Roaming keeps your usual number active and requires little setup. It is useful for short trips, bank verification texts, or travelers whose home plan includes reasonable international service.", "Check daily fees, data limits, covered countries, cruise or aircraft networks, and what happens after the allowance ends. Disable data roaming until you understand the plan."]],
      ["physical", "Local physical SIM: strong value with setup", ["A local prepaid SIM can offer generous data and sometimes a local number. It may require passport registration, an unlocked phone, and time at an airport or city shop.", "Store your home SIM securely and know whether removing it affects messaging apps or verification. Test calls, data, and hotspot use before leaving the counter."]],
      ["esim", "Travel eSIM: fast and flexible", ["An eSIM can be installed before departure and activated on arrival. It is especially helpful for airport navigation and travelers who want to keep a physical home SIM in place.", "Many travel eSIMs are data-only. Confirm destination coverage, network, activation rules, validity, tethering, and whether installation requires internet."]],
      ["choose", "How to choose", ["Use roaming when simplicity and your normal number matter most. Use a local SIM for longer stays or a local number. Use eSIM for rapid setup, multi-country routes, or dual-SIM convenience.", "A hybrid approach often works: keep the home line active for incoming texts with data disabled, and use a local SIM or eSIM for data. Review charges carefully."]],
      ["before-buying", "Check these details before buying", ["Confirm that the phone is unlocked, supports the required eSIM standard or physical SIM size, and works on the destination's network bands. A compatible-looking plan is useless if the device is carrier-locked.", "Check whether the plan includes a local phone number, SMS, hotspot use, incoming calls, and coverage outside major cities. Read when validity starts: purchase, installation, or first network connection."]],
      ["setup", "Set up without surprises", ["Install the provider app or eSIM while on trusted Wi-Fi. Label lines clearly, choose the correct mobile-data line, and disable mobile-data switching if it could move traffic to an expensive home plan.", "Save the installation record and support details. Some eSIM codes cannot be reused after deletion, so do not remove a plan casually while abroad."]],
      ["arrival-test", "Test your connection before leaving the airport", ["Turn off airport Wi-Fi briefly and confirm that mobile data actually loads a map. Send a message, open your accommodation address, and test hotspot use if it matters to the trip.", "If using dual SIM, check which line handles data, calls, and SMS. Keep data roaming disabled on the expensive line unless your chosen plan specifically requires it."]],
      ["verification", "Bank texts and account verification", ["Keeping the home number active can matter for bank alerts and one-time security codes. Before departure, check whether the carrier charges for receiving texts abroad and whether important accounts offer an authenticator app or backup codes.", "Do not make an unfamiliar travel SIM the only recovery method for email, banking, or cloud storage. A lost phone should not lock you out of every account needed to continue the trip."]],
      ["security", "Connectivity and security", ["Public Wi-Fi is useful but should not be your only arrival plan. Confirm the network name with staff, use encrypted websites, update devices before travel, and avoid sensitive account changes on unknown networks.", "A VPN can reduce exposure on local networks but cannot make scams, fake websites, or unsafe downloads trustworthy."]]
    ]
  },
  {
    slug: "cash-vs-card-while-traveling", title: "Cash vs Card While Traveling", desc: "Learn how to combine cash, cards, ATMs, and mobile payments abroad while reducing fees, loss risk, and payment failures.",
    intro: "Travel money works best as a small system, not a single perfect card. The aim is to pay normally when things work and still buy food or transport when a terminal, account, or network does not.",
    sections: [
      ["mix", "Use a payment mix", ["Carry a primary card, a backup card stored separately, and enough local cash for a modest day. The balance depends on destination infrastructure and your comfort, not a universal percentage.", "Where mobile wallets are common, they can add convenience without replacing physical backups. A damaged phone should not remove every way to pay."]],
      ["atm", "Withdraw cash carefully", ["Prefer ATMs attached to banks or inside controlled locations. Inspect the card slot, shield the PIN, and avoid help from strangers if a machine behaves unexpectedly.", "Fewer, planned withdrawals may reduce fixed fees, but do not carry more cash than you can protect. Learn local denomination sizes before leaving the machine."]],
      ["conversion", "Understand currency conversion prompts", ["An ATM or card terminal may offer to charge in your home currency. This dynamic currency conversion shows a familiar amount but may include a poor exchange rate.", "Choosing local currency often lets your card network perform conversion. Check your own bank's terms; never approve a screen you do not understand."]],
      ["fees", "Know the four common costs", ["Look for foreign transaction fees, ATM operator fees, your bank's withdrawal fee, and exchange-rate markup. A card advertised for travel may still charge for cash advances or certain account types.", "Keep receipts until charges settle. Small verification holds from hotels, fuel stations, and transport services can temporarily reduce available credit."]],
      ["decline", "Handle declined cards calmly", ["A decline can come from fraud controls, offline terminals, PIN requirements, network outages, or merchant restrictions. Try one reasonable alternative rather than repeating the same card many times.", "Contact the bank through its official app or the number on the card. Do not follow a phone number supplied by a stranger who offers to solve the payment."]],
      ["protect", "Limit the impact of loss", ["Carry only the day's cash and one working card. Store backup funds securely and keep account contact details somewhere other than the wallet.", "Enable transaction notifications and know how to freeze a card. If a card disappears, act immediately and document any unauthorized charge."]]
    ]
  },
  {
    slug: "travel-etiquette-mistakes", title: "Travel Etiquette Mistakes to Avoid", desc: "Avoid common travel etiquette mistakes involving dress, photography, queues, public transport, religion, tipping, and communication.",
    intro: "Good travel etiquette is less about memorizing hundreds of rules and more about noticing who shares the space with you. Curiosity, restraint, and a quick apology cover a surprising amount of ground.",
    sections: [
      ["volume", "Treat public space as shared space", ["Keep calls, music, and group conversations at the local volume, especially on public transport and in residential areas. A lively tourist district does not define every part of a city.", "Do not block doors, escalators, pavements, or ticket gates while checking a phone. Step aside before stopping."]],
      ["dress", "Read dress expectations", ["Religious sites and conservative communities may expect covered shoulders, knees, hair, or shoes removed. Check visitor guidance before arrival rather than improvising at the entrance.", "Beachwear belongs at beaches and pools. Even in relaxed destinations, shops, transport, and neighborhoods may follow different norms."]],
      ["photo", "Ask before photographing people", ["A public place is not automatic consent for a close portrait. Ask clearly, accept refusal, and be especially careful with children, ceremonies, worship, grief, and vulnerable people.", "Some government buildings, border areas, transport facilities, artworks, and religious interiors restrict photography. Follow signs and staff instructions."]],
      ["touch", "Respect bodies and objects", ["Rules around heads, feet, hands, greetings, and physical contact vary. Observe local interaction and avoid touching people or sacred objects without invitation.", "Do not climb, sit on, or imitate poses with monuments and religious figures. What looks like a prop may carry living significance."]],
      ["bargain", "Bargain without turning it hostile", ["Where bargaining is normal, keep it light and know what the difference means to you. Walk away politely if the price does not suit you.", "Do not bargain in fixed-price stores or over tiny amounts simply to perform the role of a traveler."]],
      ["mistake", "Recover well from a mistake", ["Stop, apologize briefly, and follow the correction. Long explanations about how things work at home can make a small error feel dismissive.", "Travel does not require pretending every custom is comfortable. You can decline respectfully, leave a situation, or protect a personal boundary without insulting the people around you."]]
    ]
  },
  {
    slug: "how-to-use-public-transport-abroad", title: "How to Use Public Transport Abroad", desc: "A beginner-friendly guide to tickets, route planning, station navigation, buses, trains, safety, and public transport etiquette overseas.",
    intro: "Foreign public transport feels complicated because several unfamiliar systems appear at once: maps, fares, platforms, language, and local habits. Break the trip into decisions and it becomes ordinary.",
    sections: [
      ["route", "Plan the complete route", ["Check the correct station entrance, direction, line, transfer, service pattern, and final walk. The nearest station on a map is not always the easiest with luggage or limited mobility.", "Download an offline route and note the last service. Leave extra time for large stations where a transfer can involve long corridors."]],
      ["fare", "Understand the fare system", ["Systems may use paper tickets, stored-value cards, contactless bank cards, zones, distance fares, or validation machines. Read the official visitor instructions before the first journey.", "Use the same card or device to tap in and out. A phone wallet and its physical card may be treated as different payment methods."]],
      ["station", "Navigate stations methodically", ["Follow line names, colors, numbers, and terminal direction rather than relying on one clue. Platform signs often show upcoming stops and service type.", "If confused, step out of the passenger flow before checking a map. Staff can help more easily when you show the destination name and route."]],
      ["bus", "Make buses less intimidating", ["Confirm whether you board at the front or rear, pay on entry or exit, and need to signal the stop. Track progress on an offline map without holding the phone near an open door or window.", "At request stops, stand visibly and use the local hand signal if required. Press the stop button with enough time for the driver to pull over safely."]],
      ["luggage", "Travel with luggage responsibly", ["Avoid peak periods when possible. Use lifts and designated luggage areas, keep bags out of aisles, and do not occupy seats with luggage when passengers are standing.", "On escalators, follow the local standing side—or stand behind others until you can observe it. Keep straps and loose clothing clear of machinery."]],
      ["safety", "Protect yourself without becoming tense", ["Keep wallets and phones controlled in dense crowds and near doors. Verify unexpected service changes through station displays, staff, or official apps.", "If you miss a stop, get off safely at the next one and recalculate. Sudden decisions cause more trouble than a small delay."]]
    ]
  },
  {
    slug: "arriving-late-at-night", title: "What to Do If You Arrive Late at Night", desc: "Plan a safer late-night arrival with confirmed check-in, official transport, backup connectivity, food, and a simple emergency plan.",
    intro: "A late arrival is not automatically unsafe, but it removes options. Counters close, trains stop, streets empty, and tiredness gets louder. Preparation replaces those missing options.",
    sections: [
      ["confirm", "Confirm the accommodation can receive you", ["Tell the property your flight number and realistic arrival window. Confirm whether reception is staffed, a door code is required, or identification must be submitted in advance.", "Save the after-hours phone number and entry instructions offline. Do not assume a booking platform's estimated arrival time reaches the night staff."]],
      ["transport", "Choose transport before landing", ["Check the last train or bus using an official source and have a road option ready. Pre-book only through a provider you can verify, with a clear meeting point and delay policy.", "If using a ride app, know the airport pickup zone and keep enough battery and data to identify the vehicle. Official taxis may be simpler than searching a dark remote pickup area."]],
      ["connection", "Create a connectivity backup", ["Install an eSIM in advance, confirm roaming settings, or save instructions for official airport Wi-Fi. Screenshot the hotel address, map, booking, and driver's details.", "Carry a small power bank where airline rules allow. A cable buried in checked luggage is not a useful late-night backup."]],
      ["food", "Plan food and medication", ["Bring a permitted snack and refill water after security or on arrival. Airport and neighborhood kitchens may be closed even in cities known for nightlife.", "Keep essential medication in cabin baggage. Do not rely on finding a pharmacy after midnight."]],
      ["arrival", "Use a quiet arrival routine", ["Message a trusted person when you enter the vehicle and when you check in. Verify the plate, keep small bags with you, and follow the route at a broad level.", "Once inside, lock the door, charge devices, hydrate, and sleep. Night one is a poor time for an orientation walk in an unfamiliar area."]],
      ["backup", "Know the fallback", ["If check-in fails, remain in a staffed public place while contacting the property and booking platform. A reputable airport hotel or 24-hour hotel desk is safer than following an unverified offer.", "For immediate danger, use the local emergency number. Save it before departure along with the address of your country's nearest consular service."]]
    ]
  },
  {
    slug: "airport-taxi-scams", title: "Airport Taxi Scams and How to Avoid Them", desc: "Recognize common airport taxi scams, choose official rides, confirm fares, protect luggage, and handle disputes without escalating risk.",
    intro: "Most airport drivers are doing an ordinary job. The problem is that a tired visitor cannot easily tell an ordinary driver from an unofficial broker. Use a process that does not depend on reading personalities.",
    sections: [
      ["patterns", "Recognize the common patterns", ["Warning signs include intercepting passengers before the official rank, claiming the meter is broken, saying a hotel is closed, substituting a different car, or insisting that only cash is possible after advertising card payment.", "Another pattern is an unnecessary stop at a shop, tour office, or different hotel where the driver receives commission. Verify any claimed change independently."]],
      ["before-landing", "Reduce the risk before you land", ["Open the airport's official transport page and note where licensed taxis, ride apps, buses, and rail services leave. Save a screenshot because arrivals Wi-Fi may be slow exactly when you need the pickup instructions.", "Write down the accommodation address and one recognizable nearby landmark. Ask the property whether drivers commonly confuse it with another hotel or entrance."]],
      ["official", "Start from an official channel", ["Use the signed taxi rank, airport counter, licensed ride pickup zone, or transport booked directly by your accommodation. Ignore a lanyard or confident manner as proof of authorization.", "Check the airport website shortly before travel because pickup rules and licensed providers can change."]],
      ["fare", "Confirm how the fare works", ["Ask whether the trip uses a meter, fixed zone, app price, tolls, airport surcharge, or receipt. You do not need to negotiate when an official regulated process already exists.", "Have the destination written clearly. If paying cash, carry smaller notes and count change before leaving the vehicle."]],
      ["vehicle", "Verify the car and driver", ["Match the registration plate, driver name, company, vehicle model, or queue receipt. Do not accept a substitute unless the official service confirms it in the app or at the desk.", "Photographing or sharing the plate can be useful where lawful, but do it discreetly and avoid provoking a confrontation."]],
      ["journey", "During the journey", ["Keep passports, phones, and small valuables with you rather than in the trunk. Follow the route loosely and ask calmly about a major deviation.", "Traffic, one-way systems, toll choices, and closures can create legitimate detours. Evidence matters more than immediate accusation."]],
      ["different-systems", "Understand that airport taxi systems differ", ["Some airports issue a queue ticket, some use a prepaid desk, some require a meter, and others allow app pickups only in designated zones. Advice from another country may be wrong here.", "The safest signal is a process published by the airport or local transport authority—not a universal rule such as always negotiating or always refusing a fixed fare."]],
      ["apps", "A ride app is a tool, not a guarantee", ["A recognized app creates a booking record and shows vehicle details, but you still need to match the plate and driver. Never enter a substitute car because someone knows your name or destination.", "Keep communication and payment inside the app where practical. Requests to cancel, pay through an unrelated link, or move to a different pickup point deserve a pause and independent verification."]],
      ["dispute", "Handle a dispute safely", ["If the amount is wrong but you are safe, move to a staffed hotel entrance or public area before debating it. Preserve the receipt, plate, booking, route, and payment record.", "Do not physically fight over luggage or block a vehicle. Report the incident to the airport authority, taxi regulator, app, hotel, card issuer, or police as appropriate."]]
    ]
  },
  {
    slug: "plan-your-first-24-hours-abroad", title: "How to Plan Your First 24 Hours Abroad", desc: "Build a realistic first-day travel plan covering arrival, transport, check-in, food, money, connectivity, rest, and one easy activity.",
    intro: "Your first day abroad should create momentum, not demand performance. A good plan removes avoidable decisions and leaves enough empty space for delays, jet lag, and the pleasure of noticing where you are.",
    sections: [
      ["anchor", "Choose five anchors", ["Plan around five anchors: airport exit, transport, accommodation, food, and sleep. Everything else is optional until those are secure.", "Write the plan in one screen of notes. If it needs a spreadsheet to survive, it is probably too fragile for arrival day."]],
      ["timing", "Use time windows, not exact promises", ["Immigration, baggage, traffic, weather, and check-in all vary. Give yourself broad windows and avoid non-refundable bookings close to landing.", "If you cross many time zones, expect judgment and appetite to arrive on different schedules. Make important purchases before fatigue peaks."]],
      ["transport", "Plan one primary and one backup route", ["Know where each option leaves, how it is paid, when it stops running, and how far the final walk is. Choose based on the entire journey rather than headline speed.", "Late at night, with children, mobility needs, or heavy luggage, a licensed door-to-door option may justify its extra cost."]],
      ["essentials", "Sequence money and connectivity", ["Decide whether you truly need airport cash or a SIM. Convenience can be worth paying for when it makes the onward journey reliable.", "Do not queue twice for products you could set up before travel. An eSIM and a small cash reserve from a bank ATM may free an hour for rest."]],
      ["neighborhood", "Use a small orientation loop", ["After check-in, locate drinking water, a simple meal, the nearest useful transport stop, and a recognizable landmark. Do this in daylight when possible.", "One short loop gives tomorrow's plans a physical context. It is more useful than crossing the city for a checklist attraction."]],
      ["tomorrow", "Prepare tomorrow before sleep", ["Charge devices, secure documents, check weather and opening times, and save the first route. Put out anything needed for an early start.", "If the day went badly, reset rather than compensate. A delayed arrival does not need to become an overpacked second day."]]
    ]
  },
  {
    slug: "travel-safety-basics", title: "Travel Safety Basics for First-Time Travelers", desc: "Practical travel safety basics for transport, accommodation, money, phones, scams, health, nightlife, and emergencies abroad.",
    intro: "Travel safety is not constant suspicion. It is reducing the cost of ordinary mistakes, noticing when pressure replaces choice, and keeping a few backups when plans stop behaving.",
    sections: [
      ["research", "Research the risks that actually fit the trip", ["Read current official travel advisories, local laws, weather alerts, health guidance, and transport information. Separate country-wide headlines from the specific places and activities on your itinerary.", "Check rules for medication, drones, photography, alcohol, driving, and online behavior. Legal consequences do not disappear because a visitor did not know."]],
      ["copies", "Protect identity and access", ["Keep passport and visa copies in secure storage separate from the originals. Use strong device locks, account recovery methods, and transaction alerts.", "Do not hand over a passport as collateral when a copy or deposit is the legitimate norm. Where an accommodation must register it, ask when it will be returned."]],
      ["movement", "Make transport verifiable", ["Use official ranks or recognized apps, match vehicle details, wear seatbelts where available, and avoid impaired drivers. Helmets, licences, and insurance matter for scooters even when enforcement looks relaxed.", "Share plans privately with someone you trust. Public real-time posts can advertise an empty room or reveal that you are alone."]],
      ["scams", "Respond to urgency with a pause", ["Scams often introduce a problem and an immediate solution: a closed hotel, invalid ticket, damaged rental, friendly investment, or emergency request.", "Step into a public place and verify through a channel you choose. Do not let a stranger dial a bank or transport company on your behalf."]],
      ["night", "Keep nightlife decisions reversible", ["Know how you will return before drinking, watch beverages being prepared, stay with trusted companions, and avoid carrying your passport unless required.", "If a situation feels wrong, leave early. Politeness is not a debt that requires accepting a ride, drink, invitation, or isolated shortcut."]],
      ["emergency", "Prepare for the unplanned", ["Save local emergency numbers, insurance assistance, card cancellation contacts, accommodation details, and the nearest consular service. Know which number works for police, ambulance, and fire.", "In an emergency, get to safety first, then document. Contact local authorities and medical services as needed; insurance and consular staff can help with process but do not replace them."]]
    ]
  }
] as const;

function basicGuide(d: typeof basicBlueprints[number]): Guide {
  const guide: Guide = {
    kind: "basic", slug: d.slug, label: d.title, eyebrow: "Travel basics",
    title: d.title, seoTitle: `${d.title} | EZ Roam Guide`, description: d.desc,
    intro: d.intro, lastUpdated: updated, readingTime: "11 min read",
    quick: ["Secure documents and payment backups.", "Save key details for offline use.", "Prefer official transport and information channels.", "Leave margin for fatigue and delays.", "Confirm changing rules with official sources."],
    sections: d.sections.map(([id, heading, paragraphs]) => ({ id, heading, paragraphs: [...paragraphs] })),
    mistakes: ["Building a plan that requires perfect timing", "Keeping every backup in the same bag", "Trusting urgency more than verification", "Assuming rules and payment habits match home"],
    checklist: ["Check official requirements", "Save documents securely", "Prepare two payment methods", "Arrange connectivity", "Plan arrival and a backup", "Share key details privately", "Leave room for rest"],
    faqs: [
      { question: "How far ahead should I prepare?", answer: "Start entry documents and health requirements early; review transport, weather, and operational details again shortly before departure because they change more often." },
      { question: "Should I book everything in advance?", answer: "Book the items that could strand you or sell out, but keep the first day flexible. Too many fixed commitments amplify ordinary delays." },
      { question: "Where should I verify changing travel rules?", answer: "Use immigration, airport, transport operator, health authority, and government travel-advisory websites for the destination and your nationality." }
    ],
    related: ["/travel-basics/first-international-trip-checklist/", "/travel-basics/plan-your-first-24-hours-abroad/", "/countries/", "/cities/"]
  };
  const enhancements: Record<string, Partial<Guide>> = {
    "first-international-trip-checklist": {
      seoTitle: "First International Trip Checklist: Before You Fly | EZ Roam Guide",
      description: "Planning your first international trip? Use this practical checklist for documents, money, phone setup, packing, airport arrival, safety, and day one.",
      related: ["/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/travel-safety-basics/"],
      faqs: [
        { question: "What should I check first for an international trip?", answer: "Start with passport validity, destination entry requirements, transit rules, and health requirements. These can take the longest to correct." },
        { question: "What belongs in cabin baggage?", answer: "Carry travel documents, essential medicine, valuables, chargers, one change of clothes, and anything you cannot safely replace during the first day." },
        { question: "How much should I plan for arrival day?", answer: "Allow for airport transport, food, mobile data, a modest cash reserve, and an unexpected backup ride or hotel change. Confirm current local prices before departure." }
      ]
    },
    "sim-card-vs-esim": {
      seoTitle: "SIM Card vs eSIM for International Travel | EZ Roam Guide",
      description: "SIM card or eSIM for travel? Compare setup, compatibility, cost, calls, verification texts, hotspot use, reliability, and the right option.",
      related: ["/countries/sri-lanka-first-24-hours/", "/countries/japan-first-24-hours/", "/countries/thailand-first-24-hours/", "/countries/singapore-first-24-hours/"],
      faqs: [
        { question: "Is an eSIM better than a physical SIM for travel?", answer: "An eSIM is faster to arrange and keeps the physical slot free, but a local SIM may include a local number or better long-stay value. Phone compatibility and coverage decide the answer." },
        { question: "Can I keep my normal number active?", answer: "Many dual-SIM phones let you keep the home line active for calls or verification texts while using a travel line for data. Disable expensive data roaming and review your carrier's charges." },
        { question: "Should I install an eSIM before flying?", answer: "Installation before departure is usually sensible when the provider allows it. Read when the plan's validity begins and avoid activating it earlier than intended." }
      ]
    },
    "airport-taxi-scams": {
      seoTitle: "Airport Taxi Scams: Warning Signs and Safe Rides | EZ Roam Guide",
      description: "Learn common airport taxi scams, how to find official rides, verify fares, apps and vehicles, protect luggage, and handle disputes safely.",
      related: ["/cities/colombo-arrival-guide/", "/cities/tokyo-arrival-guide/", "/cities/bangkok-arrival-guide/", "/cities/dubai-arrival-guide/"],
      faqs: [
        { question: "How can I identify an official airport taxi?", answer: "Use the process published by the airport: a signed rank, staffed counter, queue ticket, regulated meter, or designated app pickup zone. A badge or verbal claim alone is not proof." },
        { question: "What if a driver says my hotel is closed?", answer: "Contact the hotel using the number in your own booking. Do not accept a replacement property, shop, or tour office suggested by the driver without independent verification." },
        { question: "Should I argue about an incorrect fare?", answer: "Prioritize safety. Move to a staffed public place, keep the receipt and vehicle details, then report the issue through the taxi regulator, airport, app, hotel, or police as appropriate." }
      ]
    }
  };
  const enhancement = enhancements[guide.slug];
  return enhancement ? { ...guide, ...enhancement } : guide;
}

export const basicGuides: Guide[] = basicBlueprints.map(basicGuide);
export const allGuides = [...countryGuides, ...cityGuides, ...basicGuides];

export function hrefFor(guide: Guide) {
  const section = guide.kind === "basic" ? "travel-basics" : `${guide.kind === "country" ? "countries" : "cities"}`;
  return `/${section}/${guide.slug}/`;
}

export function findGuideByHref(href: string) {
  return allGuides.find((guide) => hrefFor(guide) === href);
}
