import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const cols = [
  {
    heading: "Programme",
    links: [
      { href: "#solution",        label: "The Factory" },
      { href: "#for-individuals", label: "For Individuals" },
      { href: "#for-enterprises", label: "For Enterprises" },
      { href: "#faq",             label: "FAQ" },
    ],
  },
  {
    heading: "Kydon",
    links: [
      { href: "https://www.kydongrp.com/platform",     label: "Platform" },
      { href: "https://www.kydongrp.com/ai-university", label: "AI University" },
      { href: "https://www.kydongrp.com/company",       label: "About" },
      { href: "https://www.kydongrp.com/contact",       label: "Contact" },
    ],
  },
  {
    heading: "Skills",
    links: [
      { href: "#solution", label: "Agentic AI" },
      { href: "#solution", label: "Prompt Engineering" },
      { href: "#solution", label: "Workflow Design" },
      { href: "#solution", label: "OPC Operations" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Image
              src="https://www.kydongrp.com/kydon-logo.png"
              alt="Kydon"
              width={90}
              height={22}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              The AI-Learning Company. Building the operating system for
              Singapore&apos;s AI-ready workforce.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h5 className={styles.colHeading}>{col.heading}</h5>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} className={styles.colLink}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Kydon Holdings Pte Ltd. All rights reserved.</p>
          <p>Singapore · AI Workforce Factory Initiative</p>
        </div>
      </div>
    </footer>
  );
}
