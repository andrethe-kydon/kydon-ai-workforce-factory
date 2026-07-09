"use client";

import { useState } from "react";
import styles from "./CourseStructure.module.css";

interface Module {
  num: string;
  title: string;
  synopsis: string;
  hours: string;
  lead: "KYDON" | "SP";
  topics: string[];
}

interface Group {
  label: string;
  sp?: boolean;
  modules: Module[];
}

const groups: Group[] = [
  {
    label: "Arc 1 · Operator Foundations",
    modules: [
      {
        num: "01",
        title: "Gear Up: Essential Career Skills",
        synopsis:
          "The foundation of the OPC mindset. Participants develop the thinking patterns of an AI-leveraged operator — learning to identify opportunities, automate repetitive work, and use GenAI tools for everyday business productivity. This module is the on-ramp to everything that follows.",
        hours: "43.5h",
        lead: "KYDON",
        topics: [
          "Operator mindset",
          "Automation foundations",
          "GenAI for business productivity",
          "AI tool fluency",
        ],
      },
    ],
  },
  {
    label: "Technical Foundations",
    sp: true,
    modules: [
      {
        num: "02",
        title: "Programming for Data Science",
        synopsis:
          "Participants learn Python programming from the ground up with a focus on data science applications. Covers the core libraries used in professional data workflows and introduces techniques for handling both structured and unstructured data.",
        hours: "64h",
        lead: "SP",
        topics: [
          "Python basics",
          "NumPy",
          "Matplotlib",
          "Pandas",
          "Structured and unstructured data",
        ],
      },
      {
        num: "03",
        title: "Database Management Systems",
        synopsis:
          "Participants develop a working understanding of how data is stored, organised, and retrieved at scale. Covers relational and non-relational database design, data warehousing fundamentals, and the ETL processes that underpin modern data infrastructure.",
        hours: "72h",
        lead: "SP",
        topics: [
          "Relational and non-relational databases",
          "Data warehousing",
          "ETL process",
          "Data integration",
        ],
      },
      {
        num: "04",
        title: "Data Wrangling and Visualisation",
        synopsis:
          "Participants learn to take raw, messy data and transform it into clean, analysis-ready datasets. Covers Python-based cleaning techniques, handling data quality issues, and building effective visualisations using Seaborn.",
        hours: "76h",
        lead: "SP",
        topics: [
          "Data cleaning with Python",
          "Handling data quality issues",
          "Descriptive statistics",
          "Visualisation with Seaborn",
        ],
      },
    ],
  },
  {
    label: "Arc 2 · The AI Stack",
    modules: [
      {
        num: "05",
        title: "Building Business Solutions with Low-Code",
        synopsis:
          "Participants build the core tool of their own OPC using no-code and AI-assisted development. Covers the full build cycle from environment setup through to deployment, with a focus on scalability and maintainability for a one-person operator.",
        hours: "76h",
        lead: "KYDON",
        topics: [
          "No-code and low-code build",
          "OPC tool frontend and backend",
          "AI-assisted build",
          "Deployment",
        ],
      },
      {
        num: "06",
        title: "Unlocking AI",
        synopsis:
          "The LLM engine room. Participants learn to reason with data and make decisions by prompting AI rather than building classical models. Covers the full arc from statistical thinking through prompt engineering, agent design, and RAG knowledge base construction — culminating in a working AI brain for the participant's own OPC.",
        hours: "96h",
        lead: "KYDON",
        topics: [
          "LLM engine room",
          "Prompt engineering",
          "AI agents",
          "RAG knowledge base",
          "Ethical AI",
        ],
      },
      {
        num: "07",
        title: "Integrating Data and AI with Low-Code",
        synopsis:
          "Participants assemble the full integrated AI business engine — connecting automation flows, API integrations, GenAI layers, and an operating dashboard into a single functioning system. The module culminates in the Without-You Test: can the OPC run without the founder for 48 hours?",
        hours: "96h",
        lead: "KYDON",
        topics: [
          "Workflow automation",
          "Third-party API integration",
          "GenAI layer",
          "Operating dashboard",
          "Without-You Test",
        ],
      },
    ],
  },
  {
    label: "Arc 3 · Launch Readiness",
    modules: [
      {
        num: "08",
        title: "Leap Forward: Skills for Growth",
        synopsis:
          "The final arc prepares participants to graduate and step into their chosen pathway. Covers OPC launch readiness, brand positioning, go-to-market strategy, AI-assisted decision-making from live business data, and the persuasive narrative needed for the D-Day Showcase.",
        hours: "57h",
        lead: "KYDON",
        topics: [
          "OPC launch readiness",
          "Brand and GTM",
          "AI-assisted decision-making",
          "Pitch and D-Day showcase",
        ],
      },
    ],
  },
];

export default function CourseStructure() {
  const [open, setOpen] = useState<Set<string>>(new Set(["01"]));

  const toggle = (num: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  return (
    <section className={styles.section} id="course-structure">
      <div className={styles.container}>
        {/* Header */}
        <span className="section-tag">Course Structure</span>
        <h2 className={styles.heading}>
          8 Modules. 580.5 Hours.{" "}
          <span className="grad-text">One Programme.</span>
        </h2>
        <p className={styles.subheading}>
          The OPC Launchpad is a single, fully integrated Kydon programme,
          delivered in collaboration with Singapore Polytechnic.
        </p>
        <span className={styles.sctpBadge}>
          A SkillsFuture Career Transition Programme (SCTP) · Intelligent
          Data-Driven Digitalisation
        </span>

        {/* Module groups */}
        {groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <div className={styles.arcPill}>
              <span>{group.label}</span>
            </div>

            <div className={styles.accordion}>
              {group.modules.map((m) => {
                const isOpen = open.has(m.num);
                return (
                  <div key={m.num} className={styles.item}>
                    <button
                      className={styles.itemHeader}
                      onClick={() => toggle(m.num)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.headerLeft}>
                        <span className={styles.moduleNum}>
                          Module {m.num}
                        </span>
                        <span className={styles.itemTitle}>{m.title}</span>
                      </span>
                      <span className={styles.headerRight}>
                        <span className={styles.hours}>{m.hours}</span>
                        <span
                          className={`${styles.arrow} ${
                            isOpen ? styles.arrowOpen : ""
                          }`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2 5l5 5 5-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </span>
                    </button>

                    <p className={styles.synopsis}>{m.synopsis}</p>

                    {isOpen && (
                      <div className={styles.itemBody}>
                        <span className={styles.topicsLabel}>Key Topics</span>
                        <ul className={styles.topics}>
                          {m.topics.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Total summary bar */}
        <div className={styles.totalBar}>
          <span className={styles.totalStrong}>Total: 580.5 hours</span>
          <span className={styles.totalDot} aria-hidden="true">
            ·
          </span>
          <span>8 Certificates of Completion</span>
          <span className={styles.totalDot} aria-hidden="true">
            ·
          </span>
          <span>Full-time over 5 months</span>
        </div>

        {/* Post-graduation pathways signpost */}
        <div className={styles.postGrad}>
          <h3 className={styles.postGradHeading}>
            What Happens After You Graduate?
          </h3>
          <div className={styles.postGradCols}>
            <div className={styles.postGradCol}>
              <span className={styles.postGradLabel}>
                Entrepreneurship Track
              </span>
              <p className={styles.postGradText}>
                Launch your own AI-powered One Person Company with Kydon&apos;s
                continued mentorship.
              </p>
              <a className={styles.postGradLink} href="#programme-timeline">
                See full pathway →
              </a>
            </div>
            <div className={styles.postGradCol}>
              <span className={styles.postGradLabel}>AI Operator Track</span>
              <p className={styles.postGradText}>
                Enter the market as a qualified AI specialist, helping businesses
                build, deploy, and run AI-powered systems.
              </p>
              <a className={styles.postGradLink} href="#programme-timeline">
                See full pathway →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
