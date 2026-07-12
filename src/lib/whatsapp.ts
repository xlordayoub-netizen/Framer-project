import { WHATSAPP_NUMBER } from "@/lib/config";
import type { Product } from "@/lib/products";

/**
 * Builds the wa.me link that opens WhatsApp with a prefilled order
 * message (Moroccan Arabic) for the given product.
 */
export function orderLink(product: Pick<Product, "name" | "price">): string {
  const message = `مرحبا، بغيت نطلب: ${product.name} — ${product.price} DH. (من موقع VELIRA)`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
