import Image from "next/image";
import Link from "next/link";
import { business, hours, favoritos } from "@/lib/data";
import { PinIcon, ClockIcon } from "@/components/icons";

export default function HomePage() {
  const mapsQuery = encodeURIComponent(`${business.address}, ${business.city}`);
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <div>
      {/* Hero — flat mockup image with invisible buttons lined up over the baked-in CTAs */}
      <section className="relative w-full aspect-[1903/696]">
        <Image
          src="/images/hero-home-v2.jpg"
          alt="Coffee with roots. Coffee first, we'll figure out the rest. Coffee drinks inspired by Mexican flavors, made with a lot of heart — Taza de Miel, San Pablo, CA"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <Link
          href="/menu"
          aria-label="View Menu"
          className="absolute rounded-full hover:bg-white/10 transition-colors"
          style={{ left: "4.6%", top: "80.7%", width: "16.9%", height: "9.8%" }}
        />
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Directions"
          className="absolute rounded-full hover:bg-white/10 transition-colors"
          style={{ left: "23%", top: "80.7%", width: "16.3%", height: "9.8%" }}
        />
      </section>

      {/* Our Favorites */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">Our Favorites</h2>
          <p className="hidden sm:block text-sm text-ink-soft">Flavors that taste like Mexico.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoritos.map((item) => (
            <div key={item.name} className="rounded-2xl overflow-hidden bg-cream-deep">
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.name} fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover" />
              </div>
              <p className="px-4 py-3 font-display font-semibold text-ink text-center">{item.name}</p>
            </div>
          ))}

          <div className="rounded-2xl bg-cream-deep p-6 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <PinIcon className="w-5 h-5 text-honey-dark mt-0.5 shrink-0" />
                <p className="text-sm text-ink">
                  {business.address},
                  <br />
                  {business.city}
                </p>
              </div>
              <div className="flex items-start gap-3">
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
            <p className="font-script text-xl text-ink-soft leading-tight">
              Coffee
              <br />
              Community
              <br />
              San Pablo ♡
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
