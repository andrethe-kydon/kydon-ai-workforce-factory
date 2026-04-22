"use client";

import { useState } from "react";
import styles from "./Sections.module.css";

const faqs = [
  {
    q: "Is this programme confirmed and when does it start?",
    a: "The Kydon AI Workforce Factory is currently in its market sensing and development phase. Programme details, structure, and timelines are subject to final confirmation with our programme partners. Cohort 1 is targeted for Q4 2026, but this may be revised. Joining the waitlist is an expression of interest only — there is no commitment or financial obligation at this stage. We will notify all waitlist members directly with confirmed details ahead of applications opening.",
  },
  {
    q: "How much does the programme cost?",
    a: "Programme fees for Cohort 1 have not been finalised as the programme is currently pending final confirmation with our programme partners. Waitlist members will be the first to receive full programme details including fees, structure, and application criteria when confirmed. Joining the waitlist involves no financial commitment or obligation of any kind.",
  },
  {
    q: "Do I need a coding background to join?",
    a: "No. The Kydon AI Workforce Factory is built for professionals with domain expertise — not developers. If you understand how a business process works, we teach you how to automate it with agentic AI. Our graduates come from marketing, finance, HR, operations, healthcare, and consulting backgrounds.",
  },
  {
    q: "What exactly is agentic AI and why does it matter?",
    a: "Agentic AI refers to AI systems that can plan, make decisions, and execute multi-step tasks autonomously — without needing a human to prompt every action. Unlike simple chatbots, AI agents can browse the web, write and run code, send emails, update CRMs, and coordinate with other agents. This is the skill set Singapore enterprises are struggling to hire for — and the foundation of every OPC built in this programme.",
  },
  {
    q: "What tools will I actually learn to build with?",
    a: "You will build real workflows using Claude API, OpenAI API, n8n, Zapier, Make.com, LangChain, RAG systems, vector databases, and no-code client portals like Notion and Softr. By graduation you will have a fully configured OPC tech stack that runs your business automatically.",
  },
  {
    q: "What is a One Person Company (OPC)?",
    a: "An OPC is a registered Singapore business entity operated by a single individual, AI-augmented to deliver services that would normally require a team. You own it, run it, and scale it — with Kydon's incubation ecosystem and enterprise client network behind you.",
  },
  {
    q: "How long is the programme and what is the time commitment?",
    a: "The programme runs for 12 months. Months 1–3 are an intensive 12-week bootcamp — full-time commitment, 5 days a week. Months 4–5 are self-directed pre-launch with your assigned Kydon advisor. Month 6 is your D-Day launch. Months 7–12 are the incubation phase — you are running your OPC with Kydon's support.",
  },
  {
    q: "What happens if my business idea doesn't work out?",
    a: "The programme is specifically designed to surface problems early. Our AI-powered validation system catches weak unit economics and poor market fit before you commit to launching. Pivots are expected and the system is built for them — many of our best business concepts emerge from a second or third niche iteration.",
  },
  {
    q: "Who are the enterprise clients?",
    a: "Kydon operates an AI Marketplace that matches OPC graduates with SMEs and enterprises seeking AI implementation support. Client matching is based on your niche and demonstrated capabilities. Many participants secure their first client during the pre-launch runway phase — before they even officially launch.",
  },
  {
    q: "Is this programme only for mid-career professionals?",
    a: "The programme is designed for professionals with domain expertise — typically 3 or more years of industry experience in any field. If you are a recent graduate with strong entrepreneurial drive and relevant domain knowledge, reach out to us directly and we will discuss whether there is a suitable pathway for you.",
  },
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
              <h3 className={styles.faqSideTitle}>Be First to Know.</h3>
              <p className={styles.faqSideBody}>
                The programme is currently in market sensing phase. Join the waitlist to be among
                the first notified when Cohort 1 officially opens — and to help shape the programme.
              </p>
              <a href="#final-cta" className="btn-grad" style={{ display: "block", textAlign: "center" }}>
                Join the Waitlist →
              </a>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["First access to Cohort 1 applications", "Early bird programme details", "Invitation to our pre-launch briefing"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "var(--muted, #888)" }}>
                    <span style={{ color: "#f97316", flexShrink: 0, marginTop: "2px" }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.faqMeta}>
                {[
                  ["Duration", "12 Months"],
                  ["Cohort Size", "30 Participants"],
                  ["Location", "Singapore"],
                  ["Next Cohort", "Q4 2026"],
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
