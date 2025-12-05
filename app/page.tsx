import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialFeed from "./components/SocialFeed";
import About from "./components/About";
import Videos from "./components/Videos";
import Features from "./components/Features";
import Offers from "./components/Offers";
import Attractions from "./components/Attractions";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <SocialFeed />
      <About />
      <Videos />
      <Features />
      <Offers />
      <Attractions />
      <Gallery />
      <Testimonials />
      <CTA />
      <Blog />
      {/* <InfoSection /> */}
      <Footer />
    </main>
  );
}
