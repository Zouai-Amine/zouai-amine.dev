"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-white dark:bg-gray-950 transition-colors duration-500">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Hi! I’m <span className="font-semibold text-blue-500">Zouai Amine</span>, a full-stack developer passionate about building web applications, automation solutions, and modern user interfaces.
                    I enjoy transforming ideas into interactive experiences and creating tools that simplify complex processes.
                    Currently, I’m open to exciting opportunities where I can contribute and grow.
                </p>
            </motion.div>
        </section>
    );
}
