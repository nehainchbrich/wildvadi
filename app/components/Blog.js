"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import styles from "./Blog.module.css";

const blogPosts = [
    {
        id: 1,
        title: "New Mega Coaster Coming in Summer 2025",
        excerpt: "Get ready for the thrill of your life! Our newest attraction will feature a 300-foot drop and speeds up to 95 mph.",
        image: "https://images.unsplash.com/photo-1513612861994-bcb9b1ba1d66?q=80&w=2070&auto=format&fit=crop",
        category: "Announcements",
        date: "Dec 2, 2025",
        readTime: "3 min read",
        author: "WildVadi Team",
        featured: true,
    },
    {
        id: 2,
        title: "Family Weekend Special: Kids Go Free!",
        excerpt: "This December, bring your little ones for free every weekend. Create magical memories without breaking the bank.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop",
        category: "Offers",
        date: "Dec 1, 2025",
        readTime: "2 min read",
        author: "Marketing Team",
        featured: false,
    },
    {
        id: 3,
        title: "Behind the Scenes: How We Keep You Safe",
        excerpt: "Discover the rigorous safety protocols and daily checks that make WildVadi one of the safest parks in the world.",
        image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop",
        category: "Safety",
        date: "Nov 28, 2025",
        readTime: "5 min read",
        author: "Safety Director",
        featured: false,
    },
    {
        id: 4,
        title: "Holiday Light Festival Starts Dec 15th",
        excerpt: "Experience the magic of over 2 million lights, live performances, and special holiday treats at our annual festival.",
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2070&auto=format&fit=crop",
        category: "Events",
        date: "Nov 25, 2025",
        readTime: "4 min read",
        author: "Events Team",
        featured: false,
    },
];

export default function Blog() {
    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <section className={styles.section}>
            {/* Background Decoration */}
            <div className={styles.bgDecoration1}></div>
            <div className={styles.bgDecoration2}></div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={styles.subtitle}
                        >
                            Latest Updates
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={styles.title}
                        >
                            News & Blog
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/blog"
                            className={`${styles.viewAllLink} group`}
                        >
                            View All Articles
                            <ArrowRight size={20} className={`${styles.linkArrow} group-hover:translate-x-1`} />
                        </Link>
                    </motion.div>
                </div>

                {/* Blog Grid */}
                <div className={styles.grid}>
                    {/* Featured Post */}
                    {featuredPost && (
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`${styles.featuredArticle} group`}
                        >
                            <Link href={`/blog/${featuredPost.id}`} className={styles.featuredLink}>
                                <div className={styles.featuredCard}>
                                    {/* Image */}
                                    <div className={styles.featuredImageWrapper}>
                                        <Image
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            fill
                                            className={styles.image}
                                        />
                                        <div className={styles.imageOverlay}></div>

                                        {/* Category Badge */}
                                        <div className={styles.categoryBadge}>
                                            <span className={styles.categoryBadgeText}>
                                                {featuredPost.category}
                                            </span>
                                        </div>

                                        {/* Featured Badge */}
                                        <div className={styles.featuredBadge}>
                                            <span className={styles.featuredBadgeText}>
                                                Featured
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={styles.featuredContent}>
                                        <h3 className={styles.featuredTitle}>
                                            {featuredPost.title}
                                        </h3>
                                        <p className={styles.featuredExcerpt}>
                                            {featuredPost.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className={styles.metaWrapper}>
                                            <span className={styles.metaItem}>
                                                <User size={16} />
                                                {featuredPost.author}
                                            </span>
                                            <span className={styles.metaItem}>
                                                <Calendar size={16} />
                                                {featuredPost.date}
                                            </span>
                                            <span className={styles.metaItem}>
                                                <Clock size={16} />
                                                {featuredPost.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    )}

                    {/* Regular Posts */}
                    <div className={styles.regularPostsList}>
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <Link href={`/blog/${post.id}`} className={styles.regularLink}>
                                    <div className={styles.regularCard}>
                                        {/* Thumbnail */}
                                        <div className={styles.regularThumbnail}>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className={styles.image}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className={styles.regularContent}>
                                            <div>
                                                <span className={styles.regularCategory}>
                                                    {post.category}
                                                </span>
                                                <h3 className={styles.regularTitle}>
                                                    {post.title}
                                                </h3>
                                            </div>

                                            <div className={styles.regularMeta}>
                                                <span className={styles.regularMetaItem}>
                                                    <Calendar size={14} />
                                                    {post.date}
                                                </span>
                                                <span className={styles.regularMetaItem}>
                                                    <Clock size={14} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
