export interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  {
    image:
      'https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Salon Interior',
    category: 'Interior',
  },
  {
    image:
      'https://images.pexels.com/photos/8467964/pexels-photo-8467964.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Precision Haircut',
    category: 'Hair',
  },
  {
    image:
      'https://images.pexels.com/photos/12959296/pexels-photo-12959296.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Bridal Look',
    category: 'Bridal',
  },
  {
    image:
      'https://images.pexels.com/photos/5484948/pexels-photo-5484948.png?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Nail Art',
    category: 'Nails',
  },
  {
    image:
      'https://images.pexels.com/photos/37229301/pexels-photo-37229301.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Facial Treatment',
    category: 'Makeup',
  },
  {
    image:
      'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Styling Station',
    category: 'Interior',
  },
  {
    image:
      'https://images.pexels.com/photos/10318055/pexels-photo-10318055.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Hair Styling',
    category: 'Hair',
  },
  {
    image:
      'https://images.pexels.com/photos/29370687/pexels-photo-29370687.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    title: 'Reception Glam',
    category: 'Bridal',
  },
];

export const galleryFilters = ['All', 'Interior', 'Hair', 'Makeup', 'Bridal', 'Nails'];
