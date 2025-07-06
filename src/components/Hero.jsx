import logo from "../assets/images/logo-nav.png";

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <div className="flex flex-col justify-center items-center py-10">
                <img src={logo} alt="logo hero" className="w-50 h-auto" />
                <h1 className="text-white text-8xl font-extrabold">GDS</h1>
            </div>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Qualidade e Eficiência
            <br className="hidden md:block" />
            em Tudo que Faz{" "}
          </h2>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
            Desde 1997, a GDS Informática é especialista no desenvolvimento de
            softwares para indústria e comércio, oferecendo também manutenção em
            redes e computadores. Soluções completas com foco em desempenho e
            confiabilidade.
          </p>

          <button className="bg-blue-400 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Saiba Mais
          </button>

          <p className="m-8 max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
            Clique em "Saiba mais" e descubra tudo sobre nossos softwares
            personalizados, serviços técnicos e a trajetória de mais de 25 anos
            da GDS Informática no mercado.
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
