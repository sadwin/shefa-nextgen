import React from 'react';

export default function RealResults() {
  return (
    <section className="bg-[#0F172A] text-white py-[90px] px-6 w-full overflow-hidden select-none">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА — Текст, галочки и кнопка */}
        <div className="lg:col-span-4 space-y-6 flex flex-col justify-center">
          <div className="text-[10px] font-black text-indigo-400 tracking-[0.2em] uppercase opacity-90">
            YOUR BUSINESS, ON A HIGHER LEVEL
          </div>
          <h2 className="text-[44px] font-black tracking-tight leading-[1.02] text-white">
            See real results.
          </h2>
          <p className="text-[#94A3B8] text-[14px] leading-relaxed max-w-[310px] font-normal">
            Track your reviews, customers and revenue all in one place.
          </p>
          
          <ul className="space-y-[14px] text-[13px] text-[#E2E8F0] font-medium pt-2">
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 font-bold text-[14px]">✓</span> 
              <span>More 5-star reviews on Google</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 font-bold text-[14px]">✓</span> 
              <span>Growing customer database</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 font-bold text-[14px]">✓</span> 
              <span>Higher customer retention</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 font-bold text-[14px]">✓</span> 
              <span>Increase in sales</span>
            </li>
          </ul>

          <div className="pt-4">
            <button className="border border-white/20 hover:border-white bg-transparent hover:bg-white hover:text-[#0F172A] transition-all duration-200 px-7 py-3 rounded-full text-[13px] font-bold flex items-center space-x-2 tracking-wide">
              <span>Let's Talk</span>
              <span className="text-sm font-light">→</span>
            </button>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — Точный конструктор Ноутбука и оверлеев */}
        <div className="lg:col-span-8 relative flex justify-center items-center w-full pt-4 lg:pt-0">
          
          {/* Макет самого ноутбука (Толщина рамки, скругления, супер-глубокая тень) */}
          <div className="relative w-full max-w-[620px] aspect-[16/10] bg-[#1E293B] border-[7px] border-[#334155] rounded-2xl p-[6px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="w-full h-full bg-white rounded-lg flex overflow-hidden">
              
              {/* Сайдбар CRM-системы */}
              <div className="w-[23%] bg-[#F8FAFC] p-3 pt-4 border-r border-slate-100 flex flex-col justify-between font-bold text-[9px] text-[#94A3B8]">
                <div className="space-y-[5px]">
                  <div className="text-[11px] text-slate-900 font-black tracking-tight mb-4 flex items-center space-x-1 pl-1">
                    <span className="text-indigo-600 text-xs">📊</span>
                    <span>SHEFA</span>
                  </div>
                  <div className="bg-[#E2E8F0] text-slate-900 p-2 rounded-lg flex items-center space-x-2 font-extrabold cursor-pointer">
                    <span className="text-[11px]">📊</span> <span>Overview</span>
                  </div>
                  <div className="p-2 flex items-center space-x-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <span className="text-[11px]">👥</span> <span>Customers</span>
                  </div>
                  <div className="p-2 flex items-center space-x-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <span className="text-[11px]">⭐</span> <span>Reviews</span>
                  </div>
                  <div className="p-2 flex items-center space-x-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <span className="text-[11px]">📢</span> <span>Campaigns</span>
                  </div>
                  <div className="p-2 flex items-center space-x-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <span className="text-[11px]">💬</span> <span>Messages</span>
                  </div>
                  <div className="p-2 flex items-center space-x-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <span className="text-[11px]">📈</span> <span>Analytics</span>
                  </div>
                </div>
                <div className="p-2 flex items-center space-x-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border-t border-slate-100 pt-2 font-bold">
                  <span>⚙️</span> <span>Settings</span>
                </div>
              </div>
              {/* Главный экран CRM — Метрики, KPI и График */}
              <div className="w-[77%] p-4 pt-5 bg-white flex flex-col justify-between">
                
                {/* Верхний ряд: 4 карточки показателей */}
                <div className="grid grid-cols-4 gap-2">
                  
                  {/* Google Rating */}
                  <div className="bg-[#F8FAFC] p-2 rounded-xl border border-slate-100 flex flex-col justify-between min-h-[52px]">
                    <p className="text-[#94A3B8] font-bold text-[8px] leading-none">Google Rating</p>
                    <p className="font-black text-xs text-slate-900 tracking-tight mt-1 flex items-baseline">
                      4.8 <span className="text-[#10B981] font-bold text-[7px] ml-1">↑ +0.3</span>
                    </p>
                  </div>
                  
                  {/* Total Customers */}
                  <div className="bg-[#F8FAFC] p-2 rounded-xl border border-slate-100 flex flex-col justify-between min-h-[52px]">
                    <p className="text-[#94A3B8] font-bold text-[8px] leading-none">Total Customers</p>
                    <p className="font-black text-xs text-slate-900 tracking-tight mt-1 flex items-baseline">
                      1,248 <span className="text-[#10B981] font-bold text-[7px] ml-1">↑ +28%</span>
                    </p>
                  </div>
                  
                  {/* Messages Sent */}
                  <div className="bg-[#F8FAFC] p-2 rounded-xl border border-slate-100 flex flex-col justify-between min-h-[52px]">
                    <p className="text-[#94A3B8] font-bold text-[8px] leading-none">Messages Sent</p>
                    <p className="font-black text-xs text-slate-900 tracking-tight mt-1 flex items-baseline">
                      3,865 <span className="text-[#10B981] font-bold text-[7px] ml-1">↑ +42%</span>
                    </p>
                  </div>
                  
                  {/* Repeat Customers */}
                  <div className="bg-[#F8FAFC] p-2 rounded-xl border border-slate-100 flex flex-col justify-between min-h-[52px]">
                    <p className="text-[#94A3B8] font-bold text-[8px] leading-none">Repeat Customers</p>
                    <p className="font-black text-xs text-slate-900 tracking-tight mt-1 flex items-baseline">
                      37% <span className="text-[#10B981] font-bold text-[7px] ml-1">↑ +12%</span>
                    </p>
                  </div>
                </div>

                {/* Блок Графика: Линии, сетка и градиентная заливка */}
                <div className="flex-1 bg-[#F8FAFC] rounded-xl border border-slate-100 p-3 flex flex-col justify-between mt-3.5">
                  <div className="flex justify-between items-center font-bold text-[9px]">
                    <span className="text-slate-800 font-extrabold">Reviews over time</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded text-[7px] font-extrabold">+124 reviews this month</span>
                      <span className="border border-slate-200/80 bg-white px-2 py-0.5 rounded-md text-[7px] text-slate-500 font-medium cursor-pointer">Last 6 months ▼</span>
                    </div>
                  </div>
                  
                  {/* Горизонтальная сетка с барами */}
                  <div className="h-[95px] w-full relative flex items-end pt-3 border-b border-slate-200/60">
                    <div className="absolute inset-x-0 top-1/4 border-b border-dashed border-slate-100"></div>
                    <div className="absolute inset-x-0 top-2/4 border-b border-dashed border-slate-100"></div>
                    <div className="absolute inset-x-0 top-3/4 border-b border-dashed border-slate-100"></div>
                    
                    {/* Точные пропорции столбцов из макета */}
                    <div className="w-full h-full flex items-end justify-between px-3 z-10">
                      <div className="w-5 h-[18%] bg-indigo-500/10 border-t border-indigo-400 rounded-t-[2px]"></div>
                      <div className="w-5 h-[28%] bg-indigo-500/10 border-t border-indigo-400 rounded-t-[2px]"></div>
                      <div className="w-5 h-[52%] bg-indigo-500/15 border-t border-indigo-500 rounded-t-[2px]"></div>
                      <div className="w-5 h-[42%] bg-indigo-500/10 border-t border-indigo-400 rounded-t-[2px]"></div>
                      <div className="w-5 h-[72%] bg-indigo-500/20 border-t border-indigo-500 rounded-t-[2px]"></div>
                      <div className="w-5 h-[90%] bg-gradient-to-t from-indigo-600 via-indigo-500 to-violet-500 rounded-t-[2px] shadow-[0_4px_12px_rgba(99,102,241,0.2)]"></div>
                    </div>
                  </div>
                  
                  {/* Ось X */}
                  <div className="flex justify-between px-3 text-[7px] text-[#94A3B8] font-bold mt-1.5">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* НАЛОЖЕНИЕ ПОД УГЛОМ: Карточка отзыва Томаса (Pixel-Perfect оверлей справа) */}
          <div className="absolute -right-5 bottom-8 bg-[#0F172A] text-white p-4.5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.45)] border border-slate-800/80 max-w-[225px] text-[11px] space-y-3 z-30 transform translate-x-1 lg:translate-x-0">
            <div className="text-amber-400 text-xs tracking-tight flex space-x-0.5">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-[#E2E8F0] italic font-medium leading-relaxed tracking-wide">
              "We get so many more reviews now. It's easy and works perfectly. Our customer database is also growing fast."
            </p>
            <div className="flex items-center space-x-2.5 pt-2.5 border-t border-slate-800">
              <div className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-inner">
                👨‍💼
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-[10px] leading-tight">Thomas</span>
                <span className="text-[8px] text-[#64748B] font-bold tracking-wide mt-0.5">Business Owner, Amsterdam</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
