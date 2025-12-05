"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Instagram,
    Facebook,
    Twitter,
    Heart,
    MessageCircle,
    Share2,
    ChevronLeft,
    ChevronRight,
    Play,
    ExternalLink
} from "lucide-react";
import styles from "./SocialFeed.module.css";

const socialPosts = [
    {
        id: 1,
        platform: "instagram",
        username: "@wildvadi_official",
        userImage: "https://i.pravatar.cc/100?img=12",
        image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop",
        caption: "Feel the rush! 🎢 Our Mega Coaster reaches speeds of 95 mph! Who's ready for the ultimate thrill? 🔥 #WildVadi #ThrillSeeker #RollerCoaster",
        likes: "12.5K",
        comments: "834",
        time: "2 hours ago",
        isVideo: false,
    },
    {
        id: 2,
        platform: "facebook",
        username: "WildVadi Theme Park",
        userImage: "https://i.pravatar.cc/100?img=25",
        image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop",
        caption: "✨ Magical nights at WildVadi! Our Holiday Light Festival begins Dec 15th. Tag someone you'd bring! 🎄💫",
        likes: "8.2K",
        comments: "1.2K",
        time: "5 hours ago",
        isVideo: false,
    },
    {
        id: 3,
        platform: "instagram",
        username: "@wildvadi_official",
        userImage: "https://i.pravatar.cc/100?img=12",
        image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop",
        caption: "Making waves! 🌊💦 Our wave pool is the perfect escape from the heat. Summer vibes all year round! #WaterPark #SummerFun",
        likes: "9.8K",
        comments: "567",
        time: "8 hours ago",
        isVideo: true,
    },
    {
        id: 4,
        platform: "twitter",
        username: "@WildVadiPark",
        userImage: "https://i.pravatar.cc/100?img=33",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        caption: "🎉 ANNOUNCEMENT: Kids go FREE every weekend this December! Bring the whole family for unforgettable memories. Book now! 🎫",
        likes: "5.4K",
        comments: "892",
        time: "1 day ago",
        isVideo: false,
    },
    {
        id: 5,
        platform: "instagram",
        username: "@wildvadi_official",
        userImage: "https://i.pravatar.cc/100?img=12",
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2070&auto=format&fit=crop",
        caption: "Behind the scenes of our holiday decorations setup! 🎄 It takes 200+ crew members to create this magic! ✨ #BehindTheScenes",
        likes: "15.3K",
        comments: "1.1K",
        time: "2 days ago",
        isVideo: true,
    },
    {
        id: 6,
        platform: "facebook",
        username: "WildVadi Theme Park",
        userImage: "https://i.pravatar.cc/100?img=25",
        image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2076&auto=format&fit=crop",
        caption: "5 million visitors and counting! 🎊 Thank you for making WildVadi India's #1 theme park. We couldn't do it without YOU! 💖",
        likes: "22.1K",
        comments: "2.3K",
        time: "3 days ago",
        isVideo: false,
    },
];

const platformIcons = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
};

const platformStyles = {
    instagram: styles.platformInstagram,
    facebook: styles.platformFacebook,
    twitter: styles.platformTwitter,
};

export default function SocialFeed() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const totalSlides = Math.ceil(socialPosts.length / 3);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setIsAutoPlaying(false);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        setIsAutoPlaying(false);
    };

    return (
        <section className={styles.section}>
            {/* Background Decoration */}
            <div className={styles.bgDecoration1}></div>
            <div className={styles.bgDecoration2}></div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.hashtagBadge}
                    >
                        <Instagram size={18} />
                        <span className={styles.hashtagText}>#WildVadiMoments</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Follow Our <span className={styles.titleHighlight}>Adventures</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.description}
                    >
                        Join our community of thrill-seekers! Share your moments with #WildVadi
                    </motion.p>
                </div>

                {/* Carousel */}
                <div className={styles.carouselWrapper}>
                    {/* Navigation Arrows */}
                    <button
                        onClick={goPrev}
                        className={`${styles.navButton} ${styles.prevButton}`}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goNext}
                        className={`${styles.navButton} ${styles.nextButton}`}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Posts Slider */}
                    <div className={styles.sliderContainer}>
                        <motion.div
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className={styles.sliderTrack}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className={styles.slide}>
                                    <div className={styles.postsGrid}>
                                        {socialPosts.slice(slideIndex * 3, slideIndex * 3 + 3).map((post) => {
                                            const PlatformIcon = platformIcons[post.platform];
                                            const platformStyle = platformStyles[post.platform];

                                            return (
                                                <motion.div
                                                    key={post.id}
                                                    whileHover={{ y: -5 }}
                                                    className={`${styles.postCard} group`}
                                                >
                                                    {/* Image */}
                                                    <div className={styles.imageWrapper}>
                                                        <Image
                                                            src={post.image}
                                                            alt={post.caption}
                                                            fill
                                                            className={styles.image}
                                                        />

                                                        {/* Video Indicator */}
                                                        {post.isVideo && (
                                                            <div className={styles.videoIndicator}>
                                                                <div className={styles.playIconWrapper}>
                                                                    <Play size={28} className={styles.playIcon} />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Platform Badge */}
                                                        <div className={`${styles.platformBadge} ${platformStyle}`}>
                                                            <PlatformIcon size={18} className="text-white" />
                                                        </div>

                                                        {/* Hover Overlay */}
                                                        {/* Hover Overlay */}
                                                        <div className={styles.hoverOverlay}>
                                                            <div className={styles.overlayStat}>
                                                                <Heart size={20} className="fill-current" />
                                                                <span className={styles.overlayStatText}>{post.likes}</span>
                                                            </div>
                                                            <div className={styles.overlayStat}>
                                                                <MessageCircle size={20} />
                                                                <span className={styles.overlayStatText}>{post.comments}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className={styles.postContent}>
                                                        {/* User Info */}
                                                        <div className={styles.userInfo}>
                                                            <Image
                                                                src={post.userImage}
                                                                alt={post.username}
                                                                width={40}
                                                                height={40}
                                                                className={styles.userImage}
                                                            />
                                                            <div className={styles.userDetails}>
                                                                <p className={styles.username}>{post.username}</p>
                                                                <p className={styles.time}>{post.time}</p>
                                                            </div>
                                                        </div>

                                                        {/* Caption */}
                                                        <p className={styles.caption}>
                                                            {post.caption}
                                                        </p>

                                                        {/* Actions */}
                                                        <div className={styles.actions}>
                                                            <div className={styles.actionButtons}>
                                                                <button className={`${styles.actionBtn} ${styles.actionBtnLike}`}>
                                                                    <Heart size={18} />
                                                                    <span className={styles.actionStat}>{post.likes}</span>
                                                                </button>
                                                                <button className={`${styles.actionBtn} ${styles.actionBtnComment}`}>
                                                                    <MessageCircle size={18} />
                                                                    <span className={styles.actionStat}>{post.comments}</span>
                                                                </button>
                                                            </div>
                                                            <button className={styles.externalLinkBtn}>
                                                                <ExternalLink size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots */}
                    <div className={styles.dotsWrapper}>
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`${styles.dot} ${index === currentIndex
                                    ? styles.dotActive
                                    : styles.dotInactive
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Social Follow Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.socialButtons}
                >
                    <a
                        href="#"
                        className={`${styles.socialBtn} ${styles.socialBtnInstagram}`}
                    >
                        <Instagram size={20} />
                        Follow on Instagram
                    </a>
                    <a
                        href="#"
                        className={`${styles.socialBtn} ${styles.socialBtnFacebook}`}
                    >
                        <Facebook size={20} />
                        Like on Facebook
                    </a>
                    <a
                        href="#"
                        className={`${styles.socialBtn} ${styles.socialBtnTwitter}`}
                    >
                        <Twitter size={20} />
                        Follow on Twitter
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
