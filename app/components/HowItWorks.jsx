'use client';

import { useLanguage } from '../LanguageContext';

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 9H15M10 4L15 9L10 14"
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
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M4.5 7L6.2 8.7L9.7 5.3"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect
        x="6"
        y="8"
        width="28"
        height="26"
        rx="4"
        stroke="currentColor"
      />
      <path d="M6 15H34" stroke="currentColor" />
      <path d="M12 5V11" stroke="currentColor" strokeLinecap="round" />
      <path d="M28 5V11" stroke="currentColor" strokeLinecap="round" />
      <circle cx="14" cy="21" r="1.5" fill="currentColor" />
      <circle cx="20" cy="21" r="1.5" fill="currentColor" />
      <circle cx="26" cy="21" r="1.5" fill="currentColor" />
      <circle cx="14" cy="27" r="1.5" fill="currentColor" />
      <circle cx="20" cy="27" r="1.5" fill="currentColor" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M7 9C7 6.8 8.8 5 11 5H29C31.2 5 33 6.8 33 9V25C33 27.2 31.2 29 29 29H19L12 35V29H11C8.8 29 7 27.2 7 25V9Z"
        stroke="currentColor"
      />
      <path
        d="M13 13H27"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13 19H24"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 5L24.2 13.5L33.5 14.85L26.75 21.45L28.35 30.75L20 26.35L11.65 30.75L13.25 21.45L6.5 14.85L15.8 13.5L20 5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RepeatIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M8 13H29"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M25 9L29 13L25 17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 27H11"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15 23L11 27L15 31"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stepIcons = {
  visit: CalendarIcon,
  message: MessageIcon,
  review: StarIcon,
  return: RepeatIcon,
};

export default function HowItWorks() {
  const { lang } = useLanguage();

  const isNL = lang === 'nl';

  const content = isNL
    ? {
        eyebrow: 'HOE HET WERKT',
        title: (
          <>
            Eén bezoek. 
            <span className="block text-[#9b7837]">
              Vier kansen om te groeien.
            </span>
          </>
        ),
        description:
          'Shefa automatiseert de belangrijkste momenten na een klantbezoek — van de eerste follow-up tot de volgende review en het volgende bezoek.',
        steps: [
          {
            number: '01',
            key: 'visit',
            title: 'Klantbezoek',
            text: 'Een klant rondt een afspraak, aankoop of service af.',
          },
          {
            number: '02',
            key: 'message',
            title: 'Shefa volgt op',
            text: 'Op het juiste moment wordt automatisch een WhatsApp- of SMS-bericht verstuurd.',
          },
          {
            number: '03',
            key: 'review',
            title: 'Klant reageert',
            text: 'Tevreden klanten worden eenvoudig naar een Google review geleid.',
          },
          {
            number: '04',
            key: 'return',
            title: 'Klant komt terug',
            text: 'Gerichte campagnes zorgen ervoor dat klanten opnieuw contact opnemen.',
          },
        ],
        messageLabel: 'AUTOMATISCH BERICHT',
        message:
          'Hi Sarah, bedankt voor je bezoek vandaag. Hoe was je ervaring?',
        messageButton: 'Laat een review achter',
        automation: 'Automatisering actief',
        result: 'Nieuwe 5-sterren review',
      }
    : {
        eyebrow: 'HOW IT WORKS',
        title: (
          <>
            One visit. 
            <span className="block text-[#9b7837]">
              Four opportunities to grow.
            </span>
          </>
        ),
        description:
          'Shefa automates the most important moments after a customer visit — from the first follow-up to the next review and the next visit.',
        steps: [
          {
            number: '01',
            key: 'visit',
            title: 'Customer visits',
            text: 'A customer finishes an appointment, purchase or service.',
          },
          {
            number: '02',
            key: 'message',
            title: 'Shefa follows up',
            text: 'A WhatsApp or SMS message is automatically sent at the right moment.',
          },
          {
            number: '03',
            key: 'review',
            title: 'Customer responds',
            text: 'Happy customers are guided to leave a Google review with minimal effort.',
          },
          {
            number: '04',
            key: 'return',
            title: 'Customer returns',
            text: 'Targeted campaigns bring customers back when it matters.',
          },
        ],
        messageLabel: 'AUTOMATED MESSAGE',
        message:
          'Hi Sarah, thanks for visiting us today. How was your experience?',
        messageButton: 'Leave a review',
        automation: 'Automation active',
        result: 'New 5-star review',
      };

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-black/[0.07] bg-[#f7f7f5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* SUBTLE BACKGROUND */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-[#9b7837]/[0.06]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-20 top-40 h-[360px] w-[360px] rounded-full border border-[#9b7837]/[0.05]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#9b7837]" />

              <span className="text-[10px] font-bold tracking-[0.24em] text-[#9b7837]">
                {content.eyebrow}
              </span>
            </div>

            <h2 className="mt-6 max-w-[800px] text-[40px] font-extrabold leading-[1.02] tracking-[-0.05em] text-[#090F1C] sm:text-[54px]">
              {content.title}
            </h2>
          </div>

          <p className="max-w-[470px] text-[14px] leading-7 text-[#70747a] lg:justify-self-end">
            {content.description}
          </p>
        </div>

        {/* PROCESS */}
        <div className="relative mt-16">

          {/* CONNECTING LINE */}
          <div
            className="absolute left-[8%] right-[8%] top-[39px] hidden h-px bg-black/[0.09] lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {content.steps.map((step, index) => {
              const Icon = stepIcons[step.key];

              return (
                <article
                  key={step.number}
                  className="group relative rounded-[24px] border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#9b7837]/30 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:p-7"
                >
                  {/* NUMBER / ICON */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#9b7837]/20 bg-[#f7f7f5] text-[#9b7837] transition-colors duration-300 group-hover:border-[#9b7837]/40 group-hover:bg-[#9b7837]/[0.07]">
                      <Icon />
                    </div>

                    <span className="text-[11px] font-bold tracking-[0.16em] text-black/20">
                      {step.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-9">
                    <h3 className="text-[19px] font-bold tracking-[-0.025em] text-[#090F1C]">
                      {step.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-[#777b81]">
                      {step.text}
                    </p>
                  </div>

                  {/* STEP INDICATOR */}
                  <div className="mt-6 flex items-center gap-2">
                    <span
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === 0
                          ? 'w-8 bg-[#9b7837]'
                          : 'w-2 bg-black/10 group-hover:bg-[#9b7837]/40'
                      }`}
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-black/25">
                      {index === 0
                        ? isNL
                          ? 'Start'
                          : 'Start'
                        : index === 1
                          ? isNL
                            ? 'Automatisch'
                            : 'Automatic'
                          : index === 2
                            ? isNL
                              ? 'Feedback'
                              : 'Feedback'
                            : isNL
                              ? 'Groei'
                              : 'Growth'}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* MESSAGE DEMO */}
        <div className="mt-16 overflow-hidden rounded-[28px] bg-[#090F1C] shadow-[0_25px_70px_rgba(9,15,28,0.14)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}
            <div className="relative p-7 sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -left-24 -top-24 h-[280px] w-[280px] rounded-full border border-[#C8A45D]/[0.10]"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#C8A45D]" />

                  <span className="text-[9px] font-bold tracking-[0.22em] text-[#C8A45D]">
                    {content.messageLabel}
                  </span>
                </div>

                <h3 className="mt-6 max-w-[430px] text-[29px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-[36px]">
                  {isNL
                    ? 'Het juiste bericht. Op het juiste moment.'
                    : 'The right message. At the right moment.'}
                </h3>

                <p className="mt-5 max-w-[420px] text-[13px] leading-6 text-white/45">
                  {isNL
                    ? 'Geen handmatig opvolgen. Shefa verstuurt automatisch de juiste boodschap nadat een klant je bedrijf heeft bezocht.'
                    : 'No manual follow-up. Shefa automatically sends the right message after a customer visits your business.'}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 text-[#C8A45D]">
                    <CheckIcon />
                  </span>

                  <span className="text-[10px] font-semibold text-white/55">
                    {content.automation}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — PHONE / MESSAGE */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#0e1625] p-7 sm:p-10">

              {/* GRID */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
                  backgroundSize: '34px 34px',
                }}
                aria-hidden="true"
              />

              {/* PHONE */}
              <div className="relative w-full max-w-[310px] rounded-[30px] border border-white/[0.10] bg-[#f5f5f3] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">

                {/* PHONE TOP */}
                <div className="flex h-10 items-center justify-center">
                  <div className="h-1.5 w-16 rounded-full bg-black/10" />
                </div>

                <div className="rounded-[23px] bg-white p-5">

                  {/* CONTACT */}
                  <div className="flex items-center gap-3 border-b border-black/[0.06] pb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#090F1C] text-[9px] font-bold text-[#C8A45D]">
                      S
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-[#090F1C]">
                        Shefa
                      </p>

                      <p className="mt-0.5 text-[8px] text-[#9a9da1]">
                        WhatsApp
                      </p>
                    </div>

                    <span className="ml-auto h-2 w-2 rounded-full bg-[#7b9b67]" />
                  </div>

                  {/* DATE */}
                  <div className="py-4 text-center">
                    <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-black/25">
                      Today
                    </span>
                  </div>

                  {/* MESSAGE */}
                  <div className="rounded-2xl rounded-tl-sm bg-[#f3f1eb] p-4">
                    <p className="text-[11px] leading-5 text-[#30343a]">
                      {content.message}
                    </p>

                    <p className="mt-2 text-right text-[7px] text-black/25">
                      14:32
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-between rounded-xl border border-[#9b7837]/20 bg-[#9b7837]/[0.06] px-4 py-3 text-left"
                  >
                    <span className="text-[9px] font-bold text-[#9b7837]">
                      {content.messageButton}
                    </span>

                    <ArrowRight />
                  </button>

                  {/* RESULT */}
                  <div className="mt-5 border-t border-black/[0.06] pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-medium text-[#999ca1]">
                        {content.result}
                      </span>

                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className="text-[10px] text-[#C8A45D]"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div className="absolute bottom-6 right-6 hidden rounded-full border border-white/[0.08] bg-[#090F1C] px-4 py-2 sm:block">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45D]" />

                  <span className="text-[8px] font-bold tracking-[0.1em] text-white/50">
                    SHEFA AUTOMATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FLOW */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-black/[0.07] pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f7f7f5] bg-[#d8c6a2] text-[7px] font-bold text-[#090F1C]">
                A
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f7f7f5] bg-[#b9c1c8] text-[7px] font-bold text-[#090F1C]">
                M
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f7f7f5] bg-[#c7c2b8] text-[7px] font-bold text-[#090F1C]">
                J
              </div>
            </div>

            <p className="text-[10px] leading-4 text-[#85888d]">
              {isNL
                ? 'Eén geautomatiseerde klantreis.'
                : 'One automated customer journey.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#090F1C]">
            <span>
              {isNL
                ? 'Van bezoek naar review naar retour'
                : 'Visit to review to return'}
            </span>

            <span className="text-[#9b7837]">
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}