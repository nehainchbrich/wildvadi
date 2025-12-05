"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Play, X, Eye, Clock, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Videos.module.css";

const videos = [
    {
        id: 1,
        title: "Mega Coaster Experience",
        description: "Feel the rush of our 300ft drop at 95mph!",
        thumbnail: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop",
        duration: "2:45",
        views: "1.2M",
        category: "Thrill Rides",
        featured: true,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 2,
        title: "Splash Mountain Adventure",
        description: "The ultimate water slide experience",
        thumbnail: "https://images.unsplash.com/photo-1560713781-d00a25c79f5e?q=80&w=2070&auto=format&fit=crop",
        duration: "3:20",
        views: "890K",
        category: "Water Park",
        featured: false,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 3,
        title: "Family Fun Day",
        description: "See families enjoying the magic together",
        thumbnail: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        duration: "4:15",
        views: "2.3M",
        category: "Family",
        featured: false,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 4,
        title: "Night Light Spectacular",
        description: "Magical evening shows & fireworks",
        thumbnail: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop",
        duration: "5:30",
        views: "1.8M",
        category: "Events",
        featured: false,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 5,
        title: "Behind The Scenes Tour",
        description: "Exclusive look at how we create magic",
        thumbnail: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2076&auto=format&fit=crop",
        duration: "8:45",
        views: "650K",
        category: "Exclusive",
        featured: false,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 6,
        title: "Wave Pool Madness",
        description: "Epic waves and endless fun",
        thumbnail: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2070&auto=format&fit=crop",
        duration: "2:10",
        views: "1.5M",
        category: "Water Park",
        featured: false,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
];

export default function Videos() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const featuredVideo = videos.find((v) => v.featured);
    const otherVideos = videos.filter((v) => !v.featured);

    const nextVideo = () => {
        if (selectedVideo) {
            const currentIdx = videos.findIndex((v) => v.id === selectedVideo.id);
            const nextIdx = (currentIdx + 1) % videos.length;
            setSelectedVideo(videos[nextIdx]);
        }
    };

    const prevVideo = () => {
        if (selectedVideo) {
            const currentIdx = videos.findIndex((v) => v.id === selectedVideo.id);
            const prevIdx = (currentIdx - 1 + videos.length) % videos.length;
            setSelectedVideo(videos[prevIdx]);
        }
    };

    return (
        <section className={styles.section}>
            {/* Background Effects */}
            <div className={styles.bgEffects}>
                <div className={styles.bgEffect1}></div>
                <div className={styles.bgEffect2}></div>
            </div>

            {/* Animated Pattern */}
            <div className={styles.animatedPattern}>
                <div className={styles.patternInner} style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.subtitle}
                    >
                        <Play size={16} className="text-primary" />
                        <span className={styles.subtitleText}>Watch & Experience</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Park <span className={styles.titleHighlight}>Videos</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.description}
                    >
                        Get a taste of the adventure before you arrive!
                    </motion.p>
                </div>

                {/* Video Grid */}
                <div className={styles.grid}>
                    {/* Featured Video */}
                    {featuredVideo && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={styles.featuredVideoWrapper}
                        >
                            <div
                                onClick={() => setSelectedVideo(featuredVideo)}
                                className={`${styles.featuredVideoCard} group`}
                            >
                                <Image
                                    src={featuredVideo.thumbnail}
                                    alt={featuredVideo.title}
                                    fill
                                    className={styles.image}
                                />

                                {/* Overlay */}
                                <div className={styles.overlay}></div>

                                {/* Play Button */}
                                <div className={styles.playButtonWrapper}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className={styles.playButtonInner}
                                    >
                                        <div className={styles.playButtonPing}></div>
                                        <div className={styles.playButton}>
                                            <Play size={40} className={styles.playIcon} />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Featured Badge */}
                                <div className={styles.featuredBadge}>
                                    <span className={styles.featuredBadgeText}>
                                        Featured
                                    </span>
                                </div>

                                {/* Duration */}
                                <div className={styles.durationBadge}>
                                    <Clock size={14} className="text-white" />
                                    <span className={styles.durationText}>{featuredVideo.duration}</span>
                                </div>

                                {/* Content */}
                                <div className={styles.featuredContent}>
                                    <span className={styles.categoryBadge}>
                                        {featuredVideo.category}
                                    </span>
                                    <h3 className={styles.featuredTitle}>{featuredVideo.title}</h3>
                                    <p className={styles.featuredDescription}>{featuredVideo.description}</p>
                                    <div className={styles.viewsWrapper}>
                                        <span className={styles.viewsText}>
                                            <Eye size={16} />
                                            {featuredVideo.views} views
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Other Videos Grid */}
                    <div className={styles.otherVideosGrid}>
                        {otherVideos.slice(0, 4).map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedVideo(video)}
                                className={`${styles.videoCard} group`}
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className={styles.image}
                                />

                                {/* Overlay */}
                                <div className={styles.videoOverlay}></div>

                                {/* Play Button */}
                                <div className={styles.videoPlayButtonWrapper}>
                                    <div className={styles.videoPlayButton}>
                                        <Play size={24} className={styles.videoPlayIcon} />
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className={styles.videoDurationBadge}>
                                    <Clock size={12} className="text-white" />
                                    <span className={styles.videoDurationText}>{video.duration}</span>
                                </div>

                                {/* Content */}
                                <div className={styles.videoContent}>
                                    <span className={styles.videoCategoryBadge}>
                                        {video.category}
                                    </span>
                                    <h4 className={styles.videoTitle}>{video.title}</h4>
                                    <div className={styles.videoViewsWrapper}>
                                        <Eye size={12} className={styles.videoViewsIcon} />
                                        <span className={styles.videoViewsText}>{video.views}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Row - More Videos */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.thumbsGrid}
                >
                    {videos.map((video) => (
                        <div
                            key={`thumb-${video.id}`}
                            onClick={() => setSelectedVideo(video)}
                            className={`${styles.thumbCard} group ${selectedVideo?.id === video.id ? styles.thumbCardSelected : styles.thumbCardUnselected
                                }`}
                        >
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.thumbOverlay}>
                                <Play size={20} className={styles.thumbPlayIcon} />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.viewAllWrapper}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.viewAllButton}
                    >
                        <Play size={20} />
                        View All Videos
                    </motion.button>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
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
                            {/* Video Player */}
                            <div className={styles.modalVideoWrapper}>
                                <Image
                                    src={selectedVideo.thumbnail}
                                    alt={selectedVideo.title}
                                    fill
                                    className={styles.image}
                                />
                                {/* Play overlay for demo */}
                                <div className={styles.modalPlayOverlay}>
                                    <div className="text-center">
                                        <div className={styles.modalPlayButton}>
                                            <Play size={36} className={styles.modalPlayIcon} />
                                        </div>
                                        <p className={styles.modalPlayText}>Click to play video</p>
                                    </div>
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className={styles.modalInfo}>
                                <div>
                                    <span className={styles.modalCategory}>
                                        {selectedVideo.category}
                                    </span>
                                    <h3 className={styles.modalTitle}>{selectedVideo.title}</h3>
                                    <p className={styles.modalDescription}>{selectedVideo.description}</p>
                                </div>
                                <div className={styles.modalActions}>
                                    <button className={styles.modalActionButton}>
                                        <Heart size={18} />
                                        <span>Like</span>
                                    </button>
                                    <button className={styles.modalActionButton}>
                                        <Share2 size={18} />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>

                            {/* Navigation */}
                            <button
                                onClick={prevVideo}
                                className={`${styles.modalNavButton} ${styles.modalPrevButton}`}
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextVideo}
                                className={`${styles.modalNavButton} ${styles.modalNextButton}`}
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className={styles.modalCloseButton}
                            >
                                <X size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
