import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

const Servicos: React.FC = () => {
  // Definição dos serviços
  const servicos = [
    {
      title: 'Produção de Vídeo',
      description: 'Crie videoclipes e conteúdo visual de alta qualidade.',
      imageUrl: '/imagensH/btmeianoite.png',
    },
    {
      title: 'Edição de Áudio',
      description: 'Aprimore a qualidade do áudio dos seus projetos.',
      imageUrl: '/imagensH/djdd.png',
    },
    {
      title: 'Cobertura de Eventos',
      description: 'Registre momentos especiais com vídeos profissionais.',
      imageUrl: '/imagensH/Dj.png',
    },
    {
      title: 'Fotografia Profissional',
      description: 'Capture momentos incríveis com nossa equipe de fotógrafos profissionais.',
      imageUrl: '/imagensH/mina1.png',
    },
    {
      title: 'Mixagem e Masterização',
      description: 'Aperfeiçoe seu som com nossa expertise em mixagem e masterização.',
      imageUrl: '/imagensH/mina2.png',
    },
    {
      title: 'Design Gráfico',
      description: 'Crie identidades visuais impactantes para seus projetos musicais.',
      imageUrl: '/imagensH/mnbt.png',
    },
  ];

  return (
    <section className="bg-stone-950 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Nossos Serviços</h2>
          <p className="text-lg md:text-xl text-gray-300">
            A Kaos Records oferece uma ampla gama de serviços de áudio e visual para atender às necessidades de artistas e eventos. Desde a produção de videoclipes até a cobertura de festivais, estamos aqui para dar vida à sua visão.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicos.map((servico, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image src={servico.imageUrl} alt={servico.title} layout="fill" objectFit="cover" className="rounded-t-lg" priority />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{servico.title}</h3>
                <p className="text-gray-400">{servico.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full flex items-center mx-auto transition duration-300 hover:bg-gray-300 hover:text-gray-900">
            <FaCalendarAlt className="mr-2" /> Agende uma Consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
