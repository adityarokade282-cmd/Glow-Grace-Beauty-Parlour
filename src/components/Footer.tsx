import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { SALON } from '@/data/salons';
import { navLinks } from '@/lib/nav';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-rosegold-400 text-sm font-serif font-bold text-rosegold-400">
                G
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold">Glow &amp; Grace</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/50">
                  Beauty Parlour
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Sakoli&apos;s premier beauty destination, offering premium salon services and
              bridal makeup for over a decade. Enhance your beauty, embrace your confidence.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SALON.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-rosegold-500 hover:to-rose-500 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SALON.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-rosegold-500 hover:to-rose-500 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SALON.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-rosegold-500 hover:to-rose-500 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-rosegold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold">Popular Services</h4>
            <ul className="mt-4 space-y-2.5">
              {['Bridal Makeup', 'Hair Spa', 'Facial & Cleanup', 'Hair Coloring', 'Manicure & Pedicure'].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-sm text-white/60 transition-colors hover:text-rosegold-300"
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-rosegold-400" />
                {SALON.address}
              </li>
              <li>
                <a
                  href={`tel:${SALON.phone.replace(/\s/g, '')}`}
                  className="flex gap-3 text-sm text-white/60 hover:text-rosegold-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-rosegold-400" />
                  {SALON.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SALON.email}`}
                  className="flex gap-3 text-sm text-white/60 hover:text-rosegold-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-rosegold-400" />
                  {SALON.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Clock className="h-4 w-4 shrink-0 text-rosegold-400" />
                Mon–Sat: 9 AM – 8 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Glow &amp; Grace Beauty Parlour. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-white/50">
            Made with <Heart className="h-3.5 w-3.5 fill-rosegold-400 text-rosegold-400" /> in Sakoli, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
