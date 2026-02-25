"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Performance", href: "#performance" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-border/40"
        >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />
            <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <span className="text-sm font-bold text-primary-foreground">D</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">Drivn</span>
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    {/* Desktop CTA */}
                    <Button className="hidden md:flex btn-glow gap-2 rounded-full px-6" size="sm">
                        Pre-order
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-6 pt-8">
                                <div className="flex items-center gap-2 px-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                                        <span className="text-sm font-bold text-primary-foreground">D</span>
                                    </div>
                                    <span className="text-lg font-bold tracking-tight">Drivn</span>
                                </div>
                                <div className="h-px bg-border" />
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                                        className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors px-2"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <div className="h-px bg-border" />
                                <Button className="btn-glow gap-2 rounded-full mx-2" size="lg">
                                    Pre-order
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}
