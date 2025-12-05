"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Family Visitor",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        text: "WildVadi exceeded all our expectations! The kids had the time of their lives on the water slides, and we felt completely safe the entire time. Can't wait to come back!",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Thrill Seeker",
        avatar: "https://i.pravatar.cc/150?img=13",
        rating: 5,
        text: "The Sky High Coaster is absolutely insane! Best adrenaline rush I've had in years. The park is well-maintained and the staff are incredibly friendly.",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Annual Pass Holder",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        text: "We visit WildVadi at least once a month and it never gets old. There's always something new to discover, and the seasonal events are fantastic!",
    },
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            {/* Animated Background Elements */}
            <div className={styles.bgElement1}></div>
            <div className={styles.bgElement2}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.subtitle}
                    >
                        What Our Visitors Say
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Happy Memories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.description}
                    >
                        Join thousands of satisfied visitors who've made unforgettable memories
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className={styles.card}
                        >
                            {/* Stars */}
                            <div className={styles.stars}>
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={20} className={styles.starIcon} />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className={styles.quote}>
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className={styles.author}>
                                <div className={styles.avatarWrapper}>
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className={styles.avatar}
                                    />
                                </div>
                                <div>
                                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                                    <p className={styles.authorRole}>{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className={styles.statsGrid}
                >
                    {[
                        { value: "5M+", label: "Happy Visitors" },
                        { value: "4.9", label: "Average Rating" },
                        { value: "15+", label: "Years of Fun" },
                        { value: "50+", label: "Attractions" },
                    ].map((stat, i) => (
                        <div key={i} className={styles.statCard}>
                            <h3 className={styles.statValue}>{stat.value}</h3>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
