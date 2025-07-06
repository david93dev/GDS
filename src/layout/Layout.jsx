import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo-nav.png";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="logo empresa" className="h-8 w-auto px-1" />
              <span className="ml-2 text-2xl font-bold tracking-wide text-gray-100 uppercase">
                GDS
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-8">
              <li>
                <Link
                  to="/"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Contato
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-50 bg-gray-900 px-4 py-5">
                  <div className="flex items-center justify-between mb-4">
                    <Link to="/" className="inline-flex items-center">
                      <img src={logo} alt="logo empresa" className="h-8 w-auto px-1" />
                      <span className="ml-2 text-2xl font-bold tracking-wide text-gray-100 uppercase">
                        GDS
                      </span>
                    </Link>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          className="block text-gray-100 hover:text-teal-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Produtos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="block text-gray-100 hover:text-teal-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Serviços
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="block text-gray-100 hover:text-teal-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Quem Somos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="block text-gray-100 hover:text-teal-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contato
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
