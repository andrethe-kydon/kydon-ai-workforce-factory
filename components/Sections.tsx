import styles from "./Sections.module.css";

/* ─────────────────────────────────────────
   TRUST BAR
───────────────────────────────────────── */
const trustNames = [
  "Korn Ferry",
  "ResMed",
  "Australian Volunteers",
  "UWC South East Asia",
  "Spaze Ventures — ESG Accredited Mentor Partner",
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
  { icon: "⚡", title: "Compressed Team Economics", body: "AI enables one person to produce what a team of 5 once could, reshaping firm-size economics permanently." },
  { icon: "🏗️", title: "The Rise of AI Operators", body: "Competitive SMEs are shifting to agile AI Operators contracted for outcomes, not hours." },
  { icon: "🇸🇬", title: "Singapore NAS 2.0 Mandate", body: "The National AI Strategy 2.0 calls for 15,000 new AI practitioners, yet no structured income pathway exists." },
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
              The old playbook of degree, company, salary, repeat was built for a world being rapidly rewritten.{" "}
              <strong>The question is no longer whether AI will affect you. It is whether you will use AI, or be replaced by someone who does.</strong>
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
    mono: "Months 1–5 · 8 Modules",
    title: "Train",
    body: "Five months of full-time training across 8 modules and 580.5 hours, delivered by Kydon in collaboration with Singapore Polytechnic. Classroom learning combined with asynchronous e-learning.",
    points: ["8 modules across 580.5 hours", "Agentic AI, low-code build, and data foundations", "Full-time classroom and asynchronous e-learning", "8 Certificates of Completion on graduation"],
    badge: null,
  },
  {
    num: "02",
    mono: "Upon Graduation · Choose Your Track",
    title: "Choose",
    body: "On graduation, choose the path that fits your ambition: launch your own venture, or operate under Kydon's structure. Either way, Kydon's guidance continues.",
    points: ["Entrepreneurship Track: self-employed", "AI Operator Track: employed for 6 months", "Ongoing Kydon mentorship on both tracks", "Access to Kydon's ecosystem and network"],
    badge: null,
  },
  {
    num: "03",
    mono: "Post-Graduation · Launch & Operate",
    title: "Launch",
    body: "Build a revenue-generating One Person Company, or establish yourself as a professional AI Operator delivering self-sourced projects under Kydon's guidance.",
    points: ["Self-source and operate real projects", "Kydon advisory and performance support", "Goal: a revenue-generating OPC", "Or: a professional AI Operator career"],
    badge: null,
  },
];

export function Solution() {
  return (
    <section className={styles.darkSection} id="solution">
      <div className={styles.container}>
        <span className="section-tag">The Factory System</span>
        <h2 className={styles.headingDark}>
          Three Stages.{" "}
          <span className="grad-text">Two Ways Forward.</span>
        </h2>
        <p className={styles.lead}>
          More than a course. A venture-build system: five months of hands-on
          training delivered in collaboration with Singapore Polytechnic, then two
          post-graduation pathways backed by Kydon's mentorship and ecosystem.
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
  { num: "01", title: "Apply & Get Selected", body: "We select professionals with entrepreneurial intent across any domain. Marketing, finance, HR, operations, healthcare. Your domain expertise is the asset. We teach you the agentic AI layer on top of it.", grant: null },
  { num: "02", title: "Train Full-Time: 5 Months", body: "Five months of full-time training across 8 modules and 580.5 hours, delivered in collaboration with Singapore Polytechnic. Build real agentic workflows, low-code solutions, and data foundations. Every module produces something real.", grant: null },
  { num: "03", title: "Graduate & Choose Your Track", body: "Earn 8 Certificates of Completion, then choose your path: launch your own OPC on the Entrepreneurship Track, or join Kydon as an employed AI Operator for 6 months on the AI Operator Track.", grant: null },
  { num: "04", title: "Grow with Kydon's Ecosystem", body: "Whichever track you choose, Kydon's mentorship continues, with access to our enterprise client marketplace, advisory support, and a network of fellow AI operators and OPC founders.", grant: null },
];

const outcomes = [
  { num: "$8K+", body: "Target monthly revenue for a fully operational AI-service OPC within 12 months of launch.", dark: false },
  { num: "8 Modules", body: "580.5 hours of hands-on training, earning 8 Certificates of Completion, one per module.", dark: false },
  { num: "Agentic AI Certified", body: "Graduate with Kydon's Certificates of Completion, subject to final programme confirmation with our programme partners.", dark: true },
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
                Join the Waitlist →
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
  { icon: "🎯", title: "Niche-Matched Operators", body: "Our AI Marketplace matches your use case to OPCs with exact domain expertise across F&B, legal, HR tech, and more." },
  { icon: "⚡", title: "Outcome-Based Pricing", body: "You pay for the workflow and the result, not the hours spent building it." },
  { icon: "✅", title: "Kydon D-Day Certified", body: "Every OPC passes Kydon's Checker system and live client simulations before they reach you." },
  { icon: "📈", title: "Scale Instantly", body: "Engage one OPC for a pilot. Scale to ten for a division-wide rollout. No headcount overhead." },
  { icon: "🏛️", title: "Singapore AI Ecosystem", body: "Kydon graduates are trained to the standard Singapore enterprises need. Our OPCs are vetted, niche-specialised, and ready to deliver from day one." },
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
              who build real workflows and generate measurable output at a fraction of the cost.
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
  "Kydon Group, Programme Operator",
  "100K+ Learners on Kydon Platform",
  "Singapore's #1 AI Job Density Globally",
  "Agentic AI Skills, Fastest Growing Cluster",
];

export function TrustSection() {
  return (
    <section className={styles.darkSection} id="trust">
      <div className={styles.container} style={{ textAlign: "center" }}>
        <span className="section-tag" style={{ justifyContent: "center" }}>
          Built for Singapore&apos;s AI Economy
        </span>
        <h2 className={styles.headingDark} style={{ fontSize: "clamp(28px,4vw,48px)" }}>
          Real Training. Real Skills.{" "}
          <span className="grad-text">Real Outcomes.</span>
        </h2>
        <div className={styles.grantChips}>
          {grantChips.map((c) => (
            <div key={c} className={styles.grantChip}>{c}</div>
          ))}
        </div>
        <div className={styles.trustQuote}>
          <blockquote className={styles.quoteText}>
            &ldquo;Singapore leads the world in AI job density. The professionals who can design
            and deploy agentic systems are the most valuable in the market right now. We train them.&rdquo;
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
