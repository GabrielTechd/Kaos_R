import React from 'react';
import { FaPlayCircle, FaHeadphones } from 'react-icons/fa';

const Homepage: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Conteúdo */}
      <div className="absolute z-10 text-white text-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Bem-vindo à Kaos Records</h1>
        <p className="text-lg md:text-xl mb-6">Sua fonte de áudio e visual.</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Experimente algo novo</h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-transparent text-white font-semibold py-3 px-6 border border-white rounded flex items-center transition duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent">
            <FaPlayCircle className="mr-2" /> Ver Catálogo
          </button>
          <button className="bg-transparent text-white font-semibold py-3 px-6 border border-white rounded flex items-center transition duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent">
            <FaHeadphones className="mr-2" /> Entrar em Contato
          </button>
        </div>
      </div>

      {/* Vídeo de fundo */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          preload="auto" 
          poster="/imagensH/bgkaos.jpg" 
          style={{ opacity: 0.07, backdropFilter: "blur(90%)" }}
        >
          <source src="/AninKaos.mp4" type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    </div>
  );
};

export default Homepage;
