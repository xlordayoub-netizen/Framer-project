"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered entrance: fade + 16px move-up, once, no bounce.
 * Stagger by passing an increasing `delay` to sibling FadeIns.
 *
 * Reduced motion: the same element tree is always rendered (swapping
 * to a plain <div> would leave the server-rendered `opacity: 0` inline
 * style in place, since React doesn't patch style mismatches during
 * hydration). Instead, the movement is removed and the reveal is
 * instant — content is never hidden from reduced-motion users.
 * No JavaScript at all → a <noscript> rule in layout.tsx targets
 * [data-fade] and forces visibility.
 */
export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      data-fade
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -48px 0px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }
      }
    >
      {children}
    </motion.div>
  );
}
