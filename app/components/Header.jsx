'use client';

import Link from 'next/link';
import { useLanguage } from '../LanguageContext';

function MetatronLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="22" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="78" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="50" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="78" cy="50" r="13" stroke="currentColor" strokeWidth="2" />

      <circle cx="30" cy="30" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="70" cy="30" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="70" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="70" cy="70" r="13" stroke="currentColor" strokeWidth="2" />

      <path
        d="M50 9V91M9 50H91M21 21L79 79M79 21L21 79"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function Header() {
  const { lang, changeLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          aria-label="SHEFA NextGen Systems"
        >
          <span className="text-[#C8A45D]">
            <MetatronLogo />
          </span>

          <span className="flex flex-col">
            <span className="text-[20px] font-extrabold leading-none tracking-[-0.03em] text-[#11110F]">
              SHEFA
            </span>

            <span className="mt-1 text-[9px] font-semibold leading-none tracking-[0.22em] text-[#77756E]">
              NEXTGEN SYSTEMS
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href="#how-it-works"
            className="text-[13px] font-medium text-[#66645E] transition hover:text-[#11110F]"
          >
            {t.howItWorks}
          </a>

          <a
            href="#features"
            className="text-[13px] font-medium text-[#66645E] transition hover:text-[#11110F]"
          >
            {t.features}
          </a>

          <a
            href="#industries"
            className="text-[13px] font-medium text-[#66645E] transition hover:text-[#11110F]"
          >
            {t.industries}
          </a>

          <a
            href="#pricing"
            className="text-[13px] font-medium text-[#66645E] transition hover:text-[#11110F]"
          >
            {t.pricing}
          </a>

          <a
            href="#customers"
            className="text-[13px] font-medium text-[#66645E] transition hover:text-[#11110F]"
          >
            {t.customers}
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => changeLanguage(lang === 'en' ? 'nl' : 'en')}
            className="hidden items-center gap-1.5 border-0 bg-transparent text-[12px] font-semibold uppercase tracking-wide text-[#66645E] transition hover:text-black sm:flex"
            aria-label="Toggle language"
          >
            <span>◎</span>
            <span>{lang}</span>
          </button>

          <Link
            href="https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01"
            className="inline-flex items-center gap-2 rounded-full bg-[#11110F] px-5 py-3 text-[12px] font-semibold text-white no-underline shadow-sm transition hover:-translate-y-[1px] hover:bg-[#292923]"
          >
            <span>{t.startNow}</span>
            <span>→</span>
          </Link>

        </div>
      </div>
    </header>
  );
}