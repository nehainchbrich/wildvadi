"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Search,
    Calendar,
    Clock,
    User,
    ArrowRight,
    Tag,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const categories = [
    { name: "All", count: 12 },
    { name: "Announcements", count: 3 },
    { name: "Events", count: 4 },
    { name: "Tips & Guides", count: 3 },
    { name: "Behind The Scenes", count: 2 },
];

const blogPosts = [
    {
        id: 1,
        title: "New Mega Coaster Coming in Summer 2025",
        excerpt: "Get ready for the thrill of your life! Our newest attraction will feature a 300-foot drop, reaching speeds up to 95 mph, making it the fastest coaster in South Asia.",
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
        category: "Events",
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
        category: "Behind The Scenes",
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
    {
        id: 5,
        title: "10 Tips for Your First Visit to WildVadi",
        excerpt: "Planning your first visit? Here's our insider guide to making the most of your day at the park.",
        image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2076&auto=format&fit=crop",
        category: "Tips & Guides",
        date: "Nov 20, 2025",
        readTime: "6 min read",
        author: "Guest Services",
        featured: false,
    },
    {
        id: 6,
        title: "Water Park Expansion: 5 New Slides Opening",
        excerpt: "We're adding five brand new water slides to our water park, including the tallest body slide in India.",
        image: "https://images.unsplash.com/photo-1560713781-d00a25c79f5e?q=80&w=2070&auto=format&fit=crop",
        category: "Announcements",
        date: "Nov 15, 2025",
        readTime: "3 min read",
        author: "WildVadi Team",
        featured: false,
    },
    {
        id: 7,
        title: "Meet Our Mascot: The Story of Vadi",
        excerpt: "Learn the heartwarming story behind Vadi, our beloved park mascot who has been greeting guests since 2010.",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        category: "Behind The Scenes",
        date: "Nov 10, 2025",
        readTime: "4 min read",
        author: "Creative Team",
        featured: false,
    },
    {
        id: 8,
        title: "Best Times to Visit: Avoiding the Crowds",
        excerpt: "Want shorter lines and more ride time? Check out our guide to the best days and times to visit.",
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2070&auto=format&fit=crop",
        category: "Tips & Guides",
        date: "Nov 5, 2025",
        readTime: "5 min read",
        author: "Guest Services",
        featured: false,
    },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const featuredPost = blogPosts.find((post) => post.featured);

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory =
            activeCategory === "All" || post.category === activeCategory;

        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch && !post.featured;
    });

    return (
        <>
            <Navbar />

            <main className={styles.main}>

                {/* -------------------- HERO -------------------- */}
                <section className={styles.heroSection}>
                    <div className={styles.heroOverlay}>
                        <div
                            className={styles.heroPattern}
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        ></div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                News &{" "}
                                <span className={styles.heroTitleHighlight}>
                                    Blog
                                </span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Stay updated with the latest news, events,
                                and insider tips from WildVadi
                            </p>
                        </div>
                    </div>
                </section>

                <div className={`${styles.container} ${styles.contentSection}`}>

                    {/* -------------------- FEATURED POST -------------------- */}
                    {featuredPost && (
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={styles.featuredArticle}
                        >
                            <Link href={`/blog/${featuredPost.id}`}>
                                <div className={styles.featuredCard}>
                                    <div className={styles.featuredGrid}>

                                        {/* IMAGE */}
                                        <div className={styles.featuredImageWrapper}>
                                            <Image
                                                src={featuredPost.image}
                                                alt={featuredPost.title}
                                                fill
                                                className={styles.image}
                                            />

                                            <div className={styles.featuredBadge}>
                                                <span className={styles.featuredBadgeText}>
                                                    Featured
                                                </span>
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className={styles.featuredContent}>
                                            <span className={styles.featuredCategory}>
                                                <Tag size={14} />
                                                {featuredPost.category}
                                            </span>

                                            <h2 className={styles.featuredTitle}>
                                                {featuredPost.title}
                                            </h2>

                                            <p className={styles.featuredExcerpt}>
                                                {featuredPost.excerpt}
                                            </p>

                                            <div className={styles.featuredMeta}>
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
                                </div>
                            </Link>
                        </motion.article>
                    )}

                    {/* -------------------- FILTERS -------------------- */}
                    <div className={styles.filtersWrapper}>

                        <div className={styles.categoriesList}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setActiveCategory(cat.name)}
                                    className={`${styles.categoryBtn} ${activeCategory === cat.name
                                        ? styles.categoryBtnActive
                                        : styles.categoryBtnInactive
                                        }`}
                                >
                                    {cat.name} ({cat.count})
                                </button>
                            ))}
                        </div>

                        {/* SEARCH */}
                        <div className={styles.searchWrapper}>
                            <Search className={styles.searchIcon} size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) =>
                                    setSearchQuery(e.target.value)
                                }
                                className={styles.searchInput}
                            />
                        </div>
                    </div>

                    {/* -------------------- BLOG GRID -------------------- */}
                    <div className={styles.postsGrid}>
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.id}`}>
                                    <div className={styles.postCard}>

                                        {/* IMAGE */}
                                        <div className={styles.postImageWrapper}>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className={styles.image}
                                            />
                                            <div className={styles.postCategoryBadge}>
                                                <span className={styles.postCategoryText}>
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className={styles.postContent}>
                                            <h3 className={styles.postTitle}>
                                                {post.title}
                                            </h3>

                                            <p className={styles.postExcerpt}>
                                                {post.excerpt}
                                            </p>

                                            <div className={styles.postMeta}>
                                                <span className={styles.metaItem}>
                                                    <Calendar size={14} />
                                                    {post.date}
                                                </span>
                                                <span className={styles.metaItem}>
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

                    {/* IF NO POSTS */}
                    {filteredPosts.length === 0 && (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>📭</div>
                            <h3 className={styles.emptyTitle}>No articles found</h3>
                            <p className={styles.emptyText}>
                                Try adjusting your search or filter
                            </p>
                        </div>
                    )}

                    {/* -------------------- PAGINATION -------------------- */}
                    <div className={styles.pagination}>
                        <button className={styles.paginationBtn}>
                            <ChevronLeft size={20} />
                        </button>

                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                className={`${styles.paginationBtn} ${page === 1
                                    ? styles.paginationBtnActive
                                    : styles.paginationBtnInactive
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button className={styles.paginationBtn}>
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* -------------------- NEWSLETTER -------------------- */}
                    <div className={styles.newsletter}>
                        <h3 className={styles.newsletterTitle}>
                            Subscribe to Our Newsletter
                        </h3>

                        <p className={styles.newsletterText}>
                            Get the latest news, exclusive offers, and insider tips delivered straight to your inbox.
                        </p>

                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.newsletterInput}
                            />

                            <button type="submit" className={styles.newsletterBtn}>
                                Subscribe
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
