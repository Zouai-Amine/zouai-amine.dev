"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Full-Stack Developer", "React/Next.js Enthusiast", "Software Engineer"];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");

    // Typed text effect
    useEffect(() => {
        let index = 0;
        let forward = true;
        const interval = setInterval(() => {
            setDisplayText(roles[currentRole].slice(0, index));
            if (forward) {
                index++;
                if (index > roles[currentRole].length) forward = false;
            } else {
                index--;
                if (index === 0) {
                    forward = true;
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, 120);

        return () => clearInterval(interval);
    }, [currentRole]);

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-700"
        >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
                Hi, I'm Zouai Amine
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 h-10 mb-8 font-medium"
            >
                {displayText}
                <span className="blinking-cursor">|</span>
            </motion.h2>

            <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white rounded-lg font-medium shadow-lg transition-all transform hover:scale-105"
            >
                Contact Me
            </motion.a>

            <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: #0d6efd;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        @media (prefers-color-scheme: dark) {
          .blinking-cursor {
            color: #60a5fa;
          }
        }
      `}</style>
        </section>
    );
}
