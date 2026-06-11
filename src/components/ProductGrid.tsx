"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  products,
  categoryLabels,
  allBrands,
  type Category,
} from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Sort = "standard" | "pris-stigende" | "pris-faldende";

const categories = Object.entries(categoryLabels) as [Category, string][];

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeCategory = searchParams.get("kategori") as Category | null;
  const [brand, setBrand] = useState<string>("alle");
  const [sort, setSort] = useState<Sort>("standard");

  const setCategory = (category: Category | null) => {
    router.replace(
      category ? `${pathname}?kategori=${category}` : pathname,
      { scroll: false },
    );
  };

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (!activeCategory || p.category === activeCategory) &&
        (brand === "alle" || p.brand === brand),
    );
    if (sort === "pris-stigende") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "pris-faldende") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, brand, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            !activeCategory
              ? "border-fjord bg-fjord text-white"
              : "border-line bg-surface text-mist hover:border-fjord hover:text-ink"
          }`}
        >
          Alle
        </button>
        {categories.map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setCategory(value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === value
                ? "border-fjord bg-fjord text-white"
                : "border-line bg-surface text-mist hover:border-fjord hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-line py-4">
        <p className="text-sm text-mist">
          {visible.length} {visible.length === 1 ? "produkt" : "produkter"}
        </p>
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center gap-2 text-sm">
            <span className="text-mist">Mærke</span>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="rounded-lg border border-line bg-surface px-3 py-2 text-sm"
            >
              <option value="alle">Alle mærker</option>
              {allBrands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-mist">Sortér</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-lg border border-line bg-surface px-3 py-2 text-sm"
            >
              <option value="standard">Anbefalet</option>
              <option value="pris-stigende">Pris: lav til høj</option>
              <option value="pris-faldende">Pris: høj til lav</option>
            </select>
          </label>
        </div>
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-mist">
          Ingen produkter matcher dit filter. Prøv at vælge en anden kategori
          eller et andet mærke.
        </p>
      )}
    </div>
  );
}
