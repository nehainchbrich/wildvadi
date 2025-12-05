"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Ticket,
    Calendar,
    Users,
    Minus,
    Plus,
    Check,
    Clock,
    Star,
    Shield,
    ArrowLeft,
    CreditCard,
    Gift,
    Info,
    ChevronDown
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const ticketTypes = [
    {
        id: "regular",
        name: "Regular Pass",
        description: "Access to all dry rides and attractions",
        price: 999,
        originalPrice: 1499,
        features: [
            "All Roller Coasters",
            "Kids Zone Access",
            "Shows & Events",
            "Valid for 1 Day",
        ],
        popular: false,
        color: "from-gray-600 to-gray-700",
    },
    {
        id: "combo",
        name: "Combo Pass",
        description: "Full access to rides + water park",
        price: 1499,
        originalPrice: 2499,
        features: [
            "All Dry Rides",
            "Water Park Access",
            "Kids Zone Access",
            "Shows & Events",
            "1 Free Meal",
            "Valid for 1 Day",
        ],
        popular: true,
        color: "from-primary to-orange-500",
    },
    {
        id: "premium",
        name: "Premium Pass",
        description: "VIP experience with priority access",
        price: 2499,
        originalPrice: 3999,
        features: [
            "All Attractions",
            "Water Park Access",
            "Priority Queue",
            "VIP Lounge",
            "Unlimited Meals",
            "Free Locker",
            "Valid for 1 Day",
        ],
        popular: false,
        color: "from-secondary to-purple-600",
    },
];

export default function TicketsPage() {
    const [selectedTicket, setSelectedTicket] = useState("combo");
    const [selectedDate, setSelectedDate] = useState("");
    const [quantities, setQuantities] = useState({
        adult: 2,
        child: 0,
        senior: 0,
    });
    const [promoCode, setPromoCode] = useState("");

    const currentTicket = ticketTypes.find((t) => t.id === selectedTicket)!;

    const totalQuantity = quantities.adult + quantities.child + quantities.senior;
    const subtotal = currentTicket.price * quantities.adult +
        (currentTicket.price * 0.7) * quantities.child +
        (currentTicket.price * 0.8) * quantities.senior;
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    const updateQuantity = (type: keyof typeof quantities, delta: number) => {
        setQuantities((prev) => ({
            ...prev,
            [type]: Math.max(0, prev[type] + delta),
        }));
    };

    // Generate next 7 days
    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return {
            date: date.toISOString().split("T")[0],
            day: date.toLocaleDateString("en-US", { weekday: "short" }),
            dayNum: date.getDate(),
            month: date.toLocaleDateString("en-US", { month: "short" }),
        };
    });

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
                                Buy <span className={styles.heroTitleHighlight}>Tickets</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Choose your perfect pass and get ready for an unforgettable adventure!
                            </p>
                        </div>
                    </div>
                </section>

                <div className={`${styles.container} ${styles.contentSection}`}>
                    <div className={styles.mainGrid}>

                        {/* Left Column - Ticket Selection */}
                        <div className={styles.leftColumn}>

                            {/* Step 1: Select Ticket Type */}
                            <div className={styles.stepCard}>
                                <div className={styles.stepHeader}>
                                    <div className={styles.stepNumber}>1</div>
                                    <h2 className={styles.stepTitle}>Select Your Pass</h2>
                                </div>

                                <div className={styles.ticketGrid}>
                                    {ticketTypes.map((ticket) => (
                                        <motion.div
                                            key={ticket.id}
                                            whileHover={{ y: -4 }}
                                            onClick={() => setSelectedTicket(ticket.id)}
                                            className={`${styles.ticketCard} ${selectedTicket === ticket.id
                                                ? styles.ticketCardSelected
                                                : styles.ticketCardUnselected
                                                }`}
                                        >
                                            {ticket.popular && (
                                                <div className={styles.popularBadge}>
                                                    MOST POPULAR
                                                </div>
                                            )}

                                            <div className={`${styles.ticketIconWrapper} ${ticket.color}`}>
                                                <Ticket size={24} className={styles.ticketIcon} />
                                            </div>

                                            <h3 className={styles.ticketName}>{ticket.name}</h3>
                                            <p className={styles.ticketDescription}>{ticket.description}</p>

                                            <div className={styles.priceWrapper}>
                                                <span className={styles.price}>₹{ticket.price}</span>
                                                <span className={styles.originalPrice}>₹{ticket.originalPrice}</span>
                                            </div>

                                            <ul className={styles.featuresList}>
                                                {ticket.features.slice(0, 3).map((feature, i) => (
                                                    <li key={i} className={styles.featureItem}>
                                                        <Check size={14} className={styles.featureIcon} />
                                                        {feature}
                                                    </li>
                                                ))}
                                                {ticket.features.length > 3 && (
                                                    <li className={styles.moreBenefits}>
                                                        +{ticket.features.length - 3} more benefits
                                                    </li>
                                                )}
                                            </ul>

                                            {selectedTicket === ticket.id && (
                                                <div className={styles.selectedCheck}>
                                                    <Check size={14} className={styles.selectedCheckIcon} />
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Select Date */}
                            <div className={styles.stepCard}>
                                <div className={styles.stepHeader}>
                                    <div className={styles.stepNumber}>2</div>
                                    <h2 className={styles.stepTitle}>Select Visit Date</h2>
                                </div>

                                <div className={styles.dateScroll}>
                                    {dates.map((d) => (
                                        <button
                                            key={d.date}
                                            onClick={() => setSelectedDate(d.date)}
                                            className={`${styles.dateButton} ${selectedDate === d.date
                                                ? styles.dateButtonSelected
                                                : styles.dateButtonUnselected
                                                }`}
                                        >
                                            <span className={styles.dateDay}>{d.day}</span>
                                            <span className={styles.dateNum}>{d.dayNum}</span>
                                            <span className={styles.dateMonth}>{d.month}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3: Select Quantity */}
                            <div className={styles.stepCard}>
                                <div className={styles.stepHeader}>
                                    <div className={styles.stepNumber}>3</div>
                                    <h2 className={styles.stepTitle}>Select Tickets</h2>
                                </div>

                                <div className={styles.quantityList}>
                                    {[
                                        { key: "adult", label: "Adult", age: "12+ years", price: currentTicket.price },
                                        { key: "child", label: "Child", age: "3-11 years", price: Math.round(currentTicket.price * 0.7) },
                                        { key: "senior", label: "Senior", age: "60+ years", price: Math.round(currentTicket.price * 0.8) },
                                    ].map((item) => (
                                        <div key={item.key} className={styles.quantityItem}>
                                            <div>
                                                <p className={styles.quantityLabel}>{item.label}</p>
                                                <p className={styles.quantitySublabel}>{item.age} • ₹{item.price}/person</p>
                                            </div>
                                            <div className={styles.quantityControls}>
                                                <button
                                                    onClick={() => updateQuantity(item.key as keyof typeof quantities, -1)}
                                                    className={`${styles.quantityBtn} ${styles.quantityBtnMinus}`}
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className={styles.quantityValue}>
                                                    {quantities[item.key as keyof typeof quantities]}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.key as keyof typeof quantities, 1)}
                                                    className={`${styles.quantityBtn} ${styles.quantityBtnPlus}`}
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>



                        {/* Right Column - Order Summary */}
                        <div className={styles.rightColumn}>
                            <div className={styles.summaryCard}>
                                <h3 className={styles.summaryTitle}>Order Summary</h3>

                                {/* Selected Ticket Info */}
                                <div className={styles.selectedTicketInfo}>
                                    <div className={styles.ticketInfoHeader}>
                                        <div className={`${styles.ticketInfoIconWrapper} ${currentTicket.color}`}>
                                            <Ticket size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <p className={styles.ticketInfoName}>{currentTicket.name}</p>
                                            <p className={styles.ticketInfoCount}>{totalQuantity} ticket(s)</p>
                                        </div>
                                    </div>
                                    {selectedDate && (
                                        <div className={styles.ticketDate}>
                                            <Calendar size={14} />
                                            {new Date(selectedDate).toLocaleDateString("en-US", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Promo Code */}
                                <div className={styles.promoSection}>
                                    <div className={styles.promoInputWrapper}>
                                        <div className={styles.promoInputContainer}>
                                            <Gift className={styles.promoIcon} size={18} />
                                            <input
                                                type="text"
                                                placeholder="Promo code"
                                                value={promoCode}
                                                onChange={(e) => setPromoCode(e.target.value)}
                                                className={styles.promoInput}
                                            />
                                        </div>
                                        <button className={styles.applyBtn}>
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className={styles.priceBreakdown}>
                                    {quantities.adult > 0 && (
                                        <div className={styles.breakdownItem}>
                                            <span className={styles.breakdownLabel}>Adult × {quantities.adult}</span>
                                            <span className={styles.breakdownValue}>₹{currentTicket.price * quantities.adult}</span>
                                        </div>
                                    )}
                                    {quantities.child > 0 && (
                                        <div className={styles.breakdownItem}>
                                            <span className={styles.breakdownLabel}>Child × {quantities.child}</span>
                                            <span className={styles.breakdownValue}>₹{Math.round(currentTicket.price * 0.7 * quantities.child)}</span>
                                        </div>
                                    )}
                                    {quantities.senior > 0 && (
                                        <div className={styles.breakdownItem}>
                                            <span className={styles.breakdownLabel}>Senior × {quantities.senior}</span>
                                            <span className={styles.breakdownValue}>₹{Math.round(currentTicket.price * 0.8 * quantities.senior)}</span>
                                        </div>
                                    )}
                                    <div className={styles.breakdownItem}>
                                        <span className={styles.breakdownLabel}>GST (18%)</span>
                                        <span className={styles.breakdownValue}>₹{Math.round(tax)}</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className={styles.totalRow}>
                                    <span className={styles.totalLabel}>Total</span>
                                    <span className={styles.totalValue}>₹{Math.round(total)}</span>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    disabled={totalQuantity === 0 || !selectedDate}
                                    className={styles.checkoutBtn}
                                >
                                    <CreditCard size={20} />
                                    Proceed to Payment
                                </button>

                                {/* Trust Badges */}
                                <div className={styles.trustBadges}>
                                    <div className={styles.trustBadgesList}>
                                        <div className={styles.trustBadgeItem}>
                                            <Shield size={16} className={styles.secureIcon} />
                                            Secure Payment
                                        </div>
                                        <div className={styles.trustBadgeItem}>
                                            <Clock size={16} className={styles.instantIcon} />
                                            Instant Confirmation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className={styles.infoSection}>
                        <h3 className={styles.infoSectionTitle}>
                            <Info size={20} className={styles.infoSectionIcon} />
                            Important Information
                        </h3>
                        <div className={styles.infoGrid}>
                            {[
                                { title: "Valid For", desc: "Tickets valid only on selected date" },
                                { title: "Entry Time", desc: "Park opens at 10:00 AM" },
                                { title: "Refund Policy", desc: "Full refund up to 24 hrs before" },
                                { title: "ID Required", desc: "Carry valid government ID" },
                            ].map((info, i) => (
                                <div key={i}>
                                    <p className={styles.infoItemTitle}>{info.title}</p>
                                    <p className={styles.infoItemDesc}>{info.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
}
