import Link from "next/link";
import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold">
            BELLAHØJ <span className="font-light text-fjord-tint">CYKLER</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
            Din lokale cykelhandler i Brønshøj med over 70 års erfaring. Salg,
            service, reparation og udlejning af cykler.
          </p>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-paper/70 underline-offset-4 transition-colors hover:text-paper hover:underline"
          >
            Følg os på Facebook
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-paper/50">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>{business.address}</li>
            <li>
              <a href={business.phoneHref} className="hover:underline">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="hover:underline">
                {business.email}
              </a>
            </li>
            <li className="text-paper/50">CVR: {business.cvr}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-paper/50">
            Åbningstider
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {business.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-paper/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-paper/50">
            Genveje
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <Link href="/cykler" className="hover:underline">
                Alle cykler
              </Link>
            </li>
            <li>
              <Link href="/vaerksted" className="hover:underline">
                Cykelværksted
              </Link>
            </li>
            <li>
              <Link href="/udlejning" className="hover:underline">
                Cykeludlejning
              </Link>
            </li>
            <li>
              <Link href="/handelsbetingelser" className="hover:underline">
                Handelsbetingelser
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-paper/50 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {business.name}. Alle rettigheder
            forbeholdes.
          </p>
          <p>Vi modtager MobilePay og betalingskort i butikken.</p>
        </div>
      </div>
    </footer>
  );
}
