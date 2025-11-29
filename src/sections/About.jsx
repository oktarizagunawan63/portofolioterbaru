import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { Code2, Rocket, Brain, Zap } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

export default function About() {
  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tentang Saya</h2>
        <p className="text-ink/70 max-w-3xl text-lg">
          Mahasiswa semester lima  yang passionate dengan minat besar dalam pengembangan web dan motor. 
          Saya suka mengeksplorasi desain UI yang bersih dan membangun aplikasi dengan performa tinggi. 
          Juga tertarik pada data science dan machine learning untuk proyek-proyek inovatif.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
        >
          <AnimatedCounter end={5} suffix="+" />
          <p className="text-ink/70 mt-2 text-sm">Proyek</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
        >
          <AnimatedCounter end={8} suffix="+" />
          <p className="text-ink/70 mt-2 text-sm">Teknologi</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
        >
          <AnimatedCounter end={2} suffix="+" />
          <p className="text-ink/70 mt-2 text-sm">Tahun Coding</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
        >
          <AnimatedCounter end={100} suffix="%" />
          <p className="text-ink/70 mt-2 text-sm">Dedikasi</p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <BentoGrid>
        {/* Large Card - What I Do */}
        <BentoCard className="md:col-span-2 md:row-span-2">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Apa yang Saya Lakukan</h3>
            </div>
            <p className="text-ink/70 leading-relaxed flex-1">
              Saya spesialisasi dalam membangun aplikasi web yang tidak hanya menarik secara visual tetapi juga 
              cepat dan smooth. Dari frontend interaktif hingga backend yang robust, saya menangani full stack. 
              Fokus saya adalah memberikan kode yang bersih dan pengalaman pengguna yang berkesan yang membuat perbedaan.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Pengembangan Web
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                Desain UI/UX
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Pengembangan API
              </span>
            </div>
          </div>
        </BentoCard>

        {/* Fast Performance */}
        <BentoCard>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 mb-3">
              <Zap className="text-secondary" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cepat & Optimal</h3>
            <p className="text-sm text-ink/70">Performa adalah kunci</p>
          </div>
        </BentoCard>

        {/* Clean Code */}
        <BentoCard>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-3">
              <Rocket className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Stack Modern</h3>
            <p className="text-sm text-ink/70">Teknologi terkini</p>
          </div>
        </BentoCard>

        {/* Tech Stack with Logos */}
        <BentoCard className="md:col-span-2 md:row-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-secondary/10">
              <Brain className="text-secondary" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Tech Stack</h3>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-all cursor-pointer group"
                title={tech.name}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                />
                <span className="text-xs text-ink/70 text-center font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
