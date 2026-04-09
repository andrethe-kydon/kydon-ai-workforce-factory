import styles from "./Hero.module.css";

const stats = [
  { num: "90%",   label: "Salary covered\nby WSG CCP Grant" },
  { num: "$50K",  label: "Capital via\nEnterpriseSG Grant" },
  { num: "6mo",   label: "Paid traineeship\nto OPC launch" },
  { num: "100K+", label: "Learners on\nKydon's platform" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Live badge */}
        <div className={styles.pill}>
          <span className={styles.dot} />
          <span>Cohort 1 Open · Singapore · 30 Seats</span>
        </div>

        {/* Headline */}
        <h1 className={styles.heading}>
          Stop Learning AI.<br />
          <span className="grad-text">Earn With It.</span>
        </h1>

        {/* Subheading */}
        <p className={styles.sub}>
          The Kydon AI Workforce Factory transforms mid-career professionals into{" "}
          <strong>independent, revenue-generating AI Operators</strong> — with
          government salary support, real enterprise clients, and a structured
          2-year launch system.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#final-cta" className="btn-grad">
            Apply for Cohort 1 →
          </a>
          <a href="#solution" className={styles.ghost}>
            How the Factory Works
          </a>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {stats.map((s) => (
            <div key={s.num} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>
                {s.label.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
