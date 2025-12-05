"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Gift, Ticket, Star, Sparkles, Clock, ArrowRight, Users, Percent } from "lucide-react";
import styles from "./Offers.module.css";

const offers = [
    {
        id: 1,
        title: "Family Fun Pass",
        subtitle: "Holiday Special",
        discount: "40%",
        description: "Unlimited access to all rides, water parks, and VIP lounge for the whole family!",
        originalPrice: "₹4,999",
        offerPrice: "₹2,999",
        perUnit: "/family",
        badge: "BEST SELLER",
        badgeColor: "badgePrimary",
        gradient: "gradientPrimary",
        benefits: ["Unlimited Rides", "Free Meals", "VIP Access"],
        bgImage: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Weekend Splash",
        subtitle: "Water Park Special",
        discount: "30%",
        description: "Beat the heat! Full day access to all water slides, wave pools, and lazy rivers.",
        originalPrice: "₹1,999",
        offerPrice: "₹1,399",
        perUnit: "/person",
        badge: "TRENDING",
        badgeColor: "badgeAccent",
        gradient: "gradientAccent",
        benefits: ["All Water Rides", "Locker Included", "Snack Voucher"],
        bgImage: "https://images.unsplash.com/photo-1560713781-d00a25c79f5e?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Annual Pass",
        subtitle: "Unlimited Fun All Year",
        discount: "50%",
        description: "Visit unlimited times for a whole year! Priority queues and exclusive member events.",
        originalPrice: "₹19,999",
        offerPrice: "₹9,999",
        perUnit: "/year",
        badge: "SAVE BIG",
        badgeColor: "badgeSecondary",
        gradient: "gradientSecondary",
        benefits: ["365 Days Access", "Priority Queue", "Member Events"],
        bgImage: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Kids Go Free",
        subtitle: "This December Only",
        discount: "100%",
        description: "Every child under 12 enters FREE with a paying adult. Create magical memories!",
        originalPrice: "₹1,499",
        offerPrice: "FREE",
        perUnit: "/child",
        badge: "LIMITED",
        badgeColor: "badgeGreen",
        gradient: "gradientGreen",
        benefits: ["Free Entry U12", "Free Face Paint", "Gift Surprise"],
        bgImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Offers() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-slide
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % offers.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % offers.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
        setIsAutoPlaying(false);
    };

    const currentOffer = offers[currentSlide];

    return (
        <section className={styles.section}>
            {/* Background Image with Overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                    className={styles.bgImageWrapper}
                >
                    <div
                        className={styles.bgImage}
                        style={{ backgroundImage: `url(${currentOffer.bgImage})` }}
                    />
                    <div className={styles.bgOverlay}></div>
                </motion.div>
            </AnimatePresence>

            {/* Animated Pattern */}
            <div className={styles.patternOverlay}>
                <div className={styles.pattern} style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.contentWrapper}>

                    {/* Left Side - Discount Badge */}
                    <motion.div
                        key={`badge-${currentSlide}`}
                        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className={styles.badgeWrapper}
                    >
                        <div className={styles.badgeSize}>
                            {/* Outer Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className={styles.outerRing}
                            />
                            {/* Inner Circle */}
                            <div className={`${styles.innerCircle} ${styles[currentOffer.gradient]}`}>
                                <span className={styles.upToText}>Up to</span>
                                <div className={styles.discountWrapper}>
                                    <span className={styles.discountText}>{currentOffer.discount}</span>
                                </div>
                                <span className={styles.offText}>OFF</span>
                            </div>

                            {/* Badge */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`${styles.badgeLabel} ${styles[currentOffer.badgeColor]}`}
                            >
                                {currentOffer.badge}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Center - Main Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${currentSlide}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className={styles.mainContent}
                        >
                            {/* Subtitle */}
                            <div className={styles.subtitle}>
                                <Sparkles size={16} className={styles.textYellow} />
                                <span className={styles.subtitleText}>{currentOffer.subtitle}</span>
                            </div>

                            <h2 className={styles.title}>
                                {currentOffer.title}
                            </h2>

                            <p className={styles.description}>
                                {currentOffer.description}
                            </p>

                            {/* Benefits */}
                            <div className={styles.benefitsWrapper}>
                                {currentOffer.benefits.map((benefit, i) => (
                                    <div key={i} className={styles.benefitItem}>
                                        <Star size={14} className={`${styles.textYellow} ${styles.fillYellow}`} />
                                        <span className={styles.benefitText}>{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Price & CTA */}
                            <div className={styles.priceCtaWrapper}>
                                <div className={styles.priceInfo}>
                                    <span className={styles.originalPrice}>{currentOffer.originalPrice}</span>
                                    <div className={styles.offerPriceWrapper}>
                                        <span className={styles.offerPrice}>{currentOffer.offerPrice}</span>
                                        <span className={styles.perUnit}>{currentOffer.perUnit}</span>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`${styles.bookBtn} ${styles[currentOffer.gradient]}`}
                                >
                                    Book Now
                                    <ArrowRight className={styles.arrowIcon} />
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right Side - Navigation & Indicators */}
                    <div className={styles.navigationWrapper}>
                        {/* Slide Counter */}
                        <div className={styles.slideCounter}>
                            <span className={styles.currentSlide}>
                                {String(currentSlide + 1).padStart(2, "0")}
                            </span>
                            <span className={styles.slideSeparator}>/</span>
                            <span className={styles.totalSlides}>
                                {String(offers.length).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Vertical Dots */}
                        <div className={styles.dotsWrapper}>
                            {offers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`${styles.dot} ${index === currentSlide
                                        ? `${styles.dotActive} ${styles[currentOffer.gradient]}`
                                        : styles.dotInactive
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className={styles.arrowsWrapper}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                className={styles.arrowBtn}
                            >
                                <ChevronLeft size={24} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                className={styles.arrowBtn}
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Bottom - Offer Preview Cards */}
                <div className={styles.previewCards}>
                    {offers.map((offer, index) => (
                        <motion.button
                            key={offer.id}
                            onClick={() => {
                                setCurrentSlide(index);
                                setIsAutoPlaying(false);
                            }}
                            whileHover={{ y: -5 }}
                            className={`${styles.previewCard} ${index === currentSlide
                                ? styles.previewCardActive
                                : styles.previewCardInactive
                                }`}
                        >
                            {/* Active Indicator */}
                            {index === currentSlide && (
                                <motion.div
                                    layoutId="activeOffer"
                                    className={`${styles.activeIndicator} ${styles[offer.gradient]}`}
                                />
                            )}

                            <div className={styles.previewContent}>
                                <div className={`${styles.previewBadge} ${styles[offer.badgeColor]}`}>
                                    {offer.discount} OFF
                                </div>
                                <h4 className={styles.previewTitle}>{offer.title}</h4>
                                <p className={styles.previewSubtitle}>{offer.subtitle}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
