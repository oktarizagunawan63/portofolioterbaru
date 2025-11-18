export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="text-3xl">About Me</h2>
      <p className="mt-4 text-ink/70 max-w-3xl">
        Gue mahasiswa semester 3 yang hobi ngoprek web, Motor. Senang eksplor UI rapi,
        performa ngebut, Tertarik juga sama data & ML buat project mini.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {["React", "Tailwind", "Vite", "Node.js", "Python", "PHP", "Go(lang)", "Sql"].map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
    </section>
  );
}
