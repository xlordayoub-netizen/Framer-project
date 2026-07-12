"use client";

import { useState } from "react";
import Image from "next/image";
import ImageFrame from "@/components/ImageFrame";

/**
 * Product image gallery: one main image + a row of thumbnails.
 * Purely visual state — no cart, no backend.
 */
export default function Gallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <ImageFrame
        src={images[current]}
        alt={`${productName} — photo ${current + 1} sur ${images.length}`}
        ratio="4 / 5"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
      />

      {images.length > 1 && (
        <div className="mt-3 flex gap-3" role="group" aria-label="Photos du produit">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Photo ${i + 1}`}
              aria-pressed={i === current}
              className={`relative h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-sm border bg-gray-light transition-colors duration-200 ${
                i === current
                  ? "border-ink"
                  : "border-gray-medium hover:border-gray-dark"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
                unoptimized={src.endsWith(".svg")}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
