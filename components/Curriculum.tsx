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
    label: 'Arc 1',
    title: 'Operator Foundations',
    range: 'Weeks 1–4',
    theme: 'light',
    weeks: [
      {
        num: 1,
        title: 'The Operator Mindset',
        description:
          'The Kydon Operator Model, the Without-You Test, OPC archetypes from four Singapore cases, and the mindset shift from specialist to system-owner. Hands-on AI bilingualism diagnostic across ChatGPT, Claude, and Copilot, with a full tool taxonomy covering foundation models, agents, and automation platforms.',
        objectives: [
          'The Kydon Operator Model: Revenue per Human and the shift from specialist to system-owner',
          'The Without-You Test: can your business run without you for 48 hours?',
          'OPC archetypes: four Singapore cases covering content, ops, data, and advisory models',
          'AI bilingualism diagnostic: establish your personal baseline across ChatGPT, Claude, and Copilot',
          'Tool taxonomy: foundation models, agents, and automation platforms — what each is for',
          'Set up your personal AI working environment ready for Week 2',
        ],
        lab: 'AI bilingualism diagnostic: complete structured tasks across three foundation models and score your outputs against a rubric.',
        deliverable: 'Personal Operator Profile + AI fluency baseline score.',
        checker: false,
      },
      {
        num: 2,
        title: 'Niche & Founder-Opportunity Fit',
        description:
          'The 3S Filter (Scalable, Simple, Suitable), niche mining versus niche manufacturing, the proof-of-pain test, and founder-opportunity fit. AI-native market research using LLMs for competitive intelligence, sentiment analysis on niche communities, and synthetic persona interviews in a 90-minute niche validation sprint.',
        objectives: [
          'The 3S Filter: evaluate any niche idea against Scalable, Simple, and Suitable criteria',
          'Niche mining vs niche manufacturing: how to find vs force a niche',
          'Proof-of-pain test: validate that the problem is urgent enough to pay for',
          'Founder-opportunity fit: why your background is an asset, not a constraint',
          'AI-native market research: LLMs for competitive intelligence and gap mapping',
          'Sentiment analysis on niche communities: mine forums, reviews, and social for unmet needs',
          'Synthetic persona interviews: validate without spending a dollar on ads',
        ],
        lab: '90-minute niche validation sprint: blank page to validated niche brief using Claude and Perplexity.',
        deliverable: 'Validated niche statement + 3S Filter scorecard.',
        checker: false,
      },
      {
        num: 3,
        title: 'Brand Promise & Unit Economics',
        description:
          'One-sentence brand promise framework, value-based versus time-based pricing, OPC unit economics, and retainer versus project versus productised service models. AI-assisted brand development including name generation, positioning, and messaging variants — stress-testing five brand promise variants with AI and building your first prompt library.',
        objectives: [
          'One-sentence brand promise: the formula that makes your OPC immediately legible to clients',
          'Value-based pricing: price on outcome delivered, not hours spent',
          'OPC unit economics: revenue per engagement, cost per delivery, and margin targets',
          'Retainer vs project vs productised service: choose the model that fits your capacity',
          'AI-assisted brand development: name generation, positioning, and messaging variants at speed',
          'Stress-test five brand promise variants with AI playing devil\'s advocate',
          'Build your first prompt library: 10 reusable prompts for your specific niche',
        ],
        lab: 'Brand stress-test: run five brand promise variants through AI critique, then pressure-test your preferred option against a synthetic sceptical client.',
        deliverable: 'Brand promise statement + indicative pricing model.',
        checker: false,
      },
      {
        num: 4,
        title: 'Legal & Compliance Awareness for OPCs',
        description:
          'Singapore entity choices (sole proprietorship, Pte Ltd, OPC), GST registration thresholds, contract essentials, PDPA data privacy, and AI ethics and client disclosure. Hands-on lab drafting a service agreement with AI, then critiquing it against a model contract and identifying where AI hallucinates in legal work.',
        objectives: [
          'Singapore entity choices: sole prop, Pte Ltd, and OPC — the trade-offs for a solo operator',
          'GST registration thresholds: when and how to register, and what it means for pricing',
          'Contract essentials: scope, IP ownership, payment terms, and liability caps',
          'PDPA data privacy: what you can collect, store, and send to third-party AI tools',
          'AI ethics and client disclosure: when and how to tell clients you use AI',
          'AI as legal first-drafter: where it accelerates work and where it introduces risk',
          'Identify hallucination patterns in AI-drafted legal documents',
        ],
        lab: 'Draft a service agreement with AI, then critique it line-by-line against a model contract provided by the programme.',
        deliverable: 'Entity decision memo + draft service agreement.',
        checker: true,
        checkerLabel: 'Arc 1 Capstone: Operator Charter',
      },
    ],
  },
  {
    id: 2,
    label: 'Arc 2',
    title: 'The AI Stack',
    range: 'Weeks 5–8',
    theme: 'dark',
    weeks: [
      {
        num: 5,
        title: 'Designing the AI Team',
        description:
          'The 8 AI Team functions — content, refinement, distribution, lead generation, sales, onboarding, support, and finance. Mapping functions to your founder expertise, HITL design, and the Articulation Test. Foundation model selection across Claude, GPT, Gemini, and open-source, with prompt engineering for role-based agents and voice encoded into system prompts.',
        objectives: [
          'The 8 AI Team functions: content, refinement, distribution, lead gen, sales, onboarding, support, finance',
          'Map each function to your founder expertise to decide where to automate first',
          'HITL design: where to keep a human in the loop for quality, trust, and compliance',
          'The Articulation Test: can every agent output be explained in plain language to a client?',
          'Foundation model selection: Claude vs GPT vs Gemini vs open-source for each function',
          'Prompt engineering for role-based agents: encode voice, tone, and constraints into system prompts',
        ],
        lab: 'Write 8 role-based system prompts — one per AI Team function — and run them against a real brief from your niche.',
        deliverable: 'AI Team blueprint + 8 role-based system prompts.',
        checker: false,
      },
      {
        num: 6,
        title: 'Agentic Workflow Architecture',
        description:
          'Economics of automation — what to automate first, the HITL decision framework, workflow discovery, and risk and failure modes of silent automation breaks. Intensive hands-on build in n8n, Make, or Zapier: three event-triggered workflows covering lead capture to outreach, content to multi-platform distribution, and client signup to onboarding sequence.',
        objectives: [
          'Economics of automation: sequence automation by impact-to-complexity ratio',
          'HITL decision framework: a scoring rubric for where humans must stay in the loop',
          'Workflow discovery: map your current manual processes to automation candidates',
          'Silent failure modes: how automations break invisibly and how to catch them early',
          'n8n / Make / Zapier selection: choose the right platform for your technical comfort and budget',
          'Event-triggered workflow design: trigger, condition, action, and error-handling nodes',
        ],
        lab: 'Build three live automations: (1) lead capture → enrichment → outreach, (2) content publish → multi-platform distribution, (3) client signup → onboarding sequence.',
        deliverable: 'Three live automations + workflow architecture diagram.',
        checker: false,
      },
      {
        num: 7,
        title: 'RAG, Memory & Knowledge Systems',
        description:
          'Why proprietary knowledge is the defensible asset of an OPC, agents that know your client history, knowledge taxonomy, and privacy in retrieval systems. Hands-on RAG build: ingest your own domain knowledge into a vector store, understand embeddings and chunking, and integrate with Week 6 workflows.',
        objectives: [
          'Proprietary knowledge as moat: why retrieval beats retraining for solo operators',
          'Agents that know your client history: episodic memory and session continuity',
          'Knowledge taxonomy: what to ingest — documents, transcripts, SOPs, case studies',
          'Privacy in retrieval systems: what data should never enter a shared vector store',
          'Vector stores: what they are, why they matter, and how to build one without code',
          'Embeddings and chunking: conceptual understanding then hands-on configuration',
          'Retrieval quality testing: how to know when your RAG system is working',
        ],
        lab: 'Build a RAG-powered knowledge agent using your own domain content — ingest, configure, test retrieval quality, and integrate with a Week 6 workflow.',
        deliverable: 'Functional RAG-powered knowledge agent.',
        checker: false,
      },
      {
        num: 8,
        title: 'Multi-Agent Orchestration & Quality Control',
        description:
          'Quality at scale — maintaining brand standards across 8 agents, failure modes including drift, hallucination compounding, and silent failure, and the Articulation Test under pressure. Multi-agent orchestration patterns, evaluation and observability, logging and monitoring for solo operators, and cost management across multiple agents.',
        objectives: [
          'Quality at scale: how brand drift happens across multiple agents and how to prevent it',
          'Failure modes: hallucination compounding, silent failure, and agent instruction conflicts',
          'Articulation Test under pressure: every output must be explainable to a non-technical client',
          'Orchestration patterns: supervisor-agent, sequential, and parallel designs',
          'Evaluation and observability: building a lightweight quality dashboard for a solo operator',
          'Logging and monitoring: the minimum viable audit trail for client accountability',
          'Cost management: token budgeting and model selection across a multi-agent stack',
        ],
        lab: 'Wire your 8 AI Team agents into an orchestrated system, run a live brief end-to-end, and apply the Articulation Test to every output.',
        deliverable: 'Multi-agent orchestration design + monitoring plan.',
        checker: true,
        checkerLabel: 'Arc 2 Capstone: Live AI Stack Demo',
      },
    ],
  },
  {
    id: 3,
    label: 'Arc 3',
    title: 'Launch Readiness',
    range: 'Weeks 9–12',
    theme: 'light',
    weeks: [
      {
        num: 9,
        title: 'MVP Definition & Validation',
        description:
          'MVP for service-based versus product-based OPCs, pre-sale validation through paid commitments before D-Day, the first-three-conversations playbook, and pricing for your first cohort versus steady-state. Build your MVP using the Arc 2 AI stack as the production engine, with service-delivery automation from inquiry to first delivery.',
        objectives: [
          'MVP scope: the minimum that delivers full value — what to include, what to cut',
          'Service vs product MVP: different validation approaches for different OPC models',
          'Pre-sale validation: get a paid commitment before you build anything more',
          'First-three-conversations playbook: how to run discovery, proposal, and close as one person',
          'First-cohort pricing: why you should charge less than steady-state and what to measure',
          'Service-delivery automation: from inquiry to first delivery using your Arc 2 stack',
          'Quality assurance loops: how to catch errors before the client does',
        ],
        lab: 'Build your end-to-end MVP delivery system live and run a simulated client through the full journey from inquiry to delivered output.',
        deliverable: 'Functional MVP + three pre-validation conversations logged.',
        checker: false,
      },
      {
        num: 10,
        title: 'Go-to-Market & Sales Stack',
        description:
          'GTM strategy for your validated niche, channel selection, content cadence for a one-person operation, and the first-100-customers playbook for OPCs. AI sales stack execution including lead generation, personalised outreach automation, CRM hygiene for solo operators, and follow-up sequences — first outreach wave sent live by end of week.',
        objectives: [
          'GTM strategy: channel selection based on where your niche actually spends attention',
          'Content cadence: the minimum viable publishing rhythm for a solo operator',
          'First-100-customers playbook: sequenced tactics from zero to meaningful traction',
          'AI-powered lead generation: scrape, enrich, and qualify leads into your CRM automatically',
          'Personalised outreach at scale: AI-written messages referencing each prospect\'s context',
          'CRM hygiene for solo operators: the fields that matter and the ones to ignore',
          'Follow-up sequences: persistence without being annoying, automated end-to-end',
        ],
        lab: 'Send 10 personalised outreach messages live in session — real prospects, real messages, real time — and log responses in your CRM.',
        deliverable: 'Active GTM campaign + first outreach wave sent.',
        checker: false,
      },
      {
        num: 11,
        title: 'Legal Execution, Finance Setup & Final Business Plan',
        description:
          'ACRA entity registration walkthrough, bank account and payment processing setup, contract finalisation from the Week 4 draft, and a complete business plan backed by Weeks 9–10 validation data. Financial stack build including payment processor, invoicing automation, revenue dashboard, Stripe and GST handling for Singapore entities, and a full system audit for production readiness.',
        objectives: [
          'ACRA entity registration: step-by-step walkthrough of the actual filing process',
          'Bank account and payment processing setup for a Singapore-registered entity',
          'Contract finalisation: take the Week 4 draft through legal-ready review',
          'Business plan with validation data: how Weeks 9 and 10 evidence strengthens your plan',
          'ESG Startup SG Founder eligibility: requirements, documentation, and application sequence',
          'Payment processor + invoicing automation: get paid without manual admin',
          'Revenue dashboard: real-time visibility into pipeline, revenue, and costs',
        ],
        lab: 'Full system audit: run your entire stack — AI agents, automations, CRM, financial systems — against a production-readiness checklist.',
        deliverable: 'Registered entity + ESG Startup SG Founder-ready business plan + live financial stack.',
        checker: false,
      },
      {
        num: 12,
        title: 'D-Day Simulation, Pitch & Roadshow',
        description:
          'Pitch deck construction, mock Q&A with assessors as investor, client, and sceptical journalist, the D-Day first-client simulation, and ESG Startup SG Founder and IMDA Spark alignment. Final stack audit against the Without-You Test, Articulation Test in front of a mixed-discipline panel, and Operator Readiness Certification awarded.',
        objectives: [
          'Pitch deck construction: 10-slide structure covering problem, solution, traction, model, and ask',
          'Mock Q&A: answer investor, client, and sceptical journalist questions cold',
          'D-Day first-client simulation: brief received, proposal sent, delivery completed, invoice raised',
          'Without-You Test final: does your OPC operate without you for 48 hours?',
          'Articulation Test final: explain every system output in plain language under panel pressure',
          'ESG Startup SG Founder alignment: confirm grant-readiness before the showcase',
          'IMDA Spark alignment: digital transformation grant pathway for qualifying OPCs',
        ],
        lab: 'Full D-Day simulation: client brief received at 09:00 — proposal, delivery, and invoice completed using only your built systems before session ends.',
        deliverable: 'Operator Readiness Certification + investor-grade pitch deck.',
        checker: true,
        checkerLabel: 'Arc 3 Capstone: D-Day Readiness Showcase',
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
          Every week produces a real business deliverable, not a test or assignment. You leave with 18+ assets you actually use.
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
