# Bellahøj Cykler — Website Rebuild Design

**Date:** 2026-06-11
**Status:** Approved by user

## Goal

Rebuild https://xn--bellahjcykler-gnb.dk/ from scratch as a modern, professional, Nordic-style bicycle shop website. Entirely in Danish. No backend or payment gateway yet, but architected so both can be added later.

## Business facts (from original site)

- **Name:** Bellahøj Cykler
- **Address:** Frederikssundsvej 114B, 2700 Brønshøj, København
- **Phone:** +45 50 35 66 89 · **Email:** post@bellacykel.dk · **CVR:** 35066217
- **Google rating:** 4,8 ★
- **Hours:** Man–fre 10–18, lør 10–15, søn lukket
- **History:** 70+ års erfaring som lokal cykelhandler i Brønshøj
- **Payment in store:** MobilePay, kort
- **Brands:** Van de Falk, Winther, AM, Nishiki, BHC (own brand), Excelsior, Ebsen, Principia, Kayza, Centurion, Norden, Delta
- **Workshop:** punktering, bremser, gear, elcykel-service (Bosch, Yamaha, Bafang, Shimano), ladcykel-reparation (Babboe, Christiania, Cargokid, AM), gratis første service ved køb af ny cykel, lånecykel, afhentning/levering
- **Rental prices:** Citybike 150/230/310/390/470/530 kr (1–6 dage); Christiania ladcykel 550/750/930/1.090/1.390/1.580 kr (1–6 dage)
- **Products:** ~17 real products with real prices and discount percentages (BHC Damecykel 2.500 kr, Centurion Zero E 11.999 kr, Excelsior Swan-Retro E 12.499 kr, Van De Falk Dame Bordeaux 4.499 kr, etc.)

## Decisions (user-confirmed)

| Decision | Choice |
|---|---|
| Stack | Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript |
| Images | Free stock photos (Unsplash/Pexels), swappable later |
| Color theme | Light Scandinavian minimal: off-white base, charcoal text, deep teal accent |
| Pages | Full set (~8 routes) |
| Buy flow | Working cart UI (localStorage), checkout stub with "betaling kommer snart" panel |
| Forms | UI-only: validate, show confirmation state, no sending |
| Language | Danish only |

## Design language

- Off-white base (#FAFAF8 family), charcoal text, deep teal accent
- Generous whitespace, big confident grotesk headings
- Subtle borders over shadows; restrained rounded corners
- Large atmospheric cycling photography; thin-line iconography

## Routes

1. `/` — Forside: fullscreen hero, USP-strip (gratis første service, lånecykel, 4,8★), featured products, services teaser, brand strip, åbningstider + kort-CTA
2. `/cykler` — Product grid, filter by category (Dame, Herre, Børn, Elcykler, El-ladcykler, Tilbehør) and brand, sort by price
3. `/cykler/[slug]` — Product detail: image, price + før-pris, specs, "Læg i kurv", related products
4. `/kurv` — Cart + checkout stub ("Online betaling kommer snart — ring 50 35 66 89 eller besøg butikken")
5. `/vaerksted` — Workshop services, ladcykel-speciale, UI-only booking form
6. `/udlejning` — Rental price tables, conditions, UI-only booking form
7. `/kontakt` — Address, phone, email, CVR, hours, embedded Google Maps, Facebook
8. `/handelsbetingelser` — Trade terms
9. Custom 404

## Shared components

Sticky header (category nav + cart badge), mobile drawer menu, rich footer (kontakt, åbningstider, links, betalings-note).

## Architecture / future-proofing

- Product data in typed `data/products.ts` module (future CMS/API stand-in)
- Cart as React context persisting to localStorage, with `checkout()` seam for payment gateway
- Forms as controlled components with `onSubmit` handler stubs for future backend
- No server-side data fetching needed; site can be statically exported

## Git workflow

Push to https://github.com/afridimozumder/Bellah-jcykler.dk after each phase:
scaffold → core layout/forside → shop+cart → service pages → polish.

## Verification

`next build` passes per phase; manual visual check of each page.
