"use client";

import GlassCard from "../ui/GlassCard";
import { Code, Box, Terminal, Cpu } from "lucide-react";

const skillCategories = [
    {
        title: "Programming",
        icon: <Code className="text-blue-500" />,
        skills: ["C", "C++", "Python", "TypeScript", "JavaScript"],
    },
    {
        title: "Engineering Design",
        icon: <Box className="text-purple-500" />,
        skills: ["AutoCAD", "SolidWorks", "ANSYS (Basics)"],
    },
    {
        title: "Robotics & Hardware",
        icon: <Cpu className="text-indigo-500" />,
        skills: ["Arduino", "Raspberry Pi", "Sensor Integration"],
    },
    {
        title: "Tools & OS",
        icon: <Terminal className="text-blue-400" />,
        skills: ["Git", "Linux", "VS Code", "MATLAB"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Core Skills</h2>
                <div className="w-20 h-1 bg-blue-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <GlassCard key={index} delay={index * 0.1} className="h-full">
                        <div className="mb-6 w-10 h-10 glass rounded-lg flex items-center justify-center">
                            {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs font-semibold text-white/90 bg-white/10 px-2.5 py-1 rounded"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
