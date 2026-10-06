'use client';

import Link from 'next/link';
import { useLanguage } from '../LanguageContext';

const STRIPE_URL = 'https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01';

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 12.5L12.5 3.5M5.5 3.5H12.5V10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="6.5"
        stroke="#9b7837"
        strokeWidth="1"
      />
      <path
        d="M4.5 7.5L6.5 9.5L10.5 5.5"
        stroke="#9b7837"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ReviewStars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 1.2L7.45 4.14L10.7 4.61L8.35 6.9L8.9 10.13L6 8.6L3.1 10.13L3.65 6.9L1.3 4.61L4.55 4.14L6 1.2Z"
            fill="#C8A45D"
          />
        </svg>
      ))}
    </div>
  );
}

function MiniChart() {
  return (
    <svg
      viewBox="0 0 300 95"
      preserveAspectRatio="none"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 75C18 71 24 64 42 67C61 70 69 57 86 59C105 61 111 48 130 52C147 56 156 42 173 45C191 48 199 33 218 37C237 41 244 25 260 28C276 31 283 16 300 19"
        stroke="#C8A45D"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M0 75C18 71 24 64 42 67C61 70 69 57 86 59C105 61 111 48 130 52C147 56 156 42 173 45C191 48 199 33 218 37C237 41 244 25 260 28C276 31 283 16 300 19V95H0V75Z"
        fill="url(#chartFill)"
        opacity="0.35"
      />

      <defs>
        <linearGradient
          id="chartFill"
          x1="150"
          y1="15"
          x2="150"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A45D" stopOpacity="0.3" />
          <stop offset="1" stopColor="#C8A45D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLanguage();

  const isNL = lang === 'nl';

  const content = {
    en: {
      eyebrow: 'CUSTOMER GROWTH SYSTEM',
      title: (
        <>
          Turn every
          <span className="block text-[#9b7837]">customer visit</span>
          into growth.
        </>
      ),
      description:
        'Shefa Nextgen connects reviews, customer data, WhatsApp, SMS and marketing in one simple system — so every visit can become a relationship.',
      primary: 'Get started',
      secondary: 'See how it works',
      checks: ['No setup fee', 'Cancel anytime', 'Ready in minutes'],
      dashboardTitle: 'Customer growth',
      dashboardPeriod: 'Last 30 days',
      reviews: 'New reviews',
      customers: 'Customers',
      campaigns: 'Campaign response',
      reviewText:
        'Excellent service. We will definitely come back again.',
      recentActivity: 'Recent activity',
      activityText: 'New 5-star review received',
      trusted: 'Built for businesses that grow through customer relationships.',
    },
    nl: {
      eyebrow: 'CUSTOMER GROWTH SYSTEM',
      title: (
        <>
          Maak van elk
          <span className="block text-[#9b7837]">klantbezoek</span>
          nieuwe groei.
        </>
      ),
      description:
        'Shefa Nextgen verbindt reviews, klantdata, WhatsApp, SMS en marketing in één eenvoudig systeem — zodat elk bezoek een relatie kan worden.',
      primary: 'Aan de slag',
      secondary: 'Bekijk hoe het werkt',
      checks: ['Geen opstartkosten', 'Altijd opzegbaar', 'Klaar in minuten'],
      dashboardTitle: 'Klantgroei',
      dashboardPeriod: 'Laatste 30 dagen',
      reviews: 'Nieuwe reviews',
      customers: 'Klanten',
      campaigns: 'Campagne respons',
      reviewText:
        'Uitstekende service. We komen zeker nog een keer terug.',
      recentActivity: 'Recente activiteit',
      activityText: 'Nieuwe 5-sterren review ontvangen',
      trusted: 'Voor bedrijven die groeien door sterke klantrelaties.',
    },
  };

  const text = isNL ? content.nl : content.en;

  return (
    <main className="relative overflow-hidden bg-[#f7f7f5]">
      {/* BACKGROUND GEOMETRY */}
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px] rounded-full border border-[#9b7837]/[0.07]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 top-28 h-[430px] w-[430px] rounded-full border border-[#9b7837]/[0.06]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[-220px] top-[420px] h-[500px] w-[500px] rounded-full border border-black/[0.025]"
        aria-hidden="true"
      />

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">

            {/* LEFT */}
            <div className="relative z-10 max-w-[650px]">

              {/* EYEBROW */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#9b7837]" />

                <span className="text-[10px] font-bold tracking-[0.24em] text-[#9b7837]">
                  {text.eyebrow}
                </span>
              </div>

              {/* HEADLINE */}
              <h1 className="max-w-[680px] text-[48px] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#090F1C] sm:text-[62px] lg:text-[76px]">
                {text.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[570px] text-[16px] leading-7 text-[#62666d] sm:text-[17px]">
                {text.description}
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={STRIPE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#090F1C] px-7 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#151c2b] hover:shadow-[0_15px_30px_rgba(9,15,28,0.16)]"
                >
                  {text.primary}

                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight />
                  </span>
                </a>

                <Link
                  href="#how-it-works"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-black/[0.10] bg-white px-7 text-[13px] font-bold text-[#090F1C] transition-all duration-300 hover:border-black/[0.18] hover:bg-white hover:shadow-sm"
                >
                  <PlayIcon />
                  {text.secondary}
                </Link>
              </div>

              {/* CHECKS */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {text.checks.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[11px] font-medium text-[#777b81]"
                  >
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>

              {/* TRUST LINE */}
              <div className="mt-12 border-t border-black/[0.07] pt-6">
                <p className="max-w-[500px] text-[11px] leading-5 text-[#8a8d92]">
                  {text.trusted}
                </p>
              </div>
            </div>

            {/* RIGHT — DASHBOARD */}
            <div className="relative lg:pl-3">

              {/* GOLD GLOW */}
              <div
                className="pointer-events-none absolute -right-10 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#C8A45D]/[0.08] blur-3xl"
                aria-hidden="true"
              />

              {/* MAIN CARD */}
              <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#090F1C] p-3 shadow-[0_30px_80px_rgba(9,15,28,0.18)] sm:p-4">

                {/* BROWSER TOP */}
                <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>

                  <div className="hidden rounded-full border border-white/[0.08] px-4 py-1.5 text-[8px] tracking-[0.12em] text-white/30 sm:block">
                    APP.SHEFA.NEXTGEN
                  </div>

                  <div className="h-5 w-5 rounded-full border border-[#C8A45D]/50" />
                </div>

                {/* DASHBOARD */}
                <div className="p-3 sm:p-5">

                  {/* DASHBOARD HEADER */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">
                        Dashboard
                      </p>

                      <h2 className="mt-1 text-[18px] font-bold tracking-[-0.02em] text-white sm:text-[21px]">
                        {text.dashboardTitle}
                      </h2>
                    </div>

                    <div className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[8px] font-medium text-white/45">
                      {text.dashboardPeriod}
                    </div>
                  </div>

                  {/* METRICS */}
                  <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3">
                      <p className="text-[8px] text-white/35">
                        {text.reviews}
                      </p>

                      <p className="mt-2 text-[21px] font-bold tracking-[-0.04em] text-white">
                        248
                      </p>

                      <p className="mt-1 text-[8px] font-medium text-[#C8A45D]">
                        +18.4%
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3">
                      <p className="text-[8px] text-white/35">
                        {text.customers}
                      </p>

                      <p className="mt-2 text-[21px] font-bold tracking-[-0.04em] text-white">
                        1,284
                      </p>

                      <p className="mt-1 text-[8px] font-medium text-[#C8A45D]">
                        +12.8%
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3">
                      <p className="text-[8px] text-white/35">
                        {text.campaigns}
                      </p>

                      <p className="mt-2 text-[21px] font-bold tracking-[-0.04em] text-white">
                        34.7%
                      </p>

                      <p className="mt-1 text-[8px] font-medium text-[#C8A45D]">
                        +7.2%
                      </p>
                    </div>
                  </div>

                  {/* CHART */}
                  <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-semibold text-white/50">
                          Customer activity
                        </p>
                        <p className="mt-1 text-[8px] text-white/25">
                          Visits & interactions
                        </p>
                      </div>

                      <span className="flex items-center gap-1.5 text-[8px] text-[#C8A45D]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />
                        Growing
                      </span>
                    </div>

                    <div className="h-[105px]">
                      <MiniChart />
                    </div>

                    <div className="mt-2 flex justify-between text-[7px] text-white/20">
                      <span>01</span>
                      <span>07</span>
                      <span>14</span>
                      <span>21</span>
                      <span>30</span>
                    </div>
                  </div>

                  {/* BOTTOM CARDS */}
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">

                    {/* REVIEW */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/30">
                          Latest review
                        </span>

                        <ReviewStars />
                      </div>

                      <p className="mt-3 text-[10px] leading-4 text-white/65">
                        “{text.reviewText}”
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A45D]/20 text-[8px] font-bold text-[#C8A45D]">
                          SM
                        </div>

                        <div>
                          <p className="text-[8px] font-semibold text-white/60">
                            Sarah M.
                          </p>
                          <p className="text-[7px] text-white/25">
                            Verified customer
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ACTIVITY */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/30">
                        {text.recentActivity}
                      </span>

                      <div className="mt-4 flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C8A45D]/20 bg-[#C8A45D]/10">
                          <CheckIcon />
                        </div>

                        <div>
                          <p className="text-[9px] font-semibold leading-4 text-white/70">
                            {text.activityText}
                          </p>

                          <p className="mt-1 text-[7px] text-white/25">
                            2 minutes ago
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 h-px bg-white/[0.06]" />

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[8px] text-white/25">
                          Review score
                        </span>

                        <span className="text-[11px] font-bold text-[#C8A45D]">
                          4.9 / 5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING REVIEW CARD */}
              <div className="absolute -bottom-5 -left-4 hidden w-[190px] rounded-2xl border border-black/[0.08] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:block lg:-left-9">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#888b90]">
                    New review
                  </span>

                  <ReviewStars />
                </div>

                <p className="mt-2 text-[10px] font-semibold leading-4 text-[#090F1C]">
                  5-star customer feedback received.
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[8px] text-[#9a9da1]">
                    Just now
                  </span>

                  <span className="text-[8px] font-bold text-[#9b7837]">
                    +1 review
                  </span>
                </div>
              </div>

              {/* FLOATING STATUS */}
              <div className="absolute -right-2 top-12 hidden rounded-full border border-black/[0.08] bg-white px-4 py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.10)] sm:block">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9b7837] opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9b7837]" />
                  </span>

                  <span className="text-[8px] font-bold tracking-[0.08em] text-[#555960]">
                    AUTOMATION ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE / BOTTOM TRUST STRIP */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-4 lg:mt-20">
            <div className="bg-white px-5 py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b7837]">
                Reviews
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#696d73]">
                Google feedback
              </p>
            </div>

            <div className="bg-white px-5 py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b7837]">
                CRM
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#696d73]">
                Customer data
              </p>
            </div>

            <div className="bg-white px-5 py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b7837]">
                Messaging
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#696d73]">
                WhatsApp & SMS
              </p>
            </div>

            <div className="bg-white px-5 py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b7837]">
                Growth
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#696d73]">
                Marketing automation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}