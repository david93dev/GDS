
export function Navbar() {
  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
       <img src="./logo4.png" alt="Logo" className="h-20" />
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Serviços</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Sobre nós</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contato</a></li>
        </ul>
      </div>
    </nav>
    <nav className="bg-gray-700 p-2"> </nav>
    </>
    
  );
}