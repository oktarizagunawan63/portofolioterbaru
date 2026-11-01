import futsalImg from "../assets/futsal.jpg";
import ultahImg from "../assets/ultah.jpg";
import qrImg from "../assets/qr.jpg";
import tensiImg from "../assets/tensi.jpg";
import bisuImg from "../assets/bisu.jpg";
import amsarDashboardImg from "../assets/asmr.jpg";
import perpusImg from "../assets/perpustakaan.jpg";
import servisMotorImg from "../assets/servis-motor.jpg";

export const projects = [
  {
    id: "amsar-project-monitoring",
    title: "Dashboard Monitoring Proyek PT Amsar Prima Mandiri",
    titleEn: "PT Amsar Prima Mandiri Project Monitoring Dashboard",
    shortDesc: "Sistem internal dari magang saya untuk sales funnel, kunjungan sales, absensi, dan progres proyek engineer, dengan 5 dashboard berbeda per role",
    shortDescEn: "Internal system from my internship covering the sales funnel, sales visits, attendance, and engineer project progress, with 5 role-based dashboards",
    fullDesc: `Sistem web internal untuk PT Amsar Prima Mandiri. Sebelumnya, data sales, kunjungan, dan progres proyek dicatat secara manual dan tersebar di banyak tempat. Saya menyatukannya dalam satu aplikasi yang digunakan oleh tim sales, manager, dan engineer.

Frontend dibangun dengan React, sedangkan backend menggunakan Laravel dan MySQL dengan autentikasi berbasis token.

Yang saya kerjakan:
- 5 role dengan dashboard masing-masing: Admin, Sales, Sales Manager, Site Manager, Engineer
- Sales funnel dari prospek sampai won/lost, lengkap dengan riwayat aktivitas per customer
- Rencana kunjungan sales, check-in/check-out, dan approval kunjungan dadakan oleh manager
- Laporan progres proyek dari engineer dan penugasan engineer ke proyek
- Export laporan ke PDF, notifikasi, activity log, dan reset password via email
- Autentikasi berbasis token serta rate limit pada endpoint login dan reset password`,
    fullDescEn: `An internal web system for PT Amsar Prima Mandiri. Sales, site-visit, and project progress records used to be kept by hand in different places, so I brought them into one app used by the sales team, managers, and engineers.

The frontend is React, and the backend is Laravel with MySQL and token-based login.

What I built:
- 5 roles, each with its own dashboard: Admin, Sales, Sales Manager, Site Manager, Engineer
- Sales funnel from lead to won/lost, with per-customer activity history
- Sales visit planning, check-in/check-out, and manager approval for unplanned visits
- Engineer progress reports and engineer-to-project assignment
- PDF report export, notifications, activity log, and email password reset
- Token-based auth with rate limiting on login and password-reset endpoints`,
    tags: ["React", "Laravel", "MySQL", "REST API"],
    category: "fullstack",
    image: amsarDashboardImg,
    demoLink: "#",
    features: [
      "Dashboard terpisah untuk 5 role",
      "Sales funnel dari prospek sampai won/lost",
      "Check-in dan check-out kunjungan sales",
      "Approval kunjungan dadakan oleh manager",
      "Laporan progres proyek dari engineer",
      "Export laporan ke PDF"
    ],
    featuresEn: [
      "Separate dashboards for 5 roles",
      "Sales funnel from lead to won/lost",
      "Sales visit check-in and check-out",
      "Manager approval for unplanned visits",
      "Engineer project progress reports",
      "PDF report export"
    ],
    technologies: {
      frontend: ["React", "jsPDF", "Tailwind CSS"],
      backend: ["Laravel", "MySQL", "REST API"],
      tools: ["Laragon", "Git"]
    },
    challenges: [
      "Membangun 5 dashboard berbeda dari satu API, masing-masing menampilkan data sesuai kebutuhan role-nya",
      "Alur approval kunjungan dadakan: sales mengajukan, lalu manager menyetujui atau menolak",
      "Membatasi percobaan login dan reset password agar akun tidak mudah dibobol"
    ],
    challengesEn: [
      "Building 5 different dashboards from one API, each showing the data its role needs",
      "The approval flow for unplanned visits: sales submit a request, then a manager approves or rejects it",
      "Rate limiting login and password-reset attempts so accounts are harder to break into"
    ],
    outcomes: [
      "Data sales, kunjungan, dan proyek yang sebelumnya tersebar sekarang ada di satu sistem",
      "Manager dapat menyetujui kunjungan dan memantau KPI sales tanpa rekap manual",
      "32 migration database, 25 controller API, ±30 halaman frontend"
    ],
    outcomesEn: [
      "Sales, visit, and project data that used to be scattered now lives in one system",
      "Managers can approve visits and track sales KPIs without manual recaps",
      "32 database migrations, 25 API controllers, ~30 frontend pages"
    ]
  },
  {
    id: "servis-motor",
    title: "Pengingat Servis Motor",
    titleEn: "Motorcycle Service Reminder",
    shortDesc: "Aplikasi PWA untuk mencatat servis motor, dilengkapi prediksi jadwal servis, pembacaan nota otomatis dengan AI, dan pengingat melalui notifikasi",
    shortDescEn: "PWA for tracking motorcycle maintenance: service date predictions, AI receipt scanning, and push reminders",
    fullDesc: `Aplikasi untuk mencatat servis motor matic (Honda dan Yamaha 110–160cc) yang dapat dipasang di ponsel. Pengguna cukup memilih motornya, lalu aplikasi menerapkan jadwal servis per komponen sesuai buku pedoman, seperti oli mesin, oli gardan, kampas rem, dan busi.

Aplikasi ini dibangun dengan React dan TypeScript, menggunakan Vercel Serverless Functions sebagai backend dan Gemini untuk fitur AI.

Fitur yang tersedia:
- Status setiap komponen: aman, mendekati jadwal, atau sudah lewat jadwal
- Catat odometer, lalu aplikasi memperkirakan tanggal servis berikutnya dari rata-rata km per hari
- Foto nota bengkel dibaca oleh AI dan diubah menjadi daftar part, merek, dan harga
- Fitur Tanya AI seputar motor: AI mencari informasi di internet terlebih dahulu dan menyertakan sumbernya
- Pengingat harian melalui push notification
- Riwayat servis yang dapat dicari, serta backup dan pemulihan data menggunakan kode`,
    fullDescEn: `An installable app for logging maintenance on automatic scooters (Honda and Yamaha 110–160cc). Users pick their bike, and the app applies the per-component service schedule from the owner's manual, such as engine oil, gear oil, brake pads, and spark plug.

Built with React and TypeScript, with Vercel Serverless Functions on the backend and Gemini for the AI features.

Available features:
- Status per component: OK, due soon, or overdue
- Log the odometer and the app estimates the next service date from the average km per day
- Photos of workshop receipts are read by AI and turned into parts, brands, and prices
- Ask AI about the bike: it searches the web first and cites its sources
- Daily reminders via push notifications
- Searchable service history, plus backup and restore with a code`,
    tags: ["React", "TypeScript", "PWA", "Gemini AI"],
    category: "fullstack",
    image: servisMotorImg,
    video: "/videos/servis-motor.mp4",
    demoLink: "#",
    features: [
      "Jadwal servis per komponen sesuai buku pedoman",
      "Prediksi tanggal servis dari rata-rata km per hari",
      "Baca foto nota bengkel dengan AI",
      "Tanya AI dengan sumber dari internet",
      "Push notification pengingat harian",
      "Backup dan pemulihan data dengan kode"
    ],
    featuresEn: [
      "Per-component service schedule from the owner's manual",
      "Service date prediction from average km per day",
      "AI reading of workshop receipt photos",
      "Ask AI with cited web sources",
      "Daily push notification reminders",
      "Backup and restore with a code"
    ],
    technologies: {
      frontend: ["React 18", "TypeScript", "Vite", "PWA"],
      backend: ["Vercel Serverless Functions", "Vercel Blob", "Web Push", "Gemini API"],
      tools: ["Vitest", "Git", "Remotion (video)"]
    },
    challenges: [
      "Kuota AI gratis cepat habis, sehingga saya membuat urutan cadangan beberapa model Gemini dengan batas waktu agar pengguna tetap mendapatkan jawaban",
      "Mencegah penyalahgunaan API: batas pemakaian per perangkat dan per IP untuk fitur AI",
      "Menjaga privasi: jadwal pengingat dihitung di ponsel pengguna, sedangkan server hanya menerima teks pengingat yang perlu dikirim"
    ],
    challengesEn: [
      "Free AI quota runs out quickly, so I built a fallback chain across several Gemini models with timeouts to make sure users still get an answer",
      "Preventing API abuse: per-device and per-IP usage limits on the AI features",
      "Privacy: reminder schedules are computed on the phone; the server only receives the reminder text it needs to send"
    ],
    outcomes: [
      "Pengguna tidak perlu lagi mengingat sendiri jadwal ganti oli dan part lainnya",
      "Logika inti dicakup 180 unit test dengan Vitest"
    ],
    outcomesEn: [
      "Riders no longer have to remember when oil and parts are due",
      "Core logic covered by 180 unit tests with Vitest"
    ]
  },
  {
    id: "perpustakaan",
    title: "Sistem Perpustakaan Kampus",
    titleEn: "Campus Library System",
    shortDesc: "Website perpustakaan dengan katalog berklasifikasi DDC, sirkulasi pinjam-kembali, perpanjangan, dan denda otomatis",
    shortDescEn: "Campus library website with a DDC-classified catalog, borrowing and returns, renewals, and automatic late fines",
    fullDesc: `Website perpustakaan kampus untuk dua jenis pengguna: anggota dan petugas sirkulasi. Anggota dapat mencari buku, melihat ketersediaan di rak, dan memperpanjang pinjaman sendiri. Petugas mencatat peminjaman dan pengembalian dari satu halaman.

Dibangun dengan PHP 8 native dan MySQL melalui PDO tanpa framework, sehingga dapat langsung dijalankan di htdocs maupun \`php -S\`.

Aturan layanan yang diterapkan di sistem:
- Lama pinjam 7 hari, maksimal 3 buku aktif per anggota
- Perpanjangan mandiri 1 kali, tidak berlaku jika sudah terlambat
- Anggota yang memiliki pinjaman terlambat tidak dapat meminjam buku lagi
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
    video: "/videos/perpustakaan-tutorial.mp4",
    demoLink: "#",
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
      "Mencegah dua petugas meminjamkan eksemplar terakhir di waktu yang sama dengan transaksi database dan SELECT ... FOR UPDATE",
      "Menerjemahkan aturan perpustakaan (batas pinjam, perpanjangan, keterlambatan) menjadi validasi dengan pesan yang jelas",
      "Keamanan dasar tanpa framework: prepared statement PDO, token CSRF di setiap form, dan password_hash"
    ],
    challengesEn: [
      "Stopping two staff members from lending the last copy at the same time, using a database transaction with SELECT ... FOR UPDATE",
      "Turning library rules (loan limits, renewals, overdue loans) into validations with clear messages",
      "Basic security without a framework: PDO prepared statements, a CSRF token on every form, and password_hash"
    ],
    outcomes: [
      "Seluruh alur perpustakaan (pencarian, peminjaman, perpanjangan, pengembalian, dan denda) berjalan dalam satu aplikasi",
      "Ketersediaan buku dihitung langsung dari data pinjaman, sehingga stok di katalog selalu sesuai"
    ],
    outcomesEn: [
      "The whole library flow (search, borrow, renew, return, and fines) runs in one app",
      "Availability is computed from live loan data, so catalog stock always matches reality"
    ]
  },
  {
    id: "futsal-booking",
    title: "Sistem Booking Lapangan Futsal",
    titleEn: "Futsal Booking System",
    shortDesc: "Website pemesanan lapangan futsal dengan fitur unggah bukti transfer dan panel admin",
    shortDescEn: "Futsal court booking website with transfer-receipt upload and an admin panel",
    fullDesc: `Sistem pemesanan online untuk lapangan futsal yang menggantikan proses reservasi manual melalui WhatsApp atau telepon. Pengguna memilih lapangan, mengisi jadwal dan durasi, lalu mengunggah bukti transfer. Admin kemudian memeriksanya melalui panel.

Dibangun dengan PHP native dan MySQL tanpa framework.

Fitur yang tersedia:
- Daftar lapangan (interlock, vinyl, rumput sintetis) dan statusnya
- Formulir pemesanan dengan jam mulai dan durasi (jam selesai dihitung otomatis)
- Unggah bukti transfer (JPG/PNG/PDF)
- Panel admin untuk melihat dan menghapus booking
- Tampilan responsif di ponsel maupun desktop`,
    fullDescEn: `An online booking system for futsal courts, replacing the manual reservation process done via WhatsApp or phone calls. Users pick a court, set the time and duration, and upload a transfer receipt, which the admin then checks from the panel.

Built with plain PHP and MySQL, without a framework.

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
    features: [
      "Pemesanan dengan durasi fleksibel",
      "Dashboard admin",
      "Unggah bukti transfer",
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
      "Reservasi tidak lagi memerlukan percakapan WhatsApp yang berulang-ulang",
      "Admin memiliki satu daftar pemesanan lengkap dengan bukti transfernya"
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
    fullDesc: `Website hadiah ulang tahun yang saya buat secara personal, berisi galeri foto dan pemutar musik yang disesuaikan dengan penerimanya.

Dibangun dengan HTML dan CSS tanpa library JavaScript tambahan agar tetap ringan saat dibuka di ponsel. Seluruh animasinya ditulis sendiri dengan CSS.

Yang ada di dalamnya:
- Galeri foto dengan animasi
- Pemutar musik kustom
- Timeline kenangan
- Animasi perpindahan halaman
- Sudah dioptimalkan untuk ponsel`,
    fullDescEn: `A birthday gift website I made, with a photo gallery and a music player tailored to the person celebrating.

Made with HTML and CSS and no extra JavaScript libraries, so it opens quickly on a phone. All the animations are written by hand in CSS.

What's inside:
- Animated photo gallery
- Custom music player
- Memory timeline
- Page transition animations
- Optimized for mobile`,
    tags: ["HTML", "CSS", "Animation"],
    category: "frontend",
    image: ultahImg,
    features: [
      "Galeri foto animasi",
      "Pemutar musik kustom",
      "Timeline interaktif",
      "Animasi CSS",
      "Dioptimalkan untuk mobile"
    ],
    featuresEn: [
      "Animated photo gallery",
      "Custom music player",
      "Interactive timeline",
      "CSS animations",
      "Mobile optimized"
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "CSS Animations"],
      tools: ["Netlify", "Git"]
    },
    challenges: [
      "Membuat seluruh animasi hanya dengan CSS, tanpa library JavaScript",
      "Menata galeri foto agar tetap rapi di layar ponsel"
    ],
    challengesEn: [
      "Writing every animation in CSS alone, without a JavaScript library",
      "Laying out the photo gallery so it still looks right on a phone screen"
    ],
    outcomes: [
      "Digunakan sebagai hadiah ulang tahun yang sebenarnya",
      "Animasi tetap lancar di ponsel"
    ],
    outcomesEn: [
      "Used as a real birthday gift",
      "Animations run well on phones"
    ]
  },
  {
    id: "qr-menu",
    title: "Menu Digital Restoran dengan QR Code",
    titleEn: "QR Code Restaurant Menu",
    shortDesc: "Menu digital restoran yang diakses dengan memindai QR code di meja. Pelanggan dapat memesan dan membayar melalui QRIS, lalu pesanan langsung masuk ke dashboard admin",
    shortDescEn: "Restaurant menu opened from a table QR code: customers order and pay via QRIS on their phone, and orders go straight to the admin dashboard",
    fullDesc: `Menu digital untuk restoran Ayam Kremes Maheswara. Pelanggan cukup memindai QR code di meja, memilih menu, memasukkannya ke keranjang, lalu membayar melalui QRIS tanpa perlu memasang aplikasi. Nomor meja otomatis tercatat pada setiap pesanan.

Frontend dibangun dengan React, sedangkan backend menggunakan Node.js, Express, dan MySQL.

Fitur yang tersedia:
- Menu per kategori dengan pencarian
- Keranjang dan pesanan yang tercatat per nomor meja
- Halaman pembayaran QRIS dengan batas waktu 15 menit
- Dashboard admin: pesanan baru muncul otomatis disertai suara notifikasi
- Pengelolaan menu dan foto produk, serta pembuatan QR code untuk setiap meja
- Laporan penjualan harian dan bulanan dalam bentuk grafik`,
    fullDescEn: `A digital menu for the Ayam Kremes Maheswara restaurant. Customers scan the QR code on their table, pick dishes, add them to a cart, and pay via QRIS without installing an app. The table number is saved with each order.

The frontend is React, and the backend is Node.js with Express and MySQL.

Available features:
- Menu by category with search
- Cart and orders tied to a table number
- QRIS payment page with a 15-minute time limit
- Admin dashboard where new orders appear on their own with a sound alert
- Menu and product photo management, plus a QR code generator for each table
- Daily and monthly sales reports as charts`,
    tags: ["React", "Node.js", "Express", "MySQL"],
    category: "fullstack",
    image: qrImg,
    video: "/videos/qr-menu-promo.mp4",
    demoLink: "#",
    features: [
      "Menu per kategori dan pencarian",
      "Pemesanan dari meja melalui QR code",
      "Halaman pembayaran QRIS",
      "Notifikasi pesanan baru di dashboard admin",
      "Pengelolaan menu dan foto produk",
      "Laporan penjualan harian dan bulanan"
    ],
    featuresEn: [
      "Menu by category with search",
      "Ordering from the table via QR code",
      "QRIS payment page",
      "New-order alerts on the admin dashboard",
      "Menu and product photo management",
      "Daily and monthly sales reports"
    ],
    technologies: {
      frontend: ["React", "React Router", "Chart.js", "react-qr-code"],
      backend: ["Node.js", "Express", "MySQL", "JWT", "Multer"],
      tools: ["Git"]
    },
    challenges: [
      "Menghubungkan setiap pesanan dengan nomor meja dari QR code yang dipindai pelanggan",
      "Menampilkan pesanan baru di dashboard admin secara langsung, dengan pengecekan data berkala dan suara notifikasi",
      "Mengamankan halaman admin dengan login JWT dan password yang di-hash dengan bcrypt"
    ],
    challengesEn: [
      "Linking each order to the table number from the QR code the customer scanned",
      "Making new orders show up on the admin dashboard right away, by checking for new data regularly and playing a sound alert",
      "Securing the admin pages with JWT login and passwords hashed with bcrypt"
    ],
    outcomes: [
      "Digunakan oleh restoran yang sebenarnya, sehingga menu cetak tidak lagi diperlukan",
      "Pesanan dari meja langsung diterima admin tanpa pencatatan manual"
    ],
    outcomesEn: [
      "Used by a real restaurant, which no longer uses printed menus",
      "Table orders reach the admin directly instead of being written down by hand"
    ]
  },
  {
    id: "blood-pressure-tracker",
    title: "Sistem Monitoring Tekanan Darah",
    titleEn: "Blood Pressure Monitoring System",
    shortDesc: "Aplikasi web untuk mencatat tekanan darah pasien dan memantau trennya melalui grafik",
    shortDescEn: "Web app for recording patients' blood pressure and viewing the trend in charts",
    fullDesc: `Aplikasi web untuk mencatat tekanan darah (sistolik dan diastolik) per pasien beserta statusnya. Datanya ditampilkan di dashboard dan grafik, sehingga perubahannya lebih mudah dipantau dibandingkan catatan di buku.

Frontend dibangun dengan React, sedangkan backend berupa REST API dengan Go (framework Gin) dan MySQL.

Fitur yang tersedia:
- Input tekanan darah sistolik dan diastolik per pasien
- Status tekanan darah di setiap catatan
- Dashboard dan grafik tren
- Riwayat yang dapat dilihat dan diubah`,
    fullDescEn: `A web app for recording blood pressure (systolic and diastolic) per patient, along with a status. The data is shown on a dashboard and in charts, so changes are easier to spot than in a paper log.

The frontend is React, and the backend is a REST API in Go (Gin framework) with MySQL.

Available features:
- Systolic and diastolic input per patient
- A blood pressure status on every record
- Dashboard and trend charts
- History that can be viewed and edited`,
    tags: ["React", "Go", "Gin", "MySQL"],
    category: "fullstack",
    image: tensiImg,
    demoLink: "#",
    features: [
      "Input sistolik dan diastolik per pasien",
      "Status di setiap catatan",
      "Grafik tren tekanan darah",
      "Riwayat dan edit data"
    ],
    featuresEn: [
      "Systolic and diastolic input per patient",
      "Status on every record",
      "Blood pressure trend chart",
      "History and data editing"
    ],
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Go", "Gin", "MySQL", "REST API"],
      tools: ["Git"]
    },
    challenges: [
      "Membuat REST API CRUD dengan Go dan framework Gin",
      "Menampilkan sistolik dan diastolik dalam satu grafik yang mudah dibaca",
      "Menghubungkan frontend React dengan backend Go yang berjalan di port berbeda (CORS)"
    ],
    challengesEn: [
      "Building a CRUD REST API with Go and the Gin framework",
      "Showing systolic and diastolic values in one easy-to-read chart",
      "Connecting the React frontend to a Go backend running on a different port (CORS)"
    ],
    outcomes: [
      "Tren tekanan darah dapat dipantau melalui grafik, bukan lagi dari catatan di buku",
      "Data setiap pasien tersimpan rapi dan dapat diubah kapan saja"
    ],
    outcomesEn: [
      "Blood pressure trends can be read from a chart instead of a notebook",
      "Each patient's records are stored in one place and can be edited anytime"
    ]
  },
  {
    id: "gesture-sense",
    title: "GestureSense - Pengenalan Bahasa Isyarat",
    titleEn: "GestureSense - Sign Language Recognition",
    shortDesc: "Sistem machine learning untuk mengenali gerakan bahasa isyarat tangan",
    shortDescEn: "Machine learning system for real-time hand sign language gesture recognition using computer vision",
    fullDesc: `Sistem pengenalan bahasa isyarat tangan berbasis machine learning. Model dilatih untuk mendeteksi dan menginterpretasikan gerakan tangan melalui webcam secara real-time.

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
      "Prototipe yang dapat mengenali gestur langsung dari webcam",
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
