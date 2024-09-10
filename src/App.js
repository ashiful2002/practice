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
    antialiased selection:bg-red-300 selection:text-red-900 selection:rounded-md">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#2E073F_40%,#7A1CAC_100%)]"></div>

      </div>
      <div className="container mx-auto px-2">
        < Navbar />
        < Hero />
        < About />
        < OurMission />

        < Projects />
        < Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;




