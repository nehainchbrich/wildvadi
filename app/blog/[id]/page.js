"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Link2,
    ChevronLeft,
    ChevronRight,
    Tag
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const blogPosts = [
    {
        id: "1",
        title: "New Mega Coaster Coming in Summer 2025",
        excerpt: "Get ready for the thrill of your life! Our newest attraction will feature a 300-foot drop, reaching speeds up to 95 mph, making it the fastest coaster in South Asia.",
        content: `
            <p>We are thrilled to announce the most exciting addition to WildVadi in over a decade – the <strong>Mega Thunder Coaster</strong>, set to open in Summer 2025!</p>
            
            <h2>Record-Breaking Specifications</h2>
            <p>This engineering marvel will feature:</p>
            <ul>
                <li>A breathtaking <strong>300-foot vertical drop</strong></li>
                <li>Maximum speed of <strong>95 mph</strong>, making it the fastest in South Asia</li>
                <li>4 inversions including a never-before-seen "Sky Twist"</li>
                <li>Total track length of <strong>5,200 feet</strong></li>
                <li>Ride duration of approximately <strong>3 minutes</strong></li>
            </ul>

            <h2>State-of-the-Art Technology</h2>
            <p>The Mega Thunder Coaster incorporates the latest in roller coaster technology, including magnetic launch systems and advanced safety mechanisms. Our partnership with leading coaster manufacturers ensures a smooth yet exhilarating experience.</p>

            <blockquote>"This coaster represents the pinnacle of thrill engineering. It will redefine what guests expect from a theme park experience." – Chief Engineer, WildVadi</blockquote>

            <h2>What to Expect</h2>
            <p>Riders will experience moments of weightlessness, rapid acceleration, and stunning aerial views of the entire park. The coaster track winds through specially designed terrain, creating an immersive adventure unlike any other.</p>

            <h2>Opening Timeline</h2>
            <p>Construction is currently underway, with the following milestones:</p>
            <ul>
                <li><strong>March 2025:</strong> Track completion</li>
                <li><strong>April 2025:</strong> Testing begins</li>
                <li><strong>June 2025:</strong> Grand opening celebration</li>
            </ul>

            <p>Season pass holders will get exclusive early access one week before the public opening. Stay tuned for more updates!</p>
        `,
        image: "https://images.unsplash.com/photo-1513612861994-bcb9b1ba1d66?q=80&w=2070&auto=format&fit=crop",
        category: "Announcements",
        date: "Dec 2, 2025",
        readTime: "3 min read",
        author: "WildVadi Team",
        authorImage: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: "2",
        title: "Family Weekend Special: Kids Go Free!",
        excerpt: "This December, bring your little ones for free every weekend. Create magical memories without breaking the bank.",
        content: `
            <p>December just got more magical at WildVadi! We're excited to announce our <strong>Kids Go Free</strong> weekend special, running every Saturday and Sunday throughout December 2025.</p>

            <h2>How It Works</h2>
            <p>For every paying adult ticket purchased, one child (ages 3-11) enters the park absolutely FREE! This offer applies to both online and on-site ticket purchases.</p>

            <h2>What's Included</h2>
            <ul>
                <li>Full access to all kid-friendly attractions</li>
                <li>Entry to the Kids Zone play area</li>
                <li>Character meet and greets</li>
                <li>Access to shows and entertainment</li>
            </ul>

            <h2>Special December Activities</h2>
            <p>In addition to our regular attractions, December weekends feature:</p>
            <ul>
                <li>Santa's Workshop experience</li>
                <li>Holiday-themed face painting</li>
                <li>Special kid's menu at our restaurants</li>
                <li>Festive parade at 5 PM daily</li>
            </ul>

            <p>Don't miss this opportunity to create lasting family memories. Book your tickets today!</p>
        `,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop",
        category: "Events",
        date: "Dec 1, 2025",
        readTime: "2 min read",
        author: "Marketing Team",
        authorImage: "https://i.pravatar.cc/100?img=25",
    },
    {
        id: "3",
        title: "Behind the Scenes: How We Keep You Safe",
        excerpt: "Discover the rigorous safety protocols and daily checks that make WildVadi one of the safest parks in the world.",
        content: `
            <p>At WildVadi, safety isn't just a priority – it's our foundation. Today, we're taking you behind the scenes to show you the extensive measures we take to ensure every guest has a safe experience.</p>

            <h2>Daily Inspections</h2>
            <p>Every morning before the park opens, our dedicated safety team conducts thorough inspections of all attractions. This includes:</p>
            <ul>
                <li>Mechanical system checks</li>
                <li>Safety restraint testing</li>
                <li>Track and structure inspections</li>
                <li>Control system verification</li>
            </ul>

            <h2>Our Safety Team</h2>
            <p>Our safety department employs over 150 trained professionals, including engineers, technicians, and emergency response personnel available 24/7.</p>

            <h2>Certifications & Standards</h2>
            <p>WildVadi maintains certifications from international safety bodies and exceeds all national safety regulations. We undergo regular third-party audits to ensure compliance.</p>
        `,
        image: "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=2071&auto=format&fit=crop",
        category: "Behind The Scenes",
        date: "Nov 28, 2025",
        readTime: "5 min read",
        author: "Safety Director",
        authorImage: "https://i.pravatar.cc/100?img=33",
    },
    {
        id: "4",
        title: "Holiday Light Festival Starts Dec 15th",
        excerpt: "Experience the magic of over 2 million lights, live performances, and special holiday treats at our annual festival.",
        content: `
            <p>Get ready to be dazzled! The WildVadi Holiday Light Festival returns bigger and brighter than ever, featuring over 2 million sparkling lights throughout the park.</p>

            <h2>Festival Highlights</h2>
            <ul>
                <li>Spectacular light tunnels and displays</li>
                <li>Live musical performances every evening</li>
                <li>Fireworks show at 9 PM (weekends)</li>
                <li>Holiday-themed food and beverages</li>
                <li>Gift market with unique handcrafted items</li>
            </ul>

            <h2>Special Experiences</h2>
            <p>New this year: an interactive light maze and synchronized light-and-music show on the lake.</p>
        `,
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2070&auto=format&fit=crop",
        category: "Events",
        date: "Nov 25, 2025",
        readTime: "4 min read",
        author: "Events Team",
        authorImage: "https://i.pravatar.cc/100?img=45",
    },
    {
        id: "5",
        title: "10 Tips for Your First Visit to WildVadi",
        excerpt: "Planning your first visit? Here's our insider guide to making the most of your day at the park.",
        content: `
            <p>Planning your first visit to WildVadi? We've got you covered with these insider tips!</p>

            <h2>1. Arrive Early</h2>
            <p>Gates open at 10 AM. Arriving 30 minutes early ensures you're among the first inside.</p>

            <h2>2. Download Our App</h2>
            <p>Real-time wait times, park maps, and mobile food ordering at your fingertips.</p>

            <h2>3. Start from the Back</h2>
            <p>Most guests head to front attractions first. Go to the back of the park for shorter lines early in the day.</p>

            <h2>4. Use Single Rider Lines</h2>
            <p>If you don't mind riding alone, single rider lines can cut your wait by half.</p>

            <h2>5. Pack Light</h2>
            <p>Lockers are available, but traveling light makes navigation easier.</p>
        `,
        image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2076&auto=format&fit=crop",
        category: "Tips & Guides",
        date: "Nov 20, 2025",
        readTime: "6 min read",
        author: "Guest Services",
        authorImage: "https://i.pravatar.cc/100?img=52",
    },
];

export default function BlogDetailPage() {
    const params = useParams();
    const post = blogPosts.find((p) => p.id === params.id);

    if (!post) {
        return (
            <>
                <Navbar />
                <main className={styles.notFoundMain}>
                    <div className={styles.notFoundContainer}>
                        <h1 className={styles.notFoundTitle}>Post Not Found</h1>
                        <p className={styles.notFoundText}>The article you're looking for doesn't exist.</p>
                        <Link href="/blog" className={styles.backLink}>
                            ← Back to Blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    // Get related posts (same category, different post)
    const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2);

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Hero Image */}
                <div className={styles.heroSection}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className={styles.image}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>

                    {/* Back Button */}
                    <div className={styles.backButtonWrapper}>
                        <Link
                            href="/blog"
                            className={styles.backButton}
                        >
                            <ArrowLeft size={18} />
                            Back to Blog
                        </Link>
                    </div>

                    {/* Title Overlay */}
                    <div className={styles.titleOverlay}>
                        <div className={styles.titleContainer}>
                            <span className={styles.categoryBadge}>
                                <Tag size={14} />
                                {post.category}
                            </span>
                            <h1 className={styles.title}>
                                {post.title}
                            </h1>
                            <div className={styles.metaWrapper}>
                                <div className={styles.authorWrapper}>
                                    <Image
                                        src={post.authorImage}
                                        alt={post.author}
                                        width={40}
                                        height={40}
                                        className={styles.authorImage}
                                    />
                                    <span className={styles.authorName}>{post.author}</span>
                                </div>
                                <span className={styles.metaItem}>
                                    <Calendar size={16} />
                                    {post.date}
                                </span>
                                <span className={styles.metaItem}>
                                    <Clock size={16} />
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className={`${styles.container} ${styles.contentSection}`}>
                    <div className={styles.contentContainer}>
                        <div className={styles.contentGrid}>
                            {/* Article Content */}
                            <article className={styles.article}>
                                <div
                                    className={styles.prose}
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Tags */}
                                <div className={styles.tagsWrapper}>
                                    <div className={styles.tagsList}>
                                        <span className={styles.tagsLabel}>Tags:</span>
                                        {["WildVadi", post.category, "Theme Park"].map((tag) => (
                                            <span key={tag} className={styles.tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>

                            {/* Sidebar */}
                            <aside className={styles.sidebar}>
                                {/* Share */}
                                <div className={styles.shareCard}>
                                    <h4 className={styles.shareTitle}>
                                        <Share2 size={18} />
                                        Share
                                    </h4>
                                    <div className={styles.shareButtons}>
                                        <button className={`${styles.shareBtn} ${styles.facebookBtn}`}>
                                            <Facebook size={18} />
                                            <span className={styles.shareBtnText}>Facebook</span>
                                        </button>
                                        <button className={`${styles.shareBtn} ${styles.twitterBtn}`}>
                                            <Twitter size={18} />
                                            <span className={styles.shareBtnText}>Twitter</span>
                                        </button>
                                        <button className={`${styles.shareBtn} ${styles.linkedinBtn}`}>
                                            <Linkedin size={18} />
                                            <span className={styles.shareBtnText}>LinkedIn</span>
                                        </button>
                                        <button className={`${styles.shareBtn} ${styles.copyBtn}`}>
                                            <Link2 size={18} />
                                            <span className={styles.shareBtnText}>Copy Link</span>
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className={styles.relatedSection}>
                                <h3 className={styles.relatedTitle}>Related Articles</h3>
                                <div className={styles.relatedGrid}>
                                    {relatedPosts.map((relPost) => (
                                        <Link key={relPost.id} href={`/blog/${relPost.id}`}>
                                            <div className={`${styles.relatedCard} group`}>
                                                <div className={styles.relatedImageWrapper}>
                                                    <Image
                                                        src={relPost.image}
                                                        alt={relPost.title}
                                                        fill
                                                        className={styles.image}
                                                    />
                                                </div>
                                                <div className={styles.relatedContent}>
                                                    <span className={styles.relatedCategory}>{relPost.category}</span>
                                                    <h4 className={styles.relatedCardTitle}>
                                                        {relPost.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Navigation */}
                        <div className={styles.navigation}>
                            <Link
                                href="/blog"
                                className={styles.navLink}
                            >
                                <ChevronLeft size={20} />
                                All Articles
                            </Link>
                            <Link
                                href="/blog"
                                className={styles.navLink}
                            >
                                More Posts
                                <ChevronRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
