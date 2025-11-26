"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Lock } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    tech: string[];
    link: string;
    github: string;
    githubBackend?: string;
    image: string;
    private?: boolean;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Header */}
                            <div className="h-64 md:h-80 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-6 right-6 z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        {project.private && (
                                            <span className="px-3 py-1 bg-red-500/80 backdrop-blur-md text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <Lock size={12} /> Private Project
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8">
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        About the Project
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
                                    >
                                        View Full Details
                                    </Link>
                                    
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold transition-all"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                    
                                    
                                    {project.github && project.githubBackend ? (
                                        <>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold transition-all"
                                            >
                                                <Github size={18} /> Frontend
                                            </a>
                                            <a
                                                href={project.githubBackend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold transition-all"
                                            >
                                                <Github size={18} /> Backend
                                            </a>
                                        </>
                                    ) : (
                                        project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold transition-all"
                                            >
                                                <Github size={18} /> Source Code
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
