import type { Metadata } from "next";
import { Suspense } from "react";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Cykler og elcykler",
  description:
    "Se vores udvalg af damecykler, herrecykler, børnecykler, elcykler og tilbehør. Kvalitetsmærker til fair priser hos Bellahøj Cykler i Brønshøj.",
};

export default function CyklerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fjord">
        Butikken
      </p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Vores cykler</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-mist">
        Kvalitetscykler til hele familien — fra klassiske bycykler til elcykler
        og mountainbikes. Alle cykler leveres samlet, justeret og klar til
        turen, og du får gratis første service med i købet.
      </p>
      <div className="mt-10">
        <Suspense>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  );
}
