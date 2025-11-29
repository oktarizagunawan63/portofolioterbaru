import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";

export default function GradientCard({ title, desc, tags, link, image, onDetailClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-accent/20 hover:border-accent/60 transition-all duration-300"
    >
      {/* Image or Placeholder */}
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={onDetailClick}>
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Eye size={48} className="text-primary/40" />
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium">View Details</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors cursor-pointer" onClick={onDetailClick}>
          {title}
        </h3>
        <p className="text-ink/70 text-sm mb-4 line-clamp-2">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-accent/20 text-secondary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onDetailClick}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:shadow-lg transition-all"
          >
            <Eye size={16} />
            View Details
          </button>
          
          {link && link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
