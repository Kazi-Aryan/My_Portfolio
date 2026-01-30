/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                glass: "rgba(255, 255, 255, 0.08)",
                "glass-border": "rgba(255, 255, 255, 0.15)",
                primary: "#60a5fa", // Brighter blue
                secondary: "#a78bfa", // Brighter purple
            },
        },
    },
    plugins: [],
};
