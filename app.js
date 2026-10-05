const LOGO = "images/budapestflow-logo.webp";
const REVIEW_URL = "https://www.tripadvisor.com/Attraction_Review-g274887-d8358217-Reviews-BudapestFlow-Budapest_Central_Hungary.html";
const TOURS_URL = "https://budapestflow.com";
const GOOGLE_REVIEW_URL = "#"; // TODO: your Google review link (Business Profile > Ask for reviews)
// Tip amounts: a segmented selector (the chosen amount turns dark) + one yellow button that opens that amount's Stripe Payment Link.
// featured: true = pre-selected. "Other" = a link where the guest types the amount. cta = optional button text.
// TODO: paste the real Stripe links. While a url is "#", the button only shows "Payment link coming soon".
const TIP_LINKS = [
  { label: "€10", url: "#" },
  { label: "€20", url: "#", featured: true },
  { label: "€30", url: "#" },
  { label: "Other", url: "#", cta: "Choose your amount" }
];
const tipGo = t => `<a class="btn btn-primary" id="tip-go" href="${esc(t.url)}"${t.url === "#" ? "" : ' target="_blank" rel="noopener"'}>${ico("heart")}${esc(t.cta || "Leave a " + t.label + " tip")}</a>`;
const CARD_URL = "https://cv.perpatvar.xyz/";
const EMAIL = "info@budapestflow.com";


// Category tile label position: "center" (poster style) or "bottom" (original). Change this one word to switch back.
const TILE_LABELS = "center";

// Header (BudapestFlow logo + share buttons). Temporarily off: set to true to bring it back everywhere.
const SHOW_HEADER = false;

// Bottom tab bar (app-style navigation). Set SHOW_TABBAR to false to remove it.
// id: "" = home, "saved" = saved places, "more" = category sheet, otherwise a category id.
const SHOW_TABBAR = true;
// Max 5 tabs (iOS and Material guidance). "more" opens a sheet with every category that has no tab of its own.
const TABS = [
  { id: "", href: "#", label: "Home", icon: "home" },
  { id: "food", href: "#cat/food", label: "Food", icon: "food" },
  { id: "coffee", href: "#cat/coffee", label: "Coffee", icon: "coffee" },
  { id: "saved", href: "#saved", label: "Saved", icon: "heart" },
  { id: "more", label: "More", icon: "grid" }
];
const INSTAGRAM_URL = "https://instagram.com/budapestflow";

const TOURS = {
  "street-art": "Street Art Tour",
  "mini-statues": "Hidden Mini Statues Tour",
  "highlights": "Highlights and Hidden Gems"
};

// img: path to a photo (e.g. "images/cat-baths.webp") to replace the tinted placeholder
const CATEGORIES = [
  { id: "food", c1: "#B5654A", c2: "#7A3B2A", img: "images/cat-food.webp", label: "Food", home: true, intro: "Proper Hungarian meals, street food for a quick bite, and cakes for after." },
  { id: "coffee", c1: "#8C6A52", c2: "#4E3829", img: "images/cat-coffee.webp", label: "Coffee", home: true, intro: "Grand old cafés for the atmosphere, specialty spots for the coffee." },
  { id: "baths", c1: "#5F9A96", c2: "#2F6263", img: "images/cat-baths.webp", label: "Thermal baths", home: true, intro: "Each bath has its own character. Pick the one that fits your mood." },
  { id: "danube", c1: "#5B7FA6", c2: "#2C4A6E", img: "images/cat-danube.webp", label: "Danube Cruise", home: true, intro: "See the city from the river, the classic way or the local way." },
  { id: "drinks", c1: "#8A5A7A", c2: "#4E2F48", img: "images/cat-drinks.webp", label: "Drinks & nightlife", home: true, intro: "Ruin bars, wine, craft beer and a rooftop." },
  { id: "rainy", c1: "#7D8794", c2: "#454E5C", img: "images/cat-rainy.webp", label: "Museums & indoors", home: true, intro: "For a rainy afternoon, or when your feet need a break from walking." },
  { id: "offbeat", c1: "#9A6B4F", c2: "#5A3B2C", img: "images/cat-offbeat.webp", label: "Off the beaten path", home: true, intro: "The Budapest most visitors miss: hidden courtyards, odd little museums and places where locals hang out." },
  { id: "practical", c1: "#8C9460", c2: "#555C38", img: "images/cat-practical.webp", label: "Practical tips", home: true, intro: "Small things that save you money and hassle." }
];

// Sample data. near = landmark a visitor knows. fav = Attila's pick. tours = near that tour's end point.
// price: 1–4 (€ to €€€€), 0 = free (no price shown).
// web: the place's own link. Website, Facebook or Instagram are all fine; the button label and icon follow the link.
//      Leave web out while you're still collecting links (a greyed-out "Website" button shows);
//      set web: "" if the place has no link at all (the button disappears, "See on map" goes full width).
// cta: optional label for that button instead of "Website", e.g. cta: "Book a tasting" or cta: "Book a ticket".
//      Then web should be the booking page. Keep it short (about 16 characters); longer labels wrap to two lines.
// placeId: Google Maps place id, so "See on map" opens the exact listing (optional; without it Maps searches by name).
const PLACES = [
  { cat: "food", group: "Hungarian kitchen", name: "Menza", why: "Retro-styled classic on Liszt Ferenc Square. I like it best for a weekday lunch.", price: 2, near: "Liszt Ferenc Square, near Oktogon", good: ["Lunch", "Dinner"], tip: "Good-value weekday lunch menu. Terrace in summer.", order: "Garlic cream soup, lecsó", web: "https://menzaetterem.hu/en/", placeId: "ChIJ1dRim27cQUcR_kCX7BuqHTY" },
  { cat: "food", group: "Hungarian kitchen", name: "Café Kör", why: "Where I send guests near the Basilica for solid Hungarian food, no fuss.", price: 2, near: "Near St. Stephen's Basilica", good: ["Lunch", "Dinner"], tip: "Daily specials on the board.", order: "Goulash", tours: ["highlights"] },
  { cat: "food", group: "Hungarian kitchen", name: "Kőleves Vendéglő", why: "Jewish-Hungarian comfort food in a former kosher butcher's shop. Come hungry.", price: 2, near: "Kazinczy utca, Jewish Quarter", good: ["Lunch", "Dinner", "Veggie"], tip: "Weekday lunch deal with soup and dessert. Not kosher.", order: "Matzo ball soup, sólet (cholent)", fav: true, web: "https://kolevesvendeglo.hu/en/", placeId: "ChIJOygAumncQUcRj5mDcDKq45I" },
  { cat: "food", group: "Hungarian kitchen", name: "Gettó Gulyás", why: "My stew stop: more than ten kinds of pörkölt to choose from.", price: 2, near: "Near the Great Synagogue", good: ["Lunch", "Dinner"], tip: "Almost always full. Book ahead, even for lunch.", order: "Pörkölt with nokedli, somlói for dessert", fav: true, web: "https://gettogulyas.hu/en/homepage/", placeId: "ChIJZb83JGjcQUcR1M0xNU7rtsI" },
  { cat: "food", group: "Hungarian kitchen", name: "Rosenstein", why: "A family-run Jewish restaurant and a local favourite for decades. I'd save it for a proper dinner.", price: 3, near: "Near Keleti railway station", good: ["Dinner"], tip: "Worth the short trip out.", order: "Ask the owner" },
  { cat: "food", group: "Hungarian kitchen", name: "TATI From Farm to Table", why: "Modern Hungarian cooking with produce from their own farm. I'd choose it for a special night.", price: 3, near: "Dohány utca, Jewish Quarter", good: ["Dinner", "Date night"], tip: "Book ahead. There is a vegan tasting menu too.", order: "The seasonal tasting menu", web: "https://tatibudapest.com/", placeId: "ChIJsdS42GjdQUcR7ovm-5DHmWo" },
  { cat: "food", group: "Street food", name: "Retro Lángos", why: "My go-to for lángos, and it has been going since 2011.", price: 1, near: "Bajcsy-Zsilinszky út, near Arany János metro", good: ["Quick bite", "Budget", "Veggie"], tip: "Gluten-free and vegan versions too. Second shop near the Parliament, in Vécsey utca.", order: "Classic lángos with sour cream and cheese", web: "https://retrolangos.hu/en/", placeId: "ChIJIZUXVGvcQUcRmGhtnafDysU" },
  { cat: "food", group: "Street food", name: "Bors GasztroBár", why: "Creative soups and baguettes in a tiny place. One of my favourites for a quick lunch.", price: 1, near: "Jewish Quarter", good: ["Quick bite", "Budget"], tip: "Expect a queue, it moves fast.", order: "Soup of the day", fav: true, tours: ["street-art", "mini-statues"] },
  { cat: "food", group: "Cakes & sweets", name: "Szamos", why: "I always stop here for marzipan and a classic cake, and it makes a lovely gift.", price: 2, near: "Several shops in the centre", good: ["Sweet tooth", "Gifts"], fav: true },
  { cat: "food", group: "Cakes & sweets", name: "Auguszt", why: "A family patisserie since the 19th century. Go for the old-fashioned cakes.", price: 2, near: "Several shops in the centre", good: ["Sweet tooth"] },


  { cat: "coffee", group: "Historic grand cafés", name: "Central Café", why: "A classic literary café, calmer than the New York. I'd come for a slow breakfast.", price: 3, near: "Near Elizabeth Bridge", good: ["Breakfast", "Cake break"], order: "Cake and coffee", web: "https://centralgrandcafe.hu/en/home/", placeId: "ChIJPWTeZUTcQUcRMXCSK_9QR0E" },
  { cat: "coffee", group: "Historic grand cafés", name: "Párisi Passage", why: "Coffee and cake under the stained-glass dome of the Párisi Udvar. A beautiful place to rest your feet.", price: 3, near: "Ferenciek tere, near Elizabeth Bridge", good: ["Cake break", "Sightseeing"], tip: "Café by day, restaurant in the evening. Book for dinner.", order: "Coffee and a French-style dessert", web: "https://parisipassage.hu/", placeId: "ChIJwxcVFcTdQUcRbgQjKuCiuiI" },
  { cat: "coffee", group: "Historic grand cafés", name: "Művész", why: "An old café opposite the Opera. I'd stop here before or after a show.", price: 2, near: "Opposite the Opera House", good: ["Cake break"] },
  { cat: "coffee", group: "Specialty coffee", name: "Massolit Books & Café", why: "English-language bookshop and café with a hidden back garden. My favourite quiet corner.", price: 2, near: "Nagy Diófa utca, Jewish Quarter", good: ["Coffee lovers", "Quiet"], tip: "Take a table in the garden in summer. Busy with students at peak hours.", order: "Homemade cake and a coffee", fav: true, placeId: "ChIJb-V2Q2jcQUcRLRX9PFUgj7w" },
  { cat: "coffee", group: "Specialty coffee", name: "Espresso Embassy", why: "Serious coffee near the Basilica, for when I want a proper espresso.", price: 2, near: "Near St. Stephen's Basilica", good: ["Coffee lovers"], tours: ["mini-statues"], web: "https://espressoembassy.hu/", placeId: "ChIJGyzE_xTcQUcRlvjbtChDLtU" },
  { cat: "coffee", group: "Specialty coffee", name: "My Little Melbourne", why: "A small specialty bar in the Jewish Quarter, good for a quick coffee.", price: 2, near: "Jewish Quarter", good: ["Coffee lovers"], tours: ["street-art"] },
  { cat: "coffee", group: "Specialty coffee", name: "Fekete", why: "A hidden courtyard café and one of the city's specialty pioneers. Half the fun is finding it.", price: 2, near: "Near the National Museum", good: ["Breakfast", "Coffee lovers"], tip: "Enter through the courtyard. Brunch is served until early afternoon.", web: "https://feketekv.hu/", placeId: "ChIJ-UU5E0PcQUcRP0iqvvmBTO8" },
  { cat: "offbeat", name: "Paloma Artspace", why: "Local designers' workshops around a hidden colonnaded courtyard. My first stop for a gift.", price: 0, near: "Kossuth Lajos utca, near Astoria", good: ["Shopping", "Souvenirs"], tip: "The best place for handmade gifts. Peek into the Unger House courtyard nearby too.", web: "https://www.palomaartspace.com/", placeId: "ChIJe9fZIvfdQUcREuq3JWU730E" },
  { cat: "offbeat", name: "Koller Gallery", why: "A secret gallery in the Castle District with a garden over the Danube. Most visitors walk right past it.", price: 0, near: "Táncsics Mihály utca, Castle District", good: ["Art", "Quiet"], tip: "Free to look around. All the pieces are for sale.", web: "https://www.kollergaleria.hu/", placeId: "ChIJBzFbyhjcQUcRhPRIyE8cQt8" },
  { cat: "offbeat", name: "Pinball Museum", why: "Europe's biggest pinball collection, and you can play almost all of it. Great on a rainy evening.", price: 2, near: "Radnóti Miklós utca, District XIII", good: ["Rainy day", "Evening"], tip: "One ticket, unlimited games. Open from the afternoon, closed Mon–Tue.", web: "https://flippermuzeum.hu/en/", placeId: "ChIJRRMeY47cQUcRjgnfTfZA7s4" },
  { cat: "offbeat", name: "Children's Railway", why: "A forest railway in the Buda Hills, run by kids aged 10 to 14. A real change of pace.", price: 1, near: "Buda Hills, Széchenyi-hegy", good: ["Families", "Nature"], tip: "Bring cash for tickets. Closed on Mondays.", web: "https://gyermekvasut.hu/en/", placeId: "ChIJ11SpDg_fQUcR8H-Af2VJzic" },
  { cat: "offbeat", name: "Memento Park", why: "Where Budapest's old communist statues ended up, all in one open-air park.", price: 2, near: "Outskirts of Buda, District XXII", good: ["History"], tip: "It's a trip out of the centre. Their short guided tour makes all the difference.", web: "https://www.mementopark.hu/", placeId: "ChIJu0bfv2znQUcRzGPO9XqR-bc" },
  { cat: "offbeat", name: "Nyolcésfél", why: "Artists' studios and a ruin bar in an old telephone exchange, where locals hang out.", price: 1, near: "Német utca, District VIII", good: ["Evening", "Art"], tip: "A local artists' hangout with a cheap, laid-back bar.", web: "https://nyolcesfel.hu/", placeId: "ChIJqYGX84HdQUcRkCVzggfelto" },

  { cat: "baths", name: "Széchenyi", why: "The big yellow classic, and where I'd take a first-timer. Go early.", price: 3, near: "City Park", good: ["First-timers", "Groups"], best: "Early morning", tip: "Bring flip-flops and a towel.", fav: true },
  { cat: "baths", name: "Rudas", why: "Ottoman dome and a rooftop pool with a view. I'd go in the evening.", price: 3, near: "Foot of Gellért Hill, Buda", good: ["Views"], best: "Evening", tip: "Check men-only and women-only days." },
  { cat: "baths", name: "Lukács", why: "Where the locals go. Less show, more actual bathing.", price: 2, near: "Buda end of Margaret Bridge", good: ["Quiet time"], best: "Weekday morning" },
  { cat: "baths", name: "Veli Bej", why: "A small, quiet Ottoman bath, and a hidden favourite of mine.", price: 2, near: "Buda end of Margaret Bridge", tip: "Limited capacity.", good: ["Quiet time", "Couples"], best: "Weekday afternoon" },

  { cat: "danube", name: "Evening river cruise", why: "The Parliament lit up from the water. I'd do this once, at sunset.", price: 3, near: "Pest riverbank", good: ["Couples", "Photos"], best: "Sunset", tip: "Sunset departures sell out.", fav: true },
  { cat: "danube", name: "Public boat D11 / D12", why: "My local hack: similar views for a fraction of the price.", price: 1, near: "Stops along both riverbanks", good: ["Budget", "Photos"], best: "Late afternoon", tip: "Check the timetable, it changes by season." },

  { cat: "drinks", name: "Szimpla Kert", why: "The original ruin bar. I'd see it once, ideally before it gets busy.", price: 1, near: "Jewish Quarter", good: ["First-timers", "Groups"], best: "Evening", tip: "Sunday morning farmers' market.", tours: ["street-art"] },
  { cat: "drinks", name: "Csendes Létterem", why: "A surreal junk-art bar in an 1883 café building. Look up and around.", price: 2, near: "Ferenczy István utca, near Astoria", good: ["Groups", "Cocktails"], best: "Evening", tip: "Look for the old Café Fiume lettering on the window. Opens late afternoon.", placeId: "ChIJtfzFXUPcQUcR3mCDIuuQb1g" },
  { cat: "drinks", name: "Tasting Table", why: "My kind of tasting spot: cosy, in a lovely local neighbourhood. The owners are real wine enthusiasts, and their tastings are excellent.", price: 2, near: "Bródy Sándor utca, District VIII", good: ["Wine lovers", "Tastings"], tip: "Book the sommelier-led tasting ahead, or drop into their wine shop across the street for a glass or a flight.", order: "A tasting flight of Hungarian wines", fav: true, web: "https://tastehungary.com/tasting-table-budapest/", cta: "Book a tasting", placeId: "ChIJ_TYfaz3cQUcRxuWm7zf5llE" },
  { cat: "drinks", name: "Doblo", why: "A cosy wine bar in the Jewish Quarter, perfect after a walk through the district.", price: 2, near: "Jewish Quarter", good: ["Wine lovers", "Couples"], best: "Evening" },
  { cat: "drinks", name: "Kadarka Wine Bar", why: "Around a hundred Hungarian wines open by the glass. Where I'd go to find out what kadarka is.", price: 2, near: "Király utca, Jewish Quarter", good: ["Wine lovers", "Couples"], best: "Evening", tip: "Book after 7 pm. Ask for small tasting pours before you pick a glass.", order: "A glass of Szekszárd kadarka", placeId: "ChIJkaD3aGncQUcRoEcntPpnrW8" },
  { cat: "drinks", name: "Élesztő", why: "Craft beer in a former glassworks. My pick for a beer-lover's evening.", price: 1, near: "Near Corvin Quarter", good: ["Beer lovers", "Groups"], best: "Evening" },
  { cat: "drinks", name: "Fekete Kutya", why: "Tiny, shabby, honest: a local bar with good-value beer.", price: 1, near: "Dob utca, Jewish Quarter", good: ["Beer lovers", "Late night"], best: "Late evening", tip: "Opens at 5 pm, closed on Sundays. Gets packed when there's a DJ.", placeId: "ChIJJ0WFtGncQUcRI3vuFybLNmA" },
  { cat: "drinks", name: "360 Bar", why: "A rooftop on Andrássy út. Go at sunset, if the weather plays along.", price: 3, near: "On Andrássy Avenue", good: ["Couples"], best: "Sunset", tip: "Weather dependent." },



  { cat: "rainy", group: "Museums & sights", name: "Museum of Fine Arts", why: "Europe's old masters, plus Egyptian and classical art. I'd give it a full morning.", price: 2, near: "Heroes' Square", good: ["Art", "Rainy day"], tip: "Closed Mondays. Combine it with the Műcsarnok across the square.", web: "https://www.szepmuveszeti.hu/en/", placeId: "ChIJ-6FvO4jbQUcROeO39pe3Sxs" },
  { cat: "rainy", group: "Museums & sights", name: "Műcsarnok", why: "Big contemporary shows in a grand hall on Heroes' Square. I check what's on before I go.", price: 2, near: "Heroes' Square", good: ["Art"], tip: "Each exhibition has its own ticket. Closed Mondays.", web: "https://mucsarnok.hu/", placeId: "ChIJd4t1FHjcQUcR6I49YlZiUg4" },
  { cat: "rainy", group: "Museums & sights", name: "Ludwig Museum", why: "Modern and contemporary art, from Picasso to Central European artists. Open late, which helps.", price: 2, near: "Müpa, on the Danube bank in District IX", good: ["Art", "Rainy day"], tip: "Open until 8 pm, closed Mondays.", web: "https://www.ludwigmuseum.hu/en", placeId: "ChIJ5_bsZQTdQUcRd39JyGJUeRE" },
  { cat: "rainy", group: "Museums & sights", name: "Hospital in the Rock", why: "A wartime hospital inside Castle Hill. It stays with you.", price: 2, near: "Castle District", tip: "Guided visits only.", good: ["History"] },
  { cat: "rainy", group: "Museums & sights", name: "House of Music Hungary", why: "An interactive music museum in City Park. Great with kids, and fun without them.", price: 2, near: "City Park", good: ["Families"], fav: true },
  { cat: "rainy", group: "Small galleries", name: "Inda Gallery", why: "Contemporary Hungarian and international art, chosen by in-house art historians. I drop in whenever I'm nearby.", price: 0, near: "Király utca, District VI", good: ["Art", "Free"], tip: "Free to visit. Open Tuesday to Friday afternoons.", web: "https://www.indagaleria.hu/", placeId: "ChIJ69lVf2ncQUcRR6CQ6P8GXCI" },
  { cat: "rainy", group: "Small galleries", name: "Deák Erika Gallery", why: "One of the city's longest-running galleries, open since 1998. A quiet way to see what Hungarian artists are up to.", price: 0, near: "Mozsár utca, near the Opera", good: ["Art", "Free"], tip: "Free to visit. Open Wednesday to Friday, midday to 6 pm.", web: "https://deakerikagaleria.hu/", placeId: "ChIJE-dtQ2zcQUcRNx8-dc5Mgr8" },
  { cat: "rainy", group: "Small galleries", name: "Hungarian House of Photography", why: "Photo exhibitions in a historic photographer's studio house. I'd go for the building as much as the pictures.", price: 1, near: "Nagymező utca, near the Opera", good: ["Art", "Photography"], tip: "Small space, about half an hour. Closed Mondays.", web: "https://maimano.hu/", placeId: "ChIJgU5vE2zcQUcRXDGgKYfaaj8" }
];

const TIPS = [
  { group: "Getting around", title: "Taxi", text: "Order through the Bolt, Uber or Főtaxi app. Licensed taxis and app rides run on set prices: the tariff is regulated, and the app shows you the price before you get in. If it says 'Freelancer' on the taxi, don't get in: it's a scam. Don't take a taxi that waves you over, and don't hail one on the street." },
  { group: "Getting around", title: "Public transport", text: "Buy a 24h or 72h pass if you'll ride more than a few times. The official BudapestGO app plans your route with live departures, and sells tickets and passes in English." },
  { group: "Getting around", title: "Airport bus 100E", text: "The cheap way to the airport: a direct bus from Deák Ferenc tér (also stops at Kálvin tér). It needs its own 2,500 HUF airport ticket. Just tap your bank card on the reader as you board. With a Budapest travel pass, buy the 1,000 HUF add-on in the BudapestGO app." },
  { group: "Money & safety", title: "Emergency: 112", text: "For police, an ambulance or the fire brigade, call 112. It's free from any phone.", action: { label: "Call 112", href: "tel:112" } },
  { group: "Money & safety", title: "Tipping", text: "Around 10–15% in restaurants. Check the bill: service is sometimes included." },
  { group: "Money & safety", title: "Pharmacy", text: "Look for the green cross and the word 'Gyógyszertár'." },
  { group: "Good to know", title: "Closing days", text: "Many museums close on Mondays, and some restaurants and small shops close on Sundays or Mondays. Check the opening hours before you set off." },
  { group: "Good to know", title: "Thermal bath basics", text: "Bring swimwear, flip-flops and your own towel, because many baths don't rent them or charge a lot. A swim cap is only needed in the lap pools. Rudas has men-only and women-only times in its Turkish bath, so check the schedule." },
  { group: "Good to know", title: "Phone and data", text: "EU SIM cards roam as at home. From outside the EU, an eSIM or a local prepaid SIM is usually cheaper than your home roaming." },
  { group: "Good to know", title: "Tap water", text: "It's safe to drink, so a refillable bottle saves you money." },
  { group: "Things to avoid", avoid: true, title: "Riding without validating", text: "Stamp your paper ticket in the machine as you board, or at the metro entrance. An unvalidated ticket counts as no ticket, and inspectors fine on the spot." },
  { group: "Things to avoid", avoid: true, title: "Euronet ATMs", text: "Use ATMs inside bank branches instead." },
  { group: "Things to avoid", avoid: true, title: "Tourist exchange booths", text: "Pay by card, or withdraw forints from a bank ATM." },
  { group: "Things to avoid", avoid: true, title: "Eating on Váci utca", text: "Váci utca (VAH-tsee OOT-tsah) is the long pedestrian shopping street in the centre of Pest, from Vörösmarty tér down to the Central Market Hall. Its restaurants are aimed at tourists: higher prices and average food. Walk a street or two away for better food at better prices." }
];

const app = document.getElementById("app");
const params = new URLSearchParams(location.search);
const tourKey = TOURS[params.get("tour")] ? params.get("tour") : null;
const filters = { fav: false };

// Saved places (heart). Stored in this browser only (localStorage); works without it, just not across visits.
const SAVE_KEY = "bpf-tips-saved";
const placeKey = p => p.cat + "|" + p.name;
let saved = new Set();
try { saved = new Set(JSON.parse(localStorage.getItem(SAVE_KEY) || "[]")); } catch (e) {}
const persistSaved = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify([...saved])); } catch (e) {} };
const savedCount = () => PLACES.filter(p => saved.has(placeKey(p))).length;
// Share links carry a short hash of each place key (FNV-1a, base 36), e.g. #saved=1a2b3c,9x8y7z
const hashKey = s => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); } return (h >>> 0).toString(36); };
const listUrl = places => {
  const u = new URL(location.href);
  u.searchParams.delete("tour");
  u.hash = "saved=" + places.map(p => hashKey(placeKey(p))).join(",");
  return u.href;
};
let currentTab = "";

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ico = (id, cls = "icon") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const priceHtml = n => `<span role="img" aria-label="Price level ${n} of 4">${"€".repeat(n)}<b aria-hidden="true">${"€".repeat(4 - n)}</b></span>`;
// "See on map": with a Google place id (placeId) it opens the exact Maps listing; without it, a name search.
const mapsUrl = p => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(p.name + " Budapest")
  + (p.placeId ? "&query_place_id=" + encodeURIComponent(p.placeId) : "");
const tileStyle = c => c.img ? `--img:url(${c.img})` : `--c1:${c.c1};--c2:${c.c2}`;
const catById = id => CATEGORIES.find(c => c.id === id);

function reviewBlock() {
  return `<section class="review" aria-labelledby="review-title">
    <h2 id="review-title">Enjoyed the walk?</h2>
    <p>A few words about the tour help other travellers find small, local tours like mine. Choose whichever site you use.</p>
    <div class="btn-row">
      <a class="btn btn-secondary" href="${REVIEW_URL}" target="_blank" rel="noopener"><span class="ta-dots" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span><span class="rv-label">Tripadvisor</span></a>
      <a class="btn btn-secondary" href="${GOOGLE_REVIEW_URL}" target="_blank" rel="noopener"><span class="g-stars" aria-hidden="true">★★★★★</span><span class="rv-label">Google</span></a>
    </div>
  </section>`;
}

// Second button on a place card: label + icon follow the link (own site, Facebook or Instagram).
function linkBtn(p) {
  if (p.web === undefined) return `<a class="btn btn-secondary" href="#" onclick="return false" aria-disabled="true">${ico("link")}${p.cta ? esc(p.cta) : "Website"}</a>`;
  if (!p.web) return "";
  const host = (() => { try { return new URL(p.web).hostname.replace(/^www\.|^m\./, ""); } catch (e) { return ""; } })();
  const kind = p.cta ? [/ticket/i.test(p.cta) ? "ticket" : /book|reserve|table|tasting|cruise|tour/i.test(p.cta) ? "calendar" : "link", esc(p.cta)]
             : /(^|\.)(facebook\.com|fb\.com)$/.test(host) ? ["facebook", "Facebook"]
             : /(^|\.)instagram\.com$/.test(host) ? ["instagram", "Instagram"]
             : ["link", "Website"];
  return `<a class="btn btn-secondary" href="${esc(p.web)}" target="_blank" rel="noopener">${ico(kind[0])}${kind[1]}</a>`;
}

function card(p) { return cardHtml(p, 3); }
function cardTop(p) { return cardHtml(p, 2); } // when the list has no group headings (h2), place names follow the page title (h1) directly
function cardHtml(p, lvl) {
  return `<article class="card">
    <div class="head">
      <h${lvl} class="name">${esc(p.name)}${p.fav ? '<span class="pick">Attila\'s pick</span>' : ""}</h${lvl}>
      ${p.price ? `<div class="price">${priceHtml(p.price)}</div>` : ""}
      <button class="save" data-save="${esc(placeKey(p))}" aria-pressed="${saved.has(placeKey(p))}" aria-label="Save ${esc(p.name)}">${ico("heart")}</button>
      <p class="why">${esc(p.why)}</p>
      <div class="meta">
        <span class="near-to">${ico("pin")}${esc(p.near)}</span>
      </div>
      <div class="tags">
        ${(p.good || []).map(g => `<span class="tag"><span class="sr">Good for </span>${esc(g)}</span>`).join("")}
        ${p.best ? `<span class="tag best">${ico("clock")}Best: ${esc(p.best)}</span>` : ""}
      </div>
    </div>
    <div class="body">
      ${(p.order || p.tip) ? `<ul class="facts">
        ${p.order ? `<li>${ico("check")}<span><strong>Order:</strong> ${esc(p.order)}</span></li>` : ""}
        ${p.tip ? `<li>${ico("check")}<span><strong>Tip:</strong> ${esc(p.tip)}</span></li>` : ""}
      </ul>` : ""}
      <div class="btn-row${p.cta && p.web !== "" ? " has-cta" : ""}">
        <a class="btn btn-primary" href="${mapsUrl(p)}" target="_blank" rel="noopener">${ico("pin")}See on map</a>
        ${linkBtn(p)}
      </div>
    </div>
  </article>`;
}

function siteFooter() {
  return `<footer class="pad">
    <a href="${TOURS_URL}" target="_blank" rel="noopener"><img src="${LOGO}" alt="BudapestFlow Walking Tours" width="76" height="46"></a>
    <p class="tagline">Small-group walking tours in Budapest, the way locals see it.</p>
    <nav aria-label="BudapestFlow">
      <a href="${TOURS_URL}" target="_blank" rel="noopener">budapestflow.com</a>
      <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener">Instagram</a>
      <a href="${REVIEW_URL}" target="_blank" rel="noopener">Tripadvisor</a>
    </nav>
    <small>© ${new Date().getFullYear()} BudapestFlow Walking Tours</small>
  </footer>`;
}

function renderHome() {
  const homeCats = CATEGORIES.filter(c => c.home);
  const nearTour = tourKey ? PLACES.filter(p => (p.tours || []).includes(tourKey)) : [];

  app.innerHTML = `
    ${SHOW_HEADER ? `<header class="brandbar pad">
      <a class="logo" href="${TOURS_URL}" target="_blank" rel="noopener"><img src="${LOGO}" alt="BudapestFlow Walking Tours" width="56" height="34"></a>
      <button class="back" id="share" aria-label="Share this page with a friend">${ico("share")}</button>
    </header>` : ""}

    <main class="pad${SHOW_HEADER ? "" : " no-header"}">
      <header class="hero">
        <div class="portrait"><img src="images/attila.webp" alt="Attila Höfle, your guide" width="104" height="104" fetchpriority="high" decoding="async"></div>
        <h1>Thank you for walking with me</h1>
        <div class="hero-text">
          <p class="lead">My own favourites, all in one place.</p>
          <div class="sig"><svg class="hand" viewBox="87 260 2660 767" role="img" aria-label="– Attila"><path fill="currentColor" d="M173 786Q167 786 158 786Q149 785 138 781Q123 781 116 776Q108 770 104 763Q93 748 104 740Q116 733 153 729Q170 725 204 722Q237 720 276 718Q315 717 350 716Q385 715 405 715Q431 715 448 719Q464 723 475 734Q490 749 484 764Q477 780 454 776Q449 776 436 777Q423 778 408 779Q393 780 381 781Q375 781 348 782Q321 783 286 784Q250 785 218 786Q187 786 173 786ZM752 993Q734 983 732 971Q731 959 746 929Q761 899 793 836Q817 791 826 766Q836 740 838 729Q841 718 841 715Q839 706 843 700Q847 695 856 691Q861 686 876 673Q892 660 902 642Q911 621 923 599Q935 577 954 544Q973 510 1005 456Q1025 421 1052 380Q1078 338 1105 302Q1116 288 1127 280Q1138 272 1147 272Q1166 272 1186 282Q1205 293 1221 308Q1237 324 1243 339Q1248 347 1247 373Q1246 399 1243 436Q1240 473 1236 515Q1233 556 1227 612Q1221 668 1216 729Q1210 790 1207 846Q1204 903 1207 945Q1208 954 1207 962Q1206 970 1206 975Q1200 981 1182 980Q1164 980 1147 974Q1130 968 1128 959Q1125 956 1124 953Q1124 950 1125 932Q1126 914 1127 870L1132 714L1119 715Q1110 715 1086 717Q1062 719 1034 722Q1006 726 982 730Q959 733 950 736Q941 736 928 748Q916 760 905 779Q901 793 890 808Q880 824 880 829Q873 834 869 841Q865 848 865 848Q865 854 856 878Q846 901 832 930Q819 958 805 979L780 1015ZM980 656Q980 656 991 654Q1002 652 1017 650Q1032 647 1044 647Q1073 640 1090 637Q1107 634 1116 634Q1125 633 1131 636Q1135 641 1138 642Q1142 643 1142 643Q1143 641 1146 622Q1148 602 1152 573Q1156 544 1160 512Q1164 481 1166 454Q1169 426 1170 411Q1171 392 1170 376Q1169 361 1169 361Q1163 361 1146 383Q1128 405 1106 440Q1083 476 1062 517Q1052 536 1044 548Q1035 561 1030 561Q1028 563 1019 577Q1010 591 1000 608Q990 626 984 640Q977 654 980 656ZM1370 958Q1359 956 1346 946Q1334 935 1324 921Q1314 907 1311 897Q1311 895 1308 892Q1306 889 1306 889Q1302 886 1302 862Q1301 839 1304 810Q1307 781 1311 764Q1316 748 1326 720Q1336 693 1343 671L1370 613L1330 602Q1323 600 1318 594Q1314 588 1314 584Q1314 576 1323 562Q1332 548 1336 548Q1341 549 1354 549Q1368 549 1381 548Q1394 547 1397 546Q1401 544 1405 540Q1409 537 1411 530Q1416 519 1420 512Q1424 505 1431 493Q1438 480 1442 471Q1447 462 1457 446Q1462 439 1468 429Q1474 419 1483 412Q1492 404 1509 402Q1526 400 1541 413Q1549 423 1550 430Q1551 438 1542 452Q1534 469 1524 484Q1513 498 1504 515Q1488 537 1498 540Q1508 543 1554 536Q1583 531 1596 541Q1609 551 1611 568Q1614 592 1606 597Q1598 602 1560 602Q1536 606 1519 606Q1502 607 1494 607Q1481 608 1477 608Q1473 608 1465 610Q1457 612 1454 616Q1450 621 1446 629Q1442 633 1434 650Q1426 667 1414 687Q1400 729 1390 768Q1380 808 1374 846Q1370 867 1375 876Q1380 885 1401 887Q1412 888 1434 886Q1456 885 1470 881Q1481 876 1493 870Q1505 865 1515 859Q1524 854 1533 848Q1542 843 1542 843Q1547 835 1556 843Q1564 851 1568 863Q1568 875 1563 890Q1558 906 1526 924Q1481 952 1438 958Q1396 963 1370 958ZM1701 958Q1690 956 1678 946Q1665 935 1655 921Q1645 907 1642 897Q1642 895 1640 892Q1637 889 1637 889Q1633 886 1632 862Q1632 839 1635 810Q1638 781 1642 764Q1647 748 1657 720Q1667 693 1674 671L1701 613L1661 602Q1654 600 1650 594Q1645 588 1645 584Q1645 576 1654 562Q1663 548 1667 548Q1672 549 1686 549Q1699 549 1712 548Q1725 547 1728 546Q1732 544 1736 540Q1740 537 1742 530Q1747 519 1751 512Q1755 505 1762 493Q1769 480 1774 471Q1778 462 1788 446Q1793 439 1799 429Q1805 419 1814 412Q1823 404 1840 402Q1857 400 1872 413Q1880 423 1881 430Q1882 438 1873 452Q1865 469 1854 484Q1844 498 1835 515Q1819 537 1829 540Q1839 543 1885 536Q1914 531 1927 541Q1940 551 1942 568Q1945 592 1937 597Q1929 602 1891 602Q1867 606 1850 606Q1833 607 1825 607Q1812 608 1808 608Q1804 608 1796 610Q1788 612 1784 616Q1781 621 1777 629Q1773 633 1765 650Q1757 667 1745 687Q1731 729 1721 768Q1711 808 1705 846Q1701 867 1706 876Q1711 885 1732 887Q1743 888 1765 886Q1787 885 1801 881Q1812 876 1824 870Q1836 865 1846 859Q1855 854 1864 848Q1873 843 1873 843Q1878 835 1886 843Q1895 851 1899 863Q1899 875 1894 890Q1889 906 1857 924Q1812 952 1770 958Q1727 963 1701 958ZM1964 938Q1956 930 1952 916Q1949 901 1950 886Q1951 872 1955 864Q1955 856 1958 852Q1960 847 1959 843Q1958 839 1961 829Q1964 819 1967 810Q1974 794 1982 770Q1991 745 2000 720Q2008 695 2014 676Q2019 658 2020 654Q2020 642 2036 641Q2048 637 2062 648Q2075 658 2085 674Q2093 682 2091 696Q2089 710 2078 734Q2074 742 2068 760Q2063 777 2061 789Q2057 797 2052 812Q2046 826 2042 839Q2040 844 2038 856Q2036 868 2033 881Q2030 894 2025 902Q2016 943 1998 950Q1981 957 1964 938ZM2068 535Q2059 528 2054 518Q2049 507 2048 498Q2048 489 2050 488Q2059 480 2068 462Q2077 445 2082 431Q2083 428 2086 423Q2090 418 2094 417Q2106 409 2124 417Q2142 425 2152 441Q2161 460 2158 478Q2154 495 2136 517Q2121 537 2102 542Q2082 546 2068 535ZM2189 967Q2170 972 2156 958Q2142 943 2138 914Q2133 885 2141 848Q2146 836 2149 824Q2152 813 2152 806Q2154 796 2160 776Q2166 757 2173 736Q2180 715 2186 698Q2193 682 2195 678Q2199 678 2202 671Q2205 664 2205 657Q2205 649 2208 639Q2212 629 2216 625Q2216 620 2218 614Q2221 607 2221 603Q2221 599 2224 595Q2226 591 2226 587Q2233 574 2244 546Q2256 517 2270 482Q2283 447 2295 413Q2307 379 2314 356Q2322 332 2322 327Q2322 319 2328 313Q2333 307 2341 307Q2344 304 2352 302Q2361 301 2365 301Q2365 301 2369 305Q2373 309 2381 317Q2389 324 2394 333Q2400 342 2400 354Q2400 367 2397 378Q2394 390 2385 410Q2376 430 2357 470Q2349 490 2340 508Q2331 525 2331 529Q2331 533 2328 541Q2324 549 2320 561Q2316 569 2309 584Q2302 600 2294 618Q2287 635 2282 648Q2277 660 2277 662Q2277 666 2276 670Q2276 674 2272 678Q2268 678 2268 684Q2267 689 2267 689Q2267 699 2251 742Q2235 797 2222 843Q2208 889 2208 917Q2208 941 2202 952Q2197 963 2189 967ZM2344 934Q2340 926 2329 919Q2318 912 2318 908Q2318 904 2315 897Q2312 890 2308 886Q2303 880 2310 857Q2318 834 2333 801Q2348 768 2367 733Q2375 725 2383 712Q2391 699 2395 695Q2395 691 2398 688Q2401 684 2405 684L2411 671Q2412 667 2422 655Q2432 643 2447 628Q2462 614 2477 601Q2492 588 2502 582Q2523 568 2546 568Q2568 567 2584 580Q2587 583 2596 592Q2606 600 2618 610Q2630 620 2640 629L2677 662L2660 712Q2647 752 2654 782Q2660 812 2672 834Q2677 845 2688 852Q2699 860 2713 862Q2721 863 2728 868Q2735 873 2735 884Q2735 903 2728 912Q2721 921 2711 923Q2678 927 2648 913Q2619 899 2595 853Q2591 847 2584 830Q2578 814 2577 809Q2573 814 2565 824Q2557 833 2551 839Q2480 911 2429 934Q2378 956 2344 934ZM2393 860Q2398 863 2415 855Q2432 847 2457 827Q2491 798 2517 774Q2543 749 2564 719L2586 683Q2576 660 2567 652Q2558 645 2550 645Q2537 645 2516 664Q2496 683 2472 718Q2447 752 2419 799Q2407 820 2400 840Q2393 860 2393 860Z"/></svg></div>
        </div>
      </header>

      ${tourKey ? `<section class="near" aria-labelledby="near-title">
        <p class="eyebrow">Close to where we finished</p>
        <h2 id="near-title">${esc(TOURS[tourKey])}</h2>
        ${nearTour.map(card).join("")}
      </section>` : ""}

      <nav aria-labelledby="cat-title">
        <div class="section-head"><h2 id="cat-title">What are you looking for?</h2></div>
        <div class="grid${TILE_LABELS === "center" ? " labels-center" : ""}">
          ${homeCats.map(c => `<button class="tile" data-cat="${c.id}" style="${tileStyle(c)}">
            <span class="tile-img" aria-hidden="true">${c.img ? "" : ico(c.id)}</span>
            ${c.img ? "" : '<span class="tile-ph" aria-hidden="true">Photo</span>'}
            <span class="tile-label">${esc(c.label)}</span>
          </button>`).join("")}
        </div>
      </nav>

      ${reviewBlock()}

      <section class="panel" aria-labelledby="more-tours">
        <h2 id="more-tours">Staying a few more days?</h2>
        <p>Join another walk with me. Small groups, the city the way locals see it.</p>
        <a class="btn btn-primary" href="${TOURS_URL}" target="_blank" rel="noopener">See my tours</a>
      </section>

      <a class="contact" href="${CARD_URL}">
        <span class="contact-ico">${ico("contact")}</span>
        <span class="grow"><strong>Save my contact</strong><span>Phone, WhatsApp and email in one tap</span></span>
        ${ico("chev")}
      </a>

      <section class="tipping" aria-labelledby="tip-title">
        <h2 id="tip-title">Want to say thanks?</h2>
        <p>If I helped make your days in Budapest a little better, a tip is a lovely way to say thanks. It's never expected, and it goes straight to me.</p>
        <fieldset class="tip-seg">
          <legend class="sr">Choose a tip amount</legend>
          ${TIP_LINKS.map((t, i) => `<label class="tip-opt"><input type="radio" name="tip" value="${i}"${t.featured ? " checked" : ""}><span>${esc(t.label)}</span></label>`).join("")}
        </fieldset>
        ${tipGo(TIP_LINKS.find(t => t.featured) || TIP_LINKS[0])}
        <p class="tip-note">Pay by card, Apple Pay or Google Pay. <span class="nb">No sign-up</span>, secure payment via Stripe.</p>
      </section>

      <section class="ask" aria-labelledby="ask-title">
        <h2 id="ask-title">Any questions left?</h2>
        <p>Not sure where to eat tonight, or how to get somewhere? Drop me an email and I'll get back to you.</p>
        <a class="btn btn-secondary" href="mailto:${EMAIL}?subject=${encodeURIComponent("Question after the tour")}">${ico("mail")}Email me</a>
        <p class="ask-addr">${esc(EMAIL)}</p>
      </section>
    </main>
    ${siteFooter()}
  `;
  if (SHOW_HEADER) document.getElementById("share").addEventListener("click", () => sharePage());
}

function renderCategory(id) {
  const c = catById(id);
  if (!c) { location.hash = ""; return; }

  let body;
  if (id === "practical") {
    body = [...new Set(TIPS.map(t => t.group))].map(g => `<h2 class="eyebrow group-title">${esc(g)}</h2>` + TIPS.filter(t => t.group === g).map(t => `<div class="tipcard${t.avoid ? " avoid" : ""}">
      ${t.avoid ? `<span class="tag-avoid">${ico("alert")}Avoid</span>` : ""}
      <h3>${esc(t.title)}</h3><p>${esc(t.text)}</p>
      ${t.action ? `<a class="btn btn-primary" href="${esc(t.action.href)}">${ico("phone")}${esc(t.action.label)}</a>` : ""}</div>`).join("")).join("");
  } else {
    let list = PLACES.filter(p => p.cat === id);
    if (filters.fav && list.some(p => p.fav)) list = list.filter(p => p.fav);
    const groups = [...new Set(list.map(p => p.group || ""))];
    body = list.length
      ? groups.map(g => (g ? `<h2 class="eyebrow group-title">${esc(g)}</h2>` : "") + list.filter(p => (p.group || "") === g).map(list.some(p => p.group) ? card : cardTop).join("")).join("")
      : `<p class="empty">Nothing matches these filters right now. <button id="clear">Show all picks</button></p>`;
  }

  app.innerHTML = `
    <header class="topbar pad">
      <button class="back-pill" id="back" aria-label="Back to Home">${ico("back")}<span>Home</span></button>
      <h1>${esc(c.label)}</h1>
      ${SHOW_HEADER ? `<button class="back" id="share-cat" aria-label="Share this list with a friend">${ico("share")}</button>` : ""}
    </header>
    <main class="pad">
      <p class="intro">${esc(c.intro)}</p>
      ${id === "practical" || !PLACES.some(p => p.cat === id && p.fav) ? "" : `<div class="filters">
        <button class="chip chip-fav" data-f="fav" aria-pressed="${filters.fav}">${ico("star")}Show only Attila's picks</button>
      </div>`}
      ${body}
    </main>
    ${siteFooter()}
  `;
  document.getElementById("back").addEventListener("click", () => { location.hash = ""; });
  if (SHOW_HEADER) document.getElementById("share-cat").addEventListener("click", () => sharePage(c));
  const clear = document.getElementById("clear");
  if (clear) clear.addEventListener("click", () => { filters.fav = false; renderCategory(id); });
  app.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
    filters[b.dataset.f] = !filters[b.dataset.f];
    renderCategory(id);
  }));
}

// Link to share: without the guest's ?tour= (a friend wasn't on that tour), and pointing to the category if one is open.
function shareUrl(cat) {
  const u = new URL(location.href);
  u.searchParams.delete("tour");
  u.hash = cat ? "cat/" + cat.id : "";
  return u.href.replace(/#$/, "");
}

function sharePage(cat) {
  const url = shareUrl(cat);
  const title = cat ? `${cat.label} – Attila's Budapest tips` : "Attila's Budapest tips";
  if (navigator.share) {
    navigator.share({ title, url }).catch(err => {
      if (err && err.name !== "AbortError") copyLink(url); // share sheet unavailable here → copy instead
    });
  } else copyLink(url);
}

// Fallback when there is no share sheet (mostly desktop): copy the link and confirm it.
function copyLink(url) { copyText(url, "Link copied", "Copy this link: " + url); }
function copyText(text, okMsg, failMsg) {
  const done = ok => showToast(ok ? okMsg : failMsg);
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => done(true), () => done(legacyCopy(text)));
  } else done(legacyCopy(text));
}
function legacyCopy(text) {
  const t = document.createElement("textarea");
  t.value = text; t.setAttribute("readonly", ""); t.style.cssText = "position:fixed;opacity:0;top:0;left:0";
  document.body.appendChild(t); t.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (e) {}
  t.remove();
  return ok;
}
let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), msg.length > 20 ? 6000 : 2200);
}

// Categories that don't have their own tab; shown in the "More" sheet.
const moreCats = () => CATEGORIES.filter(c => c.home && !TABS.some(t => t.id === c.id));
let sheetOpen = false;

function renderTabbar(current) {
  const bar = document.getElementById("tabbar");
  if (!bar) return;
  if (!SHOW_TABBAR) { bar.remove(); return; }
  document.body.classList.add("has-tabbar");
  const n = savedCount();
  const moreOn = sheetOpen || moreCats().some(c => c.id === current);
  bar.innerHTML = `<div class="tabbar-inner">${TABS.map(t => {
    const isMore = t.id === "more";
    const on = isMore ? moreOn : (!sheetOpen && t.id === current);
    const badge = t.id === "saved" && n ? `<b class="badge" aria-hidden="true">${n}</b>` : "";
    const inner = `<span class="tab-ico">${ico(t.icon)}${badge}</span><span>${esc(t.label)}${t.id === "saved" && n ? `<span class="sr">, ${n} saved</span>` : ""}</span>`;
    return isMore
      ? `<button type="button" class="tab${on ? " on" : ""}" id="tab-more" aria-haspopup="dialog" aria-expanded="${sheetOpen}">${inner}</button>`
      : `<a class="tab${on ? " on" : ""}" href="${t.href}"${on ? ' aria-current="page"' : ""}>${inner}</a>`;
  }).join("")}</div>`;
}

function setSheet(open, returnFocus) {
  const sheet = document.getElementById("sheet"), backdrop = document.getElementById("sheet-backdrop");
  if (!sheet || !backdrop) return;
  sheetOpen = open;
  app.inert = open; // keyboard and screen readers can't wander into the page behind the sheet
  if (open) {
    sheet.innerHTML = `<h2 id="sheet-title">More categories</h2><ul>${moreCats().map(c => {
      const cur = c.id === currentTab;
      const thumb = c.img ? `background-image:url('${c.img}')` : `background:linear-gradient(135deg,${c.c1},${c.c2})`;
      return `<li><a class="sheet-row${cur ? " on" : ""}" href="#cat/${c.id}"${cur ? ' aria-current="page"' : ""}><span class="sheet-thumb" style="${thumb}"></span><span>${esc(c.label)}</span>${ico("chev")}</a></li>`;
    }).join("")}</ul>`;
  }
  sheet.classList.toggle("open", open);
  backdrop.classList.toggle("open", open);
  sheet.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("sheet-open", open);
  renderTabbar(currentTab);
  if (open) setTimeout(() => { const first = sheetOpen && sheet.querySelector(".sheet-row"); if (first) first.focus(); }, 40); // after the sheet becomes visible
  else if (returnFocus) { const t = document.getElementById("tab-more"); if (t) t.focus(); }
}

(function initSheet() {
  const bar = document.getElementById("tabbar"), sheet = document.getElementById("sheet"), backdrop = document.getElementById("sheet-backdrop");
  if (!bar || !sheet || !backdrop) return;
  bar.addEventListener("click", e => {
    if (e.target.closest("#tab-more")) { setSheet(!sheetOpen, sheetOpen); return; }
    if (sheetOpen && e.target.closest("a.tab")) setSheet(false, false);
  });
  sheet.addEventListener("click", e => { if (e.target.closest(".sheet-row")) setSheet(false, false); });
  backdrop.addEventListener("click", () => setSheet(false, true));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && sheetOpen) setSheet(false, true); });
})();

function groupedCards(list) {
  return CATEGORIES.map(c => {
    const ps = list.filter(p => p.cat === c.id);
    return ps.length ? `<h2 class="eyebrow group-title">${esc(c.label)}</h2>` + ps.map(card).join("") : "";
  }).join("");
}

function listPage(title, inner) {
  app.innerHTML = `
    <header class="topbar pad">
      <button class="back-pill" id="back" aria-label="Back to Home">${ico("back")}<span>Home</span></button>
      <h1>${esc(title)}</h1>
    </header>
    <main class="pad">
      ${inner}
    </main>
    ${siteFooter()}
  `;
  document.getElementById("back").addEventListener("click", () => { location.hash = ""; });
}

function renderSaved() {
  const list = PLACES.filter(p => saved.has(placeKey(p)));
  if (!list.length) {
    listPage("Saved", `<div class="saved-empty">${ico("heart")}<h2>Nothing saved yet</h2><p>Tap the heart on any place to keep it here for later.</p><a class="btn btn-secondary" href="#">Browse the categories</a></div>`);
    return;
  }
  listPage("Saved", `<p class="intro">Your saved places. Send the list to a friend, or keep it for tomorrow.</p>
    <button class="btn btn-primary list-btn" id="share-list">${ico("share")}Share my list</button>
    ${groupedCards(list)}
    <p class="saved-note">Saved on this phone only. Clearing your browser data clears the list, but a shared link brings it back.</p>`);
  document.getElementById("share-list").addEventListener("click", () => shareList(list));
}

// Opened from a friend's link: show their places, and let the visitor add them to their own list.
function renderShared(ids) {
  const list = PLACES.filter(p => ids.includes(hashKey(placeKey(p))));
  if (!list.length) {
    listPage("Shared list", `<div class="saved-empty">${ico("heart")}<h2>This list is empty</h2><p>The link doesn't match any places. It may be out of date.</p><a class="btn btn-secondary" href="#">Browse the categories</a></div>`);
    return;
  }
  listPage("Shared list", `<p class="intro">A friend shared ${list.length === 1 ? "this place" : "these " + list.length + " places"} with you.</p>
    <button class="btn btn-primary list-btn" id="add-all">${ico("heart")}Add all to my Saved</button>
    ${groupedCards(list)}`);
  document.getElementById("add-all").addEventListener("click", () => {
    const before = savedCount();
    list.forEach(p => saved.add(placeKey(p)));
    persistSaved();
    const added = savedCount() - before;
    showToast(added ? `Added ${added} to your list` : "Already in your list");
    location.hash = "saved";
  });
}

function shareList(list) {
  const url = listUrl(list);
  const title = "My Budapest picks";
  if (navigator.share) {
    navigator.share({ title, text: "Places I saved for Budapest", url }).catch(err => {
      if (err && err.name !== "AbortError") copyLink(url);
    });
  } else copyLink(url);
}

function toggleSave(k) {
  if (saved.has(k)) saved.delete(k); else { saved.add(k); showToast("Saved to your list"); }
  persistSaved();
  document.querySelectorAll("[data-save]").forEach(b => { if (b.dataset.save === k) b.setAttribute("aria-pressed", saved.has(k)); });
  renderTabbar(currentTab);
}

const BASE_TITLE = document.title;
let firstRoute = true;
function route() {
  const m = location.hash.match(/^#cat\/([\w-]+)/);
  const isSaved = location.hash === "#saved";
  const shared = location.hash.match(/^#saved=([\w,]*)$/);
  if (m) renderCategory(m[1]); else if (isSaved) renderSaved(); else if (shared) renderShared(shared[1].split(",").filter(Boolean)); else renderHome();
  currentTab = m ? m[1] : isSaved ? "saved" : shared ? "shared" : "";
  if (sheetOpen) setSheet(false, false);
  renderTabbar(currentTab);
  const label = m ? (catById(m[1]) || {}).label : isSaved ? "Saved" : shared ? "Shared list" : "";
  document.title = label ? label + " · " + BASE_TITLE : BASE_TITLE;
  if (!firstRoute) {
    // like a page load: screen-reader and keyboard users land on the new page's heading
    const hd = app.querySelector("h1");
    if (hd) { hd.setAttribute("tabindex", "-1"); hd.focus({ preventScroll: true }); }
    window.scrollTo(0, 0);
  } // skipped on first load: scrolling right after rendering would force a layout
  firstRoute = false;
}

app.addEventListener("click", e => {
  const tg = e.target.closest("#tip-go");
  if (tg && tg.getAttribute("href") === "#") { e.preventDefault(); showToast("Payment link coming soon"); return; }
  const s = e.target.closest("[data-save]");
  if (s) { toggleSave(s.dataset.save); return; }
  const b = e.target.closest("[data-cat]");
  if (b) location.hash = "cat/" + b.dataset.cat;
});
app.addEventListener("change", e => {
  if (!e.target.matches('input[name="tip"]')) return;
  const go = document.getElementById("tip-go");
  if (go) go.outerHTML = tipGo(TIP_LINKS[+e.target.value]);
});
window.addEventListener("hashchange", route);
document.addEventListener("touchstart", () => {}, { passive: true }); // lets iOS Safari show the :active pressed states
route();
