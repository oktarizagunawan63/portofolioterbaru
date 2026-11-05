import { useLanguage } from "../contexts/LanguageContext";

const LANGS = [
  { code: "id", label: "ID", title: "Bahasa Indonesia" },
  { code: "en", label: "EN", title: "English" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center p-1 rounded-full bg-accent/10 border border-accent/20 font-nav">
      {LANGS.map(({ code, label, title }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          title={title}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 ${
            language === code
              ? "bg-primary text-white shadow-sm"
              : "text-ink/60 hover:text-primary"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
