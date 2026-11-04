import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";
import AnimatedCounter from "../components/AnimatedCounter";
import amsarLogo from "../assets/logo-amsar.png";
import unpamLogo from "../assets/logo-unpam.png";

// Real logos of what each skill area is built with, instead of generic icons
const areaLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", name: "Laravel" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
];

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const stats = [
    { value: 8, label: t.projectsCount, color: "primary", suffix: "" },
    { value: 11, label: t.technologies, color: "secondary", suffix: "" },
    { value: 2, label: t.yearsCoding, color: "primary", suffix: "+" },
    { value: 1, label: t.dedication, color: "secondary", suffix: "" },
  ];

  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
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
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            <p className="text-ink/70 mt-2 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Bento Grid */}
      <BentoGrid>
        {/* What I Do Card */}
        <BentoCard className="md:col-span-2 md:row-span-2">
          <div className="flex flex-col h-full">
            <h3 className="text-lg md:text-2xl font-semibold leading-tight mb-3 md:mb-4">
              {t.whatIDo}
            </h3>
            <p className="text-ink/70 leading-relaxed text-sm md:text-base mb-4 md:mb-5">
              {t.whatIDoDescription}
            </p>
            <ul className="space-y-3 flex-1">
              {t.whatIDoItems.map((item, i) => (
                <li key={item.title} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-surface/70">
                  <img src={areaLogos[i].src} alt={areaLogos[i].name} className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="block font-semibold text-sm md:text-base">{item.title}</span>
                    <span className="block text-ink/70 text-xs md:text-sm leading-relaxed">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </BentoCard>

        {/* Fast Performance Card */}
        <BentoCard className="min-h-[180px] md:min-h-[220px]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img src={amsarLogo} alt="Logo PT Amsar Prima Mandiri" className="w-14 h-14 md:w-16 md:h-16 object-contain mb-3 dark:brightness-[2.4]" />
            <h3 className="text-base md:text-lg font-semibold mb-1">{t.internLabel}</h3>
            <p className="text-xs md:text-sm text-ink/70">{t.performanceKey}</p>
          </div>
        </BentoCard>

        {/* Modern Stack Card */}
        <BentoCard className="min-h-[180px] md:min-h-[220px]">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img src={unpamLogo} alt="Logo Universitas Pamulang" className="w-14 h-14 md:w-16 md:h-16 object-contain mb-3" />
            <h3 className="text-base md:text-lg font-semibold mb-1">{t.gradLabel}</h3>
            <p className="text-xs md:text-sm text-ink/70">{t.latestTech}</p>
          </div>
        </BentoCard>

        {/* Tech Stack Card */}
        <BentoCard className="md:col-span-2 min-h-[280px] md:min-h-[320px]">
          <div className="h-full flex flex-col">
            <h3 className="text-base md:text-xl font-semibold mb-4 md:mb-6">{t.techStack}</h3>
            <div className="flex-1 flex flex-col justify-center gap-3 md:gap-4">
              {[techStack.slice(0, 6), techStack.slice(6)].map((row, r) => (
                <div key={r} className="marquee overflow-hidden">
                  {/* 4 copies so the track is always wider than the card; it scrolls by half for a seamless loop */}
                  <div className={`marquee-track flex w-max gap-2 md:gap-3 ${r ? "marquee-right" : "marquee-left"}`}>
                    {[0, 1, 2, 3].flatMap((copy) =>
                      row.map((tech) => (
                        <div
                          key={`${copy}-${tech.name}`}
                          aria-hidden={copy > 0}
                          className="w-20 md:w-24 flex-shrink-0 flex flex-col items-center justify-center gap-1 md:gap-2 p-2 md:p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors"
                          title={tech.name}
                        >
                          <img src={tech.icon} alt={copy ? "" : tech.name} className="w-7 h-7 md:w-10 md:h-10 object-contain" />
                          <span className="text-[9px] md:text-xs text-ink/70 text-center font-medium leading-tight">
                            {tech.name}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
