import Loader from "./components/Loader";
import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import OpenSource from "./components/OpenSource";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

       <Loader />

      <MouseGlow />

      <Navbar />

      <Hero />

       <Marquee /> 

      <About />

      <Skills />

      <Projects />

      

      <OpenSource />

      <Timeline />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;