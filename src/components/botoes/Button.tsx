import React from 'react';
import Link from 'next/link'; // Importando a tag Link

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // URL de destino é opcional
  onClick?: () => void; // Evento onClick é opcional
}

const Button: React.FC<ButtonProps> = ({ children, href, onClick }) => {
  // Verificando se há uma URL de destino fornecida
  if (href) {
    return (
      <div className="text-center mt-16">
        <Link href={href} passHref> {/* Usando a propriedade passHref */}
          <div className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full flex items-center mx-auto transition duration-300 hover:bg-gray-300 hover:text-gray-900">
            {children}
          </div>
        </Link>
      </div>
    );
  }

  // Caso não haja URL de destino, retornamos apenas o botão sem link
  return (
    <div className="text-center mt-16">
      <button 
        className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full flex items-center mx-auto transition duration-300 hover:bg-gray-300 hover:text-gray-900"
        onClick={onClick} // Adicionando o evento onClick, se existir
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
