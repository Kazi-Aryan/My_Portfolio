"use client";

import GlassCard from "../ui/GlassCard";
import { ExternalLink, Car, Zap } from "lucide-react";

const projects = [
    {
        title: "Autonomous Car Project",
        role: "Trainee Engineer",
        description: "Contributing to the development of self-driving vehicle systems, focusing on sensor integration and control algorithms.",
        tech: ["Python", "Control Systems", "Computer Vision"],
        status: "Active",
        icon: <Car className="text-blue-500" />,
    },
    {
        title: "Formula 1 Student Project",
        role: "Goal",
        description: "Future endeavor to design and simulate high-performance aerodynamic components and vehicle dynamics.",
        tech: ["AutoCAD", "SolidWorks", "Simulation"],
        status: "Coming Soon",
        icon: <Zap className="text-purple-500" />,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-purple-500 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <GlassCard key={index} delay={index * 0.1} className="group relative overflow-hidden">
                        <div className="mb-6 w-12 h-12 glass rounded-xl flex items-center justify-center">
                            {project.icon}
                        </div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-sm text-blue-400 font-medium italic">{project.role}</p>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${project.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white/40"
                                }`}>
                                {project.status}
                            </span>
                        </div>

                        <p className="text-white/85 mb-6 leading-relaxed font-medium">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t) => (
                                <span key={t} className="text-xs glass px-3 py-1 rounded-full text-white/95 font-semibold bg-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <button disabled className="flex items-center gap-2 text-sm font-bold text-white/40 cursor-not-allowed group-hover:text-blue-400/40 transition-colors">
                            Read Documentation <ExternalLink size={14} />
                        </button>

                        {/* Hover Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-700" />
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
