import { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const images = [
  './img1.jpg',
  './img2.jpg',
  './img3.jpg',
  './img4.jpg',
];

export function MainBanner() {
  const [current, setCurrent] = useState(0);

  // Avança para a próxima imagem
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Volta para a imagem anterior
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Troca automática a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-200"
        style={{ backgroundImage: `url(${images[current]})` }}
      ></div>

      {/* Botão Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <IoIosArrowBack />
      </button>

      {/* Botão Próximo */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <IoIosArrowForward />
      </button>
    </section>
  );
}
