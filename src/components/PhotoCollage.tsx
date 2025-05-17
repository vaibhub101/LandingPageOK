import React from 'react';

const PhotoCollage: React.FC = () => {
  const images = [
    {
      src: '/images/wellness1.jpg',
      alt: 'Wellness Center Interior',
      className: 'col-span-2 row-span-2'
    },
    {
      src: '/images/wellness2.jpg',
      alt: 'Meditation Session',
      className: 'col-span-1 row-span-1'
    },
    {
      src: '/images/wellness3.jpg',
      alt: 'Yoga Practice',
      className: 'col-span-1 row-span-1'
    },
    {
      src: '/images/wellness4.jpg',
      alt: 'Spa Treatment',
      className: 'col-span-1 row-span-2'
    },
    {
      src: '/images/wellness5.jpg',
      alt: 'Fitness Training',
      className: 'col-span-2 row-span-1'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-maroon-200 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-maroon-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-4 text-golden-600">
          Our Wellness Journey in Pictures
        </h2>
        <p className="text-center mb-12 text-maroon-700 font-accent text-xl">Discover the essence of holistic well-being</p>
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg transform transition-transform hover:scale-105 ${image.className} border border-maroon-200/30`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-beige-100 font-accent text-xl">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCollage; 