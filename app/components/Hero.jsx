import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 pt-16 pb-28 bg-[#FDFDFD] overflow-hidden lg:overflow-visible">
      
      {/* Рукописный декоративный оверлей в правом углу */}
      <div className="absolute right-16 top-4 hidden xl:block transform rotate-[5deg] text-right select-none pointer-events-none">
        <span className="font-serif italic text-[28px] text-[#1E293B] font-medium tracking-wide block leading-none">
          Happy customers.
        </span>
        <span className="font-sans font-black text-[12px] tracking-[0.2em] text-[#CBD5E1] uppercase block mt-1">
          Stronger businesses.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ЛЕВАЯ СТОРОНА — Контент (Ровно 5 колонок) */}
        <div className="lg:col-span-5 space-y-6 z-20">
          <div className="text-[11px] font-black tracking-[0.25em] text-[#94A3B8] uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          
          <h1 className="text-[56px] font-black text-[#0F172A] tracking-tight leading-[0.96] font-sans antialiased">
            Turn every <br />
            customer visit <br />
            <span className="text-[#0F172A]">into growth.</span>
          </h1>
          
          <p className="text-[15px] text-[#64748B] max-w-[400px] leading-relaxed font-normal antialiased">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0F172A] hover:bg-black text-white text-[13px] font-bold py-4 px-8 rounded-full flex items-center space-x-2 shadow-lg shadow-slate-900/10 transition-all duration-200">
              <span>See How It Works</span>
              <span className="text-sm">→</span>
            </button>
            <button className="flex items-center space-x-3 text-[#0F172A] text-[13px] font-black hover:opacity-80 px-4 py-3 transition-opacity">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm pl-0.5 text-xs">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold text-[#94A3B8] pt-6 border-t border-slate-100">
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Ready in minutes</span>
          </div>
        </div>

        {/* ПРАВАЯ СТОРОНА — Интерактивный адаптивный контейнер-коллаж (7 колонок) */}
        <div className="lg:col-span-7 relative flex justify-center items-center min-h-[580px] w-full mt-12 lg:mt-0 select-none">
          
          {/* Векторная плашка Google Rating с субпиксельным размытием заднего фона */}
          <div className="absolute top-8 left-[-20px] hidden xl:flex bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(15,23,42,0.06)] rounded-[22px] p-4 z-30 border border-white/60 items-center space-x-4 w-[245px]">
            <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] w-11 h-11 flex items-center justify-center rounded-xl border border-slate-100/80 flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.67z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
                <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.93 12c0-.79.13-1.57.39-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.46l4.11-3.22z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.46l4.11 3.22c.94-2.85 3.57-4.93 6.68-4.93z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-black text-base text-[#0F172A] leading-none">4.8</span>
                <div className="text-amber-400 text-[11px] tracking-tighter flex space-x-0.5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <p className="text-[9px] text-[#94A3B8] font-extrabold mt-1 flex items-center gap-1">
                +124 new reviews this month <span className="text-green-500 text-xs">📈</span>
              </p>
            </div>
          </div>
          {/* Центр: Конструктор смартфона iOS с идеальным скруглением углов */}
          <div className="relative w-[280px] h-[560px] bg-[#1E293B] rounded-[46px] p-2.5 shadow-[0_45px_95px_-20px_rgba(15,23,42,0.18)] z-20 border-[6px] border-[#0F172A] flex-shrink-0">
            {/* Динамический Остров (Notch) */}
            <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-[#0F172A] rounded-full z-40"></div>
            
            {/* Рабочая область экрана устройства */}
            <div className="w-full h-full bg-[#E5E7EB] rounded-[36px] overflow-hidden p-3 pt-9 flex flex-col justify-between relative text-[10px] font-sans antialiased">
              
              {/* Верхняя плашка контакта WhatsApp */}
              <div className="bg-white/95 border-b border-slate-200/50 absolute top-0 inset-x-0 pt-5 pb-2 px-3 flex items-center space-x-2.5 z-30 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-xs shadow-inner">🏢</div>
                <div className="flex flex-col">
                  <span className="font-black text-slate-800 text-[9px] leading-tight">Your Business</span>
                  <span className="text-[7px] text-emerald-500 font-extrabold leading-none mt-0.5">online</span>
                </div>
              </div>

              {/* Тело чата */}
              <div className="space-y-3 flex-1 flex flex-col justify-end pb-1 overflow-hidden">
                {/* Сообщение 1: От бизнеса */}
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-[92%] space-y-2.5">
                  <p className="text-slate-800 font-semibold leading-snug">Hi Sarah! 👋 Thanks for visiting Luna Beauty Amsterdam. How was your experience?</p>
                  
                  {/* Две интерактивные кнопки выбора внутри сообщения */}
                  <div className="space-y-1.5 pt-0.5">
                    <button className="w-full bg-white border border-amber-200 hover:bg-amber-50 text-amber-600 font-bold py-1.5 rounded-xl text-[9px] text-center block transition-colors">
                      🟡 Could be better
                    </button>
                    <button className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-bold py-1.5 rounded-xl text-[9px] text-center block transition-colors shadow-sm shadow-emerald-500/10">
                      🟢 Great!
                    </button>
                  </div>
                  <span className="block text-[7px] text-slate-400 text-right -mt-1">14:21</span>
                </div>

                {/* Сообщение 2: Авто-ответ с переходом на Google отзывы */}
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-[92%] space-y-2">
                  <p className="text-slate-800 font-semibold leading-snug">We're so glad! 🎉 Would you like to leave us a quick review on Google?</p>
                  <a href="#" className="bg-blue-50 border border-blue-100 text-blue-600 font-black py-2 px-3 rounded-xl block text-center text-[9px] tracking-wide transition-colors hover:bg-blue-100/70">
                    Leave a Google Review
                  </a>
                  <span className="block text-[7px] text-slate-400 text-right">14:22</span>
                </div>
              </div>

            </div>
          </div>

          {/* Справа: Тейбл-тент (Векторный QR стенд) */}
          <div className="absolute right-4 top-[15%] hidden md:flex bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] rounded-[24px] p-5 w-[165px] z-30 border border-slate-100/80 flex flex-col items-center">
            <span className="text-[9px] font-black text-slate-900 tracking-wider">SHEFA</span>
            <span className="text-[6px] font-bold text-gray-400 tracking-widest uppercase -mt-0.5">NEXTGEN SYSTEMS</span>
            
            {/* Пиксельно-чистый векторный QR код */}
            <div className="w-20 h-20 bg-slate-900 my-3.5 rounded-xl p-2.5 shadow-inner relative flex items-center justify-center">
              <div className="w-full h-full grid grid-cols-4 gap-1 p-0.5">
                <div className="bg-white w-2 h-2 rounded-[1px]"></div>
                <div></div><div></div>
                <div className="bg-white w-2 h-2 rounded-[1px] justify-self-end"></div>
                <div></div>
                <div className="bg-white w-1 h-1 rounded-[1px] col-span-2 justify-self-center self-center"></div>
                <div></div><div></div><div></div><div></div><div></div>
                <div className="bg-white w-2 h-2 rounded-[1px] align-self-end"></div>
              </div>
            </div>
            
            <p className="text-[9px] font-black text-slate-800 leading-tight">Share your feedback & help us grow!</p>
            <div className="mt-2.5 bg-[#F8FAFC] border border-slate-100 px-3 py-0.5 rounded-md text-[7px] font-extrabold text-slate-500">
              📋 Scan me
            </div>
          </div>

          {/* Справа внизу: Всплывающая плашка CRM о добавлении нового контакта */}
          <div className="absolute bottom-16 right-[-15px] hidden sm:flex bg-white shadow-[0_25px_50px_rgba(0,0,0,0.06)] rounded-2xl p-3.5 border border-slate-100 items-center space-x-3 w-[225px] z-30">
            <div className="bg-emerald-50 text-emerald-500 w-8 h-8 rounded-xl flex items-center justify-center text-sm border border-emerald-100/20 flex-shrink-0">
              👤
            </div>
            <div>
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">New customer added</p>
              <p className="text-xs font-black text-slate-900 mt-0.5 tracking-tight">sophie@email.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
