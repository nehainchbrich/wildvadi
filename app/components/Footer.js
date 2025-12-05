"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowRight,
    Send,
    Heart,
    Ticket
} from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Attractions", href: "#attractions" },
    { name: "Tickets & Pricing", href: "#" },
    { name: "Park Map", href: "#" },
    { name: "Events", href: "#" },
    { name: "Careers", href: "#" },
];

const supportLinks = [
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "#contact" },
    { name: "Safety Guidelines", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Lost & Found", href: "#" },
    { name: "Group Bookings", href: "#" },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", className: styles.socialLinkFacebook },
    { icon: Instagram, href: "#", label: "Instagram", className: styles.socialLinkInstagram },
    { icon: Twitter, href: "#", label: "Twitter", className: styles.socialLinkTwitter },
    { icon: Youtube, href: "#", label: "YouTube", className: styles.socialLinkYoutube },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Top Wave */}
            <div className={styles.topWave}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                    className={styles.waveSvg}
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#1A1245"
                        d="M0,60 C360,100 1080,20 1440,60 L1440,100 L0,100 Z"
                    ></path>
                </svg>
            </div>

            {/* Background Pattern */}
            <div className={styles.bgPattern}>
                <div className={styles.bgPatternInner} style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Newsletter Section */}
            <div className={styles.newsletterSection}>
                <div className={styles.container}>
                    <div className={styles.newsletterCard}>
                        <div className={styles.newsletterContent}>
                            <h3 className={styles.newsletterTitle}>
                                Get Exclusive Offers & Updates
                            </h3>
                            <p className={styles.newsletterText}>
                                Subscribe to our newsletter and never miss a deal!
                            </p>
                        </div>
                        <form className={styles.newsletterForm}>
                            <div className={styles.inputWrapper}>
                                <Mail className={styles.mailIcon} size={20} />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={styles.input}
                                />
                            </div>
                            <button
                                type="submit"
                                className={styles.subscribeBtn}
                            >
                                <Send size={20} />
                                <span className={styles.subscribeText}>Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className={styles.mainContent}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        {/* Brand Column */}
                        <div>
                            <Link href="/" className={styles.brandLink}>
                                <h2 className={styles.brandName}>
                                    <span className={styles.brandNameWhite}>Wild</span>
                                    <span className={styles.brandNamePrimary}>Vadi</span>
                                </h2>
                            </Link>
                            <p className={styles.brandDescription}>
                                India's #1 theme park destination. Creating magical memories and thrilling adventures since 2009.
                            </p>

                            {/* Social Links */}
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        whileHover={{ y: -3 }}
                                        className={`${styles.socialLink} ${social.className}`}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={styles.columnTitle}>Quick Links</h4>
                            <ul className={styles.linkList}>
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`${styles.footerLink} group`}
                                        >
                                            <ArrowRight size={14} className={styles.linkArrow} />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h4 className={styles.columnTitle}>Support</h4>
                            <ul className={styles.linkList}>
                                {supportLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`${styles.footerLink} group`}
                                        >
                                            <ArrowRight size={14} className={styles.linkArrow} />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className={styles.columnTitle}>Contact Us</h4>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <div className={`${styles.contactIconWrapper} ${styles.iconPrimary}`}>
                                        <MapPin size={18} className={styles.contactIconPrimary} />
                                    </div>
                                    <div>
                                        <p className={styles.contactLabel}>Location</p>
                                        <p className={styles.contactValue}>123 Adventure Lane, Mumbai, India</p>
                                    </div>
                                </li>
                                <li className={styles.contactItem}>
                                    <div className={`${styles.contactIconWrapper} ${styles.iconAccent}`}>
                                        <Phone size={18} className={styles.contactIconAccent} />
                                    </div>
                                    <div>
                                        <p className={styles.contactLabel}>Phone</p>
                                        <p className={styles.contactValue}>+91 1800 123 4567</p>
                                    </div>
                                </li>
                                <li className={styles.contactItem}>
                                    <div className={`${styles.contactIconWrapper} ${styles.iconSecondary}`}>
                                        <Clock size={18} className={styles.contactIconSecondary} />
                                    </div>
                                    <div>
                                        <p className={styles.contactLabel}>Hours</p>
                                        <p className={styles.contactValue}>Mon-Sun: 10AM - 9PM</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Book Now Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={styles.bookBtn}
                            >
                                <Ticket size={20} />
                                Book Tickets
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <div className={styles.bottomContent}>
                        <p className={styles.copyright}>
                            © {new Date().getFullYear()} WildVadi Theme Park. All rights reserved.
                        </p>
                        <div className={styles.madeWith}>
                            Made with <Heart size={14} className={styles.heartIcon} /> in India
                        </div>
                        <div className={styles.legalLinks}>
                            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
                            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
                            <Link href="#" className={styles.legalLink}>Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
