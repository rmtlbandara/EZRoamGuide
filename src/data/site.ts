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
  checklistHeading?: string;
  mistakes?: string[];
  mistakesHeading?: string;
  faqs: FAQ[];
  related: string[];
  relatedTools?: string[];
  officialSources?: OfficialSource[];
};

const updated = "June 27, 2026";

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
  },
  {
    slug: "south-korea-first-24-hours",
    name: "South Korea",
    city: "Seoul",
    airport: "Incheon, Gimpo, or another South Korean arrival airport",
    transport: "For Seoul-bound arrivals, compare airport rail, limousine buses, official taxis, and booked rides by your exact district and luggage. Incheon is well connected but still far enough from central Seoul that the final stop matters.",
    internet: "Airport Wi-Fi can handle the first checks, while eSIMs, roaming, local SIMs, and portable Wi-Fi each suit different trips. Confirm phone compatibility and whether you need calls, data, or hotspot use.",
    money: "Cards are widely useful in South Korea, but a small amount of won can help with minor purchases, older machines, markets, or backup situations. Use bank ATMs and keep a second payment method separate.",
    local: "Seoul and other large cities have strong metro and bus networks. A transit card or compatible payment setup reduces friction, but you still need to check station exits and last services.",
    food: "A simple first meal near your stay is better than crossing the city while tired. Convenience stores, food courts, and busy local restaurants are practical first-day options.",
    safety: "South Korea is organized for travelers, but arrival mistakes still happen around last trains, wrong station exits, unofficial rides, and tired phone navigation.",
    etiquette: "Queue calmly, keep voices moderate on public transport, use both hands or a polite gesture when giving and receiving, and observe local cues in restaurants and shared spaces.",
    mistake: "Assuming Seoul airport transport ends near your hotel; the wrong station exit or final walk can be the hardest part with luggage."
  },
  {
    slug: "france-first-24-hours",
    name: "France",
    city: "Paris",
    airport: "Paris Charles de Gaulle, Orly, or another French arrival airport",
    transport: "Choose airport transport by your arrival airport, luggage, time of day, and exact first-night area. Rail, official taxis, airport buses, and booked transfers can all be sensible in the right context.",
    internet: "Airport Wi-Fi may be enough to reach your accommodation, but compare roaming, eSIM, and local SIM options if you need reliable data for maps, translation, and messaging.",
    money: "Cards are useful in many places, but carry a modest euro cash backup for small purchases, tips where appropriate, or payment outages. Avoid withdrawing more than you want to protect on day one.",
    local: "French cities often combine metro, tram, bus, regional rail, walking, and taxis. Learn the ticket or contactless rules for your city before assuming every line works the same way.",
    food: "Start with an easy nearby café, bakery, supermarket, or casual restaurant rather than turning the first meal into a cross-city mission. Hydrate and keep plans gentle after the flight.",
    safety: "Watch luggage and phones around stations, ticket machines, and crowded tourist corridors. Use official taxi ranks or verified bookings and be cautious around urgent street offers.",
    etiquette: "A simple greeting before asking for help matters. Keep your tone calm, learn a few polite phrases, and avoid blocking doors, platforms, and pavements while checking your phone.",
    mistake: "Booking a first-night stay or dinner plan without checking the real airport route, final metro/RER leg, luggage, and late-arrival timing."
  },
  {
    slug: "australia-first-24-hours",
    name: "Australia",
    city: "Sydney",
    airport: "Sydney, Melbourne, Brisbane, Perth, or another Australian gateway",
    transport: "Australian airport transport varies by city: rail, buses, taxis, ride-hailing, shuttles, and hotel transfers each serve different routes. Choose by your first-night area and energy after a long-haul flight.",
    internet: "Airport Wi-Fi helps you recover bookings and messages. For the trip itself, compare roaming, eSIM, and local SIM options based on coverage, trip length, and whether you will leave major cities.",
    money: "Cards and contactless payments are common, but a small cash reserve is still useful for backup. Check card fees before travel and keep one alternative payment method separate.",
    local: "Large Australian cities use different local transport systems and payment rules. Learn the basics for your arrival city before the first ride, especially if you are changing from airport rail to buses or trams.",
    food: "Long-haul travelers often need water, a light meal, daylight, and a shower more than sightseeing. Choose something easy near your accommodation and avoid overloading the first afternoon.",
    safety: "Arrival safety is mostly about fatigue, sun, distance, road awareness, and keeping bags controlled. Outdoor conditions can change quickly, so check weather before walking far.",
    etiquette: "Keep shared spaces orderly, queue where expected, respect smoking and alcohol rules, and use a friendly but concise tone with staff and drivers.",
    mistake: "Treating Australian city distances as small because they look simple on a map; airport-to-suburb trips and cross-city rides can take real time."
  },
  {
    slug: "united-states-first-24-hours",
    name: "United States",
    city: "New York City",
    airport: "JFK, Newark, LaGuardia, or another U.S. arrival airport",
    transport: "U.S. airport transport is highly city-specific. Compare official taxis, ride-hailing pickup zones, airport rail links, shuttles, buses, and hotel transfers before leaving the terminal.",
    internet: "Airport Wi-Fi is useful for first messages and bookings. For the rest of the trip, compare roaming, eSIM, and local SIM options based on coverage, data needs, and whether you need a U.S. number.",
    money: "Cards are widely used, but a little cash can help with tips, small purchases, or backup. Understand tipping expectations before the first restaurant, taxi, or hotel service interaction.",
    local: "Public transport quality and payment systems vary widely by city. In some places rail is practical; in others, ride-hailing, taxis, or rental cars may be more realistic.",
    food: "After a long immigration and baggage process, choose an easy meal near your accommodation. Portion sizes, taxes, and tips may make final bills look different from menu prices.",
    safety: "Use official pickup areas, verify ride-hailing plates, keep luggage close, and avoid making big decisions while tired in crowded arrival zones.",
    etiquette: "Personal space, queueing, tipping, and direct service interactions may feel different from home. Ask clearly, read signs, and keep documents ready at checkpoints.",
    mistake: "Assuming every U.S. airport has a simple train into the city; many arrivals require a city-specific mix of rail, shuttle, taxi, or ride-hailing."
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
    related: ["/cities/tokyo-arrival-guide/", "/countries/south-korea-first-24-hours/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/arriving-late-at-night/"],
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
    related: ["/cities/singapore-arrival-guide/", "/countries/australia-first-24-hours/", "/countries/france-first-24-hours/", "/countries/united-states-first-24-hours/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/"],
    officialSources: [
      { label: "Changi Airport arrival guide", href: "https://www.changiairport.com/en/fly/arrival-guide.html" },
      { label: "Immigration & Checkpoints Authority", href: "https://www.ica.gov.sg/" },
      { label: "Singapore visa information — Ministry of Foreign Affairs", href: "https://www.mfa.gov.sg/visiting-singapore/check-if-you-need-a-singapore-visa/" },
      { label: "Visit Singapore", href: "https://www.visitsingapore.com/" },
      { label: "Land Transport Authority", href: "https://www.lta.gov.sg/" }
    ]
  },
  "united-arab-emirates-first-24-hours": {
    related: ["/cities/dubai-arrival-guide/", "/countries/france-first-24-hours/", "/countries/australia-first-24-hours/", "/countries/united-states-first-24-hours/", "/travel-basics/arriving-late-at-night/"]
  },
  "south-korea-first-24-hours": {
    title: "First 24 Hours in South Korea: Arrival Guide for First-Time Travelers",
    seoTitle: "First 24 Hours in South Korea: Arrival Guide for First-Time Travelers",
    description: "Plan your first 24 hours in South Korea with simple tips for airport arrival, transport, SIM/eSIM, money, etiquette, safety, and first-day comfort.",
    intro: "Your first day in South Korea is easier when you separate the important arrival tasks from the excitement of being there. Focus first on getting connected, choosing the right airport route, handling payment basics, and reaching your first stay with enough energy left to eat and rest.",
    readingTime: "13 min read",
    quick: ["Confirm whether you arrive at Incheon, Gimpo, or another airport before choosing transport.", "Set up enough internet for maps, translation, and accommodation messages.", "Keep one card and a small won cash backup available.", "Check the final station exit or bus stop, not only the city name.", "Keep the first evening simple and save ambitious plans for the next day."],
    sections: [
      { id: "arrival-flow", heading: "Before you leave the airport", paragraphs: ["After immigration, baggage, and customs, pause before entering the public arrivals area. Open your accommodation address, check the transport route, use the restroom, and make sure your phone has enough battery for the ride into the city.", "At Incheon or Gimpo, the easiest route depends on your district, luggage, and arrival time. A train may look fastest on a map, while an airport bus can be easier when it stops near your hotel. Rules, prices, transport options, and local requirements can change. Confirm official information before your trip."] },
      { id: "phone-korea", heading: "Internet, SIM, eSIM, and Wi-Fi basics", paragraphs: ["Airport Wi-Fi is useful for first checks, but do not leave the terminal relying only on a connection you cannot keep. Compare roaming, eSIM, local SIM, and portable Wi-Fi based on phone compatibility, trip length, hotspot needs, and whether you need calls.", "Test maps, messaging, translation, and the accommodation address before walking away from a staffed counter or official Wi-Fi area. Keep installation details for any eSIM and do not delete a plan unless the provider confirms it can be restored."] },
      { id: "seoul-route", heading: "Airport to city transport", paragraphs: ["For Seoul, compare airport rail, airport limousine buses, official taxis, and booked rides by the final stop. The right choice is often the one that reduces transfers and the final walk, especially after a long flight.", "If your accommodation is outside Seoul or you are connecting to another city, check whether your route starts from the airport, a city station, or a bus terminal. Do not assume every intercity route is convenient with luggage on arrival day."] },
      { id: "first-night-korea", heading: "First-night area planning", paragraphs: ["A practical first-night area is one with a clear airport route, simple food nearby, and a final walk you can manage with luggage. Famous nightlife or shopping districts are not automatically the best first stop after an international flight.", "If you arrive late, confirm reception or self-check-in instructions before boarding. Keep the accommodation phone number and address saved offline in a format you can show to staff or a driver."] },
      { id: "arrival-pacing-korea", heading: "How to pace your first evening", paragraphs: ["South Korea can make a traveler feel productive quickly because transport, shops, and food are often convenient in major cities. That does not mean the first night should become a full itinerary. Choose one useful task after check-in: food, a short walk, or buying a small essential.", "If you are tempted to go across Seoul immediately, check the return route first. A journey that feels easy at 7 PM can become more awkward when you are tired, carrying purchases, or navigating a station you have not used before."] }
    ],
    checklist: ["Confirm airport and terminal", "Save accommodation address offline", "Test data, maps, and messaging", "Choose train, bus, taxi, or booked ride by final stop", "Prepare card plus small cash backup", "Eat near your stay and hydrate", "Check tomorrow's first route before sleep"],
    mistakes: ["Choosing a route only by headline speed", "Forgetting that station exits can be far apart", "Waiting until the curb to solve phone data", "Planning a busy first night after a long flight", "Assuming every payment terminal or transit setup works like home"],
    faqs: [
      { question: "What should I do first after landing in South Korea?", answer: "Clear arrival formalities, collect bags, connect to official Wi-Fi, open your accommodation address, and choose a verified airport route before leaving the terminal." },
      { question: "Is it better to take train, bus, or taxi from Incheon to Seoul?", answer: "It depends on your district, luggage, arrival time, and final walk. Rail can be efficient, airport buses can be easier near hotels, and official taxis or booked rides suit late arrivals or heavy bags." },
      { question: "Do I need cash on my first day in South Korea?", answer: "Cards are widely useful, but a small amount of won is sensible for backup, older machines, markets, or small purchases." },
      { question: "Should I buy a SIM or eSIM at the airport?", answer: "Airport setup is convenient when you need data immediately. Compare roaming, eSIM, SIM, and portable Wi-Fi based on phone compatibility and trip length." },
      { question: "What should I avoid on my first day in Korea?", answer: "Avoid complex transfers, unverified rides, a long cross-city meal plan, and leaving the airport without working maps or an offline address." }
    ],
    related: ["/cities/seoul-arrival-guide/", "/countries/japan-first-24-hours/", "/travel-basics/first-international-trip-checklist/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/how-to-leave-an-airport-safely/"],
    relatedTools: ["/tools/first-24-hours-travel-planner/", "/tools/sim-esim-roaming-finder/"]
  },
  "france-first-24-hours": {
    title: "First 24 Hours in France: Airport, Transport, Money and Etiquette Guide",
    seoTitle: "First 24 Hours in France: Airport, Transport, Money and Etiquette Guide",
    description: "A simple first-day France arrival guide covering airport transport, money, SIM/eSIM, local etiquette, safety, food, and first-night planning.",
    intro: "Arriving in France feels smoother when you solve the ordinary things first: the route from the airport, a working phone, a payment backup, a calm first meal, and enough rest to make better decisions tomorrow.",
    readingTime: "13 min read",
    quick: ["Choose airport transport by the exact airport and first-night area.", "Set up maps and messaging before leaving terminal Wi-Fi.", "Use cards where practical but keep a modest euro cash backup.", "Learn the local ticket or contactless rules before your first transport ride.", "Start with a polite greeting when asking for help."],
    sections: [
      { id: "airport-france", heading: "What to do before leaving the airport", paragraphs: ["Before you leave the controlled airport area, make sure you have your bags, accommodation address, phone battery, and a route you understand. France has several major gateways, and the right onward route depends heavily on the airport and destination city.", "If you are arriving into Paris, do not treat Charles de Gaulle, Orly, and Beauvais as interchangeable. If you arrive elsewhere in France, confirm whether the airport has rail, tram, bus, taxi, or shuttle service for your actual arrival hour."] },
      { id: "phone-france", heading: "Internet, SIM, eSIM, and public Wi-Fi", paragraphs: ["Airport and café Wi-Fi can help with short tasks, but a first-day plan should not depend on finding public Wi-Fi every time you need a map. Compare roaming, eSIM, and local SIM options before travel.", "If you use a travel eSIM, install it on trusted Wi-Fi and test it before depending on it. If you buy locally, confirm data allowance, validity, hotspot use, and whether the plan includes calls or only data."] },
      { id: "transport-france", heading: "Airport to city transport", paragraphs: ["Rail, metro, tram, bus, official taxi, and booked transfer options vary by city. Choose the route that is easiest to complete with luggage, not just the one that looks cheapest in isolation.", "For taxis, use official ranks or verified bookings. If using public transport, check the ticket type, zones, last service, and final walk from the stop to your accommodation."] },
      { id: "first-night-france", heading: "First-night stay planning", paragraphs: ["For the first night, choose a stay with a route you can explain in one sentence. A charming district is less useful if the arrival path requires a confusing transfer, a long late walk, or check-in instructions that depend on mobile data.", "If your flight lands late, confirm reception hours and nearby food before departure. A simple supermarket, bakery, or casual restaurant near the room can be more valuable than a reservation across town."] },
      { id: "etiquette-france-arrival", heading: "French etiquette for new arrivals", paragraphs: ["A simple “bonjour” or polite greeting before asking a question can change the tone of an interaction. Keep requests clear and brief, especially at counters, cafés, and busy stations.", "Do not block ticket gates, shop entrances, or pavements while checking your phone. Step aside, prepare your payment or ticket, and rejoin the flow when ready."] },
      { id: "arrival-pacing-france", heading: "How to pace your first day", paragraphs: ["France rewards slower first-day decisions. Handle the transport, check-in, food, and a small orientation walk before adding museums, shopping, or a long dinner plan. You will enjoy those more when you are not negotiating every small system for the first time.", "If the arrival goes smoothly, use the extra energy to learn the nearby streets: the closest transit stop, pharmacy, bakery, small supermarket, and a landmark that helps you find the accommodation again. Save the first longer outing for a day when you understand ticketing, opening hours, and how your body feels after the journey."] }
    ],
    checklist: ["Confirm airport-to-stay route", "Save address and booking offline", "Set up phone data or a backup", "Prepare card plus small euro cash reserve", "Check public transport ticket rules", "Eat close to your accommodation", "Confirm tomorrow's first route"],
    mistakes: ["Choosing accommodation without checking the airport route", "Following unofficial transport offers", "Assuming every small purchase takes card", "Skipping greetings when asking for help", "Trying to visit several distant neighborhoods on day one"],
    faqs: [
      { question: "What is the best airport transport in France?", answer: "There is no single best option. It depends on the airport, destination city, arrival time, luggage, and how close the stop is to your accommodation." },
      { question: "Do I need cash in France on arrival day?", answer: "Cards are widely useful, but a modest cash backup can help with small purchases, tips where appropriate, or payment problems." },
      { question: "Is public Wi-Fi enough for a first day in France?", answer: "It can help briefly, but travelers who rely on maps and messages should arrange roaming, eSIM, or a SIM option." },
      { question: "What etiquette matters most when arriving in France?", answer: "Greet people politely before requests, keep your tone calm, and avoid blocking busy shared spaces while checking directions." },
      { question: "What should I avoid after landing in France?", answer: "Avoid unverified rides, complex cross-city plans, large cash withdrawals while tired, and first-night bookings with unclear access." }
    ],
    related: ["/cities/paris-arrival-guide/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/travel-etiquette-mistakes/", "/travel-basics/airport-taxi-scams/"],
    relatedTools: ["/tools/airport-transport-helper/", "/tools/first-day-travel-money-estimator/"]
  },
  "australia-first-24-hours": {
    title: "First 24 Hours in Australia: Arrival Guide for Long-Haul Travelers",
    seoTitle: "First 24 Hours in Australia: Arrival Guide for Long-Haul Travelers",
    description: "Plan your first 24 hours in Australia with practical tips for airport arrival, transport, money, phone setup, jet lag, safety, and first-day planning.",
    intro: "Australia often begins with a long flight, a tired body, and a city that may be larger than it looks on a map. The first day should protect your energy: clear the airport, reach your stay, eat, hydrate, and leave major decisions until you are rested.",
    readingTime: "13 min read",
    quick: ["Expect long-haul fatigue and keep the first plan deliberately light.", "Check airport biosecurity and customs guidance through official sources before packing.", "Choose transport by city, final suburb, luggage, and time of day.", "Cards are common, but keep a backup payment method.", "Use daylight, water, and a simple meal to reset after the flight."],
    sections: [
      { id: "airport-australia", heading: "Before you leave the airport", paragraphs: ["Australia has strict border and biosecurity processes, so packing and declaration questions deserve attention before you fly. Use official sources for current rules and answer arrival questions carefully.", "After baggage and customs, pause to check weather, transport, phone connection, and the distance to your first stay. Australian cities can spread out quickly, and a route that looks simple may involve a long ride or a poor final walk."] },
      { id: "jet-lag-australia", heading: "Managing jet lag on day one", paragraphs: ["For many visitors, the main arrival challenge is not the airport; it is the body clock. Keep the first day practical: daylight when possible, water, a normal meal, shower, device charging, and a reasonable bedtime.", "Avoid major purchases, long drives, and complicated onward travel when you are badly sleep-deprived. A quiet first afternoon can make the whole trip better."] },
      { id: "transport-australia", heading: "Airport to city transport", paragraphs: ["Sydney, Melbourne, Brisbane, Perth, and other gateways each have different airport transport patterns. Some routes are rail-friendly, while others work better by official taxi, ride-hailing, shuttle, or hotel transfer.", "Check the route to your exact suburb, not only the city center. If your first stay is outside the central area, the easiest route may involve a transfer or a direct road option."] },
      { id: "comfort-australia", heading: "Food, water, and first-day comfort", paragraphs: ["A simple café, supermarket, or casual meal near your accommodation is enough for the first day. Hydration matters after long flights, especially if you arrive into heat, dry air, or a long outdoor walk.", "Check the weather before leaving the hotel for an orientation walk. Sun, rain, wind, and distance can change a plan that looked easy from the room."] },
      { id: "first-night-australia", heading: "First-night planning after a long flight", paragraphs: ["Choose the first stay by transport clarity and recovery, not only by attractions. A central hotel can be useful, but only if the airport route is realistic and the check-in process works with your arrival time.", "If you have an onward domestic flight, long drive, or regional connection, build a generous buffer. A rested morning transfer is often safer and calmer than forcing another major journey after a long-haul arrival."] },
      { id: "arrival-pacing-australia", heading: "A realistic first-day rhythm", paragraphs: ["A good first Australian day might be airport, accommodation, food, daylight, shower, a short walk, and sleep. That may sound ordinary, but it protects your judgement for driving, swimming, hiking, or navigating a new city later.", "If you arrive early and cannot check in, ask about luggage storage and choose a nearby, low-effort activity. Avoid falling asleep in a public place with bags or carrying valuables around all day while exhausted. Keep sunscreen, a refillable water bottle, and weather-appropriate layers easy to reach if you plan to spend time outside."] }
    ],
    checklist: ["Confirm official arrival and customs requirements", "Save accommodation address offline", "Set up phone data and maps", "Choose transport by exact suburb", "Keep card plus backup payment ready", "Hydrate, eat, shower, and rest", "Plan tomorrow after sleep"],
    mistakes: ["Planning a long drive immediately after a long-haul flight", "Ignoring biosecurity and customs rules before packing", "Assuming all airport routes are rail-friendly", "Underestimating city distances", "Skipping rest because the first day feels too valuable"],
    faqs: [
      { question: "What should I do first after landing in Australia?", answer: "Complete arrival formalities, collect bags, confirm phone access, check the route to your exact accommodation, and keep the rest of the day simple." },
      { question: "How should I handle jet lag on the first day?", answer: "Use daylight, hydration, a simple meal, a shower, and an early relaxed evening. Avoid demanding plans until you know how you feel." },
      { question: "Do I need cash in Australia?", answer: "Cards and contactless payments are common, but a small backup and a second payment method are still sensible." },
      { question: "Should I buy a SIM or eSIM for Australia?", answer: "Compare roaming, eSIM, and local SIM options based on trip length and whether you will travel outside major cities." },
      { question: "What should long-haul travelers avoid on day one?", answer: "Avoid long drives, tight connections, expensive timed activities, and decisions that require perfect focus after little sleep." }
    ],
    related: ["/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/low-stress-first-day-new-city/", "/countries/singapore-first-24-hours/", "/countries/united-states-first-24-hours/"],
    relatedTools: ["/tools/first-day-itinerary-builder/", "/tools/travel-adapter-charging-checklist/", "/tools/first-24-hours-travel-planner/"]
  },
  "united-states-first-24-hours": {
    title: "First 24 Hours in the United States: Arrival Guide for International Visitors",
    seoTitle: "First 24 Hours in the United States: Arrival Guide for International Visitors",
    description: "A practical first-day USA arrival guide for international visitors, covering airport exits, transport, money, phone setup, tipping, safety, and planning.",
    intro: "The United States is not one arrival system. A first day in New York, Los Angeles, Chicago, Miami, or Dallas can feel completely different, so your best preparation is city-specific transport, a working phone, card readiness, and a basic understanding of tipping.",
    readingTime: "13 min read",
    quick: ["Use official airport signs for taxis, ride-hailing, shuttles, and public transport.", "Check whether your arrival city has practical rail or needs a road transfer.", "Prepare for card payments plus tipping awareness.", "Set up phone data before leaving airport Wi-Fi.", "Choose a first-night area with a clear route and simple food nearby."],
    sections: [
      { id: "airport-usa", heading: "Before you leave the airport", paragraphs: ["After immigration, baggage, and customs, take a moment to confirm your terminal, pickup zone, accommodation address, and payment method. U.S. airports can be large, and ride-hailing or shuttle pickup areas may not be beside the arrivals door.", "If something is unclear, use airport information desks, official signs, airline staff, or your accommodation's published contact details. Avoid being redirected by someone who approaches you with urgency."] },
      { id: "transport-usa", heading: "Airport to city transport", paragraphs: ["Some U.S. airports have useful rail links; others rely more on taxis, ride-hailing, shuttles, buses, rental cars, or hotel transfers. Check the best option for your airport and neighborhood, not for the country in general.", "For ride-hailing, confirm the pickup zone, license plate, driver, and app record before entering. For taxis, use official ranks and understand whether tolls, airport fees, or tips may affect the final cost."] },
      { id: "money-tipping-usa", heading: "Money, cards, and tipping basics", paragraphs: ["Cards are widely used, and many travelers can manage mostly cashless. Still, a small cash reserve is useful for tips, vending, small businesses, or backup.", "Tipping norms can affect taxis, restaurants, bars, hotel services, and deliveries. The exact amount depends on service and context, so learn the category before you land rather than trying to decode it while exhausted."] },
      { id: "first-night-usa", heading: "First-night stay planning", paragraphs: ["Choose the first-night stay by route clarity, check-in reliability, and safe arrival logistics. A cheaper room far from transit may become expensive or tiring after airport fees, tolls, late-night rides, or a long final walk.", "If arriving late, confirm reception hours, entry instructions, and food options. Save the address and booking offline because phone verification and roaming can fail at exactly the wrong time."] },
      { id: "phone-verification-usa", heading: "Phone setup and account verification", paragraphs: ["A U.S. arrival often depends on phone access: ride-hailing, hotel messages, bank alerts, map apps, and sometimes two-factor authentication. Before travel, make sure important accounts have backup access that does not rely on a single SIM or one phone number.", "If you plan to use a U.S. SIM or eSIM, confirm phone compatibility and whether the plan includes data only or a number for calls and texts. Test it before leaving the airport if your first transport depends on it."] },
      { id: "arrival-pacing-usa", heading: "How to keep the first day manageable", paragraphs: ["The first day in the United States can include long airport corridors, immigration queues, baggage waits, road traffic, and a new tipping/payment rhythm. Do not schedule an expensive event close to landing unless missing it would not matter.", "Once checked in, choose one nearby meal and one small orientation loop. Learn where you would get transport back, where to buy water or basic supplies, and how long tomorrow's first trip will take. If you need to drive later in the trip, leave that decision for a rested day whenever possible."] }
    ],
    checklist: ["Confirm airport pickup or public transport route", "Save hotel address offline", "Set up data before leaving Wi-Fi", "Prepare card and small cash backup", "Understand basic tipping categories", "Verify ride or taxi before entering", "Eat, hydrate, and keep day one light"],
    mistakes: ["Assuming every airport has easy rail into the city", "Going to the wrong ride-hailing pickup zone", "Forgetting that tax, fees, and tips can change final costs", "Depending on phone wallet only with low battery", "Booking a first night with a difficult late check-in"],
    faqs: [
      { question: "What should international visitors do first after landing in the United States?", answer: "Finish arrival formalities, collect bags, confirm your phone connection, open your accommodation address, and choose transport through official airport channels." },
      { question: "Is ride-hailing easy at U.S. airports?", answer: "It can be useful, but pickup zones may be separate from arrivals. Verify the vehicle, plate, driver, and app record before entering." },
      { question: "Do I need cash in the USA?", answer: "Cards are widely used, but small cash can help with tips, small purchases, or backup if a card or phone wallet fails." },
      { question: "How should I think about tipping on arrival day?", answer: "Learn the basic tipping categories before travel. Tipping can apply to taxis, restaurants, bars, hotel services, and deliveries depending on context." },
      { question: "What should I avoid on my first day in the United States?", answer: "Avoid unverified rides, overcomplicated cross-city plans, driving while exhausted, and relying on a phone connection you have not tested." }
    ],
    related: ["/cities/new-york-city-arrival-guide/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/travel-safety-basics/", "/travel-basics/airport-taxi-scams/", "/countries/australia-first-24-hours/"],
    relatedTools: ["/tools/airport-transport-helper/", "/tools/first-time-traveler-confidence-checker/"]
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
  ["ho-chi-minh-city-arrival-guide", "Ho Chi Minh City", "Vietnam", "Tan Son Nhat International Airport", "Official taxis, ride apps, buses, and transfers serve the airport. Keep your address visible and verify the vehicle before loading bags.", "Ride apps and taxis are practical; buses suit confident travelers. Walk carefully and treat road crossing as a predictable, attentive process.", "Keep your phone away from the traffic side of the pavement, particularly while waiting for a ride."],
  ["seoul-arrival-guide", "Seoul", "South Korea", "Incheon or Gimpo", "Incheon has rail, airport buses, official taxis, and booked-ride options; Gimpo is closer for many city routes. Choose by district, final stop, luggage, and arrival time.", "Metro and buses are strong, but station exits matter. A transit card or compatible setup helps, and a direct airport bus may beat a faster-looking route with stairs.", "A late first-night plan in Seoul can be tempting, but solve the airport-to-bed route first and leave nightlife for a rested evening."],
  ["paris-arrival-guide", "Paris", "France", "Charles de Gaulle, Orly, or Beauvais", "Paris airport choices are not interchangeable. Rail, official taxis, buses, trams, and transfers fit different airports and neighborhoods.", "Metro, RER, tram, bus, and walking can combine well once you understand tickets, zones, and the final walk. Keep luggage in mind around stairs and transfers.", "Paris rewards slow first-day pacing. A nearby meal and short orientation walk are better than chasing a distant landmark while tired."],
  ["london-arrival-guide", "London", "United Kingdom", "Heathrow, Gatwick, Stansted, Luton, City, or Southend", "London has several airports with different rail, coach, taxi, and transfer routes. The airport name alone does not tell you the easiest first-night route.", "Public transport is extensive, and contactless-style payment is useful where accepted. Still, airport rail, Tube, buses, and national rail have different patterns.", "A hotel beside the right station can save more energy than a famous postcode with a complicated final transfer."],
  ["new-york-city-arrival-guide", "New York City", "United States", "JFK, Newark, or LaGuardia", "JFK, Newark, and LaGuardia each require different planning. Rail links, airport buses, official taxis, ride-hailing, and shuttles all depend on your borough and luggage.", "Subway, commuter rail, buses, ferries, taxis, and walking each solve different New York journeys. The easiest first route is often the one with fewer changes.", "New York is stimulating immediately. Keep the first evening local so you do not turn jet lag, bags, and a new transit system into one big puzzle."]
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
    related: ["/countries/japan-first-24-hours/", "/cities/seoul-arrival-guide/", "/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/arriving-late-at-night/"],
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
  },
  "singapore-arrival-guide": {
    related: ["/countries/singapore-first-24-hours/", "/cities/london-arrival-guide/", "/cities/new-york-city-arrival-guide/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/cash-vs-card-while-traveling/"]
  },
  "dubai-arrival-guide": {
    related: ["/countries/united-arab-emirates-first-24-hours/", "/cities/london-arrival-guide/", "/cities/new-york-city-arrival-guide/", "/travel-basics/arriving-late-at-night/", "/travel-basics/how-to-leave-an-airport-safely/"]
  },
  "seoul-arrival-guide": {
    title: "Seoul Arrival Guide: Your First 24 Hours in South Korea",
    seoTitle: "Seoul Arrival Guide: Your First 24 Hours in South Korea",
    description: "Plan your first 24 hours in Seoul with simple tips for airport transport, SIM/eSIM, T-money-style transit planning, money, food, safety, and rest.",
    intro: "Seoul is organized, fast, and large enough that a first arrival works best with a simple sequence: land, connect, choose the right airport route, reach your district, eat nearby, and learn tomorrow's first transport step.",
    readingTime: "12 min read",
    quick: ["Confirm whether you arrive through Incheon or Gimpo.", "Choose airport transport by district and final stop, not only speed.", "Set up data before leaving airport Wi-Fi.", "Prepare a card setup plus a small won backup.", "Keep the first meal and first walk close to your accommodation."],
    sections: [
      { id: "seoul-airport-basics", heading: "Airport arrival basics", paragraphs: ["Incheon is the main international gateway for many travelers, while Gimpo can be convenient for some regional and domestic routes. Before buying a ticket or requesting a ride, confirm your airport, terminal, district, and check-in time.", "The first useful task is not sightseeing research. It is opening your hotel address, checking the final station exit or bus stop, and making sure your phone can keep maps and messages working after you leave Wi-Fi."] },
      { id: "airport-to-seoul", heading: "Getting from the airport to Seoul", paragraphs: ["Airport rail can be efficient for some districts, while airport buses can be easier when they stop near hotels and reduce stairs. Official taxis or booked rides may be calmer for late arrivals, families, or heavy luggage.", "Compare the full route: waiting time, transfers, lift access, final walk, and whether you can still complete it if the flight is delayed. A direct option that takes a little longer can be the better first-day route."] },
      { id: "seoul-transit", heading: "Local transport basics", paragraphs: ["Seoul's metro and bus system is extensive. A transit-card-style setup or compatible payment method can reduce friction, but the details can change, so confirm current options before travel.", "Station exits matter in Seoul. A hotel can be close to a station but far from the wrong exit, especially with luggage, rain, stairs, or crowded transfers."] },
      { id: "seoul-first-meal", heading: "First meal and water tips", paragraphs: ["Choose a simple first meal near your accommodation: a food court, convenience store, casual restaurant, or café. Seoul has plenty of good food, but day one is not the time to chase a hard-to-find place across town.", "Keep water with you after the airport ride, especially if you arrive in summer or after a long flight. A small snack in your bag helps if check-in takes longer than expected."] },
      { id: "seoul-etiquette", heading: "Etiquette for your first day in Seoul", paragraphs: ["Keep voices moderate on public transport, queue neatly, and watch how people handle payment, trays, and shared spaces. In restaurants, a little observation often solves more than a rushed question.", "When giving or receiving items, a two-hand gesture or supporting the arm can feel more polite. You do not need perfect etiquette on day one, but patience and attention help." ] }
    ],
    checklist: ["Airport and terminal confirmed", "Hotel address saved offline", "Phone data tested", "Airport route chosen by final stop", "Payment and small cash backup ready", "Nearby first meal chosen", "Tomorrow's first route checked"],
    mistakes: ["Choosing the wrong airport route for your district", "Ignoring station exits", "Leaving data setup until the street", "Planning a late cross-city night out after landing", "Assuming every transit or payment rule is unchanged"],
    faqs: [
      { question: "What is the easiest way from Incheon Airport to Seoul?", answer: "It depends on your district and luggage. Airport rail can be efficient, airport buses can reduce transfers, and official taxis or booked rides can suit late arrivals or heavy bags." },
      { question: "Should I get phone data at the airport in Seoul?", answer: "If you need maps and messages immediately, airport setup can be convenient. Compare eSIM, SIM, roaming, and portable Wi-Fi based on your phone and trip length." },
      { question: "Do I need cash in Seoul on day one?", answer: "Cards are widely useful, but a small won backup is sensible for minor purchases, older machines, markets, or payment problems." },
      { question: "Where should I stay the first night in Seoul?", answer: "Choose an area with a clear airport route, reliable check-in, nearby food, and a manageable final walk from the stop or station." }
    ],
    related: ["/countries/south-korea-first-24-hours/", "/cities/tokyo-arrival-guide/", "/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/arriving-late-at-night/"],
    relatedTools: ["/tools/airport-transport-helper/", "/tools/first-day-itinerary-builder/"]
  },
  "paris-arrival-guide": {
    title: "Paris Arrival Guide: Your First 24 Hours in France",
    seoTitle: "Paris Arrival Guide: Your First 24 Hours in France",
    description: "A simple Paris arrival guide for first-time visitors, covering airport transport, money, SIM/eSIM, public transport, safety, food, and first-night planning.",
    intro: "Paris is easier on day one when you resist the urge to prove you have arrived. Get from the airport to your stay, understand the local transport basics, eat something simple, and save the big Paris moment for when your body has caught up.",
    readingTime: "12 min read",
    quick: ["Check whether you arrive at CDG, Orly, or another airport before planning the route.", "Choose public transport, official taxi, or transfer by final address and luggage.", "Keep cards ready but carry a modest euro backup.", "Watch phones and bags in crowded station areas.", "Use a polite greeting before asking for help."],
    sections: [
      { id: "paris-airport-basics", heading: "Airport arrival basics", paragraphs: ["Paris arrivals can involve Charles de Gaulle, Orly, Beauvais, or another route. Each has different onward transport, travel time, and late-night considerations, so check the airport code before you build the first-day plan.", "Before leaving the terminal, open your accommodation address, check the route, and confirm whether you need a ticket, official taxi rank, app pickup, or transfer meeting point."] },
      { id: "airport-to-paris", heading: "Getting from the airport to Paris", paragraphs: ["Rail and public transport can be useful, but luggage, stairs, service changes, and the final walk matter. Official taxis or transfers can be better for late arrivals, groups, or stays far from a convenient station.", "If using a taxi, use official ranks or verified bookings. If using rail or bus, confirm tickets, zones, operating hours, and whether the stop is actually close to your accommodation entrance."] },
      { id: "paris-first-night", heading: "Where to keep the first night simple", paragraphs: ["The best first-night area is not always the most romantic district. Choose a place with a clear airport route, reliable check-in, nearby food, and a walk you can manage with luggage.", "Avoid stacking a museum, dinner reservation, and viewpoint after landing. A short neighborhood loop, bakery or café stop, and early sleep can be the smarter Paris arrival."] },
      { id: "paris-food-comfort", heading: "Food, water, and first-day comfort", paragraphs: ["A bakery, supermarket, café, or casual neighborhood restaurant is enough for the first meal. If you arrive hungry and tired, choose clear opening hours and a nearby location over a famous recommendation.", "Drink water, charge your phone, and check tomorrow's route before you fall asleep. Paris is easier to enjoy when the first morning starts with a working map and a rested traveler. Keep the first evening close to your room if you are still learning the metro, RER, and neighborhood layout."] },
      { id: "paris-etiquette", heading: "Etiquette for first-time visitors", paragraphs: ["A greeting before a request matters. Use a simple polite opening, keep your question short, and be ready to show the address or ticket rather than explaining everything in a crowded line.", "Step aside before checking your phone in stations or narrow pavements. Paris is busy, and blocking movement while searching for directions is an easy first-day frustration."] }
    ],
    checklist: ["Airport code confirmed", "Accommodation address saved", "Transport ticket or pickup plan understood", "Phone data tested", "Card and euro backup ready", "Nearby food option chosen", "Tomorrow's first route checked"],
    mistakes: ["Treating all Paris airports as the same", "Choosing the fastest-looking route with too many stairs", "Using unofficial transport offers", "Planning a packed sightseeing route after landing", "Forgetting polite greetings in service interactions"],
    faqs: [
      { question: "What is the best way from CDG to Paris for a first-time visitor?", answer: "It depends on your district, luggage, and arrival time. Rail can work well for some routes, while official taxis or transfers may be easier with heavy bags or late arrivals." },
      { question: "Do I need cash in Paris?", answer: "Cards are widely useful, but a modest euro cash backup can help with small purchases, tips where appropriate, or payment issues." },
      { question: "Is Paris public transport hard with luggage?", answer: "It can be manageable, but stairs, transfers, and crowded platforms matter. Check the final station and walk before choosing the route." },
      { question: "What should I avoid on my first day in Paris?", answer: "Avoid unofficial rides, complex cross-city plans, crowded phone use with loose bags, and time-sensitive bookings close to landing." }
    ],
    related: ["/countries/france-first-24-hours/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/travel-etiquette-mistakes/", "/travel-basics/airport-taxi-scams/"],
    relatedTools: ["/tools/arrival-day-walking-distance-helper/", "/tools/airport-transport-helper/"]
  },
  "london-arrival-guide": {
    title: "London Arrival Guide: Your First 24 Hours in the UK",
    seoTitle: "London Arrival Guide: Your First 24 Hours in the UK",
    description: "Plan your first 24 hours in London with airport transport tips, public transport basics, money advice, phone setup, safety reminders, and first-day planning.",
    intro: "London arrival planning begins with one question: which airport? Once that is clear, the city becomes much easier to handle. Pick the route that gets you to the right area with the least first-day friction.",
    readingTime: "12 min read",
    quick: ["Check the exact airport before booking airport transport.", "Choose rail, Tube, coach, taxi, or transfer by final area and luggage.", "Contactless-style payment is useful where accepted, but keep a backup.", "Set up phone data before leaving airport Wi-Fi.", "Avoid a complicated cross-city first evening."],
    sections: [
      { id: "london-airport-basics", heading: "Airport arrival basics", paragraphs: ["Heathrow, Gatwick, Stansted, Luton, City, and Southend serve different sides of the region. Your airport route should be built around the first-night address, not a generic idea of central London.", "Before leaving the airport, confirm terminal, rail or coach station, taxi rank, ride pickup point, and whether your accommodation check-in works if the flight is delayed."] },
      { id: "airport-to-london", heading: "Getting from the airport to London", paragraphs: ["Some airport rail services are fast but may arrive at a station far from your stay. Coaches can be economical but slower. Taxis and transfers can be calmer with bags, but distance and traffic matter.", "Compare total effort: ticket purchase, platform changes, stairs, service frequency, final walk, and what happens if you arrive late. The simplest first route is not always the fastest advertised route."] },
      { id: "london-payment", heading: "Money, cards, and contactless payment basics", paragraphs: ["Card and contactless-style payment is common in London, including much of the transport system where accepted. Still, bring a backup card and know what fees your bank applies.", "Use the same card or device consistently where fare systems require it. Keep a little backup cash if you are uncomfortable relying entirely on phones and foreign cards."] },
      { id: "london-first-night", heading: "First-night area planning", paragraphs: ["A good first-night London area is one with a direct or simple airport route and a final walk that works with your luggage. A famous neighborhood is less useful if it requires multiple changes after a delayed flight.", "Check whether your accommodation is near the station you think it is. London place names, rail stations, and boroughs can be confusing to newcomers, and a short map line can hide a busy road or stairs."] },
      { id: "london-habits", heading: "Local etiquette and practical tips", paragraphs: ["Stand clear of doors, let passengers off first, and avoid stopping suddenly at ticket gates or escalator exits. London moves quickly in transport spaces, but staff can be helpful when asked clearly.", "Keep bags controlled in busy stations and pubs, and avoid letting a first-day phone problem turn into a pavement obstacle. Step aside, solve it, and rejoin the flow."] }
    ],
    checklist: ["Airport and terminal confirmed", "First-night area route checked", "Phone data or Wi-Fi backup ready", "Card and backup payment prepared", "Final walk reviewed", "Simple nearby food plan chosen", "Tomorrow's first journey saved"],
    mistakes: ["Booking transport from the wrong London airport", "Choosing accommodation without checking the final rail or Tube leg", "Relying only on a phone wallet with low battery", "Dragging heavy luggage through complex transfers unnecessarily", "Planning a distant evening after a long flight"],
    faqs: [
      { question: "Which London airport is easiest for first-time visitors?", answer: "The easiest airport depends on your airline and where you are staying. Heathrow may suit some areas, Gatwick others, and the smaller airports can be much farther from your first-night plan." },
      { question: "Should I use public transport from the airport to London?", answer: "Often yes, but check luggage, transfers, final walk, and late-night timing. A taxi or transfer can be easier for some arrivals." },
      { question: "Do I need cash in London?", answer: "Many payments are card-based, but a backup payment method and a small cash reserve are still sensible for arrival day." },
      { question: "What should I do first after checking in?", answer: "Eat nearby, hydrate, learn your nearest transport stop, and save tomorrow's first route before planning anything ambitious." }
    ],
    related: ["/travel-basics/how-to-use-public-transport-abroad/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/low-stress-first-day-new-city/", "/cities/dubai-arrival-guide/", "/cities/singapore-arrival-guide/"],
    relatedTools: ["/tools/airport-transport-helper/", "/tools/first-day-itinerary-builder/", "/tools/first-day-travel-money-estimator/"]
  },
  "new-york-city-arrival-guide": {
    title: "New York City Arrival Guide: Your First 24 Hours in the USA",
    seoTitle: "New York City Arrival Guide: Your First 24 Hours in the USA",
    description: "A practical New York City arrival guide covering JFK, Newark, LaGuardia, transport, money, phone setup, tipping, safety, food, and first-day planning.",
    intro: "New York feels immediate: noise, choices, traffic, signs, platforms, and people moving with purpose. Your first 24 hours should be simple enough that the city can impress you without exhausting you.",
    readingTime: "12 min read",
    quick: ["Confirm whether you land at JFK, Newark, or LaGuardia.", "Choose airport transport by borough, luggage, time, and transfers.", "Set up data before leaving airport Wi-Fi.", "Prepare for card payments, taxes, fees, and tipping.", "Keep the first evening in one neighborhood."],
    sections: [
      { id: "nyc-airport-basics", heading: "Airport arrival basics", paragraphs: ["JFK, Newark, and LaGuardia have different transport patterns, pickup zones, and travel times. Before you leave the terminal, confirm your borough, address, and whether your route uses rail, bus, taxi, ride-hailing, or shuttle.", "New York airport areas can feel busy when you are tired. Use official signs, staffed counters, app instructions, or taxi ranks rather than following someone who approaches you with a better-sounding offer."] },
      { id: "airport-to-nyc", heading: "Getting from the airport to the city", paragraphs: ["Public transport can be cost-effective but may involve transfers and stairs. Official taxis and ride-hailing can be more direct but affected by traffic, tolls, airport fees, and pickup-zone rules.", "Choose the option you can complete calmly. If you are arriving late, traveling with family, or carrying heavy luggage, a verified direct ride may be worth the simplicity."] },
      { id: "nyc-tipping", heading: "Money, cards, and tipping basics", paragraphs: ["Cards are widely used in New York, but a small cash reserve can help with tips or backup. Remember that listed prices may not include tax, and service situations can involve tipping.", "You do not need to solve every tipping nuance on the plane. Learn the main categories before arrival: taxis or rides, sit-down restaurants, bars, hotel services, and deliveries."] },
      { id: "nyc-food-comfort", heading: "Food, water, and first-day comfort", paragraphs: ["New York has endless food choices, which is exactly why the first meal should be easy. Choose something near your stay, especially if you are carrying bags or arriving after a long flight.", "Buy water or basic supplies before you become too tired to make decisions. If your room is not ready, ask about luggage storage instead of wandering the city with everything important on you."] },
      { id: "nyc-first-night", heading: "First-night area planning", paragraphs: ["Stay where the arrival route and next morning make sense. Manhattan may be convenient for many visitors, but parts of Brooklyn, Queens, New Jersey, or airport-area hotels can be practical depending on your plans.", "Check the final walk, building entrance, and late check-in. A short-looking route can feel different with luggage, rain, subway stairs, or a tired phone battery."] }
    ],
    checklist: ["Airport and borough confirmed", "Hotel address saved offline", "Phone data tested", "Transport route or pickup zone understood", "Card and small cash backup ready", "Tipping categories reviewed", "Simple nearby food plan chosen"],
    mistakes: ["Assuming JFK, Newark, and LaGuardia use the same route", "Accepting unofficial ride offers", "Forgetting tolls, fees, taxes, and tips", "Dragging luggage through unnecessary transfers", "Planning a cross-borough first evening after a long flight"],
    faqs: [
      { question: "What is the easiest airport transport for first-time visitors to New York?", answer: "It depends on your airport, borough, luggage, and arrival time. Public transport can work well for some routes, while official taxis or verified rides are simpler for others." },
      { question: "Should I take a taxi or subway from the airport?", answer: "Compare the full route. Subway or rail may be cheaper, but taxis or rides can reduce transfers with luggage or late arrivals." },
      { question: "Do I need cash in New York City?", answer: "Cards are widely accepted, but small cash can help with tips, backup, or occasional small purchases." },
      { question: "What should I avoid on my first day in NYC?", answer: "Avoid unofficial rides, complex cross-city plans, loose phone use near traffic, and expensive timed bookings close to landing." }
    ],
    related: ["/countries/united-states-first-24-hours/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/airport-taxi-scams/", "/travel-basics/arriving-late-at-night/", "/cities/london-arrival-guide/"],
    relatedTools: ["/tools/airport-transport-helper/", "/tools/first-day-itinerary-builder/"]
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
  },
  {
    slug: "airport-arrival-checklist", title: "Airport Arrival Checklist for First-Time International Travelers", desc: "Use this international airport arrival checklist to handle immigration, baggage, customs, internet, money, transport, and first steps after landing.",
    intro: "Landing abroad can feel busy before anything has actually gone wrong. This airport arrival checklist gives first-time international travelers a calm order of operations from the seatbelt sign to the airport exit.",
    sections: [
      ["before-plane", "Before you leave the plane", ["Do the small resets while everyone is standing in the aisle: put your passport, arrival documents, phone, wallet, and boarding pass where you can reach them without unpacking.", "Turn off airplane mode only when the crew allows it, check your connection if roaming is already active, and keep the address of your first accommodation ready for immigration or transport." ]],
      ["immigration", "At immigration and passport control", ["Join the correct lane for visitors, residents, e-gates, or transit passengers. Have your passport open, remove headphones, and answer questions simply without adding unnecessary detail.", "Entry requirements can change by nationality, route, and trip purpose. Use official government sources before travel and keep visa approvals or arrival forms available offline." ]],
      ["baggage", "Collecting baggage", ["Check the carousel number on the airport screens and confirm the baggage tag before leaving with a similar-looking suitcase. If a bag is missing, report it before exiting the baggage area.", "Keep valuables, medicine, and documents with you, not on top of a trolley. Tired arrivals often lose phones while reorganizing bags near the carousel." ]],
      ["customs", "Customs and declarations", ["Follow the declaration channel that matches what you are carrying. Food, medicine, cash, alcohol, tobacco, electronics, and commercial goods may have rules even when they seem ordinary at home.", "If unsure, ask a customs officer rather than guessing. A short question is easier than explaining later why an item was not declared." ]],
      ["internet", "Getting connected to the internet", ["Before leaving the terminal, decide whether airport Wi-Fi, roaming, an eSIM, or a local SIM is enough for the onward journey. Test maps and messaging without depending on the Wi-Fi signal.", "For a deeper comparison, read the SIM Card vs eSIM for International Travel guide and choose based on phone compatibility, trip length, and whether you need calls or just data." ]],
      ["money", "Getting local money", ["A small amount of local cash is useful for transport, tips where appropriate, water, and small shops. Use a bank ATM where possible and avoid withdrawing more than you can protect.", "If a terminal or ATM asks whether to charge in your home currency, pause before accepting. Dynamic currency conversion may cost more than paying in the local currency." ]],
      ["transport", "Choosing safe airport transport", ["Use the airport's signed train, bus, taxi, ride-hailing, hotel-transfer, or private-transfer process. Be cautious with anyone who intercepts you before the official transport area.", "The cheapest option is not automatically the best after a long flight. Luggage, children, late arrival, weather, and the final walk all matter." ]],
      ["before-exit", "What to do before leaving the airport", ["Use the restroom, fill or buy water where appropriate, check the address one more time, and message someone that you have arrived. These tasks are easier inside a staffed terminal than on a pavement outside.", "Take a minute to make your bags manageable. Keep passport and wallet secure, phone charged, and transport details visible enough that you do not need to stop repeatedly." ]],
      ["common-mistakes", "Common arrival mistakes", ["Common mistakes include rushing to the first taxi offer, leaving without a working map, exchanging too much money at a poor rate, and assuming every official-looking person is official.", "Another mistake is trying to solve everything at once. Finish the tasks that affect the next two hours first: entry, bags, connection, payment, and transport." ]],
      ["arrival-note", "A quick note on changing rules", ["Rules, prices, transport options, and local requirements can change. Confirm official information before your trip, especially for visas, customs declarations, airport transport, and restricted items.", "Your goal is not to memorize the airport. It is to have enough verified information to stay calm when the arrivals hall becomes noisy." ]]
    ]
  },
  {
    slug: "best-airport-transport-new-country", title: "How to Choose the Best Airport Transport in a New Country", desc: "Compare airport trains, buses, taxis, ride-hailing apps, hotel transfers, and private transfers so your first trip into the city is calm.",
    intro: "The best airport transport is the option that gets you to the right door with the least avoidable stress. Speed matters, but on arrival day luggage, timing, safety, and clarity matter just as much.",
    sections: [
      ["why-matters", "Why airport transport matters on day one", ["Your airport transfer sets the tone for the first few hours abroad. A confusing or unsafe ride can drain energy before you even check in.", "Think in terms of the full journey: airport exit, ticket or pickup point, waiting time, luggage, transfer changes, final walk, payment, and what happens if the flight is late." ]],
      ["train-metro", "Train or metro from the airport", ["Airport rail can be fast, predictable, and good value when the station is easy to reach and your accommodation is near the line. It works best with light luggage and arrivals during operating hours.", "Check the final walk and transfer station before choosing rail. A fast train followed by a difficult interchange and stairs may be harder than a slower door-to-door option." ]],
      ["bus-shuttle", "Airport bus or shuttle", ["Airport buses often reach hotel districts, central stations, or areas not served directly by rail. They can be a practical middle ground for travelers with bags.", "Confirm where the bus stops, how tickets are bought, and whether luggage storage is available. Late-night, holiday, and reduced schedules can change the answer." ]],
      ["official-taxi", "Official airport taxi", ["An official taxi is useful when you arrive tired, late, with family, or with heavy luggage. Use the airport's signed rank, counter, queue ticket, or regulated process.", "Before entering, understand whether the fare is metered, fixed by zone, prepaid, or app-based. Keep the address written clearly and ask for a receipt where available." ]],
      ["ride-hailing", "Ride-hailing apps", ["Ride-hailing apps can show route, fare estimate, driver details, and payment records. They are helpful when the destination is hard to pronounce or when cash is limited.", "They are not magic. You still need data, battery, the correct pickup zone, and a plate match. Do not enter a substitute car because someone knows your name." ]],
      ["hotel-transfer", "Hotel transfers", ["A hotel transfer can be worth it when you arrive late, travel with children, carry unusual luggage, or need a simple check-in after a long flight.", "Confirm the price, waiting policy, meeting point, driver identification, and what happens if the flight is delayed. Save the hotel phone number offline." ]],
      ["private-transfer", "Private transfers", ["Private transfers suit groups, business travelers, mobility needs, and routes where public transport is inconvenient. They trade flexibility for a higher price.", "Book with a provider you can verify. Avoid vague offers without a company name, written price, pickup instructions, or cancellation policy." ]],
      ["late-night", "What to choose if you arrive late at night", ["When transport choices shrink, reliability becomes more important than saving a small amount. A staffed taxi rank, hotel transfer, airport hotel, or clearly designated app pickup may be safer than hunting for a last train.", "Read the late-night arrival guide before departure if your flight lands near the final public transport service." ]],
      ["family", "What to choose if you travel with family", ["Families should value fewer transfers, clear luggage handling, toilets before departure, and a direct route to the first accommodation. A longer but simpler trip can be the better choice.", "If child seats, accessibility, or extra luggage space matter, confirm them in advance. Do not assume every taxi or ride app can supply the same equipment." ]],
      ["avoid", "What to avoid", ["Avoid unofficial drivers who approach you inside the arrivals hall, pressure you to decide immediately, or say every official option is closed. Verify at an information desk or official website.", "Avoid routes that depend on perfect timing, a nearly dead phone, or a long unlit final walk with bags." ]],
      ["decision", "A simple decision checklist", ["Choose public transport when it is operating, clear, and close to your accommodation. Choose official road transport when you are late, loaded with bags, traveling with family, or unsure about the final walk.", "If two options look equal, pick the one with better verification: official signage, a booking record, a receipt, a staffed counter, or a route you can follow." ]]
    ]
  },
  {
    slug: "offline-travel-documents-checklist", title: "What to Keep Offline Before You Travel Abroad", desc: "Save these travel documents offline before departure: passport copies, visas, bookings, insurance, maps, contacts, and payment backups.",
    intro: "A phone with no signal is annoying; a phone with no saved information is a real problem. Keep the documents and details you may need on arrival available without mobile data.",
    sections: [
      ["why-offline", "Why offline copies matter", ["Airport Wi-Fi can be slow, roaming can fail, and a booking email can hide behind a two-factor code you cannot receive. Offline copies reduce the number of things that must work at the same time.", "The aim is not to store your whole life on a phone. Save the few items that help you clear entry, reach accommodation, contact help, and prove bookings." ]],
      ["passport-visa", "Passport and visa copies", ["Save a scan or photo of your passport identity page, visa, electronic travel authorization, residence permit, or entry approval where relevant. Keep the files protected with a device lock.", "Do not rely on copies as a replacement for original documents. They help with reporting loss, filling forms, and confirming details, but border officers still decide what documents are required." ]],
      ["flight", "Flight and boarding details", ["Save airline booking references, boarding passes, baggage receipts, and onward travel confirmations. If your checked bag is delayed, the baggage tag can matter more than the itinerary email.", "Screenshots are useful because airline apps sometimes log out or require a connection during exactly the wrong moment." ]],
      ["hotel", "Hotel address and booking confirmation", ["Keep the full accommodation address, phone number, check-in time, late-arrival instructions, and booking confirmation offline. Add the address in the local language or script when the property provides it.", "A map pin alone is not enough. Drivers, immigration officers, and emergency contacts may need a readable address and phone number." ]],
      ["insurance", "Travel insurance details", ["Save the policy number, emergency assistance phone number, claims instructions, and exclusions that affect your trip. Add medical coverage details if you have specific needs.", "If traveling with family, make sure more than one adult can access the policy details. The person who bought the policy may not be the person who needs help." ]],
      ["emergency", "Emergency contacts", ["Save local emergency numbers, your accommodation, airline, card issuer, insurer, trusted contacts, and the nearest consular service for your nationality.", "Put the most important contacts in one offline note. In a stressful moment, searching across apps is where small problems become bigger." ]],
      ["maps", "Local maps and transport routes", ["Download the area around the airport, first accommodation, and first-day transport route. Mark the nearest station, bus stop, taxi pickup point, pharmacy, and a simple food option.", "Offline maps can be imperfect, so also save a written route and the name of the destination neighborhood. A screenshot of the route is useful when GPS behaves badly." ]],
      ["phrases", "Translation notes and useful phrases", ["Save the address, hotel name, medical phrases, dietary restrictions, and a few transport questions in the local language where useful.", "Do not expect translation apps to work instantly without data. Download the language pack before departure if your app supports it." ]],
      ["banking", "Payment and banking backup information", ["Store card cancellation contacts, travel card app access, emergency cash plan, and backup payment instructions somewhere secure. Avoid saving full card numbers in an unprotected note.", "If your bank uses app approval or SMS codes, check before travel how you will verify payments abroad if your home SIM has no service." ]],
      ["safe-storage", "How to store files safely", ["Use a combination of secure cloud storage, password-protected device storage, and one limited paper backup for critical details. Do not put every copy in one bag or one unlocked phone.", "Name files clearly enough that you can find them quickly, but avoid labels that expose sensitive data on a lock-screen preview." ]],
      ["offline-check", "Offline travel checklist", ["Before leaving for the airport, open each saved item once while offline or in airplane mode. This catches files that only looked downloaded.", "Update the folder when plans change. An old hotel confirmation can be worse than no confirmation if you hand it to the wrong driver." ]]
    ]
  },
  {
    slug: "first-night-abroad-where-to-stay", title: "First Night Abroad: How to Choose a Safe and Easy Area to Stay", desc: "Choose where to stay your first night abroad with practical tips on transport, check-in, food, walkability, safety, and airport hotels.",
    intro: "Your first-night accommodation does not need to be the most exciting place in the city. It needs to be easy to reach, easy to enter, and forgiving when your flight, body clock, or luggage misbehaves.",
    sections: [
      ["different", "Why the first night is different", ["On night one you are carrying everything, learning the transport system, and making decisions while tired. A location that is charming on day three may be inconvenient right after landing.", "The best first-night area reduces friction: fewer transfers, a clear address, staffed check-in, nearby food, and a safe-feeling walk from transport." ]],
      ["transport", "Stay near reliable transport", ["Look for accommodation near a direct airport train, bus stop, official taxi route, or a known ride-hailing zone. The route should still work at your actual arrival time.", "A hotel “near a station” can still involve stairs, underpasses, or a long walk with bags. Check the door-to-door route, not only the map distance." ]],
      ["not-too-far", "Avoid arriving too far from the city", ["Remote stays can be lovely later, but they often require harder navigation, fewer late check-in options, and more dependence on one driver.", "If you want a rural stay, beach town, or outer neighborhood, consider spending the first night near the airport or city and moving after rest." ]],
      ["check-in", "Choose a simple check-in experience", ["Prioritize clear instructions, reliable communication, and a check-in window that matches your flight. A staffed desk can be valuable after delays.", "Self-check-in can work well if the instructions are detailed and saved offline. It becomes stressful when a code depends on a message you cannot receive." ]],
      ["food-shops", "Look for food and basic shops nearby", ["After a long flight, simple food and water may matter more than nightlife. Check whether there are restaurants, convenience stores, or hotel dining options open when you arrive.", "Families, older travelers, and business travelers with early meetings may prefer a less fashionable area if it offers dependable basics within a short walk." ]],
      ["safety-walkability", "Consider safety, lighting, and walkability", ["Read recent reviews for comments about the street, entrance, elevators, noise, and late-night access. Avoid judging only by star rating or staged room photos.", "A well-lit main road near transport can be more practical than a quieter backstreet that requires a confusing walk after midnight." ]],
      ["airport-hotel", "When an airport hotel makes sense", ["An airport hotel makes sense after a late landing, before an early onward flight, during a long layover, or when immigration and baggage may take time.", "It is not a failure of travel ambition. Sleeping near the airport can protect the rest of the trip when the arrival timing is awkward." ]],
      ["city-center", "When a city-center stay makes sense", ["A city-center stay works well when you land early enough, have a direct route, and want to start the next morning close to sights, meetings, or transport hubs.", "Choose the specific center that fits your next step. Some cities have several “central” districts that are not equally convenient from the airport." ]],
      ["avoid", "What to avoid on your first night", ["Avoid accommodation with unclear address details, many complaints about late check-in, a difficult final walk, or a location chosen only because it is cheap.", "Also avoid stacking major plans after arrival. Check in, eat, shower, charge devices, and give tomorrow a better traveler." ]],
      ["checklist-stay", "First-night stay checklist", ["Ask whether the route works if your flight is delayed, whether reception is available, whether food is nearby, and whether you can explain the address to a driver.", "If the answer to several of those is uncertain, choose a simpler first night and save the adventurous stay for later." ]]
    ]
  },
  {
    slug: "money-first-24-hours-abroad", title: "How to Handle Money During Your First 24 Hours Abroad", desc: "Manage travel money after landing with simple advice on cash, airport ATMs, cards, currency exchange, transport payments, and backups.",
    intro: "Arrival-day money decisions should be boring. You only need enough local payment ability to leave the airport, eat, check in, and handle one small surprise.",
    sections: [
      ["why-money", "Why money planning matters after landing", ["Money problems on the first day often come from timing rather than poverty: a card decline, closed exchange counter, cash-only taxi, or ATM limit when you are tired.", "Plan a small system before departure. One card, one backup, a modest amount of cash, and an idea of how transport is paid will solve most arrival needs." ]],
      ["emergency-cash", "Carrying a small amount of emergency cash", ["A small reserve in a widely accepted currency or destination currency can help if ATMs are down or a card is blocked. Keep it separate from your main wallet.", "Do not carry more than you are comfortable losing. Emergency cash is a bridge, not a substitute for careful payment planning." ]],
      ["airport-atms", "Using airport ATMs carefully", ["Airport ATMs are convenient for arrival transport and food. Prefer machines attached to recognized banks or placed in visible, controlled areas.", "Withdraw a modest amount first. Learn the note sizes, put cash away before walking off, and never accept help from strangers at the machine." ]],
      ["exchange", "When to exchange money", ["Airport exchange counters may be useful when you need cash immediately, but rates and fees vary. Avoid exchanging your full trip budget before comparing better options.", "If you exchange, count the money at the counter and keep the receipt until you know it is no longer needed." ]],
      ["cards", "Using cards on the first day", ["Cards are convenient for hotels, ride apps, restaurants, and transport in many destinations. Carry a physical card even if you expect to use a phone wallet.", "Some terminals require a PIN, some reject foreign cards, and some add temporary holds. A backup card stored separately is practical, not excessive." ]],
      ["dcc", "Avoiding dynamic currency conversion", ["ATMs and card terminals may offer to charge in your home currency. The familiar number can hide a poor exchange rate or extra markup.", "When given a clear choice, local currency is often the better option, but check your own card terms and read the screen before approving." ]],
      ["backup", "Keeping backup payment options", ["Separate your backup card from your main wallet and keep card issuer contact details offline. Enable transaction alerts before travel.", "If your phone is the only way to approve payments, know what happens if it has no signal or battery. A power bank can be a money tool on arrival day." ]],
      ["transport-payment", "Paying for airport transport", ["Before you land, know whether your airport transport needs cash, ticket machine payment, contactless card, app payment, or a prepaid counter.", "If using a taxi, clarify whether the fare is metered, fixed, includes tolls, or needs cash. Keep small notes where cash payment is normal." ]],
      ["mistakes-money", "Money mistakes to avoid", ["Avoid withdrawing a large amount while distracted, handing a card to someone out of sight, letting a stranger choose an ATM, or approving a conversion screen you do not understand.", "Do not chase a slightly better exchange rate across town when you are tired and carrying luggage. First-day money should buy stability." ]],
      ["money-check", "First 24 hours money checklist", ["Before leaving the airport, confirm you can pay for transport, one meal, water, and any accommodation balance or deposit.", "After check-in, store backup cards and cash separately. Keep tomorrow's spending money small and easy to access." ]]
    ]
  },
  {
    slug: "no-phone-signal-after-landing", title: "What to Do If Your Phone Has No Signal After Landing", desc: "No phone signal after landing abroad? Follow calm steps for settings, roaming, airport Wi-Fi, offline maps, SIM options, and emergency help.",
    intro: "No signal after landing feels bigger than it is because your phone now holds maps, bookings, messages, banking, and transport. Work through the basics before assuming the trip is in trouble.",
    sections: [
      ["stay-calm", "Stay calm and check basic settings", ["Move out of the passenger flow and check battery, airplane mode, mobile data, selected line, and network selection. Many arrival problems are settings problems.", "If you use dual SIM, confirm which line is set for data and whether the travel line is actually active." ]],
      ["airplane-mode", "Turn airplane mode on and off", ["A simple network reset often helps after a long flight. Turn airplane mode on, wait briefly, turn it off, and give the phone time to search for local networks.", "Restart the phone if needed, especially after installing an eSIM or changing SIM cards. Do not delete an eSIM unless the provider says it can be reinstalled." ]],
      ["roaming", "Check roaming settings", ["If you plan to use your home carrier, data roaming may need to be enabled. If you do not understand the charges, keep data roaming off until you can confirm the plan.", "Some travel eSIMs require data roaming on that specific line. Read the provider instructions carefully so you do not turn on roaming for the expensive line by mistake." ]],
      ["wifi", "Connect to airport Wi-Fi", ["Use official airport Wi-Fi or a staffed information point to regain basic access. Confirm the network name through signs or airport staff rather than joining the first similar-looking network.", "Once connected, open maps, message your accommodation, check transport, and download any missing documents before walking away from the terminal." ]],
      ["offline", "Use offline maps and saved documents", ["If you prepared offline files, this is their moment. Open the hotel address, route screenshots, booking confirmation, and emergency contacts without waiting for mobile data.", "A printed or offline address can still get you into an official taxi or hotel transfer while you solve connectivity later." ]],
      ["sim-esim", "Find an official SIM or eSIM option", ["If mobile service is essential, use a recognizable airport telecom counter, official store, or trusted eSIM provider. Confirm activation before leaving the counter.", "Check phone compatibility, passport-registration rules, hotspot allowance, and whether the plan includes calls or data only." ]],
      ["contact-provider", "Contact your hotel or transport provider", ["If you cannot call, use airport Wi-Fi, an information desk, or a public phone where available. Keep the message simple: you have landed, you may be delayed, and you need check-in or pickup confirmation.", "For ride apps, avoid wandering between pickup zones while offline. A taxi rank, airport bus, or hotel desk may be calmer than chasing a booking you cannot update." ]],
      ["emergency", "What to do if you need emergency help", ["If there is immediate danger or a medical emergency, ask airport staff, police, or airline staff for help and use the local emergency number. Do not wait for your personal phone service to recover.", "Airports are staffed environments. Move toward official counters, marked police points, medical rooms, or information desks rather than isolated areas." ]],
      ["prevent", "How to prevent this before your next trip", ["Before travel, check phone unlock status, eSIM support, roaming fees, authenticator access, and whether important apps work offline.", "Download maps and documents, save the accommodation address, and consider installing an eSIM before departure if the provider allows delayed activation." ]],
      ["no-signal-check", "No-signal checklist", ["Reset airplane mode, check the active line, connect to official Wi-Fi, open offline documents, message accommodation, then choose a verified SIM, eSIM, taxi, or help desk.", "Solve the next practical step first. You do not need perfect service to reach a safe check-in." ]]
    ]
  },
  {
    slug: "arrival-scams-tourist-airports", title: "How to Avoid Common Arrival Scams in Tourist Airports", desc: "Learn calm ways to avoid airport arrival scams involving taxis, money exchange, SIM cards, luggage help, payment confusion, and pressure.",
    intro: "Most people you meet at an airport are not trying to scam you. Still, tired arrivals are easy to pressure, so it helps to recognize patterns before someone creates urgency around them.",
    sections: [
      ["vulnerable", "Why travelers are vulnerable after landing", ["After a flight you may be tired, offline, carrying valuables, unfamiliar with prices, and eager to reach the hotel. Scams take advantage of that temporary imbalance.", "The solution is not suspicion toward everyone. It is using official processes and slowing down when someone pushes you away from them." ]],
      ["fake-taxi", "Fake taxi offers", ["A common pattern is a person approaching before the signed taxi area and claiming to offer a cheaper, faster, or official ride. The vehicle may be unlicensed or the fare unclear.", "Use the signed rank, taxi counter, airport transport desk, hotel transfer, or recognized app pickup zone. If the official service is supposedly closed, verify at a staffed desk." ]],
      ["overpriced", "Overpriced transport", ["Overpricing can happen through broken-meter claims, unnecessary detours, surprise luggage fees, fake tolls, or pressure to pay in a foreign currency.", "Know the fare system before departure where possible. Ask whether the fare is metered, fixed, app-based, or prepaid, and keep receipts or screenshots." ]],
      ["exchange", "Unofficial money exchange", ["Avoid people offering cash exchange away from licensed counters or bank ATMs. Attractive rates can hide counterfeit notes, short-changing, or confusion over zeros.", "If you need money at the airport, use a bank ATM or licensed exchange counter and exchange only what you need for the first day." ]],
      ["sim-overcharge", "SIM card overcharging", ["SIM desks can be legitimate, but travelers still overpay when they buy a plan they do not understand. Headline data, validity, hotspot use, calls, and registration can differ.", "Compare plans calmly and test service before leaving. If unsure, use airport Wi-Fi first and decide after reaching the city." ]],
      ["helpers", "Fake helpers and luggage assistance", ["Some people create a service you did not request: grabbing bags, guiding you to a machine, or insisting they work with the airport. A tip or fee appears later.", "Accept help only from clearly identified airport staff or providers you choose. Keep control of your documents and bags." ]],
      ["distraction", "Distraction scams", ["Distraction can be as simple as one person asking questions while another watches bags, phones, or wallets. Crowded arrivals areas are good environments for this.", "Stop before reorganizing. Put valuables away, close bags, and avoid leaving phones on trolleys, counters, or seats." ]],
      ["payment", "Payment confusion", ["Payment confusion includes switching currencies, adding unexplained fees, claiming a card failed, or asking you to cancel an app ride and pay separately.", "Keep payments inside official systems where possible. Read terminal screens, choose a currency deliberately, and do not hand over a card where you cannot see it." ]],
      ["official-services", "How to use official services", ["Official services usually leave a record: a receipt, booking, ticket, queue number, company name, license, app trip, or airport signage. Look for the process, not the personality.", "If lost, go to an airport information desk, airline counter, police point, or your accommodation's official phone number." ]],
      ["feels-wrong", "What to do if something feels wrong", ["Pause, step back into a staffed public area, and verify through a channel you choose. You can say no without explaining your entire situation.", "If you are already in a vehicle or dispute, prioritize getting to a staffed public place. Document details once safe." ]]
    ]
  },
  {
    slug: "low-stress-first-day-new-city", title: "How to Plan a Low-Stress First Day in a New City", desc: "Plan a calm first day in a new city with realistic timing, one main goal, flexible meals, rest, local orientation, and simple backups.",
    intro: "A good first day in a new city should make tomorrow easier. Keep the plan light enough that delays, jet lag, and ordinary confusion do not ruin it.",
    sections: [
      ["simple", "Why the first day should be simple", ["Arrival day contains hidden work: immigration, luggage, transport, check-in, food, money, and figuring out where you are. Treat that as the main itinerary.", "One easy neighborhood walk can teach you more useful first-day information than crossing the city for a landmark while exhausted." ]],
      ["arrival-time", "Plan around arrival time", ["A morning arrival can still involve early check-in problems and sleepiness. An evening arrival can remove public transport, food, and reception options.", "Build the day around the real time you may reach the accommodation, not the scheduled landing time. Immigration, baggage, traffic, and weather all add variation." ]],
      ["one-goal", "Choose one main goal", ["Choose one modest goal after check-in: a meal, a short walk, buying a transport card, or seeing one nearby viewpoint. Stop there if the day feels heavy.", "A single goal makes the day feel successful without forcing you to perform travel enthusiasm on low sleep." ]],
      ["delays", "Leave space for delays", ["Avoid prepaid activities, tight restaurant reservations, or long onward transfers close to landing. Put anything expensive or time-sensitive on day two when possible.", "If a delay happens, remove plans rather than rushing. The trip does not need repayment through exhaustion." ]],
      ["eat-rest", "Eat, rest, and get oriented", ["Drink water, eat something simple, shower, and charge devices. These ordinary tasks improve judgment more reliably than another hour of research.", "Locate the nearest useful transport stop, small shop, pharmacy, and a recognizable landmark. This gives the city a mental map before sightseeing begins." ]],
      ["nearby-area", "Learn the nearby area first", ["Walk a short loop around your accommodation in daylight when possible. Notice entrances, busy streets, quiet streets, and where you would get a ride back.", "Save the accommodation as a favorite in your map app. If the city has confusing addresses, save a photo of the building entrance or nearby landmark." ]],
      ["avoid-cross-city", "Avoid long cross-city trips", ["Long cross-city trips are more fragile on day one because you do not yet understand ticketing, traffic, platform changes, or late-night return options.", "If you do go farther, know exactly how you will return and what the backup is if the last train, bus, or ride app is unavailable." ]],
      ["jet-lag", "Prepare for jet lag", ["Jet lag can affect appetite, patience, and decision-making. Plan around it rather than pretending it is only about sleep.", "Keep alcohol modest, avoid major purchases while exhausted, and set up tomorrow's essentials before lying down." ]],
      ["examples", "Simple first-day plan examples", ["For an early arrival: airport to hotel, bag drop, simple lunch nearby, short orientation walk, early dinner, sleep. For a late arrival: official transport, check-in, water, snack, message home, sleep.", "For families: fewer transfers, playground or easy food nearby, and no hard evening plan. For business travelers: check-in, clothes reset, meeting route saved, and one calm meal." ]],
      ["checklist-low-stress", "Low-stress first day checklist", ["Confirm transport, check-in, food, water, payment, mobile data, and tomorrow's first route. Everything else is optional.", "A low-stress day is not an empty day. It is a day designed to leave you rested, oriented, and ready for the trip you actually came to have." ]]
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
      related: ["/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/sim-card-vs-esim/", "/countries/south-korea-first-24-hours/", "/countries/united-states-first-24-hours/", "/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/travel-safety-basics/"],
      relatedTools: ["/tools/first-time-traveler-confidence-checker/", "/tools/travel-adapter-charging-checklist/"],
      faqs: [
        { question: "What should I check first for an international trip?", answer: "Start with passport validity, destination entry requirements, transit rules, and health requirements. These can take the longest to correct." },
        { question: "What belongs in cabin baggage?", answer: "Carry travel documents, essential medicine, valuables, chargers, one change of clothes, and anything you cannot safely replace during the first day." },
        { question: "How much should I plan for arrival day?", answer: "Allow for airport transport, food, mobile data, a modest cash reserve, and an unexpected backup ride or hotel change. Confirm current local prices before departure." }
      ]
    },
    "sim-card-vs-esim": {
      seoTitle: "SIM Card vs eSIM for International Travel | EZ Roam Guide",
      description: "SIM card or eSIM for travel? Compare setup, compatibility, cost, calls, verification texts, hotspot use, reliability, and the right option.",
      related: ["/countries/sri-lanka-first-24-hours/", "/countries/japan-first-24-hours/", "/countries/south-korea-first-24-hours/", "/countries/france-first-24-hours/", "/countries/thailand-first-24-hours/", "/countries/singapore-first-24-hours/"],
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
    },
    "how-to-leave-an-airport-safely": {
      relatedTools: ["/tools/airport-layover-comfort-planner/", "/tools/airport-transport-helper/"]
    },
    "how-to-use-public-transport-abroad": {
      relatedTools: ["/tools/arrival-day-walking-distance-helper/"]
    },
    "arriving-late-at-night": {
      relatedTools: ["/tools/arrival-day-walking-distance-helper/", "/tools/late-night-arrival-planner/", "/tools/hotel-address-card-generator/"]
    },
    "airport-arrival-checklist": {
      seoTitle: "Airport Arrival Checklist for First-Time Travelers | EZ Roam Guide",
      description: "Use this airport arrival checklist for immigration, baggage, customs, internet, money, safe transport, and the first steps after landing.",
      readingTime: "13 min read",
      quick: ["Keep passport, arrival address, and entry documents ready before leaving the plane.", "Clear immigration, baggage reclaim, and customs before focusing on transport.", "Get enough internet and local money for the next few hours, not the whole trip.", "Use official airport transport channels and verify the vehicle or ticket.", "Pause before leaving the terminal so you are not solving basic tasks on the curb."],
      mistakesHeading: "Common arrival mistakes",
      checklistHeading: "Airport arrival checklist",
      checklist: ["Passport and entry approval accessible", "Accommodation address saved offline", "All bags accounted for before customs exit", "Customs declaration completed if required", "Phone connection tested away from airport Wi-Fi", "Small amount of local money or working card ready", "Official transport route, fare, or pickup point confirmed", "Trusted contact updated after arrival", "Water, restroom, and battery check done before leaving"],
      mistakes: ["Leaving the baggage area before reporting a missing bag", "Accepting the first transport offer because it sounds urgent", "Depending on live email or maps without offline backups", "Changing too much money before understanding the rate", "Walking out of the terminal before confirming where the pickup point is"],
      faqs: [
        { question: "What should I do first after landing internationally?", answer: "Prepare your passport, arrival documents, accommodation address, and any required forms, then follow the airport process through immigration, baggage reclaim, and customs." },
        { question: "Should I buy a SIM before leaving the airport?", answer: "Buy one at the airport only if you need reliable data immediately and understand the plan. An eSIM, roaming, or airport Wi-Fi may be enough to reach your first accommodation." },
        { question: "How much cash should I get at the airport?", answer: "Get enough for transport, water, small food purchases, and a short backup. Avoid withdrawing or exchanging more than you can comfortably protect on arrival day." },
        { question: "Is airport transport always safe?", answer: "No transport type is automatically safe, but official airport systems reduce risk. Use signed ranks, counters, regulated services, recognized apps, or confirmed hotel transfers." },
        { question: "What if the airport feels confusing?", answer: "Step aside, use a staffed information desk, open your offline notes, and solve one task at a time. Rushing usually creates more confusion than waiting a few minutes." }
      ],
      related: ["/travel-basics/first-international-trip-checklist/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/sim-card-vs-esim/", "/travel-basics/money-first-24-hours-abroad/", "/travel-basics/best-airport-transport-new-country/"]
    },
    "best-airport-transport-new-country": {
      seoTitle: "Best Airport Transport Abroad: How to Choose | EZ Roam Guide",
      description: "Compare airport trains, buses, taxis, ride-hailing, hotel transfers, and private transfers to choose the best route into a new city.",
      readingTime: "13 min read",
      quick: ["Choose by the whole door-to-door journey, not only headline speed.", "Airport trains work best with light luggage and a nearby station.", "Official taxis and transfers are useful for late arrivals, families, and heavy bags.", "Ride-hailing apps still require data, battery, and careful vehicle matching.", "Have one backup if the first route is closed, delayed, or too confusing."],
      mistakesHeading: "Airport transport mistakes to avoid",
      checklistHeading: "Simple decision checklist",
      checklist: ["Actual arrival time checked against transport operating hours", "Final walk from station or stop reviewed", "Luggage and family needs considered", "Fare method understood before boarding", "Official pickup point saved or screenshotted", "Backup route chosen", "Accommodation address written clearly", "Phone battery and data plan ready"],
      mistakes: ["Choosing the fastest advertised route without checking transfers", "Assuming ride-hailing pickups work like they do at home", "Following unofficial drivers away from signed transport areas", "Forgetting that late arrivals remove many public transport options", "Booking accommodation far from the route you plan to use"],
      faqs: [
        { question: "What is the best way to get from airport to city?", answer: "The best option depends on arrival time, luggage, budget, destination, and comfort. Rail may be fastest, while an official taxi or transfer may be easier with bags or a late arrival." },
        { question: "Are airport taxis better than ride-hailing apps?", answer: "Neither is always better. Official taxis can be simpler when pickup zones are confusing; ride apps provide trip records and fare estimates when data and battery are reliable." },
        { question: "Should I pre-book airport transport?", answer: "Pre-book if you arrive late, travel with children, need accessibility support, or have a difficult destination. Use a provider you can verify and save the meeting details offline." },
        { question: "Is public transport safe from airports?", answer: "Public transport can be a good choice where it is official, operating, and practical with your luggage. Check the final walk and avoid routes that leave you stranded late at night." },
        { question: "What if my flight is delayed?", answer: "Know the last public transport time and keep a backup such as an official taxi, airport hotel, hotel transfer, or later bus. Avoid plans that depend on perfect arrival timing." }
      ],
      related: ["/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/arriving-late-at-night/", "/travel-basics/airport-taxi-scams/", "/travel-basics/airport-arrival-checklist/", "/travel-basics/how-to-use-public-transport-abroad/"]
    },
    "offline-travel-documents-checklist": {
      seoTitle: "Offline Travel Documents Checklist Before You Fly | EZ Roam Guide",
      description: "Save passport copies, visas, bookings, insurance, maps, emergency contacts, and payment backups offline before international travel.",
      readingTime: "12 min read",
      quick: ["Save the documents that help with entry, accommodation, transport, insurance, and emergencies.", "Test important files offline before leaving for the airport.", "Store sensitive copies securely, not in an unlocked photo roll only.", "Keep addresses in readable text, not just map pins.", "Use offline backups as support, not as replacements for original documents."],
      mistakesHeading: "Offline document mistakes to avoid",
      checklistHeading: "Offline travel checklist",
      checklist: ["Passport identity page saved securely", "Visa or entry authorization saved", "Flight and baggage references saved", "Accommodation address and phone number saved", "Insurance policy and assistance number saved", "Emergency contacts and local emergency numbers saved", "Offline maps downloaded", "Useful phrases and address translation saved", "Payment backup instructions stored safely", "Files tested in airplane mode"],
      mistakes: ["Saving links instead of actual offline files", "Keeping every backup on the same phone", "Saving an address only as a map pin", "Storing sensitive files without a passcode", "Forgetting to update files after changing hotels or flights"],
      faqs: [
        { question: "What travel documents should I save offline?", answer: "Save passport and visa copies, flight and baggage details, accommodation confirmation, insurance information, emergency contacts, maps, transport routes, and key payment backup details." },
        { question: "Are digital passport copies accepted at borders?", answer: "Usually no. A copy can help with forms or reporting loss, but original documents and official entry requirements still apply." },
        { question: "Where should I store offline travel documents?", answer: "Use secure device storage, reputable cloud storage with offline access, and a limited paper backup for essential details. Avoid keeping everything in one bag or unlocked app." },
        { question: "Should I print travel documents?", answer: "Printing key details can be useful for visas, hotels, insurance, and transport, especially where battery, signal, or app access may fail." },
        { question: "How do I protect sensitive travel files?", answer: "Use strong device locks, avoid public file sharing, name files discreetly, and do not store full card numbers or passwords in plain notes." }
      ],
      related: ["/travel-basics/first-international-trip-checklist/", "/travel-basics/no-phone-signal-after-landing/", "/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/travel-safety-basics/", "/travel-basics/airport-arrival-checklist/"],
      relatedTools: ["/tools/hotel-address-card-generator/", "/tools/offline-travel-documents-checklist/"]
    },
    "first-night-abroad-where-to-stay": {
      seoTitle: "Where to Stay First Night Abroad: Safe, Easy Areas | EZ Roam Guide",
      description: "Choose a safe, easy first-night stay abroad with tips on airport access, check-in, food, walkability, transport, and late arrivals.",
      readingTime: "12 min read",
      quick: ["Choose first-night accommodation for ease, not only atmosphere.", "Prioritize reliable transport, simple check-in, and nearby food.", "An airport hotel can be sensible after a late flight or before an early connection.", "A city-center stay works best when the route is direct and operating.", "Avoid remote locations with unclear access until you are rested."],
      mistakesHeading: "First-night stay mistakes to avoid",
      checklistHeading: "First-night stay checklist",
      checklist: ["Direct or simple airport route confirmed", "Late check-in instructions saved offline", "Accommodation phone number saved", "Food or water available nearby", "Final walk checked for luggage and timing", "Recent reviews checked for access and location comments", "Backup plan chosen if flight is delayed", "Address saved in local language where useful"],
      mistakes: ["Choosing the cheapest room without checking the arrival route", "Assuming self-check-in will work without mobile data", "Booking far outside the city after a long flight", "Ignoring recent reviews about the entrance or neighborhood", "Planning sightseeing before basic recovery"],
      faqs: [
        { question: "Where should I stay the first night abroad?", answer: "Choose an area that is easy to reach from the airport, has reliable check-in, and gives you access to simple food, water, and transport for the next morning." },
        { question: "Is it better to stay near the airport or city center?", answer: "Stay near the airport for late arrivals, early onward flights, or heavy fatigue. Choose the city center when the route is direct and you want a practical base for the next day." },
        { question: "How can I check if an area is safe enough?", answer: "Read recent reviews, check lighting and transport access, look for staffed entrances, and avoid judging only by price or room photos." },
        { question: "What matters most for late check-in?", answer: "Clear instructions, a working contact number, realistic arrival time, and a backup plan matter most. Save everything offline before departure." },
        { question: "Should solo travelers choose differently?", answer: "Solo travelers may prefer staffed accommodation, a clearer route, and a well-lit arrival area, especially after dark or after a long flight." }
      ],
      related: ["/travel-basics/arriving-late-at-night/", "/travel-basics/best-airport-transport-new-country/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/low-stress-first-day-new-city/", "/cities/tokyo-arrival-guide/"]
    },
    "money-first-24-hours-abroad": {
      seoTitle: "Travel Money Tips for Your First 24 Hours Abroad | EZ Roam Guide",
      description: "Handle money after landing with tips on cash, cards, airport ATMs, exchange counters, transport payment, backups, and first-day fees.",
      readingTime: "12 min read",
      quick: ["Arrival-day money only needs to cover transport, food, water, check-in, and one backup.", "Carry at least two payment methods and store them separately.", "Use airport ATMs carefully and withdraw a modest first amount.", "Read card and ATM currency conversion screens before approving.", "Know how your airport transport is paid before you leave the terminal."],
      mistakesHeading: "Money mistakes to avoid",
      checklistHeading: "First 24 hours money checklist",
      checklist: ["Primary card working", "Backup card stored separately", "Small cash reserve available", "Airport ATM or exchange option identified", "Transport payment method confirmed", "Dynamic currency conversion screens understood", "Bank or card support contact saved", "Transaction alerts enabled", "Accommodation deposit or balance planned"],
      mistakes: ["Keeping all cash and cards in one wallet", "Approving home-currency conversion without reading the rate", "Withdrawing too much cash while tired", "Assuming every airport taxi accepts cards", "Depending entirely on a phone wallet with low battery"],
      faqs: [
        { question: "Should I use cash or card after landing?", answer: "Use both where possible. Cards are convenient, but a small amount of local cash helps with transport, tips where appropriate, small shops, or payment outages." },
        { question: "Is it bad to exchange money at the airport?", answer: "Not always. Airport exchange can be useful for immediate needs, but avoid exchanging your full budget without comparing rates and fees." },
        { question: "How much money do I need for the first day abroad?", answer: "Plan for airport transport, food, water, mobile data if needed, accommodation balance or deposit, and one small backup. Confirm current prices close to travel." },
        { question: "What is dynamic currency conversion?", answer: "It is when a terminal offers to charge in your home currency. The familiar amount can include a poor exchange rate, so read the screen carefully before choosing." },
        { question: "What should I do if my card is declined?", answer: "Try a backup payment method, move away from pressure, and contact your bank through its official app or card number. Do not use a phone number supplied by a stranger." }
      ],
      related: ["/travel-basics/cash-vs-card-while-traveling/", "/travel-basics/airport-arrival-checklist/", "/travel-basics/best-airport-transport-new-country/", "/travel-basics/travel-safety-basics/", "/countries/france-first-24-hours/", "/countries/united-states-first-24-hours/"]
    },
    "no-phone-signal-after-landing": {
      seoTitle: "No Phone Signal After Landing Abroad? What to Do | EZ Roam Guide",
      description: "If your phone has no signal after landing abroad, use these steps for settings, roaming, airport Wi-Fi, offline documents, SIMs, and help.",
      readingTime: "12 min read",
      quick: ["Check basic settings before assuming the phone or plan has failed.", "Use official airport Wi-Fi to recover maps, messages, and transport details.", "Open offline documents and saved addresses if mobile data is unavailable.", "Buy or activate SIM/eSIM service only through a source you can verify.", "For emergencies, ask airport staff or local authorities instead of waiting for signal."],
      mistakesHeading: "No-signal mistakes to avoid",
      checklistHeading: "No-signal checklist",
      checklist: ["Step out of the passenger flow", "Check airplane mode and active SIM line", "Restart phone if needed", "Review roaming settings for the correct line", "Join official airport Wi-Fi", "Open offline hotel and transport details", "Message hotel or pickup provider", "Use official SIM/eSIM counter if needed", "Ask airport staff for urgent help"],
      mistakes: ["Deleting an eSIM that cannot be reinstalled", "Turning on roaming for the wrong line without checking charges", "Walking to a remote pickup zone while offline", "Joining a suspicious Wi-Fi network", "Letting a phone problem delay emergency help"],
      faqs: [
        { question: "Why does my phone have no signal after landing abroad?", answer: "Common causes include airplane mode, roaming disabled, the wrong SIM line selected, carrier restrictions, incompatible bands, inactive eSIM setup, or temporary airport coverage issues." },
        { question: "Should I turn on data roaming?", answer: "Only turn on data roaming when you understand which line will use it and what it costs. Some travel eSIMs require roaming on that line, while home carriers may charge heavily." },
        { question: "Can airport Wi-Fi be enough?", answer: "Airport Wi-Fi can be enough to message accommodation, check transport, download maps, and reach your first hotel. Confirm the official network before connecting." },
        { question: "Should I buy a SIM at the airport?", answer: "Buy one if you need service immediately and can verify the provider, plan, registration requirements, and activation. Otherwise, solve transport first and compare options later." },
        { question: "What if I need urgent help with no signal?", answer: "Go to airport staff, police, airline counters, medical rooms, or information desks. In an emergency, use local services rather than waiting for personal mobile data." }
      ],
      related: ["/travel-basics/sim-card-vs-esim/", "/travel-basics/offline-travel-documents-checklist/", "/travel-basics/airport-arrival-checklist/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/travel-safety-basics/"],
      relatedTools: ["/tools/travel-adapter-charging-checklist/", "/tools/hotel-address-card-generator/"]
    },
    "arrival-scams-tourist-airports": {
      seoTitle: "Airport Arrival Scams: How to Avoid Them Calmly | EZ Roam Guide",
      description: "Avoid common airport arrival scams involving taxis, SIM cards, money exchange, luggage help, payment confusion, and unofficial offers.",
      readingTime: "13 min read",
      quick: ["Scams often start by creating urgency or steering you away from official services.", "Use airport-published transport, exchange, SIM, and information channels.", "Keep control of bags, passport, phone, and payment cards in crowded areas.", "Verify claims about closed hotels, broken meters, or unavailable transport independently.", "If something feels wrong, return to a staffed public area before deciding."],
      mistakesHeading: "Arrival scam warning signs",
      checklistHeading: "Arrival scam avoidance checklist",
      checklist: ["Official transport area located", "Hotel address verified from your booking", "Fare system understood before riding", "Money exchanged only through bank ATM or licensed counter", "SIM plan checked before payment", "Bags and valuables kept under control", "Payment currency read before approval", "Receipts or screenshots kept", "Pressure tactics treated as a reason to pause"],
      mistakes: ["Believing a stranger who says the official service is closed", "Letting someone take luggage before agreeing to help", "Changing accommodation because a driver suggests it", "Paying outside a ride app after being asked to cancel", "Assuming a friendly approach means an official role"],
      faqs: [
        { question: "What are common airport arrival scams?", answer: "Common patterns include fake taxis, inflated fares, unofficial money exchange, SIM overcharging, unwanted luggage help, distraction theft, and confusing payment currency switches." },
        { question: "How do I know if a taxi offer is official?", answer: "Use the process shown by the airport: signed rank, staffed counter, queue ticket, app pickup zone, or regulated vehicle. A confident verbal claim is not enough." },
        { question: "Are airport SIM cards a scam?", answer: "Not necessarily. Many are legitimate, but travelers can overpay for unsuitable plans. Compare data, validity, calls, hotspot use, registration, and activation before paying." },
        { question: "What should I do if someone pressures me?", answer: "Pause, step back into a staffed area, and verify through an information desk, official app, airport website, or accommodation contact." },
        { question: "Should I report an airport scam?", answer: "If safe, keep receipts, screenshots, vehicle details, and payment records. Report through the airport authority, transport regulator, app, card issuer, hotel, or police as appropriate." }
      ],
      related: ["/travel-basics/airport-taxi-scams/", "/travel-basics/how-to-leave-an-airport-safely/", "/travel-basics/best-airport-transport-new-country/", "/travel-basics/travel-safety-basics/", "/travel-basics/airport-arrival-checklist/"]
    },
    "low-stress-first-day-new-city": {
      seoTitle: "Low-Stress First Day in a New City: Simple Plan | EZ Roam Guide",
      description: "Plan a low-stress first day in a new city with realistic timing, one main goal, easy food, rest, orientation, and flexible backups.",
      readingTime: "12 min read",
      quick: ["Treat arrival, check-in, food, and rest as the real first-day itinerary.", "Choose one main goal instead of filling the day with attractions.", "Leave space for delays, jet lag, and getting lost.", "Learn the nearby area before taking long cross-city trips.", "Prepare tomorrow's first route before sleep."],
      mistakesHeading: "First-day planning mistakes to avoid",
      checklistHeading: "Low-stress first day checklist",
      checklist: ["Arrival-to-hotel route confirmed", "Check-in time and bag-drop option reviewed", "One simple meal option chosen", "One modest first-day goal selected", "Nearby area downloaded offline", "Long cross-city trips avoided unless necessary", "Tomorrow's first route saved", "Devices charged before sleep", "Flexible backup plan kept"],
      mistakes: ["Scheduling paid activities too close to landing", "Trying to compensate for delays by moving faster", "Crossing the city before understanding the local transport system", "Ignoring food, water, and rest because they feel too ordinary", "Turning the first day into proof that the trip is successful"],
      faqs: [
        { question: "What should I do on my first day in a new city?", answer: "Focus on reaching accommodation, eating, resting, getting oriented nearby, and preparing tomorrow. Add one small activity only if you have energy." },
        { question: "Should I plan sightseeing on arrival day?", answer: "Keep sightseeing light and nearby. Avoid expensive, time-sensitive bookings close to landing because delays and fatigue are common." },
        { question: "How do I avoid jet lag ruining the first day?", answer: "Hydrate, eat simply, get daylight if possible, avoid major decisions while exhausted, and keep the schedule flexible enough to sleep early if needed." },
        { question: "Is it better to explore near the hotel first?", answer: "Yes for most travelers. Learning nearby streets, food options, transport stops, and landmarks makes the rest of the trip easier." },
        { question: "What is a good first-day itinerary?", answer: "A calm plan is airport transfer, check-in or bag drop, simple food, short orientation walk, water and supplies, tomorrow's route check, and rest." }
      ],
      related: ["/travel-basics/plan-your-first-24-hours-abroad/", "/travel-basics/first-night-abroad-where-to-stay/", "/travel-basics/best-airport-transport-new-country/", "/travel-basics/offline-travel-documents-checklist/", "/cities/bangkok-arrival-guide/", "/cities/paris-arrival-guide/", "/cities/london-arrival-guide/"]
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
