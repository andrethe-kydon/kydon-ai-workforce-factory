import HubSpotForm from "./HubSpotForm";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="final-cta">
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Your OPC Starts{" "}
          <span className="grad-text">Here.</span>
        </h2>
        <p className={styles.sub}>
          Join the waitlist for Cohort 1. We&apos;ll send you the full application,
          eligibility criteria, and programme timeline — no commitment required.
        </p>

        <HubSpotForm />

        <p className={styles.note}>
          Cohort 1 · Q4 2026 · Singapore · 30 Seats Only
        </p>
      </div>
    </section>
  );
}
