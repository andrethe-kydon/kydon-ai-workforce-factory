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
  certificate: string;
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
        certificate:
          "Gear up! Essential Skills for Career Transformation and Professional Growth",
        synopsis:
          "The foundation of the OPC mindset. Participants develop the thinking patterns of an AI-leveraged operator, learning to identify opportunities, automate repetitive work, and use GenAI tools for everyday business productivity. This module is the on-ramp to everything that follows.",
        hours: "43.5h",
        lead: "KYDON",
        topics: [
          "Adopt the operator mindset and spot high-value opportunities to pursue",
          "Identify and automate the repetitive, low-value work in your day",
          "Use GenAI tools to boost everyday business productivity",
          "Build fluency across the core AI tools used throughout the programme",
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
        certificate:
          "Introduction to Programming for Data Science",
        synopsis:
          "Participants learn Python programming from the ground up with a focus on data science applications. Covers the core libraries used in professional data workflows and introduces techniques for handling both structured and unstructured data.",
        hours: "64h",
        lead: "SP",
        topics: [
          "Write Python from first principles for data-science tasks",
          "Manipulate and analyse datasets using NumPy and Pandas",
          "Create clear charts and plots with Matplotlib",
          "Work confidently with both structured and unstructured data",
        ],
      },
      {
        num: "03",
        title: "Database Management Systems",
        certificate:
          "Fundamentals of Database Management Systems",
        synopsis:
          "Participants develop a working understanding of how data is stored, organised, and retrieved at scale. Covers relational and non-relational database design, data warehousing fundamentals, and the ETL processes that underpin modern data infrastructure.",
        hours: "72h",
        lead: "SP",
        topics: [
          "Design and query relational and non-relational databases",
          "Explain data-warehousing fundamentals and when to apply them",
          "Build ETL processes to move and transform data reliably",
          "Integrate data from multiple sources into a single store",
        ],
      },
      {
        num: "04",
        title: "Data Wrangling and Visualisation",
        certificate:
          "From Chaos to Clarity: Data Wrangling for Analysis and Visualisation",
        synopsis:
          "Participants learn to take raw, messy data and transform it into clean, analysis-ready datasets. Covers Python-based cleaning techniques, handling data quality issues, and building effective visualisations using Seaborn.",
        hours: "76h",
        lead: "SP",
        topics: [
          "Clean and prepare messy, raw data into analysis-ready datasets with Python",
          "Diagnose and resolve common data-quality issues",
          "Summarise and interpret data using descriptive statistics",
          "Communicate insights through effective visualisations with Seaborn",
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
        certificate:
          "Building Business Solutions with Low-Code Platforms",
        synopsis:
          "Participants build the core tool of their own OPC using no-code and AI-assisted development. Covers the full build cycle from environment setup through to deployment, with a focus on scalability and maintainability for a one-person operator.",
        hours: "76h",
        lead: "KYDON",
        topics: [
          "Build a working business tool using no-code and low-code platforms",
          "Assemble both the frontend and backend of your OPC's core tool",
          "Accelerate development with AI-assisted building techniques",
          "Deploy your solution with scalability and maintainability in mind",
        ],
      },
      {
        num: "06",
        title: "Unlocking AI",
        certificate:
          "Unlocking AI: From Data to Predictions and Beyond",
        synopsis:
          "The LLM engine room. Participants learn to reason with data and make decisions by prompting AI rather than building classical models. Covers the full arc from statistical thinking through prompt engineering, agent design, and RAG knowledge base construction, culminating in a working AI brain for the participant's own OPC.",
        hours: "96h",
        lead: "KYDON",
        topics: [
          "Understand how large language models work under the hood",
          "Engineer effective prompts to get reliable, repeatable results",
          "Design AI agents that carry out multi-step tasks",
          "Build a RAG knowledge base grounded in your own data",
          "Apply AI ethically and responsibly in a business context",
        ],
      },
      {
        num: "07",
        title: "Integrating Data and AI with Low-Code",
        certificate:
          "Integrating Data and AI with Low-Code Development Platform",
        synopsis:
          "Participants assemble the full integrated AI business engine, connecting automation flows, API integrations, GenAI layers, and an operating dashboard into a single functioning system. The module culminates in the Without-You Test: can the OPC run without the founder for 48 hours?",
        hours: "96h",
        lead: "KYDON",
        topics: [
          "Automate end-to-end workflows across your business systems",
          "Integrate third-party services through their APIs",
          "Add a GenAI layer that powers intelligent automation",
          "Build an operating dashboard to monitor your OPC",
          "Pass the Without-You Test: prove your business runs without you for 48 hours",
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
        certificate:
          "Leap Forward! Essential Skills for Career Transformation and Professional Growth",
        synopsis:
          "The final arc prepares participants to graduate and step into their chosen pathway. Covers OPC launch readiness, brand positioning, go-to-market strategy, AI-assisted decision-making from live business data, and the persuasive narrative needed for the D-Day Showcase.",
        hours: "57h",
        lead: "KYDON",
        topics: [
          "Prepare your OPC for launch and sustainable growth",
          "Position your brand and craft a go-to-market strategy",
          "Make data-driven decisions with AI support",
          "Pitch with confidence and present at the D-Day Showcase",
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

        {/* Programme overview */}
        <div className={styles.overview}>
          <div className={styles.ovLeft}>
            <span className={styles.ovLabel}>About This Programme</span>
            <p className={styles.ovBody}>
              The SCTP Intelligent Data-Driven Digitalisation programme is a
              SkillsFuture Career Transition Programme administered by
              SkillsFuture Singapore and delivered in partnership between Kydon
              Group and Singapore Polytechnic&apos;s School of Computing.
            </p>
            <p className={styles.ovBody}>
              Kydon brings the OPC methodology: the business-building framework,
              agentic AI systems, and operator mindset. SP brings the academic
              rigour: three full modules in programming, databases, and data
              science delivered to SP&apos;s own accredited syllabus.
            </p>
            <p className={styles.ovBody}>
              Together, the programme covers 22 approved learning outcomes across
              data engineering, AI development, low-code solutions, and
              professional skills, preparing graduates for four in-demand roles
              in Singapore&apos;s AI economy.
            </p>
          </div>
          <div className={styles.ovRight}>
            <span className={styles.ovLabel}>Graduate Career Roles</span>
            <div className={styles.rolesGrid}>
              <span className={styles.roleChip}>
                <span className={styles.roleIcon} aria-hidden="true">📊</span>
                Data Analyst
              </span>
              <span className={styles.roleChip}>
                <span className={styles.roleIcon} aria-hidden="true">🛠️</span>
                Associate Data Engineer
              </span>
              <span className={styles.roleChip}>
                <span className={styles.roleIcon} aria-hidden="true">🔄</span>
                Digital Transformation Executive
              </span>
              <span className={styles.roleChip}>
                <span className={styles.roleIcon} aria-hidden="true">📈</span>
                Product Analyst
              </span>
            </div>
            <p className={styles.rolesNote}>
              Roles aligned to the approved IDDD course outcomes.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.overviewDivider} />

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
                        <span className={styles.topicsLabel}>
                          Learning Objectives
                        </span>
                        <ul className={styles.topics}>
                          {m.topics.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className={styles.certRow}>
                      <span className={styles.certIcon} aria-hidden="true">
                        🎓
                      </span>
                      <span>Certificate of Completion in {m.certificate}</span>
                    </div>
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
