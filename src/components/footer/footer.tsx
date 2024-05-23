import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import kaosLogo from "./logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="mb-4">
            <Image src={kaosLogo} alt="Kaos Records" width={100} height={100} />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">Kaos Records</p>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:ml-8">
            <h3 className="text-lg font-semibold mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Quem somos</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Carreiras</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Imprensa</a></li>
            </ul>
          </div>
          <div className="md:ml-8">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Suporte</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-400 transition duration-300">Atendimento</a></li>
            </ul>
          </div>
          <div className="md:ml-8">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition duration-300 flex items-center">
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition duration-300 flex items-center">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition duration-300 flex items-center">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8">&copy; 2024 Kaos Records. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
