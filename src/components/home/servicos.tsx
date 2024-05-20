import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Servicos: React.FC = () => {
  // Definição dos serviços
  const servicos = [
    {
      title: 'Produção de Vídeo',
      description: 'Crie videoclipes e conteúdo visual de alta qualidade.',
      imageUrl: '/imagnesH/btmeianoite.png',
    },
    {
      title: 'Edição de Áudio',
      description: 'Aprimore a qualidade do áudio dos seus projetos.',
      imageUrl: '/imagnesH/djdd.png',
    },
    {
      title: 'Cobertura de Eventos',
      description: 'Registre momentos especiais com vídeos profissionais.',
      imageUrl: '/imagnesH/Dj.png',
    },
    {
      title: 'Fotografia Profissional',
      description: 'Capture momentos incríveis com nossa equipe de fotógrafos profissionais.',
      imageUrl: '/imagnesH/btmeianoite.png',
    },
    {
      title: 'Mixagem e Masterização',
      description: 'Aperfeiçoe seu som com nossa expertise em mixagem e masterização.',
      imageUrl: '/imagnesH/btmeianoite.png',
    },
    {
      title: 'Design Gráfico',
      description: 'Crie identidades visuais impactantes para seus projetos musicais.',
      imageUrl: '/imagnesH/btmeianoite.png',
    },
  ];

  return (
    <section className="bg-stone-950 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Nossos Serviços</h2>
          <p className="text-lg md:text-xl mb-12 text-white font-light">
            A Kaos Records oferece uma ampla gama de serviços de áudio e visual para atender às necessidades de artistas e eventos. Desde a produção de videoclipes até a cobertura de festivais, estamos aqui para dar vida à sua visão.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {servicos.map((servico, index) => (
              <div key={index} className="flex-none w-full md:w-1/3">
                <div className="relative rounded-lg overflow-hidden" style={{ paddingBottom: '100%' }}>
                  <img src={servico.imageUrl} alt={servico.title} className="absolute inset-0 w-au h-full object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{servico.title}</h3>
                <p className="text-sm text-gray-400">{servico.description}</p>
              </div>
            ))}
            {/* Botão */}
            <div className="flex-none w-full md:w-1/3">
              <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full flex items-center transition duration-300 hover:bg-gray-300 hover:text-gray-900">
                <FaCalendarAlt className="mr-2" /> Agende uma Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
