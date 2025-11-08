import profilePic from "../assets/zhaabeer.jpg";

export default function Hero() {
  return (
    <section className="section pt-12 pb-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* 👋 Kiri: Teks Utama */}
        <div>
          <span className="inline-block bg-accent text-ink/90 text-sm font-medium px-4 py-1.5 rounded-full mb-3 shadow-sm">
            Available for freelance
          </span>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Hi, I’m <span className="text-secondary font-bold">Zhaabeer</span> —{" "}
            <br className="hidden md:block" />
            Frontend Developer
          </h1>

          <p className="mt-4 text-base text-ink/70 max-w-lg leading-relaxed">
            Gue fokus bikin web yang clean, kenceng, dan modern. Stack favorit:{" "}
            <span className="text-secondary font-semibold">
              React, Tailwind, Vite
            </span>{" "}
            dan <span className="font-semibold text-secondary">Python</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary hover:bg-secondary text-white px-6 py-2.5 text-sm font-medium rounded-full shadow transition-all duration-300"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-2.5 text-sm font-medium rounded-full hover:bg-accent/60 transition-all duration-300"
            >
              Kontak
            </a>
          </div>
        </div>

        {/* 📸 Kanan: Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/70 bg-accent/20">
            <img
              src={profilePic}
              alt="Zhaabeer Profile"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
