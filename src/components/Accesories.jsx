function Accesories(props) {
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
              {props.model}
            </h2>
          </header>

          <footer className="flex flex-col flex-grow justify-end pb-20">
            <div className="flex gap-x-6 mx-auto">
              <a
                class="border-[3px] border-black bg-black text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors duration-300 hover:border-gray-800 hover:bg-gray-800"
                href="#"
              >
                Comprar ahora
              </a>
            </div>
          </footer>
        </div>

        <footer
          class="py-3 px-10 flex justify-center items-center absolute bottom-0 w-full z-40 text-gray-600 text-xs font-medium"
          id="landing-footer"
        >
          <nav>
            <ul class="flex [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-2">
              <li>
                <a href="#">Tesla © 2023</a>
              </li>
              <li>
                <a href="#">Privacidad y legal</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">Noticias</a>
              </li>
              <li>
                <a href="#">Seguir informado</a>
              </li>
              <li>
                <a href="#">Localización de tiendas</a>
              </li>
            </ul>
          </nav>
        </footer>

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

export default Accesories;
