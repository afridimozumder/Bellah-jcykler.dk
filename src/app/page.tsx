import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { getFeatured } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";

const heroImage =
  "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=2000&q=80&auto=format&fit=crop";

const services = [
  {
    href: "/vaerksted",
    title: "Cykelværksted",
    text: "Punktering, bremser, gear og elcykel-service. Vi reparerer alle mærker — også ladcykler.",
    cta: "Book værkstedstid",
  },
  {
    href: "/udlejning",
    title: "Cykeludlejning",
    text: "Lej en citybike eller Christiania-ladcykel fra dag til dag. Perfekt til gæster og udflugter.",
    cta: "Se priser",
  },
  {
    href: "/cykler?kategori=elcykler",
    title: "Elcykler",
    text: "Stort udvalg af elcykler — og specialiseret service på Bosch, Yamaha, Bafang og Shimano systemer.",
    cta: "Se elcykler",
  },
];

export default function Home() {
  const featured = getFeatured();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <Image
          src={heroImage}
          alt="Cyklist på tur ved den danske kyst"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-40 sm:px-6">
          <p className="animate-rise text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Brønshøj · siden 1950&apos;erne
          </p>
          <h1 className="animate-rise delay-100 mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Din lokale cykelhandler i Brønshøj
          </h1>
          <p className="animate-rise delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Over 70 års erfaring med salg, service og reparation af cykler.
            Kvalitet, fair priser og et værksted, du kan stole på.
          </p>
          <div className="animate-rise delay-300 mt-9 flex flex-wrap gap-4">
            <Link
              href="/cykler"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-fjord-tint"
            >
              Se cykler
            </Link>
            <Link
              href="/vaerksted"
              className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Book værkstedstid
            </Link>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-px sm:grid-cols-2 lg:grid-cols-4">
          {business.usps.map((usp) => (
            <div key={usp.title} className="px-6 py-8">
              <h2 className="font-heading font-bold">{usp.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{usp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Udvalgte cykler"
            title="Lige nu i butikken"
            text="Et udpluk af vores aktuelle cykler og tilbud. Kom forbi og prøv dem — eller se hele udvalget online."
          />
          <Link
            href="/cykler"
            className="font-semibold text-fjord underline-offset-4 hover:underline"
          >
            Se alle cykler →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-fjord text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Mere end en butik
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold sm:text-4xl">
            Værksted, udlejning og elcykel-eksperter
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-xl border border-white/15 bg-white/5 p-7 transition-colors hover:bg-white/10"
              >
                <h3 className="font-heading text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {s.text}
                </p>
                <span className="mt-5 inline-block font-semibold text-white underline-offset-4 group-hover:underline">
                  {s.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-mist">
            Mærker vi fører
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {business.brands.map((brand) => (
              <li
                key={brand}
                className="font-heading text-lg font-bold text-ink/35"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hours + visit */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Besøg os"
              title="Kig forbi butikken på Frederikssundsvej"
              text={`Du finder os på ${business.address} — lige ved Bellahøj. Kom forbi til en snak om din næste cykel, eller ring på ${business.phoneDisplay}.`}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="rounded-full bg-fjord px-7 py-3.5 font-semibold text-white transition-colors hover:bg-fjord-deep"
              >
                Find vej
              </Link>
              <a
                href={business.phoneHref}
                className="rounded-full border border-line bg-surface px-7 py-3.5 font-semibold transition-colors hover:border-fjord"
              >
                Ring {business.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-8">
            <h3 className="font-heading text-lg font-bold">Åbningstider</h3>
            <ul className="mt-5 divide-y divide-line">
              {business.hours.map((h) => (
                <li key={h.days} className="flex justify-between py-3.5">
                  <span className="font-medium">{h.days}</span>
                  <span className="text-mist">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-lg bg-fjord-tint px-4 py-3 text-sm text-fjord-deep">
              ★ {business.rating.toString().replace(".", ",")} på Google — tak
              til vores kunder!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
