const formatter = new Intl.NumberFormat("da-DK", {
  maximumFractionDigits: 0,
});

export function formatPrice(kr: number): string {
  return `${formatter.format(kr)} kr.`;
}

export function discountPercent(price: number, oldPrice: number): number {
  return Math.round((1 - price / oldPrice) * 100);
}
