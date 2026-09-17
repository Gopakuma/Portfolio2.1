// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import Experience from "./components/Experience";
import SelectedWork from "./components/SelectedWork";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white pb-20">
      <Navbar />
      <Hero />
      <QuickLinks />
      <Experience />
      <SelectedWork />
      <CTA />
      <Footer />
    </div>
  );
}