import {
  Scissors,
  Sparkles,
  Flower2,
  Droplets,
  Hand,
  Footprints,
  Crown,
  PartyPopper,
  Shirt,
  Waves,
  Eye,
  Palette,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  name: string;
  description: string;
  startingPrice: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    name: 'Haircut & Styling',
    description: 'Expert cuts and blow-dry styling tailored to your face shape and personality.',
    startingPrice: '₹250',
    icon: Scissors,
  },
  {
    name: 'Hair Spa',
    description: 'Deep-conditioning treatments that nourish roots and restore natural shine.',
    startingPrice: '₹400',
    icon: Waves,
  },
  {
    name: 'Facial',
    description: 'Rejuvenating facials with premium products for glowing, radiant skin.',
    startingPrice: '₹500',
    icon: Sparkles,
  },
  {
    name: 'Cleanup',
    description: 'Refreshing skin cleanups that unclog pores and reveal a fresh complexion.',
    startingPrice: '₹300',
    icon: Droplets,
  },
  {
    name: 'Manicure',
    description: 'Pampering hand care with nail shaping, cuticle treatment, and polish.',
    startingPrice: '₹350',
    icon: Hand,
  },
  {
    name: 'Pedicure',
    description: 'Relaxing foot care that soothes, softens, and beautifies tired feet.',
    startingPrice: '₹450',
    icon: Footprints,
  },
  {
    name: 'Bridal Makeup',
    description: 'Complete bridal transformation with HD makeup for your special day.',
    startingPrice: '₹8,000',
    icon: Crown,
  },
  {
    name: 'Party Makeup',
    description: 'Glamorous party looks with flawless finishes that last all night.',
    startingPrice: '₹1,500',
    icon: PartyPopper,
  },
  {
    name: 'Saree Draping',
    description: 'Perfect saree draping in traditional and modern styles for any occasion.',
    startingPrice: '₹300',
    icon: Shirt,
  },
  {
    name: 'Waxing',
    description: 'Smooth, hygienic waxing for arms, legs, and full body with soft wax.',
    startingPrice: '₹200',
    icon: Flower2,
  },
  {
    name: 'Eyebrow & Threading',
    description: 'Precise eyebrow shaping and upper-lip threading for a polished look.',
    startingPrice: '₹50',
    icon: Eye,
  },
  {
    name: 'Hair Coloring',
    description: 'Global color, highlights, and balayage using ammonia-free premium dyes.',
    startingPrice: '₹1,200',
    icon: Palette,
  },
];
