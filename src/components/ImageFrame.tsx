import Image from "next/image";

/**
 * Image slot with a fixed aspect ratio (prevents layout shift).
 * All slots ship as labeled SVG placeholders — swap the file in
 * /public and update the path where the component is used.
 */
export default function ImageFrame({
  src,
  alt,
  ratio,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  /** CSS aspect-ratio value, e.g. "4 / 5", "1 / 1", "16 / 9" */
  ratio: string;
  /** next/image responsive sizes hint */
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gray-light ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        // SVG placeholders skip the optimizer; real photos (.jpg/.webp)
        // are optimized automatically once you swap them in.
        unoptimized={src.endsWith(".svg")}
      />
    </div>
  );
}
