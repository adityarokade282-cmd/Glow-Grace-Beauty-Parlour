import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="section-padding bg-blush-50/60">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rosegold-400" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-500">
              Client Love
            </span>
            <span className="h-px w-10 bg-rosegold-400" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-charcoal-900 sm:text-5xl">
            What Our <span className="text-gradient-rose">Clients Say</span>
          </h2>
          <p className="mt-4 text-charcoal-600">
            We take pride in every smile we create. Here&apos;s what our beautiful clients
            have to say about their Glow &amp; Grace experience.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className={`reveal reveal-delay-${(idx % 3) + 1} group relative flex flex-col rounded-2xl bg-white p-7 shadow-md transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-rosegold-500/10`}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-blush-100 transition-colors duration-300 group-hover:text-rosegold-100" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-rosegold-400 text-rosegold-400"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 leading-relaxed text-charcoal-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-blush-50 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rosegold-400 to-rose-500 font-serif text-lg font-semibold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-charcoal-900">{testimonial.name}</div>
                  <div className="text-sm text-rosegold-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal reveal-delay-3 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-charcoal-900 to-charcoal-800 p-7 text-center">
            <div className="font-serif text-5xl font-bold text-gradient-gold">4.9</div>
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-rosegold-400 text-rosegold-400" />
              ))}
            </div>
            <p className="mt-3 text-white/70">
              Rated by 5,000+ happy clients across Sakoli and nearby areas
            </p>
            <a
              href="#book"
              className="mt-6 rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-rosegold-500/30"
            >
              Book Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
