'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const STRIPE_URL = 'https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01';

function MetatronMark() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="19" cy="19" r="16" stroke="currentColor" strokeWidth="1" />
      <circle cx="19" cy="19" r="9.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="0.8" />

      <path
        d="M19 3V35M3 19H35M7.7 7.7L30.3 30.3M30.3 7.7L7.7 30.3"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M19 9.5L27.23 14.25V23.75L19 28.5L10.77 23.75V14.25L19 9.5Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 12L12 3M5 3H12V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span
        className={`absolute left-0 top-[5px] h-px w-6 bg-current transition-all duration-300 ${
          open ? 'translate-y-[3px] rotate-45' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-[12px] h-px w-6 bg-current transition-all duration-300 ${
          open ? '-translate-y-[4px] -rotate-45' : ''
        }`}
      />
    </span>
  );
}

export default function Header() {
  const { lang, changeLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const isNL = lang === 'nl';

  const navItems = [
    {
      label: isNL ? 'Hoe het werkt' : 'How it works',
      href: '#how-it-works',
    },
    {
      label: isNL ? 'Features' : 'Features',
      href: '#features',
    },
    {
      label: isNL ? 'Sectoren' : 'Industries',
      href: '#industries',
    },
    {
      label: isNL ? 'Prijzen' : 'Pricing',
      href: '#pricing',
    },
  ];

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex h-[72px] items-center justify-between rounded-2xl border border-black/[0.08] bg-white/90 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:px-6">

            {/* LOGO */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex shrink-0 items-center gap-3"
              aria-label="Shefa Nextgen Systems"
            >
              <div className="flex h-10 w-10 items-center justify-center text-[#9b7837] transition-transform duration-300 group-hover:rotate-90">
                <MetatronMark />
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-extrabold tracking-[0.19em] text-[#090F1C]">
                  SHEFA
                </div>

                <div className="mt-[5px] text-[8px] font-semibold tracking-[0.24em] text-[#7b7d80]">
                  NEXTGEN SYSTEMS
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-[13px] font-medium text-[#52565d] transition-colors duration-200 hover:text-[#090F1C]"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#9b7837] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* LANGUAGE */}
              <div className="mr-1 flex items-center rounded-full border border-black/[0.08] bg-[#f7f7f5] p-1">
                <button
                  type="button"
                  onClick={() => handleLanguageChange('en')}
                  className={`rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] transition-all ${
                    !isNL
                      ? 'bg-[#090F1C] text-white shadow-sm'
                      : 'text-[#777] hover:text-[#090F1C]'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => handleLanguageChange('nl')}
                  className={`rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] transition-all ${
                    isNL
                      ? 'bg-[#090F1C] text-white shadow-sm'
                      : 'text-[#777] hover:text-[#090F1C]'
                  }`}
                  aria-label="Switch to Dutch"
                >
                  NL
                </button>
              </div>

              {/* CTA */}
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#090F1C] px-5 text-[12px] font-bold tracking-[0.02em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#151c2b] hover:shadow-[0_10px_25px_rgba(9,15,28,0.18)]"
              >
                {isNL ? 'Aan de slag' : 'Get started'}

                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight />
                </span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] text-[#090F1C] transition-colors hover:bg-[#f7f7f5] lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              menuOpen
                ? 'mt-2 max-h-[500px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
              <nav
                className="flex flex-col"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between border-b border-black/[0.06] py-4 text-[15px] font-semibold text-[#090F1C]"
                  >
                    {item.label}

                    <span className="text-[#9b7837]">
                      <ArrowUpRight />
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-5 flex items-center justify-between gap-4">
                {/* MOBILE LANGUAGE */}
                <div className="flex items-center rounded-full border border-black/[0.08] bg-[#f7f7f5] p-1">
                  <button
                    type="button"
                    onClick={() => handleLanguageChange('en')}
                    className={`rounded-full px-4 py-2 text-[10px] font-bold tracking-[0.12em] ${
                      !isNL
                        ? 'bg-[#090F1C] text-white'
                        : 'text-[#777]'
                    }`}
                  >
                    EN
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLanguageChange('nl')}
                    className={`rounded-full px-4 py-2 text-[10px] font-bold tracking-[0.12em] ${
                      isNL
                        ? 'bg-[#090F1C] text-white'
                        : 'text-[#777]'
                    }`}
                  >
                    NL
                  </button>
                </div>

                {/* MOBILE CTA */}
                <a
                  href={STRIPE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#090F1C] px-5 text-[12px] font-bold text-white"
                >
                  {isNL ? 'Aan de slag' : 'Get started'}
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}