import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import OurMission from "./Components/OurMission";
import Projects from "./Components/Programs";
import MuktoHeader from "./Layout/MuktoHeader";

import "./App.css";
import Impact from "./Components/Impact";
import BsHeader from "./Layout/BsHeader";
import Home from "./Sections/Home";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BsHeader />
      <div className="container mx-auto px-2 ">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        {/* < Hero />
        < Impact />
        < About />
        < OurMission />
        < Projects />
        < Contact />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
