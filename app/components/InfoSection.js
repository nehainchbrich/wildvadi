"use client";

import { Clock, MapPin, Ticket } from "lucide-react";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
    return (
        <section className={styles.section}>
            {/* Background Pattern */}
            <div className={styles.bgPattern}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Hours */}
                    <div className={styles.card}>
                        <div className={`${styles.iconWrapper} ${styles.iconSecondary}`}>
                            <Clock size={32} />
                        </div>
                        <h3 className={`${styles.title} ${styles.titleSecondary}`}>Opening Hours</h3>
                        <ul className={styles.hoursList}>
                            <li className={styles.hoursItem}>
                                <span>Mon - Fri</span>
                                <span className={styles.hoursTime}>10:00 AM - 7:00 PM</span>
                            </li>
                            <li className={styles.hoursItem}>
                                <span>Sat - Sun</span>
                                <span className={styles.hoursTime}>9:00 AM - 9:00 PM</span>
                            </li>
                            <li className={styles.hoursNote}>
                                *Special Holiday Hours Apply
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className={styles.card}>
                        <div className={`${styles.iconWrapper} ${styles.iconPrimary}`}>
                            <MapPin size={32} />
                        </div>
                        <h3 className={`${styles.title} ${styles.titlePrimary}`}>Find Us</h3>
                        <p className={styles.address}>
                            123 Adventure Lane,<br />
                            Wild Valley, WV 54321
                        </p>
                        <button className={styles.directionsBtn}>
                            Get Directions
                        </button>
                    </div>

                    {/* Tickets */}
                    <div className={styles.card}>
                        <div className={`${styles.iconWrapper} ${styles.iconAccent}`}>
                            <Ticket size={32} />
                        </div>
                        <h3 className={`${styles.title} ${styles.titleAccent}`}>Tickets</h3>
                        <div className={styles.ticketsList}>
                            <div className={styles.ticketItem}>
                                <span className={styles.ticketLabel}>Adult</span>
                                <span className={styles.ticketPrice}>$49</span>
                            </div>
                            <div className={styles.ticketItem}>
                                <span className={styles.ticketLabel}>Child (under 12)</span>
                                <span className={styles.ticketPrice}>$35</span>
                            </div>
                            <button className={styles.buyBtn}>
                                Buy Online & Save
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
