import styles from "./ProgrammeTimeline.module.css";

const phases = [
  {
    num: "01",
    months: "Months 1–3",
    title: "12-Week Bootcamp",
    body: "Kydon-led intensive. AI skills, niche validation, MVP build, prompt library, tech stack setup.",
    points: [
      "Prompt engineering & agentic workflows",
      "Niche validation with AI research tools",
      "MVP scoping & unit economics",
      "Tech stack setup & prompt library",
    ],
    badge: null,
    connector: true,
  },
  {
    num: "02",
    months: "Month 4",
    title: "Pre-Launch Runway",
    body: "Self-directed with your dedicated Kydon advisor. Tech finalisation, client pipeline building, business plan completion, and pitch deck finalisation.",
    points: [
      "Tech finalisation & QA",
      "Client pipeline building",
      "Business plan completion",
      "Pitch deck & business plan finalised",
    ],
    badge: null,
    connector: true,
  },
  {
    num: "03",
    months: "Month 5",
    title: "D-Day Launch",
    body: "Kydon panel assessment. ACRA registration, D-Day simulation, OPC certified, ESG grant application submitted.",
    points: [
      "ACRA business registration",
      "D-Day live simulation",
      "OPC certification awarded",
      "Kydon incubation onboarding begins",
    ],
    badge: null,
    connector: true,
  },
  {
    num: "04",
    months: "Months 6–9",
    title: "OPC Incubation",
    body: "Kydon-backed scale-up. Marketplace client matching, bi-weekly advisory sprints, and dedicated support to grow your OPC revenue.",
    points: [
      "AI Marketplace client matching",
      "Bi-weekly advisory sprints",
      "Enterprise client pipeline active",
      "Revenue growth & scale",
    ],
    badge: null,
    connector: false,
  },
];

const stats = [
  { value: "12 Weeks", label: "Intensive Bootcamp" },
  { value: "1 Advisor", label: "Dedicated to You" },
  { value: "$50K", label: "ESG Capital Available" },
  { value: "Month 5", label: "OPC Launch Target" },
];

export default function ProgrammeTimeline() {
  return (
    <section className={styles.section} id="timeline">
      <div className={styles.container}>
        {/* Header */}
        <span className="section-tag">9-Month Programme</span>
        <h2 className={styles.heading}>
          From Day One to Your Own Business.{" "}
          <span className="grad-text">In 9 Months.</span>
        </h2>
        <p className={styles.subheading}>
          Everything happens in 9 months. No waiting. No delay. You leave with a
          certified, revenue-generating OPC.
        </p>

        {/* Timeline track */}
        <div className={styles.track}>
          <div className={styles.trackLine} />
          {phases.map((phase) => (
            <div key={phase.num} className={styles.phaseCol}>
              <div className={styles.nodeWrap}>
                <div className={styles.nodePulse} />
                <div className={styles.node}>
                  <span className={styles.nodeNum}>{phase.num}</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardMonths}>{phase.months}</div>
                <h3 className={styles.cardTitle}>{phase.title}</h3>
                <p className={styles.cardBody}>{phase.body}</p>
                <ul className={styles.cardPts}>
                  {phase.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {phase.badge && (
                  <div className={styles.badge}>{phase.badge}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stat cards */}
        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.value} className={styles.statCard}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
