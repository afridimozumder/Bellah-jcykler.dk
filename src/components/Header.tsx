"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { business } from "@/data/business";

const navLinks = [
  { href: "/cykler", label: "Cykler" },
  { href: "/cykler?kategori=elcykler", label: "Elcykler" },
  { href: "/vaerksted", label: "Værksted" },
  { href: "/udlejning", label: "Udlejning" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const { count } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-heading text-lg font-bold tracking-tight">
            BELLAHØJ
          </span>
          <span className="font-heading text-lg font-light tracking-tight text-fjord">
            CYKLER
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hovedmenu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden text-sm font-semibold text-fjord transition-colors hover:text-fjord-deep lg:block"
          >
            {business.phoneDisplay}
          </a>

          <Link
            href="/kurv"
            aria-label={`Kurv, ${mounted ? count : 0} varer`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-fjord"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {mounted && count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-fjord px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Luk menu" : "Åbn menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-paper px-4 py-4 md:hidden"
          aria-label="Mobilmenu"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 font-medium transition-colors hover:bg-fjord-tint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-line pt-3">
              <a
                href={business.phoneHref}
                className="block px-3 font-semibold text-fjord"
              >
                Ring {business.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
