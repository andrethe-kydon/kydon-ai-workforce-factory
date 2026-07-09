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
  { icon: "⚡", title: "Compressed Team Economics", body: "Every hour you spend on administrative work is an hour taken from your core expertise. AI handles the forms and the formatting — you focus on the thinking and the relationships." },
  { icon: "🏗️", title: "The Rise of AI Operators", body: "Fluency in AI is the new professional baseline. Those who can synthesize, narrate, and direct AI systems will command the premium that purely technical or purely human roles no longer can." },
  { icon: "🇸🇬", title: "Singapore NAS 2.0 Mandate", body: "The National AI Strategy 2.0 calls for 15,000 new AI practitioners, yet no structured income pathway exists." },
  { icon: "📈", title: "The OPC as the New Unit", body: "One Person Companies, AI-augmented, are the most resilient economic production unit of our era." },
];

const rewire = [
  { num: "01", term: "Recognize", text: "Accept the AI reality without fear" },
  { num: "02", term: "Engage", text: "Actively work with new tools, not around them" },
  { num: "03", term: "Weaken", text: "Consciously drop legacy workflows that no longer serve you" },
  { num: "04", term: "Embed", text: "Integrate AI into your daily professional identity" },
];

export function Problem() {
  return (
    <section className={styles.lightSection} id="problem">
      <div className={styles.container}>
        <span className="section-tag-light">The Opportunity</span>
        <h2 className={styles.headingLight}>
          Stop Being the Processor.<br />
          <span className="grad-text">Start Being the Strategist.</span>
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
              AI is not coming for your career. It is coming for the parts of your
              job that should have been automated years ago — the admin, the
              reporting, the repetitive. What it cannot replace is your contextual
              judgment, your empathy, and your ability to turn ideas into outcomes.
            </p>
            <p className={styles.probBody}>
              The professionals who thrive will be <strong>AI-bilingual</strong>:
              fluent enough to direct AI as an extended brain, sharp enough to
              provide the human premium it cannot replicate. That is not a distant
              skill. It is something you can build deliberately, starting now.
            </p>
            <div className={styles.rewireRow}>
              {rewire.map((r) => (
                <div key={r.num} className={styles.rewireStep}>
                  <div className={styles.rewireHead}>
                    <span className={styles.rewireNum}>{r.num}</span>
                    {r.term}
                  </div>
                  <p className={styles.rewireText}>{r.text}</p>
                </div>
              ))}
            </div>
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
/* SOLUTION — preserved but not rendered. Removed from the page as redundant with
   ProgrammeTimeline ("Five Months of Training. Two Ways Forward."). To restore:
   uncomment this block, delete the stub below, and re-add <Solution /> (plus its
   import) in app/page.tsx.

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
    body: "On graduation, choose the path that fits your ambition: launch your own venture, or step into the market as a qualified AI specialist. Either way, Kydon's guidance continues.",
    points: ["Entrepreneurship Track: launch your own OPC", "AI Operator Track: a qualified AI specialist", "Ongoing Kydon mentorship on both tracks", "Access to Kydon's ecosystem and network"],
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
*/

// Stub kept so the named export still resolves; renders nothing.
export function Solution() {
  return null;
}

/* ─────────────────────────────────────────
   FOR INDIVIDUALS
───────────────────────────────────────── */
const steps = [
  { num: "01", title: "Apply & Get Selected", body: "We select professionals from any domain — marketing, finance, HR, operations, healthcare. Your existing expertise is the asset. The programme teaches you to amplify it with agentic AI.", grant: null },
  { num: "02", title: "Train Full-Time: 5 Months", body: "Five months of full-time training across 8 modules and 580.5 hours, delivered jointly with Singapore Polytechnic. You do not just learn AI — you build with it. Every module produces a real deliverable for your own OPC.", grant: null },
  { num: "03", title: "Graduate & Choose Your Track", body: "Earn 8 Certificates of Completion and step into the future you trained for. Launch your own AI-powered One Person Company on the Entrepreneurship Track, or enter the market as a qualified AI specialist on the AI Operator Track.", grant: null },
  { num: "04", title: "Grow with Kydon's Ecosystem", body: "Whichever path you take, Kydon's network and mentorship remain available — connecting you to fellow graduates, advisors, and opportunities that keep compounding as your OPC grows.", grant: null },
];

const outcomes = [
  { num: "Your Domain + AI", body: "You bring the professional expertise. We teach you to direct AI as your extended brain — so your contextual judgment and human insight do the work that no model can replicate.", dark: true },
  { num: "8 Modules", body: "580.5 hours of hands-on training, earning 8 Certificates of Completion, one per module.", dark: false },
  { num: "Agentic AI Certified", body: "Graduate with 8 Certificates of Completion issued by Singapore Polytechnic — one per module — upon successful completion of the SCTP Intelligent Data-Driven Digitalisation programme. Subject to final programme confirmation.", dark: true },
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
