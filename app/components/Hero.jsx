'use client';

import { useLanguage } from '../LanguageContext';

const STRIPE_URL = 'https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01';

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4 14 14 4M6 4h8v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="m3 7.7 2.7 2.7L12 4.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 14V8M7 14V4M11 14v-3M15 14V6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v6A1.5 1.5 0 0 1 13.5 12H8l-3.5 3V12h0A1.5 1.5 0 0 1 3 10.5v-6Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="m8 2 1.7 3.5 3.8.5-2.8 2.7.7 3.8L8 10.7 4.6 12.5l.7-3.8-2.8-2.7 3.8-.5L8 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const isNL = lang === 'nl';

  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-24">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b39458]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#8b6c34]">
                {isNL ? 'KLANTGROEI SYSTEEM' : 'CUSTOMER GROWTH SYSTEM'}
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#0a1020] sm:text-6xl lg:text-[68px]">
              {isNL
                ? 'Maak van elk klantbezoek nieuwe groei.'
                : 'Turn every customer visit into growth.'}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {isNL
                ? 'Shefa verbindt reviews, klantdata, WhatsApp, SMS en marketing in één eenvoudig systeem — zodat elk bezoek kan uitgroeien tot een relatie.'
                : 'Shefa connects reviews, customer data, WhatsApp, SMS and marketing in one simple system — so every visit can become a relationship.'}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0a1020] px-7 text-sm font-semibold text-white transition hover:bg-[#161e31]"
              >
                {isNL ? 'Aan de slag' : 'Get started'}

                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d5d1c8] bg-white/60 px-7 text-sm font-semibold text-[#0a1020] transition hover:bg-white"
              >
                {isNL ? 'Bekijk hoe het werkt' : 'See how it works'}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                isNL ? 'Eenvoudige onboarding' : 'Simple onboarding',
                isNL ? 'Annuleer wanneer je wilt' : 'Cancel anytime',
                isNL ? 'Snel te starten' : 'Ready to start',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-slate-500"
                >
                  <span className="text-[#94743d]">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative lg:pl-2">
            <div className="absolute -right-5 -top-5 z-20 rounded-full border border-[#d8cba9] bg-[#fbf8ef] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8b6c34] shadow-sm">
              {isNL ? 'Demo interface' : 'Demo interface'}
            </div>

            <div className="relative overflow-hidden rounded-[26px] border border-[#20283a] bg-[#0a1020] shadow-[0_30px_80px_rgba(10,16,32,0.20)]">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b39458] text-[#0a1020]">
                    <ChartIcon />
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-white">
                      Customer growth
                    </div>
                    <div className="text-[9px] text-white/35">
                      Example workspace
                    </div>
                  </div>
                </div>

                <div className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-white/40">
                  Demo
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                    <div className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                      Reviews
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      +24
                    </div>
                    <div className="mt-1 text-[8px] text-[#cbb477]">
                      Example
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                    <div className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                      Customers
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      128
                    </div>
                    <div className="mt-1 text-[8px] text-[#cbb477]">
                      Example
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                    <div className="text-[8px] uppercase tracking-[0.12em] text-white/35">
                      Response
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      34%
                    </div>
                    <div className="mt-1 text-[8px] text-[#cbb477]">
                      Example
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-medium text-white/55">
                        Customer activity
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white">
                        Visits & interactions
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[9px] text-[#cbb477]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b39458]" />
                      Growing
                    </div>
                  </div>

                  <div className="mt-5 flex h-24 items-end gap-1.5">
                    {[28, 36, 31, 48, 43, 57, 50, 64, 59, 73, 68, 81].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-[#b39458]/50"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>

                  <div className="mt-2 flex justify-between text-[8px] text-white/25">
                    <span>01</span>
                    <span>07</span>
                    <span>14</span>
                    <span>21</span>
                    <span>30</span>
                  </div>
                </div>

                {/* Bottom cards */}
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="flex items-center gap-2 text-white/45">
                      <StarIcon />
                      <span className="text-[9px] uppercase tracking-[0.1em]">
                        Latest review
                      </span>
                    </div>

                    <p className="mt-3 text-[11px] leading-5 text-white/75">
                      “Excellent service. We will definitely come back.”
                    </p>

                    <div className="mt-3 text-[8px] text-white/30">
                      Example customer feedback
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="flex items-center gap-2 text-white/45">
                      <MessageIcon />
                      <span className="text-[9px] uppercase tracking-[0.1em]">
                        Automation
                      </span>
                    </div>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-white/55">Follow-up</span>
                        <span className="text-[#cbb477]">Active</span>
                      </div>

                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-white/55">Review request</span>
                        <span className="text-[#cbb477]">Active</span>
                      </div>

                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-white/55">Campaigns</span>
                        <span className="text-white/30">Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating message */}
              <div className="absolute -bottom-4 -left-5 hidden w-52 rounded-2xl border border-[#ddd5c2] bg-white p-3 shadow-[0_18px_50px_rgba(10,16,32,0.16)] sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3eee2] text-[#94743d]">
                    <MessageIcon />
                  </div>

                  <div>
                    <div className="text-[9px] font-semibold text-[#0a1020]">
                      WhatsApp / SMS
                    </div>
                    <div className="text-[8px] text-slate-400">
                      Automated follow-up
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-xl bg-[#f7f6f2] p-2.5 text-[9px] leading-4 text-slate-500">
                  Hi, thanks for visiting us today. How was your experience?
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="grid border-t border-slate-200 sm:grid-cols-4">
          {[
            ['Reviews', 'Google feedback'],
            ['CRM', 'Customer data'],
            ['Messaging', 'WhatsApp & SMS'],
            ['Growth', 'Marketing automation'],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              className="flex items-center justify-between border-b border-slate-200 py-5 sm:border-b-0 sm:border-r sm:px-6 first:sm:pl-0 last:sm:border-r-0"
            >
              <div>
                <div className="text-xs font-semibold text-[#0a1020]">
                  {title}
                </div>
                <div className="mt-1 text-[10px] text-slate-400">
                  {subtitle}
                </div>
              </div>

              <span className="h-1.5 w-1.5 rounded-full bg-[#b39458]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}