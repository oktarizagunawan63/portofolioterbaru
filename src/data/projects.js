import futsalImg from "../assets/futsal.jpg";
import ultahImg from "../assets/ultah.jpg";
import qrImg from "../assets/qr.jpg";
import tensiImg from "../assets/tensi.jpg";
import bisuImg from "../assets/bisu.jpg";

export const projects = [
  {
    id: "futsal-booking",
    title: "Futsal Booking System",
    shortDesc: "Online booking platform for futsal courts with real-time availability",
    fullDesc: `A comprehensive web-based booking system designed to streamline futsal court reservations. 
    
The platform features real-time availability checking, automated booking confirmations, and an intuitive admin dashboard for court management. Users can easily browse available time slots, make instant reservations, and receive booking confirmations via email.

Key features include:
- Real-time court availability tracking
- User authentication and profile management
- Booking history and management
- Admin dashboard for court and booking management
- Payment integration for seamless transactions
- Responsive design for mobile and desktop`,
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    category: "fullstack",
    image: futsalImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Real-time booking system",
      "User authentication",
      "Admin dashboard",
      "Payment integration",
      "Email notifications",
      "Responsive design"
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      backend: ["PHP", "MySQL"],
      tools: ["XAMPP", "Git"]
    },
    challenges: [
      "Implementing real-time availability without conflicts",
      "Handling concurrent booking requests",
      "Optimizing database queries for performance"
    ],
    outcomes: [
      "Reduced booking time by 70%",
      "Improved court utilization by 40%",
      "Positive user feedback on ease of use"
    ]
  },
  {
    id: "birthday-website",
    title: "Interactive Birthday Website",
    shortDesc: "A personalized birthday gift website with photos and music",
    fullDesc: `A heartfelt digital birthday gift featuring an interactive photo gallery and custom music player. This project showcases creative web design combined with emotional storytelling through multimedia elements.

The website includes:
- Animated photo gallery with smooth transitions
- Custom music player with birthday instrumentals
- Interactive timeline of memories
- Responsive design optimized for mobile viewing
- Personalized messages and animations

Built with pure HTML, CSS, and JavaScript to ensure fast loading and smooth animations. The design focuses on creating an emotional connection through carefully crafted animations and transitions.`,
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    category: "frontend",
    image: ultahImg,
    demoLink: "https://ultahndutt.netlify.app/",
    githubLink: "#",
    features: [
      "Animated photo gallery",
      "Custom music player",
      "Interactive timeline",
      "Smooth transitions",
      "Mobile optimized"
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript", "CSS Animations"],
      tools: ["Netlify", "Git"]
    },
    challenges: [
      "Creating smooth animations without JavaScript libraries",
      "Optimizing images for fast loading",
      "Ensuring cross-browser compatibility"
    ],
    outcomes: [
      "Successfully delivered emotional impact",
      "Smooth performance across all devices",
      "Positive feedback from recipient"
    ]
  },
  {
    id: "qr-menu",
    title: "QR Code Restaurant Menu",
    shortDesc: "Digital menu system with QR code scanning and order management",
    fullDesc: `A modern digital menu solution for restaurants, featuring QR code integration for contactless menu access. The system allows customers to scan a QR code and instantly view the restaurant's menu on their mobile devices.

The application includes:
- Dynamic menu management system
- QR code generation for each table
- Real-time menu updates
- Order tracking system
- Multi-language support
- Category-based menu organization
- Search and filter functionality

Built with React for a smooth single-page application experience, with Go backend for robust API handling and MySQL for data persistence. The system is designed to be scalable and easy to maintain.`,
    tags: ["React", "Go", "MySQL", "QR Code"],
    category: "fullstack",
    image: qrImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "QR code scanning",
      "Dynamic menu updates",
      "Order management",
      "Multi-language support",
      "Search functionality",
      "Admin dashboard"
    ],
    technologies: {
      frontend: ["React", "React Router", "Tailwind CSS"],
      backend: ["Go", "MySQL", "REST API"],
      tools: ["Docker", "Git"]
    },
    challenges: [
      "Implementing efficient QR code generation",
      "Real-time menu synchronization",
      "Optimizing for low-bandwidth connections"
    ],
    outcomes: [
      "Reduced menu printing costs by 100%",
      "Faster menu updates and changes",
      "Improved customer experience"
    ]
  },
  {
    id: "blood-pressure-tracker",
    title: "Blood Pressure Monitoring System",
    shortDesc: "Web application for tracking and monitoring blood pressure history",
    fullDesc: `A comprehensive health monitoring application designed to help users track and analyze their blood pressure readings over time. The system provides visual insights through interactive charts and helps users maintain better health awareness.

Key features include:
- Daily blood pressure logging
- Interactive charts and graphs for trend analysis
- Historical data visualization
- Health insights and recommendations
- Export data functionality
- Reminder system for regular measurements
- Multi-user support for family tracking

The application uses React for a responsive frontend experience, Go for a fast and efficient backend, and MySQL for reliable data storage. Chart.js is integrated for beautiful data visualizations that make health trends easy to understand.`,
    tags: ["React", "Go", "MySQL", "Chart.js"],
    category: "fullstack",
    image: tensiImg,
    demoLink: "https://zhaabeer.netlify.app/",
    githubLink: "#",
    features: [
      "Blood pressure logging",
      "Interactive charts",
      "Trend analysis",
      "Data export",
      "Reminder system",
      "Multi-user support"
    ],
    technologies: {
      frontend: ["React", "Chart.js", "Tailwind CSS"],
      backend: ["Go", "MySQL", "REST API"],
      tools: ["Netlify", "Git"]
    },
    challenges: [
      "Creating intuitive data visualization",
      "Implementing secure health data storage",
      "Designing user-friendly input forms"
    ],
    outcomes: [
      "Helped users track health consistently",
      "Positive feedback on visualization clarity",
      "Improved health awareness among users"
    ]
  },
  {
    id: "gesture-sense",
    title: "GestureSense - Sign Language Recognition",
    shortDesc: "Machine learning system for recognizing hand sign language gestures",
    fullDesc: `An innovative machine learning project that uses computer vision to recognize and interpret hand sign language gestures in real-time. This project aims to bridge communication gaps and make technology more accessible.

The system utilizes:
- Deep learning models trained on sign language datasets
- Real-time hand gesture detection using webcam
- TensorFlow for model training and inference
- OpenCV for image processing
- High accuracy gesture recognition
- Support for multiple sign language alphabets

The project demonstrates the practical application of machine learning in solving real-world accessibility challenges. The model is trained on thousands of hand gesture images and achieves high accuracy in recognizing various sign language gestures.

This project showcases skills in:
- Machine learning model development
- Computer vision techniques
- Data preprocessing and augmentation
- Model optimization for real-time performance`,
    tags: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    category: "ml",
    image: bisuImg,
    demoLink: "#",
    githubLink: "#",
    features: [
      "Real-time gesture recognition",
      "High accuracy detection",
      "Multiple sign language support",
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
      "Achieving high accuracy with limited dataset",
      "Optimizing model for real-time performance",
      "Handling varying lighting conditions"
    ],
    outcomes: [
      "Achieved 95% accuracy on test dataset",
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
