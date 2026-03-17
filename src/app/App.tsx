import { GrainOverlay } from "./components/GrainOverlay";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { BentoGrid } from "./components/BentoGrid";
import { Activities } from "./components/Activities";
import { Schedule } from "./components/Schedule";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#050508", cursor: "none" }} className="min-h-screen">
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <BentoGrid />
      <Marquee reverse />
      <Activities />
      <Schedule />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}
