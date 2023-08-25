function ChargeSection() {
  return (
    <>
      <section
        className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden"
        data-header-color="black"
      >
        <div className="z-30 relative h-full flex flex-col">
          <header>
            <h2 className="text-black pt-40 text-[40px] font-medium">
              Model Y
            </h2>
            <p className="text-black text-base">
              Concertar una prueba de conducción
            </p>
          </header>

          <footer className="flex flex-col flex-grow justify-end pb-20">
            <div className="flex gap-x-6 mx-auto">
              <a
                className="border-[3px] border-gray-600 hover:border-black bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-black hover:text-white transition-colors"
                href="#"
              >
                Explorar inventario
              </a>
              <a
                className="bg-white text-sm rounded font-medium text-black px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center"
                href="#"
              >
                Pedido personalizado
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 h-full w-full z-10">
          <img
            src="/model-s.avif"
            alt="Model S"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}

export default ChargeSection;
