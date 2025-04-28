export function Main() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
        <img src="./fachada.JPG" alt="Tecnologia" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Soluções inteligentes em tecnologia da informação</h1>
      <p className="text-lg mb-8">Qualidade, eficiência e confiança desde 1997.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Saiba mais
      </button>
    </div>
  );
}