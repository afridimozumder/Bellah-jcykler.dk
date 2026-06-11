import type { Metadata } from "next";
import { Schibsted_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bellahøjcykler.dk"),
  title: {
    default: "Bellahøj Cykler – Din lokale cykelhandler i Brønshøj",
    template: "%s | Bellahøj Cykler",
  },
  description:
    "Bellahøj Cykler på Frederikssundsvej i Brønshøj. Salg af cykler og elcykler, professionelt cykelværksted og cykeludlejning. Over 70 års erfaring.",
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "Bellahøj Cykler",
    title: "Bellahøj Cykler – Din lokale cykelhandler i Brønshøj",
    description:
      "Salg af cykler og elcykler, professionelt cykelværksted og cykeludlejning i Brønshøj. Over 70 års erfaring.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da">
      <body className={`${schibsted.variable} ${instrument.variable}`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
