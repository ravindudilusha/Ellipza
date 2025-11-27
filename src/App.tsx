import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { Industries } from "./components/Industries";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}