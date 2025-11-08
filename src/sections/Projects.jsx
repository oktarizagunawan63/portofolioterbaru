import ProjectCard from "../components/ProjectCard";

// import gambar
import wifiImg from "../assets/futsal.jpg";
import kerenImg from "../assets/ultahndutt.jpg";
import reactLogo from "../assets/qr.jpg";

const DATA = [
  {
    title: "Booking Futsal Online ",
    desc: "Mempermudah Booking Futsal",
    tags: ["PHP", "SQL"],
    link: "#",
    image: wifiImg, // 🔥 tampil di card pertama
  },
  
   {
   
    title: "web ultah",
    desc: "hadiah untuk wanita berisi dengan foto beserta instrument ulang tahun, ",
    tags: ["index.html",],
    link: "https://ultahndutt.netlify.app//",
    image: kerenImg, // 🔥 tampil di card kedua

  },

  
{
  title: "QR Menu Resto",
    desc: "Web Untuk Menampilkan Menu Resto",
      tags: ["App.jsx", "QR-Menu.js"],
        link: "#",
          image: reactLogo, // 🔥 tampil di card ketiga
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
