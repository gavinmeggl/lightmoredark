// ─────────────────────────────────────────────────────────────
//  LIGHT MORE DARK — all site content lives in this one file.
//  Drop images/videos in /public/media and point `src` at them
//  (e.g. "/media/roll-01.jpg"). Leave `src` empty to show a
//  placeholder tile until you have the real thing.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Light More Dark",
  tagline: "A collective. Photo / Video / BMX / Cloth.",
  email: "hello@lightmoredark.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
  ],
  ticker: [
    "NEW DROP OUT NOW",
    "LIGHT MORE DARK",
    "SHOOT IT. RIDE IT. WEAR IT.",
    "WORLDWIDE SHIPPING",
  ],
};

export type Photo = {
  src?: string;
  title: string;
  place?: string;
  tall?: boolean;
};

export const photos: Photo[] = [
  { title: "Streetlight #1", place: "Downtown", tall: true },
  { title: "Golden Hour", place: "Rooftop" },
  { title: "Crew Portrait", place: "The Yard" },
  { title: "After Dark", place: "Underpass", tall: true },
  { title: "Flash Out", place: "Parking Lot" },
  { title: "Long Exposure", place: "Highway 1" },
  { title: "Basement Show", place: "Somewhere", tall: true },
  { title: "Morning Fog", place: "The Park" },
  { title: "Neon", place: "Corner Store" },
];

export type Video = {
  title: string;
  // Paste a YouTube ID (the part after v=) OR a Vimeo ID. Leave blank for placeholder.
  youtubeId?: string;
  vimeoId?: string;
  year?: string;
  category: "film" | "bmx" | "music";
};

export const videos: Video[] = [
  { title: "LMD — Volume One", year: "2026", category: "film" },
  { title: "Night Ride (Full Part)", year: "2026", category: "bmx" },
  { title: "Behind The Lens", year: "2025", category: "film" },
  { title: "Street Session — Ep. 3", year: "2025", category: "bmx" },
  { title: "Live At The Basement", year: "2025", category: "music" },
  { title: "Lookbook FW26", year: "2026", category: "film" },
];

export type Rider = {
  name: string;
  role: string;
  src?: string;
  instagram?: string;
};

export const riders: Rider[] = [
  { name: "Rider One", role: "Street / Founder" },
  { name: "Rider Two", role: "Park" },
  { name: "Rider Three", role: "Trails" },
  { name: "Rider Four", role: "Flatland" },
];

export type Product = {
  slug: string;
  name: string;
  price: number; // in your currency's main unit, e.g. 45 = $45
  images: string[];
  colorway: string;
  sizes: string[];
  description: string;
  // Paste a Stripe Payment Link (https://buy.stripe.com/...) for each product.
  // Optionally give one per size — see `sizeLinks`.
  buyLink?: string;
  sizeLinks?: Record<string, string>;
  soldOut?: boolean;
  tag?: string;
};

export const currency = "$";

export const products: Product[] = [
  {
    slug: "logo-tee-black",
    name: "LMD Logo Tee",
    price: 40,
    images: [],
    colorway: "Black / Bone",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Heavyweight 240gsm cotton tee. Puff-print sun/moon logo on chest, oversized back hit. Boxy fit.",
    tag: "NEW",
  },
  {
    slug: "after-dark-hoodie",
    name: "After Dark Hoodie",
    price: 85,
    images: [],
    colorway: "Washed Black",
    sizes: ["S", "M", "L", "XL"],
    description:
      "450gsm brushed fleece. Glow-in-the-dark screen print. Double-lined hood, no drawcords.",
    tag: "GLOWS",
  },
  {
    slug: "light-tee-bone",
    name: "Light Tee",
    price: 40,
    images: [],
    colorway: "Bone / Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The inverse. Bone colourway, black ink. Same heavyweight blank.",
  },
  {
    slug: "crew-cap",
    name: "Crew 6-Panel",
    price: 35,
    images: [],
    colorway: "Black",
    sizes: ["One Size"],
    description: "Unstructured 6-panel, embroidered front, adjustable strap.",
  },
  {
    slug: "ride-shorts",
    name: "Ride Shorts",
    price: 55,
    images: [],
    colorway: "Charcoal",
    sizes: ["S", "M", "L", "XL"],
    description: "Ripstop BMX shorts with stretch gusset and zip pocket.",
    soldOut: true,
  },
  {
    slug: "sticker-pack",
    name: "Sticker Pack",
    price: 8,
    images: [],
    colorway: "Assorted",
    sizes: ["One Size"],
    description: "Eight vinyl die-cuts. Slap them everywhere.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
