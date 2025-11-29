import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedTabs({ tabs, onTabChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange?.(index);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(index)}
          className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === index
              ? "text-white"
              : "text-ink/70 hover:text-ink"
          }`}
        >
          {activeTab === index && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
