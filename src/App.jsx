import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ChargeSection from "./components/ChargeSection";
import ChargeSectionV2 from "./components/ChargeSectionV2";
import Powerwall from "./components/Powerwall";
import Accesories from "./components/Accesories";

function App() {
  return (
    <>
      <Header />

      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth overflow-x-hidden">
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <ChargeSection idHref="model-s" model="Model S" img="/model-s.avif" />
        </div>
        <div className="snap-center">
          <ChargeSection idHref="model-3" model="Model 3" img="/model-3.avif" />
        </div>
        <div className="snap-center">
          <ChargeSectionV2
            idHref="model-x"
            model="Model X"
            img="/model-x.avif"
          />
        </div>
        <div className="snap-center">
          <ChargeSectionV2
            idHref="model-y"
            model="Model Y"
            img="/model-y.avif"
          />
        </div>
        <div className="snap-center">
          <Powerwall
            idHref="powerwall"
            model="Powerwall"
            img="/powerwall.avif"
          />
        </div>
        <div className="snap-center">
          <Accesories
            idHref="accesorios"
            model="Accesorios"
            img="/accessories.avif"
          />
        </div>
      </main>
    </>
  );
}

export default App;
