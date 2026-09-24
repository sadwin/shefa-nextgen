import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-20 bg-white overflow-hidden lg:overflow-visible font-sans antialiased">
      
      {/* Декоративная наклонная надпись из макета в правом верхнем углу */}
      <div className="absolute right-16 top-6 hidden xl:block transform rotate-[6deg] text-right select-none pointer-events-none z-30">
        <span className="font-serif italic text-[28px] text-[#0F172A] leading-none block">
          Happy customers.
        </span>
        <span className="font-sans font-black text-[12px] tracking-[0.18em] text-[#94A3B8] uppercase block mt-1">
          Stronger businesses.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА — Чистый контент и кнопки (Ровно 5 колонок из 12) */}
        <div className="lg:col-span-5 space-y-6 z-20 bg-white/80 backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-2xl">
          <div className="text-[11px] font-black tracking-[0.25em] text-[#94A3B8] uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          
          <h1 className="text-[54px] font-black text-[#0F172A] tracking-tight leading-[1.02]">
            Turn every <br />
            customer visit <br />
            <span className="text-[#0F172A]">into growth.</span>
          </h1>
          
          <p className="text-[15px] text-[#57657A] max-w-[390px] leading-relaxed font-normal">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0F172A] hover:bg-black text-white text-[13px] font-bold py-4 px-8 rounded-full flex items-center space-x-2 shadow-lg shadow-slate-900/10 transition-all duration-200">
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
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Ready in minutes</span>
          </div>
        </div>
        {/* ПРАВАЯ КОЛОНКА — ИИ-картинка как фиксированный бэкграунд сцены (7 колонок из 12) */}
        <div className="lg:col-span-7 relative w-full flex justify-center items-center mt-6 lg:mt-0 z-10">
          
          {/* Контейнер со строгими пропорциями макета (сохраняет 100% геометрию сцены без мыла) */}
          <div className="relative w-full max-w-[640px] aspect-[2/1] sm:aspect-[16/8] lg:aspect-[16/9] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
            
            {/* Твоя ИИ-картинка, зафиксированная внутри контейнера */}
            <Image
              src="/hero-ai-bg.jpg"
              alt="SHEFA NextGen 3D Scene"
              fill
              priority
              className="object-cover object-center select-none pointer-events-none"
              sizes="(max-w: 1024px) 100vw, 640px"
            />
            
            {/* Легкий внутренний градиент по краям картинки для мягкого вписывания в белый сайт */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" />

          </div>
        </div>

      </div>
    </section>
  );
}
