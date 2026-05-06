import { useState } from "react";
// import { navLinks, profile } from "../../public/data";
import { scrollToSection } from "../utils/scroll";
import MenuIcon from "./icons/MenuIcon";
import XIcon from "./icons/XIcon";

export default function Navbar({ activeSection }) {
  const { navLinks, profile } = window.cvData;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection("about")}
          className="font-semibold text-stone-900 hover:text-stone-500 transition-colors text-sm"
        >
          {profile.name}
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1">
          {navLinks.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => scrollToSection(n.id)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  activeSection === n.id
                    ? "bg-stone-200 text-stone-900 font-medium"
                    : "text-stone-500 hover:text-stone-800 hover:bg-stone-100"
                }`}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-stone-100 transition-colors"
          aria-label="Deschide meniu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-5 py-3 flex flex-col gap-1">
          {navLinks.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                scrollToSection(n.id);
                setMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeSection === n.id
                  ? "bg-stone-200 text-stone-900 font-medium"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
