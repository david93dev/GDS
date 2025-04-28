export function ClientsSection() {
    return (
      <section className="bg-gray-100 py-2">
        <div className="container mx-auto text-center justify-center items-center">
          <h2 className="text-3xl font-bold mb-11">Conheça alguns de nossos clientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-24">
            <img src="./cliente1.jpg" alt="Cliente 1" className="mx-auto h-20 object-contain hover:scale-105 transition" />
            <img src="./cliente2.png" alt="Cliente 2" className="mx-auto h-20 object-contain hover:scale-105 transition" />
            <img src="./cliente3.jpg" alt="Cliente 3" className="mx-auto h-20 object-contain hover:scale-105 transition" />
            <img src="./cliente4.jpeg" alt="Cliente 4" className="mx-auto h-20 object-contain hover:scale-105 transition" />
          </div>
        </div>
      </section>
    );
  }
  