"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px]" />

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-blue-500 font-medium tracking-[0.2em] mb-4 uppercase">
                        Mechanical Engineer & Developer
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
                        KAZI ABU <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                            ARYAN
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Building the intersection between mechanical precision and digital innovation.
                        Currently pursuing Mechanical Engineering at SUST.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 glass text-white font-bold rounded-full transition-transform hover:scale-105 active:scale-95"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
