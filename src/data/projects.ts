export const projects = [
    {
        id: 1,
        title: "Real-Time Chat Application",
        description:
            "A full real-time chat platform built with FastAPI WebSockets and Next.js. Includes message reactions, typing indicators, live presence, unread counters, and a clean responsive UI.",
        category: "Web",
        tech: ["Next.js", "FastAPI", "WebSockets"],
        link: "https://chat-app-zouai-amine.vercel.app/",
        github: "https://github.com/Zouai-Amine/chat-frontend",
        githubBackend: "https://github.com/Zouai-Amine/chat-backend",
        image: "/chat-app.jpg",
        private: false,
    },
    {
        id: 2,
        title: "Smart Drilling – Oil & Gas Operations Platform",
        description:
            "A full-stack internal platform used in real oil & gas operations. Features schematics (casing, tubing, packers), dashboards, PDF reporting, and backend logic for engineering workflows.",
        category: "Web",
        tech: ["Next.js", "FastAPI", "PostgreSQL"],
        link: "", // Add case study link later
        github: "", // Private backend
        image: "/oil-gas-platform.jpg",
        private: true,
    },
    {
        id: 3,
        title: "SSH & SFTP Automation Tool",
        description:
            "A Python/C# tool for secure database transfer automation using SSH/SFTP. Supports dynamic configuration, error handling, and production logging.",
        category: "Backend",
        tech: ["Python", "C#", "SSH/SFTP"],
        link: "",
        github: "",
        image: "/automation.jpg",
        private: true,
    },
];

export const categories = ["All", "Web", "Backend"];
