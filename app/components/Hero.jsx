import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-24 bg-[#FAFAFA] overflow-visible font-sans">
      
      {/* Наклонная надпись в правом верхнем углу макета */}
      <div className="absolute right-16 top-6 hidden xl:block transform rotate-[6deg] text-right select-none">
        <span className="font-serif italic text-[26px] text-[#0F172A] leading-none block">Happy customers.</span>
        <span className="font-sans font-black text-[13px] tracking-[0.15em] text-[#94A3B8] uppercase block mt-0.5">Stronger businesses.</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА — Текст и кнопки (Строго 5 колонок из 12) */}
        <div className="lg:col-span-5 space-y-6 z-10">
          <div className="text-[11px] font-extrabold tracking-[0.25em] text-[#94A3B8] uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          
          <h1 className="text-[54px] font-black text-[#0F172A] tracking-tight leading-[0.98] font-sans">
            Turn every <br />
            customer visit <br />
            <span className="text-[#0F172A]">into growth.</span>
          </h1>
          
          <p className="text-[15px] text-[#64748B] max-w-[400px] leading-relaxed font-normal">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0F172A] hover:bg-black text-white text-[13px] font-bold py-4 px-8 rounded-full flex items-center space-x-2 shadow-md shadow-slate-950/10 transition-all">
              <span>See How It Works</span>
              <span className="text-sm">→</span>
            </button>
            <button className="flex items-center space-x-3 text-[#0F172A] text-[13px] font-black hover:opacity-80 px-4 py-3 transition-opacity">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm pl-0.5 text-xs text-slate-800">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold text-[#94A3B8] pt-6 border-t border-slate-100">
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs">✓</span> Ready in minutes</span>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — Коллаж (7 колонок из 12) */}
        <div className="lg:col-span-7 relative flex justify-center items-center min-h-[580px] w-full mt-12 lg:mt-0">
          
          {/* Левая плашка: Google Rating */}
          <div className="absolute top-10 left-[-15px] hidden xl:flex bg-white shadow-[0_20px_40px_rgba(15,23,42,0.04)] rounded-2xl p-4 z-30 border border-slate-100/80 items-center space-x-3.5 w-[240px]">
            <div className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-500 via-red-500 to-amber-500 bg-clip-text text-transparent">G</span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-black text-base text-[#0F172A] leading-none">4.8</span>
                <div className="text-amber-400 text-[10px] tracking-tighter flex">★★★★★</div>
              </div>
              <p className="text-[9px] text-[#94A3B8] font-bold mt-1 flex items-center gap-1">
                +124 new reviews this month <span className="text-green-500 text-xs">📈</span>
              </p>
            </div>
          </div>
          {/* Центр: Смартфон iOS с точной структурой чата */}
          <div className="relative w-[275px] h-[550px] bg-[#1E293B] rounded-[44px] p-2.5 shadow-[0_40px_90px_-15px_rgba(15,23,42,0.15)] z-20 border-[6px] border-[#0F172A] flex-shrink-0">
            {/* Камера / Динамический Остров */}
            <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-[#0F172A] rounded-full z-40"></div>
            
            {/* Экран устройства */}
            <div className="w-full h-full bg-[#ECEFF1] rounded-[34px] overflow-hidden p-3 pt-9 flex flex-col justify-between relative text-[10px] font-sans">
              
              {/* Шапка чата WhatsApp */}
              <div className="bg-white/95 border-b border-slate-200/60 absolute top-0 inset-x-0 pt-5 pb-2 px-3 flex items-center space-x-2 z-30">
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs shadow-inner">🏢</div>
                <div>
                  <p className="font-extrabold text-slate-800 text-[9px] leading-tight">Your Business</p>
                  <p className="text-[7px] text-emerald-500 font-bold leading-none">online</p>
                </div>
              </div>

              {/* История сообщений */}
              <div className="space-y-2.5 flex-1 flex flex-col justify-end pb-1 overflow-hidden">
                {/* Сообщение от бизнеса */}
                <div className="bg-white p-2.5 rounded-xl rounded-tl-none border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-[92%] space-y-2">
                  <p className="text-slate-700 font-medium leading-snug">Hi Sarah! 👋 Thanks for visiting Luna Beauty Amsterdam. How was your experience?</p>
                  
                  {/* Кнопки выбора внутри чата */}
                  <div className="space-y-1">
                    <button className="w-full bg-white border border-amber-200 hover:bg-amber-50 text-amber-600 font-bold py-1.5 rounded-lg text-[9px] text-center block">
                      🟡 Could be better
                    </button>
                    <button className="w-full bg-[#10B981] text-white font-bold py-1.5 rounded-lg text-[9px] text-center block shadow-sm shadow-emerald-500/10">
                      🟢 Great!
                    </button>
                  </div>
                  <span className="block text-[7px] text-slate-400 text-right -mt-1">14:21</span>
                </div>

                {/* Авто-ответ системы */}
                <div className="bg-white p-2.5 rounded-xl rounded-tl-none border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-[92%] space-y-1.5">
                  <p className="text-slate-700 font-medium leading-snug">We're so glad! 🎉 Would you like to leave us a quick review on Google?</p>
                  <a href="#" className="bg-blue-50 border border-blue-100 text-blue-600 font-black py-1.5 px-3 rounded-lg block text-center text-[9px] tracking-wide">
                    Leave a Google Review
                  </a>
                  <span className="block text-[7px] text-slate-400 text-right">14:22</span>
                </div>
              </div>
            </div>
          </div>

          {/* Справа: Тейбл-тент с QR */}
          <div className="absolute right-4 top-[16%] hidden md:flex bg-white shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)] rounded-[22px] p-4.5 w-[165px] z-30 border border-slate-100 flex flex-col items-center">
            <span className="text-[9px] font-black text-slate-900 tracking-wider">SHEFA</span>
            <span className="text-[6px] font-bold text-slate-400 tracking-widest uppercase -mt-0.5">NEXTGEN SYSTEMS</span>
            
            {/* Реалистичный QR кубик */}
            <div className="w-20 h-20 border border-slate-100 bg-slate-900 my-3 rounded-xl p-2 grid grid-cols-3 gap-1 shadow-inner relative">
              <div className="bg-white w-2 h-2 rounded-[1px]"></div>
              <div></div>
              <div className="bg-white w-2 h-2 rounded-[1px] justify-self-end"></div>
              <div></div><div></div><div></div>
              <div className="bg-white w-2 h-2 rounded-[1px] align-self-end"></div>
            </div>
            
            <p className="text-[9px] font-black text-slate-800 leading-tight">Share your feedback & help us grow!</p>
            <div className="mt-2.5 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded text-[7px] font-extrabold text-slate-500">
              📋 Scan me
            </div>
          </div>

          {/* Справа внизу: Всплывающая плашка добавления контакта */}
          <div className="absolute bottom-14 right-[-10px] hidden sm:flex bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] rounded-xl p-3 border border-slate-100 items-center space-x-3 w-[220px] z-30">
            <div className="bg-emerald-50 text-emerald-500 w-8 h-8 rounded-xl flex items-center justify-center text-sm border border-emerald-100/30">
              👤
            </div>
            <div>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">New customer added</p>
              <p className="text-xs font-black text-slate-900 mt-0.5">sophie@email.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
