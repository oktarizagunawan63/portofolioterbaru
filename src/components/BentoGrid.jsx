import { motion } from "framer-motion";

export function BentoGrid({ children, className = "" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-4 md:p-6 hover:border-accent/40 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
