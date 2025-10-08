// components/ScrollIndicator.tsx
"use client";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            setScroll((scrollTop / docHeight) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 right-2 w-1 h-full bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
                className="w-1 bg-blue-500 rounded-full"
                style={{ height: `${scroll}%` }}
            ></div>
        </div>
    );
}
