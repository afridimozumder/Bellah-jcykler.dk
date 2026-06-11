import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/data/business";
import { formatPrice } from "@/lib/format";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Cykeludlejning",
  description:
    "Lej en citybike eller Christiania-ladcykel hos Bellahøj Cykler i Brønshøj. Fra 150 kr. pr. dag. Book nemt online eller ring til os.",
};

const rentalImage =
  "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=2000&q=80&auto=format&fit=crop";

const cityBike = [150, 230, 310, 390, 470, 530];
const christiania = [550, 750, 930, 1090, 1390, 1580];

const conditions = [
  "Medbring gyldig billedlegitimation ved afhentning",
  "Cyklen afleveres i samme stand som ved udlevering",
  "Lås og lygter følger med uden ekstra beregning",
  "Hjelm kan tilkøbes — spørg i butikken",
  "Afhentning og aflevering inden for åbningstiden",
];

function PriceTable({ title, prices }: { title: string; prices: number[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <h3 className="border-b border-line bg-fjord px-5 py-4 font-heading font-bold text-white">
        {title}
      </h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-line text-left text-mist">
            <th className="px-5 py-3 font-medium">Varighed</th>
            <th className="px-5 py-3 text-right font-medium">Pris</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {prices.map((price, i) => (
            <tr key={price}>
              <td className="px-5 py-3">
                {i + 1} {i === 0 ? "dag" : "dage"}
              </td>
              <td className="px-5 py-3 text-right font-heading font-bold">
                {formatPrice(price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function UdlejningPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image
          src={rentalImage}
          alt="Række af udlejningscykler ved en københavnsk gade"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Udlejning
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            Lej en cykel — fra dag til dag
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Priser"
          title="Citybike eller ladcykel?"
          text="Skal du have gæster i byen, på udflugt med familien eller bare bruge to hjul i en periode? Vi udlejer velholdte citybikes og rummelige Christiania-ladcykler til faste, fair priser."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PriceTable title="Citybike" prices={cityBike} />
          <PriceTable title="Christiania-ladcykel" prices={christiania} />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Lejebetingelser</h2>
            <ul className="mt-6 space-y-4">
              {conditions.map((c) => (
                <li key={c} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fjord-tint text-sm text-fjord"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl bg-fjord-tint p-5 text-sm leading-relaxed text-fjord-deep">
              Skal du leje i længere tid? Ring på{" "}
              <a href={business.phoneHref} className="font-semibold underline">
                {business.phoneDisplay}
              </a>{" "}
              og få en samlet pris.
            </p>
          </div>

          <BookingForm
            title="Reservér en lejecykel"
            intro="Fortæl os hvad du skal bruge og hvornår — så bekræfter vi din reservation."
            submitLabel="Send reservation"
            fields={[
              { name: "navn", label: "Navn", type: "text", required: true },
              { name: "telefon", label: "Telefon", type: "tel", required: true },
              {
                name: "cykeltype",
                label: "Cykeltype",
                type: "select",
                required: true,
                options: ["Citybike", "Christiania-ladcykel"],
              },
              { name: "fra", label: "Fra dato", type: "date", required: true },
              {
                name: "dage",
                label: "Antal dage",
                type: "number",
                required: true,
                placeholder: "fx 3",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
