import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { Code2, Rocket, Brain, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import AnimatedCounter from "../components/AnimatedCounter";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const stats = [
    { value: 5, label: t.projects, color: "primary" },
    { value: 8, label: t.technologies, color: "secondary" },
    { value: 2, label: t.yearsCoding, color: "primary" },
    { value: 100, label: t.dedication, color: "secondary" },
  ];

  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ];

  const badges = [
    { label: t.webDevelopment, color: "primary" },
    { label: t.uiuxDesign, color: "secondary" },
    { label: t.apiDevelopment, color: "primary" },
  ];

  return (
    <section id="about" className="section py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.aboutTitle}</h2>
        <p className="text-ink/70 max-w-3xl text-lg">
          {t.aboutDescription}
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`text-center p-4 rounded-2xl bg-gradient-to-br from-${stat.color}/10 to-${stat.color}/5 border border-${stat.color}/20`}
          >
            <AnimatedCounter end={stat.value} suffix={stat.label === "Dedikasi" ? "%" : "+"} />
            <p className="text-ink/70 mt-2 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Bento Grid */}
      <BentoGrid>
        {/* What I Do Card */}
        <BentoCard className="md:col-span-2 md:row-span-2">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="p-2 md:p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <Code2 className="text-primary" size={20} />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold leading-tight">
                {t.whatIDo}
              </h3>
            </div>
            <p className="text-ink/70 leading-relaxed text-sm md:text-base mb-4 md:mb-6 flex-1">
              {t.whatIDoDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`px-2 md:px-3 py-1 rounded-full bg-${badge.color}/10 text-${badge.color} text-xs md:text-sm font-medium whitespace-nowrap`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Fast Performance Card */}
        <BentoCard className="min-h-[180px] md:min-h-[220px]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 mb-2 md:mb-3">
              <Zap className="text-secondary" size={24} />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              {t.fastOptimal}
            </h3>
            <p className="text-xs md:text-sm text-ink/70">{t.performanceKey}</p>
          </div>
        </BentoCard>

        {/* Modern Stack Card */}
        <BentoCard className="min-h-[180px] md:min-h-[220px]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-2 md:mb-3">
              <Rocket className="text-primary" size={24} />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              {t.modernStack}
            </h3>
            <p className="text-xs md:text-sm text-ink/70">{t.latestTech}</p>
          </div>
        </BentoCard>

        {/* Tech Stack Card */}
        <BentoCard className="md:col-span-2 min-h-[280px] md:min-h-[320px]">
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 rounded-xl bg-secondary/10 flex-shrink-0">
                <Brain className="text-secondary" size={18} />
              </div>
              <h3 className="text-base md:text-xl font-semibold">{t.techStack}</h3>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 flex-1">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-1 md:gap-2 p-2 md:p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-all cursor-pointer"
                  title={tech.name}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-7 h-7 md:w-10 md:h-10 object-contain"
                  />
                  <span className="text-[9px] md:text-xs text-ink/70 text-center font-medium leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
