'use client';

import Link from 'next/link';
import { useLanguage } from '../LanguageContext'; // Подключаем систему перевода

export default function Header() {
  const { lang, changeLanguage, t } = useLanguage();

  return (
    <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-50 bg-white">
      {/* Логотип компании */}
      <div className="flex flex-col">
        <span className="font-black tracking-wider text-xl leading-none">SHEFA</span>
        <span className="text-[10px] tracking-[0.2em] text-gray-500 font-semibold">NEXTGEN SYSTEMS</span>
      </div>
      
      {/* Навигационное меню с переводом на лету */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-black">{t.howItWorks}</a>
        <a href="#" className="hover:text-black">{t.features}</a>
        <a href="#" className="hover:text-black">{t.industries}</a>
        <a href="#" className="hover:text-black">{t.pricing}</a>
        <a href="#" className="hover:text-black">{t.customers}</a>
        <a href="#" className="hover:text-black">{t.contact}</a>
      </nav>

      {/* Интерактивный блок кнопок */}
      <div className="flex items-center space-x-6">
        
        {/* Кнопка смены языка с иконкой */}
        <button 
          onClick={() => changeLanguage(lang === 'en' ? 'nl' : 'en')}
          className="flex items-center space-x-1 cursor-pointer text-sm font-medium bg-transparent border-none outline-none hover:opacity-80 transition-opacity"
          aria-label="Toggle language"
        >
          <span>🌐</span>
          <span className="uppercase">{lang}</span>
          <span className="text-[10px] text-gray-400">▼</span>
        </button>

        {/* Кнопка покупки Stripe с переводом текста */}
        <Link 
          href="https://buy.stripe.com/5kQ8wQcO9eyPeq2a3i6kg01"
          className="bg-black hover:bg-zinc-800 text-white text-sm font-medium py-3 px-6 rounded-full inline-flex items-center space-x-2 transition-all no-underline"
        >
          <span>{t.startNow}</span>
          <span>→</span>
        </Link>

      </div>
    </header>
  );
}
