import { Check, Crown, ArrowRight } from 'lucide-react';
import { bridalServices } from '@/data/bridal';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Bridal() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="bridal" className="relative section-padding overflow-hidden bg-charcoal-900">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-rosegold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rosegold-400" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-300">
              Bridal Collection
            </span>
            <span className="h-px w-10 bg-rosegold-400" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-white sm:text-5xl">
            Your <span className="text-gradient-gold">Bridal Journey</span> Starts Here
          </h2>
          <p className="mt-4 text-white/70">
            Make your special day unforgettable with our exclusive bridal services. From
            engagement to reception, we create looks that make you feel like royalty.
          </p>
        </div>

        {/* Bridal service cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {bridalServices.map((service, idx) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${(idx % 2) + 1} group relative overflow-hidden rounded-3xl bg-charcoal-800 transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <Crown className="h-5 w-5 text-rosegold-300" />
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rosegold-500/20 text-rosegold-300">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center reveal reveal-delay-2">
          <a
            href="#book"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-10 py-4 font-semibold text-white shadow-xl shadow-rosegold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-rosegold-500/40 hover:-translate-y-1"
          >
            <Crown className="h-5 w-5" />
            Book Bridal Consultation
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
