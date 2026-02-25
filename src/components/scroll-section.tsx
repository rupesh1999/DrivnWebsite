"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <>
            {/* Performance Section */}
            <section
                id="performance"
                ref={sectionRef}
                className="py-24 sm:py-32 px-6 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text */}
                        <motion.div
                            style={{ y: textY }}
                            className="order-2 lg:order-1"
                        >
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                viewport={{ once: true }}
                                className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
                            >
                                Performance
                            </motion.p>
                            <motion.h2
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                                    delay: 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
                            >
                                Comfort is a{" "}
                                <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                                    performance
                                </span>{" "}
                                metric.
                            </motion.h2>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.2,
                                }}
                                viewport={{ once: true }}
                                className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
                            >
                                We partnered with biomechanical engineers and esports
                                professionals to create a chair that reduces fatigue by 47% in
                                marathon sessions. Your body adapts. Your focus sharpens. Your
                                game elevates.
                            </motion.p>

                            {/* Stats */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.3,
                                }}
                                viewport={{ once: true }}
                                className="grid grid-cols-3 gap-8 mt-10"
                            >
                                {[
                                    { value: "47%", label: "Less Fatigue" },
                                    { value: "12hr", label: "Comfort Rated" },
                                    { value: "4.9★", label: "Pro Rating" },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            style={{ y: imageY }}
                            className="order-1 lg:order-2"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                                }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl overflow-hidden border border-border/30"
                            >
                                <div className="aspect-[4/5] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop"
                                        alt="Drivn chair close-up detail"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-24 sm:py-32 px-6 bg-secondary/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                            Gallery
                        </p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            Every Angle. Flawless.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                src: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=2071&auto=format&fit=crop",
                                alt: "Gaming setup with premium chair",
                                span: "sm:col-span-2 lg:col-span-2",
                                aspect: "aspect-[16/9]",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop",
                                alt: "Minimalist office setup",
                                span: "",
                                aspect: "aspect-[9/12]",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2070&auto=format&fit=crop",
                                alt: "Gaming room detail",
                                span: "",
                                aspect: "aspect-[9/12]",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1587212786624-4386e2d76841?q=80&w=2070&auto=format&fit=crop",
                                alt: "Premium racing seat detail",
                                span: "sm:col-span-2 lg:col-span-2",
                                aspect: "aspect-[16/9]",
                            },
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 30, opacity: 0, scale: 0.97 }}
                                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                                    delay: i * 0.1,
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`group relative rounded-2xl overflow-hidden border border-border/30 ${img.span}`}
                            >
                                <div className={`${img.aspect} relative`}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="py-24 sm:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                            Testimonials
                        </p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            Loved by Pros.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote:
                                    "The Drivn Pro completely changed my 10-hour streaming sessions. Zero back pain. Zero fatigue. It's unreal.",
                                name: "Alex Chen",
                                role: "Pro Streamer · 2M Followers",
                            },
                            {
                                quote:
                                    "I've sat in every gaming chair on the market. This is the first one that feels like it was designed by someone who actually sits all day.",
                                name: "Sarah Kim",
                                role: "Software Engineer · Google",
                            },
                            {
                                quote:
                                    "Our entire esports team switched to Drivn. The difference in endurance during tournament play is measurable.",
                                name: "Marcus Rivera",
                                role: "Head Coach · Team Apex",
                            },
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                                    delay: i * 0.15,
                                }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-border/50 bg-card p-8 hover:border-border transition-colors"
                            >
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <svg
                                            key={j}
                                            className="w-4 h-4 text-amber-400 fill-amber-400"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-foreground/90 leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div>
                                    <p className="font-semibold text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
