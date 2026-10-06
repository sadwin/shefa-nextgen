'use client';

import { useLanguage } from '../LanguageContext';

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

function IndustryIcon({ type }) {
  if (type === 'retail') {
    return (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path
          d="M4 9h17l-1.5-5h-14L4 9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 9v11h15V9M9 20v-6h7v6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === 'hospitality') {
    return (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path
          d="M4 11h17v8H4zM6 11V7h5v4M15 11V7h4v4M4 19v2M21 19v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'health') {
    return (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path
          d="M12.5 21s-7.5-4.5-7.5-10A4.5 4.5 0 0 1 12.5 8 4.5 4.5 0 0 1 20 11c0 5.5-7.5 10-7.5 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 12h7M12.5 8.5v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'services') {
    return (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <circle cx="12.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 20c.7-3.5 2.8-5.5 6.5-5.5S18.3 16.5 19 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 11h3M17 11h3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <rect
        x="4"
        y="5"
        width="17"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 9h9M8 13h9M8 17h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Industries() {
  const { lang } = useLanguage();
  const isNL = lang === 'nl';

  const industries = isNL
    ? [
        {
          type: 'retail',
          number: '01',
          title: 'Retail',
          text: 'Maak van meer winkelbezoeken meer reviews, terugkerende klanten en omzet.',
        },
        {
          type: 'hospitality',
          number: '02',
          title: 'Hospitality',
          text: 'Blijf verbonden met gasten voor, tijdens en na hun bezoek.',
        },
        {
          type: 'health',
          number: '03',
          title: 'Health & Wellness',
          text: 'Bouw langdurige klantrelaties met slimme follow-ups en communicatie.',
        },
        {
          type: 'services',
          number: '04',
          title: 'Professional Services',
          text: 'Automatiseer klantcontact zonder dat persoonlijke service verdwijnt.',
        },
        {
          type: 'other',
          number: '05',
          title: 'Local Business',
          text: 'Een eenvoudig systeem voor bedrijven waar vertrouwen en herhaalbezoek tellen.',
        },
      ]
    : [
        {
          type: 'retail',
          number: '01',
          title: 'Retail',
          text: 'Turn more store visits into reviews, returning customers and revenue.',
        },
        {
          type: 'hospitality',
          number: '02',
          title: 'Hospitality',
          text: 'Stay connected with guests before, during and after their visit.',
        },
        {
          type: 'health',
          number: '03',
          title: 'Health & Wellness',
          text: 'Build stronger customer relationships with smart follow-ups and messaging.',
        },
        {
          type: 'services',
          number: '04',
          title: 'Professional Services',
          text: 'Automate customer communication without losing the personal touch.',
        },
        {
          type: 'other',
          number: '05',
          title: 'Local Business',
          text: 'A simple system for businesses where trust and repeat visits matter.',
        },
      ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b39458]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#8b6c34]">
                {isNL ? 'VOOR WIE' : 'WHO IT IS FOR'}
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.035em] text-[#0a1020] sm:text-5xl">
              {isNL
                ? 'Gebouwd voor bedrijven waar elke klant telt.'
                : 'Built for businesses where every customer matters.'}
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-7 text-slate-600 sm:text-lg">
              {isNL
                ? 'Shefa helpt bedrijven klantrelaties structureel te verbeteren — van de eerste interactie tot het volgende bezoek.'
                : 'Shefa helps businesses turn customer relationships into a repeatable growth system — from the first interaction to the next visit.'}
            </p>
          </div>
        </div>

        {/* Industry grid */}
        <div className="mt-16 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry.number}
              className="group relative min-h-[310px] border-b border-r border-slate-200 bg-white p-7 transition-colors duration-300 hover:bg-[#faf9f5] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-300">
                  {industry.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#92733c] transition-all duration-300 group-hover:border-[#c8b486] group-hover:bg-[#f5f1e8]">
                  <IndustryIcon type={industry.type} />
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0a1020]">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {industry.text}
                </p>
              </div>

              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:right-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#92733c]">
                  {isNL ? 'Meer ontdekken' : 'Explore'}
                </span>

                <span className="text-[#92733c]">
                  <ArrowIcon />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            {isNL
              ? 'Niet zeker of Shefa bij jouw bedrijf past? Dezelfde principes werken overal waar klantdata, reviews en follow-up samenkomen.'
              : 'Not sure if Shefa fits your business? The same principles work anywhere customer data, reviews and follow-up come together.'}
          </p>

          <a
            href="#pricing"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#0a1020]"
          >
            {isNL ? 'Bekijk wat inbegrepen is' : 'See what is included'}

            <span className="text-[#92733c] transition-transform duration-200 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}