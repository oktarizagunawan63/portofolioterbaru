import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePic from "../assets/zhaabeer.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section pt-20 pb-8 md:pb-16 md:min-h-screen flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full"
      >
        {/* Left: Text */}
        <div>
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium px-5 py-2 rounded-full mb-4 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Tersedia untuk freelance
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Halo, Saya{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Oktariza Gunawan
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-ink/80 mt-2 font-medium"
          >
            Pengembang Full Stack & Penggemar Teknologi
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base text-ink/70 max-w-lg leading-relaxed"
          >
            Saya berfokus mengembangkan aplikasi web yang cepat, bersih, dan fungsional Senang mengeksplorasi teknologi modern serta merancang pengalaman pengguna yang nyaman dan efisien. Terbiasa bekerja dengan{" "}
            <span className="text-secondary font-semibold">
              React, Tailwind CSS, Golang, Python,
            </span>{" "}
            serta berbagai tools pendukung pengembangan web..
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Lihat Proyek</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Mail size={18} />
              Hubungi Saya
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-6 flex gap-4">
            <a
              href="https://github.com/oktarizagunawan63"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/20 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/oktarizagunawan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent/20 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative">
            {/* Gradient Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={profilePic}
                alt="Oktariza Gunawan Profile"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
