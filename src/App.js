import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import OurMission from "./Components/OurMission";
import Projects from "./Components/Programs";
import MuktoHeader from "./Layout/MuktoHeader";

import "./App.css";
import BsHeader from "./Layout/BsHeader";
import Home from "./Sections/Home";
import Mission from "./Sections/Mission";
import Impact from "./Sections/Impact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BsHeader />
      <div className="container mx-auto px-2 ">
        <Home />
        <About />
        <Mission />
        <Impact />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
