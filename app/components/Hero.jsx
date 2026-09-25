'use client';
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-white font-sans antialiased text-slate-900 overflow-hidden">
      
      {/* 1. ДЕСКТОПНАЯ СЕКЦИЯ (Отображается только на ПК) */}
      <div 
        className="relative w-full overflow-hidden min-h-[640px] lg:min-h-[750px] hidden lg:block"
        style={{
          backgroundImage: "url('/hero-bg-desktop.jpg')",
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.94) 35%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[640px] lg:min-h-[750px]">
          <div className="lg:col-span-5 space-y-6">
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
            <div className="flex items-center gap-4 pt-2">
              <button 
                className="bg-slate-950 hover:bg-black text-white text-[13px] font-bold py-4 px-9 rounded-full shadow-xl transition-all duration-200 active:scale-95"
                style={{ boxShadow: '0 20px 40px rgba(15,23,42,0.25)' }}
              >
                See How It Works →
              </button>
              <button className="flex items-center space-x-3 text-slate-950 text-[13px] font-black px-4 py-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm pl-0.5 text-xs">▶</span>
                <span>Watch Video</span>
              </button>
            </div>
            <div className="flex items-center gap-x-6 text-[11px] font-extrabold text-slate-500 pt-6 border-t border-slate-200">
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
              <span>✓ Ready in minutes</span>
            </div>
          </div>
          <div className="lg:col-span-7" />
        </div>

        <div className="absolute right-16 top-8 text-right select-none pointer-events-none z-20" style={{ transform: 'rotate(6deg)' }}>
          <span className="font-serif italic text-[28px] text-slate-900 leading-none block">Happy customers.</span>
          <span className="font-sans font-black text-[12px] tracking-[0.18em] text-slate-400 uppercase block mt-1">Stronger businesses.</span>
        </div>
      </div>

      {/* 2. МОБИЛЬНАЯ СЕКЦИЯ (Отображается только на телефонах) */}
      <div className="w-full lg:hidden bg-white relative">
        
        {/* Главный мобильный контейнер */}
        <div className="relative w-full px-6 pt-16 pb-12 min-h-[540px] flex flex-col justify-center overflow-hidden">
          
          {/* ЖЕСТКОЕ ФИЗИЧЕСКОЕ ПОЗИЦИОНИРОВАНИЕ КАРТИНКИ */}
          <div className="absolute inset-y-0 left-0 w-[250vw] h-full z-0 select-none pointer-events-none">
            <Image
              src="/hero-bg-desktop.jpg"
              alt="Background Showcase"
              fill
              priority
              className="object-cover object-left"
              sizes="250vw"
            />
          </div>

          {/* МАТОВАЯ ПОДЛОЖКА НА 100% ВЫСОТЫ И ШИРИНЫ — Перекрывает картинку намертво */}
          <div className="absolute inset-0 bg-white/90 z-10 backdrop-blur-[4px] border-b border-slate-100" />

          {/* ЖИВОЙ ТЕКСТ (Поверх подложки благодаря z-20) */}
          <div className="relative z-20 space-y-5">
            <div className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">
              AUTOMATE • CONNECT • GROW
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
              Turn every <br />
              customer visit <br />
              <span className="text-slate-950">into growth.</span>
            </h1>
            <p className="text-sm text-slate-800 leading-relaxed font-bold">
              SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back.
            </p>
            <button className="w-full bg-slate-950 text-white text-xs font-bold py-4 rounded-full shadow-lg">
              See How It Works →
            </button>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-bold text-slate-500 pt-4 border-t border-slate-200/60">
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
              <span>✓ Ready in minutes</span>
            </div>
          </div>
        </div>

        {/* Отдельный мобильный блок с отцентрованным смартфоном и QR */}
        <div className="px-6 py-12 bg-white flex flex-col items-center relative z-20">
          <div 
            className="w-full max-w-[380px] aspect-[4/5] rounded-[32px] shadow-[0_25px_50px_rgba(15,23,42,0.12)] border border-slate-100"
            style={{
              backgroundImage: "url('/hero-mobile-showcase.jpg')",
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              transform: 'rotate(-1deg)'
            }}
          />
          <p className="font-serif italic text-base text-slate-400 text-center mt-6">
            More reviews. More customers. More revenue.
          </p>
        </div>
      </div>

    </section>
  );
}
