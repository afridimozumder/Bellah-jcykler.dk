export type Category =
  | "damecykler"
  | "herrecykler"
  | "boernecykler"
  | "elcykler"
  | "el-ladcykler"
  | "tilbehoer";

export const categoryLabels: Record<Category, string> = {
  damecykler: "Damecykler",
  herrecykler: "Herrecykler",
  boernecykler: "Børnecykler",
  elcykler: "Elcykler",
  "el-ladcykler": "El-ladcykler",
  tilbehoer: "Tilbehør",
};

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
  inStock: boolean;
}

// Stock photography from Unsplash — swap for real product photos later.
const img = {
  cityBlack:
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80&auto=format&fit=crop",
  cityClassic:
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1200&q=80&auto=format&fit=crop",
  retroDame:
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=1200&q=80&auto=format&fit=crop",
  retroBeige:
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200&q=80&auto=format&fit=crop",
  ebike:
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80&auto=format&fit=crop",
  mountain:
    "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=1200&q=80&auto=format&fit=crop",
  mountainDark:
    "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1200&q=80&auto=format&fit=crop",
  folding:
    "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=1200&q=80&auto=format&fit=crop",
  kidsSeat:
    "https://images.unsplash.com/photo-1597490681034-eecb845bbb46?w=1200&q=80&auto=format&fit=crop",
  touring:
    "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=1200&q=80&auto=format&fit=crop",
};

export const products: Product[] = [
  {
    slug: "bhc-damecykel-3-gear-sort",
    name: "BHC Damecykel 3 Gear Sort",
    brand: "BHC",
    category: "damecykler",
    price: 2500,
    oldPrice: 2999,
    image: img.cityClassic,
    description:
      "Vores egen klassiske damecykel — enkel, robust og bygget til hverdagen i København. Med 3 indvendige gear, fodbremse og fuld kædeskærm er den nem at holde og behagelig at køre på året rundt.",
    specs: [
      { label: "Gear", value: "3 indvendige gear (Shimano Nexus)" },
      { label: "Bremser", value: "Fodbremse + V-bremse for" },
      { label: "Hjulstørrelse", value: "28\"" },
      { label: "Inkluderet", value: "Lygter, lås, kurv og ringeklokke" },
    ],
    featured: true,
    inStock: true,
  },
  {
    slug: "van-de-falk-dame-bordeaux",
    name: "Van de Falk Dame Bordeaux",
    brand: "Van de Falk",
    category: "damecykler",
    price: 4499,
    oldPrice: 4999,
    image: img.retroDame,
    description:
      "Hollandsk elegance i dyb bordeaux. Van de Falk bygger klassiske bycykler med opretsiddende kørestilling, lavt indstig og komponenter, der holder i mange år.",
    specs: [
      { label: "Gear", value: "7 indvendige gear" },
      { label: "Bremser", value: "Rullebremser for og bag" },
      { label: "Hjulstørrelse", value: "28\"" },
      { label: "Stel", value: "Klassisk hollandsk stål, lavt indstig" },
    ],
    featured: true,
    inStock: true,
  },
  {
    slug: "ebsen-damecykel-spirit-of-soller-teal",
    name: "Ebsen Damecykel Spirit of Soller Teal",
    brand: "Ebsen",
    category: "damecykler",
    price: 3499,
    oldPrice: 4099,
    image: img.retroBeige,
    description:
      "Spirit of Soller er en let og elegant damecykel i en smuk teal-farve. Perfekt balance mellem komfort og kvalitet til byens gader.",
    specs: [
      { label: "Gear", value: "7 gear" },
      { label: "Bremser", value: "V-bremser" },
      { label: "Hjulstørrelse", value: "28\"" },
      { label: "Vægt", value: "ca. 15 kg" },
    ],
    inStock: true,
  },
  {
    slug: "ebsen-damecykel-spirit-of-soller-white",
    name: "Ebsen Damecykel Spirit of Soller White",
    brand: "Ebsen",
    category: "damecykler",
    price: 3499,
    oldPrice: 4099,
    image: img.cityClassic,
    description:
      "Den hvide udgave af Ebsens populære Spirit of Soller. En klassisk, velkørende damecykel med fokus på komfort i hverdagen.",
    specs: [
      { label: "Gear", value: "7 gear" },
      { label: "Bremser", value: "V-bremser" },
      { label: "Hjulstørrelse", value: "28\"" },
      { label: "Vægt", value: "ca. 15 kg" },
    ],
    inStock: true,
  },
  {
    slug: "nishiki-touring-master-7-white",
    name: "Nishiki Touring Master 7 White",
    brand: "Nishiki",
    category: "damecykler",
    price: 5199,
    image: img.touring,
    description:
      "Nishiki Touring Master 7 er en komfortabel citybike i høj kvalitet med 7 gear og en let aluminiumsramme. En cykel, der bare kører — dag efter dag.",
    specs: [
      { label: "Gear", value: "7 indvendige gear (Shimano Nexus)" },
      { label: "Bremser", value: "Hydrauliske rullebremser" },
      { label: "Stel", value: "Aluminium" },
      { label: "Hjulstørrelse", value: "28\"" },
    ],
    inStock: true,
  },
  {
    slug: "excelsior-cracker-diamond",
    name: "Excelsior Cracker Diamond",
    brand: "Excelsior",
    category: "herrecykler",
    price: 4399,
    oldPrice: 5499,
    image: img.cityBlack,
    description:
      "Excelsior Cracker med klassisk diamantstel er en rå og stilren herrecykel til byen. Solid tysk kvalitet med fokus på holdbarhed.",
    specs: [
      { label: "Gear", value: "7 gear" },
      { label: "Bremser", value: "V-bremser" },
      { label: "Stel", value: "Diamantstel, stål" },
      { label: "Hjulstørrelse", value: "28\"" },
    ],
    featured: true,
    inStock: true,
  },
  {
    slug: "excelsior-snatcher-diamond-sort",
    name: "Excelsior Snatcher Diamond Sort",
    brand: "Excelsior",
    category: "herrecykler",
    price: 3100,
    oldPrice: 3499,
    image: img.cityBlack,
    description:
      "Snatcher Diamond i mat sort — en enkel og cool herrecykel uden dikkedarer. Pålidelig hverdagscykel til en skarp pris.",
    specs: [
      { label: "Gear", value: "3 gear" },
      { label: "Bremser", value: "Fodbremse + V-bremse" },
      { label: "Stel", value: "Diamantstel" },
      { label: "Hjulstørrelse", value: "28\"" },
    ],
    inStock: true,
  },
  {
    slug: "norden-cycl-sort-7-gear",
    name: "NORDEN CYCL Sort 7 Gear",
    brand: "Norden",
    category: "herrecykler",
    price: 3999,
    oldPrice: 4999,
    image: img.cityBlack,
    description:
      "Nordisk minimalisme på to hjul. NORDEN CYCL i sort med 7 gear er en tidløs unisex-cykel bygget til skandinavisk vejr og brosten.",
    specs: [
      { label: "Gear", value: "7 indvendige gear" },
      { label: "Bremser", value: "Rullebremser" },
      { label: "Hjulstørrelse", value: "28\"" },
      { label: "Inkluderet", value: "Lygter og lås" },
    ],
    inStock: true,
  },
  {
    slug: "excelsior-folding-bike-unisex",
    name: "Excelsior Foldecykel Unisex",
    brand: "Excelsior",
    category: "herrecykler",
    price: 2699,
    oldPrice: 2999,
    image: img.folding,
    description:
      "Praktisk foldecykel, der nemt kommer med i S-toget eller bagagerummet. Foldes sammen på få sekunder og fylder minimalt.",
    specs: [
      { label: "Gear", value: "3 gear" },
      { label: "Hjulstørrelse", value: "20\"" },
      { label: "Foldemål", value: "ca. 80 × 60 × 40 cm" },
      { label: "Vægt", value: "ca. 13 kg" },
    ],
    inStock: true,
  },
  {
    slug: "principia-a27-moerkegraa",
    name: "Principia A2.7 Mørkegrå",
    brand: "Principia",
    category: "herrecykler",
    price: 3999,
    oldPrice: 4599,
    image: img.mountainDark,
    description:
      "Dansk-designet mountainbike med let aluminiumsstel og 27,5\" hjul. A2.7 er klar til både skovstien og pendlerturen.",
    specs: [
      { label: "Gear", value: "24 gear (Shimano)" },
      { label: "Bremser", value: "Skivebremser" },
      { label: "Stel", value: "Aluminium" },
      { label: "Hjulstørrelse", value: "27,5\"" },
    ],
    inStock: true,
  },
  {
    slug: "principia-a27-sort",
    name: "Principia A2.7 Sort",
    brand: "Principia",
    category: "herrecykler",
    price: 3999,
    oldPrice: 4599,
    image: img.mountain,
    description:
      "Den sorte udgave af Principias populære A2.7. Solid begynder-mountainbike med kvalitetskomponenter fra Shimano.",
    specs: [
      { label: "Gear", value: "24 gear (Shimano)" },
      { label: "Bremser", value: "Skivebremser" },
      { label: "Stel", value: "Aluminium" },
      { label: "Hjulstørrelse", value: "27,5\"" },
    ],
    inStock: true,
  },
  {
    slug: "kayza-alvar-4",
    name: "KAYZA Alvar 4",
    brand: "Kayza",
    category: "herrecykler",
    price: 5499,
    oldPrice: 6999,
    image: img.mountain,
    description:
      "KAYZA Alvar 4 er en alsidig cross-cykel, der kombinerer mountainbikens robusthed med citybikens komfort. Til dig, der vil kunne køre alle veje.",
    specs: [
      { label: "Gear", value: "27 gear (Shimano Altus)" },
      { label: "Bremser", value: "Hydrauliske skivebremser" },
      { label: "Stel", value: "Aluminium" },
      { label: "Hjulstørrelse", value: "28\"" },
    ],
    inStock: true,
  },
  {
    slug: "centurion-zero-e",
    name: "Centurion Zero E",
    brand: "Centurion",
    category: "elcykler",
    price: 11999,
    oldPrice: 18999,
    image: img.ebike,
    description:
      "Centurion Zero E er en kraftfuld elcykel med centermotor og lang rækkevidde. Spar over 35 % lige nu — en af vores absolut bedste el-handler.",
    specs: [
      { label: "Motor", value: "Centermotor, 250 W" },
      { label: "Batteri", value: "504 Wh — op til 100 km" },
      { label: "Gear", value: "9 gear (Shimano)" },
      { label: "Bremser", value: "Hydrauliske skivebremser" },
    ],
    featured: true,
    inStock: true,
  },
  {
    slug: "excelsior-swan-retro-e-tour",
    name: "Excelsior Swan-Retro E Tour",
    brand: "Excelsior",
    category: "elcykler",
    price: 12499,
    oldPrice: 13999,
    image: img.ebike,
    description:
      "Retro-elegance møder moderne el-teknologi. Swan-Retro E Tour har klassiske linjer, svanestel og en pålidelig motor — perfekt til komfortable ture.",
    specs: [
      { label: "Motor", value: "Baghjulsmotor, 250 W" },
      { label: "Batteri", value: "468 Wh — op til 80 km" },
      { label: "Gear", value: "7 indvendige gear" },
      { label: "Stel", value: "Svanestel, lavt indstig" },
    ],
    inStock: true,
  },
  {
    slug: "delta-el-mountainbike",
    name: "DELTA El-Mountainbike",
    brand: "Delta",
    category: "elcykler",
    price: 9999,
    oldPrice: 11999,
    image: img.mountainDark,
    description:
      "El-mountainbike med fart over feltet. DELTA kombinerer affjedret forgaffel, skivebremser og elmotor til en skarp pris.",
    specs: [
      { label: "Motor", value: "Baghjulsmotor, 250 W" },
      { label: "Batteri", value: "Op til 70 km rækkevidde" },
      { label: "Gear", value: "21 gear" },
      { label: "Bremser", value: "Skivebremser" },
    ],
    inStock: true,
  },
  {
    slug: "bobike-barnestol-blaa",
    name: "Bobike Barnestol Blå",
    brand: "Bobike",
    category: "tilbehoer",
    price: 299,
    oldPrice: 499,
    image: img.kidsSeat,
    description:
      "Sikker og komfortabel barnestol fra hollandske Bobike. Nem montering, justerbare fodstøtter og blødt polster. Blå udgave.",
    specs: [
      { label: "Maks. vægt", value: "22 kg" },
      { label: "Montering", value: "Bagagebærer" },
      { label: "Sele", value: "3-punkts sikkerhedssele" },
      { label: "Godkendelse", value: "EN 14344" },
    ],
    inStock: true,
  },
  {
    slug: "bobike-barnestol-lyseroed",
    name: "Bobike Barnestol Lyserød",
    brand: "Bobike",
    category: "tilbehoer",
    price: 299,
    oldPrice: 499,
    image: img.kidsSeat,
    description:
      "Den lyserøde udgave af Bobikes populære barnestol. Sikker, komfortabel og nem at montere på de fleste cykler.",
    specs: [
      { label: "Maks. vægt", value: "22 kg" },
      { label: "Montering", value: "Bagagebærer" },
      { label: "Sele", value: "3-punkts sikkerhedssele" },
      { label: "Godkendelse", value: "EN 14344" },
    ],
    inStock: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelated(product: Product, count = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}

export const allBrands = [...new Set(products.map((p) => p.brand))].sort();
