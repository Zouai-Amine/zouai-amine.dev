
import About from "../../components/About";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import { ThemeProvider } from "../../components/ThemeProvider";
import ScrollIndicator from "../../components/ScrollIndicator";
import Contact from "../../components/Contact";
import BackToTop from "../../components/BackToTop";


export default function Home() {
  return (
    <ThemeProvider>
      <ScrollIndicator />
      <BackToTop />
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
