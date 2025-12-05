"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
    return (
        <section className={styles.section}>
            {/* Animated Background Elements */}
            <div className={styles.bgElements}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className={styles.bgCircle1}
                ></motion.div>
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className={styles.bgCircle2}
                ></motion.div>
                {/* Floating Sparkles */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className={styles.sparkle1}
                >
                    <Sparkles size={32} className={styles.sparkleIcon1} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className={styles.sparkle2}
                >
                    <Sparkles size={24} className={styles.sparkleIcon2} />
                </motion.div>
            </div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.heading}>
                        Ready for the
                        <br />
                        <span className={styles.headingHighlight}>Adventure of a Lifetime?</span>
                    </h2>
                    <p className={styles.description}>
                        Book your tickets now and save up to 20% with our online exclusive deals!
                    </p>

                    <div className={styles.buttonGroup}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${styles.primaryBtn} group`}
                        >
                            Get Your Tickets
                            <ArrowRight className={`${styles.arrowIcon} group-hover:translate-x-1`} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.secondaryBtn}
                        >
                            View Season Pass
                        </motion.button>
                    </div>

                    {/* Trust Badge */}
                    <div className={styles.trustBadge}>
                        <div className={styles.avatarGroup}>
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={styles.avatar}
                                >
                                    😊
                                </div>
                            ))}
                        </div>
                        <span className={styles.trustText}>
                            Join <strong className={styles.trustTextStrong}>5M+</strong> happy visitors today!
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
