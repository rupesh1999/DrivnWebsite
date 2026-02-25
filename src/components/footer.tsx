"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const footerLinks = [
    {
        title: "Product",
        links: ["Pro Series", "Elite Series", "Accessories", "Compare"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Press", "Partners"],
    },
    {
        title: "Support",
        links: ["Contact", "FAQ", "Warranty", "Shipping"],
    },
];

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-secondary/20">
            <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Newsletter Column */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                                <span className="text-xs font-bold text-primary-foreground">
                                    D
                                </span>
                            </div>
                            <span className="text-lg font-bold tracking-tight">Drivn</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                            Engineered for those who refuse to compromise. Subscribe for early
                            access and exclusive drops.
                        </p>
                        <form
                            className="flex gap-2"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <Input
                                type="email"
                                placeholder="you@email.com"
                                className="rounded-full bg-background/60 border-border/60 text-sm h-10"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="rounded-full h-10 w-10 shrink-0 btn-glow"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Link Columns */}
                    {footerLinks.map((col, i) => (
                        <motion.div
                            key={col.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.1 * (i + 1),
                            }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-sm font-semibold mb-4">{col.title}</h3>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Drivn. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
