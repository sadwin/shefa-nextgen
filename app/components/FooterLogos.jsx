export default function FooterLogos() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 text-center space-y-8 bg-white border-t border-gray-100">
      {/* Секция с логотипами */}
      <div className="space-y-6">
        <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
          TRUSTED BY LOCAL BUSINESSES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-black text-gray-300 tracking-wider">
          <span>SØSTRENE BEAUTY STUDIO</span>
          <span>THE BARBER AMSTERDAM</span>
          <span>Bloom RESTAURANT</span>
          <span>DENTAL CARE</span>
          <span>CLEANPRO</span>
          <span className="text-xs text-gray-400 font-bold">AND MANY MORE</span>
        </div>
      </div>

      {/* Юридическая секция (Контакты, Локация и KVK) */}
      <div className="pt-6 text-xs text-gray-400 space-y-3 border-t border-gray-50 max-w-md mx-auto">
        {/* Строка с почтой и локацией */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-medium">
          <p>
            Contact:{" "}
            <a 
              href="mailto:info@shefa-nextgen.com" 
              className="text-gray-600 hover:text-black font-semibold transition-colors"
            >
              info@shefa-nextgen.com
            </a>
          </p>
          <span className="text-gray-300 hidden sm:inline">&bull;</span>
          <p className="text-gray-500 font-semibold">
            📍 Amsterdam, Netherlands
          </p>
        </div>

        {/* Название компании и KVK */}
        <p className="text-[11px] tracking-wide text-gray-400">
          SHEFA NextGen Systems &middot; Business Registration Number(KVK): <span className="font-mono font-semibold text-gray-500">42168650</span>
        </p>

        {/* Копирайт */}
        <p className="text-[10px] text-gray-400 pt-1">
          &copy; {currentYear} SHEFA NextGen Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
