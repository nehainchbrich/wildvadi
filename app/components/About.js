"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Award, Users, Calendar, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./About.module.css";


const highlights = [
    "World-class roller coasters & water slides",
    "Safe & family-friendly environment",
    "Award-winning entertainment shows",
    "Delicious dining experiences",
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            {/* Background Decorations */}
            <div className={styles.bgDecoration1}></div>
            <div className={styles.bgDecoration2}></div>

            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Left Side - Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.imageContainer}
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className={styles.mainImageWrapper}>
                                <div className={styles.aspectRatioBox}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop"
                                        alt="WildVadi Theme Park"
                                        fill
                                        className={styles.image}
                                    />
                                    {/* Overlay Gradient */}
                                    <div className={styles.overlayGradient}></div>
                                </div>
                            </div>

                            {/* Secondary Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={styles.secondaryImageWrapper}
                            >
                                <div className={styles.aspectSquare}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1560713781-d00a25c79f5e?q=80&w=2070&auto=format&fit=crop"
                                        alt="Water Park"
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                            </motion.div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className={styles.experienceBadge}
                            >
                                <div className={styles.badgeContent}>
                                    <div className={styles.badgeYears}>15+</div>
                                    <div className={styles.badgeText}>Years of<br />Excellence</div>
                                </div>
                            </motion.div>

                            {/* Video Play Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`${styles.playButton} group`}
                            >
                                <div className={styles.pingAnimation}></div>
                                <Play size={32} className={`${styles.playIcon} group-hover:scale-110`} />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div className={styles.contentBadge}>
                            <Award size={18} />
                            <span className={styles.contentBadgeText}>About WildVadi</span>
                        </div>

                        {/* Heading */}
                        <h2 className={styles.heading}>
                            Where Every Day is an
                            <span className={styles.headingHighlight}> Adventure!</span>
                        </h2>

                        {/* Description */}
                        <p className={styles.descriptionLead}>
                            Welcome to <strong className={styles.strongText}>WildVadi</strong> – the ultimate destination for thrill-seekers and families alike!
                            Nestled across 100 acres of pure excitement, we've been creating magical memories since 2009.
                        </p>
                        <p className={styles.descriptionText}>
                            From heart-pounding roller coasters to refreshing water slides, enchanting shows to delicious treats –
                            every visit promises a new adventure. Our world-class safety standards ensure fun for all ages!
                        </p>

                        {/* Highlights */}
                        <div className={styles.highlightsGrid}>
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={styles.highlightItem}
                                >
                                    <div className={styles.checkIconWrapper}>
                                        <CheckCircle2 size={16} className={styles.checkIcon} />
                                    </div>
                                    <span className={styles.highlightText}>{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className={styles.ctaButtons}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${styles.primaryBtn} group`}
                            >
                                Explore Park
                                <ArrowRight size={20} className={`${styles.arrowIcon} group-hover:translate-x-1`} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.secondaryBtn}
                            >
                                Our Story
                            </motion.button>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
