# Bellahøj Cykler Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete Danish-language Bellahøj Cykler website (9 routes) in Next.js with Nordic-minimal design, working localStorage cart, and UI-only forms, pushed to GitHub per phase.

**Architecture:** Next.js 15 App Router, all pages static (no server data). Product/business data in typed modules under `src/data/`. Cart is a React context persisting to localStorage with a `checkout()` seam for a future payment gateway. Forms are client components with stubbed `onSubmit`.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, next/font (Google fonts), Unsplash stock photography.

**Verification per phase (per spec):** `npm run build` passes; visual check; then commit + push to `origin main`.

---

## Design tokens (used everywhere)

- Background: `#FAFAF8` (off-white), surfaces `#FFFFFF`, subtle border `#E7E5E0`
- Text: charcoal `#1C1B1A`, muted `#6B6862`
- Accent: deep teal `#0F5C5A` (hover `#0A4341`), accent-light tint `#E3EFEE`
- Discount/badge red: `#B3402A`
- Headings: Space Grotesk (next/font google), body: Inter
- Borders over shadows; `rounded-xl` max; generous section padding (`py-20 md:py-28`)
- Danish number format for prices: `2.500 kr.` (dot thousands separator)

## File structure

```
src/
  app/layout.tsx               # fonts, metadata (da), Header/Footer, CartProvider
  app/page.tsx                 # Forside
  app/cykler/page.tsx          # shop grid + filters (client)
  app/cykler/[slug]/page.tsx   # product detail (generateStaticParams)
  app/kurv/page.tsx            # cart + checkout stub
  app/vaerksted/page.tsx       # workshop + booking form
  app/udlejning/page.tsx       # rental tables + booking form
  app/kontakt/page.tsx         # contact + map
  app/handelsbetingelser/page.tsx
  app/not-found.tsx
  components/Header.tsx        # sticky nav, mobile drawer, cart badge (client)
  components/Footer.tsx
  components/ProductCard.tsx
  components/ProductGrid.tsx   # filter/sort client component
  components/PriceTag.tsx      # formats DKK, shows før-pris strikethrough
  components/BookingForm.tsx   # reusable UI-only form w/ confirmation state (client)
  components/AddToCartButton.tsx (client)
  components/SectionHeading.tsx
  context/CartContext.tsx      # cart state + localStorage + checkout() seam
  data/products.ts             # Product type + ~17 real products
  data/business.ts             # NAP, hours, brands, USPs
  lib/format.ts                # formatPrice(øre→"X.XXX kr."), slugify
```

---

### Task 1: Scaffold + design system + layout shell (Phase 1)

- [ ] `npx create-next-app@latest . --ts --tailwind --app --src-dir --no-eslint --use-npm --yes` (into existing dir; keep existing .gitignore entries)
- [ ] Configure `next.config.ts` with `images.remotePatterns` for `images.unsplash.com`
- [ ] Set up fonts in `layout.tsx`: Space Grotesk (`--font-heading`), Inter (`--font-body`); html lang="da"
- [ ] Define tokens in `globals.css` via Tailwind v4 `@theme` (colors above, font vars)
- [ ] Create `data/business.ts`:

```ts
export const business = {
  name: "Bellahøj Cykler",
  address: "Frederikssundsvej 114B, 2700 Brønshøj",
  phone: "+45 50 35 66 89",
  phoneHref: "tel:+4550356689",
  email: "post@bellacykel.dk",
  cvr: "35066217",
  rating: 4.8,
  facebook: "https://www.facebook.com/profile.php?id=61572635031221",
  hours: [
    { days: "Mandag – Fredag", time: "10:00 – 18:00" },
    { days: "Lørdag", time: "10:00 – 15:00" },
    { days: "Søndag", time: "Lukket" },
  ],
  brands: ["Van de Falk", "Winther", "Nishiki", "AM", "Excelsior", "Ebsen", "Principia", "Kayza", "Centurion", "BHC"],
} as const;
```

- [ ] Build `Header.tsx`: sticky, logo wordmark "BELLAHØJ CYKLER", nav (Cykler, Elcykler, Værksted, Udlejning, Kontakt), phone link, cart icon w/ count badge, mobile drawer
- [ ] Build `Footer.tsx`: 4 columns (om, kontakt+CVR, åbningstider, links), betalings-note (MobilePay/kort), Facebook
- [ ] `lib/format.ts`: `formatPrice(kr: number)` → `"2.500 kr."` via `Intl.NumberFormat("da-DK")`
- [ ] Stub `CartContext.tsx` (state, add/remove/clear, localStorage sync, `checkout(): Promise<{ok:false; reason:"payment-not-configured"}>`)
- [ ] Verify: `npm run build` passes
- [ ] Commit "feat: scaffold Next.js app with design system, header, footer, cart context" + push

### Task 2: Product data + Forside (Phase 2)

- [ ] `data/products.ts` — `Product` type:

```ts
export type Category = "damecykler" | "herrecykler" | "boernecykler" | "elcykler" | "el-ladcykler" | "tilbehoer";
export interface Product {
  slug: string; name: string; brand: string; category: Category;
  price: number; oldPrice?: number; image: string; description: string;
  specs: { label: string; value: string }[]; featured?: boolean; inStock: boolean;
}
```

All 17 real products from the original shop (real names/prices/discounts from spec; Danish descriptions written fresh; Unsplash images per category).
- [ ] Forside `app/page.tsx`: hero (full-bleed photo, "Din lokale cykelhandler i Brønshøj", sub "Over 70 års erfaring...", CTAs "Se cykler"/"Book værkstedstid"), USP strip (Gratis første service, Lånecykel ved reparation, 4,8★ på Google, MobilePay & kort), featured products (4 ProductCards), services teaser (3 cards: Værksted/Udlejning/Elcykler m. links), brand strip, hours+location CTA section
- [ ] `ProductCard.tsx` + `PriceTag.tsx` (discount badge "-17 %", strikethrough før-pris)
- [ ] Verify build, visual check, commit "feat: add product data and forside" + push

### Task 3: Shop + cart (Phase 3)

- [ ] `app/cykler/page.tsx` + `ProductGrid.tsx`: grid of all products; category pill filters + brand select + price sort (client state, URL query `?kategori=`)
- [ ] `app/cykler/[slug]/page.tsx`: `generateStaticParams` from products; image, brand, name, PriceTag, description, specs table, `AddToCartButton`, "Relaterede cykler" (same category, max 3)
- [ ] `AddToCartButton.tsx`: adds via context, brief "Lagt i kurven ✓" feedback
- [ ] `app/kurv/page.tsx`: line items (image, name, qty +/-, remove), total, checkout panel: teal info box "Online betaling kommer snart — Ring 50 35 66 89, eller besøg os..." + disabled "Gå til betaling" with "Kommer snart" tag; empty-cart state with link to /cykler
- [ ] Verify build + manual cart flow check, commit "feat: add shop, product pages and cart" + push

### Task 4: Service pages (Phase 4)

- [ ] `BookingForm.tsx`: fields prop-driven; validates required; on submit shows confirmation card ("Tak for din henvendelse! ...vi kontakter dig...") — no network call; `// TODO: wire to backend` seam
- [ ] `app/vaerksted/page.tsx`: hero, 6 service cards (Punktering, Bremser, Gear, Elcykel-service m. Bosch/Yamaha/Bafang/Shimano, Ladcykel-reparation m. Babboe/Christiania/Cargokid/AM, Almindeligt eftersyn), USP-liste (gratis første service, lånecykel, afhentning/levering), BookingForm (navn, telefon, cykeltype-select, beskrivelse, ønsket dato)
- [ ] `app/udlejning/page.tsx`: intro, two price tables (Citybike: 150/230/310/390/470/530 kr; Christiania ladcykel: 550/750/930/1.090/1.390/1.580 kr — 1–6 dage), betingelser (legitimation, depositum, hjelm kan tilkøbes), BookingForm (navn, telefon, cykeltype, fra-dato, antal dage)
- [ ] `app/kontakt/page.tsx`: NAP + CVR + hours, Google Maps iframe embed (Frederikssundsvej 114B), Facebook + Google rating links
- [ ] `app/handelsbetingelser/page.tsx`: standard danske handelsbetingelser sections (virksomhedsoplysninger, priser, betaling i butik, fortrydelsesret 14 dage, reklamationsret 24 mdr., persondata)
- [ ] `app/not-found.tsx`: "404 — Du er kørt forkert" + link home
- [ ] Verify build, commit "feat: add værksted, udlejning, kontakt and handelsbetingelser pages" + push

### Task 5: Polish + SEO (Phase 5)

- [ ] Per-page `metadata` (Danish titles/descriptions), `metadataBase`, OpenGraph
- [ ] Favicon/icon (simple teal bike-ish mark or "B" glyph)
- [ ] Responsive pass: mobile nav, grids collapse, tables scroll
- [ ] Accessibility pass: alt texts (Danish), focus states, aria-labels on icon buttons
- [ ] Final `npm run build` + check all routes render
- [ ] Commit "polish: SEO metadata, icons, responsive and a11y refinements" + push

---

## Self-review notes

- Spec coverage: all 9 routes, cart seam, forms, data module, git phases ✓
- Prices/hours/contact match fetched originals ✓
- TDD note: site is presentational with no logic-heavy units except `formatPrice` and cart context; verification per spec is `next build` + manual checks. Cart context behavior verified manually through UI flow.
