export function Products() {
  return (
    <section className="relative w-full h-screen items-center justify-center mx-auto bg-gray-100 my-32 ">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nossos Produtos e Serviços</h1>
        <p className="text-lg text-gray-600">
          Conheça nossos produtos e serviços de alta qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <article className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105">
          <img
            className="w-full h-60 object-cover"
            src="./comercial.jpg"
            alt="Produto 1"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2"> Sistema Comercial</h2>
            <p className="text-gray-700">Soluções completas para gestão de vendas, estoque, clientes e financeiro, ideais para comércios de pequeno a grande porte que buscam eficiência e controle em tempo real.</p>
          </div>
        </article>
        <article className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105">
          <img
            className="w-full h-60 object-cover"
            src="./Industrial.jpg"
            alt="Produto 1"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Sistema Industrial</h2>
            <p className="text-gray-700">Plataforma robusta voltada para controle de produção, processos, ordens de serviço e indicadores de desempenho, atendendo às necessidades específicas da indústria com automação e precisão.</p>
          </div>
        </article>
        <article className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform hover:scale-105">
          <img
            className="w-full h-60 object-cover"
            src="./tecnico.jpg"
            alt="Produto 1"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Assistência Técnica para Computadores e Notebooks</h2>
            <p className="text-gray-700">Serviços especializados em manutenção preventiva e corretiva, formatação, upgrades e diagnóstico técnico, garantindo performance e confiabilidade para seus equipamentos.</p>
          </div>
        </article>

     
      </div>
    </section>
  );
}
