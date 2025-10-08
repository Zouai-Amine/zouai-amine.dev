"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio built with Next.js and Tailwind CSS",
        category: "Web",
        link: "#",
    },
    {
        id: 2,
        title: "Todo Mobile App",
        description: "A mobile todo app using React Native",
        category: "Mobile",
        link: "#",
    },
    {
        id: 3,
        title: "Simple 2.5D Game",
        description: "A small indie game built with Unity",
        category: "Games",
        link: "#",
    },
    // Add more projects here
];

const categories = ["All", "Web", "Mobile", "Games"];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-700"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Projects
            </h2>

            {/* Category Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full font-medium transition-colors ${activeCategory === cat
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <motion.a
                        key={project.id}
                        href={project.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: project.id * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                        <span className="text-blue-500 font-medium">View Project →</span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
