import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 border-t border-accent/20 bg-gradient-to-b from-transparent to-accent/5">
      <div className="section py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">OG</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Oktariza Gunawan
              </span>
            </div>
            <p className="text-ink/70 text-sm">
              {t.footerDescription}
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">{t.connect}</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/oktarizagunawan63"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-accent/20 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/oktarizagunawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-accent/20 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink/70 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Oktariza Gunawan{" "}
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
          >
{t.backToTop}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all"
            >
              <ArrowUp size={16} />
            </motion.div>
          </button>
        </div>
      </div>
    </footer>
  );
}
