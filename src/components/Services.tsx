import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-padding bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rosegold-400" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-500">
              Our Services
            </span>
            <span className="h-px w-10 bg-rosegold-400" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-charcoal-900 sm:text-5xl">
            Beauty Treatments for <span className="text-gradient-rose">Every Occasion</span>
          </h2>
          <p className="mt-4 text-charcoal-600">
            From everyday grooming to special occasion glam, our expert team offers a complete
            range of beauty services using premium products and techniques.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.name}
              className={`reveal reveal-delay-${(idx % 3) + 1} group relative overflow-hidden rounded-2xl border border-blush-100 bg-white p-7 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:border-rosegold-200 hover:shadow-xl hover:shadow-rosegold-500/10`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-rosegold-50 to-blush-50 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rosegold-100 to-blush-100 text-rosegold-600 transition-all duration-400 group-hover:from-rosegold-500 group-hover:to-rose-500 group-hover:text-white group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-blush-50 px-3 py-1 text-xs font-semibold text-rosegold-600 transition-colors group-hover:bg-white">
                    from {service.startingPrice}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-charcoal-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  {service.description}
                </p>

                <a
                  href="#book"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-rosegold-600 transition-colors hover:text-rose-600"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
