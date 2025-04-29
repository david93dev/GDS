export function LocationSection() {
    return (
      <section className="w-full  bg-gray-100 py-32 px-4" id="localizacao">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-gray-700 mb-6">
            R. Profa. Natalícia Ramos Vieira, 04 - Jardim Paulistano, Campina Grande - PB, 58415-170
          </p>
  
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Localização no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.814065692559!2d-35.90883512410189!3d-7.121832992918449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1a3ab807dd0f%3A0xe08c99884c4710f!2sR.%20Profa.%20Natal%C3%ADcia%20Ramos%20Vieira%2C%204%20-%20Jardim%20Paulistano%2C%20Campina%20Grande%20-%20PB%2C%2058415-170!5e0!3m2!1spt-BR!2sbr!4v1714412234807!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  