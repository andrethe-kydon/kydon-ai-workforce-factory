'use client';

import { useState } from 'react';
import styles from './Curriculum.module.css';

interface Week {
  num: number;
  title: string;
  description: string;
  objectives: string[];
  lab: string;
  deliverable: string;
  checker: boolean;
  checkerLabel?: string;
}

interface Phase {
  id: number;
  label: string;
  title: string;
  range: string;
  theme: 'light' | 'dark';
  weeks: Week[];
}

const curriculum: Phase[] = [
  {
    id: 1,
    label: 'Phase 1',
    title: 'AI Foundations & Business Intelligence',
    range: 'Weeks 1–4',
    theme: 'light',
    weeks: [
      {
        num: 1,
        title: 'AI Literacy & the OPC Mindset',
        description:
          'How LLMs actually work for operators. The OPC business model: Revenue per Human vs traditional headcount. Personal Unfair Advantage Audit. Responsible AI: data privacy and when NOT to use AI.',
        objectives: [
          'How LLMs actually work — tokens, context, reasoning explained for operators',
          'The OPC business model: Revenue per Human vs traditional headcount growth',
          'Personal Unfair Advantage Audit: map your domain expertise to AI opportunities',
          'Responsible AI: data privacy, confidentiality, and when NOT to use AI',
        ],
        lab: 'Your industry through the AI lens — type your first strategic prompt and compare outputs.',
        deliverable: 'Personal AI Readiness Profile + Top 3 AI opportunity areas in your domain.',
        checker: false,
      },
      {
        num: 2,
        title: 'Prompt Engineering — From Basic to Expert',
        description:
          'Anatomy of a high-performance prompt: role, context, constraints, format. Zero-shot, few-shot, chain-of-thought — when to use each. Prompt chaining for complex business tasks. System prompts and persona engineering.',
        objectives: [
          'Anatomy of a high-performance prompt: role, context, constraints, format',
          'Zero-shot, few-shot, chain-of-thought — when to use each for business tasks',
          'Prompt chaining: breaking complex tasks into sequential AI-assisted steps',
          'System prompts and persona engineering: build your virtual AI team',
        ],
        lab: 'Prompt Battle Lab — same task, 3 different prompt styles. Build your first 10 prompts.',
        deliverable: 'Personal Prompt Library (first 10 prompts labelled by use case).',
        checker: false,
      },
      {
        num: 3,
        title: 'AI-Native Market Research & Niche Validation',
        description:
          'Deep competitive intelligence using AI. Synthetic persona interviews to validate your niche. Sentiment analysis at scale. Micro-niche validation: TAM to SAM to niche.',
        objectives: [
          'Deep competitive intelligence using AI: map competitor gaps in minutes',
          'Synthetic persona interviews: validate your niche before spending a dollar',
          'Sentiment analysis at scale: mine reviews, forums, social for unmet needs',
          'Micro-niche validation: TAM to SAM to niche — big enough to sustain, small enough to own',
        ],
        lab: 'From blank page to validated niche brief in 90 minutes using Claude and Perplexity.',
        deliverable: 'Validated Niche Brief — 3 ranked micro-niches with evidence and pain point analysis.',
        checker: false,
      },
      {
        num: 4,
        title: 'Problem-Solution Fit & Value Proposition Design',
        description:
          'Jobs-To-Be-Done framework applied through AI. Deconstruction of 10 successful OPCs. Value proposition canvas. Unit economics primer.',
        objectives: [
          'Jobs-To-Be-Done framework applied through AI — go beyond what people say they want',
          'Deconstruction lab: reverse-engineer 10 successful OPCs in tech and ops domains',
          'Value proposition canvas: define pain relievers and gain creators your OPC delivers',
          'Unit economics primer: how AI changes the margin profile of a service business',
        ],
        lab: 'Draft your OPC positioning statement and test it against 3 synthetic customer personas live.',
        deliverable: 'OPC Service Concept Document + initial unit economics model.',
        checker: true,
        checkerLabel: 'Phase 1 Milestone Checker',
      },
    ],
  },
  {
    id: 2,
    label: 'Phase 2',
    title: 'Agentic AI Systems & Tech Stack',
    range: 'Weeks 5–9',
    theme: 'dark',
    weeks: [
      {
        num: 5,
        title: 'Introduction to Agentic AI & Automation Architecture',
        description:
          "What is an AI agent — tools, memory, planning loops explained simply. No-code automation platforms: n8n, Zapier, Make.com. Trigger-action logic. Human-in-the-Loop design.",
        objectives: [
          'What is an AI agent — tools, memory, planning loops explained without jargon',
          'No-code automation platforms: n8n, Zapier, Make.com — choosing the right tool',
          'Trigger-action logic: build your first multi-step business automation end to end',
          'Human-in-the-Loop design: where to keep humans for quality and trust',
        ],
        lab: 'Build a 5-step automation in n8n — trigger to AI processing to formatted output. Works by end of session.',
        deliverable: "Automation Architecture Blueprint for your OPC's core business process.",
        checker: false,
      },
      {
        num: 6,
        title: 'API Integration & the OPC Tech Stack',
        description:
          'APIs for non-developers: REST, webhooks, HTTP nodes. Connect Claude API to n8n workflows. RAG concepts for operators. PDPA basics and data handling.',
        objectives: [
          'APIs for non-developers: REST, webhooks, HTTP nodes — reading docs without coding',
          'Connect Claude and OpenAI APIs to n8n workflows — your first AI-powered automation',
          'RAG concepts for operators: give your agent access to your own documents',
          'PDPA basics and data handling: what you can and cannot send to third-party APIs',
        ],
        lab: 'Connect Claude API to a document retrieval workflow — CRM plus AI tools plus automation layer all live.',
        deliverable: 'Fully configured OPC tech stack — CRM, AI tools, automation layer integrated.',
        checker: false,
      },
      {
        num: 7,
        title: 'Building AI Agents for Business Processes',
        description:
          'Multi-agent design: orchestrator plus sub-agents. Context engineering. Agent memory: short-term, long-term, episodic. Error handling and fallback logic.',
        objectives: [
          'Multi-agent design: orchestrator plus sub-agents equals your virtual AI team',
          'Context engineering: give agents the right information to produce great outputs',
          'Agent memory: short-term context, long-term vector database, episodic history',
          'Error handling and reliability: fallback logic so your OPC does not silently fail',
        ],
        lab: 'Build a research and report-writing agent system — from URL input to formatted deliverable, fully automated.',
        deliverable: "Working multi-agent workflow for your OPC's primary service delivery.",
        checker: false,
      },
      {
        num: 8,
        title: 'AI-Powered Lead Generation & Client Acquisition',
        description:
          'Automated lead research: AI scrapes, enriches, qualifies leads to CRM daily. Personalised outreach at scale. Content as lead magnet. Proposal automation.',
        objectives: [
          'Automated lead research: AI scrapes, enriches, and qualifies leads to CRM daily',
          'Personalised outreach at scale: AI-written emails referencing each prospect\'s context',
          'Content as lead magnet: thought leadership that generates inbound without paid ads',
          'Proposal automation: intake form to AI draft to client-ready proposal in minutes',
        ],
        lab: 'Build a personalised outreach sequence live — prospect URL to sent email in one automated workflow.',
        deliverable: 'Live lead generation workflow plus first 20 qualified leads in your pipeline.',
        checker: false,
      },
      {
        num: 9,
        title: 'MVP Build & Service Delivery Systems',
        description:
          'Rapid prototyping for AI service businesses. End-to-end delivery system: intake to AI processing to HITL review to output delivery. No-code client portals using Notion, Tally, Softr. User testing your MVP.',
        objectives: [
          'Rapid prototyping for AI service businesses: what a good OPC MVP looks like',
          'End-to-end delivery system: intake to AI processing to HITL review to output delivery',
          'No-code client portals: intake forms and dashboards using Notion, Tally, and Softr',
          'User testing your MVP: structured pilot with 3 to 5 real users and fast iteration',
        ],
        lab: 'Build and demo your end-to-end service delivery system — real client intake to final output, live.',
        deliverable: 'Functional MVP — service delivery system live and testable by real clients.',
        checker: true,
        checkerLabel: 'Phase 2 Milestone Checker',
      },
    ],
  },
  {
    id: 3,
    label: 'Phase 3',
    title: 'OPC Launch, Revenue & Operations',
    range: 'Weeks 10–12',
    theme: 'light',
    weeks: [
      {
        num: 10,
        title: 'Pricing, Financials & OPC Legal Setup',
        description:
          'Value-based pricing: price on outcome value, not hours. Pricing model options: retainer, project, outcome-based, productised services. 12-month financial model. Singapore OPC legal setup: ACRA, GST thresholds, contracts, ESG grant prep.',
        objectives: [
          'Value-based pricing: price on outcome value, not hours — move beyond time-billing',
          'Pricing model options: retainer, project, outcome-based, productised services',
          '12-month financial model: revenue, costs, breakeven, and scenario planning',
          'Singapore OPC legal setup: ACRA, GST thresholds, contracts, ESG grant preparation',
        ],
        lab: 'Role-play a client pricing conversation using value-anchoring. Present your 12-month model to the group.',
        deliverable: '12-month financial model plus OPC legal setup checklist fully completed.',
        checker: false,
      },
      {
        num: 11,
        title: 'Go-To-Market Strategy & Business Development',
        description:
          'GTM for solo operators: find your first 5 clients without a marketing budget. Personal brand that converts: LinkedIn, thought leadership, community. Partnership and ecosystem strategy. Building a data moat.',
        objectives: [
          'GTM for solo operators: find your first 5 clients without a marketing budget',
          'Personal brand that converts: LinkedIn, thought leadership, community plays',
          'Partnership and ecosystem strategy: embed your OPC in existing business networks',
          'Building a data moat: accumulate proprietary insights competitors cannot replicate',
        ],
        lab: 'Send 10 personalised outreach messages live in session — real prospects, real messages, real time.',
        deliverable: 'Full GTM plan plus 90-day client acquisition calendar with named prospects.',
        checker: false,
      },
      {
        num: 12,
        title: 'Business Plan, Pitch & D-Day Readiness',
        description:
          'Comprehensive business plan integrating all 12-week deliverables. Pitch deck: 10-slide OPC pitch. D-Day simulation: first client brief to proposal to delivery to invoice using only your built systems. OPC registration, ESG grant application, and incubation onboarding.',
        objectives: [
          'Comprehensive business plan: all 12-week deliverables integrated and grant-ready',
          'Pitch deck: 10-slide OPC pitch covering problem, solution, traction, model, and ask',
          'D-Day simulation: first client brief to proposal to delivery to invoice using only your systems',
          'OPC registration, ESG grant application, and Kydon incubation onboarding',
        ],
        lab: 'Full mock Day 1 of your OPC — client brief received, proposal, delivery, invoice, no manual shortcuts.',
        deliverable: 'Complete business plan plus pitch deck plus MVP demo.',
        checker: true,
        checkerLabel: 'D-Day Readiness Certification',
      },
    ],
  },
];

export default function Curriculum() {
  const [activePhase, setActivePhase] = useState(0);
  const [openWeeks, setOpenWeeks] = useState<Set<number>>(new Set([1]));

  const phase = curriculum[activePhase];
  const isLight = phase.theme === 'light';

  const handlePhaseChange = (idx: number) => {
    setActivePhase(idx);
    setOpenWeeks(new Set([curriculum[idx].weeks[0].num]));
  };

  const toggleWeek = (num: number) => {
    setOpenWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(num)) {
        next.delete(num);
      } else {
        next.add(num);
      }
      return next;
    });
  };

  return (
    <section
      className={`${styles.section} ${isLight ? styles.sectionLight : styles.sectionDark}`}
      id="curriculum"
    >
      <div className={styles.container}>
        {/* Header */}
        <span className={isLight ? 'section-tag-light' : 'section-tag'}>
          12-Week Curriculum
        </span>
        <h2 className={`${styles.heading} ${isLight ? styles.headingLight : ''}`}>
          What You Build.{' '}
          <span className="grad-text">Week by Week.</span>
        </h2>
        <p className={`${styles.subheading} ${isLight ? styles.subheadingLight : ''}`}>
          Every week produces a real business deliverable — not a test or assignment. You leave with 18+ assets you actually use.
        </p>

        {/* Phase Tab Navigation */}
        <div className={`${styles.tabs} ${isLight ? styles.tabsLight : ''}`}>
          {curriculum.map((p, idx) => {
            const isActive = activePhase === idx;
            const tabIsLight = isLight;
            return (
              <button
                key={p.id}
                className={[
                  styles.tab,
                  tabIsLight ? styles.tabLight : '',
                  isActive ? (tabIsLight ? styles.tabActiveLightTheme : styles.tabActiveDark) : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handlePhaseChange(idx)}
              >
                <span className={`${styles.tabLabel} ${tabIsLight ? styles.tabLabelLight : ''}`}>
                  {p.label}
                </span>
                <span className={`${styles.tabTitle} ${tabIsLight ? styles.tabTitleLight : ''}`}>
                  {p.title}
                </span>
                <span className={`${styles.tabRange} ${tabIsLight ? styles.tabRangeLight : ''}`}>
                  {p.range}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        <div className={`${styles.accordion} ${isLight ? styles.accordionLight : ''}`}>
          {phase.weeks.map((week) => {
            const isOpen = openWeeks.has(week.num);
            return (
              <div
                key={week.num}
                className={`${styles.weekItem} ${isLight ? styles.weekItemLight : ''} ${isOpen ? styles.weekItemOpen : ''}`}
              >
                {/* Week Header */}
                <button
                  className={styles.weekHeader}
                  onClick={() => toggleWeek(week.num)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.weekHeaderLeft}>
                    <span className={`${styles.weekNum} ${isLight ? styles.weekNumLight : ''}`}>
                      Week {week.num}
                    </span>
                    <span className={`${styles.weekTitle} ${isLight ? styles.weekTitleLight : ''}`}>
                      {week.title}
                    </span>
                    {week.checker && (
                      <span className={styles.checkerDot} aria-label="Milestone" />
                    )}
                  </div>
                  <span
                    className={`${styles.weekArrow} ${isLight ? styles.weekArrowLight : ''} ${isOpen ? styles.weekArrowOpen : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Week Body */}
                {isOpen && (
                  <div className={styles.weekBody}>
                    <p className={`${styles.weekDesc} ${isLight ? styles.weekDescLight : ''}`}>
                      {week.description}
                    </p>

                    <div className={styles.objectives}>
                      <span className={`${styles.weekMetaLabel} ${isLight ? styles.weekMetaLabelLight : ''}`}>
                        Learning Objectives
                      </span>
                      <ul className={styles.objectivesList}>
                        {week.objectives.map((obj, i) => (
                          <li
                            key={i}
                            className={`${styles.objectivesItem} ${isLight ? styles.objectivesItemLight : ''}`}
                          >
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.weekMeta}>
                      <div className={`${styles.weekMetaItem} ${isLight ? styles.weekMetaItemLight : ''}`}>
                        <div className={styles.weekMetaInner}>
                          <span className={`${styles.weekMetaLabel} ${isLight ? styles.weekMetaLabelLight : ''}`}>
                            Hands-On Lab
                          </span>
                          <span className={`${styles.weekMetaText} ${isLight ? styles.weekMetaTextLight : ''}`}>
                            {week.lab}
                          </span>
                        </div>
                      </div>

                      <div className={`${styles.weekMetaItem} ${isLight ? styles.weekMetaItemLight : ''}`}>
                        <div className={styles.weekMetaInner}>
                          <span className={`${styles.weekMetaLabel} ${isLight ? styles.weekMetaLabelLight : ''}`}>
                            Deliverable
                          </span>
                          <span className={`${styles.weekMetaText} ${isLight ? styles.weekMetaTextLight : ''}`}>
                            {week.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>

                    {week.checker && week.checkerLabel && (
                      <div className={styles.checkerBanner}>
                        <span className={styles.checkerDotLarge} />
                        <span className={styles.checkerText}>{week.checkerLabel}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
