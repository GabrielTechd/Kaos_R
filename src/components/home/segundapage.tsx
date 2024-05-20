import React from 'react';
import Gallery from './Gallery';


const Segundahome: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <main className="z-10 flex flex-col items-center justify-center pt-20">
        <Gallery />
      </main>
    </div>
  );
};

export default Segundahome;
