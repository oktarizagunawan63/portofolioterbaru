import profilePic from "../assets/keren.jpg"

export default function Hero() {
    return (
        <section className="section pt-10 pb-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <span className="chip text-sm px-3 py-1.5">Available for freelance</span>
                    <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
                        Hi, I’m <span className="text-secondary font-bold">Zhaabeer</span> — Frontend Developer
                    </h1>

                    <p className="mt-3 text-sm md:text-base text-ink/70 max-w-prose leading-relaxed">
                        Gue fokus bikin web yang clean, kenceng, Stack favorit: React, Tailwind, Vite dan python.
                    </p>

                    <div className="mt-5 flex gap-3">
                        <a href="#projects" className="btn-primary px-5 py-2 text-sm">Lihat Project</a>
                        <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-2xl border border-primary text-primary text-sm hover:bg-accent">
                            Kontak
                        </a>
                    </div>
                </div>

                {/* Foto */}
                <div className="card p-0 overflow-hidden rounded-xl border-4 border-accent/60 max-w-md mx-auto">
                    <img
                        src={profilePic}
                        alt="Zhaabeer Profile"
                        className="w-full h-64 md:h-72 object-cover rounded-none"
                    />
                </div>
            </div>
        </section>

    );
}
