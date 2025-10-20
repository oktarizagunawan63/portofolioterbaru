import ProjectCard from "../components/ProjectCard";

// import gambar
import wifiImg from "../assets/wifi.jpg";
import kerenImg from "../assets/ultahndutt.jpg";
import reactLogo from "../assets/react.svg";

const DATA = [
  {
    title: "Konekin WiFi ",
    desc: "Login page WiFi voucher untuk coffee shop",
    tags: ["React", "Tailwind", "Vite"],
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
  title: "WhatsApp Bot",
    desc: "Bot perintah 'p', auto mention, dan fitur translate.",
      tags: ["Node.js", "whatsapp-web.js"],
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
