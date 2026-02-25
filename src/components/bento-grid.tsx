"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Move3d,
    Wind,
    Magnet,
    RotateCcw,
} from "lucide-react";

const features = [
    {
        icon: Move3d,
        title: "4D Ergonomics",
        description:
            "Multi-axis armrests adapt to your posture in real-time. Every angle. Every position. Precision-calibrated comfort.",
        gradient: "from-violet-500/10 to-indigo-500/10",
        iconColor: "text-violet-500",
        span: "md:col-span-2",
    },
    {
        icon: Wind,
        title: "Aerospace-grade Cooling",
        description:
            "Engineered mesh fabric derived from spacecraft thermal systems. Breathes with you, never against you.",
        gradient: "from-cyan-500/10 to-blue-500/10",
        iconColor: "text-cyan-500",
        span: "md:col-span-1",
    },
    {
        icon: Magnet,
        title: "Magnetic Lumbar Support",
        description:
            "Auto-adjusting magnetic lumbar pads that lock into your spine's natural curvature. No knobs. No fumbling.",
        gradient: "from-amber-500/10 to-orange-500/10",
        iconColor: "text-amber-500",
        span: "md:col-span-1",
    },
    {
        icon: RotateCcw,
        title: "165° Recline",
        description:
            "Full tilt-back with zero-gravity lock. From laser focus to total relaxation in one smooth motion.",
        gradient: "from-emerald-500/10 to-teal-500/10",
        iconColor: "text-emerald-500",
        span: "md:col-span-2",
    },
];

const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.97 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay: i * 0.12,
        },
    }),
};

export function BentoGrid() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="features" className="py-24 sm:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                        What Sets Us Apart
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Built Different.
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                        Every detail obsessed over. Every material hand-selected. This isn&apos;t
                        a chair—it&apos;s a competitive advantage.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className={`group relative rounded-2xl border border-border/50 bg-card p-8 overflow-hidden hover:border-border transition-colors ${feature.span}`}
                        >
                            {/* Background gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-secondary mb-5`}
                                >
                                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                </div>

                                <h3 className="text-xl font-semibold tracking-tight mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
