
    "use client";
    import { useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import emailjs from "@emailjs/browser";
    import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, MessageSquare } from "lucide-react";

    export default function ContactSection() {
        const [formData, setFormData] = useState({ name: "", email: "", message: "" });
        const [loading, setLoading] = useState(false);
        const [status, setStatus] = useState<null | "success" | "error">(null);
        const [focusedField, setFocusedField] = useState<string | null>(null);

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

        const inputClasses = "w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900/50 border-2 rounded-xl outline-none transition-all duration-300";
        const getBorderColor = (fieldName: string) => {
            if (focusedField === fieldName) return "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]";
            if (formData[fieldName as keyof typeof formData]) return "border-green-500/50";
            return "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700";
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
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                    I'm always interested in new opportunities and exciting projects.
                                    Whether you have a question or just want to say hi, feel free to reach out!
                                </p>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-6">
                                <div className="flex items-center space-x-4 group cursor-pointer">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors">onlyzouai@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 group cursor-pointer">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                                        <span className="text-xl">📍</span>
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
                            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl space-y-6 border border-gray-100 dark:border-gray-700"
                        >
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="relative group"
                            >
                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'}`} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className={`${inputClasses} ${getBorderColor('name')} text-gray-900 dark:text-white`}
                                    placeholder=" "
                                />
                                <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                                    focusedField === 'name' || formData.name 
                                        ? '-top-2.5 bg-white dark:bg-gray-800 px-2 text-xs text-blue-500 font-medium' 
                                        : 'top-4 text-gray-500 dark:text-gray-400'
                                }`}>
                                    Your Name
                                </label>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="relative group"
                            >
                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'}`} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className={`${inputClasses} ${getBorderColor('email')} text-gray-900 dark:text-white`}
                                    placeholder=" "
                                />
                                <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                                    focusedField === 'email' || formData.email 
                                        ? '-top-2.5 bg-white dark:bg-gray-800 px-2 text-xs text-blue-500 font-medium' 
                                        : 'top-4 text-gray-500 dark:text-gray-400'
                                }`}>
                                    Email Address
                                </label>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="relative group"
                            >
                                <MessageSquare className={`absolute left-4 top-6 w-5 h-5 transition-colors ${focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'}`} />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    rows={4}
                                    className={`${inputClasses} ${getBorderColor('message')} text-gray-900 dark:text-white resize-none`}
                                    placeholder=" "
                                />
                                <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                                    focusedField === 'message' || formData.message 
                                        ? '-top-2.5 bg-white dark:bg-gray-800 px-2 text-xs text-blue-500 font-medium' 
                                        : 'top-4 text-gray-500 dark:text-gray-400'
                                }`}>
                                    Your Message
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
                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center space-x-2"
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
                                        className={`flex items-center space-x-2 p-4 rounded-xl border ${
                                            status === "success"
                                                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                                                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
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

