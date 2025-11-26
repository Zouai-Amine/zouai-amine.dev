"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Lock } from "lucide-react";
import { projects, categories } from "../src/data/projects";
import ProjectModal from "./ProjectModal";



export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-20 bg-white dark:bg-gray-950 transition-colors duration-700"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            >
                Featured Projects
            </motion.h2>

            {/* Category Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center gap-4 mb-12 flex-wrap"
            >
                {categories.map((cat, index) => (
                    <motion.button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`px-6 py-3 rounded-full font-medium transition-all ${
                            activeCategory === cat
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:shadow-md"
                        }`}
                    >
                        {cat}
                    </motion.button>
                ))}
            </motion.div>

            {/* Project Cards */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
                    >
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden" style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all" />
                            <div className="absolute top-4 right-4">
                                {project.private && (
                                    <span className="px-3 py-1 bg-red-500/80 backdrop-blur-md text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                                        <Lock size={12} /> Private
                                    </span>
                                )}
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <div className="flex flex-wrap gap-1">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    {project.link && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                        </motion.a>
                                    )}

                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <Github size={16} />
                                        </motion.a>
                                    )}
                                </div>

                                <button
                                    onClick={() => handleProjectClick(project)}
                                    className="text-blue-500 font-medium text-sm hover:underline"
                                >
                                    View Details →
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
