import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mnngwkyv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus(""), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  }

  return (
    <section id="contact" className="section py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{t.contactTitle}</h2>
          <p className="text-ink/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            {t.contactDescription}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="p-2 md:p-3 rounded-xl bg-primary/20 flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base md:text-lg">{t.email}</h3>
                  <p className="text-ink/70 text-xs md:text-sm truncate">oktarizagunawan63@gmail.com</p>
                </div>
              </div>
              <p className="text-ink/70 text-xs md:text-sm">
                {t.emailResponse}
              </p>
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
              <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3">{t.openFor}</h3>
              <p className="text-ink/70 text-xs md:text-sm mb-3 md:mb-4">
                {t.availableFor}
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-ink/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                  {t.freelanceProjects}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                  {t.collaborationOpportunities}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                  {t.techDiscussions}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                  {t.casualChat}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">{t.name}</label>
                <input
                  name="name"
                  required
                  placeholder={t.namePlaceholder}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-accent/10 border border-accent/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">{t.email}</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-accent/10 border border-accent/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">{t.subject}</label>
                <input
                  name="subject"
                  required
                  placeholder={t.subjectPlaceholder}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-accent/10 border border-accent/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">{t.message}</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder={t.messagePlaceholder}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-accent/10 border border-accent/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {t.sending}
                    </>
                  ) : (
                    <>
                      {t.sendMessage}
                      <Send size={16} className="md:w-[18px] md:h-[18px]" />
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 md:p-4 rounded-xl bg-green-50 border border-green-200 text-green-700"
                >
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm font-medium">
                    {t.successMessage}
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 md:p-4 rounded-xl bg-red-50 border border-red-200 text-red-700"
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm font-medium">
                    {t.errorMessage}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
