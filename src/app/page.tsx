import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 text-center text-white/40 text-sm">
                <p suppressHydrationWarning>© {new Date().getFullYear()} KAZI ABU ARYAN. All rights reserved.</p>
                <p className="mt-2 font-mono text-[10px] tracking-widest uppercase">
                    Engineered with Precision
                </p>
            </footer>
        </>
    );
}
