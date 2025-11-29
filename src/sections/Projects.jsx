import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedTabs from "../components/AnimatedTabs";
import GradientCard from "../components/GradientCard";
import { projects, getProjectsByCategory } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigate = useNavigate();

  const categories = ["Semua Proyek", "Full Stack", "Frontend", "Machine Learning"];
  const categoryFilters = ["all", "fullstack", "frontend", "ml"];

  const filteredProjects = getProjectsByCategory(categoryFilters[activeCategory]);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="section py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyek Saya</h2>
        <p className="text-ink/70 max-w-3xl text-lg">
          Koleksi proyek yang menampilkan kemampuan saya dalam pengembangan web dan machine learning.
          Setiap proyek mendemonstrasikan kemampuan problem-solving dan keahlian teknis.
        </p>
      </motion.div>

      {/* Animated Tabs */}
      <AnimatedTabs tabs={categories} onTabChange={setActiveCategory} />

      {/* Projects Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <GradientCard
            key={project.id}
            {...project}
            desc={project.shortDesc}
            link={project.demoLink}
            onDetailClick={() => handleProjectClick(project.id)}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-ink/50"
        >
          <p className="text-lg">Belum ada proyek dalam kategori ini.</p>
        </motion.div>
      )}
    </section>
  );
}
