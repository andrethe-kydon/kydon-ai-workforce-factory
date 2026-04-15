import styles from "./Sections.module.css";

/* ─────────────────────────────────────────
   TRUST BAR
───────────────────────────────────────── */
const trustNames = [
  "Korn Ferry",
  "ResMed",
  "Australian Volunteers",
  "UWC South East Asia",
];

export function TrustBar() {
  return (
    <div className={styles.tbar}>
      <div className={styles.tbarInner}>
        <span className={styles.tbarLabel}>Kydon is trusted by</span>
        <span className={styles.tbarLine} />
        <div className={styles.tbarChips}>
          {trustNames.map((n) => (
            <span key={n} className={styles.tbarChip}>{n}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PROBLEM
───────────────────────────────────────── */
const shifts = [
  { icon: "⚡", title: "Compressed Team Economics", body: "AI enables one person to produce what a team of 5 once could — reshaping firm-size economics permanently." },
  { icon: "🏗️", title: "The Rise of AI Operators", body: "Competitive SMEs are shifting to agile AI Operators contracted for outcomes, not hours." },
  { icon: "🇸🇬", title: "Singapore NAS 2.0 Mandate", body: "The National AI Strategy 2.0 calls for 15,000 new AI practitioners — yet no structured income pathway exists." },
  { icon: "📈", title: "The OPC as the New Unit", body: "One Person Companies, AI-augmented, are the most resilient economic production unit of our era." },
];

export function Problem() {
  return (
    <section className={styles.lightSection} id="problem">
      <div className={styles.container}>
        <span className="section-tag-light">The Opportunity</span>
        <h2 className={styles.headingLight}>
          The Employment Contract Is{" "}
          <span className="grad-text">Changing.</span>
        </h2>
        <div className={styles.probGrid}>
          <div>
            <div className={styles.probStat}>
              <div className={styles.probNum}>73%</div>
              <p className={styles.probDesc}>of Singapore workers fear AI will significantly affect their roles within a decade.</p>
            </div>
            <div className={styles.probStat}>
              <div className={styles.probNum}>1 in 3</div>
              <p className={styles.probDesc}>mid-career professionals lack a credible pathway into AI-native, income-generating work.</p>
            </div>
            <p className={styles.probBody}>
              The old playbook — degree, company, salary, repeat — was built for a world being rapidly rewritten.{" "}
              <strong>The question is no longer "will AI affect me?" — it's "will I use AI, or be replaced by someone who does?"</strong>
            </p>
          </div>
          <div>
            <p className={styles.shiftHeading}>What's shifting right now →</p>
            <div className={styles.shiftList}>
              {shifts.map((s) => (
                <div key={s.title} className={styles.shiftItem}>
                  <div className={styles.shiftIcon}>{s.icon}</div>
                  <div>
                    <h4 className={styles.shiftTitle}>{s.title}</h4>
                    <p className={styles.shiftBody}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SOLUTION
───────────────────────────────────────── */
const stages = [
  {
    num: "01",
    mono: "Months 1–3 · 12-Week Bootcamp",
    title: "Train",
    body: "12-week intensive bootcamp. You validate a real micro-niche, build AI workflows, and deliver a market-tested business plan. Every week produces a real business deliverable.",
    points: ["12 weeks of structured curriculum", "AI skills, niche validation, MVP build", "18+ real business deliverables", "WSG CCP salary support active"],
    badge: "WSG CCP — Months 1 to 3",
  },
  {
    num: "02",
    mono: "Months 4–5 · Pre-Launch Runway",
    title: "Deploy",
    body: "Self-directed pre-launch runway with your dedicated Kydon advisor. Finalise your tech stack, build your client pipeline, complete your business plan and prepare your ESG grant application.",
    points: ["Dedicated Kydon advisor assigned", "Client pipeline — target 1 LOI minimum", "Business plan and pitch deck completed", "ESG grant draft submitted for review"],
    badge: "Pre-Launch — Months 4 to 5",
  },
  {
    num: "03",
    mono: "Month 6 · D-Day Launch",
    title: "Scale",
    body: "Register your OPC with ACRA, complete your D-Day simulation before a Kydon advisory panel, submit your ESG grant application, and launch your certified AI-powered business.",
    points: ["ACRA OPC registration", "D-Day simulation and certification", "ESG Startup SG grant application submitted", "Kydon Marketplace onboarding begins"],
    badge: "D-Day Certification — Month 6",
  },
];

export function Solution() {
  return (
    <section className={styles.darkSection} id="solution">
      <div className={styles.container}>
        <span className="section-tag">The Factory System</span>
        <h2 className={styles.headingDark}>
          Three Stages. One Outcome:{" "}
          <span className="grad-text">Your OPC.</span>
        </h2>
        <p className={styles.lead}>
          Not a course. A venture-build system — with government-backed salary support,
          live enterprise clients, and Kydon's AI University Platform as your operating system.
        </p>
        <div className={styles.stages}>
          {stages.map((s) => (
            <div key={s.num} className={styles.stage}>
              <div className={styles.stageNum}>{s.num}</div>
              <div className={styles.stageMono}>{s.mono}</div>
              <h3 className={styles.stageTitle}>{s.title}</h3>
              <p className={styles.stageBody}>{s.body}</p>
              <ul className={styles.stagePts}>
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {s.badge && <div className={styles.stageBadge}>{s.badge}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOR INDIVIDUALS
───────────────────────────────────────── */
const steps = [
  { num: "01", title: "Apply & Get Selected", body: "We select mid-career professionals with entrepreneurial intent across any domain. Your domain expertise is the asset. We teach the AI layer on top of it.", grant: null },
  { num: "02", title: "Get Paid to Train (6 Months)", body: "Join Kydon as a salaried AI Operator. Up to 90% of your salary is subsidized by WSG CCP. Train, build, and earn — simultaneously.", grant: "WSG CCP — Up to 90% Salary Support" },
  { num: "03", title: "Launch Your One Person Company", body: "Register your OPC with Kydon's legal templates. Apply for $50K startup capital through EnterpriseSG — with Kydon's full application support.", grant: "EnterpriseSG — $50,000 Startup Capital" },
  { num: "04", title: "Scale with Real Clients", body: "Access Kydon's enterprise client network from day one. Our AI Marketplace matches your niche to live SME and corporate demand — no cold-selling from zero.", grant: null },
];

const outcomes = [
  { num: "$8K+", body: "Target monthly revenue for a fully operational AI-service OPC within 12 months of launch.", dark: false },
  { num: "3–5×", body: "Effective income multiplier when AI handles 70%+ of delivery. Charge for outcomes, not hours.", dark: false },
  { num: "Skill Sovereignty", body: "Your expertise and client base belong to you. No employer can restructure you out of existence.", dark: true },
];

export function ForIndividuals() {
  return (
    <section className={styles.lightSection} id="for-individuals">
      <div className={styles.container}>
        <span className="section-tag-light">For Individuals</span>
        <h2 className={styles.headingLight}>
          Your AI Career.{" "}
          <span className="grad-text">Structured,</span> Not Hoped For.
        </h2>
        <div className={styles.indGrid}>
          {/* Journey steps */}
          <div className={styles.journey}>
            {steps.map((s, i) => (
              <div key={s.num} className={styles.jStep}>
                <div className={styles.jDotWrap}>
                  <div className={styles.jDot}>{s.num}</div>
                  {i < steps.length - 1 && <div className={styles.jLine} />}
                </div>
                <div className={styles.jContent}>
                  <h4 className={styles.jTitle}>{s.title}</h4>
                  <p className={styles.jBody}>{s.body}</p>
                  {s.grant && <span className={styles.jGrant}>{s.grant}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Outcomes */}
          <div>
            <p className={styles.shiftHeading}>What success looks like →</p>
            <div className={styles.ocStack}>
              {outcomes.map((o) => (
                <div key={o.num} className={`${styles.oc} ${o.dark ? styles.ocDark : ""}`}>
                  <div className={o.dark ? styles.ocTitleDark : styles.ocNum}>{o.num}</div>
                  <p className={o.dark ? styles.ocBodyDark : styles.ocBody}>{o.body}</p>
                </div>
              ))}
              <a href="#final-cta" className="btn-grad" style={{ textAlign: "center" }}>
                Apply for Cohort 1 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOR ENTERPRISES
───────────────────────────────────────── */
const benefits = [
  { icon: "🎯", title: "Niche-Matched Operators", body: "Our AI Marketplace matches your use case to OPCs with exact domain expertise — F&B, legal, HR tech, and more." },
  { icon: "⚡", title: "Outcome-Based Pricing", body: "You pay for the workflow and the result — not the hours spent building it." },
  { icon: "✅", title: "Kydon D-Day Certified", body: "Every OPC passes Kydon's Checker system and live client simulations before they reach you." },
  { icon: "📈", title: "Scale Instantly", body: "Engage one OPC for a pilot. Scale to ten for a division-wide rollout. No headcount overhead." },
  { icon: "🏛️", title: "NAS 2.0 & IMDA Aligned", body: "Supports your NAS 2.0 contribution and may qualify for IMDA co-funding under AI Accelerate." },
];

export function ForEnterprises() {
  return (
    <section className={styles.darkSection2} id="for-enterprises">
      <div className={styles.container}>
        <div className={styles.entGrid}>
          <div>
            <span className="section-tag">For Enterprises & SMEs</span>
            <h2 className={styles.headingDark}>
              AI Talent That{" "}
              <span className="grad-text">Delivers,</span>
              <br />Not Just Advises.
            </h2>
            <p className={styles.entLead}>
              Stop paying consultancy rates for workshops that produce slide decks.{" "}
              <strong>Kydon-certified OPCs are niche-specialized AI operators</strong>{" "}
              who build real workflows and generate measurable output — at a fraction of the cost.
            </p>
            <a href="#final-cta" className="btn-outline-o">
              Partner with the Factory →
            </a>
          </div>
          <div className={styles.entBenefits}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.eb}>
                <div className={styles.ebIcon}>{b.icon}</div>
                <div>
                  <h4 className={styles.ebTitle}>{b.title}</h4>
                  <p className={styles.ebBody}>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TRUST SECTION
───────────────────────────────────────── */
const grantChips = [
  "Kydon Group — Programme Operator",
  "WSG Career Conversion Programme",
  "EnterpriseSG — Startup SG Founder",
  "IMDA Spark Accreditation",
  "National AI Strategy 2.0",
];

export function TrustSection() {
  return (
    <section className={styles.darkSection} id="trust">
      <div className={styles.container} style={{ textAlign: "center" }}>
        <span className="section-tag" style={{ justifyContent: "center" }}>
          Built on Singapore&apos;s Infrastructure
        </span>
        <h2 className={styles.headingDark} style={{ fontSize: "clamp(28px,4vw,48px)" }}>
          Grants. Regulators.{" "}
          <span className="grad-text">Real Institutional Partners.</span>
        </h2>
        <div className={styles.grantChips}>
          {grantChips.map((c) => (
            <div key={c} className={styles.grantChip}>{c}</div>
          ))}
        </div>
        <div className={styles.trustQuote}>
          <blockquote className={styles.quoteText}>
            &ldquo;Singapore&apos;s AI future won&apos;t be built by big tech alone — it will be
            built by empowered individuals operating as agile, AI-native micro-enterprises.&rdquo;
          </blockquote>
          <cite className={styles.quoteCite}>
            Kydon Group · AI Workforce Factory Strategic Vision 2025
          </cite>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAQ
───────────────────────────────────────── */
export { FAQ } from "./FAQ";
