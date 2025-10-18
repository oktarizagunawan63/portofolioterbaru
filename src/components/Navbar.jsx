import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-primary border-b border-accent/40" : "bg-primary"
      }`}>
      <nav className="section py-4 flex items-center justify-between text-white">
        <a href="#" className="no-underline">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent"></div>
            <span className="text-lg font-semibold">Zhaabeer Portfolio</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
        <a href="#contact" className="btn-primary hidden md:inline-flex bg-accent text-primary font-medium">
          Hire Me
        </a>
      </nav>
    </header>

  );
}
