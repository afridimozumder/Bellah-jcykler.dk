import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  products,
  getProduct,
  getRelated,
  categoryLabels,
} from "@/data/products";
import { discountPercent } from "@/lib/format";
import PriceTag from "@/components/PriceTag";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelated(product);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <nav aria-label="Brødkrumme" className="text-sm text-mist">
        <Link href="/cykler" className="hover:text-ink hover:underline">
          Cykler
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/cykler?kategori=${product.category}`}
          className="hover:text-ink hover:underline"
        >
          {categoryLabels[product.category]}
        </Link>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-fjord-tint">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {product.oldPrice && (
            <span className="absolute left-4 top-4 rounded-full bg-rust px-3 py-1.5 text-sm font-bold text-white">
              Spar {discountPercent(product.price, product.oldPrice)} %
            </span>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fjord">
            {product.brand}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <div className="mt-5">
            <PriceTag price={product.price} oldPrice={product.oldPrice} size="lg" />
          </div>
          <p className="mt-6 leading-relaxed text-mist">{product.description}</p>

          <div className="mt-8">
            <AddToCartButton product={product} />
            <p className="mt-3 text-sm text-mist">
              Gratis første service ved køb · Afhentes i butikken i Brønshøj
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-line bg-surface">
            <h2 className="border-b border-line px-5 py-4 font-heading font-bold">
              Specifikationer
            </h2>
            <dl className="divide-y divide-line">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between gap-6 px-5 py-3.5 text-sm"
                >
                  <dt className="text-mist">{spec.label}</dt>
                  <dd className="text-right font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold sm:text-3xl">Relaterede cykler</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
