import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-20 mb-5">
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <Link href="/">
        <h1 className="text-2xl font-bold text-red-500 mb-4 md:mb-0">Sizzlie</h1>
        </Link>
        <div className="flex items-center w-full md:w-auto justify-between">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-1 w-full md:w-2/3"
          />
          <Link
            href="/cart"
            className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition duration-200 ml-4"
          >
            <FaShoppingCart className="text-white hover:bg-red-600" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

