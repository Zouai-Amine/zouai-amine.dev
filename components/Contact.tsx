
    "use client";
    import { useState } from "react";
    import { motion } from "framer-motion";
    import emailjs from "@emailjs/browser";

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
                className="min-h-screen px-6 py-20 bg-white dark:bg-gray-950 transition-colors duration-700"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Contact Me
                </h2>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto flex flex-col gap-6"
                >
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white py-2 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <label className="absolute left-0 -top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">
                            Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white py-2 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <label className="absolute left-0 -top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">
                            Email
                        </label>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white py-2 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                        <label className="absolute left-0 -top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">
                            Message
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-500 font-medium text-center mt-2"
                        >
                            Message sent successfully!
                        </motion.p>
                    )}
                    {status === "error" && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 font-medium text-center mt-2"
                        >
                            Oops! Something went wrong.
                        </motion.p>
                    )}
                </motion.form>
            </section>
        );
    }

