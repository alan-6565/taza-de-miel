import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { valores } from "@/lib/data";
import { LeafIcon, PeopleIcon, HeartIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Story — Taza de Miel",
};

const VALOR_ICONS = [LeafIcon, PeopleIcon, HeartIcon];

export default function NuestraHistoriaPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-16 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <div>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-tight mb-6">
            A little piece of
            <br />
            home in every cup.
          </h1>
          <p className="text-ink-soft mb-4">
            Taza de Miel was born from love for our roots, the flavors that connect us, and the people who make
            life sweeter.
          </p>
          <p className="text-ink-soft mb-6">
            We&rsquo;re a small family business that believes in the power of good coffee, Mexican treats, and
            community.
          </p>
          <p className="font-script text-2xl text-honey-dark mb-8">You&rsquo;ll always be welcome here. ♡</p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-honey hover:bg-honey-dark text-cream font-ui text-sm tracked-caps uppercase font-medium px-7 py-3.5 transition-colors"
          >
            Explore Our Menu <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="relative rounded-2xl overflow-hidden row-span-2 aspect-[209/284]">
            <Image src="/images/story-cookies.jpg" alt="Mexican sweet bread: cajeta, tutuli, and pan de elote" fill sizes="(min-width:1024px) 30vw, 45vw" className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[213/140]">
            <Image src="/images/story-barista.jpg" alt="Barista making a coffee — Good coffee, better people" fill sizes="(min-width:1024px) 30vw, 45vw" className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[213/139]">
            <Image src="/images/story-patio.jpg" alt="Customers enjoying the Taza de Miel patio — Coffee, community, San Pablo" fill sizes="(min-width:1024px) 30vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream-deep border-t border-ink/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid sm:grid-cols-3 gap-8 text-center relative">
          <p className="hidden sm:block absolute -top-3 left-1/2 -translate-x-1/2 bg-cream-deep px-4 text-xs tracked-caps uppercase text-ink-soft">
            Our Values
          </p>
          {valores.map((v, i) => {
            const Icon = VALOR_ICONS[i];
            return (
              <div key={v.title} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full border border-honey-dark/40 flex items-center justify-center text-honey-dark">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">{v.title}</h3>
                  <p className="text-sm text-ink-soft">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <p className="text-center text-[11px] tracked-caps uppercase text-ink-soft py-4">
        Coffee with roots · For an incredible community · San Pablo, CA
      </p>
    </div>
  );
}
