import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src="./logo8.png" alt="Logo" className="h-24 w-auto" />
          <div className="flex flex-col justify-center ml-1">
          <span className="text-2xl font-semibold">GDS Informática</span>
          <p>Qualidade e eficiência em tudo que faz </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-300 transition hover:underline">Home</a>
          <a href="#" className="hover:text-gray-300 transition hover:underline">Serviços</a>
          <a href="#" className="hover:text-gray-300 transition hover:underline">Sobre nós</a>
          <a href="#" className="hover:text-gray-300 transition hover:underline">Contato</a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 backdrop-blur-md p-4 space-y-2">
          <a href="#" className="block text-gray-100 hover:text-white">Home</a>
          <a href="#" className="block text-gray-100 hover:text-white">Serviços</a>
          <a href="#" className="block text-gray-100 hover:text-white">Sobre nós</a>
          <a href="#" className="block text-gray-100 hover:text-white">Contato</a>
        </div>
      )}
    </header>
  );
}
