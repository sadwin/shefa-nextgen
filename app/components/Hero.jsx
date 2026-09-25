'use client';
import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden font-sans antialiased text-slate-900 bg-white"
      style={{
        backgroundImage: "url('/hero-3d-perfect.jpg')",
        backgroundPosition: 'left center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '720px'
      }}
    >
      {/* Слой поверх картинки на ПК: мягко выбеляет левую часть под текст, 
          но полностью исчезает на мобилках, чтобы не прятать картинку */}
      <div 
        className="absolute inset-0 z-0 hidden lg:block"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)'
        }}
      />
      {/* Мобильное выбеление, чтобы темный текст читался поверх листьев */}
      <div className="absolute inset-0 bg-white/85 z-0 lg:hidden" />

      {/* Контентная сетка */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[720px]">
        
        {/* ЛЕВАЯ КОЛОНКА — Текст и кнопки (Строго 5 колонок из 12) */}
        <div className="lg:col-span-5 space-y-6 py-12 lg:py-0">
          <div className="text-[11px] font-black tracking-[0.25em] text-slate-500 uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          
          <h1 className="text-[54px] font-black text-slate-900 tracking-tight leading-[1.02]">
            Turn every <br />
            customer visit <br />
            <span className="text-slate-950">into growth.</span>
          </h1>
          
          <p className="text-[15px] text-slate-700 max-w-[400px] leading-relaxed font-semibold">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          {/* Премиальная кнопка */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              className="bg-slate-950 hover:bg-black text-white text-[13px] font-bold py-4 px-9 rounded-full shadow-xl transition-all duration-200"
              style={{ boxShadow: '0 20px 40px rgba(15,23,42,0.3)' }}
            >
              See How It Works →
            </button>
            <button className="flex items-center space-x-3 text-slate-950 text-[13px] font-black px-4 py-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm pl-0.5 text-xs">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Галочки преимуществ */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-extrabold text-slate-500 pt-6 border-t border-slate-200">
            <span className="flex items-center gap-1.5"><span className="text-slate-900 text-xs font-black">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-950 text-xs font-black">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-950 text-xs font-black">✓</span> Ready in minutes</span>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — На ПК она ПУСТАЯ (так как телефон уже встроен в фоновую картинку справа) */}
        <div className="lg:col-span-7 hidden lg:block" />
      </div>

      {/* Декоративный наклонный текст в верхнем правом углу */}
      <div 
        className="absolute right-16 top-8 hidden xl:block text-right select-none pointer-events-none z-20"
        style={{ transform: 'rotate(6deg)' }}
      >
        <span className="font-serif italic text-[28px] text-slate-900 leading-none block">
          Happy customers.
        </span>
        <span className="font-sans font-black text-[12px] tracking-[0.18em] text-slate-400 uppercase block mt-1">
          Stronger businesses.
        </span>
      </div>

    </section>
  );
}
