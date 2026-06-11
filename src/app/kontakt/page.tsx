import type { Metadata } from "next";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Bellahøj Cykler — Frederikssundsvej 114B, 2700 Brønshøj. Telefon 50 35 66 89. Åbent man–fre 10–18, lør 10–15.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fjord">
        Kontakt
      </p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
        Kom forbi eller ring til os
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-mist">
        Vi sidder ikke bag en kundeservice-kø — vi står i butikken. Kig forbi,
        ring eller skriv, så hjælper vi dig hurtigst muligt.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          <div className="rounded-xl border border-line bg-surface p-6">
            <h2 className="font-heading font-bold">Butik & værksted</h2>
            <address className="mt-3 space-y-2 text-sm not-italic leading-relaxed">
              <p>{business.name}</p>
              <p className="text-mist">{business.address}</p>
              <p>
                <a
                  href={business.phoneHref}
                  className="font-semibold text-fjord hover:underline"
                >
                  {business.phone}
                </a>
              </p>
              <p>
                <a
                  href={business.emailHref}
                  className="font-semibold text-fjord hover:underline"
                >
                  {business.email}
                </a>
              </p>
              <p className="text-mist">CVR: {business.cvr}</p>
            </address>
          </div>

          <div className="rounded-xl border border-line bg-surface p-6">
            <h2 className="font-heading font-bold">Åbningstider</h2>
            <ul className="mt-3 divide-y divide-line text-sm">
              {business.hours.map((h) => (
                <li key={h.days} className="flex justify-between py-2.5">
                  <span className="font-medium">{h.days}</span>
                  <span className="text-mist">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-fjord-tint p-6 text-sm leading-relaxed text-fjord-deep">
            <p className="font-heading font-bold">
              ★ {business.rating.toString().replace(".", ",")} på Google
            </p>
            <p className="mt-1.5">
              Følg os også på{" "}
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Facebook
              </a>
              , hvor vi deler nyheder og tilbud.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-line">
          <iframe
            src={business.mapsEmbed}
            title="Kort over Bellahøj Cykler, Frederikssundsvej 114B"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
