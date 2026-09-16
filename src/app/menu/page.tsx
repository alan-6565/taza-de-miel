import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cafecitos, matcha, temporada, addons, type MenuItem } from "@/lib/data";
import { LeafIcon, CupIcon, CloudIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Menu — Taza de Miel",
};

function DrinkCard({ item, size = "md" }: { item: MenuItem; size?: "md" | "sm" }) {
  return (
    <div>
      <div className={`relative rounded-2xl overflow-hidden ${size === "md" ? "aspect-[4/5]" : "aspect-[4/5]"}`}>
        <Image src={item.image} alt={item.name} fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" />
      </div>
      <p className="mt-3 text-center font-display font-semibold text-ink text-sm sm:text-base leading-snug">{item.name}</p>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-10 text-center relative">
        <div className="flex items-center justify-center gap-3 text-xs tracked-caps uppercase text-ink-soft mb-4">
          <span className="w-8 h-px bg-ink-soft/40" />
          Our Menu
          <span className="w-8 h-px bg-ink-soft/40" />
        </div>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink">Flavors that taste like Mexico.</h1>
        <LeafIcon className="hidden sm:block w-10 h-10 text-tan absolute left-6 top-1/2 -translate-y-1/2 rotate-[-20deg]" />
        <LeafIcon className="hidden sm:block w-10 h-10 text-tan absolute right-6 top-1/2 -translate-y-1/2 scale-x-[-1] rotate-[-20deg]" />
        <p className="hidden sm:block font-script text-xl text-ink-soft absolute right-8 top-4">
          Coffee
          <br />
          Culture
          <br />
          Always ♡
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-10">
        <div className="rounded-3xl bg-cream-deep p-6 sm:p-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display font-semibold text-2xl text-ink">Coffees</h2>
            <p className="hidden sm:block text-sm text-ink-soft">Our classics, with a special twist.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {cafecitos.map((item) => (
              <DrinkCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-14">
        <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-6">
          <div className="rounded-3xl bg-cream-deep p-6 sm:p-7">
            <div className="flex items-baseline gap-3 mb-5">
              <h2 className="font-display font-semibold text-xl text-ink">Matcha</h2>
              <p className="text-sm text-ink-soft">Natural energy, same heart.</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {matcha.map((item) => (
                <DrinkCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-cream-deep p-6 sm:p-7">
            <div className="flex items-baseline gap-3 mb-5">
              <h2 className="font-display font-semibold text-xl text-ink">Seasonal</h2>
              <p className="text-sm text-ink-soft">Flavors that inspire us.</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {temporada.map((item) => (
                <DrinkCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-cream-deep p-6 sm:p-7 lg:w-64">
            <h2 className="font-display font-semibold text-xl text-ink mb-5">Add Something Special</h2>
            <div className="flex gap-6">
              {addons.map((a, i) => (
                <div key={a.name} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-tan/50 flex items-center justify-center text-ink">
                    {i === 0 ? <CupIcon className="w-7 h-7" /> : <CloudIcon className="w-7 h-7" />}
                  </div>
                  <p className="text-sm text-ink text-center leading-tight">
                    {a.name}
                    <br />
                    {a.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/visitanos"
            className="inline-flex items-center gap-2 rounded-full bg-honey hover:bg-honey-dark text-cream font-ui text-sm tracked-caps uppercase font-medium px-8 py-4 transition-colors"
          >
            Order Now <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
