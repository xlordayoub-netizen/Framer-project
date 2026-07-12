import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ImageFrame from "@/components/ImageFrame";
import OrderButton from "@/components/OrderButton";
import { featured } from "@/lib/products";
import { LIFESTYLE_IMAGE } from "@/lib/config";

export default function LandingPage() {
  return (
    <>
      {/* ——— 1 · Hero ——— */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-24">
        <FadeIn>
          <ImageFrame
            src={featured.images[0]}
            alt={`${featured.name} — cadran noir mat, boîtier acier 39 mm`}
            ratio="4 / 5"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-dark">
              {featured.name}
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[0.95] md:text-6xl lg:text-7xl">
              Time,
              <br />
              undecorated.
            </h1>
          </FadeIn>
          <FadeIn delay={0.26}>
            <p className="mt-6 max-w-md leading-relaxed text-gray-dark">
              Boîtier acier brossé de 39 mm, cadran noir mat, verre saphir.
              Livrée en 24–48 h, payée à la réception.
            </p>
          </FadeIn>
          <FadeIn delay={0.34}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <OrderButton product={featured} />
              <Link
                href={`/product/${featured.id}`}
                className="text-sm text-ink underline underline-offset-4 transition-colors duration-200 hover:text-gray-dark"
              >
                Voir la montre
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ——— 2 · Trust bar ——— */}
      <section className="border-y border-gray-medium">
        <FadeIn>
          <ul className="mx-auto grid max-w-6xl gap-3 px-6 py-6 text-center text-xs uppercase tracking-[0.18em] text-gray-dark sm:grid-cols-3 md:px-10">
            <li>Livraison 24–48 h</li>
            <li>Paiement à la livraison</li>
            <li>Retour facile</li>
          </ul>
        </FadeIn>
      </section>

      {/* ——— 3 · Detail (macro + specs) ——— */}
      <section className="bg-gray-light">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-14 md:px-10 md:py-28">
          <FadeIn>
            <ImageFrame
              src={featured.images[1]}
              alt={`${featured.name} — détail macro du cadran et des index`}
              ratio="1 / 1"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-dark">
              Fiche technique
            </p>
            {/* Spec sheet — hairline rules, like a watchmaker's table */}
            <ul className="mt-6 border-t border-gray-medium">
              {featured.specs.slice(0, 3).map((spec) => (
                <li
                  key={spec}
                  className="border-b border-gray-medium py-4 text-[15px] leading-relaxed"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ——— 4 · Lifestyle (full-width image, no text) ——— */}
      <FadeIn>
        <ImageFrame
          src={LIFESTYLE_IMAGE}
          alt="Montre VELIRA portée au quotidien"
          ratio="16 / 9"
          sizes="100vw"
        />
      </FadeIn>

      {/* ——— 5 · Story ——— */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <FadeIn>
          <div className="max-w-2xl md:ml-[8%]">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-dark">
              La maison
            </p>
            <p className="mt-6 font-display text-[26px] font-normal leading-snug md:text-[34px]">
              VELIRA est née à Casablanca d&apos;un refus&nbsp;: celui des
              cadrans surchargés. Nous fabriquons une seule famille de montres,
              en noir et blanc, et chaque pièce est réglée puis contrôlée à la
              main avant l&apos;expédition.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ——— 6 · Buy ——— */}
      <section
        id="acheter"
        className="border-t border-gray-medium bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10 md:py-28">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-dark">
              {featured.name}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 font-display text-6xl font-medium md:text-7xl">
              {featured.price}
              <span className="ml-3 text-3xl font-normal text-gray-dark md:text-4xl">
                DH
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-9">
              <OrderButton product={featured} />
            </div>
            <p className="mt-5 text-sm text-gray-dark">
              Paiement à la livraison — partout au Maroc.
            </p>
            <p dir="rtl" lang="ar" className="mt-1 text-sm text-gray-dark">
              الدفع عند الاستلام، التوصيل في جميع أنحاء المغرب.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
