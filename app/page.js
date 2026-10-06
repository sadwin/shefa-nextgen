const industries = [
  {
    no: "01",
    title: "Hospitality",
    text: "Turn first visits into repeat bookings, reviews and direct relationships.",
  },
  {
    no: "02",
    title: "Health",
    text: "Keep patients engaged with intelligent follow-ups and retention journeys.",
  },
  {
    no: "03",
    title: "Beauty",
    text: "Bring clients back automatically with personalised campaigns and reminders.",
  },
  {
    no: "04",
    title: "Retail",
    text: "Build customer relationships beyond the transaction and increase lifetime value.",
  },
];

const steps = [
  {
    number: "01",
    title: "Capture",
    text: "Every visit, message, review and interaction becomes part of one customer profile.",
  },
  {
    number: "02",
    title: "Understand",
    text: "SHEFA identifies behaviour, intent and opportunities hidden inside your customer data.",
  },
  {
    number: "03",
    title: "Activate",
    text: "Launch the right WhatsApp, SMS, review and marketing action at the right moment.",
  },
  {
    number: "04",
    title: "Grow",
    text: "Customers return more often, spend more and become advocates for your business.",
  },
];

function Metatron() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.7">
        <circle cx="100" cy="100" r="76" />
        <circle cx="100" cy="100" r="51" />
        <circle cx="100" cy="100" r="25" />

        <circle cx="100" cy="24" r="25" />
        <circle cx="166" cy="62" r="25" />
        <circle cx="166" cy="138" r="25" />
        <circle cx="100" cy="176" r="25" />
        <circle cx="34" cy="138" r="25" />
        <circle cx="34" cy="62" r="25" />

        <path d="M100 24L166 138L34 138L100 24Z" />
        <path d="M100 176L34 62L166 62L100 176Z" />

        <path d="M100 24L100 176" />
        <path d="M34 62L166 138" />
        <path d="M166 62L34 138" />
      </g>
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f6f2]/90 backdrop-blur-xl">
      <div className="shefa-container flex h-[76px] items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full border border-[#b39458]/50 text-[#b39458]">
            <div className="h-7 w-7">
              <Metatron />
            </div>
          </div>

          <div>
            <div className="text-[15px] font-bold tracking-[0.16em] text-[#0a1020]">
              SHEFA
            </div>
            <div className="text-[8px] font-semibold tracking-[0.24em] text-[#8b6c34]">
              NEXTGEN SYSTEMS
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-[12px] font-medium text-slate-500 lg:flex">
          <a href="#platform" className="transition hover:text-[#0a1020]">
            Platform
          </a>
          <a href="#system" className="transition hover:text-[#0a1020]">
            System
          </a>
          <a href="#results" className="transition hover:text-[#0a1020]">
            Results
          </a>
          <a href="#industries" className="transition hover:text-[#0a1020]">
            Industries
          </a>
          <a href="#pricing" className="transition hover:text-[#0a1020]">
            Pricing
          </a>
        </nav>

        <a
          href="mailto:hello@shefa-nextgen.com"
          className="shefa-button hidden min-h-[42px] px-5 text-xs sm:inline-flex"
        >
          Book a demo <Arrow />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-[#f7f6f2]">
      <div className="absolute right-[-180px] top-[-100px] h-[720px] w-[720px] text-[#b39458] opacity-[0.07]">
        <Metatron />
      </div>

      <div className="absolute bottom-[-250px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#b39458]/[0.045] blur-3xl" />

      <div className="shefa-container relative z-10 flex min-h-[calc(100vh-76px)] items-center py-20 md:py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="shefa-eyebrow">
              CUSTOMER GROWTH SYSTEM
            </div>

            <h1 className="mt-7 max-w-4xl text-[48px] font-medium leading-[0.98] tracking-[-0.055em] text-[#0a1020] sm:text-[62px] md:text-[76px]">
              Your next customer
              <br />
              is already
              <br />
              <span className="text-[#8b6c34]">in your business.</span>
            </h1>

            <p className="mt-8 max-w-xl text-[16px] leading-8 text-slate-500 md:text-[17px]">
              SHEFA connects customer data, reviews, WhatsApp, SMS and
              marketing into one intelligent system designed to increase
              repeat revenue.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#platform" className="shefa-button shefa-button-gold">
                Explore SHEFA <Arrow />
              </a>

              <a
                href="mailto:hello@shefa-nextgen.com"
                className="shefa-button border border-slate-300 bg-white text-[#0a1020] hover:bg-white"
              >
                Book a private demo
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
              {[
                ["+21.4%", "revenue uplift"],
                ["68.4%", "returning customers"],
                ["3.2×", "campaign ROI"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-xl font-medium tracking-[-0.03em] text-[#0a1020]">
                    {value}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-[590px]">
              <div className="absolute inset-8 rounded-full bg-[#b39458]/10 blur-3xl" />

              <div className="relative rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_40px_120px_rgba(10,16,32,.12)]">
                <div className="overflow-hidden rounded-[22px] bg-[#0a1020]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div>
                      <div className="text-[8px] font-bold tracking-[0.22em] text-[#d4bc83]">
                        SHEFA CUSTOMER ENGINE
                      </div>
                      <div className="mt-1 text-sm font-medium text-white">
                        Growth overview
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[8px] text-white/45">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Live
                    </div>
                  </div>

                  <div className="grid gap-3 p-4 sm:grid-cols-3">
                    {[
                      ["Revenue", "€48.2k", "+21.4%"],
                      ["Returning", "68.4%", "+12.8%"],
                      ["Campaigns", "24", "8 active"],
                    ].map(([label, value, change]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/[.035] p-4"
                      >
                        <div className="text-[9px] text-white/35">
                          {label}
                        </div>
                        <div className="mt-3 text-2xl font-medium text-white">
                          {value}
                        </div>
                        <div className="mt-1 text-[9px] text-[#d4bc83]">
                          {change}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 pb-4">
                    <div className="rounded-xl border border-white/10 bg-white/[.035] p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/55">
                          Customer revenue
                        </span>
                        <span className="text-[9px] text-white/25">
                          Last 30 days
                        </span>
                      </div>

                      <div className="relative mt-5 h-[210px]">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_51px,rgba(255,255,255,.055)_52px)]" />

                        <svg
                          viewBox="0 0 600 220"
                          preserveAspectRatio="none"
                          className="absolute inset-0 h-full w-full text-[#b39458]"
                        >
                          <path
                            d="M0 190 C55 180 75 170 115 177 C155 184 178 145 220 154 C260 164 278 115 320 127 C360 139 380 91 416 104 C456 118 480 72 518 84 C554 95 578 52 600 38"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            d="M0 190 C55 180 75 170 115 177 C155 184 178 145 220 154 C260 164 278 115 320 127 C360 139 380 91 416 104 C456 118 480 72 518 84 C554 95 578 52 600 38 V220 H0Z"
                            fill="currentColor"
                            opacity=".08"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block">
                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Automated revenue
                </div>
                <div className="mt-1 text-xl font-medium text-[#0a1020]">
                  +€8,420
                </div>
                <div className="mt-1 text-[9px] text-emerald-600">
                  This month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="bg-white py-24 md:py-32">
      <div className="shefa-container">
        <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <div className="shefa-eyebrow">THE PLATFORM</div>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#0a1020] md:text-6xl">
              One customer.
              <br />
              <span className="text-[#8b6c34]">One intelligent profile.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-500">
            Stop moving between disconnected tools. SHEFA creates a single
            layer across customer data, communication and marketing — so your
            team knows what happened, what matters and what to do next.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[30px] border border-slate-200 bg-[#f7f6f2] lg:grid-cols-[.72fr_1.28fr]">
          <div className="border-b border-slate-200 p-8 md:p-12 lg:border-b-0 lg:border-r">
            <div className="text-[10px] font-bold tracking-[0.2em] text-[#b39458]">
              CUSTOMER PROFILE
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#0a1020] text-lg text-[#d4bc83]">
                AM
              </div>

              <div>
                <div className="font-medium text-[#0a1020]">
                  Anna de Vries
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Returning customer · 8 visits
                </div>
              </div>
            </div>

            <div className="mt-9 space-y-3">
              {[
                ["Last visit", "4 days ago"],
                ["Lifetime value", "€1,840"],
                ["Reviews", "4.9 / 5"],
                ["Next action", "WhatsApp follow-up"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-slate-200 py-3 text-sm"
                >
                  <span className="text-slate-400">{label}</span>
                  <span className="font-medium text-[#0a1020]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a1020] p-8 text-white md:p-12">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#d4bc83]">
                  NEXT BEST ACTION
                </div>
                <div className="mt-2 text-xl font-medium">
                  Bring Anna back this week.
                </div>
              </div>

              <div className="hidden h-10 w-10 place-items-center rounded-full border border-white/10 text-[#d4bc83] sm:grid">
                ↗
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["WhatsApp", "Personal follow-up"],
                ["Review", "Ask after visit"],
                ["Offer", "Return incentive"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[.035] p-5"
                >
                  <div className="text-sm font-medium">{title}</div>
                  <div className="mt-2 text-xs leading-5 text-white/40">
                    {text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#b39458]/20 bg-[#b39458]/[.08] p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/45">
                  Predicted return probability
                </span>
                <span className="text-lg font-medium text-[#d4bc83]">
                  87%
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[87%] rounded-full bg-[#b39458]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function System() {
  return (
    <section id="system" className="dashboard-gradient py-24 text-white md:py-32">
      <div className="shefa-container">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-[#d4bc83]">
            <span className="h-px w-8 bg-[#b39458]" />
            THE GROWTH LOOP
          </div>

          <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-6xl">
            Four actions.
            <br />
            <span className="text-[#d4bc83]">One compounding system.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/45">
            SHEFA doesn't add another dashboard to your business. It connects
            the moments that create customer value and turns them into an
            automated loop.
          </p>
        </div>

        <div className="mt-16 grid border-l border-white/10 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group border-b border-r border-t border-white/10 p-7 transition hover:bg-white/[.035] md:min-h-[320px] md:border-b-0"
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#b39458]">
                {step.number}
              </div>

              <div className="mt-24">
                <h3 className="text-2xl font-medium">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/40">
                  {step.text}
                </p>
              </div>

              <div className="mt-8 text-[#d4bc83] opacity-0 transition group-hover:opacity-100">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      number: "01",
      title: "Customer intelligence",
      text: "One live profile built from visits, purchases, reviews and conversations.",
    },
    {
      number: "02",
      title: "Revenue automation",
      text: "Automatically identify and activate opportunities for repeat revenue.",
    },
    {
      number: "03",
      title: "WhatsApp & SMS",
      text: "Reach customers through the channels they already use every day.",
    },
    {
      number: "04",
      title: "Review engine",
      text: "Turn great customer experiences into more reviews and stronger reputation.",
    },
    {
      number: "05",
      title: "Campaign control",
      text: "Create targeted campaigns without drowning your team in complexity.",
    },
    {
      number: "06",
      title: "Clear reporting",
      text: "Know which actions create revenue and which ones simply create noise.",
    },
  ];

  return (
    <section className="bg-[#f7f6f2] py-24 md:py-32">
      <div className="shefa-container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="shefa-eyebrow">BUILT AROUND THE CUSTOMER</div>

            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.03] tracking-[-0.045em] text-[#0a1020] md:text-6xl">
              Everything your team needs
              <br />
              <span className="text-[#8b6c34]">after the transaction.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-500">
            Powerful enough for growth teams. Simple enough for a local
            business to use every day.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="min-h-[260px] border-b border-r border-slate-200 bg-white p-8 transition hover:bg-[#0a1020] hover:text-white"
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#b39458]">
                {feature.number}
              </div>

              <h3 className="mt-16 text-xl font-medium tracking-[-0.02em]">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 transition group-hover:text-white/50">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="bg-white py-24 md:py-32">
      <div className="shefa-container">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="shefa-eyebrow">REAL BUSINESS IMPACT</div>

            <h2 className="mt-6 text-4xl font-medium leading-[1.03] tracking-[-0.045em] text-[#0a1020] md:text-6xl">
              Growth should be
              <br />
              <span className="text-[#8b6c34]">measurable.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-slate-500">
              The goal isn't more software. The goal is more customers
              returning, more revenue per customer and a stronger relationship
              with the people already choosing your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-3">
            {[
              ["+21.4%", "Revenue uplift", "Average improvement"],
              ["68.4%", "Returning customers", "Retention rate"],
              ["3.2×", "Campaign ROI", "Average return"],
            ].map(([value, title, text]) => (
              <div
                key={title}
                className="border-l border-t border-slate-200 p-7 sm:border-t-0"
              >
                <div className="text-4xl font-medium tracking-[-0.05em] text-[#0a1020] md:text-5xl">
                  {value}
                </div>

                <div className="mt-8 text-sm font-semibold text-[#0a1020]">
                  {title}
                </div>

                <div className="mt-2 text-xs leading-5 text-slate-400">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-[#f7f6f2] py-24 md:py-32">
      <div className="shefa-container">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="shefa-eyebrow">BUILT FOR LOCAL GROWTH</div>

            <h2 className="mt-6 text-4xl font-medium leading-[1.03] tracking-[-0.045em] text-[#0a1020] md:text-6xl">
              Different businesses.
              <br />
              <span className="text-[#8b6c34]">Same problem.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-500 md:ml-auto">
            Customer acquisition is expensive. Retention is where the
            compounding value lives. SHEFA is designed for businesses where
            every returning customer matters.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-slate-200 sm:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.no}
              className="group min-h-[250px] border-b border-r border-slate-200 bg-white p-8 transition hover:bg-[#0a1020] hover:text-white md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#b39458]">
                  {industry.no}
                </span>
                <span className="text-[#b39458] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-medium">{industry.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  {industry.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="shefa-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="shefa-eyebrow justify-center">PRICING</div>

          <h2 className="mt-6 text-4xl font-medium leading-[1.03] tracking-[-0.045em] text-[#0a1020] md:text-6xl">
            Built around
            <br />
            <span className="text-[#8b6c34]">your growth.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500">
            No bloated packages. No unnecessary complexity. We configure SHEFA
            around your customer volume, channels and growth goals.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[30px] border border-slate-200 bg-[#f7f6f2]">
          <div className="grid md:grid-cols-3">
            {[
              ["FOUNDATION", "For growing local businesses", "From €299/mo"],
              ["GROWTH", "For teams ready to scale retention", "From €599/mo"],
              ["CUSTOM", "For multi-location operations", "Let's talk"],
            ].map(([name, text, price], index) => (
              <div
                key={name}
                className={[
                  "p-8 md:p-10",
                  index !== 2
                    ? "border-b border-slate-200 md:border-b-0 md:border-r"
                    : "",
                ].join(" ")}
              >
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#b39458]">
                  {name}
                </div>

                <p className="mt-7 min-h-[48px] text-sm leading-6 text-slate-500">
                  {text}
                </p>

                <div className="mt-8 text-2xl font-medium tracking-[-0.03em] text-[#0a1020]">
                  {price}
                </div>

                <a
                  href="mailto:hello@shefa-nextgen.com"
                  className="shefa-button mt-8 w-full"
                >
                  Discuss your setup <Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1020] py-14 text-white">
      <div className="shefa-container">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-[#b39458]/50 text-[#b39458]">
                <div className="h-7 w-7">
                  <Metatron />
                </div>
              </div>

              <div>
                <div className="text-[15px] font-bold tracking-[0.16em]">
                  SHEFA
                </div>
                <div className="text-[8px] font-semibold tracking-[0.24em] text-[#d4bc83]">
                  NEXTGEN SYSTEMS
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/35">
              Customer growth infrastructure for modern local businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/45">
            <a href="#platform" className="hover:text-white">
              Platform
            </a>
            <a href="#system" className="hover:text-white">
              System
            </a>
            <a href="#results" className="hover:text-white">
              Results
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a
              href="mailto:hello@shefa-nextgen.com"
              className="hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[10px] tracking-[0.12em] text-white/25">
          © {new Date().getFullYear()} SHEFA NEXTGEN SYSTEMS
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Header />

      <main>
        <Hero />
        <Platform />
        <System />
        <Features />
        <Results />
        <Industries />
        <Pricing />

        <section className="bg-[#f7f6f2] px-4 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden rounded-[32px] bg-[#0a1020] px-7 py-16 text-white md:px-16 md:py-20">
              <div className="absolute right-[-80px] top-[-120px] h-[420px] w-[420px] text-[#b39458] opacity-[0.12]">
                <Metatron />
              </div>

              <div className="relative z-10 grid items-end gap-12 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-[#d4bc83]">
                    <span className="h-px w-8 bg-[#b39458]" />
                    READY WHEN YOU ARE
                  </div>

                  <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-6xl">
                    Make your next customer
                    <br />
                    <span className="text-[#d4bc83]">
                      worth more than the first.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                    Tell us about your business and we'll show you where SHEFA
                    can create the biggest opportunity for repeat revenue.
                  </p>
                </div>

                <a
                  href="mailto:hello@shefa-nextgen.com"
                  className="shefa-button shefa-button-gold whitespace-nowrap"
                >
                  Book a demo <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}