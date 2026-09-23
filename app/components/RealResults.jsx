import React from 'react';

export default function RealResults() {
  return (
    <section className="bg-[#0F172A] text-white py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Левая сторона: Текстовый блок с галочками */}
        <div className="lg:col-span-4 space-y-6">
          <div className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase">
            YOUR BUSINESS, ON A HIGHER LEVEL
          </div>
          <h2 className="text-[42px] font-black tracking-tight leading-[1.05]">
            See real results.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[320px]">
            Track your reviews, customers and revenue all in one place.
          </p>
          
          <ul className="space-y-4 text-[13px] text-slate-300 font-medium pt-2">
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span> 
              <span>More 5-star reviews on Google</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span> 
              <span>Growing customer database</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span> 
              <span>Higher customer retention</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-400 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span> 
              <span>Increase in sales</span>
            </li>
          </ul>

          <div className="pt-4">
            <button className="border border-white/20 hover:border-white bg-transparent hover:bg-white hover:text-slate-950 transition-all duration-200 px-8 py-3.5 rounded-full text-sm font-bold flex items-center space-x-2">
              <span>Let's Talk</span>
              <span className="text-base">→</span>
            </button>
          </div>
        </div>

        {/* Правая сторона: Ноутбук */}
        <div className="lg:col-span-8 relative flex justify-center w-full">
          
          {/* Корпус экрана ноутбука */}
          <div className="relative w-full max-w-[650px] aspect-[16/10] bg-[#1E293B] border-[8px] border-[#334155] rounded-2xl p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden text-[10px] text-slate-800">
            <div className="w-full h-full bg-white rounded-lg flex overflow-hidden">
              
              {/* Сайдбар панели управления внутри экрана */}
              <div className="w-[22%] bg-[#F8FAFC] p-3 border-r border-slate-100 flex flex-col justify-between font-bold text-slate-400">
                <div className="space-y-1.5">
                  <div className="text-xs text-slate-900 font-black tracking-tight mb-4 flex items-center space-x-1">
                    <span className="text-indigo-600">📊</span>
                    <span>SHEFA</span>
                  </div>
                  <div className="bg-slate-200/80 text-slate-900 p-2 rounded-lg flex items-center space-x-1.5">
                    <span>📊</span> <span>Overview</span>
                  </div>
                  <div className="p-2 flex items-center space-x-1.5"><span>👥</span> <span>Customers</span></div>
                  <div className="p-2 flex items-center space-x-1.5"><span>⭐</span> <span>Reviews</span></div>
                  <div className="p-2 flex items-center space-x-1.5"><span>📢</span> <span>Campaigns</span></div>
                  <div className="p-2 flex items-center space-x-1.5"><span>💬</span> <span>Messages</span></div>
                  <div className="p-2 flex items-center space-x-1.5"><span>📈</span> <span>Analytics</span></div>
                </div>
                <div className="p-2 flex items-center space-x-1.5 border-t border-slate-100 pt-2">
                  <span>⚙️</span> <span>Settings</span>
                </div>
              </div>
              {/* Правая часть CRM с метриками и графиком */}
              <div className="w-[78%] p-4 flex flex-col justify-between bg-white">
                
                {/* 4 Карточки KPI из макета */}
                <div className="grid grid-cols-4 gap-2.5">
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-100">
                    <p className="text-gray-400 font-semibold text-[8px]">Google Rating</p>
                    <p className="font-black text-sm mt-0.5 text-slate-900 tracking-tight">
                      4.8 <span className="text-emerald-500 font-extrabold text-[8px] ml-0.5">↑ +0.3</span>
                    </p>
                  </div>
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-100">
                    <p className="text-gray-400 font-semibold text-[9px]">Total Customers</p>
                    <p className="font-black text-sm mt-0.5 text-slate-900 tracking-tight">
                      1,248 <span className="text-emerald-500 font-extrabold text-[8px] ml-0.5">↑ +28%</span>
                    </p>
                  </div>
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-100">
                    <p className="text-gray-400 font-semibold text-[9px]">Messages Sent</p>
                    <p className="font-black text-sm mt-0.5 text-slate-900 tracking-tight">
                      3,865 <span className="text-emerald-500 font-extrabold text-[8px] ml-0.5">↑ +42%</span>
                    </p>
                  </div>
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-100">
                    <p className="text-gray-400 font-semibold text-[9px]">Repeat Customers</p>
                    <p className="font-black text-sm mt-0.5 text-slate-900 tracking-tight">
                      37% <span className="text-emerald-500 font-extrabold text-[8px] ml-0.5">↑ +12%</span>
                    </p>
                  </div>
                </div>
                
                {/* График сетки */}
                <div className="flex-1 bg-[#F8FAFC] rounded-2xl border border-slate-100 p-3.5 flex flex-col justify-between mt-3">
                  <div className="flex justify-between items-center text-gray-400 font-bold">
                    <span className="text-slate-800 font-black">Reviews over time</span>
                    <span className="border border-slate-200/80 bg-white px-2 py-0.5 rounded-md text-[8px] text-slate-600 font-medium">Last 6 months ▼</span>
                  </div>
                  
                  {/* Отрисовка столбцов */}
                  <div className="h-24 w-full relative flex items-end pt-2 border-b border-slate-200/60">
                    <div className="absolute inset-x-0 top-1/3 border-b border-dashed border-slate-200/40"></div>
                    <div className="absolute inset-x-0 top-2/3 border-b border-dashed border-slate-200/40"></div>
                    
                    <div className="w-full h-full flex items-end justify-between px-4 z-10">
                      <div className="w-6 h-[25%] bg-indigo-500/10 border-t-2 border-indigo-400 rounded-t-sm"></div>
                      <div className="w-6 h-[40%] bg-indigo-500/10 border-t-2 border-indigo-400 rounded-t-sm"></div>
                      <div className="w-6 h-[60%] bg-indigo-500/20 border-t-2 border-indigo-500 rounded-t-sm"></div>
                      <div className="w-6 h-[50%] bg-indigo-500/10 border-t-2 border-indigo-400 rounded-t-sm"></div>
                      <div className="w-6 h-[80%] bg-indigo-500/30 border-t-2 border-indigo-600 rounded-t-sm"></div>
                      <div className="w-6 h-[95%] bg-gradient-to-t from-indigo-600 to-violet-600 rounded-t-sm shadow-md shadow-indigo-500/20"></div>
                    </div>
                  </div>
                  
                  {/* Месяцы */}
                  <div className="flex justify-between px-4 text-[8px] text-gray-400 font-bold mt-1">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Плашка отзыва Томаса поверх края ноутбука */}
          <div className="absolute right-[-30px] bottom-8 bg-[#0F172A] text-white p-4 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-slate-800 max-w-[240px] text-[11px] space-y-3 z-30">
            <div className="text-amber-400 text-xs tracking-tight flex">★★★★★</div>
            <p className="text-slate-300 italic font-medium leading-relaxed">
              "We get so many more reviews now. It's easy and works perfectly. Our customer database is also growing fast."
            </p>
            <div className="flex items-center space-x-2.5 pt-2 border-t border-slate-800">
              <div className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-inner">
                T
              </div>
              <div>
                <p className="font-extrabold text-white text-[10px] leading-tight">Thomas</p>
                <p className="text-[9px] text-slate-500 font-semibold">Business Owner, Amsterdam</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
