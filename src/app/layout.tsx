import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zouai Amine  | Full-Stack Developer",
  description:
    "Full-Stack Developer skilled in Next.js, FastAPI, and automation tools. Explore my projects, experience, and contact information.",
  openGraph: {
    title: "Zouai Amine | Portfolio",
    description:
      "Full-Stack Developer skilled in building scalable web applications and automation systems.",
    url: "https://zouai-amine.dev",
    siteName: "Zouai Amine Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
