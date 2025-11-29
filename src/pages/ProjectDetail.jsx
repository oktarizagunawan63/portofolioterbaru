import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle, Zap, Target } from "lucide-react";
import { getProjectById } from "../data/projects";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:text-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-paper"></div>
        </div>

        <div className="relative section h-full flex flex-col justify-end pb-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="absolute top-8 left-4 md:left-12 flex items-center gap-2 text-white hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {project.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section py-12">
        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {project.demoLink && project.demoLink !== "#" && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                <ExternalLink size={18} />
                View Live Demo
              </a>
            )}
            {project.githubLink && project.githubLink !== "#" && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
              >
                <Github size={18} />
                View Source Code
              </a>
            )}
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <div className="prose prose-lg max-w-none text-ink/80 whitespace-pre-line">
              {project.fullDesc}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h2 className="text-3xl font-bold">Key Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20"
                >
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span className="text-ink/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-secondary/10">
                <Zap className="text-secondary" size={24} />
              </div>
              <h2 className="text-3xl font-bold">Technologies Used</h2>
            </div>
            <div className="space-y-4">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="p-4 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                  <h3 className="text-lg font-semibold text-primary mb-3 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white border border-accent/30 text-sm font-medium text-ink/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Outcomes */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Challenges</h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-ink/80"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <CheckCircle className="text-secondary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Outcomes</h2>
              </div>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-ink/80"
                  >
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center pt-8 border-t border-accent/20"
          >
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
