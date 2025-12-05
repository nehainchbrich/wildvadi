"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, Play, Camera, Sparkles, Heart, Share2, ZoomIn } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryItems = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop",
        title: "Mega Water Slides",
        category: "Water Park",
        size: "large",
        likes: 2453,
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop",
        title: "Roller Coaster Thrills",
        category: "Rides",
        size: "medium",
        likes: 1892,
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        title: "Kids Play Zone",
        category: "Family",
        size: "small",
        likes: 1245,
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1560713781-d00a25c79f5e?q=80&w=2070&auto=format&fit=crop",
        title: "Wave Pool Party",
        category: "Water Park",
        size: "small",
        likes: 987,
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2076&auto=format&fit=crop",
        title: "Ferris Wheel Views",
        category: "Rides",
        size: "medium",
        likes: 2156,
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop",
        title: "Night Light Festival",
        category: "Events",
        size: "large",
        likes: 3421,
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop",
        title: "Bumper Cars Fun",
        category: "Rides",
        size: "small",
        likes: 756,
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2070&auto=format&fit=crop",
        title: "Summer Splash Zone",
        category: "Water Park",
        size: "small",
        likes: 1543,
    },
];

const categories = ["All", "Water Park", "Rides", "Family", "Events"];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);
    const [likedImages, setLikedImages] = useState([]);

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    const toggleLike = (id, e) => {
        e.stopPropagation();
        setLikedImages((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <section id="gallery" className={styles.section}>
            {/* Decorative Elements */}
            <div className={styles.bgElement1}></div>
            <div className={styles.bgElement2}></div>
            <div className={styles.bgElement3}></div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.subtitle}
                    >
                        <Camera size={18} />
                        Capture The Magic
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Activity <span className={styles.titleHighlight}>Gallery</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.description}
                    >
                        Explore the excitement and joy captured at WildVadi
                    </motion.p>
                </div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={styles.filters}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${styles.filterBtn} ${activeCategory === category
                                ? styles.filterBtnActive
                                : styles.filterBtnInactive
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Masonry Gallery Grid */}
                <motion.div layout className={styles.galleryGrid}>
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                onClick={() => setSelectedImage(item)}
                                className={`${styles.galleryItem} group ${item.size === "large"
                                    ? styles.aspectLarge
                                    : item.size === "medium"
                                        ? styles.aspectMedium
                                        : styles.aspectSquare
                                    }`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                />

                                {/* Gradient Overlay */}
                                <div className={styles.overlay}></div>

                                {/* Category Badge */}
                                <div className={styles.categoryBadge}>
                                    <span className={styles.categoryBadgeText}>
                                        {item.category}
                                    </span>
                                </div>

                                {/* Hover Content */}
                                <div className={styles.hoverContent}>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>

                                    {/* Action Buttons */}
                                    <div className={styles.actions}>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => toggleLike(item.id, e)}
                                            className={`${styles.actionBtn} ${likedImages.includes(item.id)
                                                ? styles.likeBtnActive
                                                : styles.likeBtnInactive
                                                }`}
                                        >
                                            <Heart
                                                size={18}
                                                className={likedImages.includes(item.id) ? styles.iconFilled : ""}
                                            />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={styles.secondaryActionBtn}
                                        >
                                            <Share2 size={18} />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={styles.secondaryActionBtn}
                                        >
                                            <ZoomIn size={18} />
                                        </motion.button>

                                        <span className={styles.likesCount}>
                                            <Heart size={14} className={styles.likesIcon} />
                                            {item.likes + (likedImages.includes(item.id) ? 1 : 0)}
                                        </span>
                                    </div>
                                </div>

                                {/* Sparkle Effect */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className={styles.sparkle}
                                >
                                    <Sparkles size={24} className={styles.sparkleIcon} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.viewMoreWrapper}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.viewMoreBtn}
                    >
                        <Play size={20} />
                        Watch Video Tour
                    </motion.button>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className={styles.modalOverlay}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className={styles.modalContent}
                        >
                            <div className={styles.modalImageWrapper}>
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            {/* Modal Content */}
                            <div className={styles.modalInfo}>
                                <span className={styles.modalCategory}>
                                    {selectedImage.category}
                                </span>
                                <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
                                <div className={styles.modalMeta}>
                                    <span className={styles.modalLikes}>
                                        <Heart size={18} className={styles.modalHeart} />
                                        {selectedImage.likes} likes
                                    </span>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className={styles.closeBtn}
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
