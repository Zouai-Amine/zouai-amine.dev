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

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden transition-colors duration-700"
        >
            {/* Floating Background Elements */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
                style={{ animationDelay: "0s" }}
            />
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30"
                style={{ animationDelay: "1s" }}
            />
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-25"
                style={{ animationDelay: "2s" }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent"
                >
                    Hi, I'm Zouai Amine
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 h-12 mb-8 font-medium"
                >
                    {displayText}
                    <span className="blinking-cursor">|</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex gap-4 justify-center"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 text-white rounded-full font-semibold shadow-lg transition-all"
                    >
                        Contact Me
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                    >
                        View Projects
                    </motion.a>
                </motion.div>
            </motion.div>

            <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: #2563eb;
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
