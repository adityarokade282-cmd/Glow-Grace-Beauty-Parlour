export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    location: 'Sakoli',
    rating: 5,
    text: 'I got my bridal makeup done here and I cannot express how happy I was. The team understood exactly what I wanted and made me look like a dream. Highly recommended for every bride-to-be!',
  },
  {
    name: 'Anjali Deshmukh',
    location: 'Bhandara',
    rating: 5,
    text: 'The hair spa treatment was absolutely relaxing. My hair felt so soft and nourished afterwards. The ambience is calm and the staff is very professional. My go-to salon now.',
  },
  {
    name: 'Sneha Patil',
    location: 'Sakoli',
    rating: 5,
    text: 'I visited for a facial and cleanup combo and the results were amazing. My skin was glowing for days. The products they use are of premium quality. Worth every rupee.',
  },
  {
    name: 'Kavya Reddy',
    location: 'Nagpur',
    rating: 5,
    text: 'Travelled all the way from Nagpur for my engagement makeup and it was totally worth it. The attention to detail and the care they take is unmatched. Thank you Glow & Grace!',
  },
  {
    name: 'Ritu Agarwal',
    location: 'Sakoli',
    rating: 5,
    text: 'The manicure and pedicure session was so pampering. Clean environment, friendly staff, and beautiful results. I also loved the nail art they did. Will definitely come back.',
  },
];
