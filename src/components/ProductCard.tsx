import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { discountPercent } from "@/lib/format";
import PriceTag from "@/components/PriceTag";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/cykler/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-fjord"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-fjord-tint">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.oldPrice && (
          <span className="absolute left-3 top-3 rounded-full bg-rust px-2.5 py-1 text-xs font-bold text-white">
            −{discountPercent(product.price, product.oldPrice)} %
          </span>
        )}
        {!product.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-semibold text-white">
            Udsolgt
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-mist">
          {product.brand}
        </p>
        <h3 className="font-heading font-semibold leading-snug group-hover:text-fjord">
          {product.name}
        </h3>
        <div className="mt-auto pt-2">
          <PriceTag price={product.price} oldPrice={product.oldPrice} />
        </div>
      </div>
    </Link>
  );
}
