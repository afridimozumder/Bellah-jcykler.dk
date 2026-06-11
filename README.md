# Bellahøj Cykler

Moderne hjemmeside for Bellahøj Cykler — cykelbutik, værksted og cykeludlejning på Frederikssundsvej 114B i Brønshøj.

Bygget med **Next.js 15**, **TypeScript** og **Tailwind CSS v4** i et nordisk-minimalistisk design. Hele sitet er på dansk og statisk genereret.

## Kom i gang

```bash
npm install
npm run dev      # udviklingsserver på http://localhost:3000
npm run build    # produktionsbuild
```

## Sider

| Rute | Indhold |
|---|---|
| `/` | Forside med hero, USP'er, udvalgte cykler og services |
| `/cykler` | Produktoversigt med kategori-/mærkefilter og prissortering |
| `/cykler/[slug]` | Produktside med specifikationer og kurv-knap |
| `/kurv` | Indkøbskurv (localStorage) med checkout-stub |
| `/vaerksted` | Værkstedsydelser og bookingformular |
| `/udlejning` | Lejepriser og reservationsformular |
| `/kontakt` | Adresse, åbningstider og kort |
| `/handelsbetingelser` | Handelsbetingelser |

## Klargjort til senere

- **Backend:** Produktdata ligger i `src/data/products.ts` og kan udskiftes med et CMS/API uden at røre UI'et. Formularer (`src/components/BookingForm.tsx`) har et `onSubmit`-seam klar til en e-mail-/API-integration.
- **Betalingsgateway:** `CartContext.checkout()` i `src/context/CartContext.tsx` er forberedt til Stripe, MobilePay Online eller Quickpay.
- **Billeder:** Stockfotos fra Unsplash — udskift med rigtige produktfotos i `src/data/products.ts`.
