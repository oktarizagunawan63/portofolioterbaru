import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

const amsarStack = ["React", "Laravel 11", "Laravel Sanctum", "MySQL", "Zustand", "Recharts"];

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="section py-16">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.experienceTitle}</h2>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-5 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-3 rounded-xl bg-primary/20 flex-shrink-0">
              <Briefcase className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-semibold leading-tight">{t.amsarRole}</h3>
              <p className="text-primary font-medium text-sm md:text-base">PT Amsar Prima Mandiri</p>
            </div>
          </div>
          <span className="self-start px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs md:text-sm font-medium whitespace-nowrap">
            {t.amsarPeriod}
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {t.amsarBullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink/80 text-sm md:text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {amsarStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-white border border-primary/20 text-xs md:text-sm font-medium text-ink/80">
                {tech}
              </span>
            ))}
          </div>
          <Link
            to="/project/amsar-project-monitoring"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            {t.viewCaseStudy}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Motion.div>
    </section>
  );
}
