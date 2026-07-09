"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const links = [
  { href: "#programme-timeline", label: "Programme" },
  { href: "#course-structure",   label: "Modules" },
  { href: "#course-details",     label: "Fees" },
  { href: "#for-individuals",    label: "Individuals" },
  { href: "#for-enterprises",    label: "Enterprises" },
  { href: "#faq",                label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently under the navbar
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Brand — links to the main Kydon site */}
        <a
          href="https://www.kydongrp.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.brand}
        >
          <Image
            src="https://www.kydongrp.com/kydon-logo.png"
            alt="Kydon"
            width={100}
            height={28}
            className={styles.logo}
            priority
          />
          <span className={styles.sep} />
          <span className={styles.label}>AI Workforce Factory</span>
        </a>

        {/* Desktop links */}
        <div className={styles.links}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.link} ${
                activeId === l.href.slice(1) ? styles.linkActive : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Kydon_OPC_Launchpad_Brochure.pdf"
            download="Kydon_OPC_Launchpad_Brochure.pdf"
            className="btn-outline-o"
            style={{ padding: "8px 18px", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Brochure
          </a>
          <a href="#final-cta" className="btn-grad" style={{ padding: "8px 20px", fontSize: "13px" }}>
            Join Waitlist →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open3 : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.mobileLink} ${
                activeId === l.href.slice(1) ? styles.linkActive : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Kydon_OPC_Launchpad_Brochure.pdf"
            download="Kydon_OPC_Launchpad_Brochure.pdf"
            className="btn-outline-o"
            style={{ textAlign: "center", marginTop: "8px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Brochure
          </a>
          <a
            href="#final-cta"
            className="btn-grad"
            style={{ textAlign: "center", marginTop: "8px" }}
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist →
          </a>
        </div>
      )}
    </nav>
  );
}
