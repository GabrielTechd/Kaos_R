import React from 'react';
import Button from '../botoes/Button';
import Gallery from './Gallery';

const SobreHome: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <main className="z-10 mb-20 flex flex-col items-center justify-center pt-20">
        <Gallery />
        <Button href="/sobre">
          Saiba Mais
        </Button>
      </main>
    </div>
  );
};

export default SobreHome;
