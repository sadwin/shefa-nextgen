'use client';

import { useLanguage } from '../LanguageContext';

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
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="7" y="8" width="34" height="30" rx="5" stroke="currentColor" />
      <path d="M13 16H29" stroke="currentColor" strokeLinecap="round" />
      <path d="M13 22H24" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M32 25L33.5 28.1L37 28.6L34.5 31L35.1 34.5L32 32.8L28.9 34.5L29.5 31L27 28.6L30.5 28.1L32 25Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CustomerIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="16" r="6" stroke="currentColor" />
      <path
        d="M12 38C12.8 30.8 17.2 27 24 27C30.8 27 35.2 30.8 36 38"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M34 14L38 18" stroke="currentColor" strokeLinecap="round" />
      <path d="M38 14L34 18" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M8 11C8 8.8 9.8 7 12 7H36C38.2 7 40 8.8 40 11V29C40 31.2 38.2 33 36 33H21L13 40V33H12C9.8 33 8 31.2 8 29V11Z"
        stroke="currentColor"
      />
      <path d="M15 17H33" stroke="currentColor" strokeLinecap="round" />
      <path d="M15 23H28" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function CampaignIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M9 24L35 13V35L9 24Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M35 19L40 17V31L35 29" stroke="currentColor" />
      <path
        d="M13 28L15 36C15.4 37.7 16.9 39 18.7 39H21L18 26"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M9 38V10"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9 38H40"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14 31L21 25L26 28L37 16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="31" r="1.5" fill="currentColor" />
      <circle cx="21" cy="25" r="1.5" fill="currentColor" />
      <circle cx="26" cy="28" r="1.5" fill="currentColor" />
      <circle cx="37" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="7" y="8" width="14" height="14" rx="3" stroke="currentColor" />
      <rect x="27" y="8" width="14" height="14" rx="3" stroke="currentColor" />
      <rect x="7" y="28" width="14" height="14" rx="3" stroke="currentColor" />
      <rect x="27" y="28" width="14" height="14" rx="3" stroke="currentColor" />
      <path d="M21 15H27" stroke="currentColor" />
      <path d="M21 35H27" stroke="currentColor" />
      <path d="M14 22V28" stroke="currentColor" />
      <path d="M34 22V28" stroke="currentColor" />
    </svg>
  );
}

const features = [
  {
    number: '01',
    key: 'reviews',
    Icon: ReviewIcon,
  },
  {
    number: '02',
    key: 'customers',
    Icon: CustomerIcon,
  },
  {
    number: '03',
    key: 'messaging',
    Icon: MessageIcon,
  },
  {
    number: '04',
    key: 'campaigns',
    Icon: CampaignIcon,
  },
  {
    number: '05',
    key: 'analytics',
    Icon: AnalyticsIcon,
  },
  {
    number: '06',
    key: 'system',
    Icon: SystemIcon,
  },
];

export default function Features() {
  const { lang } = useLanguage();

  const isNL = lang === 'nl';

  const content = isNL
    ? {
        eyebrow: 'ÉÉN PLATFORM',
        title: 'Alles wat je nodig hebt om klantrelaties te laten groeien.',
        description:
          'Geen losse tools. Shefa brengt reviews, klantdata, messaging en marketing samen in één systeem.',
        learnMore: 'Meer informatie',
        features: {
          reviews: {
            title: 'Review automation',
            text: 'Vraag automatisch om feedback en maak van tevreden klanten nieuwe reviews.',
          },
          customers: {
            title: 'Customer database',
            text: 'Bouw één centraal klantprofiel op met bezoeken, contactgegevens en interacties.',
          },
          messaging: {
            title: 'WhatsApp & SMS',
            text: 'Bereik klanten op het juiste moment met persoonlijke, geautomatiseerde berichten.',
          },
          campaigns: {
            title: 'Marketing campaigns',
            text: 'Activeer bestaande klanten opnieuw met gerichte campagnes en aanbiedingen.',
          },
          analytics: {
            title: 'Analytics',
            text: 'Zie wat werkt met duidelijke inzichten in reviews, klanten en campagnes.',
          },
          system: {
            title: 'One connected system',
            text: 'Alles werkt samen zodat je team minder tools beheert en meer resultaat behaalt.',
          },
        },
      }
    : {
        eyebrow: 'ONE PLATFORM',
        title: 'Everything you need to grow customer relationships.',
        description:
          'No disconnected tools. Shefa brings reviews, customer data, messaging and marketing together in one system.',
        learnMore: 'Learn more',
        features: {
          reviews: {
            title: 'Review automation',
            text: 'Automatically ask for feedback and turn happy customers into new reviews.',
          },
          customers: {
            title: 'Customer database',
            text: 'Build one central customer profile with visits, contact details and interactions.',
          },
          messaging: {
            title: 'WhatsApp & SMS',
            text: 'Reach customers at the right moment with personal, automated messages.',
          },
          campaigns: {
            title: 'Marketing campaigns',
            text: 'Bring existing customers back with targeted campaigns and relevant offers.',
          },
          analytics: {
            title: 'Analytics',
            text: 'Understand what works with clear insights into reviews, customers and campaigns.',
          },
          system: {
            title: 'One connected system',
            text: 'Everything works together so your team manages fewer tools and gets more done.',
          },
        },
      };

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#9b7837]" />

              <span className="text-[10px] font-bold tracking-[0.24em] text-[#9b7837]">
                {content.eyebrow}
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-[760px] text-[38px] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#090F1C] sm:text-[50px]">
              {content.title}
            </h2>

            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#71757b] sm:text-[16px]">
              {content.description}
            </p>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-black/[0.07] bg-black/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ number, key, Icon }) => {
            const item = content.features[key];

            return (
              <article
                key={key}
                className="group relative bg-white p-7 transition-all duration-300 hover:bg-[#fafaf8] sm:p-8 lg:p-9"
              >
                {/* TOP ROW */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#9b7837]/20 bg-[#9b7837]/[0.06] text-[#9b7837] transition-all duration-300 group-hover:border-[#9b7837]/40 group-hover:bg-[#9b7837]/[0.10]">
                    <Icon />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.18em] text-black/20">
                    {number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="mt-10">
                  <h3 className="text-[20px] font-bold tracking-[-0.025em] text-[#090F1C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[330px] text-[13px] leading-6 text-[#777b81]">
                    {item.text}
                  </p>
                </div>

                {/* LINK */}
                <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#9b7837]">
                  <span>{content.learnMore}</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    <ArrowUpRight />
                  </span>
                </div>

                {/* HOVER LINE */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9b7837] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-black/[0.07] pt-7 sm:flex-row sm:items-center">
          <p className="max-w-[620px] text-[12px] leading-5 text-[#8a8d92]">
            {isNL
              ? 'Van het eerste bericht tot de volgende review: elke stap is verbonden.'
              : 'From the first message to the next review: every step is connected.'}
          </p>

          <a
            href="#how-it-works"
            className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#090F1C]"
          >
            {isNL ? 'Ontdek hoe het werkt' : 'Discover how it works'}

            <span className="text-[#9b7837] transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}