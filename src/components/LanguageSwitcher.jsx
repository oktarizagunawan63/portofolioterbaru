import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

// Indonesia Flag SVG Component (Circular)
const IndonesiaFlag = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <clipPath id="circle-clip-id">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-clip-id)">
      <rect width="24" height="12" fill="#FF0000" />
      <rect y="12" width="24" height="12" fill="#FFFFFF" />
    </g>
  </svg>
);

// USA Flag SVG Component (Circular)
const USAFlag = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <clipPath id="circle-clip-us">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-clip-us)">
      <rect width="24" height="24" fill="#B22234" />
      <rect y="2" width="24" height="1.5" fill="#FFFFFF" />
      <rect y="5" width="24" height="1.5" fill="#FFFFFF" />
      <rect y="8" width="24" height="1.5" fill="#FFFFFF" />
      <rect y="11" width="24" height="1.5" fill="#FFFFFF" />
      <rect y="14" width="24" height="1.5" fill="#FFFFFF" />
      <rect y="17" width="24" height="1.5" fill="#FFFFFF" />
      <rect y="20" width="24" height="1.5" fill="#FFFFFF" />
      <rect width="10" height="12" fill="#3C3B6E" />
    </g>
  </svg>
);

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 p-1 rounded-full bg-accent/10 border border-accent/20">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('id')}
        className={`p-2 rounded-full transition-all duration-200 ${
          language === 'id' 
            ? 'bg-primary/10 shadow-sm ring-2 ring-primary/30' 
            : 'hover:bg-accent/20'
        }`}
        title="Bahasa Indonesia"
      >
        <IndonesiaFlag className="w-6 h-6" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`p-2 rounded-full transition-all duration-200 ${
          language === 'en' 
            ? 'bg-primary/10 shadow-sm ring-2 ring-primary/30' 
            : 'hover:bg-accent/20'
        }`}
        title="English"
      >
        <USAFlag className="w-6 h-6" />
      </motion.button>
    </div>
  );
}