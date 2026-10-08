import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SALON } from '@/data/salons';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setShowTooltip(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const whatsappLink = `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(
    'Hello Glow & Grace, I would like to book an appointment.'
  )}`;

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="relative mb-1 hidden animate-fade-in rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal-900 text-white"
            aria-label="Close tooltip"
          >
            <X className="h-3 w-3" />
          </button>
          <p className="text-sm font-medium text-charcoal-800">Need help? Chat with us!</p>
          <p className="text-xs text-charcoal-500">We typically reply in minutes</p>
          <div className="absolute -right-1.5 bottom-4 h-3 w-3 rotate-45 bg-white" />
        </div>
      )}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />
      </a>
    </div>
  );
}
