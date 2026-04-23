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
          to be among the first notified when Cohort 1 officially opens, and to shape the
          programme before it launches.
        </p>

        <HubSpotForm />

        <p className={styles.note}>
          The first cohort is limited to 30 participants and opens in Q4 2026. We&apos;re currently
          in market sensing phase. Join the waitlist now to be among the first notified and to
          help shape the programme before it launches.
        </p>
        <p className={styles.disclaimer}>
          Programme fees and final details are subject to confirmation with programme partners.
          Joining the waitlist involves no financial commitment or obligation of any kind.
        </p>
      </div>
    </section>
  );
}
