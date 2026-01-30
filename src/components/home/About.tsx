"use client";

import GlassCard from "../ui/GlassCard";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
    {
        institution: "Shahjalal University of Science and Technology (SUST)",
        degree: "B.Sc. in Mechanical Engineering",
        period: "Current",
        location: "Sylhet, Bangladesh",
    },
    {
        institution: "Govt. Michael Madhusudan College",
        degree: "Higher Secondary Certificate",
        period: "Class of 2024",
        location: "Jashore, Bangladesh",
        gpa: "5.00",
    },
    {
        institution: "Dawood Public School and College",
        degree: "Secondary School Certificate",
        period: "Class of 2022",
        location: "Jashore, Bangladesh",
        gpa: "5.00",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <div className="w-20 h-1 bg-blue-500 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-lg text-white/90">
                    <p>
                        I am a Mechanical Engineering student at SUST with a deep interest in robotics,
                        autonomous systems, and software development. My journey started in Jashore,
                        where I developed a fascination for how things work—both physically and digitally.
                    </p>
                    <p>
                        I believe that the future of engineering lies at the nexus of hardware and software.
                        This drive led me to explore programming alongside my core engineering studies,
                        enabling me to build smarter solutions.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <GraduationCap className="text-blue-500" />
                        Education
                    </h3>
                    {education.map((edu, index) => (
                        <GlassCard key={index} delay={index * 0.1} className="flex flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-white text-lg">{edu.institution}</h4>
                                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-white/80 font-medium">{edu.degree}</p>
                            {edu.gpa && (
                                <p className="text-sm font-bold text-blue-400">GPA: {edu.gpa}</p>
                            )}
                            <div className="flex items-center gap-1 text-xs text-white/60 mt-2 font-medium">
                                <MapPin size={12} />
                                {edu.location}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
