# 🚀 Zhaabeer Portfolio

Modern, professional portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Project Detail Pages** - Dedicated pages for each project with full descriptions
- **Modern Design** - Clean, professional UI with smooth animations
- **Responsive** - Fully responsive across all devices
- **Animated Components** - Smooth transitions using Framer Motion
- **Project Filtering** - Filter by category (All, Full Stack, Frontend, ML)
- **Contact Form** - Integrated with Formspree
- **React Router** - Smooth navigation between pages

## 🛠️ Tech Stack

- React 19
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Vite

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Quick Customization

### 1. Update Personal Info
- Hero: `src/components/Hero.jsx`
- About: `src/sections/About.jsx`
- Contact: `src/sections/Contact.jsx`

### 2. Add/Edit Projects
Edit `src/data/projects.js`:
```javascript
{
  id: "project-slug",
  title: "Project Title",
  shortDesc: "Brief description",
  fullDesc: "Full detailed description",
  tags: ["React", "Node.js"],
  category: "fullstack", // or "frontend", "ml"
  image: projectImage,
  demoLink: "https://demo.com",
  githubLink: "https://github.com/...",
  features: ["Feature 1", "Feature 2"],
  technologies: {
    frontend: ["React", "Tailwind"],
    backend: ["Node.js", "MongoDB"]
  },
  challenges: ["Challenge 1", "Challenge 2"],
  outcomes: ["Outcome 1", "Outcome 2"]
}
```

### 3. Update Colors
Edit `src/index.css`:
```css
:root {
  --c-primary: #662222;
  --c-secondary: #842A3B;
  --c-accent: #F5DAA7;
}
```

### 4. Setup Contact Form
1. Go to [formspree.io](https://formspree.io/)
2. Create form
3. Update endpoint in `src/sections/Contact.jsx`

## � Piroject Structure

```
src/
├── components/         # Reusable components
├── sections/          # Page sections
├── pages/             # Route pages
│   ├── Home.jsx       # Main landing page
│   └── ProjectDetail.jsx  # Project detail page
├── data/              # Project data
│   └── projects.js    # All project information
├── assets/            # Images and static files
└── App.jsx            # Main app with routing
```

## 🚀 Deployment

### Netlify (Recommended)
```bash
npm run build
# Drag 'dist' folder to netlify.com
```

### Vercel
```bash
npm i -g vercel
vercel
```

## 🎨 Key Features

### Project Detail Pages
Each project has a dedicated page with:
- Full project description
- Key features list
- Technologies used
- Challenges faced
- Project outcomes
- Live demo and source code links

### Smooth Navigation
- React Router for seamless page transitions
- Smooth scroll behavior
- Back navigation support

### Professional Content
- All content in professional English
- Detailed project descriptions
- Technical depth and clarity

## 📝 License

MIT License - feel free to use for your portfolio!

## 👨‍💻 Author

**Zhaabeer**
- GitHub: [@oktarizagunawan63](https://github.com/oktarizagunawan63)
- LinkedIn: [oktarizagunawan](https://www.linkedin.com/in/oktarizagunawan/)

---

⭐ Star this repo if you find it helpful!
