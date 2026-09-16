"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-cream-deep/95 backdrop-blur border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0 flex items-center" aria-label="Taza de Miel — Home">
          <Image src="/images/logo.jpg" alt="Taza de Miel" width={112} height={112} className="h-14 w-14 rounded-full object-cover" priority />
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

        <Link
          href="/menu"
          className="shrink-0 rounded-full bg-honey hover:bg-honey-dark text-cream font-ui text-[13px] tracked-caps uppercase font-medium px-6 py-3 transition-colors"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
