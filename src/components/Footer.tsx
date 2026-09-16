import Image from "next/image";
import Link from "next/link";
import { business, navLinks } from "@/lib/data";
import { InstagramIcon, PinIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.jpg" alt="Taza de Miel" width={112} height={112} className="h-14 w-14 rounded-full object-cover" />
          <div className="hidden sm:block w-px h-10 bg-cream/20" />
          <p className="hidden sm:flex items-center gap-1.5 text-xs tracked-caps uppercase text-cream/70">
            <PinIcon className="w-3.5 h-3.5" /> {business.address}, {business.city}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-ui text-xs tracked-caps uppercase text-cream/80">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cream transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <InstagramIcon className="w-5 h-5" />
          <span className="text-xs tracked-caps uppercase">{business.instagram}</span>
        </a>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-[11px] tracked-caps uppercase text-cream/50">
        {business.name} · Est. {business.founded}
      </div>
    </footer>
  );
}
