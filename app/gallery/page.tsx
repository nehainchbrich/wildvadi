"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    X,
    ChevronLeft,
    ChevronRight,
    Download,
    Heart,
    Share2,
    ZoomIn,
    Grid,
    Rows
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const categories = ["All", "Roller Coasters", "Water Park", "Kids Zone", "Events", "Food & Dining", "Night Views"];

const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop", title: "Mega Thunder Coaster", category: "Roller Coasters", likes: 1240 },
    { id: 2, src: "https://images.unsplash.com/photo-1560713781-d00a25c79f5e?q=80&w=2070&auto=format&fit=crop", title: "Wave Pool Paradise", category: "Water Park", likes: 892 },
    { id: 3, src: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop", title: "Night Light Festival", category: "Night Views", likes: 2341 },
    { id: 4, src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop", title: "Family Fun Zone", category: "Kids Zone", likes: 756 },
    { id: 5, src: "https://images.unsplash.com/photo-1513612861994-bcb9b1ba1d66?q=80&w=2070&auto=format&fit=crop", title: "Sky Loop Ride", category: "Roller Coasters", likes: 1567 },
    { id: 6, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop", title: "Water Slides", category: "Water Park", likes: 1089 },
    { id: 7, src: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2070&auto=format&fit=crop", title: "Holiday Decorations", category: "Events", likes: 1890 },
    { id: 8, src: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2076&auto=format&fit=crop", title: "Park Aerial View", category: "Night Views", likes: 2156 },
    { id: 9, src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2070&auto=format&fit=crop", title: "Splash Zone", category: "Water Park", likes: 934 },
    { id: 10, src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2080&auto=format&fit=crop", title: "Food Court Delights", category: "Food & Dining", likes: 678 },
    { id: 11, src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081&auto=format&fit=crop", title: "Pizza Paradise", category: "Food & Dining", likes: 523 },
    { id: 12, src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop", title: "Sweet Treats Corner", category: "Food & Dining", likes: 789 },
    { id: 13, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop", title: "Sunset at WildVadi", category: "Night Views", likes: 3012 },
    { id: 14, src: "https://images.unsplash.com/photo-1527549993070-67a4c1e7e735?q=80&w=2070&auto=format&fit=crop", title: "Kids Carousel", category: "Kids Zone", likes: 567 },
    { id: 15, src: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2070&auto=format&fit=crop", title: "Summer Festival", category: "Events", likes: 1432 },
    { id: 16, src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2070&auto=format&fit=crop", title: "Thrilling Heights", category: "Roller Coasters", likes: 1876 },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
    const [likedImages, setLikedImages] = useState<number[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    const currentIndex = selectedImage ? filteredImages.findIndex((img) => img.id === selectedImage.id) : -1;

    const goToNext = () => {
        if (currentIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentIndex + 1]);
        }
    };

    const goToPrev = () => {
        if (currentIndex > 0) {
            setSelectedImage(filteredImages[currentIndex - 1]);
        }
    };

    const toggleLike = (id: number) => {
        setLikedImages((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Header */}
                <section className={styles.heroSection}>
                    <div className={styles.heroOverlay}>
                        <div className={styles.heroPattern} style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                Photo <span className={styles.heroTitleHighlight}>Gallery</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Explore the magic of WildVadi through stunning photos from our visitors
                            </p>
                        </div>
                    </div>
                </section>

                <div className={`${styles.container} ${styles.contentSection}`}>
                    {/* Filters & View Toggle */}
                    <div className={styles.filtersWrapper}>
                        {/* Categories */}
                        <div className={styles.categoriesList}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`${styles.categoryBtn} ${activeCategory === cat
                                        ? styles.categoryBtnActive
                                        : styles.categoryBtnInactive
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* View Toggle */}
                        <div className={styles.viewToggle}>
                            <button
                                onClick={() => setViewMode("masonry")}
                                className={`${styles.viewToggleBtn} ${viewMode === "masonry" ? styles.viewToggleBtnActive : styles.viewToggleBtnInactive
                                    }`}
                            >
                                <Rows size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`${styles.viewToggleBtn} ${viewMode === "grid" ? styles.viewToggleBtnActive : styles.viewToggleBtnInactive
                                    }`}
                            >
                                <Grid size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <p className={styles.resultsCount}>
                        Showing {filteredImages.length} photos
                        {activeCategory !== "All" && ` in "${activeCategory}"`}
                    </p>

                    {/* Gallery Grid */}
                    <motion.div
                        layout
                        className={
                            viewMode === "masonry"
                                ? styles.galleryGridMasonry
                                : styles.galleryGridGrid
                        }
                    >
                        <AnimatePresence>
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`${viewMode === "masonry" ? "" : ""} ${styles.imageCard}`}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className={`${styles.imageWrapper} ${viewMode === "grid" ? styles.imageWrapperSquare : ""}`}>
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            width={600}
                                            height={viewMode === "masonry" ? (index % 3 === 0 ? 500 : index % 2 === 0 ? 400 : 350) : 400}
                                            className={styles.image}
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className={styles.imageOverlay}>
                                        {/* Actions */}
                                        <div className={styles.overlayActions}>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleLike(image.id);
                                                }}
                                                className={`${styles.actionBtn} ${likedImages.includes(image.id)
                                                    ? styles.actionBtnLiked
                                                    : styles.actionBtnDefault
                                                    }`}
                                            >
                                                <Heart size={18} className={likedImages.includes(image.id) ? "fill-current" : ""} />
                                            </button>
                                            <button
                                                onClick={(e) => e.stopPropagation()}
                                                className={`${styles.actionBtn} ${styles.actionBtnDefault}`}
                                            >
                                                <ZoomIn size={18} />
                                            </button>
                                        </div>

                                        {/* Info */}
                                        <div className={styles.overlayInfo}>
                                            <p className={styles.imageTitle}>{image.title}</p>
                                            <div className={styles.imageMeta}>
                                                <span className={styles.imageCategory}>{image.category}</span>
                                                <span className={styles.imageLikes}>
                                                    <Heart size={14} className={styles.likeIcon} />
                                                    {image.likes + (likedImages.includes(image.id) ? 1 : 0)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredImages.length === 0 && (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>📷</div>
                            <h3 className={styles.emptyTitle}>No photos found</h3>
                            <p className={styles.emptyText}>Try selecting a different category</p>
                        </div>
                    )}

                    {/* Load More */}
                    <div className={styles.loadMoreWrapper}>
                        <button className={styles.loadMoreBtn}>
                            Load More Photos
                        </button>
                    </div>
                </div>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightboxOverlay}
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className={styles.closeBtn}
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrev();
                            }}
                            disabled={currentIndex === 0}
                            className={`${styles.navBtn} ${styles.navBtnPrev}`}
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            disabled={currentIndex === filteredImages.length - 1}
                            className={`${styles.navBtn} ${styles.navBtnNext}`}
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedImage.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className={styles.lightboxContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                width={1200}
                                height={800}
                                className={styles.lightboxImage}
                            />

                            {/* Info Bar */}
                            <div className={styles.lightboxInfoBar}>
                                <div>
                                    <h3 className={styles.lightboxTitle}>{selectedImage.title}</h3>
                                    <p className={styles.lightboxCategory}>{selectedImage.category}</p>
                                </div>
                                <div className={styles.lightboxActions}>
                                    <button
                                        onClick={() => toggleLike(selectedImage.id)}
                                        className={`${styles.lightboxActionBtn} ${likedImages.includes(selectedImage.id)
                                            ? styles.lightboxActionBtnLiked
                                            : styles.lightboxActionBtnDefault
                                            }`}
                                    >
                                        <Heart size={18} className={likedImages.includes(selectedImage.id) ? "fill-current" : ""} />
                                        {selectedImage.likes + (likedImages.includes(selectedImage.id) ? 1 : 0)}
                                    </button>
                                    <button className={`${styles.lightboxActionBtn} ${styles.lightboxActionBtnDefault}`}>
                                        <Share2 size={18} />
                                        Share
                                    </button>
                                    <button className={`${styles.lightboxActionBtn} ${styles.lightboxActionBtnDefault}`}>
                                        <Download size={18} />
                                        Download
                                    </button>
                                </div>
                            </div>

                            {/* Counter */}
                            <div className={styles.lightboxCounter}>
                                {currentIndex + 1} / {filteredImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
}
