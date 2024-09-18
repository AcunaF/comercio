export default function Header() {
    return (
      <div className="m-5 p-5  rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white-300 mt-10 mb-4 text-center">
       TIENDA DE BEBIDAS • EVENTOS • CATAS •DEGUSTACIONES        </h1>
        <img
          className="w-full h-auto rounded-lg border-4 border-yellow-300 shadow-xl"
          src={`/cava1220/header/celebrar.jpg`}
          alt="Celebración"
        />
      </div>
    );
  }
  