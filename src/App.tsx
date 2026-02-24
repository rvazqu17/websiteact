import { useState } from 'react'
import React from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const showPopup = () => {
    alert("I created the outline using Base44. Then I edited text and moved things around and did trial and error until things worked. I don't know java (only python) but im starting to learn it");
  };

  return (
<div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={styles.logoText}>Created by Allen V (rvazqu17)</span>
          </div>
          <button onClick={showPopup}>
          what did I use?
          </button>
        </div>
      </nav>



      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Kennesaw Coffee co.<br />
          </h1>
          <img src="src/assets/unnamed.jpg"></img>
          <p style={styles.heroText}>
            Its just better...
          </p>
          <p style={styles.heroTextexclaim}>
            Start an order now!
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.primaryButton}>Pickup</button>
            <button style={styles.secondaryButton}>Delivery</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Menu</h2>
        </div>

        <div style={styles.featuresGrid}>
          {[
            {title: "Hot Coffee", desc: "Espresso, Cortado, Americano, Cafe Cubano, Latte, Cappuccino, Macchiato, Mocha" },
            {title: "Iced Coffee and Teas", desc: "Coldbrew, Frappe, Cold Macchiato, Boba Tea, Green Tea" },
            {title: "Breakfast", desc: "Breakfast Sandwiches, Bagels, Assorted Pastries" },
            {title: "Lunch", desc: "Californian sandwich, Chicken Salad Croissant, Spicy Pig Sandwich, Ultimate BLT, Smoker sandwich" }
          ].map((feature, i) => (
            <div key={i} style={styles.featureCard}>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaCard}>
          <h2 style={styles.ctaTitle}>Coffee co. Rewards</h2>
          <p style={styles.ctaText}>
            Start earning points with every visit.
          </p>
          <p style={styles.ctaText}>
            Get free food and drinks when you redeem points!
          </p>
          <button style={styles.ctaButton}>Sign up for rewards!</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
          </div>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Contact us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
const styles = {
  container: {
    minHeight: "50vh",
    backgroundColor: "#fafbfc",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid #e2e8f0",
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logoIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  },
  logoText: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#0f172a",
  },
  navLinks: {
    display: "flex",
    gap: "32px",
    fontSize: "14px",
  },
  navLink: {
    color: "#64748b",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  navButton: {
    padding: "4px 10px",
    backgroundColor: "#0f172a",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  hero: {
    paddingTop: "160px",
    paddingBottom: "96px",
    padding: "160px 24px 96px",
  },
  heroContent: {
    maxWidth: "896px",
    margin: "0 auto",
    textAlign: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 16px",
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    borderRadius: "9999px",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "32px",
  },
  heroTitle: {
    fontSize: "clamp(40px, 7vw, 72px)",
    fontWeight: "700",
    color: "#0f172a",
    lineHeight: "1.1",
    marginBottom: "24px",
    margin: "0 0 24px 0",
  },
  heroGradient: {
    background: "linear-gradient(90deg, #3b82f6, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroText: {
    fontSize: "clamp(16px, 2vw, 20px)",
    color: "#64748b",
    lineHeight: "1.6",
    maxWidth: "672px",
    margin: "0 auto 40px",
  },
  heroTextexclaim: {
    fontSize: "clamp(24px, 2vw, 20px)",
    color: "#000000",
    lineHeight: "1.6",
    maxWidth: "672px",
    margin: "0 auto 20px",
  },
  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
  },
  primaryButton: {
    padding: "14px 32px",
    backgroundColor: "#47290c",
    color: "white",
    fontWeight: "500",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.1)",
    transition: "background-color 0.2s",
  },
  secondaryButton: {
    padding: "14px 32px",
    backgroundColor: "#f09c01",
    color: "white",
    fontWeight: "500",
    border: "1px solid #e2e8f0",
    borderRadius: "9999px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.2s",
  },
  heroVisual: {
    maxWidth: "1120px",
    margin: "80px auto 0",
  },
  visualCard: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.05)",
    background: "linear-gradient(135deg, #f8fafc, white)",
    aspectRatio: "16 / 9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "clamp(32px, 5vw, 64px)",
    width: "100%",
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    border: "1px solid #f1f5f9",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  statLabel: {
    fontSize: "10px",
    color: "#94a3b8",
    letterSpacing: "0.05em",
    marginBottom: "4px",
    margin: "0 0 4px 0",
  },
  statValue: {
    fontSize: "clamp(20px, 3vw, 32px)",
    fontWeight: "700",
    background: "linear-gradient(90deg, #3b82f6, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: 0,
  },
  features: {
    padding: "96px 24px",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "64px",
  },
  sectionLabel: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#2563eb",
    marginBottom: "12px",
    letterSpacing: "0.1em",
    margin: "0 0 12px 0",
  },
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: "700",
    color: "#0f172a",
    margin: "0 0 16px 0",
  },
  sectionText: {
    color: "#64748b",
    maxWidth: "512px",
    margin: "16px auto 0",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  featureCard: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid #f1f5f9",
    transition: "all 0.3s",
  },
  featureIcon: {
    width: "300px",
    height: "200px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    marginBottom: "24px",
  },
  featureTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: "8px",
    margin: "0 0 8px 0",
  },
  featureDesc: {
    fontSize: "14px",
    color: "#64748b",
    lineHeight: "1.6",
    margin: 0,
  },
  cta: {
    padding: "96px 24px",
  },
  ctaCard: {
    maxWidth: "896px",
    margin: "0 auto",
    borderRadius: "24px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "clamp(48px, 8vw, 80px)",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: "700",
    color: "white",
    marginBottom: "16px",
    margin: "0 0 16px 0",
  },
  ctaText: {
    fontSize: "18px",
    color: "#cbd5e1",
    maxWidth: "512px",
    margin: "0 auto 32px",
  },
  ctaButton: {
    padding: "14px 32px",
    backgroundColor: "white",
    color: "#0f172a",
    fontWeight: "500",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
    transition: "background-color 0.2s",
  },
  footer: {
    borderTop: "1px solid #f1f5f9",
    padding: "48px 24px",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
  },
  footerLogo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  footerLogoIcon: {
    width: "28px",
    height: "28px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },
  footerLogoText: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#0f172a",
  },
  footerLinks: {
    display: "flex",
    gap: "32px",
    fontSize: "14px",
  },
  footerLink: {
    color: "#94a3b8",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  footerCopy: {
    fontSize: "14px",
    color: "#94a3b8",
    margin: 0,
  },
};



export default App

