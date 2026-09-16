import type { Metadata } from "next";
import Image from "next/image";
import { business, hours } from "@/lib/data";
import { PinIcon, PinFilledIcon, ClockIcon, InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Visit Us — Taza de Miel",
};

export default function VisitanosPage() {
  const mapsQuery = encodeURIComponent(`${business.address}, ${business.city}`);
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
        <div>
          <p className="text-xs tracked-caps uppercase text-ink-soft mb-3">Come Say Hi</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-tight mb-5">
            Come get your coffee.
          </h1>
          <p className="text-ink-soft mb-7 max-w-sm">
            We&rsquo;ll be waiting for you on our café patio in San Pablo. Good coffee, good company, and a little
            piece of Mexico in the heart of the Bay Area.
          </p>

          <div className="flex flex-wrap items-start gap-x-8 gap-y-4 mb-7">
            <div className="flex items-start gap-2.5">
              <PinIcon className="w-5 h-5 text-honey-dark mt-0.5 shrink-0" />
              <p className="text-sm text-ink">
                {business.address},
                <br />
                {business.city}
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <ClockIcon className="w-5 h-5 text-honey-dark mt-0.5 shrink-0" />
              <div className="text-sm text-ink">
                {hours.map((h) => (
                  <p key={h.day}>
                    {h.day} {h.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-honey hover:bg-honey-dark text-cream font-ui text-sm tracked-caps uppercase font-medium px-6 py-3.5 transition-colors"
            >
              <PinFilledIcon className="w-4 h-4" /> Open in Maps
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 hover:border-ink/40 text-ink font-ui text-sm tracked-caps uppercase font-medium px-6 py-3.5 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" /> Instagram {business.instagram}
            </a>
          </div>

          <p className="font-script text-2xl text-ink-soft border-t border-ink/10 pt-6">
            Coffee · People · Culture · Always ♡
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden aspect-[1672/941]">
            <Image
              src="/images/visit-patio-v2.jpg"
              alt="Friends gathered on the Taza de Miel patio next to the coffee trailer and a Mexican flag — Coffee, community, good people"
              fill
              sizes="(min-width:1024px) 55vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-ink/10 aspect-[16/9]">
            <iframe
              title="Map to Taza de Miel"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="font-script text-lg text-ink-soft text-right">See you on the patio ♡</p>
        </div>
      </section>
    </div>
  );
}
