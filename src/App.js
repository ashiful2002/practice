import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import OurMission from "./Components/OurMission";
import Projects from "./Components/Programs";
import MuktoHeader from './Layout/MuktoHeader'

import './App.css'

function App() {
  return (
    <div className="overflow-x-hidden">
      < MuktoHeader />
      <div className="container mx-auto px-2 ">

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




