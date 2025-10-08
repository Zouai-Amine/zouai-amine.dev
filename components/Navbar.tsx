"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const sections = ["about", "projects", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3; // middle point detection
      let current = "hero";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollY >= section.offsetTop) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-white dark:bg-gray-950 shadow-md transition-colors duration-500 z-50"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="font-bold text-xl cursor-pointer hover:text-blue-500 transition-colors duration-300"
      >
        Zouai Amine
      </motion.div>

      <div className="flex items-center gap-4">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative px-1 py-1 transition-colors ${activeSection === section
                ? "text-blue-500 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 bg-blue-500"
                />
              )}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          className="p-2 rounded-md md:hidden bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm flex flex-col items-center gap-4 p-4 md:hidden shadow-md"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setOpen(false)}
                className="hover:text-blue-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
