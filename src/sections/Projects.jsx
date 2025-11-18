import ProjectCard from "../components/ProjectCard";

// import gambar
import wifiImg from "../assets/futsal.jpg";
import kerenImg from "../assets/ultah.jpg";
import reactLogo from "../assets/qr.jpg";
import portv2 from "../assets/tensi.jpg";
import bisuImg from "../assets/bisu.jpg";

const DATA = [
  {
    title: "Booking Futsal Online ",
    desc: "Mempermudah Booking Futsal",
    tags: ["PHP", "SQL"],
    link: "#",
    image: wifiImg,
  },
  {
    title: "web ultah",
    desc: "hadiah untuk wanita berisi dengan foto beserta instrument ulang tahun, ",
    tags: ["index.html"],
    link: "https://ultahndutt.netlify.app/",
    image: kerenImg,
  },
  {
    title: "QR Menu Resto",
    desc: "Web Untuk Menampilkan Menu Resto",
    tags: ["React", "React Router", "Sql", "Go(lang)"],
    link: "#",
    image: reactLogo,
  },
  {
    title: "Riwayat Tensi Darah",
    desc: "Web Untuk Mencatat Dan Memantau Riwayat Tekanan Darah",
    tags: ["React", "Go(lang)", "Sql"],
    link: "https://zhaabeer.netlify.app/",
    image: portv2, // 🔥 tampil di card ke-4
  },

  {
    title: "GestureSense",
    desc: "Project Machine Learning yang bisa mengenali bahasa isyarat tangan menggunakan Python.",
    tags: ["Python", "Machine Learning"],
    link: "#",
    image: bisuImg,
  },

];

export default function Projects() {
  return (
    <section id="projects" className="section py-8">
      <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {DATA.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
