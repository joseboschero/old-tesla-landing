import BackgroundVideo from "./BackgroundVideo";

function HeroSection() {
  return (
    <>
      <section
        className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden"
        data-header-color="white"
      >
        <div className="z-30 relative h-full flex flex-col">
          <header>
            <h2 className="text-white pt-40 text-[40px] font-medium">
              Disfrute de Tesla
            </h2>
            <p className="text-white text-base text-sm">
              Programe una prueba de conducción hoy mismo
            </p>
          </header>

          <footer className="flex flex-col flex-grow justify-end pb-20">
            <div>
              <a
                className="border-[3px] text-sm rounded font-medium bg-white/5 backdrop-blur-md border-white text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors duration-300"
                href="#"
              >
                Prueba de conducción
              </a>
            </div>
          </footer>
        </div>
        <BackgroundVideo />
      </section>
    </>
  );
}

export default HeroSection;
