import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import { navLinks, profile } from "../public/data.js";

export default function App() {
  const { navLinks, profile } = window.cvData;
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.title = `${profile.titleSite}`;
  }, []);

  // Highlight nav link based on scroll position
  useEffect(() => {
    const ids = navLinks.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Navbar activeSection={activeSection} />

      <main className="max-w-3xl mx-auto px-5 pt-24 pb-28 space-y-20">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
