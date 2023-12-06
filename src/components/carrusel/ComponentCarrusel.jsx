import React, { useRef, useState } from 'react';

const ComponentCarrusel = ( {imagen1, imagen2, imagen3}) => {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    const container = containerRef.current;

    if (direction === 'left') {
      container.scrollTo({
        left: scrollLeft - container.clientWidth,
        behavior: 'smooth',
      });
      setScrollLeft((prev) => prev - container.clientWidth);
    } else {
      container.scrollTo({
        left: scrollLeft + container.clientWidth,
        behavior: 'smooth',
      });
      setScrollLeft((prev) => prev + container.clientWidth);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex flex-nowrap snap-x snap-start overflow-hidden"
      >
        {/* Imágenes del carrusel */}
        <div className="w-full flex-shrink-0 snap-center">
          <img src={`${imagen1}`} alt="Imágenes 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex-shrink-0 snap-center">
          <img src={`${imagen2}`} alt="Imágenes 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex-shrink-0 snap-center">
          <img src={`${imagen3}`} alt="Imágenes 3" className="w-full h-full object-cover" />
        </div>
        {/* Agrega más imágenes según sea necesario */}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        onClick={() => handleScroll('left')}
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        onClick={() => handleScroll('right')}
      >
        →
      </button>
    </div>
  );
};

export default ComponentCarrusel;
