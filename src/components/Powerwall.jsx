function Powerwall(props) {
  return (
    <>
      <section
        className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden"
        data-header-color="black"
        id={props.idHref}
      >
        <div className="z-30 relative h-full flex flex-col">
          <header>
            <h2 className="text-black pt-40 text-[40px] font-medium">
              Solar y {props.model}
            </h2>
            <p className="text-black text-base">Energía para todos</p>
          </header>

          <footer className="flex flex-col flex-grow justify-end pb-20">
            <div className="flex gap-x-6 mx-auto">
              <a
                className="border-[3px] border-gray-800 bg-gray-800 text-sm rounded font-medium text-white px-16 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500"
                href="#"
              >
                Saber más
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 h-full w-full z-10">
          <img
            src={props.img}
            alt={props.model}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}

export default Powerwall;
