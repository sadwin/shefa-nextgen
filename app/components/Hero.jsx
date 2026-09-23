import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-24 bg-white overflow-visible">
      {/* Рукописный слоган в правом верхнем углу */}
      <div className="absolute right-12 top-6 hidden lg:block transform rotate-6 font-serif italic text-2xl text-slate-800 leading-tight text-right">
        Happy<br />
        customers.<br />
        <span className="font-sans not-italic font-black text-sm tracking-widest uppercase text-gray-300 block mt-1">
          Stronger<br />businesses.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА — Контент и кнопки */}
        <div className="lg:col-span-5 space-y-6 z-15">
          <div className="text-[11px] font-bold tracking-[0.25em] text-gray-400 uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          
          <h1 className="text-[56px] font-black text-slate-900 tracking-tight leading-[0.98]">
            Turn every <br />
            customer visit <br />
            <span className="text-slate-900">into growth.</span>
          </h1>
          
          <p className="text-[15px] text-gray-500 max-w-[390px] leading-relaxed font-normal">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-slate-950 hover:bg-black text-white text-sm font-bold py-4 px-8 rounded-full flex items-center space-x-2 transition-all">
              <span>See How It Works</span>
              <span className="text-base">→</span>
            </button>
            <button className="flex items-center space-x-3 text-slate-950 text-sm font-black hover:opacity-80 px-4 py-3 transition-opacity">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm pl-0.5 text-xs">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-gray-400 pt-6 border-t border-gray-100">
            <span className="flex items-center gap-1.5"><span className="text-slate-950 font-bold">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-950 font-bold">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-950 font-bold">✓</span> Ready in minutes</span>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — Точный визуальный коллаж */}
        <div className="lg:col-span-7 relative flex justify-center items-center min-h-[570px] w-full mt-12 lg:mt-0">
          
          {/* Левая плашка: Google Rating */}
          <div className="absolute top-10 left-[-20px] hidden xl:flex bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-2xl p-4 z-30 border border-gray-100 flex items-center space-x-3.5 w-[230px]">
            <div className="bg-white shadow-sm w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 font-black text-xl text-blue-500">
              G
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-black text-slate-900 text-base leading-none">4.8</span>
                <div className="text-amber-400 text-xs tracking-tighter flex">★★★★★</div>
              </div>
              <p className="text-[9px] text-gray-400 font-bold mt-1 flex items-center gap-1">
                +124 new reviews this month <span className="text-green-500">📈</span>
              </p>
            </div>
          </div>
          {/* Центр: Смартфон с интерфейсом WhatsApp чата */}
          <div className="relative w-[285px] h-[560px] bg-slate-900 rounded-[44px] p-3 shadow-[0_40px_80px_rgba(15,23,42,0.12)] z-20 border-[6px] border-slate-950">
            {/* Островок камеры сверху */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-3.5 bg-slate-950 rounded-full z-40"></div>
            
            {/* Экран телефона */}
            <div className="w-full h-full bg-[#E5E7EB] rounded-[34px] overflow-hidden p-3 pt-9 flex flex-col justify-between relative text-[11px]">
              
              {/* Статус-бар сверху чата */}
              <div className="bg-white/95 border-b border-gray-200 absolute top-0 inset-x-0 pt-5 pb-2 px-4 flex items-center space-x-2 z-30">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs shadow-inner">🏢</div>
                <div>
                  <p className="font-bold text-slate-800 text-[10px] leading-tight">Your Business</p>
                  <p className="text-[8px] text-green-500 font-bold leading-none">online</p>
                </div>
              </div>

              {/* Лента сообщений */}
              <div className="space-y-3 flex-1 flex flex-col justify-end pb-1">
                {/* Входящее от компании */}
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200/50 space-y-2.5 max-w-[90%] shadow-sm">
                  <p className="text-slate-700 font-medium leading-snug">Hi Sarah! 👋 Thanks for visiting Luna Beauty Amsterdam. How was your experience?</p>
                  
                  {/* Кнопки прямо в чате */}
                  <div className="space-y-1">
                    <button className="w-full bg-amber-50/50 border border-amber-200 hover:bg-amber-50 text-amber-600 font-bold py-1.5 rounded-xl text-[10px] transition-colors">
                      🟡 Could be better
                    </button>
                    <button className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-bold py-1.5 rounded-xl text-[10px] transition-colors shadow-sm shadow-emerald-500/10">
                      🟢 Great!
                    </button>
                  </div>
                  <span className="block text-[8px] text-gray-400 text-right mt-0.5">14:21</span>
                </div>

                {/* Исходящее/Следующее сообщение */}
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200/50 space-y-2 max-w-[90%] shadow-sm">
                  <p className="text-slate-700 font-medium leading-snug">We're so glad! 🎉 Would you like to leave us a quick review on Google?</p>
                  <a href="#" className="bg-blue-50 border border-blue-100 text-blue-600 font-extrabold py-2 px-3 rounded-xl block text-center text-[10px] transition-colors hover:bg-blue-100">
                    Leave a Google Review
                  </a>
                  <span className="block text-[8px] text-gray-400 text-right mt-0.5">14:22</span>
                </div>
              </div>
            </div>
          </div>

          {/* Справа: Тейбл-тент с QR кодом */}
          <div className="absolute right-6 top-[15%] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.06)] rounded-3xl p-5 w-[170px] z-30 border border-gray-100/80 text-center flex flex-col items-center">
            <span className="text-[9px] font-black text-slate-900 tracking-wider">SHEFA</span>
            <span className="text-[6px] font-bold text-gray-400 tracking-widest uppercase -mt-0.5">NEXTGEN SYSTEMS</span>
            
            {/* Графический QR-код */}
            <div className="w-20 h-20 border-2 border-dashed border-gray-200 bg-slate-50 my-3 rounded-xl flex items-center justify-center p-1 relative">
              <div className="w-full h-full bg-slate-900 rounded-lg p-1.5 grid grid-cols-3 gap-1">
                <div className="bg-white w-2 h-2 rounded-sm"></div>
                <div></div>
                <div className="bg-white w-2 h-2 rounded-sm justify-self-end"></div>
                <div></div><div></div><div></div>
                <div className="bg-white w-2 h-2 rounded-sm align-self-end"></div>
              </div>
            </div>
            
            <p className="text-[9px] font-black text-slate-800 leading-tight">Share your feedback & help us grow!</p>
            <div className="mt-2 bg-slate-50 border border-slate-100/70 px-2 py-0.5 rounded text-[8px] font-bold text-slate-500">
              📋 Scan me
            </div>
          </div>

          {/* Справа внизу: Плашка "New customer added" */}
          <div className="absolute bottom-12 right-[-10px] bg-white shadow-[0_25px_50px_rgba(0,0,0,0.05)] rounded-2xl p-3.5 z-30 border border-gray-100 flex items-center space-x-3 w-[220px]">
            <div className="bg-emerald-50 text-emerald-500 w-8 h-8 rounded-xl flex items-center justify-center text-sm border border-emerald-100/30">
              👤
            </div>
            <div>
              <p className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">New customer added</p>
              <p className="text-xs font-black text-slate-900 mt-0.5">sophie@email.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}