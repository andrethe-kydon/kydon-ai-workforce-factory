"use client";

import { useState } from "react";
import styles from "./CourseDetails.module.css";

const tabs = [
  "About Course",
  "Entry Requirements",
  "Course Schedule",
  "Course Fees",
] as const;

const aboutFields: { label: string; value: string }[] = [
  {
    label: "Official Course Title",
    value:
      "[SP-SCTP-IDDD] Intelligent Data-Driven Digitalisation (Classroom and Asynchronous e-learning) (Full-Time) (TA-eligible)",
  },
  { label: "Intake Number", value: "SP-SCTP-IDDD-260004" },
  { label: "TGS Code", value: "To be confirmed" },
  { label: "Total Training Hours", value: "580.5 hours" },
  { label: "Course Duration", value: "6 Sep 2026 to 4 Mar 2027" },
  { label: "Registration Period", value: "24 May 2026 to 16 Aug 2026" },
  { label: "Venue", value: "Singapore Polytechnic" },
  {
    label: "Delivery Mode",
    value: "Full-time classroom and asynchronous e-learning",
  },
  { label: "Awarded", value: "8 Certificates of Completion (one per module)" },
  { label: "Programme Partner", value: "Kydon Group (OPC Launchpad)" },
];

const entryRequirements = [
  "Minimum qualification: Higher Nitec or equivalent",
  "Basic English proficiency",
  "Foundational numeracy skills",
  "Comfortable with digital tools such as Microsoft Excel",
  "Bring your own laptop for use throughout the programme",
  "Prior programming or data analysis experience is advantageous but not required",
];

const feeRows: { eligibility: string; fee: string }[] = [
  { eligibility: "Singapore Citizens aged 40 and above", fee: "S$2,844.80" },
  { eligibility: "Singapore Citizens aged below 40", fee: "S$7,324.80" },
  { eligibility: "Singapore Permanent Residents", fee: "S$7,324.80" },
  { eligibility: "LTVP+ Holders", fee: "S$7,324.80" },
  { eligibility: "Unsubsidised (Full Course Fee)", fee: "S$24,416.00" },
];

// Default to the most-subsidised tier (Singapore Citizens aged 40 and above).
const DEFAULT_FEE_INDEX = 0;

const paymentMethods = [
  "SkillsFuture Credits",
  "PSEA",
  "Credit / Debit Card",
  "PayNow",
  "Bank Transfer",
  "Telegraphic Transfer",
];

const refundRows = [
  { window: "≥14 days before start date", outcome: "100% refund" },
  { window: "<14 days before start date", outcome: "50% refund" },
  { window: "On or after start date", outcome: "No refund" },
];

function TickIcon() {
  return (
    <svg
      className={styles.tick}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CourseDetails() {
  const [active, setActive] = useState(0);
  const [selectedFee, setSelectedFee] = useState(DEFAULT_FEE_INDEX);

  return (
    <section className={styles.section} id="course-details">
      <div className={styles.container}>
        {/* Header */}
        <span className="section-tag">Course Information</span>
        <h2 className={styles.heading}>
          Everything You Need to <span className="grad-text">Know</span>
        </h2>
        <p className={styles.subheading}>
          Official course details, entry requirements, schedule and fees for the
          SCTP Intelligent Data-Driven Digitalisation programme.
        </p>

        {/* Tab navigation */}
        <div className={styles.tabBar} role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === i}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        <div className={styles.panel}>
          {/* TAB 1 — About Course */}
          {active === 0 && (
            <div className={styles.tabContent}>
              <dl className={styles.infoGrid}>
                {aboutFields.map((f) => (
                  <div key={f.label} className={styles.infoRow}>
                    <dt className={styles.infoLabel}>{f.label}</dt>
                    <dd className={styles.infoValue}>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.note}>
                This course is offered under the SkillsFuture Career Transition
                Programme (SCTP), administered by SkillsFuture Singapore.
                Programme details are subject to final confirmation.
              </p>
            </div>
          )}

          {/* TAB 2 — Entry Requirements */}
          {active === 1 && (
            <div className={styles.tabContent}>
              <ul className={styles.checklist}>
                {entryRequirements.map((req) => (
                  <li key={req} className={styles.checkItem}>
                    <TickIcon />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.note}>
                Applicants who do not meet the minimum qualification may still be
                considered on a case-by-case basis. If you are unsure whether you
                qualify, join the waitlist and our team will be in touch.
              </p>
              <a href="#final-cta" className="btn-grad">Join the Waitlist</a>
            </div>
          )}

          {/* TAB 3 — Course Schedule */}
          {active === 2 && (
            <div className={styles.tabContent}>
              <div className={styles.placeholder}>
                <h3 className={styles.placeholderTitle}>
                  Schedule to Be Confirmed
                </h3>
                <p className={styles.placeholderBody}>
                  The detailed course timetable for Cohort 1 (September 2026)
                  will be published ahead of the programme launch. Join the
                  waitlist to be among the first notified.
                </p>
                <a href="#final-cta" className="btn-grad">Join the Waitlist</a>
              </div>
            </div>
          )}

          {/* TAB 4 — Course Fees */}
          {active === 3 && (
            <div className={styles.tabContent}>
              {/* Hero stat callouts */}
              <div className={styles.feeHero}>
                <div className={styles.feeStat}>
                  <span className={styles.feeStatValue}>S$24,416.00</span>
                  <span className={styles.feeStatLabel}>
                    Full course fee before subsidy
                  </span>
                </div>
                <div className={`${styles.feeStat} ${styles.feeStatPrimary}`}>
                  <span className={`${styles.feeStatValue} grad-text`}>
                    {feeRows[selectedFee].fee}
                  </span>
                  <span className={styles.feeStatLabel}>
                    {feeRows[selectedFee].eligibility}
                  </span>
                </div>
              </div>

              {/* Fee table — select your eligibility */}
              <span className={styles.blockLabel}>
                Select your eligibility to see your fee
              </span>
              <div className={styles.tableWrap}>
                <table className={styles.feeTable}>
                  <thead>
                    <tr>
                      <th>Eligibility</th>
                      <th>Total Course Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row, i) => (
                      <tr
                        key={row.eligibility}
                        className={`${styles.feeRow} ${
                          selectedFee === i ? styles.rowSelected : ""
                        }`}
                        onClick={() => setSelectedFee(i)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedFee(i);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-pressed={selectedFee === i}
                      >
                        <td>{row.eligibility}</td>
                        <td className={styles.feeCell}>{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                All fees are inclusive of 9% GST and exclusive of supplementary
                fees. Subsidy eligibility follows the prevailing SkillsFuture
                Singapore criteria. Individual module fees are available upon
                request.
              </p>

              {/* Payment methods */}
              <div className={styles.payBlock}>
                <span className={styles.blockLabel}>Payment Methods</span>
                <div className={styles.chips}>
                  {paymentMethods.map((m) => (
                    <span key={m} className={styles.chip}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* SkillsFuture Credit callout */}
              <div className={styles.creditCallout}>
                SkillsFuture Credit eligible for Singaporeans aged 25 and above.
                Credits must be applied within 60 days of the course start date.
              </div>

              {/* Refund policy */}
              <div className={styles.refundBlock}>
                <span className={styles.blockLabel}>Refund Policy</span>
                <ul className={styles.refundList}>
                  {refundRows.map((r) => (
                    <li key={r.window} className={styles.refundRow}>
                      <span className={styles.refundWindow}>{r.window}</span>
                      <span className={styles.refundArrow} aria-hidden="true">
                        →
                      </span>
                      <span className={styles.refundOutcome}>{r.outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
