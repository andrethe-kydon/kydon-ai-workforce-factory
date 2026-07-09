import HubSpotForm from "./HubSpotForm";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="final-cta">
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Apply for{" "}
          <span className="grad-text">Cohort 1.</span>
        </h2>
        <p className={styles.sub}>
          Applications for the Kydon AI Workforce Factory are open. Secure your place in
          Singapore&apos;s most intensive agentic AI programme — spaces for Cohort 1 are
          limited to 30 participants.
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
          The first cohort is limited to 30 participants and begins in September 2026. Apply
          early — registration closes on 16 August 2026 or once all places are filled.
        </p>
        <p className={styles.disclaimer}>
          Fees shown are inclusive of 9% GST. Subsidy eligibility is subject to the prevailing
          SkillsFuture Singapore criteria.
        </p>
      </div>
    </section>
  );
}
