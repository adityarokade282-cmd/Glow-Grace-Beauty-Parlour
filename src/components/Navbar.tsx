import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, SALON } from '@/lib/nav';
import { useScrolled } from '@/hooks/useScrolled';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(30);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-[0_2px_20px_rgba(216,131,80,0.12)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="group flex items-center gap-2" onClick={handleNavClick}>
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-serif font-bold transition-all duration-300 group-hover:scale-110 ${
                scrolled
                  ? 'border-rosegold-400 text-rosegold-600'
                  : 'border-white/80 text-white'
              }`}
            >
              G
            </span>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-charcoal-900' : 'text-white'
                }`}
              >
                Glow &amp; Grace
              </span>
              <span
                className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-rosegold-500' : 'text-white/70'
                }`}
              >
                Beauty Parlour
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  scrolled ? 'text-charcoal-800 hover:text-rosegold-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-rosegold-400 transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SALON.phone.replace(/\s/g, '')}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-charcoal-800 hover:text-rosegold-600' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="h-4 w-4" />
              {SALON.phone}
            </a>
            <a
              href="#book"
              className="rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rosegold-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-rosegold-500/40 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled ? 'text-charcoal-900' : 'text-white'
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-blush-100 p-5">
            <span className="font-serif text-xl font-semibold text-charcoal-900">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal-800 hover:bg-blush-50"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="border-b border-blush-50 py-3.5 font-medium text-charcoal-800 transition-colors hover:text-rosegold-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${SALON.phone.replace(/\s/g, '')}`}
              onClick={handleNavClick}
              className="mt-5 flex items-center gap-2 py-2 text-charcoal-800"
            >
              <Phone className="h-4 w-4 text-rosegold-500" />
              {SALON.phone}
            </a>
            <a
              href="#book"
              onClick={handleNavClick}
              className="mt-4 rounded-full bg-gradient-to-r from-rosegold-500 to-rose-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-rosegold-500/30"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
