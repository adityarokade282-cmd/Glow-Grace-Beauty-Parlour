import { Sparkles, Heart, Leaf, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Users,
    title: 'Professional Beauty Experts',
    description:
      'Our certified stylists and makeup artists bring years of experience and a passion for perfection to every appointment.',
  },
  {
    icon: Leaf,
    title: 'Clean & Relaxing Environment',
    description:
      'We maintain the highest hygiene standards in a calming, beautifully designed space that helps you unwind completely.',
  },
  {
    icon: Heart,
    title: 'Customer-Focused Service',
    description:
      'Every treatment is tailored to your individual needs. We listen, advise, and deliver results that exceed your expectations.',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description:
      'We use only trusted, high-quality beauty products that are safe, effective, and gentle on your skin and hair.',
  },
];

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-blush-50/60">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="relative reveal">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/7195809/pexels-photo-7195809.jpeg?auto=compress&cs=tinysrgb&h=500&w=400"
                  alt="Salon reception area"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/20309789/pexels-photo-20309789.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Makeup artist at work"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Facial treatment"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&h=500&w=400"
                  alt="Hair styling station"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-8 py-4 shadow-xl">
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-gradient-rose">10+</div>
                <div className="text-xs uppercase tracking-wider text-charcoal-600">
                  Years of Trust
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-rosegold-400" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-500">
                About Us
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-charcoal-900 sm:text-5xl">
              Where Beauty Meets <span className="text-gradient-rose">Elegance</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-700">
              Welcome to Glow &amp; Grace Beauty Parlour, Sakoli&apos;s most trusted destination
              for premium beauty and wellness services. For over a decade, we have been
              transforming looks and boosting confidence with our expert team, personalised
              care, and luxurious treatments.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-600">
              From everyday grooming to complete bridal transformations, we offer a full range
              of services in a warm, welcoming space designed to make you feel pampered and
              special. Our commitment to quality, hygiene, and customer satisfaction has made
              us the preferred choice of thousands of women across the region.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-white"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rosegold-100 to-blush-100 text-rosegold-600 transition-all duration-300 group-hover:scale-110 group-hover:from-rosegold-500 group-hover:to-rose-500 group-hover:text-white">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
