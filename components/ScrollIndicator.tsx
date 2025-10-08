// components/ScrollIndicator.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 right-2 w-1 h-full bg-gray-200 dark:bg-gray-700 rounded-full z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <motion.div
                className="w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full origin-top"
                style={{ scaleY }}
            />
        </motion.div>
    );
}
