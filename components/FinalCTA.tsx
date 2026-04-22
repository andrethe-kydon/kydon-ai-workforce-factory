import HubSpotForm from "./HubSpotForm";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="final-cta">
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Be First{" "}
          <span className="grad-text">in Line.</span>
        </h2>
        <p className={styles.sub}>
          The Kydon AI Workforce Factory is in its market sensing phase. Join the waitlist now
          to be among the first notified when Cohort 1 officially opens — and to shape the
          programme before it launches.
        </p>

        <HubSpotForm />

        <p className={styles.note}>
          Cohort 1 · Q4 2026 · Singapore · 30 Seats Only
        </p>
        <p className={styles.disclaimer}>
          Programme details are subject to final confirmation with programme partners. Joining
          the waitlist is an expression of interest only — no commitment or financial obligation
          at this stage.
        </p>
      </div>
    </section>
  );
}
