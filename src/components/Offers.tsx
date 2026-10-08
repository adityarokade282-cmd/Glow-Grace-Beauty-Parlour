import { Check, Tag, ArrowRight } from 'lucide-react';
import { offers } from '@/data/offers';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Offers() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="offers" className="section-padding bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rosegold-400" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-500">
              Special Offers
            </span>
            <span className="h-px w-10 bg-rosegold-400" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-charcoal-900 sm:text-5xl">
            Exclusive <span className="text-gradient-rose">Deals &amp; Packages</span>
          </h2>
          <p className="mt-4 text-charcoal-600">
            Save on your favourite beauty treatments with our carefully curated combo packages
            and seasonal offers.
          </p>
        </div>

        {/* Offers grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, idx) => (
            <div
              key={offer.title}
              className={`reveal reveal-delay-${(idx % 4) + 1} group relative flex flex-col overflow-hidden rounded-3xl border-2 border-blush-100 bg-gradient-to-b from-white to-blush-50/50 p-7 transition-all duration-400 hover:-translate-y-2 hover:border-rosegold-200 hover:shadow-2xl hover:shadow-rosegold-500/10`}
            >
              {/* Badge */}
              <div className="absolute right-5 top-5">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  <Tag className="h-3 w-3" />
                  {offer.badge}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold text-charcoal-900">
                {offer.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">
                {offer.description}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-end gap-3">
                <span className="font-serif text-4xl font-bold text-gradient-rose">
                  {offer.offerPrice}
                </span>
                <span className="pb-1 text-lg text-charcoal-400 line-through">
                  {offer.originalPrice}
                </span>
              </div>

              {/* Highlights */}
              <ul className="mt-5 space-y-2 border-t border-blush-100 pt-5">
                {offer.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-charcoal-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rosegold-100 text-rosegold-600">
                      <Check className="h-3 w-3" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-rosegold-500 group-hover:to-rose-500"
              >
                Grab This Offer
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
