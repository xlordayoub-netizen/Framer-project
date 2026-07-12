import type { Metadata, Viewport } from "next";
import { Cormorant, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

// Serif display — quiet luxury, used with restraint for headings & prices
const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

// Body face
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELIRA — Time, undecorated.",
  description:
    "Montres monochromes VELIRA. Boîtier acier, verre saphir. Livraison 24–48 h partout au Maroc, paiement à la livraison. Commande sur WhatsApp.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {/* Scroll animations pre-hide content via inline styles;
            without JavaScript, force everything visible. */}
        <noscript>
          <style>{`[data-fade]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
