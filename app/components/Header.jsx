'use client';

import Link from 'next/link';
import { useLanguage } from '../LanguageContext';

function MetatronMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#C9A24A" strokeWidth="2.2" opacity="0.95">
        <circle cx="50" cy="50" r="20" />
        <circle cx="50" cy="50" r="38" />
        <circle cx="50" cy="50" r="9" />
        <circle cx="50" cy="30" r="20" />
        <circle cx="50" cy="70" r="20" />
        <circle cx="32.7" cy="40" r="20" />
        <circle cx="67.3" cy="40" r="20" />
        <circle cx="32.7" cy="60" r="20" />
        <circle cx="67.3" cy="60" r="20" />
      </g>
    </svg>
  );
}

export default function Header() {
  const { lang, changeLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-[#ebe8df]/80 bg-[#fafaf8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-3">
          <MetatronMark />

          <div className="leading-none">
            <div className="text-[19px] font-extrabold tracking-[-0.04em] text-[#171717]">
              SHEFA
            </div>
            <div className="mt-1 text-[8px] font-semibold tracking-[0.22em] text-[#77756f]">
              NEXTGEN SYSTEMS
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#66645e] lg:flex">
          <a href="#how-it-works" className="transition hover:text-[#171717]">
            How it works
          </a>
          <a href="#features" className="transition hover:text-[#171717]">
            Features
          </a>
          <a href="#results" className="transition hover:text-[#171717]">
            Results
          </a>
          <a href="#pricing" className="transition hover:text-[#171717]">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => changeLanguage(lang === 'en' ? 'nl' : 'en')}
            className="hidden text-[12px] font-semibold uppercase tracking-wide text-[#66645e] transition hover:text-black sm:block"
          >
            {lang}
          </button>

          <Link
            href="https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01"
            className="rounded-full bg-[#171717] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#2c2c2a]"
          >
            Get started →
          </Link>
        </div>
      </div>
    </header>
  );
}