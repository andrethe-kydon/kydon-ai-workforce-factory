import styles from "./Hero.module.css";

const stats = [
  { num: "12",     label: "Weeks of intensive\nagentic AI training" },
  { num: "18+",    label: "Real business\ndeliverables you build" },
  { num: "Month 5", label: "Your OPC\nis live" },
  { num: "100K+",  label: "Learners on\nKydon's platform" },
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
          <span>Market Sensing Phase · Singapore · Cohort 1 · Q4 2026</span>
        </div>

        {/* Headline */}
        <h1 className={styles.heading}>
          Stop Learning AI.<br />
          <span className="grad-text">Earn With It.</span>
        </h1>

        {/* Subheading */}
        <p className={styles.sub}>
          The Kydon AI Workforce Factory is Singapore&apos;s most intensive agentic AI
          programme. In 9 months, you master the workflows powering tomorrow&apos;s
          businesses, then launch your own AI-powered One Person Company.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#final-cta" className="btn-grad">
            Join the Waitlist →
          </a>
          <a href="#solution" className={styles.ghost}>
            Explore the Programme
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
