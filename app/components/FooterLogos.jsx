'use client';

import { useLanguage } from '../LanguageContext';

const STRIPE_URL = 'https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01';

function MetatronMark() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="17" cy="17" r="13.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="17" r="7.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M17 3.5 28.69 10.25v13.5L17 30.5 5.31 23.75v-13.5L17 3.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M17 9.5 23.5 13.25v7.5L17 24.5l-6.5-3.75v-7.5L17 9.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

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

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.75-2-5.5-4.7-5.5-2.16 0-3.13 1.19-3.67 2.02V8.5H9.15V21h3.48v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.32V21H21v-7.15Z" />
    </svg>
  );
}

export default function FooterLogos() {
  const { lang } = useLanguage();
  const isNL = lang === 'nl';

  return (
    <footer className="relative overflow-hidden bg-[#080d18] text-white">
      {/* Large geometric watermark */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] opacity-[0.045]">
        <svg viewBox="0 0 620 620" className="h-full w-full">
          <circle
            cx="310"
            cy="310"
            r="240"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle
            cx="310"
            cy="310"
            r="165"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle
            cx="310"
            cy="310"
            r="85"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M310 40 544 175v270L310 580 76 445V175L310 40Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M310 145 453 227.5v165L310 475l-143-82.5v-165L310 145Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Final CTA */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b39458]" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#c7aa70]">
                {isNL ? 'VOLGENDE STAP' : 'NEXT STEP'}
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]">
              {isNL
                ? 'Maak van klantrelaties een groeisysteem.'
                : 'Turn customer relationships into a growth system.'}
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              {isNL
                ? 'Breng reviews, klantdata, messaging en marketing samen in één systeem.'
                : 'Bring reviews, customer data, messaging and marketing together in one connected system.'}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-[#080d18] transition hover:bg-[#f0eee8]"
              >
                {isNL ? 'Aan de slag' : 'Get started'}

                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-medium text-white/75 transition hover:border-white/30 hover:text-white"
              >
                {isNL ? 'Bekijk hoe het werkt' : 'See how it works'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer navigation */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-white"
              >
                <span className="text-[#c7aa70]">
                  <MetatronMark />
                </span>

                <span>
                  <span className="block text-[13px] font-semibold tracking-[0.18em]">
                    SHEFA
                  </span>
                  <span className="block text-[9px] tracking-[0.28em] text-white/35">
                    NEXTGEN SYSTEMS
                  </span>
                </span>
              </a>

              <p className="mt-6 max-w-xs text-sm leading-6 text-white/40">
                {isNL
                  ? 'Een verbonden systeem voor reviews, klantdata, messaging en groei.'
                  : 'A connected system for reviews, customer data, messaging and growth.'}
              </p>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition hover:border-white/25 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                {isNL ? 'Product' : 'Product'}
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                <a
                  href="#features"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isNL ? 'Functies' : 'Features'}
                </a>

                <a
                  href="#how-it-works"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isNL ? 'Hoe het werkt' : 'How it works'}
                </a>

                <a
                  href="#industries"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isNL ? 'Sectoren' : 'Industries'}
                </a>

                <a
                  href="#pricing"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isNL ? 'Prijzen' : 'Pricing'}
                </a>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                {isNL ? 'Bedrijf' : 'Company'}
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                <a
                  href="#"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isNL ? 'Over Shefa' : 'About Shefa'}
                </a>

                <a
                  href="#how-it-works"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isNL ? 'Onze aanpak' : 'Our approach'}
                </a>

                <a
                  href="#industries"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isNL ? 'Voor bedrijven' : 'For businesses'}
                </a>
              </nav>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                {isNL ? 'Begin vandaag' : 'Start today'}
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/45">
                {isNL
                  ? 'Klaar om meer uit elk klantbezoek te halen?'
                  : 'Ready to get more from every customer visit?'}
              </p>

              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c7aa70] transition hover:text-white"
              >
                {isNL ? 'Aan de slag' : 'Get started'}
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} Shefa Nextgen Systems.{' '}
              {isNL ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#"
                className="text-xs text-white/25 transition hover:text-white/60"
              >
                {isNL ? 'Privacy' : 'Privacy'}
              </a>

              <a
                href="#"
                className="text-xs text-white/25 transition hover:text-white/60"
              >
                {isNL ? 'Voorwaarden' : 'Terms'}
              </a>

              <a
                href="#"
                className="text-xs text-white/25 transition hover:text-white/60"
              >
                {isNL ? 'Cookies' : 'Cookies'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}