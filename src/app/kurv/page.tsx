"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { business } from "@/data/business";
import { formatPrice } from "@/lib/format";

export default function KurvPage() {
  const { items, total, setQuantity, removeItem } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
      <h1 className="text-4xl font-bold sm:text-5xl">Din kurv</h1>

      {!mounted ? null : items.length === 0 ? (
        <div className="mt-12 rounded-xl border border-line bg-surface p-12 text-center">
          <p className="font-heading text-xl font-bold">Kurven er tom</p>
          <p className="mt-2 text-mist">
            Tag et kig på vores cykler — der er gode tilbud lige nu.
          </p>
          <Link
            href="/cykler"
            className="mt-6 inline-block rounded-full bg-fjord px-7 py-3.5 font-semibold text-white transition-colors hover:bg-fjord-deep"
          >
            Se alle cykler
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-10 divide-y divide-line rounded-xl border border-line bg-surface">
            {items.map((item) => (
              <li key={item.slug} className="flex gap-4 p-4 sm:gap-6 sm:p-6">
                <Link
                  href={`/cykler/${item.slug}`}
                  className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg bg-fjord-tint"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <p className="text-xs font-semibold uppercase tracking-wider text-mist">
                    {item.brand}
                  </p>
                  <Link
                    href={`/cykler/${item.slug}`}
                    className="font-heading font-semibold hover:text-fjord"
                  >
                    {item.name}
                  </Link>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                    <div className="flex items-center rounded-full border border-line">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.slug, item.quantity - 1)}
                        aria-label={`Én færre ${item.name}`}
                        className="h-9 w-9 rounded-l-full transition-colors hover:bg-fjord-tint"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.slug, item.quantity + 1)}
                        aria-label={`Én mere ${item.name}`}
                        className="h-9 w-9 rounded-r-full transition-colors hover:bg-fjord-tint"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-heading font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        className="text-sm text-mist underline-offset-4 hover:text-rust hover:underline"
                      >
                        Fjern
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-baseline justify-between">
              <span className="font-heading text-lg font-bold">I alt</span>
              <span className="font-heading text-3xl font-bold">
                {formatPrice(total)}
              </span>
            </div>
            <p className="mt-1 text-sm text-mist">
              Alle priser er inkl. 25 % moms.
            </p>

            {/* Checkout-stub: erstattes af betalingsgateway (Stripe/MobilePay/Quickpay) senere */}
            <div className="mt-6 rounded-lg bg-fjord-tint p-5 text-fjord-deep">
              <p className="font-heading font-bold">
                Online betaling kommer snart
              </p>
              <p className="mt-1.5 text-sm leading-relaxed">
                Indtil da kan du ringe til os på{" "}
                <a href={business.phoneHref} className="font-semibold underline">
                  {business.phoneDisplay}
                </a>{" "}
                eller besøge butikken på {business.address} — så lægger vi
                cyklen til side til dig.
              </p>
            </div>

            <button
              type="button"
              disabled
              className="mt-5 w-full cursor-not-allowed rounded-full bg-line py-4 font-semibold text-mist"
            >
              Gå til betaling — kommer snart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
