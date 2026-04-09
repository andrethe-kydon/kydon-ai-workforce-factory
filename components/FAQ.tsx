"use client";

import { useState } from "react";
import styles from "./Sections.module.css";

const faqs = [
  { q: "How much will I earn during the traineeship?", a: "During the 6-month traineeship, you're employed by Kydon as an AI Operator at a market-rate salary. Up to 90% is subsidized by the WSG Career Conversion Programme. You'll know your exact take-home before signing — no hidden conditions." },
  { q: "Do I need a tech background to apply?", a: "No. The curriculum is built for mid-career professionals, not engineers. Domain expertise in any field — marketing, finance, HR, operations, healthcare — is your foundation. We teach you the AI layer on top of it." },
  { q: "What exactly is a One Person Company (OPC)?", a: "An OPC is a registered Singapore business entity operated by a single individual, AI-augmented to deliver services that would normally require a team. You own it, run it, and scale it — with Kydon's incubation ecosystem and enterprise client network behind you." },
  { q: "What's the time commitment?", a: "The 6-month traineeship is full-time — you are employed by Kydon. Year 2 as an OPC is self-directed; most participants target 6–8 focused hours per day, using AI to amplify output. The Factory is built for intensity, not passive learning." },
  { q: "What if my business idea doesn't work out?", a: "Kydon's 'Business Diary & Checker' surfaces problems early. The AI validation engine catches weak unit economics and poor market fit before you commit to Year 2. Pivots are expected — and the system is designed for them." },
  { q: "Is the $50,000 EnterpriseSG grant guaranteed?", a: "Kydon prepares every graduating OPC for the full application — business plan, pitch deck, and financials are all built during the traineeship. Approval is subject to Enterprise Singapore's standard eligibility criteria." },
  { q: "Where do the enterprise clients come from?", a: "Kydon's AI Marketplace matches OPCs with SMEs and enterprises by niche. Kydon's corporate advisory arm also channels live project work into the OPC network — client relationships often begin during the traineeship itself." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={styles.lightSection} id="faq">
      <div className={styles.container}>
        <div className={styles.faqLayout}>
          {/* Left: accordions */}
          <div>
            <span className="section-tag-light">Common Questions</span>
            <h2 className={styles.headingLight} style={{ fontSize: "clamp(28px,4vw,52px)", marginBottom: "32px" }}>
              Everything You Want to{" "}
              <span className="grad-text">Know.</span>
            </h2>
            <div className={styles.faqItems}>
              {faqs.map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <button
                    className={styles.faqQ}
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span>{f.q}</span>
                    <span className={`${styles.faqTog} ${open === i ? styles.faqTogOpen : ""}`}>+</span>
                  </button>
                  {open === i && <p className={styles.faqA}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky sidebar */}
          <div>
            <div className={styles.faqSide}>
              <h3 className={styles.faqSideTitle}>Ready to Apply?</h3>
              <p className={styles.faqSideBody}>
                Cohort 1 is limited to 30 participants, reviewed on a rolling basis.
                Early applicants get priority access to enterprise client matches.
              </p>
              <a href="#final-cta" className="btn-grad" style={{ display: "block", textAlign: "center" }}>
                Join the Waitlist →
              </a>
              <div className={styles.faqMeta}>
                {[
                  ["Duration", "2 Years"],
                  ["Cohort Size", "30 Participants"],
                  ["Location", "Singapore"],
                  ["Phase 1 Cost", "~$0 Grant-Funded", true],
                  ["Next Cohort", "Q3 2025"],
                ].map(([k, v, hi]) => (
                  <div key={String(k)} className={styles.faqMetaRow}>
                    <span className={styles.faqMetaKey}>{k}</span>
                    {hi ? (
                      <span className={`${styles.faqMetaVal} grad-text`}>{v}</span>
                    ) : (
                      <span className={styles.faqMetaVal}>{v}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.faqTalk}>
                <p>Prefer to speak with a Kydon programme advisor first?</p>
                <a href="https://www.kydongrp.com/contact" target="_blank" rel="noopener noreferrer">
                  Book a 20-min call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
