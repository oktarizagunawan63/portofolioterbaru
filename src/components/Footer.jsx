import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 border-t border-accent/20 bg-gradient-to-b from-transparent to-accent/5">
      <div className="section py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Zhaabeer
              </span>
            </div>
            <p className="text-ink/70 text-sm">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-ink/70 hover:text-primary text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-ink/70 hover:text-primary text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-ink/70 hover:text-primary text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
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
              <a
                href="mailto:your@email.com"
                className="p-3 rounded-lg bg-accent/20 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink/70 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Zhaabeer. Built with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> and React
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
          >
            Back to top
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
