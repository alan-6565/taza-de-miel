"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream-deep/95 backdrop-blur border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 flex items-center" aria-label="Taza de Miel — Home">
          <Image src="/images/logo.jpg" alt="Taza de Miel" width={112} height={112} className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-ui text-[13px] tracked-caps uppercase">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 border-b transition-colors ${
                  active ? "text-honey-dark border-honey-dark" : "text-ink border-transparent hover:text-honey-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/menu"
            className="shrink-0 rounded-full bg-honey hover:bg-honey-dark text-cream font-ui text-[11px] sm:text-[13px] tracked-caps uppercase font-medium px-4 sm:px-6 py-2.5 sm:py-3 transition-colors"
          >
            Order Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-ink hover:bg-ink/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/5 bg-cream-deep px-5 sm:px-8 py-4 flex flex-col gap-1 font-ui text-sm tracked-caps uppercase">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 border-b border-ink/5 last:border-b-0 transition-colors ${
                  active ? "text-honey-dark" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
