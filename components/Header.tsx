import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../app/landing.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <Link href="/" className="logo">
            Onbexia<span style={{ color: "var(--primary)" }}>.</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/docs" className="nav-link">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/login" className="nav-link">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/signup" className="nav-btn">
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/docs" className="nav-link">
              Documentation
            </Link>
            <Link href="/login" className="nav-link">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="nav-btn"
              style={{ textAlign: "center" }}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
