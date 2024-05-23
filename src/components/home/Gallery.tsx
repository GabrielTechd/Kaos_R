import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const images = [
    { src: '/imagensH/btmeianoite.png', alt: 'Imagem 1', description: 'Batalha da meia noite' },
    { src: '/imagensH/Dj.png', alt: 'Imagem 2', description: 'Cultura de Rua' },
    { src: '/imagensH/djdd.png', alt: 'Imagem 3', description: 'Sessão de Produção' },
    { src: '/imagensH/mina1.png', alt: 'Imagem 4', description: 'Cultura de Rua' },
    { src: '/imagensH/mina2.png', alt: 'Imagem 5', description: 'Garotas no mike' },
    { src: '/imagensH/mnbt.png', alt: 'Imagem 6', description: 'Show de rimas' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center py-12 text-white bg-black">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center font-sans">Sobre a Kaos Records</h2>
      <p className="text-lg md:text-xl mb-12 max-w-3xl text-center font-light">
        A Kaos Records é mais do que uma produtora musical. É um movimento, uma expressão da cultura urbana e do estilo de vida underground. Nossa missão é trazer a autêntica voz das ruas para o mundo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="w-80 h-80 md:w-96 md:h-96 relative rounded-lg overflow-hidden">
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-center text-white text-lg font-semibold">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
