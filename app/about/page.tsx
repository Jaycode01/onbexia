"use client";

import Link from "next/link";
import { Users, Heart, Zap, Globe } from "lucide-react";

import "./about.css";
import "../landing.css";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />

      <header className="about-header">
        <div className="container">
          <div
            className="badge"
            style={{
              background: "#f0fdf4",
              color: "#15803d",
              borderColor: "#bbf7d0",
            }}
          >
            Mission Driven
          </div>
          <h1>
            Making User Onboarding <br /> Effortless for Everyone.
          </h1>
          <p>
            We believe that great software shouldn't be confusing. We are
            building the infrastructure to help developers guide their users.
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-content">
            <h2>The Onbexia Story</h2>
            <p>
              As developers, we often spend hundreds of hours building amazing
              features, only to realize that users don't know how to use them.
            </p>
            <p>
              Traditional solutions were either too expensive, too heavy, or
              required complex engineering to set up. We wanted something
              different: a tool that respects the developer's time and the
              user's experience.
            </p>
            <p>
              Onbexia was born out of a hackathon spirit—built rapidly to solve
              a real problem with speed, simplicity, and performance at its
              core.
            </p>
          </div>
          {/* <div className="story-image">
            <div className="shape-circle"></div>
            <div className="shape-square"></div>
            <Globe size={64} color="#94a3b8" style={{ zIndex: 2 }} />
          </div> */}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon-box">
                <Zap size={24} />
              </div>
              <h3>Speed Matters</h3>
              <p>
                We optimize for performance. Our scripts are lightweight because
                we know every millisecond counts for your users.
              </p>
            </div>
            <div className="value-card">
              <div className="icon-box">
                <Users size={24} />
              </div>
              <h3>Developer First</h3>
              <p>
                We build tools we want to use. Clean APIs, great documentation,
                and no unnecessary complexity.
              </p>
            </div>
            <div className="value-card">
              <div className="icon-box">
                <Heart size={24} />
              </div>
              <h3>Simplicity</h3>
              <p>
                Complexity is the enemy of execution. We strive to make the
                complex simple and the simple intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet the Team</h2>
          <p style={{ marginBottom: "40px", color: "#64748b" }}>
            The builders behind the platform.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#cbd5e1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Lexiz
                </div>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700 }}>
                Alexander Ukwueze
              </h3>
              <p
                style={{
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Full Stack Engineer
              </p>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "10px",
                  color: "#64748b",
                }}
              >
                Passionate about React, Next.js, and building tools that help
                others succeed.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#cbd5e1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Nexon
                </div>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700 }}>
                Joseph Lamidi
              </h3>
              <p
                style={{
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Frontend Engineer
              </p>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "10px",
                  color: "#64748b",
                }}
              >
                Passionate about React, Next.js, and building tools that help
                others succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Reuse generic footer style) */}
      <footer className="footer">
        <div
          className="container"
          style={{ textAlign: "center", color: "#94a3b8", fontSize: "14px" }}
        >
          &copy; 2025 Onbexia Inc. Built with ❤️ and Next.js.
        </div>
      </footer>
    </div>
  );
}
