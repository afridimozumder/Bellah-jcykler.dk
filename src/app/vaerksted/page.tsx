import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/data/business";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Cykelværksted i Brønshøj",
  description:
    "Professionelt cykelværksted på Frederikssundsvej. Punktering, bremser, gear, elcykel-service og ladcykel-reparation. Lånecykel og over 70 års erfaring.",
};

const workshopImage =
  "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=2000&q=80&auto=format&fit=crop";

const services = [
  {
    title: "Punkteringsreparation",
    text: "Hurtig og effektiv reparation af flade dæk — ofte mens du venter.",
  },
  {
    title: "Bremsejustering og udskiftning",
    text: "Vi sikrer, at dine bremser altid fungerer optimalt og sikkert.",
  },
  {
    title: "Gearjustering",
    text: "Præcis justering af gear for en problemfri og jævn kørsel.",
  },
  {
    title: "Elcykel-service",
    text: "Specialiseret service og fejlfinding på Bosch, Yamaha, Bafang, Shimano og flere el-systemer.",
  },
  {
    title: "Ladcykel-reparation",
    text: "Vi reparerer alle komponenter på ladcykler — Babboe, Christiania, Cargokid, AM og flere.",
  },
  {
    title: "Almindeligt eftersyn",
    text: "Kæde, smøring, slidte dele og generel vedligeholdelse, så cyklen holder længere.",
  },
];

const perks = [
  "Gratis første service ved køb af ny cykel hos os",
  "Lånecykel mens din cykel er på værksted",
  "Afhentning og levering — gratis eller mod gebyr",
  "Reservedele af høj kvalitet",
];

export default function VaerkstedPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden">
        <Image
          src={workshopImage}
          alt="Cykelmekaniker arbejder på et hjul i værkstedet"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Værksted
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            Cykelværksted med over 70 års erfaring
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Det laver vi"
          title="Reparation af alle cykelmærker"
          text="Fra punktering til komplekse el-systemer — vores erfarne mekanikere får din cykel sikkert på vejen igen. Vi har særligt speciale i ladcykler og elcykler."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <h3 className="font-heading font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Derfor vælger kunderne os
            </h2>
            <ul className="mt-6 space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fjord-tint text-sm text-fjord"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl bg-fjord-tint p-5 text-sm leading-relaxed text-fjord-deep">
              Har du travlt? Ring på{" "}
              <a href={business.phoneHref} className="font-semibold underline">
                {business.phoneDisplay}
              </a>{" "}
              — så finder vi en tid, der passer dig.
            </p>
          </div>

          <BookingForm
            title="Book en værkstedstid"
            intro="Udfyld formularen, så kontakter vi dig med en tid. Du er også altid velkommen til bare at komme forbi."
            submitLabel="Send forespørgsel"
            fields={[
              { name: "navn", label: "Navn", type: "text", required: true },
              { name: "telefon", label: "Telefon", type: "tel", required: true },
              {
                name: "cykeltype",
                label: "Cykeltype",
                type: "select",
                required: true,
                options: [
                  "Almindelig cykel",
                  "Elcykel",
                  "Ladcykel",
                  "El-ladcykel",
                  "Børnecykel",
                  "Andet",
                ],
              },
              { name: "dato", label: "Ønsket dato", type: "date" },
              {
                name: "beskrivelse",
                label: "Hvad skal vi kigge på?",
                type: "textarea",
                required: true,
                placeholder: "Beskriv kort problemet — fx punktering, gear der springer, fejl på elsystem …",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
