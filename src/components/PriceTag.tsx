import { formatPrice } from "@/lib/format";

export default function PriceTag({
  price,
  oldPrice,
  size = "md",
}: {
  price: number;
  oldPrice?: number;
  size?: "md" | "lg";
}) {
  return (
    <span className="flex items-baseline gap-2">
      <span
        className={`font-heading font-bold ${
          size === "lg" ? "text-3xl" : "text-lg"
        } ${oldPrice ? "text-rust" : "text-ink"}`}
      >
        {formatPrice(price)}
      </span>
      {oldPrice && (
        <span
          className={`text-mist line-through ${
            size === "lg" ? "text-lg" : "text-sm"
          }`}
        >
          {formatPrice(oldPrice)}
        </span>
      )}
    </span>
  );
}
