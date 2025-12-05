"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Attractions.module.css";

const attractions = [
    {
        id: 1,
        name: "Tsunami Wave Pool",
        category: "Water Park",
        image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2070&auto=format&fit=crop",
        description: "Experience the biggest man-made waves in the region.",
        intensity: "High"
    },
    {
        id: 2,
        name: "Sky High Coaster",
        category: "Adventure",
        image: "https://images.unsplash.com/photo-1615551375744-8e329921694c?q=80&w=1974&auto=format&fit=crop",
        description: "A 360-degree loop that will leave you breathless.",
        intensity: "Extreme"
    },
    {
        id: 3,
        name: "Lazy River",
        category: "Relaxation",
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070&auto=format&fit=crop",
        description: "Float away your worries on our endless river.",
        intensity: "Low"
    },
    {
        id: 4,
        name: "Jungle Safari",
        category: "Family",
        image: "https://images.unsplash.com/photo-1534567176735-84636419e9a4?q=80&w=2070&auto=format&fit=crop",
        description: "Explore the wild side with our animatronic jungle tour.",
        intensity: "Medium"
    }
];

export default function Attractions() {
    return (
        <section id="attractions" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Top Attractions</h2>
                    <p className={styles.description}>
                        From heart-pounding thrills to relaxing chills, we have something for everyone.
                    </p>
                </div>

                <div className={styles.grid}>
                    {attractions.map((attraction, index) => (
                        <motion.div
                            key={attraction.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`${styles.card} group`}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={attraction.image}
                                    alt={attraction.name}
                                    fill
                                    className={styles.image}
                                />
                                <div className={styles.categoryBadge}>
                                    {attraction.category}
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.titleWrapper}>
                                    <h3 className={styles.cardTitle}>
                                        {attraction.name}
                                    </h3>
                                </div>
                                <p className={styles.cardDescription}>
                                    {attraction.description}
                                </p>
                                <div className={styles.intensityWrapper}>
                                    <span className={`${styles.intensityBadge}
                    ${attraction.intensity === 'Extreme' ? styles.intensityExtreme :
                                            attraction.intensity === 'High' ? styles.intensityHigh :
                                                attraction.intensity === 'Medium' ? styles.intensityMedium : styles.intensityLow
                                        }`}>
                                        {attraction.intensity}
                                    </span>
                                    <span className={styles.intensityLabel}>Intensity</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
