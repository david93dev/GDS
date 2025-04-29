import { FaWhatsapp } from "react-icons/fa";

export function Budget() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center mb-32 bg-gray-100">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url('./img1.jpg')` }}
      ></div>

      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center bg-gray-700 bg-opacity-80 py-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Solicite um <span className="text-orange-500">Orçamento!</span>
        </h1>
        <p className="text-white font-medium mb-6">
          Entre em contato sem compromisso. Agende uma visita presencial ou solicite uma demonstração remota personalizada.
        </p>
        <div className="flex justify-center">
          <button className="bg-green-500 text-white px-6 py-2 text-lg font-bold rounded flex items-center gap-2 hover:bg-green-600 transition">
            <FaWhatsapp size={22} /> Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}
