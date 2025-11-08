export default function ProjectCard({ title, desc, tags = [], link, image }) {
  return (
    <div className="card flex flex-col p-5 rounded-2xl border border-accent/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
      {/* 🖼️ Thumbnail */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-accent/10 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain bg-white"
          />
        ) : (
          <span className="text-xs text-secondary absolute inset-0 flex items-center justify-center">
            [ Thumbnail ]
          </span>
        )}
      </div>

      {/* 🧾 Text */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-ink leading-snug">{title}</h3>
        <p className="mt-2 text-xs text-ink/70 leading-relaxed">{desc}</p>

        {/* 🏷️ Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 bg-accent/70 text-ink/90 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 🔗 Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-primary text-white text-xs px-4 py-1.5 rounded-full hover:bg-secondary transition-all duration-300 text-center"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
}
