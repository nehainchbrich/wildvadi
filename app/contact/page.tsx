"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    ArrowLeft,
    MessageSquare,
    ChevronDown,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    CheckCircle
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: ["123 Adventure Lane", "Mumbai, Maharashtra 400001", "India"],
        color: "bg-primary/10 text-primary",
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+91 1800 123 4567", "+91 22 1234 5678"],
        color: "bg-accent/10 text-accent",
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["info@wildvadi.com", "support@wildvadi.com"],
        color: "bg-secondary/10 text-secondary",
    },
    {
        icon: Clock,
        title: "Opening Hours",
        details: ["Mon - Sun: 10:00 AM - 9:00 PM", "Holidays: 9:00 AM - 10:00 PM"],
        color: "bg-green-100 text-green-600",
    },
];

const faqs = [
    {
        question: "What are the park timings?",
        answer: "WildVadi is open from 10:00 AM to 9:00 PM on weekdays and 9:00 AM to 10:00 PM on weekends and holidays.",
    },
    {
        question: "Is there parking available?",
        answer: "Yes, we have a large parking facility that can accommodate over 5,000 vehicles. Parking charges are ₹100 for 2-wheelers and ₹200 for 4-wheelers.",
    },
    {
        question: "Can I bring outside food?",
        answer: "Outside food is not permitted inside the park. However, we have multiple food courts and restaurants offering a variety of cuisines.",
    },
    {
        question: "Are there age or height restrictions for rides?",
        answer: "Yes, certain rides have height and age restrictions for safety. These are clearly marked at each ride entrance.",
    },
    {
        question: "What is your refund policy?",
        answer: "Full refund is available if cancelled 24 hours before the visit date. 50% refund for cancellations made 12-24 hours before.",
    },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
                            <Link href="/" className={styles.backLink}>
                                <ArrowLeft size={20} />
                                Back to Home
                            </Link>
                            <h1 className={styles.heroTitle}>
                                Contact <span className={styles.heroTitleHighlight}>Us</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>
                    </div>
                </section>

                <div className={`${styles.container} ${styles.contentSection}`}>
                    {/* Contact Info Cards */}
                    <div className={styles.infoCardsGrid}>
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={styles.infoCard}
                            >
                                <div className={`${styles.iconWrapper} ${info.color}`}>
                                    <info.icon size={28} />
                                </div>
                                <h3 className={styles.infoTitle}>{info.title}</h3>
                                {info.details.map((detail, j) => (
                                    <p key={j} className={styles.infoDetail}>{detail}</p>
                                ))}
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.mainGrid}>
                        {/* Contact Form */}
                        <div className={styles.formCard}>
                            <div className={styles.formHeader}>
                                <div className={styles.formIconWrapper}>
                                    <MessageSquare size={24} className={styles.formIcon} />
                                </div>
                                <div>
                                    <h2 className={styles.formTitle}>Send us a Message</h2>
                                    <p className={styles.formSubtitle}>Fill out the form and we'll get back to you</p>
                                </div>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={styles.successMessage}
                                >
                                    <div className={styles.successIconWrapper}>
                                        <CheckCircle size={40} className={styles.successIcon} />
                                    </div>
                                    <h3 className={styles.successTitle}>Message Sent!</h3>
                                    <p className={styles.successText}>Thank you for reaching out. We'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div>
                                            <label className={styles.label}>Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={styles.input}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className={styles.label}>Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={styles.input}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.formRow}>
                                        <div>
                                            <label className={styles.label}>Phone Number</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className={styles.input}
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className={styles.label}>Subject</label>
                                            <select
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className={styles.input}
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="tickets">Ticket Booking</option>
                                                <option value="feedback">Feedback</option>
                                                <option value="corporate">Corporate Events</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={styles.label}>Your Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={styles.textarea}
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map & Social */}
                        <div className={styles.sidebar}>
                            {/* Map */}
                            <div className={styles.mapCard}>
                                <div className={styles.mapWrapper}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701865432109!5m2!1sen!2sin"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-xl"
                                    ></iframe>
                                </div>
                                <div className={styles.mapFooter}>
                                    <div>
                                        <h3 className={styles.mapTitle}>WildVadi Theme Park</h3>
                                        <p className={styles.mapAddress}>123 Adventure Lane, Mumbai</p>
                                    </div>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.directionsBtn}
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className={styles.socialCard}>
                                <h3 className={styles.socialTitle}>Follow Us</h3>
                                <p className={styles.socialText}>Stay connected for the latest updates and offers!</p>
                                <div className={styles.socialLinks}>
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            className={styles.socialLink}
                                            aria-label={social.label}
                                        >
                                            <social.icon size={22} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className={styles.faqSection}>
                        <div className={styles.faqHeader}>
                            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                            <p className={styles.faqSubtitle}>
                                Find quick answers to common questions about visiting WildVadi
                            </p>
                        </div>

                        <div className={styles.faqList}>
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={styles.faqItem}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className={styles.faqButton}
                                    >
                                        <span className={styles.faqQuestion}>{faq.question}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ""}`}
                                        />
                                    </button>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className={styles.faqAnswerWrapper}
                                        >
                                            <p className={styles.faqAnswer}>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
