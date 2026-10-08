export interface BridalService {
  title: string;
  description: string;
  includes: string[];
  image: string;
}

export const bridalServices: BridalService[] = [
  {
    title: 'Bridal Makeup',
    description:
      'Our signature bridal package includes HD airbrush makeup, hairstyle, saree draping, and jewellery setting for a flawless look on your wedding day.',
    includes: ['HD Airbrush Makeup', 'Bridal Hairstyle', 'Saree Draping', 'Jewellery Setting'],
    image:
      'https://images.pexels.com/photos/12959296/pexels-photo-12959296.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    title: 'Engagement Makeup',
    description:
      'Elegant and radiant makeup for your engagement ceremony — soft glam that photographs beautifully and lasts through every ritual.',
    includes: ['Soft Glam Makeup', 'Hairstyle', 'Saree Draping', 'False Lashes'],
    image:
      'https://images.pexels.com/photos/30825617/pexels-photo-30825617.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    title: 'Reception Makeup',
    description:
      'A bold and sophisticated reception look with smokey eyes, contouring, and a statement lip to make you shine at the evening party.',
    includes: ['Smokey Eye Makeup', 'Contouring & Highlighting', 'Statement Lip', 'Hairstyle'],
    image:
      'https://images.pexels.com/photos/29370687/pexels-photo-29370687.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
  {
    title: 'Pre-Bridal Packages',
    description:
      'Start your bridal journey weeks in advance with facials, body polishes, hair spas, and manicure-pedicure sessions for picture-perfect skin.',
    includes: ['10 Facial Sessions', 'Body Polish & Cleanup', 'Hair Spa Treatments', 'Mani-Pedi Combo'],
    image:
      'https://images.pexels.com/photos/35963152/pexels-photo-35963152.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  },
];
