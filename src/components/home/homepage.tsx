import React from 'react';
import { FaPlayCircle, FaHeadphones } from 'react-icons/fa';
import Gallery from './Gallery';

const Homepage: React.FC = () => {
  return (
    // Div principal que contém todo o conteúdo da página
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Conteúdo */}
      <div className="absolute z-10 text-white text-center">
        {/* Título principal */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Bem-vindo à Kaos Records</h1>
        {/* Descrição */}
        <p className="text-lg md:text-xl mb-6">Sua fonte de audio visual .</p>
        {/* Subtítulo */}
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Experimente algo novo</h2>

        {/* Botões */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Botão Ver Catálogo */}
          <button className="bg-transparent text-white font-semibold py-3 px-6 border border-white rounded flex items-center transition duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent">
            <FaPlayCircle className="mr-2" /> Ver Catálogo
          </button>
          {/* Botão Entrar em Contato */}
          <button className="bg-transparent text-white font-semibold py-3 px-6 border border-white rounded flex items-center transition duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent">
            <FaHeadphones className="mr-2" /> Entrar em Contato
          </button>
        </div>
      </div>

      {/* Sobreposição de texto no vídeo */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        {/* Vídeo de fundo */}
        <video className="w-full h-full object-cover" autoPlay loop muted style={{ opacity: 0.09, backdropFilter: "blur(90px)" }}>
          <source src="/AninKaos.mp4" type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>

      </div>
    </div>
  );
};

export default Homepage;
