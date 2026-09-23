export default function Navbar() {
  return (
    <nav className="mx-auto max-w-7xl px-8 py-5 flex items-center justify-between bg-white border-b border-gray-100">
      <div className="flex items-center space-x-14">
        {/* Логотип SHEFA */}
        <div className="flex flex-col cursor-pointer select-none">
          <span className="text-[26px] font-black tracking-[0.05em] text-black leading-none font-sans">SHEFA</span>
          <span className="text-[8.5px] tracking-[0.28em] text-gray-400 font-extrabold mt-0.5 leading-none">NEXTGEN SYSTEMS</span>
        </div>
        {/* Меню */}
        <div className="hidden lg:flex items-center space-x-9 text-[14px] font-semibold text-gray-600">
          <a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a>
          <a href="#" className="hover:text-black transition-colors">Features</a>
          <a href="#" className="hover:text-black transition-colors">Industries</a>
          <a href="#" className="hover:text-black transition-colors">Pricing</a>
          <a href="#" className="hover:text-black transition-colors">Customers</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="flex items-center text-[13px] font-bold text-gray-700 hover:text-black transition-colors">
          🌐 EN <span className="text-[8px] ml-1.5 text-gray-400">▼</span>
        </button>
        <button className="bg-[#090F1C] hover:bg-slate-800 text-white text-[13px] font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-sm">
          Get in Touch <span className="text-sm font-light">➔</span>
        </button>
      </div>
    </nav>
  );
}
