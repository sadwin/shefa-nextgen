'use client';

import { useLanguage } from '../LanguageContext';

function TrendIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 9.5L5 6.5L7.2 8.2L11 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 3.5H11V6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 1.2L8.05 4.35L11.5 4.85L9 7.3L9.6 10.75L6.5 9.1L3.4 10.75L4 7.3L1.5 4.85L4.95 4.35L6.5 1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="6.5"
        cy="6.5"
        r="5.5"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M4 6.5L5.7 8.2L9 4.8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="3" cy="8" r="1" fill="currentColor" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <circle cx="13" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function Chart() {
  return (
    <svg
      viewBox="0 0 720 210"
      preserveAspectRatio="none"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* GRID */}
      <path
        d="M0 25H720M0 75H720M0 125H720M0 175H720"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />

      {/* AREA */}
      <path
        d="M0 164C32 159 42 151 71 154C100 157 111 142 143 146C174 150 185 126 214 133C244 140 254 120 286 125C318 130 332 108 360 113C390 118 403 97 433 101C463 105 480 81 508 88C540 96 552 68 581 74C611 80 625 51 652 57C680 63 696 35 720 39V210H0V164Z"
        fill="url(#areaGradient)"
      />

      {/* MAIN LINE */}
      <path
        d="M0 164C32 159 42 151 71 154C100 157 111 142 143 146C174 150 185 126 214 133C244 140 254 120 286 125C318 130 332 108 360 113C390 118 403 97 433 101C463 105 480 81 508 88C540 96 552 68 581 74C611 80 625 51 652 57C680 63 696 35 720 39"
        stroke="#C8A45D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* DOT */}
      <circle cx="720" cy="39" r="4" fill="#C8A45D" />
      <circle
        cx="720"
        cy="39"
        r="8"
        stroke="#C8A45D"
        strokeOpacity="0.2"
      />

      <defs>
        <linearGradient
          id="areaGradient"
          x1="360"
          y1="35"
          x2="360"
          y2="210"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A45D" stopOpacity="0.18" />
          <stop offset="1" stopColor="#C8A45D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function RealResults() {
  const { lang } = useLanguage();

  const isNL = lang === 'nl';

  const content = isNL
    ? {
        eyebrow: 'JOUW GROEIDASHBOARD',
        title: 'Van klantdata naar duidelijke actie.',
        description:
          'Zie wat er gebeurt na elk klantbezoek. Reviews, nieuwe klanten, campagnes en interacties — allemaal vanuit één overzicht.',
        dashboard: 'Overzicht',
        period: 'Laatste 30 dagen',
        revenue: 'Customer activity',
        reviews: 'Nieuwe reviews',
        customers: 'Nieuwe klanten',
        response: 'Campagne respons',
        score: 'Review score',
        activity: 'Klantactiviteit',
        growth: 'Groei',
        latestReview: 'Laatste review',
        verified: 'Geverifieerde klant',
        recent: 'Recente activiteit',
        received: 'Nieuwe 5-sterren review ontvangen',
        campaign: 'Campagne verstuurd',
        campaignDetail: '1.284 klanten bereikt',
        completed: 'Automatisering uitgevoerd',
        completedDetail: 'Follow-up succesvol verstuurd',
        ratingText: 'Uitstekende service. We komen zeker terug.',
        seeAll: 'Bekijk alle activiteit',
      }
    : {
        eyebrow: 'YOUR GROWTH DASHBOARD',
        title: 'Turn customer data into clear action.',
        description:
          'See what happens after every customer visit. Reviews, new customers, campaigns and interactions — all in one clear view.',
        dashboard: 'Overview',
        period: 'Last 30 days',
        revenue: 'Customer activity',
        reviews: 'New reviews',
        customers: 'New customers',
        response: 'Campaign response',
        score: 'Review score',
        activity: 'Customer activity',
        growth: 'Growth',
        latestReview: 'Latest review',
        verified: 'Verified customer',
        recent: 'Recent activity',
        received: 'New 5-star review received',
        campaign: 'Campaign sent',
        campaignDetail: '1,284 customers reached',
        completed: 'Automation completed',
        completedDetail: 'Follow-up sent successfully',
        ratingText: 'Excellent service. We will definitely come back.',
        seeAll: 'View all activity',
      };

  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#090F1C] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND */}
      <div
        className="pointer-events-none absolute -left-64 top-[-200px] h-[600px] w-[600px] rounded-full border border-[#C8A45D]/[0.08]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-60 bottom-[-250px] h-[700px] w-[700px] rounded-full border border-white/[0.035]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C8A45D]" />

              <span className="text-[10px] font-bold tracking-[0.24em] text-[#C8A45D]">
                {content.eyebrow}
              </span>
            </div>

            <h2 className="mt-6 max-w-[780px] text-[39px] font-extrabold leading-[1.03] tracking-[-0.05em] text-white sm:text-[53px]">
              {content.title}
            </h2>
          </div>

          <p className="max-w-[470px] text-[14px] leading-7 text-white/40 lg:justify-self-end">
            {content.description}
          </p>
        </div>

        {/* DASHBOARD */}
        <div className="relative mt-16 overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0e1625] shadow-[0_30px_90px_rgba(0,0,0,0.30)]">

          {/* TOP BAR */}
          <div className="flex h-[68px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C8A45D]/20 bg-[#C8A45D]/[0.08] text-[#C8A45D]">
                <span className="text-[12px] font-bold">S</span>
              </div>

              <div>
                <p className="text-[10px] font-bold text-white/70">
                  Shefa
                </p>

                <p className="mt-0.5 text-[8px] text-white/25">
                  Nextgen Systems
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <span className="rounded-full border border-white/[0.07] px-4 py-2 text-[8px] font-semibold text-white/35">
                {content.period}
              </span>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] text-white/35"
                aria-label="More options"
              >
                <MoreIcon />
              </button>
            </div>
          </div>

          {/* DASHBOARD BODY */}
          <div className="p-4 sm:p-7">

            {/* METRICS */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium text-white/35">
                    {content.reviews}
                  </span>

                  <span className="text-[#C8A45D]">
                    <StarIcon />
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <span className="text-[28px] font-bold tracking-[-0.05em] text-white">
                    248
                  </span>

                  <span className="mb-1 flex items-center gap-1 text-[8px] font-bold text-[#C8A45D]">
                    <TrendIcon />
                    18.4%
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium text-white/35">
                    {content.customers}
                  </span>

                  <span className="text-[#C8A45D]">
                    <TrendIcon />
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <span className="text-[28px] font-bold tracking-[-0.05em] text-white">
                    1,284
                  </span>

                  <span className="mb-1 flex items-center gap-1 text-[8px] font-bold text-[#C8A45D]">
                    <TrendIcon />
                    12.8%
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium text-white/35">
                    {content.response}
                  </span>

                  <span className="text-[#C8A45D]">
                    <TrendIcon />
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <span className="text-[28px] font-bold tracking-[-0.05em] text-white">
                    34.7%
                  </span>

                  <span className="mb-1 flex items-center gap-1 text-[8px] font-bold text-[#C8A45D]">
                    <TrendIcon />
                    7.2%
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium text-white/35">
                    {content.score}
                  </span>

                  <span className="text-[#C8A45D]">
                    <StarIcon />
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <span className="text-[28px] font-bold tracking-[-0.05em] text-white">
                    4.9
                  </span>

                  <span className="mb-1 text-[8px] font-medium text-white/25">
                    / 5.0
                  </span>
                </div>
              </div>
            </div>

            {/* MAIN GRID */}
            <div className="mt-3 grid gap-3 lg:grid-cols-[1.55fr_0.75fr]">

              {/* CHART */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-white/65">
                      {content.activity}
                    </p>

                    <p className="mt-1 text-[8px] text-white/25">
                      Customer visits, interactions and reviews
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#C8A45D]/15 bg-[#C8A45D]/[0.06] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />

                    <span className="text-[8px] font-bold text-[#C8A45D]">
                      {content.growth}
                    </span>
                  </div>
                </div>

                <div className="mt-8 h-[210px]">
                  <Chart />
                </div>

                <div className="mt-3 flex justify-between border-t border-white/[0.05] pt-3 text-[7px] text-white/20">
                  <span>01</span>
                  <span>05</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                </div>
              </div>

              {/* LATEST REVIEW */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">

                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold text-white/65">
                    {content.latestReview}
                  </p>

                  <div className="flex gap-0.5 text-[#C8A45D]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} />
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[17px] font-semibold leading-7 tracking-[-0.02em] text-white">
                    “{content.ratingText}”
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A45D]/10 text-[9px] font-bold text-[#C8A45D]">
                    SM
                  </div>

                  <div>
                    <p className="text-[9px] font-bold text-white/60">
                      Sarah M.
                    </p>

                    <p className="mt-0.5 text-[7px] text-white/25">
                      {content.verified}
                    </p>
                  </div>

                  <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-[#C8A45D]/20 text-[#C8A45D]">
                    <CheckIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIVITY TABLE */}
            <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.025]">

              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-6">
                <p className="text-[10px] font-bold text-white/65">
                  {content.recent}
                </p>

                <button
                  type="button"
                  className="text-[8px] font-semibold text-[#C8A45D]"
                >
                  {content.seeAll}
                </button>
              </div>

              {/* ACTIVITY 1 */}
              <div className="flex items-center gap-4 border-b border-white/[0.05] px-5 py-4 sm:px-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C8A45D]/[0.08] text-[#C8A45D]">
                  <StarIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-semibold text-white/65">
                    {content.received}
                  </p>

                  <p className="mt-1 text-[7px] text-white/25">
                    Sarah M. · Google Reviews
                  </p>
                </div>

                <span className="hidden text-[7px] text-white/20 sm:block">
                  2 min ago
                </span>
              </div>

              {/* ACTIVITY 2 */}
              <div className="flex items-center gap-4 border-b border-white/[0.05] px-5 py-4 sm:px-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-white/45">
                  <TrendIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-semibold text-white/65">
                    {content.campaign}
                  </p>

                  <p className="mt-1 text-[7px] text-white/25">
                    {content.campaignDetail}
                  </p>
                </div>

                <span className="hidden text-[7px] text-white/20 sm:block">
                  18 min ago
                </span>
              </div>

              {/* ACTIVITY 3 */}
              <div className="flex items-center gap-4 px-5 py-4 sm:px-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-white/45">
                  <CheckIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-semibold text-white/65">
                    {content.completed}
                  </p>

                  <p className="mt-1 text-[7px] text-white/25">
                    {content.completedDetail}
                  </p>
                </div>

                <span className="hidden text-[7px] text-white/20 sm:block">
                  42 min ago
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A45D]/20 bg-[#C8A45D]/[0.06] text-[#C8A45D]">
              <CheckIcon />
            </span>

            <p className="text-[10px] leading-5 text-white/35">
              {isNL
                ? 'Elke interactie wordt een kans om de klantrelatie te versterken.'
                : 'Every interaction becomes an opportunity to strengthen the customer relationship.'}
            </p>
          </div>

          <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#C8A45D]">
            Shefa Nextgen Systems
          </div>
        </div>
      </div>
    </section>
  );
}