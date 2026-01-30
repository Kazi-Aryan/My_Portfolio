"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
    // Constants for gear geometry (Keeping it clean and centered)
    const teeth = 16;
    const radiusOut = 24; // Smaller gear to make text look larger
    const radiusIn = 19;
    const centerX = 70;
    const centerY = 30;

    // Programmatically generate gear path
    const points = [];
    for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const nextAngle = ((i + 0.5) / teeth) * Math.PI * 2;

        points.push(`${centerX + Math.cos(angle - 0.1) * radiusOut},${centerY + Math.sin(angle - 0.1) * radiusOut}`);
        points.push(`${centerX + Math.cos(angle + 0.1) * radiusOut},${centerY + Math.sin(angle + 0.1) * radiusOut}`);
        points.push(`${centerX + Math.cos(nextAngle - 0.1) * radiusIn},${centerY + Math.sin(nextAngle - 0.1) * radiusIn}`);
        points.push(`${centerX + Math.cos(nextAngle + 0.1) * radiusIn},${centerY + Math.sin(nextAngle + 0.1) * radiusIn}`);
    }
    const gearPath = `M ${points.join(" L ")} Z`;

    return (
        <span className="relative flex items-center group cursor-pointer h-12">
            <svg
                width="160"
                height="60"
                viewBox="0 0 160 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
            >
                <defs>
                    <linearGradient id="brand-grad-large" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop stopColor="#60A5FA" />
                        <stop offset="0.5" stopColor="#A78BFA" />
                        <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                </defs>

                {/* Scaled Down Rotating Gear Background */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "70px 30px" }}
                >
                    <path
                        d={gearPath}
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        className="opacity-40"
                    />
                </motion.g>

                {/* Enlarged Branding Text */}
                <text
                    x="70"
                    y="31"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="text-4xl font-black fill-white tracking-tighter drop-shadow-[0_0_15px_rgba(0,0,0,1)]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    KA
                    <tspan fill="url(#brand-grad-large)">A</tspan>
                </text>
            </svg>
        </span>
    );
}
