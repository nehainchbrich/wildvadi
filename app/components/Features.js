"use client";

import { motion } from "framer-motion";
import { Waves, Sparkles, Users, Shield } from "lucide-react";
import styles from "./Features.module.css";

const features = [
    {
        icon: Waves,
        title: "50+ Water Slides",
        description: "From lazy rivers to extreme drop slides",
        color: "primary",
    },
    {
        icon: Sparkles,
        title: "Family Friendly",
        description: "Activities for all ages and thrill levels",
        color: "accent",
    },
    {
        icon: Users,
        title: "5000+ Visitors Daily",
        description: "Join the fun with thousands of happy guests",
        color: "secondary",
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        description: "World-class safety standards and lifeguards",
        color: "primary",
    },
];

export default function Features() {
    return (
        <section className={styles.section}>
            {/* Decorative Background Elements */}
            <div className={styles.bgDecoration1}></div>
            <div className={styles.bgDecoration2}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.subtitle}
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        The Ultimate Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.description}
                    >
                        Discover what makes WildVadi the most exciting destination for your next adventure
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`${styles.card} group`}
                            >
                                {/* Icon Container */}
                                <div
                                    className={`${styles.iconContainer} ${feature.color === "primary"
                                        ? styles.iconPrimary
                                        : feature.color === "accent"
                                            ? styles.iconAccent
                                            : styles.iconSecondary
                                        }`}
                                >
                                    <Icon size={32} className={styles.icon} />
                                </div>

                                {/* Content */}
                                <h3 className={styles.cardTitle}>
                                    {feature.title}
                                </h3>
                                <p className={styles.cardDescription}>{feature.description}</p>

                                {/* Decorative Corner */}
                                <div
                                    className={`${styles.decorativeCorner} ${feature.color === "primary"
                                        ? styles.cornerPrimary
                                        : feature.color === "accent"
                                            ? styles.cornerAccent
                                            : styles.cornerSecondary
                                        }`}
                                ></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
