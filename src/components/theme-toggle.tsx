"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-9 h-9" />;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors cursor-pointer"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {isDark ? (
                    <Moon className="w-4 h-4 text-foreground" />
                ) : (
                    <Sun className="w-4 h-4 text-foreground" />
                )}
            </motion.div>
        </button>
    );
}
