"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Ticket,
    Phone,
    Clock,
    MapPin,
    ChevronDown,
    Search,
    User
} from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    {
        name: "Attractions",
        href: "#attractions",
        submenu: [
            { name: "Roller Coasters", href: "#" },
            { name: "Water Park", href: "#" },
            { name: "Kids Zone", href: "#" },
            { name: "Shows & Events", href: "#" },
        ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <div className={styles.topBarContent}>
                        <div className={styles.contactInfo}>
                            <span className={styles.infoItem}>
                                <Clock size={14} className={styles.iconPrimary} />
                                Open Today: 10:00 AM - 9:00 PM
                            </span>
                            <span className={styles.infoItem}>
                                <Phone size={14} className={styles.iconPrimary} />
                                +91 1800 123 4567
                            </span>
                            <span className={styles.infoItem}>
                                <MapPin size={14} className={styles.iconPrimary} />
                                Delhi, India
                            </span>
                        </div>
                        <div className={styles.actions}>
                            <Link href="#" className={styles.actionLink}>FAQs</Link>
                            <span className={styles.divider}>|</span>
                            <Link href="#" className={styles.actionLink}>Careers</Link>
                            <span className={styles.divider}>|</span>
                            <Link href="#" className={`${styles.actionLink} flex items-center gap-2`}>
                                <User size={14} />
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`${styles.nav} ${scrolled
                    ? styles.navScrolled
                    : styles.navTransparent
                    }`}
            >
                <div className={styles.container}>
                    <div className={styles.navContent}>

                        {/* Logo */}
                        <Link href="/" className={styles.logo}>
                            <div className="relative">
                                <span className={styles.logoTextWild}>Wild</span>
                                <span className={styles.logoTextVadi}>Vadi</span>
                                <motion.div
                                    className={styles.logoUnderline}
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className={styles.desktopNav}>
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className={styles.navItem}
                                    onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`${styles.navLink} ${activeDropdown === link.name ? styles.navLinkActive : ""
                                            }`}
                                    >
                                        {link.name}
                                        {link.submenu && (
                                            <ChevronDown
                                                size={16}
                                                className={`${styles.dropdownIcon} ${activeDropdown === link.name ? styles.dropdownIconRotated : ""}`}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {link.submenu && activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className={styles.dropdownMenu}
                                            >
                                                {link.submenu.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        href={subLink.href}
                                                        className={styles.dropdownLink}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className={styles.desktopActions}>


                            <Link href="/tickets">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={styles.buyTicketsBtn}
                                >
                                    <Ticket size={18} />
                                    Buy Tickets
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={styles.mobileMenu}
                        >
                            <div className={styles.mobileMenuContent}>
                                {/* Mobile Info */}
                                <div className={styles.mobileInfo}>
                                    <span className={styles.infoItem}>
                                        <Clock size={14} className={styles.iconPrimary} />
                                        10AM - 9PM
                                    </span>
                                    <span className={styles.infoItem}>
                                        <Phone size={14} className={styles.iconPrimary} />
                                        1800 123 4567
                                    </span>
                                </div>

                                {/* Mobile Links */}
                                <div className="space-y-1">
                                    {navLinks.map((link) => (
                                        <div key={link.name}>
                                            <Link
                                                href={link.href}
                                                onClick={() => !link.submenu && setIsOpen(false)}
                                                className={styles.mobileLink}
                                            >
                                                {link.name}
                                                {link.submenu && <ChevronDown size={18} />}
                                            </Link>
                                            {link.submenu && (
                                                <div className={styles.mobileSubMenu}>
                                                    {link.submenu.map((subLink) => (
                                                        <Link
                                                            key={subLink.name}
                                                            href={subLink.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className={styles.mobileSubLink}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile CTA */}
                                <div className={styles.mobileActions}>
                                    <Link
                                        href="/tickets"
                                        className={styles.mobileBtnPrimary}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Ticket size={20} />
                                        Buy Tickets
                                    </Link>

                                    <Link
                                        href="/login"
                                        className={styles.mobileBtnSecondary}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <User size={20} />
                                        Login / Sign Up
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
