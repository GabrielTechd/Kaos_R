import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contatos</h3>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <p>Goiânia – GO</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <p>Rio de Janeiro – RJ</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-400" />
              <p>(62) 3241-3126</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-400" />
              <p>(21) 3217-6597</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold">Solicite seu orçamento</h3>
            <p className="text-gray-400">Seja um evento ao ar livre ou em um espaço fechado, cuidamos de cada aspecto da montagem para transformar seu evento em realidade.</p>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8">&copy; Copyright 2024 Kaos Records. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
