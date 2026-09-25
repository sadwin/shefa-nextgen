'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-white font-sans antialiased text-slate-900 overflow-hidden">
      
      {/* ГЛАВНЫЙ ЭКРАН С ФОНОМ */}
      <div 
        className="relative w-full overflow-hidden min-h-[640px] lg:min-h-[750px]"
        style={{
          backgroundImage: "url('/hero-3d-perfect.jpg')",
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Мягкий градиент на ПК, чтобы темный текст идеально читался поверх дерева */}
        <div 
          className="absolute inset-0 z-0 hidden lg:block"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.94) 35%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)'
          }}
        />
        {/* Мобильная подложка под текст, чтобы листья сзади не мешали читать */}
        <div className="absolute inset-0 bg-white/80 z-0 lg:hidden" />

        {/* Контентная сетка */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[640px] lg:min-h-[750px]">
          
          {/* ЛЕВАЯ КОЛОНКА — Текст и премиум-кнопки (5 колонок из 12) */}
          <div className="lg:col-span-5 space-y-6 py-16 lg:py-0">
            <div className="text-[11px] font-black tracking-[0.25em] text-slate-500 uppercase">
              AUTOMATE • CONNECT • GROW
            </div>
            
            <h1 className="text-[54px] font-black text-slate-900 tracking-tight leading-[1.02]">
              Turn every <br />
              customer visit <br />
              <span className="text-slate-950">into growth.</span>
            </h1>
            
            <p className="text-[15px] text-slate-700 max-w-[400px] leading-relaxed font-bold mt-2">
              SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                className="bg-slate-950 hover:bg-black text-white text-[13px] font-bold py-4 px-9 rounded-full shadow-xl transition-all duration-200 active:scale-95"
                style={{ boxShadow: '0 20px 40px rgba(15,23,42,0.25)' }}
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
              <span className="flex items-center gap-1.5"><span className="text-slate-900 text-xs font-black">✓</span> Cancel anytime</span>
              <span className="flex items-center gap-1.5"><span className="text-slate-900 text-xs font-black">✓</span> Ready in minutes</span>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА — На ПК пустая, так как там отображается правая сторона фоновой картинки */}
          <div className="lg:col-span-7 hidden lg:block" />
        </div>

        {/* Декоративный наклонный текст в верхнем правом углу на ПК */}
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
      </div>

      {/* МОБИЛЬНАЯ СЕКЦИЯ — Выскакивает следом при прокрутке ТОЛЬКО НА СМАРТФОНАХ */}
      <div className="w-full px-6 py-12 bg-white flex flex-col items-center justify-center border-t border-slate-100 lg:hidden">
        <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4 text-center">
          SHEFA LIVE DEMO
        </p>
        
        {/* Контейнер, который кадрирует строго ПРАВУЮ сторону картинки (телефон и QR) под углом */}
        <div 
          className="w-full max-w-[420px] aspect-[4/5] rounded-[32px] shadow-[0_30px_60px_rgba(15,23,42,0.15)] border border-slate-150 relative"
          style={{
            backgroundImage: "url('/hero-3d-perfect.jpg')",
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
            transform: 'rotate(-1deg)'
          }}
        />
        
        <p className="font-serif italic text-lg text-slate-500 text-center mt-6">
          More reviews. More customers. More revenue.
        </p>
      </div>

    </section>
  );
}
