'use client';

import { useLanguage } from '../LanguageContext';

const STRIPE_URL = 'https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01';

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 9.2 7.1 12.3 14 5.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
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

function SparkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 2.5v3M10 14.5v3M2.5 10h3M14.5 10h3M4.7 4.7l2.1 2.1M13.2 13.2l2.1 2.1M15.3 4.7l-2.1 2.1M6.8 13.2l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Pricing() {
  const { lang } = useLanguage();
  const isNL = lang === 'nl';

  const content = {
    en: {
      eyebrow: 'PRICING',
      title: 'One system. Everything you need to grow.',
      description:
        'Bring reviews, customer data, messaging and marketing into one simple operating system for your business.',
      plan: 'Shefa Nextgen',
      planDescription:
        'The complete customer growth system for businesses that want more from every visit.',
      included: 'Everything included',
      features: [
        'Automated review requests',
        'Customer database & profiles',
        'WhatsApp & SMS communication',
        'Marketing campaigns',
        'Customer activity tracking',
        'Performance analytics',
        'One connected workspace',
        'Ongoing system improvements',
      ],
      cta: 'Get started',
      note: 'No complicated setup. Start with the system and scale from there.',
      customTitle: 'Built around your business',
      customText:
        'Every business has a different customer journey. Shefa is designed to fit your workflow instead of forcing you into one.',
      points: [
        'Simple onboarding',
        'Flexible customer journeys',
        'Clear performance visibility',
      ],
    },
    nl: {
      eyebrow: 'PRIJZEN',
      title: 'Één systeem. Alles wat je nodig hebt om te groeien.',
      description:
        'Breng reviews, klantdata, messaging en marketing samen in één eenvoudig systeem voor je bedrijf.',
      plan: 'Shefa Nextgen',
      planDescription:
        'Het complete klantgroeisysteem voor bedrijven die meer uit elk bezoek willen halen.',
      included: 'Alles inbegrepen',
      features: [
        'Geautomatiseerde reviewverzoeken',
        'Klantdatabase & profielen',
        'WhatsApp & SMS communicatie',
        'Marketingcampagnes',
        'Klantactiviteit bijhouden',
        'Performance analytics',
        'Eén verbonden werkplek',
        'Doorlopende systeemverbeteringen',
      ],
      cta: 'Aan de slag',
      note: 'Geen ingewikkelde setup. Begin met het systeem en schaal daarna verder.',
      customTitle: 'Gebouwd rond jouw bedrijf',
      customText:
        'Elk bedrijf heeft een andere klantreis. Shefa past zich aan jouw workflow aan in plaats van andersom.',
      points: [
        'Eenvoudige onboarding',
        'Flexibele klantreizen',
        'Duidelijk inzicht in prestaties',
      ],
    },
  };

  const t = isNL ? content.nl : content.en;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-slate-200 bg-[#f7f6f2] py-24 sm:py-28"
    >
      {/* subtle geometric background */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] opacity-[0.035]">
        <svg viewBox="0 0 520 520" className="h-full w-full">
          <circle
            cx="260"
            cy="260"
            r="190"
            fill="none"
            stroke="#0a1020"
            strokeWidth="1"
          />
          <circle
            cx="260"
            cy="260"
            r="130"
            fill="none"
            stroke="#0a1020"
            strokeWidth="1"
          />
          <path
            d="M260 40 450 150v220L260 480 70 370V150L260 40Z"
            fill="none"
            stroke="#0a1020"
            strokeWidth="1"
          />
          <path
            d="M260 130 372 195v130L260 390 148 325V195L260 130Z"
            fill="none"
            stroke="#0a1020"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b39458]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#8b6c34]">
              {t.eyebrow}
            </span>
            <span className="h-px w-8 bg-[#b39458]" />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-[#0a1020] sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            {t.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {t.description}
          </p>
        </div>

        {/* Pricing layout */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main plan */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#d8d4ca] bg-white shadow-[0_20px_60px_rgba(10,16,32,0.06)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#b39458]" />

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d9cfbb] bg-[#faf8f2] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6c34]">
                    <SparkIcon />
                    Complete system
                  </div>

                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#0a1020] sm:text-3xl">
                    {t.plan}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                    {t.planDescription}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="text-right">
                    <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                      Simple
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-[#0a1020]">
                      One system
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-8 h-px bg-slate-200" />

              <div>
                <h4 className="text-sm font-semibold text-[#0a1020]">
                  {t.included}
                </h4>

                <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {t.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4f0e7] text-[#94743d]">
                        <CheckIcon />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={STRIPE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0a1020] px-7 text-sm font-semibold text-white transition hover:bg-[#161e31]"
                >
                  {t.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowIcon />
                  </span>
                </a>

                <span className="text-xs leading-5 text-slate-400">
                  {t.note}
                </span>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="rounded-[28px] bg-[#0a1020] p-7 text-white sm:p-9 lg:p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-[#d4b978]">
              <SparkIcon />
            </div>

            <h3 className="mt-7 max-w-sm text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
              {t.customTitle}
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base">
              {t.customText}
            </p>

            <div className="mt-8 space-y-4">
              {t.points.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-4 border-t border-white/10 pt-4"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#bda56d]">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-white/80">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                  Shefa
                </span>
                <span className="text-xs text-white/35">
                  Nextgen Systems
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b39458]" />
            No unnecessary complexity
          </div>

          <div className="hidden h-4 w-px bg-slate-300 sm:block" />

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b39458]" />
            Built for customer growth
          </div>

          <div className="hidden h-4 w-px bg-slate-300 sm:block" />

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b39458]" />
            One connected platform
          </div>
        </div>
      </div>
    </section>
  );
}