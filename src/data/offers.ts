export interface Offer {
  title: string;
  description: string;
  originalPrice: string;
  offerPrice: string;
  badge: string;
  highlights: string[];
}

export const offers: Offer[] = [
  {
    title: 'Complete Bridal Package',
    description:
      'Everything a bride needs — bridal makeup, engagement makeup, reception look, pre-bridal sessions, and saree draping for all functions.',
    originalPrice: '₹18,000',
    offerPrice: '₹14,999',
    badge: 'Best Value',
    highlights: ['3 Makeup Looks', 'Pre-Bridal Sessions', 'Saree Draping Included', 'Trial Session Free'],
  },
  {
    title: 'Facial + Cleanup Combo',
    description:
      'Revitalize your skin with a premium facial followed by a deep cleanup for a fresh, radiant glow that lasts for weeks.',
    originalPrice: '₹900',
    offerPrice: '₹699',
    badge: 'Popular',
    highlights: ['Premium Facial', 'Deep Pore Cleanup', 'Face Massage', 'Skin Analysis'],
  },
  {
    title: 'Hair Spa Combo',
    description:
      'Nourish your hair with a luxurious hair spa, scalp massage, and blow-dry styling for silky, smooth, and healthy-looking hair.',
    originalPrice: '₹700',
    offerPrice: '₹499',
    badge: 'Trending',
    highlights: ['Deep Conditioning', 'Scalp Massage', 'Steam Treatment', 'Blow-Dry Styling'],
  },
  {
    title: 'Festive Beauty Package',
    description:
      'Get festive-ready with party makeup, hairstyle, saree draping, and a quick cleanup — the complete look for any celebration.',
    originalPrice: '₹2,500',
    offerPrice: '₹1,799',
    badge: 'Seasonal',
    highlights: ['Party Makeup', 'Hairstyle', 'Saree Draping', 'Express Cleanup'],
  },
];
