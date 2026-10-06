'use client';

import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const isNL = language === 'nl';

  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] pt-28 pb-20 sm:pt-36 sm:pb-24">
      {/* subtle geometric background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-[#0a1020]" />
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rotate-45 border border-[#0a1020]" />
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 -rotate-45 border border-[#0a1020]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b39458]/30 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b6c34]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b39458]" />
            {isNL ? 'CUSTOMER GROWTH SYSTEM' : 'CUSTOMER GROWTH SYSTEM'}
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.045em] text-[#0a1020] sm:text-6xl lg:text-7xl">
            {isNL
              ? 'Maak van elk klantbezoek groei.'
              : 'Turn every customer visit into growth.'}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#647084] sm:text-lg">
            {isNL
              ? 'Shefa Nextgen verbindt reviews, klantdata, WhatsApp, SMS en marketing in één eenvoudig systeem.'
              : 'Shefa Nextgen connects reviews, customer data, WhatsApp, SMS and marketing in one simple system.'}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0a1020] px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#161e31]"
            >
              {isNL ? 'Aan de slag' : 'Get started'}
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d9d6ce] bg-white px-7 text-sm font-semibold text-[#0a1020] transition hover:border-[#b39458] hover:bg-[#fffdfa]"
            >
              {isNL ? 'Bekijk hoe het werkt' : 'See how it works'}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#647084]">
            <span>✓ {isNL ? 'Eenvoudige onboarding' : 'Simple onboarding'}</span>
            <span>✓ {isNL ? 'Flexibele workflows' : 'Flexible workflows'}</span>
            <span>✓ {isNL ? 'Eén verbonden systeem' : 'One connected system'}</span>
          </div>
        </div>

        {/* Demo dashboard */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#b39458]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-[#dcd9d0] bg-white shadow-[0_30px_80px_rgba(10,16,32,0.12)]">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-[#e8e6e0] px-5 py-4 sm:px-7">
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

              <span className="rounded-full border border-[#b39458]/30 bg-[#b39458]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b6c34]">
                Demo interface
              </span>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8b6c34]">
                    Customer growth
                  </p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#0a1020] sm:text-2xl">
                    Overview
                  </h2>
                </div>

                <span className="text-xs text-[#647084]">Example data</span>
              </div>

              {/* metrics */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ['Reviews', '24', '+8.2%'],
                  ['Customers', '128', '+6.4%'],
                  ['Campaign response', '34%', '+4.1%'],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#e8e6e0] bg-[#faf9f6] p-4"
                  >
                    <p className="text-xs text-[#647084]">{label}</p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <span className="text-2xl font-semibold tracking-tight text-[#0a1020]">
                        {value}
                      </span>
                      <span className="text-xs font-semibold text-[#8b6c34]">
                        {change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* chart + activity */}
              <div className="mt-3 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
                <div className="rounded-xl border border-[#e8e6e0] bg-white p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#0a1020]">
                        Customer activity
                      </p>
                      <p className="mt-1 text-xs text-[#647084]">
                        Visits & interactions
                      </p>
                    </div>

                    <span className="rounded-full bg-[#f7f6f2] px-3 py-1 text-[10px] font-semibold text-[#647084]">
                      Last 30 days
                    </span>
                  </div>

                  <div className="mt-8 flex h-36 items-end gap-2">
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

                  <div className="mt-3 flex justify-between text-[10px] text-[#9aa1ad]">
                    <span>01</span>
                    <span>07</span>
                    <span>14</span>
                    <span>21</span>
                    <span>30</span>
                  </div>
                </div>

                <div className="rounded-xl border border-[#e8e6e0] bg-[#faf9f6] p-5">
                  <p className="text-sm font-semibold text-[#0a1020]">
                    Example customer feedback
                  </p>

                  <div className="mt-5 rounded-xl bg-white p-4">
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

              {/* bottom navigation */}
              <div className="mt-3 grid grid-cols-4 gap-2 rounded-xl border border-[#e8e6e0] bg-[#faf9f6] p-2">
                {['Reviews', 'CRM', 'Messaging', 'Growth'].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-lg px-3 py-2 text-center text-[11px] font-medium ${
                      index === 0
                        ? 'bg-white text-[#0a1020] shadow-sm'
                        : 'text-[#647084]'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}