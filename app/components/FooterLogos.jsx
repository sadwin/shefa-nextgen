'use client';
import { useLanguage } from '../LanguageContext';

export default function FooterLogos() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage(); // Подключаем переводы

  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 text-center space-y-8 bg-white border-t border-gray-100">
      <div className="space-y-6">
        {/* Перевод заголовка */}
        <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
          {t.trustedBy}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-black text-gray-300 tracking-wider">
          <span>SØSTRENE BEAUTY STUDIO</span>
          <span>THE BARBER AMSTERDAM</span>
          <span>Bloom RESTAURANT</span>
          <span>DENTAL CARE</span>
          <span>CLEANPRO</span>
          {/* Перевод "AND MANY MORE" */}
          <span className="text-xs text-gray-400 font-bold">{t.andManyMore}</span>
        </div>
      </div>

      <div className="pt-6 text-xs text-gray-400 space-y-3 border-t border-gray-50 max-w-md mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-medium">
          <p>
            {t.contact}:{" "}
            <a href="mailto:info@shefa-nextgen.com" className="text-gray-600 hover:text-black font-semibold transition-colors">
              info@shefa-nextgen.com
            </a>
          </p>
          <span className="text-gray-300 hidden sm:inline">&bull;</span>
          <p className="text-gray-500 font-semibold">📍 Amsterdam, Netherlands</p>
        </div>
        <p className="text-[11px] tracking-wide text-gray-400">
          SHEFA NextGen Systems &middot; KVK: <span className="font-mono font-semibold text-gray-500">42168650</span>
        </p>
        <p className="text-[10px] text-gray-400 pt-1">
          &copy; {currentYear} SHEFA NextGen Systems. {t.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}
