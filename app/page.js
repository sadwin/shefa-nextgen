"use client";

const navItems = [
  ["Product", "#product"],
  ["How it works", "#how"],
  ["Results", "#results"],
  ["Pricing", "#pricing"],
];

function Metatron({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.35" opacity=".95">
        <circle cx="50" cy="50" r="43" />
        <circle cx="50" cy="50" r="29" />
        <circle cx="50" cy="50" r="15" />
        <circle cx="50" cy="7" r="7" />
        <circle cx="87.24" cy="28.5" r="7" />
        <circle cx="87.24" cy="71.5" r="7" />
        <circle cx="50" cy="93" r="7" />
        <circle cx="12.76" cy="71.5" r="7" />
        <circle cx="12.76" cy="28.5" r="7" />
        <path d="M50 7L87.24 71.5L12.76 71.5L50 7Z" />
        <path d="M50 93L12.76 28.5L87.24 28.5L50 93Z" />
        <path d="M7 50H93M50 7V93" opacity=".55" />
        <path d="M19.6 19.6L80.4 80.4M80.4 19.6L19.6 80.4" opacity=".55" />
      </g>
      <circle cx="50" cy="50" r="3.2" fill="currentColor" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="logo">
      <div className="logo-mark">
        <Metatron size={31} />
      </div>
      <div>
        <div className="logo-name">SHEFA</div>
        <div className="logo-sub">NEXTGEN SYSTEMS</div>
      </div>
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <div className="dashboard-top">
        <div>
          <div className="dash-kicker">CUSTOMER ENGINE</div>
          <div className="dash-title">Amsterdam · Overview</div>
        </div>

        <div className="dash-live">
          <span />
          Live
        </div>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <span>Returning customers</span>
          <strong>68.4%</strong>
          <small>+12.8% this month</small>
        </div>
        <div className="metric-card">
          <span>Automated revenue</span>
          <strong>€48.2k</strong>
          <small>+21.4% this month</small>
        </div>
        <div className="metric-card">
          <span>Active campaigns</span>
          <strong>24</strong>
          <small>8 running today</small>
        </div>
      </div>

      <div className="dash-body">
        <div className="chart-card">
          <div className="chart-head">
            <span>Customer revenue</span>
            <span className="chart-period">Last 30 days</span>
          </div>

          <div className="chart">
            <div className="chart-grid" />
            <svg viewBox="0 0 640 230" preserveAspectRatio="none">
              <path
                d="M0 190 C55 184 70 171 110 176 C153 181 169 142 211 149 C251 156 271 111 309 124 C354 139 368 85 407 101 C446 118 474 68 509 82 C550 98 571 46 640 34"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                d="M0 190 C55 184 70 171 110 176 C153 181 169 142 211 149 C251 156 271 111 309 124 C354 139 368 85 407 101 C446 118 474 68 509 82 C550 98 571 46 640 34 V230 H0Z"
                fill="currentColor"
                opacity=".07"
              />
            </svg>
          </div>
        </div>

        <div className="activity-card">
          <div className="chart-head">
            <span>Latest activity</span>
            <span className="chart-period">Today</span>
          </div>

          <div className="activity-row">
            <div className="activity-avatar">A</div>
            <div>
              <b>Amsterdam Coffee Co.</b>
              <span>Campaign converted</span>
            </div>
            <strong>+€840</strong>
          </div>

          <div className="activity-row">
            <div className="activity-avatar">B</div>
            <div>
              <b>Bloom Studio</b>
              <span>Customer returned</span>
            </div>
            <strong>+€310</strong>
          </div>

          <div className="activity-row">
            <div className="activity-avatar">N</div>
            <div>
              <b>Northside Dental</b>
              <span>Automated follow-up</span>
            </div>
            <strong>+€185</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand-link" href="#">
            <Logo />
          </a>

          <nav className="desktop-nav">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#contact">
            Book a demo <Arrow />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-photo">
          <div className="office-window window-one" />
          <div className="office-window window-two" />
          <div className="office-person person-one" />
          <div className="office-person person-two" />
          <div className="office-person person-three" />
        </div>

        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              CUSTOMER GROWTH SYSTEMS · AMSTERDAM
            </div>

            <h1>
              Turn every customer
              <br />
              into a <em>returning</em> customer.
            </h1>

            <p className="hero-description">
              SHEFA connects customer data, automation and intelligent
              follow-ups into one growth system built for modern local
              businesses.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Build your growth system <Arrow />
              </a>
              <a className="button button-light" href="#product">
                See how it works
              </a>
            </div>

            <div className="hero-note">
              <Metatron size={20} />
              <span>
                One system. Every customer touchpoint.
              </span>
            </div>
          </div>
        </div>

        <div className="hero-bottom container">
          <div className="hero-proof">
            <strong>+21.4%</strong>
            <span>average revenue uplift</span>
          </div>
          <div className="hero-proof">
            <strong>68.4%</strong>
            <span>returning customer rate</span>
          </div>
          <div className="hero-proof hero-proof-last">
            <strong>24/7</strong>
            <span>automated customer engagement</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <span>Built for ambitious local businesses</span>
          <div className="trust-logos">
            <span>HORECA</span>
            <span>HEALTH</span>
            <span>BEAUTY</span>
            <span>RETAIL</span>
            <span>SERVICES</span>
          </div>
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="container">
          <div className="section-intro split-intro">
            <div>
              <div className="eyebrow dark-eyebrow">THE SYSTEM</div>
              <h2>
                Your business,
                <br />
                <em>one intelligent layer.</em>
              </h2>
            </div>

            <p>
              Stop stitching together disconnected tools. SHEFA gives your
              team one clear operating layer for acquisition, retention,
              communication and revenue.
            </p>
          </div>

          <Dashboard />
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="center-intro">
            <div className="eyebrow dark-eyebrow">DESIGNED AROUND YOU</div>
            <h2>
              One engine.
              <br />
              <em>Different businesses.</em>
            </h2>
          </div>

          <div className="category-grid">
            <div className="category-card category-large">
              <span className="category-number">01</span>
              <div>
                <h3>Hospitality</h3>
                <p>
                  Fill quieter days, increase repeat visits and automate
                  personalised guest communication.
                </p>
              </div>
              <Arrow />
            </div>

            <div className="category-card">
              <span className="category-number">02</span>
              <div>
                <h3>Health</h3>
                <p>
                  Turn one appointment into a long-term customer relationship.
                </p>
              </div>
              <Arrow />
            </div>

            <div className="category-card">
              <span className="category-number">03</span>
              <div>
                <h3>Beauty</h3>
                <p>
                  Automate rebooking and bring clients back at the right time.
                </p>
              </div>
              <Arrow />
            </div>

            <div className="category-card">
              <span className="category-number">04</span>
              <div>
                <h3>Retail</h3>
                <p>
                  Build customer journeys that increase frequency and basket
                  value.
                </p>
              </div>
              <Arrow />
            </div>
          </div>
        </div>
      </section>

      <section className="section how-section" id="how">
        <div className="container">
          <div className="section-intro split-intro">
            <div>
              <div className="eyebrow dark-eyebrow">HOW IT WORKS</div>
              <h2>
                From first visit
                <br />
                <em>to repeat habit.</em>
              </h2>
            </div>

            <p>
              SHEFA continuously learns what customers do and turns those
              signals into useful actions for your team.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-top">
                <span>01</span>
                <div className="step-line" />
              </div>
              <h3>Capture</h3>
              <p>
                Bring customer data and interactions into one clean customer
                profile.
              </p>
            </div>

            <div className="step">
              <div className="step-top">
                <span>02</span>
                <div className="step-line" />
              </div>
              <h3>Understand</h3>
              <p>
                See who is returning, who is drifting away and where revenue
                opportunities sit.
              </p>
            </div>

            <div className="step">
              <div className="step-top">
                <span>03</span>
                <div className="step-line" />
              </div>
              <h3>Automate</h3>
              <p>
                Trigger personalised messages and campaigns without manual
                follow-up.
              </p>
            </div>

            <div className="step">
              <div className="step-top">
                <span>04</span>
                <div className="step-line" />
              </div>
              <h3>Grow</h3>
              <p>
                Turn more first-time customers into repeat revenue and loyal
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card feature-dark">
              <div className="feature-icon">
                <Metatron size={30} />
              </div>
              <div className="feature-index">01</div>
              <h3>Customer intelligence</h3>
              <p>
                One living profile for every customer, with the signals your
                team actually needs.
              </p>
              <a href="#contact">
                Explore intelligence <Arrow />
              </a>
            </div>

            <div className="feature-card">
              <div className="feature-icon">↗</div>
              <div className="feature-index">02</div>
              <h3>Revenue automation</h3>
              <p>
                Build repeatable customer journeys that run automatically in
                the background.
              </p>
              <a href="#contact">
                Explore automation <Arrow />
              </a>
            </div>

            <div className="feature-card">
              <div className="feature-icon">◎</div>
              <div className="feature-index">03</div>
              <h3>Campaign control</h3>
              <p>
                Create, launch and measure campaigns without jumping between
                five different tools.
              </p>
              <a href="#contact">
                Explore campaigns <Arrow />
              </a>
            </div>

            <div className="feature-card">
              <div className="feature-icon">◌</div>
              <div className="feature-index">04</div>
              <h3>Smart follow-up</h3>
              <p>
                Reach people when the next interaction is most likely to
                matter.
              </p>
              <a href="#contact">
                Explore follow-up <Arrow />
              </a>
            </div>

            <div className="feature-card">
              <div className="feature-icon">▱</div>
              <div className="feature-index">05</div>
              <h3>Clear reporting</h3>
              <p>
                Understand what actually creates revenue instead of vanity
                metrics.
              </p>
              <a href="#contact">
                Explore reporting <Arrow />
              </a>
            </div>

            <div className="feature-card">
              <div className="feature-icon">+</div>
              <div className="feature-index">06</div>
              <h3>Built to scale</h3>
              <p>
                Start simple and add more customer journeys as your business
                grows.
              </p>
              <a href="#contact">
                Explore platform <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-system-section">
        <div className="container dark-system-inner">
          <div className="system-copy">
            <div className="eyebrow light-eyebrow">THE SHEFA DIFFERENCE</div>
            <h2>
              Less software.
              <br />
              <em>More system.</em>
            </h2>
            <p>
              Your team should not need a manual to understand your customer
              data. SHEFA brings the important pieces together and makes the
              next action obvious.
            </p>

            <a className="button button-gold" href="#contact">
              Talk to SHEFA <Arrow />
            </a>
          </div>

          <div className="system-visual">
            <div className="system-orbit orbit-one" />
            <div className="system-orbit orbit-two" />
            <div className="system-orbit orbit-three" />
            <div className="system-center">
              <Metatron size={92} />
              <span>SHEFA</span>
            </div>

            <div className="orbit-node node-one">CUSTOMER</div>
            <div className="orbit-node node-two">DATA</div>
            <div className="orbit-node node-three">AUTOMATION</div>
            <div className="orbit-node node-four">REVENUE</div>
          </div>
        </div>
      </section>

      <section className="section results-section" id="results">
        <div className="container">
          <div className="center-intro">
            <div className="eyebrow dark-eyebrow">REAL RESULTS</div>
            <h2>
              Growth you can
              <br />
              <em>actually see.</em>
            </h2>
          </div>

          <div className="results-grid">
            <div className="result-card">
              <strong>+21.4%</strong>
              <span>average revenue uplift</span>
              <small>Across automated customer journeys</small>
            </div>

            <div className="result-card result-featured">
              <strong>68.4%</strong>
              <span>returning customers</span>
              <small>Measured across active customer cohorts</small>
            </div>

            <div className="result-card">
              <strong>3.2×</strong>
              <span>campaign ROI</span>
              <small>Compared with manual follow-up</small>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container cta-inner">
          <div className="cta-mark">
            <Metatron size={120} />
          </div>

          <div>
            <div className="eyebrow light-eyebrow">READY WHEN YOU ARE</div>
            <h2>
              Build the system
              <br />
              your customers <em>remember.</em>
            </h2>
            <p>
              Tell us about your business and we’ll show you where SHEFA can
              create the biggest growth opportunity.
            </p>
          </div>

          <a className="button button-gold" href="mailto:hello@shefa-nextgen.com">
            Start a conversation <Arrow />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo />

          <div className="footer-links">
            <a href="#product">Product</a>
            <a href="#how">How it works</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} SHEFA NextGen Systems
          </div>
        </div>
      </footer>
    </main>
  );
}