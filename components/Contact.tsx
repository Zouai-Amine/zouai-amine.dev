
    "use client";
    import { useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import emailjs from "@emailjs/browser";
    import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

    export default function ContactSection() {
        const [formData, setFormData] = useState({ name: "", email: "", message: "" });
        const [loading, setLoading] = useState(false);
        const [status, setStatus] = useState<null | "success" | "error">(null);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            setStatus(null);

            try {
                await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                    formData,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                );
                setFormData({ name: "", email: "", message: "" });
                setStatus("success");
            } catch (error) {
                console.error(error);
                setStatus("error");
            } finally {
                setLoading(false);
            }
        };

        return (
            <section
                id="contact"
                className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-700"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                        Get In Touch
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                        Have a project in mind? Let's discuss how we can work together.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    I'm always interested in new opportunities and exciting projects.
                                    Whether you have a question or just want to say hi, feel free to reach out!
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">📧</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                        <p className="text-gray-600 dark:text-gray-400">onlyzouai@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">📍</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-gray-600 dark:text-gray-400">Algeria , Available Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
                        >
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                                    placeholder="Your Name"
                                />
                                <label className="absolute left-0 -top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm">
                                    Name
                                </label>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="relative"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                                    placeholder="your.email@example.com"
                                />
                                <label className="absolute left-0 -top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm">
                                    Email
                                </label>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="relative"
                            >
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder-transparent"
                                    placeholder="Your message here..."
                                />
                                <label className="absolute left-0 -top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm">
                                    Message
                                </label>
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                            >
                                <AnimatePresence mode="wait">
                                    {loading ? (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0, rotate: -180 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: 180 }}
                                            className="flex items-center space-x-2"
                                        >
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="send"
                                            initial={{ opacity: 0, rotate: -180 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: 180 }}
                                            className="flex items-center space-x-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <AnimatePresence>
                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        className={`flex items-center space-x-2 p-4 rounded-lg ${
                                            status === "success"
                                                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                                                : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                                        }`}
                                    >
                                        {status === "success" ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5" />
                                        )}
                                        <span className="font-medium">
                                            {status === "success" ? "Message sent successfully!" : "Oops! Something went wrong."}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.form>
                    </div>
                </motion.div>
            </section>
        );
    }

