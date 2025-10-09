"use client";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300 px-6 py-12 transition-colors duration-700">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Social Links */}
                <div className="flex gap-6">
                    {/* GitHub */}
                    <motion.a
                        href="https://github.com/Zouai-Amine"
                        target="_blank"
                        whileHover={{ scale: 1.2, color: "#2563EB" }}
                        className="transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github size={40} />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/zouai-amine/"
                        target="_blank"
                        whileHover={{ scale: 1.2, color: "#0A66C2" }}
                        className="transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={40} />
                    </motion.a>

                    {/* Email */}
                    <motion.button
                        onClick={scrollToContact}
                        whileHover={{ scale: 1.2, color: "#EF4444" }}
                        className="transition-colors flex items-center"
                        aria-label="Go to Contact Section"
                    >
                        <Mail size={40} />
                    </motion.button>

                    {/* WhatsApp */}
                    <motion.a
                        href="https://wa.me/213659549543"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: "#25D366" }}
                        className="transition-colors"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle size={40} />
                    </motion.a>
                </div>

                {/* Back to Top */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 dark:bg-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg shadow-lg transition-all font-medium"
                >
                    <ArrowUp size={18} /> Top
                </motion.button>
            </div>

            <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Zouai Amine. All rights reserved.
            </p>
        </footer>
    );
}
