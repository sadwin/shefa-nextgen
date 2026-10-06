'use client';

import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const isNL = language === 'nl';

  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background geometry */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-[#0a1020]" />
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rotate-45 border border-[#0a1020]" />
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 -rotate-45 border border-[#0a1020]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Hero copy */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b39458]/30 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b6c34] sm:text-[11px] sm:tracking-[0.18em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b39458]" />
            Customer Growth System
          </div>

          <h1 className="text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0a1020] sm:text-6xl lg:text-7xl">
            {isNL
              ? 'Maak van elk klantbezoek groei.'
              : 'Turn every customer visit into growth.'}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.65] text-[#647084] sm:mt-7 sm:text-lg sm:leading-7">
            {isNL
              ? 'Shefa Nextgen verbindt reviews, klantdata, WhatsApp, SMS en marketing in één eenvoudig systeem.'
              : 'Shefa Nextgen connects reviews, customer data, WhatsApp, SMS and marketing in one simple system.'}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            <a
              href="https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0a1020] px-8 text-sm font-semibold !text-white shadow-[0_10px_30px_rgba(10,16,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#161e31] sm:w-auto"
            >
              {isNL ? 'Aan de slag' : 'Get started'}
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-[#d9d6ce] bg-white px-8 text-sm font-semibold text-[#0a1020] transition hover:border-[#b39458] hover:bg-[#fffdfa] sm:w-auto"
            >
              {isNL ? 'Bekijk hoe het werkt' : 'See how it works'}
            </a>
          </div>

          <div className="mx-auto mt-7 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium leading-5 text-[#647084] sm:text-sm">
            <span>✓ Simple onboarding</span>
            <span>✓ Flexible workflows</span>
            <span>✓ One connected system</span>
          </div>
        </div>

        {/* Demo dashboard */}
        <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#b39458]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-[#dcd9d0] bg-white shadow-[0_30px_80px_rgba(10,16,32,0.12)]">
            {/* Browser bar */}
            <div className="flex items-center justify-between border-b border-[#e8e6e0] px-4 py-3 sm:px-7 sm:py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8d5cc]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8d5cc]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8d5cc]" />
                </div>

                <span className="hidden text-xs font-medium text-[#647084] sm:block">
                  Shefa Dashboard
                </span>
              </div>

              <span className="rounded-full border border-[#b39458]/30 bg-[#b39458]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8b6c34] sm:px-3 sm:text-[10px]">
                Demo interface
              </span>
            </div>

            <div className="p-4 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#8b6c34] sm:text-xs">
                    Customer growth
                  </p>

                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#0a1020] sm:text-2xl">
                    Overview
                  </h2>
                </div>

                <span className="text-[10px] text-[#647084] sm:text-xs">
                  Example data
                </span>
              </div>

              {/* Metrics */}
              <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-3">
                {[
                  ['Reviews', '24', '+8.2%'],
                  ['Customers', '128', '+6.4%'],
                  ['Campaign response', '34%', '+4.1%'],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#e8e6e0] bg-[#faf9f6] p-3.5 sm:p-4"
                  >
                    <p className="text-xs text-[#647084]">{label}</p>

                    <div className="mt-2 flex items-end justify-between gap-2">
                      <span className="text-2xl font-semibold tracking-tight text-[#0a1020]">
                        {value}
                      </span>

                      <span className="text-[10px] font-semibold text-[#8b6c34] sm:text-xs">
                        {change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart + feedback */}
              <div className="mt-2.5 grid gap-2.5 sm:mt-3 lg:grid-cols-[1.5fr_1fr] sm:gap-3">
                <div className="rounded-xl border border-[#e8e6e0] bg-white p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#0a1020]">
                        Customer activity
                      </p>

                      <p className="mt-1 text-[11px] text-[#647084]">
                        Visits & interactions
                      </p>
                    </div>

                    <span className="rounded-full bg-[#f7f6f2] px-2.5 py-1 text-[9px] font-semibold text-[#647084] sm:px-3 sm:text-[10px]">
                      Last 30 days
                    </span>
                  </div>

                  <div className="mt-7 flex h-28 items-end gap-1.5 sm:mt-8 sm:h-36 sm:gap-2">
                    {[28, 42, 35, 58, 48, 72, 64, 84, 70, 92, 78, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-[#0a1020]/[0.08]"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>

                  <div className="mt-3 flex justify-between text-[9px] text-[#9aa1ad]">
                    <span>01</span>
                    <span>07</span>
                    <span>14</span>
                    <span>21</span>
                    <span>30</span>
                  </div>
                </div>

                <div className="rounded-xl border border-[#e8e6e0] bg-[#faf9f6] p-4 sm:p-5">
                  <p className="text-sm font-semibold text-[#0a1020]">
                    Example customer feedback
                  </p>

                  <div className="mt-4 rounded-xl bg-white p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0a1020]">
                        Customer
                      </span>

                      <span className="text-[10px] text-[#647084]">
                        Example
                      </span>
                    </div>

                    <div className="mt-3 text-sm leading-6 text-[#647084]">
                      “Excellent service. We will definitely come back again.”
                    </div>

                    <div className="mt-4 flex gap-1 text-[#b39458]">
                      ★★★★★
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#8b6c34]">
                    <span className="h-2 w-2 rounded-full bg-[#b39458]" />
                    Automation active
                  </div>
                </div>
              </div>

              {/* Bottom navigation */}
              <div className="mt-2.5 grid grid-cols-4 gap-1.5 rounded-xl border border-[#e8e6e0] bg-[#faf9f6] p-1.5 sm:mt-3 sm:gap-2 sm:p-2">
                {['Reviews', 'CRM', 'Messaging', 'Growth'].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-1.5 py-2 text-center text-[9px] font-medium sm:px-3 sm:text-[11px] ${
                        index === 0
                          ? 'bg-white text-[#0a1020] shadow-sm'
                          : 'text-[#647084]'
                      }`}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}