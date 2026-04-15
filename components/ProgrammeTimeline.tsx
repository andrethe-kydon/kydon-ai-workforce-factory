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
    badge: "WSG CCP Funded",
    connector: true,
  },
  {
    num: "02",
    months: "Months 4–5",
    title: "Pre-Launch Runway",
    body: "Self-directed with your dedicated Kydon advisor. Tech finalisation, client pipeline building, business plan completion, pitch deck, ESG grant draft preparation.",
    points: [
      "Tech finalisation & QA",
      "Client pipeline building",
      "Business plan completion",
      "Pitch deck & ESG grant draft",
    ],
    badge: null,
    connector: true,
  },
  {
    num: "03",
    months: "Month 6",
    title: "D-Day Launch",
    body: "Kydon panel assessment. ACRA registration, D-Day simulation, OPC certified, ESG grant application submitted.",
    points: [
      "ACRA business registration",
      "D-Day live simulation",
      "OPC certification awarded",
      "ESG grant application submitted",
    ],
    badge: "D-Day Certification",
    connector: true,
  },
  {
    num: "04",
    months: "Months 7–12",
    title: "OPC Incubation",
    body: "Kydon-backed scale-up. Marketplace client matching, bi-weekly advisory sprints, ESG $50K capital received, revenue growth.",
    points: [
      "AI Marketplace client matching",
      "Bi-weekly advisory sprints",
      "ESG $50K capital received",
      "Revenue growth & scale",
    ],
    badge: "ESG Grant",
    connector: false,
  },
];

const stats = [
  { value: "12 Weeks", label: "Intensive Bootcamp" },
  { value: "1 Advisor", label: "Dedicated to You" },
  { value: "$50K", label: "ESG Capital Available" },
  { value: "Month 6", label: "OPC Launch Target" },
];

export default function ProgrammeTimeline() {
  return (
    <section className={styles.section} id="timeline">
      <div className={styles.container}>
        {/* Header */}
        <span className="section-tag">Year 1 Programme</span>
        <h2 className={styles.heading}>
          From Day One to Your Own Business.{" "}
          <span className="grad-text">In 12 Months.</span>
        </h2>
        <p className={styles.subheading}>
          Everything happens in Year 1. No waiting. No delay. You leave with a
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
