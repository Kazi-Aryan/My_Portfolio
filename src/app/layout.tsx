import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ARYAN | MECHANICAL ENGINEER & TECH ENTHUSIAST",
    description: "Personal portfolio of KAZI ABU ARYAN, a Mechanical Engineering student at SUST with a passion for technology and autonomous systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} mesh-gradient min-h-screen`}>
                {children}
            </body>
        </html>
    );
}
