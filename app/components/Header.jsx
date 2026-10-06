export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-50 bg-white">
      <div className="flex flex-col">
        <span className="font-black tracking-wider text-xl leading-none">SHEFA</span>
        <span className="text-[10px] tracking-[0.2em] text-gray-500 font-semibold">NEXTGEN SYSTEMS</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-black">How It Works</a>
        <a href="#" className="hover:text-black">Features</a>
        <a href="#" className="hover:text-black">Industries</a>
        <a href="#" className="hover:text-black">Pricing</a>
        <a href="#" className="hover:text-black">Customers</a>
        <a href="#" className="hover:text-black">Contact</a>
      </nav>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-1 cursor-pointer text-sm font-medium">
          <span>🌐</span>
          <span>EN</span>
          <span className="text-[10px]">▼</span>
        </div>
        <button className="bg-black hover:bg-zinc-800 text-white text-sm font-medium py-3 px-6 rounded-full flex items-center space-x-2 transition-all">
          <span>Start now</span>
          <span>→</span>
        </button>
      </div>
    </header>
  );
}
