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
    fullDescEn: `A web-based dashboard built to help PT Amsar Prima Mandiri monitor project progress in a more structured way. Previously, all records were manual and scattered — the main goal was to centralize all project information in one place the team can easily access.

The frontend is built with React for a responsive and comfortable interface, while the backend uses Laravel with MySQL for data management and authentication.

Available features:
- Clean and professional login screen
- Dashboard to view each project's progress
- Centralized project data management
- Project status that's easy to read at a glance
- Clean frontend-backend integration
- Responsive design for various devices`,
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
    featuresEn: [
      "User authentication",
      "Project progress monitoring",
      "Centralized project data management",
      "Admin dashboard",
      "React and Laravel integration",
      "Responsive design"
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
    challengesEn: [
      "Designing a project monitoring flow that internal users can easily understand",
      "Cleanly connecting the React frontend with the Laravel backend",
      "Designing a professional login and dashboard UI that matches the company's identity",
      "Setting up a clean and extensible database structure for project data"
    ],
    outcomes: [
      "Membantu pemantauan proyek menjadi lebih terpusat",
      "Meningkatkan efisiensi akses informasi proyek",
      "Mengurangi ketergantungan pada pencatatan manual",
      "Memberikan fondasi sistem internal yang siap dikembangkan lebih lanjut"
    ],
    outcomesEn: [
      "Centralized project monitoring for the internal team",
      "Improved efficiency in accessing project information",
      "Reduced reliance on manual record-keeping",
      "Provided a solid foundation for further internal system development"
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
    fullDescEn: `An online booking system for futsal courts, replacing the manual reservation process done via WhatsApp or phone calls. Users can check slot availability, make a booking, and receive automatic confirmation — without waiting for an admin to reply.

Built with native PHP and MySQL for a lightweight, easy-to-maintain solution at this project's scale.

Available features:
- Real-time court availability check
- User login and account management
- Booking history accessible anytime
- Admin dashboard for managing courts and bookings
- Automatic confirmation notifications
- Comfortable on both mobile and desktop`,
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
    featuresEn: [
      "Real-time booking system",
      "Admin dashboard",
      "Payment integration",
      "Email notifications",
      "Responsive design"
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
    challengesEn: [
      "Implementing real-time availability without conflicts",
      "Handling concurrent booking requests",
      "Optimizing database queries for performance"
    ],
    outcomes: [
      "Mengurangi waktu booking hingga 70%",
      "Meningkatkan utilisasi lapangan hingga 40%",
      "Feedback positif dari pengguna tentang kemudahan penggunaan"
    ],
    outcomesEn: [
      "Reduced booking time by up to 70%",
      "Increased court utilization by up to 40%",
      "Positive user feedback on ease of use"
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
    fullDescEn: `A personalized birthday gift website — complete with a photo gallery and music player that can be customized for the recipient.

Built purely with HTML and CSS without any additional JavaScript libraries, to keep loading fast and animations smooth. All transitions and effects were crafted manually using CSS animations.

What's inside:
- Animated photo gallery
- Custom music player
- Memory timeline
- Smooth transition animations
- Optimized for mobile`,
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
    featuresEn: [
      "Animated photo gallery",
      "Custom music player",
      "Interactive timeline",
      "Smooth transitions",
      "Mobile optimized"
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
    challengesEn: [
      "Creating smooth animations without a JavaScript library",
      "Optimizing images for fast loading",
      "Ensuring cross-browser compatibility"
    ],
    outcomes: [
      "Berhasil memberikan dampak emosional",
      "Performa halus di semua perangkat",
      "Feedback positif dari penerima"
    ],
    outcomesEn: [
      "Successfully delivered an emotional impact",
      "Smooth performance across all devices",
      "Positive feedback from the recipient"
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
    fullDescEn: `A digital menu system for restaurants, accessible to visitors by scanning a QR code at their table. No extra app needed — just scan and the menu loads directly in the browser.

Admins can update the menu anytime via the dashboard, and changes reflect on all QR codes instantly — no reprinting needed.

Built with React for the customer-facing side, and Laravel + MySQL for the backend and menu management.

What's available:
- Scan QR code to view menu instantly
- Real-time menu updates from admin dashboard
- Menu organized by category
- Menu search and filter
- Auto-generated QR code per table`,
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
    featuresEn: [
      "QR code scanning",
      "Dynamic menu updates",
      "Order management",
      "Search functionality",
      "Admin dashboard"
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
    challengesEn: [
      "Implementing efficient QR code generation",
      "Real-time menu synchronization",
      "Optimization for low-bandwidth connections"
    ],
    outcomes: [
      "Mengurangi biaya cetak menu hingga 100%",
      "Update dan perubahan menu lebih cepat",
      "Pengalaman pelanggan yang lebih baik"
    ],
    outcomesEn: [
      "Eliminated 100% of menu printing costs",
      "Faster menu updates and changes",
      "Improved customer experience"
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
    fullDescEn: `A web app for logging and tracking blood pressure history. Built because manual recording in a notebook makes it hard to see trends — here, all data can be visualized in charts directly.

Stack: React on the frontend, Go on the backend for fast processing, MySQL for data storage, and Chart.js for the charts.

Available features:
- Daily blood pressure logging
- Interactive trend charts
- Full history of previous readings
- Multi-user support within one household`,
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
    featuresEn: [
      "Blood pressure logging",
      "Interactive charts",
      "Trend analysis",
      "Multi-user support"
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
    challengesEn: [
      "Creating intuitive data visualizations",
      "Implementing secure health data storage",
      "Designing user-friendly input forms"
    ],
    outcomes: [
      "Membantu pengguna melacak kesehatan secara konsisten",
      "Feedback positif tentang kejelasan visualisasi",
      "Meningkatkan kesadaran kesehatan di kalangan pengguna"
    ],
    outcomesEn: [
      "Helped users track their health consistently",
      "Positive feedback on the clarity of visualizations",
      "Increased health awareness among users"
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
    fullDescEn: `A machine learning-based hand sign language recognition system. The model was trained to detect and interpret hand gestures via webcam in real-time.

Technologies used: TensorFlow and Keras for model training, OpenCV for camera image processing, Python as the main language, and Jupyter Notebook for experiments and data analysis.

Work done in this project:
- Training a deep learning model from a sign language dataset
- Data preprocessing and augmentation pipeline
- Camera integration via OpenCV
- Model optimization for real-time performance at 30 FPS
- Final result: 95% accuracy on the test dataset`,
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
    featuresEn: [
      "Real-time gesture recognition",
      "High accuracy detection",
      "Support for multiple sign languages",
      "Webcam integration",
      "Model training pipeline",
      "Performance optimization"
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
    challengesEn: [
      "Achieving high accuracy with a limited dataset",
      "Optimizing the model for real-time performance",
      "Handling varying lighting conditions"
    ],
    outcomes: [
      "Mencapai akurasi 95% pada dataset uji",
      "Pengenalan real-time pada 30 FPS",
      "Dampak positif pada aksesibilitas"
    ],
    outcomesEn: [
      "Achieved 95% accuracy on the test dataset",
      "Real-time recognition at 30 FPS",
      "Positive impact on accessibility"
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
