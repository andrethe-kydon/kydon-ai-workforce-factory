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
    tag: "Founder",
    title: "Launch Your Own OPC",
    body: "Graduates who go the entrepreneurship route build and run their own AI-powered One Person Company — serving real clients, operating lean, and growing on their own terms. Kydon's mentorship and ecosystem remain available to support your journey.",
    points: [
      "Identify your niche and validate your market",
      "Build and launch a revenue-generating OPC",
      "Operate with AI-powered systems from day one",
      "Continue with Kydon mentorship and network access",
    ],
  },
  {
    key: "operator",
    icon: "🏢",
    tag: "AI Specialist",
    title: "Become a Professional AI Operator",
    body: "Graduates who take the AI Operator route step into a fast-growing market as qualified AI specialists — helping businesses build, deploy, and run AI-powered systems. The skills you build in this programme are exactly what organisations are looking for right now.",
    points: [
      "Deploy AI systems and automation for businesses",
      "Operate as a specialist in a high-demand field",
      "Apply your OPC skillset across multiple industries",
      "Leverage your Kydon certification to stand out",
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
          Here is what graduates go on to do.
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
            Your Graduation Outcomes
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
