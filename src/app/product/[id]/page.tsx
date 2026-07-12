import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import OrderButton from "@/components/OrderButton";
import { getProduct, products } from "@/lib/products";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.id);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.price} DH | VELIRA`,
    description: `${product.name} : ${product.specs.slice(0, 2).join(", ")}. Paiement à la livraison, commande sur WhatsApp.`,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-16">
      <Link
        href="/"
        className="text-xs uppercase tracking-[0.18em] text-gray-dark transition-colors duration-200 hover:text-ink"
      >
        ← Retour
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
        <Gallery images={product.images} productName={product.name} />

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-dark">
            Velira
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-medium tabular-nums">
            {product.price} DH
          </p>

          {/* Full spec sheet */}
          <ul className="mt-8 border-t border-gray-medium">
            {product.specs.map((spec) => (
              <li
                key={spec}
                className="border-b border-gray-medium py-3.5 text-[15px] leading-relaxed"
              >
                {spec}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <OrderButton product={product} className="w-full sm:w-auto" />
          </div>
          <p className="mt-4 text-sm text-gray-dark">
            Paiement à la livraison — livrée en 24–48 h.
          </p>
          <p dir="rtl" lang="ar" className="mt-1 text-sm text-gray-dark">
            الدفع عند الاستلام — التوصيل خلال ٢٤ إلى ٤٨ ساعة.
          </p>
        </div>
      </div>
    </div>
  );
}
