import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Glow & Grace Beauty Parlour interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-900/60 to-charcoal-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-charcoal-950/40" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute right-10 top-32 hidden lg:block">
        <div className="animate-float">
          <Sparkles className="h-10 w-10 text-rosegold-300/40" />
        </div>
      </div>
      <div className="absolute right-32 top-1/2 hidden lg:block">
        <div className="animate-float [animation-delay:2s]">
          <Sparkles className="h-6 w-6 text-blush-300/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="animate-fade-in-down flex items-center gap-3">
              <span className="h-px w-12 bg-rosegold-300" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-200">
                Sakoli, Maharashtra
              </span>
            </div>

            <h1
              className="mt-6 font-serif text-5xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="animate-fade-in-up inline-block">Enhance Your Beauty,</span>
              <br />
              <span
                className="animate-fade-in-up text-gradient-gold inline-block"
                style={{ animationDelay: '0.4s' }}
              >
                Embrace Your Confidence
              </span>
            </h1>

            <p
              className="mt-7 max-w-lg animate-fade-in-up text-lg leading-relaxed text-white/80"
              style={{ animationDelay: '0.6s' }}
            >
              Experience premium beauty treatments, expert bridal makeup, and personalised
              care in a relaxing, luxurious environment. Your journey to radiance starts here
              at Glow &amp; Grace.
            </p>

            <div
              className="mt-9 flex animate-fade-in-up flex-col gap-4 sm:flex-row"
              style={{ animationDelay: '0.8s' }}
            >
              <a
                href="#book"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-8 py-4 font-semibold text-white shadow-xl shadow-rosegold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-rosegold-500/40 hover:-translate-y-1"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                View Services
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats bar */}
            <div
              className="mt-14 flex animate-fade-in-up gap-10"
              style={{ animationDelay: '1s' }}
            >
              <div>
                <div className="font-serif text-3xl font-semibold text-white">10+</div>
                <div className="text-sm text-white/60">Years of Excellence</div>
              </div>
              <div className="border-l border-white/20 pl-10">
                <div className="font-serif text-3xl font-semibold text-white">5,000+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div className="border-l border-white/20 pl-10">
                <div className="font-serif text-3xl font-semibold text-white">12+</div>
                <div className="text-sm text-white/60">Beauty Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
