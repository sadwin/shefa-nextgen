'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf8]">
      
      {/* subtle geometric background */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[600px] w-[600px] rounded-full border border-[#c9a24a]/10" />
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[480px] w-[480px] rounded-full border border-[#c9a24a]/10" />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-20">

        {/* LEFT */}
        <div className="relative z-10 lg:col-span-5">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c9a24a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#77756f]">
              Customer growth platform
            </span>
          </div>

          <h1 className="max-w-[590px] text-[52px] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#171717] sm:text-[64px] lg:text-[68px]">
            Turn every
            <br />
            customer
            <br />
            <span className="text-[#9d7a2d]">into a return.</span>
          </h1>

          <p className="mt-7 max-w-[500px] text-[16px] leading-7 text-[#686761]">
            SHEFA helps local businesses collect more Google reviews,
            build customer relationships and bring people back —
            automatically through WhatsApp and SMS.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01"
              className="rounded-full bg-[#171717] px-7 py-4 text-[13px] font-bold text-white shadow-[0_16px_40px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5"
            >
              Start growing →
            </Link>

            <a
              href="#how-it-works"
              className="rounded-full border border-[#d9d6ce] bg-white px-7 py-4 text-[13px] font-semibold text-[#33322f] transition hover:border-[#aaa69b]"
            >
              See how it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-semibold text-[#85827a]">
            <span>✓ No setup fee</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Ready in minutes</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative lg:col-span-7">
          <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-[#e9e6dc] shadow-[0_40px_100px_rgba(0,0,0,.14)]">

            <img
              src="/shefa-office-hero.jpg"
              alt="SHEFA NextGen Systems team working in a modern Dutch office"
              className="h-[560px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* floating dashboard */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:w-[330px]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#99958c]">
                    SHEFA Overview
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-[#171717]">
                    Business performance
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5edda] text-[#a57d2b]">
                  ★
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Metric value="4.8" label="Google" />
                <Metric value="1,248" label="Customers" />
                <Metric value="37%" label="Returning" />
              </div>

              <div className="mt-3 h-14 rounded-xl bg-[#f7f7f4] p-2">
                <div className="flex h-full items-end gap-1.5">
                  {[25, 38, 31, 52, 62, 48, 78, 92].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-[#c9a24a]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#e5e0d4] bg-white px-5 py-4 shadow-xl sm:block">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#99958c]">
              Reviews this month
            </p>
            <p className="mt-1 text-xl font-extrabold text-[#171717]">
              +124 <span className="text-sm text-[#9d7a2d]">↑</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-xl bg-[#f7f7f4] p-2.5">
      <p className="text-[15px] font-extrabold text-[#171717]">{value}</p>
      <p className="mt-0.5 text-[8px] font-semibold text-[#929087]">
        {label}
      </p>
    </div>
  );
}