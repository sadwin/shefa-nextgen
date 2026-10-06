import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import RealResults from "./components/RealResults";
import Industries from "./components/Industries";
import Pricing from "./components/Pricing";
import FooterLogos from "./components/FooterLogos";

export const metadata = {
  title: "SHEFA NextGen Systems — Turn customers into growth",
  description:
    "SHEFA connects customer data, reviews, WhatsApp, SMS and marketing into one customer growth system.",
};

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="shefa-container flex min-h-[86px] flex-col justify-center gap-5 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Built for businesses that depend on returning customers
        </p>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold tracking-[0.12em] text-slate-400">
          <span>HOSPITALITY</span>
          <span>HEALTH</span>
          <span>BEAUTY</span>
          <span>RETAIL</span>
          <span>SERVICES</span>
        </div>
      </div>
    </section>
  );
}

function ProductBridge() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] py-24 md:py-32">
      <div className="metatron-watermark right-[-180px] top-[-100px] h-[560px] w-[560px] text-[#b39458]">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="42" stroke="currentColor" />
          <circle cx="50" cy="50" r="28" stroke="currentColor" />
          <circle cx="50" cy="50" r="14" stroke="currentColor" />

          <circle cx="50" cy="8" r="8" stroke="currentColor" />
          <circle cx="86.4" cy="29" r="8" stroke="currentColor" />
          <circle cx="86.4" cy="71" r="8" stroke="currentColor" />
          <circle cx="50" cy="92" r="8" stroke="currentColor" />
          <circle cx="13.6" cy="71" r="8" stroke="currentColor" />
          <circle cx="13.6" cy="29" r="8" stroke="currentColor" />

          <path
            d="M50 8L86.4 71L13.6 71L50 8ZM50 92L13.6 29L86.4 29L50 92Z"
            stroke="currentColor"
          />
        </svg>
      </div>

      <div className="shefa-container relative z-10">
        <div className="grid items-end gap-10 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="shefa-eyebrow">THE CUSTOMER GROWTH SYSTEM</div>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#0a1020] md:text-6xl">
              Everything that happens
              <br />
              <span className="text-[#8b6c34]">after the first visit.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-500">
            SHEFA turns customer interactions into a connected growth loop —
            from the first visit, to reviews, to follow-up, to the next
            purchase.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(10,16,32,.08)] md:grid-cols-4">
          {[
            {
              number: "01",
              title: "Capture",
              text: "Bring every customer interaction into one profile.",
            },
            {
              number: "02",
              title: "Understand",
              text: "See who is returning, drifting or ready to buy.",
            },
            {
              number: "03",
              title: "Activate",
              text: "Trigger reviews, WhatsApp, SMS and campaigns.",
            },
            {
              number: "04",
              title: "Return",
              text: "Turn one visit into a repeat customer relationship.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={[
                "group relative min-h-[235px] p-7 md:p-8",
                index !== 3 ? "border-b border-slate-200 md:border-b-0 md:border-r" : "",
              ].join(" ")}
            >
              <span className="text-[10px] font-bold tracking-[0.18em] text-[#b39458]">
                {item.number}
              </span>

              <div className="mt-20">
                <h3 className="text-xl font-medium tracking-[-0.02em] text-[#0a1020]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[230px] text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>

              {index !== 3 && (
                <div className="absolute bottom-7 right-7 text-[#b39458] transition-transform group-hover:translate-x-1">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformStatement() {
  return (
    <section className="dashboard-gradient relative overflow-hidden py-24 text-white md:py-32">
      <div className="shefa-container relative z-10">
        <div className="grid items-center gap-16 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-[#d4bc83]">
              <span className="h-px w-7 bg-[#b39458]" />
              ONE CONNECTED SYSTEM
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-6xl">
              Less software.
              <br />
              <span className="text-[#d4bc83]">More customer growth.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/55 md:text-base">
              Reviews, customer data, WhatsApp, SMS and marketing shouldn't
              live in five different places. SHEFA connects them into one
              system your team can actually use.
            </p>

            <a
              href="#pricing"
              className="shefa-button shefa-button-gold mt-9"
            >
              See the platform <span>↗</span>
            </a>
          </div>

          <div className="relative">
            <div className="rounded-[24px] border border-white/10 bg-white/[.045] p-3 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-[17px] border border-white/10 bg-[#101728]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.18em] text-[#d4bc83]">
                      SHEFA CUSTOMER ENGINE
                    </div>
                    <div className="mt-1 text-sm font-medium text-white">
                      Customer overview
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live
                  </div>
                </div>

                <div className="grid gap-3 p-4 md:grid-cols-3">
                  {[
                    ["Returning customers", "68.4%", "+12.8%"],
                    ["Automated revenue", "€48.2k", "+21.4%"],
                    ["Active campaigns", "24", "8 running"],
                  ].map(([label, value, change]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-white/[.035] p-4"
                    >
                      <div className="text-[9px] text-white/35">{label}</div>
                      <div className="mt-3 text-2xl font-medium text-white">
                        {value}
                      </div>
                      <div className="mt-1 text-[9px] text-[#d4bc83]">
                        {change}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 px-4 pb-4 md:grid-cols-[1.35fr_.65fr]">
                  <div className="rounded-xl border border-white/10 bg-white/[.035] p-5">
                    <div className="flex justify-between text-[10px] text-white/55">
                      <span>Customer revenue</span>
                      <span className="text-white/25">Last 30 days</span>
                    </div>

                    <div className="relative mt-6 h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_46px,rgba(255,255,255,.06)_47px)]" />

                      <svg
                        viewBox="0 0 600 220"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full text-[#b39458]"
                      >
                        <path
                          d="M0 185 C55 178 72 169 112 175 C155 181 170 142 214 151 C258 160 270 111 315 124 C355 136 375 87 411 101 C452 118 475 68 513 82 C548 94 572 50 600 36"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          d="M0 185 C55 178 72 169 112 175 C155 181 170 142 214 151 C258 160 270 111 315 124 C355 136 375 87 411 101 C452 118 475 68 513 82 C548 94 572 50 600 36 V220 H0Z"
                          fill="currentColor"
                          opacity=".08"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[.035] p-5">
                    <div className="text-[10px] text-white/55">
                      Latest activity
                    </div>

                    <div className="mt-5 space-y-4">
                      {[
                        ["A", "Review campaign", "+€840"],
                        ["B", "Customer returned", "+€310"],
                        ["N", "WhatsApp follow-up", "+€185"],
                      ].map(([initial, action, revenue]) => (
                        <div
                          key={initial}
                          className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-0"
                        >
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#b39458]/10 text-[10px] text-[#d4bc83]">
                            {initial}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] text-white/70">
                              {action}
                            </div>
                            <div className="mt-1 text-[8px] text-white/25">
                              Automated
                            </div>
                          </div>

                          <div className="text-[9px] text-[#d4bc83]">
                            {revenue}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full border border-[#b39458]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] py-24 md:py-32">
      <div className="shefa-container relative z-10">
        <div className="rounded-[30px] bg-[#0a1020] px-7 py-14 text-white md:px-16 md:py-20">
          <div className="grid items-end gap-12 md:grid-cols-[1fr_auto]">
            <div>
              <div className="shefa-eyebrow !text-[#d4bc83]">
                READY WHEN YOU ARE
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-6xl">
                Make your next customer
                <br />
                <span className="text-[#d4bc83]">
                  worth more than the first.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                Tell us about your business and we'll show you where SHEFA can
                create the biggest opportunity for repeat revenue.
              </p>
            </div>

            <a
              href="mailto:hello@shefa-nextgen.com"
              className="shefa-button shefa-button-gold whitespace-nowrap"
            >
              Book a demo <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Header />

      <main>
        <Hero />

        <TrustBar />

        <ProductBridge />

        <Features />

        <PlatformStatement />

        <HowItWorks />

        <RealResults />

        <Industries />

        <Pricing />

        <FinalCTA />
      </main>

      <FooterLogos />
    </div>
  );
}