"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Layout, BarChart3, Code2, CheckCircle2 } from "lucide-react";
import "./landing.css";
import Header from "@/components/Header";

// Animation Variants for performance
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <header className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="badge">
              <span
                className="dot"
                style={{ background: "var(--primary)" }}
              ></span>
              v2.0 is now live
            </motion.div>

            <motion.h1 variants={fadeIn}>
              Build Product Tours <br />
              in <span style={{ color: "var(--primary)" }}>Minutes</span>.
            </motion.h1>

            <motion.p variants={fadeIn}>
              The easiest way to onboard new users. Create, customize, and embed
              guided tours on any website without writing a single line of code.
            </motion.p>

            <motion.div variants={fadeIn} className="cta-group">
              <Link href="/signup" className="nav-btn">
                Start Building Free
              </Link>
              <Link href="/docs" className="btn-secondary">
                Read Docs
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              style={{
                marginTop: "30px",
                fontSize: "13px",
                color: "#64748b",
                display: "flex",
                gap: "15px",
              }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <CheckCircle2 size={16} /> No credit card
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <CheckCircle2 size={16} /> 5kb lightweight script
              </span>
            </motion.div>
          </motion.div>

          {/* Abstract Visual Animation */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="visual-card">
              <div className="browser-header">
                <div className="dot" style={{ background: "#ef4444" }}></div>
                <div className="dot" style={{ background: "#f59e0b" }}></div>
                <div className="dot" style={{ background: "#10b981" }}></div>
              </div>
              <div
                style={{
                  padding: "24px",
                  position: "relative",
                  height: "100%",
                }}
              >
                {/* Skeleton UI */}
                <div
                  style={{
                    height: "20px",
                    width: "40%",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                    marginBottom: "20px",
                  }}
                ></div>
                <div
                  style={{
                    height: "12px",
                    width: "80%",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                    marginBottom: "10px",
                  }}
                ></div>
                <div
                  style={{
                    height: "12px",
                    width: "60%",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                    marginBottom: "40px",
                  }}
                ></div>

                <div style={{ display: "flex", gap: "20px" }}>
                  <div
                    style={{
                      height: "100px",
                      flex: 1,
                      background: "#f1f5f9",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "100px",
                      flex: 1,
                      background: "#f1f5f9",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>

                {/* Floating Tooltip Animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "50px",
                    background: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)",
                    border: "1px solid #e2e8f0",
                    width: "220px",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    Step 1: Analytics
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b" }}>
                    Track your user retention here.
                  </div>
                  {/* Arrow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-6px",
                      left: "20px",
                      width: "12px",
                      height: "12px",
                      background: "white",
                      transform: "rotate(45deg)",
                      borderTop: "1px solid #e2e8f0",
                      borderLeft: "1px solid #e2e8f0",
                    }}
                  ></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- FEATURES SECTION --- */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Everything needed to activate users</h2>
            <p>Powerful features packaged in a lightweight script.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box">
                <Layout size={24} />
              </div>
              <h3>No-Code Builder</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                Create tours using our visual dashboard. Simply define your
                steps and target IDs. No engineering time required.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-box">
                <Code2 size={24} />
              </div>
              <h3>Easy Integration</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                Copy one line of JavaScript. That is it. It works with React,
                Vue, Angular, or plain HTML.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-box">
                <Zap size={24} />
              </div>
              <h3>Blazing Fast</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                Our script is under 5kb gzipped and loads asynchronously,
                ensuring your Core Web Vitals stay green.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-box">
                <BarChart3 size={24} />
              </div>
              <h3>Analytics</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                See exactly where users drop off in your tours and optimize your
                onboarding flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="logo" style={{ fontSize: "20px" }}>
              Onbexia.
            </Link>
            <p
              style={{
                marginTop: "16px",
                color: "var(--text-muted)",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Helping developers build better onboarding experiences without the
              hassle.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "20px" }}>Product</h4>
            <Link href="/docs" className="footer-link">
              Documentation
            </Link>
            <Link href="/about" className="footer-link">
              About
            </Link>
            <Link href="/pricing" className="footer-link">
              Pricing
            </Link>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "20px" }}>Legal</h4>
            <Link href="#" className="footer-link">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-link">
              Terms of Service
            </Link>
          </div>
        </div>
        <div
          className="container"
          style={{
            textAlign: "center",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "30px",
            color: "#94a3b8",
            fontSize: "13px",
          }}
        >
          &copy; 2025 Onbexia Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
