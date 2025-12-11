"use client";

import { Code, Layers } from "lucide-react";
import Header from "@/components/Header";

import "./docs.css";
import "../landing.css";

export default function DocsPage() {
  return (
    <>
      <Header />
      <div className="docs-layout">
        <aside className="docs-sidebar">
          <div className="sidebar-group">
            <div className="sidebar-title">Getting Started</div>
            <a href="#introduction" className="sidebar-link">
              Introduction
            </a>
            <a href="#quick-start" className="sidebar-link">
              Quick Start
            </a>
          </div>

          <div className="sidebar-group">
            <div className="sidebar-title">Building Tours</div>
            <a href="#creating-tour" className="sidebar-link">
              Creating a Tour
            </a>
            <a href="#defining-steps" className="sidebar-link">
              Defining Steps
            </a>
            <a href="#targeting-elements" className="sidebar-link">
              Targeting Elements
            </a>
          </div>

          <div className="sidebar-group">
            <div className="sidebar-title">Integration</div>
            <a href="#installation" className="sidebar-link">
              Installation
            </a>
            <a href="#troubleshooting" className="sidebar-link">
              Troubleshooting
            </a>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="docs-content">
          {/* SECTION: Introduction */}
          <section id="introduction" className="doc-section">
            <h1 className="doc-title">Introduction</h1>
            <p>
              Welcome to the Onbexia documentation. Onbexia is a
              developer-friendly tool designed to help you create interactive
              product tours for your web applications without writing complex
              onboarding code.
            </p>
            <p>
              By embedding a single lightweight script, you can guide users
              through your application, highlighting key features and driving
              adoption.
            </p>
          </section>

          {/* SECTION: Quick Start */}
          <section id="quick-start" className="doc-section">
            <h2 className="doc-subtitle">Quick Start Guide</h2>
            <p>
              Follow these three steps to get your first tour live in under 5
              minutes.
            </p>

            <ol style={{ marginLeft: "20px", marginTop: "15px" }}>
              <li>
                <strong>Sign Up:</strong> Create a free account on Onbexia.
              </li>
              <li>
                <strong>Create Tour:</strong> Use the dashboard to define your
                tour steps.
              </li>
              <li>
                <strong>Embed:</strong> Copy the generated script into your
                website's <span className="inline-code">&lt;head&gt;</span> tag.
              </li>
            </ol>
          </section>

          <hr
            style={{
              margin: "40px 0",
              border: "none",
              borderBottom: "1px solid #e2e8f0",
            }}
          />

          {/* SECTION: Creating Tours */}
          <section id="creating-tour" className="doc-section">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--primary)",
              }}
            >
              <Layers size={24} />
              <h2
                className="doc-subtitle"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                Creating a Tour
              </h2>
            </div>

            <p style={{ marginTop: "20px" }}>
              Navigate to your <strong>Dashboard</strong> and click the{" "}
              <strong>"+ New Tour"</strong> button. You will be prompted to
              enter a Tour Name (e.g., "Homepage Onboarding").
            </p>

            <div className="note">
              <strong>Note:</strong> Currently, all tours must have a minimum of
              5 steps to be saved. This ensures your users get a complete
              walkthrough.
            </div>
          </section>

          {/* SECTION: Defining Steps */}
          <section id="defining-steps" className="doc-section">
            <h2 className="doc-subtitle">Defining Steps</h2>
            <p>Each step in a tour consists of three main components:</p>
            <ul>
              <li>
                <strong>Title:</strong> A short header for the popup (e.g.,
                "Welcome").
              </li>
              <li>
                <strong>Content:</strong> The body text explaining the feature.
              </li>
              <li>
                <strong>Target ID:</strong> The HTML ID of the element you want
                to highlight.
              </li>
            </ul>
          </section>

          {/* SECTION: Targeting Elements */}
          <section id="targeting-elements" className="doc-section">
            <h2 className="doc-subtitle">How to Target Elements</h2>
            <p>
              Onbexia uses <strong>CSS IDs</strong> to anchor the tour popups.
              You must ensure the elements on your website have unique IDs.
            </p>

            <p>Example HTML on your website:</p>
            <div className="code-block">
              &lt;button id="submit-btn"&gt;Submit Form&lt;/button&gt;
            </div>

            <p>In the Onbexia Dashboard, you would enter:</p>
            <ul>
              <li>
                Target Element ID:{" "}
                <span className="inline-code">#submit-btn</span>
              </li>
            </ul>

            <div className="note">
              If an element ID is not found on the page, the step will not
              appear, or the widget may try to position itself in the center of
              the screen.
            </div>
          </section>

          <hr
            style={{
              margin: "40px 0",
              border: "none",
              borderBottom: "1px solid #e2e8f0",
            }}
          />

          {/* SECTION: Installation */}
          <section id="installation" className="doc-section">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--primary)",
              }}
            >
              <Code size={24} />
              <h2
                className="doc-subtitle"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                Installation
              </h2>
            </div>

            <p style={{ marginTop: "20px" }}>
              Once you save your tour, the dashboard will generate a unique
              script tag. Paste this code just before the closing{" "}
              <span className="inline-code">&lt;/body&gt;</span> tag of your
              website.
            </p>

            <h3>Standard HTML</h3>
            <div className="code-block">
              &lt;!-- Onbexia Widget --&gt; &lt;script
              src="https://onbexia-widget.vercel.app/widget.js"
              data-tour-id="YOUR_TOUR_UUID_HERE" &gt;&lt;/script&gt;
            </div>

            <h3>React / Next.js</h3>
            <p>
              For React applications, you can add the script in your{" "}
              <span className="inline-code">index.html</span> or use a Script
              component.
            </p>
            <div className="code-block">
              import Script from 'next/script' &lt;Script
              src="https://onbexia-widget.vercel.app/widget.js"
              data-tour-id="YOUR_TOUR_UUID_HERE" strategy="lazyOnload" /&gt;
            </div>
          </section>

          {/* SECTION: Troubleshooting */}
          <section id="troubleshooting" className="doc-section">
            <h2 className="doc-subtitle">Troubleshooting</h2>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontWeight: 700, marginBottom: "5px" }}>
                The widget isn't showing up.
              </h4>
              <p>
                Ensure you have copied the correct Tour ID. Check your browser
                console (F12) for any CORS errors or 404 errors.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontWeight: 700, marginBottom: "5px" }}>
                The popup is in the wrong place.
              </h4>
              <p>
                Verify that the <strong>Target ID</strong> in your dashboard
                matches the <span className="inline-code">id="..."</span> on
                your HTML element exactly. Ids are case-sensitive.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
