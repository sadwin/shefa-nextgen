import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 bg-[#FCFCFC] relative overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Левая колонка — Текст и кнопки */}
        <div className="lg:col-span-5 space-y-6 z-10">
          <div className="text-[11px] font-bold tracking-[0.25em] text-gray-400 uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          
          <h1 className="text-[52px] font-black text-[#0F172A] tracking-tight leading-[1.02]">
            Turn every <br />
            customer visit <br />
            <span className="text-[#0F172A]">into growth.</span>
          </h1>
          
          <p className="text-[15px] text-gray-500 max-w-[400px] leading-relaxed font-normal">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0F172A] hover:bg-black text-white text-sm font-semibold py-4 px-8 rounded-full flex items-center space-x-2 shadow-lg shadow-slate-900/10 transition-all">
              <span>See How It Works</span>
              <span className="text-base">→</span>
            </button>
            <button className="flex items-center space-x-3 text-[#0F172A] text-sm font-bold hover:opacity-80 px-4 py-3 transition-opacity">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm pl-0.5 text-xs text-slate-800">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-gray-400 pt-6 border-t border-gray-100">
            <span className="flex items-center gap-1.5"><span className="text-gray-900">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-gray-900">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-gray-900">✓</span> Ready in minutes</span>
          </div>
        </div>

        {/* Правая колонка — Точный Коллаж */}
        <div className="lg:col-span-7 relative flex justify-center items-center min-h-[580px] w-full">
          
          {/* 1. Плашка Google Rating (Слева вверху) */}
          <div className="absolute top-12 left-0 bg-white/95 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[20px] p-4 z-30 border border-gray-100/80 flex items-center space-x-3.5 w-[250px]">
            <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] w-11 h-11 flex items-center justify-center rounded-xl border border-gray-100">
              {/* Буква G в стиле Google */}
              <span className="text-2xl font-black bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-extrabold text-lg text-slate-900 leading-none">4.8</span>
                <div className="text-amber-400 text-xs tracking-tighter flex">
                  ★★★★★
                </div>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold mt-0.5 flex items-center gap-1">
                +124 new reviews this month
                <span className="text-green-500 text-xs">📈</span>
              </p>
            </div>
          </div>

          {/* 2. Смартфон (Интерфейс iOS 1-в-1) */}
          <div className="relative w-[280px] h-[550px] bg-[#1E293B] rounded-[48px] p-3 shadow-[0_30px_70px_rgba(15,23,42,0.15)] z-20 border-[6px] border-[#0F172A]">
            {/* Динамический остров (Notch) */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-[#0F172A] rounded-full z-40"></div>
            
            {/* Экран телефона */}
            <div className="w-full h-full bg-[#F4F4F5] rounded-[38px] overflow-hidden p-3 pt-8 flex flex-col justify-between relative text-[11px] font-sans">
              
              {/* Шапка чата */}
              <div className="bg-white/80 backdrop-blur-md absolute top-0 left-0 right-0 py-2 px-4 flex items-center space-x-2 border-b border-gray-200/50 z-30 pt-6">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs">🏢</div>
                <div>
                  <p className="font-bold text-slate-800 text-[10px] leading-tight">Your Business</p>
                  <p className="text-[8px] text-green-500 font-medium leading-none">online</p>
                </div>
              </div>

              {/* Тело чата */}
              <div className="space-y-3 pt-6 flex-1 flex flex-col justify-end pb-2">
                {/* Исходящее от бизнеса */}
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-gray-200/60 space-y-2.5 max-w-[90%]">
                  <p className="text-slate-400 text-[9px] font-semibold">Hi Sarah! 👋 Thanks for visiting Luna Beauty Amsterdam. How was your experience?</p>
                  
                  {/* Две кнопки-ответа прямо внутри сообщения */}
                  <div className="flex flex-col space-y-1.5">
                    <button className="w-full bg-white border border-amber-200 hover:bg-amber-50 text-amber-600 font-bold py-2 rounded-xl text-center text-[10px] transition-colors flex items-center justify-center space-x-1">
                      <span className="text-xs">🟡</span> <span>Could be better</span>
                    </button>
                    <button className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-bold py-2 rounded-xl text-center text-[10px] transition-colors flex items-center justify-center space-x-1 shadow-sm shadow-emerald-500/20">
                      <span className="text-xs">🟢</span> <span>Great!</span>
                    </button>
                  </div>
                  <span className="block text-[8px] text-gray-400 text-right">14:21</span>
                </div>

                {/* Второе сообщение — Редирект на отзыв */}
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-gray-200/60 space-y-2 max-w-[90%] animate-fade-in">
                  <p className="text-slate-700 font-medium">We're so glad! 🎉 Would you like to leave us a quick review on Google?</p>
                  <a href="#" className="bg-blue-50 border border-blue-100 text-blue-600 font-bold py-2 px-3 rounded-xl block text-center text-[10px] hover:bg-blue-100 transition-colors">
                    🔍 Leave a Google Review
                  </a>
                  <span className="block text-[8px] text-gray-400 text-right">14:22</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Тейбл-тент / Настольный QR-стенд (Справа) */}
          <div className="absolute right-0 top-[22%] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] rounded-[24px] p-5 w-[180px] z-30 border border-gray-100 text-center flex flex-col items-center">
            <span className="text-[9px] font-black text-slate-800 tracking-[0.15em] leading-none">SHEFA</span>
            <span className="text-[6px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-0.5">NEXTGEN SYSTEMS</span>
            
            {/* Реалистичный блок под QR-код */}
            <div className="w-24 h-24 bg-white p-1.5 rounded-xl border border-gray-100 shadow-inner my-3 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-2 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                {/* Симуляция узора QR кода */}
                <div className="w-16 h-16 bg-slate-900 rounded opacity-95 grid grid-cols-3 gap-1 p-1">
                  <div className="bg-white rounded-sm w-3 h-3 m-0.5"></div>
                  <div></div>
                  <div className="bg-white rounded-sm w-3 h-3 m-0.5 justify-self-end"></div>
                  <div></div><div></div><div></div>
                  <div className="bg-white rounded-sm w-3 h-3 m-0.5 align-self-end"></div>
                </div>
              </div>
            </div>
            
            <p className="text-[10px] font-extrabold text-slate-800 leading-tight">Share your feedback & help us grow!</p>
            <div className="mt-2 bg-slate-50 border border-gray-100 px-3 py-1 rounded-md text-[9px] font-bold text-slate-500 flex items-center space-x-1">
              <span>📋</span> <span>Scan me</span>
            </div>
          </div>

          {/* 4. Плашка Новый клиент (Справа внизу) */}
          <div className="absolute bottom-16 right-[-20px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-2xl p-3.5 z-30 border border-gray-100/80 flex items-center space-x-3 w-[240px]">
            <div className="bg-emerald-50 text-emerald-500 w-9 h-9 rounded-xl flex items-center justify-center text-base border border-emerald-100/50">
              👤
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">New customer added</p>
              <p className="text-xs font-black text-slate-900 mt-0.5">sophie@email.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
