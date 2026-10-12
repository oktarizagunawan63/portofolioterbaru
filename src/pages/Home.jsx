import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../sections/Experience";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
