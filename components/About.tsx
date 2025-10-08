"use client";
import { motion } from "framer-motion";
import { Code, Database, Smartphone, Gamepad2, Zap, Globe } from "lucide-react";

const skills = [
    { name: "React/Next.js", icon: Code, level: 90 },
    { name: "Node.js", icon: Database, level: 85 },
    { name: "Mobile Dev", icon: Smartphone, level: 80 },
    { name: "Game Dev", icon: Gamepad2, level: 75 },
    { name: "Automation", icon: Zap, level: 85 },
    { name: "Web Design", icon: Globe, level: 90 },
];

export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        Hi! I’m <span className="font-semibold text-blue-500">Zouai Amine</span>, a full-stack developer passionate about building web applications, automation solutions, and modern user interfaces.
                        I enjoy transforming ideas into interactive experiences and creating tools that simplify complex processes.
                        Currently, I’m open to exciting opportunities where I can contribute and grow.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center mb-4">
                                <skill.icon className="w-8 h-8 text-blue-500 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                />
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}% Proficiency</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
