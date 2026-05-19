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

        <div className={styles.brochure}>
          <p className={styles.brochureText}>
            Want the full picture? Download our programme brochure.
          </p>
          <a
            href="/Kydon_OPC_Launchpad_Brochure.pdf"
            download="Kydon_OPC_Launchpad_Brochure.pdf"
            className="btn-outline-o"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Programme Brochure (PDF)
          </a>
        </div>

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
