export function ClientsSection() {
  return (
    <section className="bg-gray-100 py-16 w-full mb-32">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Conheça alguns de nossos clientes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          <img
            src="./cliente1.jpg"
            alt="Cliente 1"
            className="mx-auto h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src="./cliente2.png"
            alt="Cliente 2"
            className="mx-auto h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src="./cliente3.jpg"
            alt="Cliente 3"
            className="mx-auto h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <img
            src="./cliente4.jpeg"
            alt="Cliente 4"
            className="mx-auto h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
