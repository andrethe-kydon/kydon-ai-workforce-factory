import styles from "./ProgrammeTimeline.module.css";

const trainingStep = {
  num: "01",
  months: "Months 1–5",
  title: "Training Programme",
  body: "Full-time training across 8 modules and 580.5 hours. Delivered jointly by Kydon and Singapore Polytechnic. Combines classroom learning with asynchronous e-learning.",
  points: [
    "8 modules across 580.5 hours",
    "Kydon-led: Modules 1, 5, 6, 7 and 8",
    "SP-delivered: Modules 2, 3 and 4",
    "Full-time classroom and asynchronous e-learning",
    "Intake: September 2026 · Singapore Polytechnic",
  ],
};

const pathways = [
  {
    key: "entrepreneurship",
    icon: "🚀",
    tag: "Self-Employed",
    title: "Entrepreneurship Track",
    body: "Graduate and launch your own AI-powered One Person Company. Self-source and operate your own projects with ongoing Kydon mentorship and guidance.",
    points: [
      "Self-source and operate your own projects",
      "Kydon mentorship and advisory support",
      "Access to Kydon's ecosystem and network",
      "Goal: a revenue-generating OPC",
    ],
  },
  {
    key: "operator",
    icon: "🏢",
    tag: "Employed · 6 Months",
    title: "AI Operator Track",
    body: "Graduate and join Kydon as an employed AI Operator for 6 months. Operate self-sourced projects under Kydon's structure with dedicated guidance throughout.",
    points: [
      "Employed under Kydon for 6 months",
      "Self-sourced projects, Kydon-guided delivery",
      "Structured mentorship and performance support",
      "Goal: establish yourself as a professional AI Operator",
    ],
  },
];

const stats = [
  { value: "580.5", label: "Total training hours" },
  { value: "8", label: "Modules across 2 institutions" },
  { value: "2", label: "Post-graduation pathways" },
  { value: "Sep 2026", label: "Cohort 1 intake" },
];

export default function ProgrammeTimeline() {
  return (
    <section className={styles.section} id="programme-timeline">
      <div className={styles.container}>
        {/* Header */}
        <span className="section-tag">5-Month Programme</span>
        <h2 className={styles.heading}>
          Five Months of Training.{" "}
          <span className="grad-text">Two Ways Forward.</span>
        </h2>
        <p className={styles.subheading}>
          Train full-time across 8 modules with Kydon and Singapore Polytechnic.
          On graduation, choose the track that fits your ambition.
        </p>

        {/* Phase 1 — full-width training step */}
        <div className={styles.trainingStep}>
          <div className={styles.nodeWrap}>
            <div className={styles.nodePulse} />
            <div className={styles.node}>
              <span className={styles.nodeNum}>{trainingStep.num}</span>
            </div>
          </div>
          <div className={styles.trainingCard}>
            <div className={styles.cardMonths}>{trainingStep.months}</div>
            <h3 className={styles.trainingTitle}>{trainingStep.title}</h3>
            <p className={styles.cardBody}>{trainingStep.body}</p>
            <ul className={styles.trainingPts}>
              {trainingStep.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fork divider */}
        <div className={styles.forkWrap}>
          <div className={styles.forkLine} />
          <span className={styles.forkLabel}>
            Upon Graduation · Choose Your Track
          </span>
          <div className={styles.forkLine} />
        </div>

        {/* Phase 2 — two pathway cards */}
        <div className={styles.pathways}>
          {pathways.map((p) => (
            <div
              key={p.key}
              className={`${styles.pathCard} ${
                p.key === "operator"
                  ? styles.pathCardBlue
                  : styles.pathCardOrange
              }`}
            >
              <div className={styles.pathHead}>
                <span className={styles.pathIcon} aria-hidden="true">
                  {p.icon}
                </span>
                <span className={styles.pathTag}>{p.tag}</span>
              </div>
              <h3 className={styles.pathTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
              <ul className={styles.cardPts}>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stat cards */}
        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
