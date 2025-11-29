import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { Code2, Rocket, Brain, Zap } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Tailwind", "Vite"] },
    { category: "Backend", items: ["Go", "PHP", "Node.js"] },
    { category: "Database", items: ["SQL", "PostgreSQL", "MySQL"] },
    { category: "Other", items: ["Python", "Machine Learning", "Git"] },
  ];

  return (
    <section id="about" className="section py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-ink/70 max-w-3xl text-lg">
          A passionate third-semester student with a keen interest in web development and motorcycles. 
          I love exploring clean UI designs and building high-performance applications. 
          Also interested in data science and machine learning for innovative projects.
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
          <p className="text-ink/70 mt-2 text-sm">Projects</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
        >
          <AnimatedCounter end={8} suffix="+" />
          <p className="text-ink/70 mt-2 text-sm">Technologies</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
        >
          <AnimatedCounter end={2} suffix="+" />
          <p className="text-ink/70 mt-2 text-sm">Years Coding</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
        >
          <AnimatedCounter end={100} suffix="%" />
          <p className="text-ink/70 mt-2 text-sm">Dedication</p>
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
              <h3 className="text-2xl font-semibold">What I Do</h3>
            </div>
            <p className="text-ink/70 leading-relaxed flex-1">
              I specialize in building web applications that are not only visually appealing but also 
              fast and smooth. From interactive frontends to robust backends, I handle the full stack. 
              My focus is on delivering clean code and memorable user experiences that make a difference.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Web Development
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                UI/UX Design
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                API Development
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
            <h3 className="text-lg font-semibold mb-2">Fast & Optimized</h3>
            <p className="text-sm text-ink/70">Performance is key</p>
          </div>
        </BentoCard>

        {/* Clean Code */}
        <BentoCard>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-3">
              <Rocket className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Modern Stack</h3>
            <p className="text-sm text-ink/70">Latest technologies</p>
          </div>
        </BentoCard>

        {/* Skills Grid */}
        <BentoCard className="md:col-span-2 md:row-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-secondary/10">
              <Brain className="text-secondary" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Tech Stack</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 overflow-auto max-h-[140px]">
            {skills.map((skill) => (
              <div key={skill.category}>
                <p className="text-sm font-semibold text-primary mb-2">{skill.category}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 rounded-md bg-accent/20 text-ink/80 whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
