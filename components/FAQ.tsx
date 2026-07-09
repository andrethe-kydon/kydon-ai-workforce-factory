"use client";

import { useState } from "react";
import styles from "./Sections.module.css";

const faqs = [
  {
    q: "Is this programme confirmed and when does it start?",
    a: "The OPC Launchpad is offered under the SkillsFuture Career Transition Programme (SCTP), delivered by Kydon in collaboration with Singapore Polytechnic. Cohort 1 is targeted to begin on 6 September 2026 and run to 4 March 2027. We are finalising the programme with our partners ahead of launch, so some details remain subject to confirmation. Joining the waitlist is an expression of interest only, with no commitment or financial obligation. We will notify all waitlist members directly with confirmed details ahead of applications opening.",
  },
  {
    q: "How much does the programme cost?",
    a: "The full course fee is S$24,416.00, inclusive of 9% GST. Because the programme is offered under the SkillsFuture Career Transition Programme (SCTP), most participants pay significantly less after subsidy: S$2,844.80 for Singapore Citizens aged 40 and above, and S$7,324.80 for Singapore Citizens below 40, Permanent Residents, and LTVP+ holders. SkillsFuture Credits and PSEA can be applied, and Singaporeans aged 25 and above are eligible to use SkillsFuture Credit. See the Course Fees section for the full breakdown. Fees remain subject to final confirmation with our programme partners, and joining the waitlist involves no financial commitment of any kind.",
  },
  {
    q: "What is the SCTP and why does it matter?",
    a: "The SkillsFuture Career Transition Programme (SCTP) is a government-backed initiative administered by SkillsFuture Singapore that helps mid-career professionals transition into new and in-demand sectors. Being part of SCTP means this programme meets SSG's accreditation standards, qualifies for significant course fee subsidies, and is recognised across Singapore's hiring ecosystem. For participants, it means the training you receive is not just rigorous. It is officially recognised.",
  },
  {
    q: "What is Singapore Polytechnic's role in this programme?",
    a: "Singapore Polytechnic's School of Computing delivers three of the eight modules (Programming for Data Science, Database Management Systems, and Data Wrangling and Visualisation) in full to SP's own accredited syllabus. These three modules cover 212 of the programme's 580.5 hours and form the technical data foundation of the programme. The remaining five modules are delivered by Kydon, covering the OPC business framework, agentic AI systems, low-code build, and launch readiness. All eight Certificates of Completion are issued by Singapore Polytechnic.",
  },
  {
    q: "What funding is available and who qualifies?",
    a: "Course fees are significantly subsidised under SSG's funding framework. The total unsubsidised fee across all 8 modules is S$24,416. Depending on your eligibility, the subsidised fee can be as low as S$2,844.80 for Singapore Citizens aged 40 and above. Singapore Citizens below 40, Permanent Residents, and LTVP+ holders pay S$7,324.80. All fees include 9% GST. SkillsFuture Credits can also be used to offset fees for Singaporeans aged 25 and above. Full fee details are available in the Course Fees tab under Course Information on this page.",
  },
  {
    q: "What certificates will I receive and who issues them?",
    a: "You receive 8 Certificates of Completion, one for each module, issued by Singapore Polytechnic upon successful completion of each module. The certificates are awarded under the SCTP Intelligent Data-Driven Digitalisation programme and are recognised across Singapore's workforce ecosystem. The full list of certificates is shown on each module card in the Course Structure section above.",
  },
  {
    q: "Do I need a coding background to join?",
    a: "No. The Kydon AI Workforce Factory is built for professionals with domain expertise, not developers. If you understand how a business process works, we teach you how to automate it with agentic AI. Our graduates come from marketing, finance, HR, operations, healthcare, and consulting backgrounds.",
  },
  {
    q: "What exactly is agentic AI and why does it matter?",
    a: "Agentic AI refers to AI systems that can plan, make decisions, and execute multi-step tasks autonomously, without needing a human to prompt every action. Unlike simple chatbots, AI agents can browse the web, write and run code, send emails, update CRMs, and coordinate with other agents. This is the skill set Singapore enterprises are struggling to hire for, and the foundation of every OPC built in this programme.",
  },
  {
    q: "What tools will I actually learn to build with?",
    a: "You will work across the full modern data-and-AI stack: Python and its core data-science libraries (NumPy, Pandas, Matplotlib, Seaborn), relational and non-relational databases, no-code and low-code build platforms, prompt engineering, AI agents, and RAG knowledge bases. By graduation you will have built the core tool of your own OPC: a fully integrated AI business engine that runs your operation.",
  },
  {
    q: "What is a One Person Company (OPC)?",
    a: "An OPC is a registered Singapore business entity operated by a single individual, AI-augmented to deliver services that would normally require a team. You own it, run it, and scale it, supported by Kydon's incubation ecosystem and enterprise client network.",
  },
  {
    q: "How long is the programme and what is the time commitment?",
    a: "Training runs for 5 months, full-time, across 8 modules and 580.5 hours, delivered by Kydon in collaboration with Singapore Polytechnic and combining classroom learning with asynchronous e-learning. On graduation you choose one of two tracks: the Entrepreneurship Track, where you launch your own OPC with ongoing Kydon mentorship, or the AI Operator Track, where you enter the market as a qualified AI specialist helping businesses build, deploy, and run AI-powered systems.",
  },
  {
    q: "What happens if my business idea doesn't work out?",
    a: "Launching your own OPC is not the only route forward. On graduation you choose between two tracks: the Entrepreneurship Track, where you launch and run your own OPC, or the AI Operator Track, where you enter the market as a qualified AI specialist helping businesses build, deploy, and run AI systems. If your first business concept doesn't gain traction, the AI Operator Track lets you put your skills to work immediately across multiple industries. Either way, Kydon's mentorship continues after graduation.",
  },
  {
    q: "Who are the enterprise clients?",
    a: "Kydon operates an AI Marketplace that matches operators with SMEs and enterprises seeking AI implementation support. Matching is based on your capabilities and the projects you take on. Whether you launch your own OPC or work as a professional AI Operator, you deliver real client projects with Kydon's ecosystem and network behind you.",
  },
  {
    q: "Who is eligible to join the programme?",
    a: "Entry is open to applicants with a Higher Nitec qualification or equivalent, basic English proficiency, and foundational numeracy. You should be comfortable with everyday digital tools such as Microsoft Excel; prior programming or data analysis experience is advantageous but not required. Applicants who do not meet the minimum qualification may still be considered on a case-by-case basis. Join the waitlist and our team will be in touch.",
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
                The programme is being finalised with our partners ahead of launch. Join the
                waitlist to be among the first notified when Cohort 1 officially opens, and to
                help shape the programme.
              </p>
              <a href="#final-cta" className="btn-grad" style={{ display: "block", textAlign: "center" }}>
                Join the Waitlist →
              </a>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["First access to Cohort 1 applications", "Full programme and funding details", "Invitation to our pre-launch briefing"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "var(--muted, #888)" }}>
                    <span style={{ color: "#f97316", flexShrink: 0, marginTop: "2px" }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.faqMeta}>
                {[
                  ["Training", "5 Months"],
                  ["Cohort Size", "30 Participants"],
                  ["Location", "Singapore Polytechnic"],
                  ["Next Cohort", "Sep 2026"],
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
                <p>Have a question? Email us at <a href="mailto:sales@kydongrp.com">sales@kydongrp.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
