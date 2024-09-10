import About from "./Components/About";
import Contact from "./Components/Contact";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import OurMission from "./Components/OurMission";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 
    antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      </div>
      <div className="container mx-auto px-8">
        < Navbar />
        < Hero />
        < About />
        < OurMission />

        < Experiences />
        < Projects />
        < Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;

