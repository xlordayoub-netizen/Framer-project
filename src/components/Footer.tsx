import Link from "next/link";
import { INSTAGRAM_HANDLE, WHATSAPP_NUMBER } from "@/lib/config";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-gray-medium bg-gray-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        {/* Wordmark + tagline */}
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-[0.35em] text-ink">
            Velira
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-dark">
            Montres monochromes, dessinées à Casablanca.
          </p>
          <p dir="rtl" lang="ar" className="mt-1 text-sm text-gray-dark">
            ساعات بالأبيض والأسود، صُمِّمت في الدار البيضاء.
          </p>
        </div>

        {/* Models */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-dark">
            Modèles
          </p>
          <ul className="mt-3 space-y-2">
            {products.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/product/${p.id}`}
                  className="text-sm text-ink underline-offset-4 transition-colors duration-200 hover:underline"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-dark">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition-colors duration-200 hover:underline"
              >
                WhatsApp — +{WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <span className="text-gray-dark">Instagram — {INSTAGRAM_HANDLE}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-medium">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-gray-dark md:px-10">
          © {new Date().getFullYear()} VELIRA — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
