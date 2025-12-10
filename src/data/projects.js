import futsalImg from "../assets/futsal.jpg";
import ultahImg from "../assets/ultah.jpg";
import qrImg from "../assets/qr.jpg";
import tensiImg from "../assets/tensi.jpg";
import bisuImg from "../assets/bisu.jpg";

export const projects = [
  {
    id: "futsal-booking",
    title: {
      id: "Futsal Booking System",
      en: "Futsal Booking System"
    },
    shortDesc: {
      id: "Platform booking online untuk lapangan futsal dengan ketersediaan real-time",
      en: "Online booking platform for futsal courts with real-time availability"
    },
    fullDesc: `Sistem booking berbasis web yang dirancang untuk mempermudah reservasi lapangan futsal. 
    
Platform ini dilengkapi dengan pengecekan ketersediaan real-time, konfirmasi booking otomatis, dan dashboard admin yang intuitif untuk manajemen lapangan. Pengguna dapat dengan mudah melihat slot waktu yang tersedia, melakukan reservasi instan, dan menerima konfirmasi booking via email.

Fitur utama meliputi:
- Pelacakan ketersediaan lapangan secara real-time
- Autentikasi pengguna dan manajemen profil
- Riwayat dan manajemen booking
- Dashboard admin untuk manajemen lapangan dan booking
- Integrasi pembayaran untuk transaksi yang lancar
- Desain responsif untuk mobile dan desktop`,
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    category: "fullstack",
    image: futsalImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Sistem booking real-time",
      "Autentikasi pengguna",
      "Dashboard admin",
      "Integrasi pembayaran",
      "Notifikasi email",
      "Desain responsif"
    ],
    technologies: {
      frontend: ["PHP Native", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
      backend: ["PHP", "MySQL"],
      tools: ["Laragon", "Git"]
    },
    challenges: [
      "Implementasi ketersediaan real-time tanpa konflik",
      "Menangani permintaan booking bersamaan",
      "Optimasi query database untuk performa"
    ],
    outcomes: [
      "Mengurangi waktu booking hingga 70%",
      "Meningkatkan utilisasi lapangan hingga 40%",
      "Feedback positif dari pengguna tentang kemudahan penggunaan"
    ]
  },
  {
    id: "birthday-website",
    title: "Interactive Birthday Website",
    shortDesc: "Website hadiah ulang tahun yang dipersonalisasi dengan foto dan musik",
    fullDesc: `Hadiah ulang tahun digital yang menampilkan galeri foto interaktif dan pemutar musik kustom. Proyek ini menampilkan desain web kreatif yang dikombinasikan dengan storytelling emosional melalui elemen multimedia.

Website ini mencakup:
- Galeri foto animasi dengan transisi yang halus
- Pemutar musik kustom dengan instrumental ulang tahun
- Timeline interaktif dari kenangan
- Desain responsif yang dioptimalkan untuk tampilan mobile
- Pesan dan animasi yang dipersonalisasi

Dibangun dengan HTML, CSS, dan JavaScript murni untuk memastikan loading cepat dan animasi yang halus. Desain berfokus pada menciptakan koneksi emosional melalui animasi dan transisi yang dibuat dengan hati-hati.`,
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    category: "frontend",
    image: ultahImg,
    demoLink: "https://ultahndutt.netlify.app/",
    githubLink: "#",
    features: [
      "Galeri foto animasi",
      "Pemutar musik kustom",
      "Timeline interaktif",
      "Transisi halus",
      "Dioptimalkan untuk mobile"
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript", "CSS Animations"],
      tools: ["Netlify", "Git"]
    },
    challenges: [
      "Membuat animasi halus tanpa library JavaScript",
      "Optimasi gambar untuk loading cepat",
      "Memastikan kompatibilitas lintas browser"
    ],
    outcomes: [
      "Berhasil memberikan dampak emosional",
      "Performa halus di semua perangkat",
      "Feedback positif dari penerima"
    ]
  },
  {
    id: "qr-menu",
    title: "QR Code Restaurant Menu",
    shortDesc: "Sistem menu digital dengan pemindaian QR code dan manajemen pesanan",
    fullDesc: `Solusi menu digital modern untuk restoran, dilengkapi dengan integrasi QR code untuk akses menu tanpa sentuhan. Sistem ini memungkinkan pelanggan untuk memindai QR code dan langsung melihat menu restoran di perangkat mobile mereka.

Aplikasi ini mencakup:
- Sistem manajemen menu dinamis
- Generasi QR code untuk setiap meja
- Update menu secara real-time
- Sistem pelacakan pesanan
- Dukungan multi-bahasa
- Organisasi menu berbasis kategori
- Fungsi pencarian dan filter

Dibangun dengan React untuk pengalaman single-page application yang halus, dengan backend Laravel untuk penanganan API yang robust dan MySQL untuk persistensi data. Sistem dirancang agar scalable dan mudah dipelihara.`,
    tags: ["React", "Laravel", "MySQL", "QR Code"],
    category: "fullstack",
    image: qrImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Pemindaian QR code",
      "Update menu dinamis",
      "Manajemen pesanan",
      "Dukungan multi-bahasa",
      "Fungsi pencarian",
      "Dashboard admin"
    ],
    technologies: {
      frontend: ["React", "React Router", "Tailwind CSS"],
      backend: ["Laravel", "MySQL", "REST API"],
      tools: ["Laragon", "Git"]
    },
    challenges: [
      "Implementasi generasi QR code yang efisien",
      "Sinkronisasi menu secara real-time",
      "Optimasi untuk koneksi bandwidth rendah"
    ],
    outcomes: [
      "Mengurangi biaya cetak menu hingga 100%",
      "Update dan perubahan menu lebih cepat",
      "Pengalaman pelanggan yang lebih baik"
    ]
  },
  {
    id: "blood-pressure-tracker",
    title: "Blood Pressure Monitoring System",
    shortDesc: "Aplikasi web untuk melacak dan memantau riwayat tekanan darah",
    fullDesc: `Aplikasi pemantauan kesehatan komprehensif yang dirancang untuk membantu pengguna melacak dan menganalisis pembacaan tekanan darah mereka dari waktu ke waktu. Sistem ini menyediakan wawasan visual melalui grafik interaktif dan membantu pengguna menjaga kesadaran kesehatan yang lebih baik.

Fitur utama meliputi:
- Pencatatan tekanan darah harian
- Grafik dan chart interaktif untuk analisis tren
- Visualisasi data historis
- Wawasan dan rekomendasi kesehatan
- Fungsi ekspor data
- Sistem pengingat untuk pengukuran rutin
- Dukungan multi-pengguna untuk pelacakan keluarga

Aplikasi ini menggunakan React untuk pengalaman frontend yang responsif, Go untuk backend yang cepat dan efisien, dan MySQL untuk penyimpanan data yang andal. Chart.js diintegrasikan untuk visualisasi data yang indah yang membuat tren kesehatan mudah dipahami.`,
    tags: ["React", "Go", "MySQL", "Chart.js"],
    category: "fullstack",
    image: tensiImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Pencatatan tekanan darah",
      "Grafik interaktif",
      "Analisis tren",
      "Ekspor data",
      "Sistem pengingat",
      "Dukungan multi-pengguna"
    ],
    technologies: {
      frontend: ["React", "Chart.js", "Tailwind CSS"],
      backend: ["Go", "MySQL", "REST API"],
      tools: ["Netlify", "Git"]
    },
    challenges: [
      "Membuat visualisasi data yang intuitif",
      "Implementasi penyimpanan data kesehatan yang aman",
      "Mendesain form input yang user-friendly"
    ],
    outcomes: [
      "Membantu pengguna melacak kesehatan secara konsisten",
      "Feedback positif tentang kejelasan visualisasi",
      "Meningkatkan kesadaran kesehatan di kalangan pengguna"
    ]
  },
  {
    id: "gesture-sense",
    title: "GestureSense - Sign Language Recognition",
    shortDesc: "Sistem machine learning untuk mengenali gerakan bahasa isyarat tangan",
    fullDesc: `Proyek machine learning inovatif yang menggunakan computer vision untuk mengenali dan menginterpretasikan gerakan bahasa isyarat tangan secara real-time. Proyek ini bertujuan untuk menjembatani kesenjangan komunikasi dan membuat teknologi lebih mudah diakses.

Sistem ini memanfaatkan:
- Model deep learning yang dilatih pada dataset bahasa isyarat
- Deteksi gerakan tangan real-time menggunakan webcam
- TensorFlow untuk pelatihan dan inferensi model
- OpenCV untuk pemrosesan gambar
- Pengenalan gerakan dengan akurasi tinggi
- Dukungan untuk berbagai alfabet bahasa isyarat

Proyek ini mendemonstrasikan aplikasi praktis machine learning dalam menyelesaikan tantangan aksesibilitas dunia nyata. Model dilatih pada ribuan gambar gerakan tangan dan mencapai akurasi tinggi dalam mengenali berbagai gerakan bahasa isyarat.

Proyek ini menampilkan keterampilan dalam:
- Pengembangan model machine learning
- Teknik computer vision
- Preprocessing dan augmentasi data
- Optimasi model untuk performa real-time`,
    tags: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    category: "ml",
    image: bisuImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Pengenalan gerakan real-time",
      "Deteksi akurasi tinggi",
      "Dukungan berbagai bahasa isyarat",
      "Integrasi webcam",
      "Pipeline pelatihan model",
      "Optimasi performa"
    ],
    technologies: {
      ml: ["TensorFlow", "Keras", "OpenCV"],
      languages: ["Python"],
      tools: ["Jupyter Notebook", "NumPy", "Pandas"]
    },
    challenges: [
      "Mencapai akurasi tinggi dengan dataset terbatas",
      "Optimasi model untuk performa real-time",
      "Menangani kondisi pencahayaan yang bervariasi"
    ],
    outcomes: [
      "Mencapai akurasi 95% pada dataset uji",
      "Pengenalan real-time pada 30 FPS",
      "Dampak positif pada aksesibilitas"
    ]
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get localized project data
export const getLocalizedProject = (project, language = 'id') => {
  if (!project) return null;
  
  return {
    ...project,
    title: typeof project.title === 'object' ? project.title[language] || project.title.id : project.title,
    shortDesc: typeof project.shortDesc === 'object' ? project.shortDesc[language] || project.shortDesc.id : project.shortDesc,
    fullDesc: typeof project.fullDesc === 'object' ? project.fullDesc[language] || project.fullDesc.id : project.fullDesc,
  };
};

export const getLocalizedProjects = (language = 'id') => {
  return projects.map(project => getLocalizedProject(project, language));
};

export const getLocalizedProjectsByCategory = (category, language = 'id') => {
  const filteredProjects = getProjectsByCategory(category);
  return filteredProjects.map(project => getLocalizedProject(project, language));
};
