import futsalImg from "../assets/futsal.jpg";
import ultahImg from "../assets/ultah.jpg";
import qrImg from "../assets/qr.jpg";
import tensiImg from "../assets/tensi.jpg";
import bisuImg from "../assets/bisu.jpg";
import amsarDashboardImg from "../assets/asmr.jpg";
import perpusImg from "../assets/perpustakaan.jpg";

export const projects = [
  {
    id: "amsar-project-monitoring",
    title: "Dashboard Monitoring Proyek PT Amsar Prima Mandiri",
    titleEn: "PT Amsar Prima Mandiri Project Monitoring Dashboard",
    shortDesc: "Sistem internal (proyek kerja praktek) untuk sales funnel, kunjungan sales, absensi, dan progres proyek engineer — dengan 5 dashboard berbeda per role",
    shortDescEn: "Internal system built during my internship: sales funnel, sales visits, attendance, and engineer project progress — with 5 role-based dashboards",
    fullDesc: `Dashboard berbasis web untuk membantu PT Amsar Prima Mandiri memantau progres proyek secara lebih terstruktur. Sebelumnya pencatatan masih manual dan tersebar, jadi tujuan utamanya memusatkan semua informasi proyek di satu tempat yang mudah diakses tim.

Frontend dibangun dengan React supaya tampilan responsif dan nyaman dipakai, backend-nya Laravel dengan MySQL untuk manajemen data dan autentikasinya.

Yang saya kerjakan:
- 5 role dengan dashboard masing-masing: Admin, Sales, Sales Manager, Site Manager, Engineer
- Sales funnel dari prospek sampai won/lost, lengkap dengan riwayat aktivitas per customer
- Rencana kunjungan sales, check-in/check-out, dan approval kunjungan dadakan oleh manager
- Laporan progres proyek dari engineer dan penugasan engineer ke proyek
- Export laporan ke PDF, notifikasi, activity log, dan reset password via email
- Auth pakai Laravel Sanctum dengan rate limit di endpoint login dan reset password`,
    fullDescEn: `A web-based dashboard built to help PT Amsar Prima Mandiri monitor project progress in a more structured way. Previously, all records were manual and scattered — the main goal was to centralize all project information in one place the team can easily access.

The frontend is built with React for a responsive and comfortable interface, while the backend uses Laravel with MySQL for data management and authentication.

What I built:
- 5 roles, each with its own dashboard: Admin, Sales, Sales Manager, Site Manager, Engineer
- Sales funnel from lead to won/lost, with per-customer activity history
- Sales visit planning, check-in/check-out, and manager approval for unplanned visits
- Engineer progress reports and engineer-to-project assignment
- PDF report export, notifications, activity log, and email password reset
- Laravel Sanctum auth with rate limiting on login and password-reset endpoints`,
    tags: ["React", "Laravel 11", "MySQL", "Sanctum"],
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
      frontend: ["React", "Zustand", "Recharts", "jsPDF", "Tailwind CSS"],
      backend: ["Laravel 11", "Laravel Sanctum", "MySQL", "REST API"],
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
      "Data sales, kunjungan, dan proyek yang sebelumnya tersebar sekarang ada di satu sistem",
      "Manager bisa approve kunjungan dan memantau KPI sales tanpa rekap manual",
      "32 migration database, 25 controller API, ±30 halaman frontend"
    ],
    outcomesEn: [
      "Sales, visit, and project data that used to be scattered now lives in one system",
      "Managers can approve visits and track sales KPIs without manual recaps",
      "32 database migrations, 25 API controllers, ~30 frontend pages"
    ]
  },
  {
    id: "perpustakaan",
    title: "Sistem Perpustakaan Kampus",
    titleEn: "Campus Library System",
    shortDesc: "Website perpustakaan dengan katalog berklasifikasi DDC, sirkulasi pinjam-kembali, perpanjangan, dan denda otomatis",
    shortDescEn: "Campus library website with a DDC-classified catalog, borrowing and returns, renewals, and automatic late fines",
    fullDesc: `Website perpustakaan kampus untuk dua jenis pengguna: anggota dan petugas sirkulasi. Anggota bisa mencari buku, melihat ketersediaan di rak, dan memperpanjang pinjaman sendiri. Petugas mencatat peminjaman dan pengembalian dari satu halaman.

Dibangun dengan PHP 8 native dan MySQL lewat PDO, tanpa framework, supaya bisa langsung jalan di htdocs maupun \`php -S\`.

Aturan layanan yang diterapkan di sistem:
- Lama pinjam 7 hari, maksimal 3 buku aktif per anggota
- Perpanjangan mandiri 1 kali, tidak bisa kalau sudah terlambat
- Anggota yang punya pinjaman terlambat tidak bisa meminjam lagi
- Denda Rp1.000 per hari, dihitung otomatis saat buku dikembalikan
- Jam layanan per hari, termasuk status buka/tutup`,
    fullDescEn: `A campus library website for two kinds of users: members and circulation staff. Members can search books, see shelf availability, and renew their own loans. Staff record loans and returns from a single page.

Built with native PHP 8 and MySQL via PDO, no framework, so it runs straight from htdocs or \`php -S\`.

Library rules enforced by the system:
- 7-day loan period, up to 3 active books per member
- One self-service renewal, not allowed once a loan is overdue
- Members with an overdue loan can't borrow more books
- Late fine of Rp1,000 per day, calculated automatically on return
- Daily opening hours, including an open/closed status`,
    tags: ["PHP 8", "MySQL", "PDO", "JavaScript"],
    category: "fullstack",
    image: perpusImg,
    demoLink: "#",
    githubLink: "https://github.com/oktarizagunawan63/perpustakaan",
    features: [
      "Katalog dengan pencarian judul, penulis, penerbit, ISBN, dan nomor panggil",
      "Filter per kelas DDC (000–900) dan ketersediaan di rak",
      "Pendaftaran anggota dan halaman akun pinjaman",
      "Perpanjangan pinjaman mandiri",
      "Panel petugas: sirkulasi, koleksi, dan anggota",
      "Denda keterlambatan otomatis"
    ],
    featuresEn: [
      "Catalog search by title, author, publisher, ISBN, and call number",
      "Filter by DDC class (000–900) and shelf availability",
      "Member sign-up and a personal loans page",
      "Self-service loan renewal",
      "Staff panel: circulation, collection, and members",
      "Automatic late fines"
    ],
    technologies: {
      frontend: ["PHP templates", "HTML5", "CSS3", "JavaScript"],
      backend: ["PHP 8", "PDO", "MySQL"],
      tools: ["Git", "Remotion (video tutorial)"]
    },
    challenges: [
      "Mencegah dua petugas meminjamkan eksemplar terakhir di waktu yang sama — pakai transaksi database dan SELECT ... FOR UPDATE",
      "Menerjemahkan aturan perpustakaan (batas pinjam, perpanjangan, keterlambatan) jadi validasi yang jelas pesannya",
      "Keamanan dasar tanpa framework: prepared statement PDO, token CSRF di setiap form, dan password_hash"
    ],
    challengesEn: [
      "Preventing two staff members from lending the last copy at the same time — using a database transaction and SELECT ... FOR UPDATE",
      "Turning library rules (loan limits, renewals, overdue loans) into validations with clear messages",
      "Basic security without a framework: PDO prepared statements, a CSRF token on every form, and password_hash"
    ],
    outcomes: [
      "Seluruh alur perpustakaan — cari, pinjam, perpanjang, kembali, denda — jalan di satu aplikasi",
      "Ketersediaan buku dihitung langsung dari data pinjaman, jadi stok di katalog selalu sesuai"
    ],
    outcomesEn: [
      "The whole library flow — search, borrow, renew, return, fines — runs in one app",
      "Availability is computed from live loan data, so catalog stock always matches reality"
    ]
  },
  {
    id: "futsal-booking",
    title: "Sistem Booking Lapangan Futsal",
    titleEn: "Futsal Booking System",
    shortDesc: "Website booking lapangan futsal dengan upload bukti transfer dan panel admin",
    shortDescEn: "Futsal court booking website with transfer-receipt upload and an admin panel",
    fullDesc: `Sistem booking online untuk lapangan futsal yang menggantikan proses reservasi manual lewat WhatsApp atau telepon. Pengguna pilih lapangan, isi jadwal dan durasi, lalu upload bukti transfer — admin tinggal cek dari panel.

Dibangun pakai PHP native dan MySQL karena lebih ringan dan lebih mudah di-maintain untuk skala proyek ini.

Fitur yang tersedia:
- Daftar lapangan (interlock, vinyl, rumput sintetis) dan statusnya
- Form booking dengan jam mulai + durasi (jam selesai dihitung otomatis)
- Upload bukti transfer (JPG/PNG/PDF)
- Panel admin untuk melihat dan menghapus booking
- Tampilan nyaman di HP maupun desktop`,
    fullDescEn: `An online booking system for futsal courts, replacing the manual reservation process done via WhatsApp or phone calls. Users pick a court, set the time and duration, and upload a transfer receipt — the admin reviews it from the panel.

Built with native PHP and MySQL for a lightweight, easy-to-maintain solution at this project's scale.

Available features:
- Court list (interlock, vinyl, synthetic grass) with status
- Booking form with start time + duration (end time calculated automatically)
- Transfer receipt upload (JPG/PNG/PDF)
- Admin panel to view and delete bookings
- Comfortable on both mobile and desktop`,
    tags: ["PHP", "MySQL", "JavaScript"],
    category: "fullstack",
    image: futsalImg,
    demoLink: "#",
    githubLink: "https://github.com/oktarizagunawan63/futsal_booking",
    features: [
      "Booking dengan durasi fleksibel",
      "Dashboard admin",
      "Upload bukti transfer",
      "Desain responsif"
    ],
    featuresEn: [
      "Booking with flexible duration",
      "Admin dashboard",
      "Transfer receipt upload",
      "Responsive design"
    ],
    technologies: {
      frontend: ["PHP Native", "HTML5", "CSS3", "JavaScript"],
      backend: ["PHP", "MySQL"],
      tools: ["Laragon", "Git"]
    },
    challenges: [
      "Menghitung jam selesai dari jam mulai dan durasi",
      "Validasi tipe file bukti transfer dan menyimpannya dengan nama unik",
      "Memisahkan halaman publik dan panel admin dengan session login"
    ],
    challengesEn: [
      "Calculating end time from start time and duration",
      "Validating receipt file types and storing them under unique names",
      "Separating public pages from the admin panel with session-based login"
    ],
    outcomes: [
      "Reservasi tidak perlu lagi lewat chat WhatsApp bolak-balik",
      "Admin punya satu daftar booking beserta bukti transfernya"
    ],
    outcomesEn: [
      "Reservations no longer need back-and-forth WhatsApp chats",
      "Admin gets a single list of bookings with their transfer receipts"
    ]
  },
  {
    id: "birthday-website",
    title: "Website Ulang Tahun Interaktif",
    titleEn: "Interactive Birthday Website",
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
      "Dipakai sebagai hadiah ulang tahun sungguhan",
      "Animasi tetap lancar di HP"
    ],
    outcomesEn: [
      "Used as a real birthday gift",
      "Animations stay smooth on mobile"
    ]
  },
  {
    id: "qr-menu",
    title: "Menu Digital Restoran dengan QR Code",
    titleEn: "QR Code Restaurant Menu",
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
      "Kategori menu",
      "Fungsi pencarian",
      "Dashboard admin"
    ],
    featuresEn: [
      "QR code scanning",
      "Dynamic menu updates",
      "Menu categories",
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
      "Dipakai restoran sungguhan — menu cetak tidak dipakai lagi",
      "Perubahan harga/menu langsung tampil tanpa cetak ulang"
    ],
    outcomesEn: [
      "Used by a real restaurant — printed menus fully replaced",
      "Price/menu changes go live instantly with no reprinting"
    ]
  },
  {
    id: "blood-pressure-tracker",
    title: "Sistem Monitoring Tekanan Darah",
    titleEn: "Blood Pressure Monitoring System",
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
      "Tren tekanan darah bisa dibaca dari grafik, bukan dari catatan di buku",
      "Satu akun bisa menyimpan data beberapa anggota keluarga"
    ],
    outcomesEn: [
      "Blood pressure trends readable from a chart instead of a notebook",
      "One account can hold readings for several family members"
    ]
  },
  {
    id: "gesture-sense",
    title: "GestureSense - Pengenalan Bahasa Isyarat",
    titleEn: "GestureSense - Sign Language Recognition",
    shortDesc: "Sistem machine learning untuk mengenali gerakan bahasa isyarat tangan",
    shortDescEn: "Machine learning system for real-time hand sign language gesture recognition using computer vision",
    fullDesc: `Sistem pengenalan bahasa isyarat tangan berbasis machine learning. Model dilatih untuk mendeteksi dan menginterpretasikan gerakan tangan lewat webcam secara real-time.

Teknologi yang dipakai: TensorFlow dan Keras untuk pelatihan model, OpenCV untuk pemrosesan gambar dari kamera, Python sebagai bahasa utama, dan Jupyter Notebook untuk eksperimen dan analisis data.

Yang dikerjakan dalam proyek ini:
- Pelatihan model deep learning dari dataset bahasa isyarat
- Pipeline preprocessing dan augmentasi data
- Integrasi dengan kamera via OpenCV
- Inference real-time langsung dari webcam`,
    fullDescEn: `A machine learning-based hand sign language recognition system. The model was trained to detect and interpret hand gestures via webcam in real-time.

Technologies used: TensorFlow and Keras for model training, OpenCV for camera image processing, Python as the main language, and Jupyter Notebook for experiments and data analysis.

Work done in this project:
- Training a deep learning model from a sign language dataset
- Data preprocessing and augmentation pipeline
- Camera integration via OpenCV
- Real-time inference straight from the webcam`,
    tags: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    category: "ml",
    image: bisuImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Pengenalan gerakan real-time",
      "Integrasi webcam",
      "Pipeline pelatihan model",
      "Optimasi performa"
    ],
    featuresEn: [
      "Real-time gesture recognition",
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
      "Melatih model dengan dataset yang terbatas",
      "Optimasi model untuk performa real-time",
      "Menangani kondisi pencahayaan yang bervariasi"
    ],
    challengesEn: [
      "Training a model on a limited dataset",
      "Optimizing the model for real-time performance",
      "Handling varying lighting conditions"
    ],
    outcomes: [
      "Prototipe yang bisa mengenali gestur langsung dari webcam",
      "Fondasi untuk alat bantu komunikasi teman tuli"
    ],
    outcomesEn: [
      "Working prototype that recognizes gestures live from a webcam",
      "Groundwork for a communication aid for deaf users"
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
