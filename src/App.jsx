import "./index.css";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import ChargeSection from "./components/ChargeSection";

function App() {
  return (
    <>
      <Header />

      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth">
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <ChargeSection />
        </div>
        <div className="snap-center">
          <ChargeSection />
        </div>
        <div className="snap-center">
          <ChargeSection />
        </div>
        <div className="snap-center">
          <ChargeSection />
        </div>
        <div className="snap-center">
          <ChargeSection />
        </div>
      </main>
    </>
  );
}

export default App;
