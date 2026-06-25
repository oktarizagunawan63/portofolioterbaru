import futsalImg from "../assets/futsal.jpg";
import ultahImg from "../assets/ultah.jpg";
import qrImg from "../assets/qr.jpg";
import tensiImg from "../assets/tensi.jpg";
import bisuImg from "../assets/bisu.jpg";
import amsarDashboardImg from "../assets/asmr.jpg";

export const projects = [
  {
    id: "amsar-project-monitoring",
    title: "PT Amsar Prima Mandiri Project Monitoring Dashboard",
    shortDesc: "Dashboard internal berbasis React dan Laravel untuk memantau progres proyek, status pekerjaan, dan data operasional secara terpusat",
    shortDescEn: "Internal web dashboard built with React and Laravel to monitor project progress, work status, and operational data in one place",
    fullDesc: `Dashboard berbasis web untuk membantu PT Amsar Prima Mandiri memantau progres proyek secara lebih terstruktur. Sebelumnya pencatatan masih manual dan tersebar, jadi tujuan utamanya memusatkan semua informasi proyek di satu tempat yang mudah diakses tim.

Frontend dibangun dengan React supaya tampilan responsif dan nyaman dipakai, backend-nya Laravel dengan MySQL untuk manajemen data dan autentikasinya.

Fitur yang tersedia:
- Login dengan tampilan clean dan profesional
- Dashboard untuk melihat progres setiap proyek
- Pengelolaan data proyek terpusat
- Status proyek yang mudah dibaca sekilas
- Integrasi frontend-backend yang rapi
- Desain responsif untuk berbagai perangkat`,
    tags: ["React", "Laravel", "MySQL", "Laragon"],
    category: "fullstack",
    image: amsarDashboardImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Autentikasi pengguna",
      "Monitoring progres proyek",
      "Manajemen data proyek",
      "Dashboard admin",
      "Integrasi React dan Laravel",
      "Tampilan responsif"
    ],
    technologies: {
      frontend: ["React", "JavaScript", "CSS3"],
      backend: ["Laravel", "MySQL", "REST API"],
      tools: ["Laragon", "Git"]
    },
    challenges: [
      "Menyusun alur monitoring proyek agar mudah dipahami pengguna internal",
      "Menghubungkan frontend React dengan backend Laravel secara rapi",
      "Mendesain tampilan login dan dashboard yang profesional sesuai identitas perusahaan",
      "Menyiapkan struktur database proyek yang rapi dan mudah dikembangkan"
    ],
    outcomes: [
      "Membantu pemantauan proyek menjadi lebih terpusat",
      "Meningkatkan efisiensi akses informasi proyek",
      "Mengurangi ketergantungan pada pencatatan manual",
      "Memberikan fondasi sistem internal yang siap dikembangkan lebih lanjut"
    ]
  },
  {
    id: "futsal-booking",
    title: "Futsal Booking System",
    shortDesc: "Platform booking online untuk lapangan futsal dengan ketersediaan real-time",
    shortDescEn: "Online booking platform for futsal courts with real-time slot availability and an admin management dashboard",
    fullDesc: `Sistem booking online untuk lapangan futsal yang menggantikan proses reservasi manual lewat WhatsApp atau telepon. Pengguna bisa langsung cek ketersediaan slot, booking, dan dapat konfirmasi otomatis — tanpa perlu nunggu dibalas admin.

Dibangun pakai PHP native dan MySQL karena lebih ringan dan lebih mudah di-maintain untuk skala proyek ini.

Fitur yang tersedia:
- Cek ketersediaan lapangan secara real-time
- Login dan manajemen akun pengguna
- Riwayat booking yang bisa diakses kapan saja
- Dashboard admin untuk kelola lapangan dan booking
- Notifikasi konfirmasi otomatis
- Tampilan nyaman di HP maupun desktop`,
    tags: ["PHP", "MySQL", "JavaScript"],
    category: "fullstack",
    image: futsalImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Sistem booking real-time",
      "Dashboard admin",
      "Integrasi pembayaran",
      "Notifikasi email",
      "Desain responsif"
    ],
    technologies: {
      frontend: ["PHP Native", "HTML5", "CSS3", "JavaScript"],
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
    shortDescEn: "Personalized birthday gift website with an animated photo gallery and a custom music player",
    fullDesc: `Website hadiah ulang tahun yang dibuat khusus — ada galeri foto dan pemutar musik yang bisa dikustomisasi sesuai orangnya.

Sengaja dibangun murni pakai HTML dan CSS tanpa library JavaScript tambahan, supaya loadingnya ringan dan animasinya tetap smooth. Semua transisi dan efeknya dikerjakan manual lewat CSS animations.

Yang ada di dalamnya:
- Galeri foto dengan animasi
- Pemutar musik kustom
- Timeline kenangan
- Animasi transisi yang halus
- Sudah dioptimalkan untuk HP`,
    tags: ["HTML", "CSS", "Animation"],
    category: "frontend",
    image: ultahImg,
    githubLink: "#",
    features: [
      "Galeri foto animasi",
      "Pemutar musik kustom",
      "Timeline interaktif",
      "Transisi halus",
      "Dioptimalkan untuk mobile"
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "CSS Animations"],
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
    title: "QR Code Menu Restaurant",
    shortDesc: "Sistem menu digital dengan pemindaian QR code dan manajemen pesanan",
    shortDescEn: "Digital restaurant menu system with QR code access and real-time menu management for admins",
    fullDesc: `Sistem menu digital untuk restoran yang bisa diakses pengunjung lewat scan QR code di meja masing-masing. Tidak perlu aplikasi tambahan — cukup scan, langsung tampil menunya di browser.

Admin bisa update menu kapan saja lewat dashboard, perubahannya langsung tampil ke semua QR code tanpa perlu cetak ulang.

Dibangun dengan React untuk sisi pengunjung, Laravel dan MySQL untuk backend dan manajemen menunya.

Yang tersedia:
- Scan QR code langsung tampil menu
- Update menu real-time dari dashboard admin
- Organisasi menu per kategori
- Pencarian dan filter menu
- QR code otomatis per meja`,
    tags: ["React", "Laravel", "MySQL", "QR Code"],
    category: "fullstack",
    image: qrImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Pemindaian QR code",
      "Update menu dinamis",
      "Manajemen pesanan",
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
    shortDescEn: "Web app for logging and tracking blood pressure history over time, with interactive charts and trend analysis",
    fullDesc: `Aplikasi web untuk mencatat dan memantau riwayat tekanan darah. Dibuat karena pencatatan manual di buku susah untuk dilihat trennya — di sini semua data langsung bisa divisualisasikan dalam grafik.

Stack-nya React di frontend, Go di backend untuk prosesnya yang cepat, MySQL untuk simpan data, dan Chart.js untuk grafiknya.

Fitur yang tersedia:
- Catat tekanan darah harian
- Grafik tren yang interaktif
- Histori lengkap pembacaan sebelumnya
- Bisa dipakai lebih dari satu pengguna dalam satu keluarga`,
    tags: ["React", "Go", "MySQL", "Chart.js"],
    category: "fullstack",
    image: tensiImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Pencatatan tekanan darah",
      "Grafik interaktif",
      "Analisis tren",
      "Dukungan multi-pengguna"
    ],
    technologies: {
      frontend: ["React", "Chart.js", "Tailwind CSS"],
      backend: ["Go", "MySQL", "REST API"],
      tools: ["Git"]
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
    shortDescEn: "Machine learning system for real-time hand sign language gesture recognition using computer vision",
    fullDesc: `Sistem pengenalan bahasa isyarat tangan berbasis machine learning. Model dilatih untuk mendeteksi dan menginterpretasikan gerakan tangan lewat webcam secara real-time.

Teknologi yang dipakai: TensorFlow dan Keras untuk pelatihan model, OpenCV untuk pemrosesan gambar dari kamera, Python sebagai bahasa utama, dan Jupyter Notebook untuk eksperimen dan analisis data.

Yang dikerjakan dalam proyek ini:
- Pelatihan model deep learning dari dataset bahasa isyarat
- Pipeline preprocessing dan augmentasi data
- Integrasi dengan kamera via OpenCV
- Optimasi model supaya bisa jalan real-time di 30 FPS
- Hasil akhir: akurasi 95% di dataset uji`,
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
