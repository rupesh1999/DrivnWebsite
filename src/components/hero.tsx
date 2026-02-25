"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const headlineWords = "Engineered for the Long Game.".split(" ");

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const wordVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

const fadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (delay: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
    }),
};

export function Hero() {
    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Now Available for Pre-order
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
                >
                    {headlineWords.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordVariants}
                            className="inline-block mr-[0.25em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    custom={1.0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    The intersection of elite performance and ergonomic luxury.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    custom={1.3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                >
                    <Button
                        size="lg"
                        className="btn-glow gap-2 rounded-full px-8 text-base h-12"
                    >
                        Pre-order Now
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 rounded-full px-8 text-base h-12 border-border/60 hover:bg-secondary/80"
                    >
                        <Play className="w-4 h-4" />
                        Watch Film
                    </Button>
                </motion.div>
            </div>

            {/* Hero Image with Parallax */}
            <motion.div
                ref={imageRef}
                custom={1.6}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full max-w-6xl mx-auto mt-16"
            >
                <motion.div
                    style={{ y: imageY, scale: imageScale }}
                    className="relative rounded-2xl overflow-hidden border border-border/30 shadow-2xl"
                >
                    <div className="aspect-[16/9] relative">
                        <img
                            src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop"
                            alt="Drivn Premium Gaming Chair"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-sm font-medium text-white/80 tracking-widest uppercase">
                                Drivn Pro Series
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                                Starting at $899
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
