import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
