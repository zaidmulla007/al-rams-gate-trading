import { LanguageProvider } from "./context/LanguageContext";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ManufactureAndSales from "./components/ManufactureAndSales";
import Collections from "./components/Collections";
import Craftsmanship from "./components/Craftsmanship";
import WhyChooseUs from "./components/WhyChooseUs";
import Stores from "./components/Stores";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <ManufactureAndSales />
      <Collections />
      <Craftsmanship />
      <WhyChooseUs />
      <Stores />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}
