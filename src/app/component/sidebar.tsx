import React from 'react';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';

const Sidebar: React.FC = () => {
  return (
    <nav className="fixed h-screen bg-white ">
      {/* Home Icon */}
      <a
        href="#"
        className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-2 p-2 rounded-lg hover:bg-gray-200"
      >
        <AiOutlineHome className="text-2xl text-black" />
      </a>

      {/* Cart Icon */}
      <a
        href="#"
        className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-2 hover:bg-gray-200 p-2 rounded-lg"
      >
        <AiOutlineShoppingCart className="text-2xl text-black" />
      </a>
    </nav>
  );
};

export default Sidebar;
