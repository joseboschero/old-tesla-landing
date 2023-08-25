import { useEffect } from "react";
import Logo from "./Logo";

function Header() {
  useEffect(() => {
    const headerEl = document.querySelector("#landing-header");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");

          headerEl.style.color = color;
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".landing-section");

    sections.forEach((section) => observer.observe(section));

    const listItem = document.querySelectorAll("#landing-header li");
    const menuBackDrop = document.querySelector("#menu-backdrop");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        menuBackDrop.style.setProperty("--left", `${left}px`);
        menuBackDrop.style.setProperty("--top", `${top}px`);
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`);
        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      });
    });
  }, []);

  return (
    <>
      <header
        id="landing-header"
        className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"
      >
        <div className="flex flex-grow basis-0">
          <Logo />
        </div>

        <nav>
          <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-400 [&>li>a]:font-medium [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li>
              <a href="">Model S</a>
            </li>
            <li>
              <a href="">Model 3</a>
            </li>
            <li>
              <a href="">Model X</a>
            </li>
            <li>
              <a href="">Model Y</a>
            </li>
            <li>
              <a href="">Powerwall</a>
            </li>
            <li>
              <a href="">Carga</a>
            </li>
          </ul>
        </nav>

        <nav className="flex flex-grow justify-end basis-0">
          <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-400 [&>li>a]:font-medium [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li>
              <a href="">Soporte</a>
            </li>
            <li>
              <a href="">Tienda</a>
            </li>
            <li>
              <a href="">Cuenta</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
          </ul>
        </nav>

        <div
          id="menu-backdrop"
          className={`absolute bg-black/5 backdrop-blur-lg rounded left-0 top-0 translate-x-[var(--left)] translate-y-[var(--top)] w-[var(--width)] h-[var(--height)] transition-all duration-400 ease-in-out opacity-0 -z-10`}
        ></div>
      </header>
    </>
  );
}

export default Header;
