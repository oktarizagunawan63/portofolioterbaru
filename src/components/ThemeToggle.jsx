import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ThemeToggle() {
  const { isEnglish } = useLanguage();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  // Several toggles exist (desktop navbar, mobile navbar): all follow the <html> class, whoever changed it
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => setDark(html.classList.contains("dark")));
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* storage blocked: keep for this visit only */ }
  };

  const label = dark
    ? (isEnglish ? "Switch to light mode" : "Ganti ke mode terang")
    : (isEnglish ? "Switch to dark mode" : "Ganti ke mode gelap");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="p-2.5 rounded-full bg-accent/10 border border-accent/20 text-primary hover:bg-accent/20 transition-colors"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
