import type { Metadata } from "next";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Handelsbetingelser",
  description:
    "Handelsbetingelser for Bellahøj Cykler — priser, betaling, fortrydelsesret, reklamationsret og persondata.",
};

export default function HandelsbetingelserPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <h1 className="text-4xl font-bold sm:text-5xl">Handelsbetingelser</h1>

      <div className="prose-bhc mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-bold">Virksomhedsoplysninger</h2>
          <p className="mt-3 leading-relaxed text-mist">
            {business.name}
            <br />
            {business.address}
            <br />
            CVR-nr.: {business.cvr}
            <br />
            Telefon: {business.phone} · E-mail: {business.email}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Priser</h2>
          <p className="mt-3 leading-relaxed text-mist">
            Alle priser er angivet i danske kroner (DKK) og er inklusive 25 %
            moms. Vi tager forbehold for trykfejl, prisændringer og udsolgte
            varer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Betaling</h2>
          <p className="mt-3 leading-relaxed text-mist">
            Betaling foregår i butikken med MobilePay eller betalingskort.
            Online betaling tilbydes endnu ikke — varer reserveret via
            hjemmesiden betales ved afhentning.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Fortrydelsesret</h2>
          <p className="mt-3 leading-relaxed text-mist">
            Ved køb i butikken gælder der som udgangspunkt ikke fortrydelsesret,
            men vi tilbyder 14 dages ombytning på ubrugte varer mod fremvisning
            af kvittering. Specialbestilte varer kan ikke ombyttes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Reklamationsret</h2>
          <p className="mt-3 leading-relaxed text-mist">
            Du har 24 måneders reklamationsret efter købelovens regler. Det
            betyder, at du kan få varen repareret, ombyttet, pengene retur eller
            et afslag i prisen, afhængigt af den konkrete situation.
            Reklamationen gælder ikke fejl eller skader opstået ved forkert brug
            eller almindelig slitage, fx dæk, slanger og bremseklodser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Cykeludlejning</h2>
          <p className="mt-3 leading-relaxed text-mist">
            Ved leje af cykel skal gyldig billedlegitimation fremvises. Lejer er
            ansvarlig for cyklen i lejeperioden og hæfter for skader ud over
            almindelig slitage samt for bortkomst.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Persondata</h2>
          <p className="mt-3 leading-relaxed text-mist">
            Oplysninger, du afgiver via formularer på hjemmesiden, bruges alene
            til at behandle din henvendelse og videregives ikke til tredjepart.
            Du kan til enhver tid kontakte os på {business.email} for at få
            indsigt i eller slettet dine oplysninger.
          </p>
        </section>
      </div>
    </div>
  );
}
