import { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const images = [
  './img1.jpg',
  './img2.jpg',
  './img3.jpg',
  './img4.jpg',
];

export function MainBanner() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false); // Desativa o fade antes de trocar
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true); // Ativa o fade novamente
    }, 100); // Pequeno delay para aplicar transição
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[450px] overflow-hidden mx-auto mb-4 bg-gray-100 shadow-lg">
      {/* Imagem com transição de opacidade suave */}
      <div
        className={`w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-[10000ms] ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${images[current]})` }}
      ></div>

      {/* Botão Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <IoIosArrowBack size={24} />
      </button>

      {/* Botão Próximo */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-[4px] w-8 rounded-full transition-all duration-300 ${index === current ? 'bg-white' : 'bg-white/50'}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
