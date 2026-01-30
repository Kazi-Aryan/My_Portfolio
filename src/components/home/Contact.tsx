"use client";

import GlassCard from "../ui/GlassCard";
import { Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto mb-20 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl font-black text-white mb-6">Let&apos;s Build Something</h2>
                <p className="text-xl text-white/60 mb-12">
                    Whether you want to discuss a project, engineering simulation,
                    or just say hi—my inbox is always open.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a href="mailto:aryankazi2004@gmail.com" className="flex-1">
                        <GlassCard className="flex h-full items-center justify-center gap-3 py-8 hover:bg-white/10 transition-colors cursor-pointer border-white/20">
                            <Mail className="text-blue-400" />
                            <div className="text-left">
                                <p className="text-xs text-white/70 font-bold uppercase tracking-widest">Email</p>
                                <p className="text-white font-bold">aryankazi2004@gmail.com</p>
                            </div>
                        </GlassCard>
                    </a>

                    <GlassCard className="flex-1 flex items-center justify-center gap-3 py-8 hover:bg-white/10 transition-colors cursor-pointer border-white/20">
                        <Linkedin className="text-blue-400" />
                        <div className="text-left">
                            <p className="text-xs text-white/70 font-bold uppercase tracking-widest">LinkedIn</p>
                            <p className="text-white font-bold">linkedin.com/in/aryan</p>
                        </div>
                    </GlassCard>
                </div>

                <button className="mt-12 group glass px-12 py-5 rounded-full text-white font-bold flex items-center gap-2 mx-auto hover:bg-white/5 transition-all active:scale-95">
                    Send a Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
