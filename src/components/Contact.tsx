import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { SALON } from '@/data/salons';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const whatsappLink = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
    'Hello Glow & Grace, I would like to book an appointment.'
  )}`;

  return (
    <section id="contact" className="section-padding bg-blush-50/60">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rosegold-400" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-500">
              Get In Touch
            </span>
            <span className="h-px w-10 bg-rosegold-400" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-charcoal-900 sm:text-5xl">
            Visit Our <span className="text-gradient-rose">Parlour</span>
          </h2>
          <p className="mt-4 text-charcoal-600">
            We&apos;d love to welcome you. Reach out to us through any of the channels below
            or drop by during our opening hours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="reveal space-y-6">
            {/* Address */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold-100 to-blush-100 text-rosegold-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal-900">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal-600">{SALON.address}</p>
                <a
                  href={SALON.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-rosegold-600 hover:text-rose-600"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold-100 to-blush-100 text-rosegold-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal-900">Phone</h3>
                <a
                  href={`tel:${SALON.phone.replace(/\s/g, '')}`}
                  className="mt-1 block text-sm text-charcoal-600 hover:text-rosegold-600"
                >
                  {SALON.phone}
                </a>
                <a
                  href={`mailto:${SALON.email}`}
                  className="mt-1 flex items-center gap-1.5 text-sm text-charcoal-600 hover:text-rosegold-600"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {SALON.email}
                </a>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-5 font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="h-6 w-6" />
              Chat with us on WhatsApp
            </a>

            {/* Opening hours */}
            <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold-100 to-blush-100 text-rosegold-600">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal-900">Opening Hours</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {SALON.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-blush-50 pb-2 text-sm last:border-0"
                  >
                    <span className="text-charcoal-700">{h.day}</span>
                    <span className="font-medium text-rosegold-600">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social media */}
            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md">
              <span className="text-sm font-medium text-charcoal-700">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href={SALON.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-50 text-rosegold-600 transition-all duration-300 hover:bg-gradient-to-br hover:from-rosegold-500 hover:to-rose-500 hover:text-white hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={SALON.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-50 text-rosegold-600 transition-all duration-300 hover:bg-gradient-to-br hover:from-rosegold-500 hover:to-rose-500 hover:text-white hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={SALON.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-50 text-rosegold-600 transition-all duration-300 hover:bg-gradient-to-br hover:from-rosegold-500 hover:to-rose-500 hover:text-white hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal reveal-delay-1 flex flex-col overflow-hidden rounded-2xl shadow-lg">
            <div className="flex-1 min-h-[400px]">
              <iframe
                title="Glow & Grace Beauty Parlour location"
                src="https://maps.google.com/maps?q=Sakoli%20Maharashtra%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
