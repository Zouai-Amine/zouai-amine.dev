"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";


export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === Number(params.id));

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20">
            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="h-[50vh] relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="max-w-5xl mx-auto">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft size={20} /> Back to Projects
                        </Link>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="px-4 py-1.5 bg-blue-500 text-white font-bold rounded-full uppercase tracking-wider text-sm">
                                {project.category}
                            </span>
                            {project.private && (
                                <span className="px-4 py-1.5 bg-red-500 text-white font-bold rounded-full flex items-center gap-2 text-sm">
                                    <Lock size={14} /> Private Project
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                                    <span>Real-time functionality with WebSockets</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                                    <span>Responsive design for all devices</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                                    <span>Secure authentication and authorization</span>
                                </li>
                                {/* Add more generic features or specific ones if available in data */}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25"
                                >
                                    <ExternalLink size={20} /> Visit Live Site
                                </a>
                            )}
                            
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center gap-2 px-6 py-4 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-xl font-bold transition-all"
                                >
                                    <Github size={20} /> View Source Code
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
