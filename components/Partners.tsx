import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={styles.section} id="partners">
      <div className={styles.container}>
        <span className="section-tag-light">Programme Partners</span>
        <h2 className={styles.heading}>
          Backed by Singapore&apos;s <span className="grad-text">Startup Ecosystem</span>
        </h2>
        <p className={styles.subheading}>
          Kydon OPC graduates don&apos;t navigate the startup ecosystem alone. We&apos;ve partnered
          with accredited institutions to give you the support, mentorship, and grant facilitation
          you need to launch with confidence.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img
                src="https://spazeventures.com/wp-content/uploads/2023/04/cropped-spaze-icon-270x270.png"
                alt="Spaze Ventures logo"
                className={styles.logo}
              />
              <div className={styles.cardMeta}>
                <h3 className={styles.partnerName}>Spaze Ventures</h3>
                <span className={styles.badge}>Accredited Mentor Partner — Enterprise Singapore</span>
              </div>
            </div>
            <p className={styles.description}>
              Spaze Ventures is an Enterprise Singapore-appointed Accredited Mentor Partner (AMP)
              with a track record of incubating and accelerating more than 100 early-stage technology
              startups across Southeast Asia. As Kydon&apos;s grant facilitation partner, Spaze Ventures
              supports qualifying OPC graduates through the Startup SG Founder grant process —
              providing mentorship, application guidance, and incubation support to help you access
              up to $50,000 in startup capital from Enterprise Singapore.
            </p>
            <a
              href="https://spazeventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Learn more about Spaze Ventures →
            </a>
          </div>
        </div>

        <div className={styles.disclaimer}>
          The Startup SG Founder grant is administered by Enterprise Singapore. Grant approval is
          subject to ESG&apos;s standard eligibility criteria. Spaze Ventures provides mentorship
          and application support as an appointed Accredited Mentor Partner.
        </div>
      </div>
    </section>
  );
}
