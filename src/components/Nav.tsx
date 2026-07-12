"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Formats the current time in Casablanca as HH:MM. */
function casablancaTime(): string {
  return new Intl.DateTimeFormat("fr-MA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Africa/Casablanca",
  }).format(new Date());
}

/**
 * Sticky top navigation.
 * Signature detail: the nav shows the live time in Casablanca —
 * a watch brand's site should tell the time. Client-only to avoid
 * any server/client hydration mismatch.
 */
export default function Nav() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(casablancaTime());
    const id = setInterval(() => setTime(casablancaTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-medium bg-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-lg font-semibold uppercase tracking-[0.35em] text-ink"
        >
          Velira
        </Link>

        <div className="flex items-center gap-5 md:gap-7">
          {/* Live Casablanca time — fixed width so it never shifts layout */}
          <span
            className="hidden select-none text-[11px] uppercase tracking-[0.2em] text-gray-dark sm:inline-block"
            aria-hidden="true"
          >
            Casablanca{" "}
            <span className="inline-block w-[3.2em] tabular-nums text-ink">
              {time ?? "--:--"}
            </span>
          </span>

          {/* Cart icon → jumps to the buy section */}
          <Link
            href="/#acheter"
            aria-label="Commander — voir le prix"
            className="-m-2.5 p-2.5 text-ink transition-colors duration-200 hover:text-gray-dark"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              {/* Shopping bag */}
              <path d="M6 8h12l-1 13H7L6 8Z" strokeLinejoin="round" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
