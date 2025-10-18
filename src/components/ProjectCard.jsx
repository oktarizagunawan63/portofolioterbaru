export default function ProjectCard({ title, desc, tags = [], link, image }) {
  return (
    <div className="card p-3 hover:shadow transition border border-accent/30 rounded-lg">
      {/* Thumbnail */}
      <div className="aspect-[4/3] rounded-md overflow-hidden mb-2 bg-accent/20 grid place-content-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xs text-secondary">[ Thumbnail ]</span>
        )}
      </div>

      <h3 className="text-base font-semibold text-ink leading-snug">{title}</h3>
      <p className="mt-1.5 text-xs text-ink/70 leading-relaxed">{desc}</p>

      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((t) => (
          <span
            key={t}
            className="chip text-[10px] px-2 py-0.5 bg-accent/70 text-ink/90"
          >
            {t}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          className="btn-primary mt-3 text-xs px-3 py-1.5 rounded-lg"
        >
          Visit
        </a>
      )}
    </div>
  );
}
