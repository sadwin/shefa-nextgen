export default function DashboardPreview() {
  const bars = [35, 50, 68, 92, 74, 98];

  return (
    <section className="mx-auto max-w-7xl px-8 pb-24 bg-white">
      <div className="bg-gradient-to-br from-[#0B132A] to-[#050914] rounded-[44px] p-10 lg:p-16 grid lg:grid-cols-12 gap-12 items-center text-white shadow-2xl relative overflow-hidden">
        
        {/* Левая текстовая часть */}
        <div className="lg:col-span-4 space-y-6">
          <span className="text-[10px] font-black tracking-[0.25em] text-[#64748B] uppercase block">YOUR BUSINESS, ON A HIGHER LEVEL</span>
          <h2 className="text-[46px] lg:text-[56px] font-black tracking-tight leading-[1.04]">See real results.</h2>
          <p className="text-[14px] text-[#94A3B8] font-medium leading-relaxed max-w-[280px]">Track your reviews, customers and revenue all in one place.</p>
          <ul className="space-y-4 text-[13px] font-bold text-slate-200 pt-1">
            <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> More 5-star reviews on Google</li>
            <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> Growing customer database</li>
            <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> Higher customer retention</li>
            <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> Increase in sales</li>
          </ul>
          <button className="bg-white hover:bg-slate-100 text-black px-8 py-4 rounded-full font-black text-[13px] flex items-center gap-2 transition-all mt-2 shadow-lg">
            Let's Talk ➔
          </button>
        </div>

        {/* Правая часть: Админка + Отзыв Томаса */}
        <div className="lg:col-span-8 flex flex-col md:flex-row gap-6 w-full items-stretch">
          
          {/* Админка */}
          <div className="flex-1 bg-[#111A30] border border-slate-800 rounded-2xl p-5 shadow-2xl flex gap-5">
            {/* Сайдбар приложения */}
            <div className="w-[26%] border-r border-slate-800/80 pr-3 space-y-1 text-[11px] text-[#64748B] font-bold hidden sm:block shrink-0">
              <div className="font-black text-white text-[13px] tracking-wider mb-5">SHEFA</div>
              <div className="text-white font-black bg-[#1E293B] px-3 py-2 rounded-lg shadow-sm">📊 Overview</div>
              <div className="px-3 py-2 hover:text-white rounded-lg transition-colors cursor-pointer">Customers</div>
              <div className="px-3 py-2 hover:text-white rounded-lg transition-colors cursor-pointer">Reviews</div>
              <div className="px-3 py-2 hover:text-white rounded-lg transition-colors cursor-pointer">Campaigns</div>
            </div>

            {/* Контентная зона админки */}
            <div className="flex-1 space-y-5">
              <div className="grid grid-cols-2 gap-2.5 text-left">
                <div className="bg-[#162242] border border-slate-800/60 p-3 rounded-xl">
                  <span className="text-[8px] text-[#64748B] font-black block uppercase">Google Rating</span>
                  <div className="flex justify-between items-baseline mt-0.5">
                    <span className="text-[16px] font-black text-white tracking-tight">4.8</span>
                    <span className="text-[8px] text-emerald-400 font-bold">↑ +0.3</span>
                  </div>
                </div>
                <div className="bg-[#162242] border border-slate-800/60 p-3 rounded-xl">
                  <span className="text-[8px] text-[#64748B] font-black block uppercase">Total Customers</span>
                  <div className="flex justify-between items-baseline mt-0.5">
                    <span className="text-[16px] font-black text-white tracking-tight">1,248</span>
                    <span className="text-[8px] text-emerald-400 font-bold">↑ +28%</span>
                  </div>
                </div>
              </div>

              {/* График */}
              <div className="bg-[#141F3C] border border-slate-800 rounded-xl p-3.5 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-300">
                  <span>Reviews over time</span>
                  <span className="text-[8px] bg-[#1C2A4E] px-2 py-0.5 rounded text-white">Last 6 months ▼</span>
                </div>
                <div className="h-20 flex items-end gap-2 border-b border-slate-800 pb-1">
                  {bars.map((h, i) => (
                    <div key={i} className="w-full relative flex flex-col justify-end h-full group">
                      <div 
                        style={{ height: `${h}%` }} 
                        className={`w-full rounded-t-sm transition-all duration-300 ${
                          i === 3 ? 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]' : 'bg-[#202E54] hover:bg-[#2A3C6E]'
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Карточка реального клиента Томаса */}
          <div className="w-full md:w-[245px] bg-[#162242] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-2xl relative shrink-0">
            <div className="text-amber-500 text-xs tracking-tighter">★★★★★</div>
            
            <p className="text-[12.5px] text-slate-200 font-medium leading-[1.6] my-4 italic">
              "We get so many more reviews now. It's easy and works perfectly. Our customer database is also growing fast."
            </p>

            <div className="flex items-center gap-3 border-t border-slate-800/80 pt-3 mt-auto">
              {/* Круглый аватар Томаса с красивым градиентом вместо пустой заглушки */}
              <div className="w-10 h-10 rounded-full border-2 border-slate-700 shrink-0 bg-[#334155] overflow-hidden flex items-center justify-center text-sm font-bold text-slate-300">
                👨‍💼
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-black text-white">Thomas</div>
                <span className="text-[9px] text-[#64748B] font-bold block mt-0.5">Business Owner, Amsterdam</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
