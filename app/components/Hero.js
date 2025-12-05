"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ticket, Play, Star, Users, Award, ArrowDown } from "lucide-react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.section}>
            {/* Background Elements */}
            <div className={styles.bgElements}>
                {/* Large Circle */}
                <div className={styles.bgCircle1}></div>
                <div className={styles.bgCircle2}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Left Content */}
                    <div className={styles.leftContent}>
                        {/* Ratings Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.ratingsBadge}
                        >
                            <div className={styles.avatarGroup}>
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className={styles.avatarWrapper}>
                                        <Image
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            alt="Visitor"
                                            width={32}
                                            height={32}
                                            className={styles.avatar}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.ratingScore}>
                                <Star size={14} className={styles.starIcon} />
                                <span className={styles.ratingValue}>4.9</span>
                            </div>
                            <span className={styles.ratingLabel}>5M+ Happy Visitors</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={styles.heading}
                        >
                            Create Unforgettable
                            <span className={styles.headingHighlight}>
                                <span className={styles.textPrimary}>Memories</span> at WildVadi
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={styles.description}
                        >
                            Experience India's largest theme park with over 50 world-class attractions,
                            thrilling water rides, and entertainment for the whole family.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={styles.ctaButtons}
                        >
                            <Link
                                href="#tickets"
                                className={`${styles.primaryBtn} group`}
                            >
                                <Ticket size={22} />
                                Book Your Visit
                            </Link>
                            <button className={`${styles.secondaryBtn} group`}>
                                <div className={styles.playIconWrapper}>
                                    <Play size={18} className={styles.playIcon} />
                                </div>
                                Watch Tour
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className={styles.statsGrid}
                        >
                            {[
                                { icon: Award, value: "50+", label: "Attractions" },
                                { icon: Users, value: "5M+", label: "Visitors Yearly" },
                                { icon: Star, value: "15+", label: "Years of Fun" },
                            ].map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <div className={styles.statValueWrapper}>
                                        <stat.icon size={20} className={styles.textPrimary} />
                                        <span className={styles.statValue}>{stat.value}</span>
                                    </div>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Images */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.rightContent}
                    >
                        <div className={styles.imageContainer}>
                            {/* Main Image */}
                            <div className={styles.mainImageWrapper}>
                                <div className={styles.aspectRatioBox}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop"
                                        alt="WildVadi Theme Park"
                                        fill
                                        className={styles.image}
                                        priority
                                    />
                                </div>

                                {/* Overlay Badge */}
                                <div className={styles.overlayBadge}>
                                    <div className={styles.badgeContent}>
                                        <div className={styles.badgeFlex}>
                                            <div>
                                                <p className={styles.badgeTitle}>Special Offer!</p>
                                                <p className={styles.badgeSubtitle}>Family pass starting at</p>
                                            </div>
                                            <div className={styles.textRight}>
                                                <p className={styles.badgePriceOld}>₹4,999</p>
                                                <p className={styles.badgePriceNew}>₹2,999</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Top Right */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className={styles.floatingCardTop}
                            >
                                <div className={styles.cardFlex}>
                                    <div className={styles.cardIcon}>
                                        🎢
                                    </div>
                                    <div>
                                        <p className={styles.cardTitle}>Mega Coaster</p>
                                        <p className={styles.cardSubtitle}>300ft Drop!</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card - Bottom Left */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className={styles.floatingCardBottom}
                            >
                                <div className={styles.cardFlex}>
                                    <span className={styles.waterIcon}>🌊</span>
                                    <div>
                                        <p className={styles.fontBold}>Water Park</p>
                                        <p className={styles.waterSubtitle}>20+ Slides</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Ring */}
                            <div className={styles.decorativeRing}></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={styles.scrollIndicator}
            >
                <span className={styles.scrollText}>Scroll</span>
                <ArrowDown size={20} />
            </motion.div>
        </section>
    );
}
