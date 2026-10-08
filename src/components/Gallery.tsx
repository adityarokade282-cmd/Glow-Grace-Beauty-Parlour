import { useState } from 'react';
import { galleryItems, galleryFilters } from '@/data/gallery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState('All');

  const filteredItems =
    filter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="section-padding bg-blush-50/60">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rosegold-400" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-rosegold-500">
              Our Gallery
            </span>
            <span className="h-px w-10 bg-rosegold-400" />
          </div>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-charcoal-900 sm:text-5xl">
            A Glimpse of <span className="text-gradient-rose">Our World</span>
          </h2>
          <p className="mt-4 text-charcoal-600">
            Explore our salon interiors, stunning transformations, and beautiful moments
            created at Glow &amp; Grace.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 reveal reveal-delay-1">
          {galleryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-rosegold-500 to-rose-500 text-white shadow-lg shadow-rosegold-500/25'
                  : 'bg-white text-charcoal-700 hover:bg-rosegold-50 hover:text-rosegold-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(idx % 4) + 1} group relative cursor-pointer overflow-hidden rounded-2xl shadow-md`}
              style={{
                gridColumn: idx === 0 || idx === 5 ? 'span 2' : undefined,
                gridRow: idx === 0 ? 'span 2' : undefined,
              }}
            >
              <div className="relative h-full min-h-[200px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 translate-y-4 p-5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-wider text-rosegold-200">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
