"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product.inStock) {
    return (
      <button
        type="button"
        disabled
        className="w-full cursor-not-allowed rounded-full bg-line px-7 py-4 font-semibold text-mist sm:w-auto"
      >
        Udsolgt
      </button>
    );
  }

  const handleClick = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-full rounded-full px-7 py-4 font-semibold text-white transition-colors sm:w-auto ${
        added ? "bg-fjord-deep" : "bg-fjord hover:bg-fjord-deep"
      }`}
    >
      {added ? "Lagt i kurven ✓" : "Læg i kurv"}
    </button>
  );
}
