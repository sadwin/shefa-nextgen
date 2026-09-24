'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-scroll-container');
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      
      if (totalHeight > 0) {
        // Процент прокрутки от 0 до 100
        const scrolled = Math.min(Math.max(-rect.top / totalHeight, 0), 1);
        setScrollPercent(scrolled * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Мощный и плавный сдвиг панорамы: стартуем с левой части стола (0%), 
  // при скролле картинка уезжает влево на 38%, выкатывая смартфон из правого края
  const imageTranslateX = (scrollPercent * 0.38); 
  
  // Плашки проявляются мягко под конец скролла (с 50% до 90%)
  const overlayOpacity = Math.min(Math.max((scrollPercent - 50) / 40, 0), 1);

  return (
    <div id="hero-scroll-container" className="relative w-full h-[220vh] bg-white">
      
      {/* Фиксированный контейнер на весь экран */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center">
        
        {/* ПАНОРАМНЫЙ БЭКГРАУНД: Чистая 4K-картинка без белого мыла и градиентов */}
        <div 
          className="absolute inset-0 w-[160vw] h-full z-0 will-change-transform hidden lg:block"
          style={{ 
            transform: `translateX(-${imageTranslateX}%)`,
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' // Ультра-гладкий смуз-эффект
          }}
        >
          <Image
            src="/hero-3d-perfect.jpg"
            alt="SHEFA NextGen Premium Background"
            fill
            priority
            className="object-cover object-center select-none pointer-events-none"
            sizes="160vw"
          />
        </div>

        {/* Мобильная версия (статичная) */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <Image
            src="/hero-3d-perfect.jpg"
            alt="SHEFA NextGen Premium Background"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>

        {/* СЕТКА С ТЕКСТОМ */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Левая текстовая часть */}
          <div className="lg:col-span-5 space-y-6">
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
              <button className="bg-[#0F172A] hover:bg-black text-white text-[13px] font-bold py-4 px-8 rounded-full flex items-center space-x-2 shadow-lg shadow-slate-900/10 transition-all">
                <span>See How It Works</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
          {/* ПРАВАЯ ЧАСТЬ — Зона фиксации координат для плашек */}
          <div className="lg:col-span-7 relative h-[65%] w-full hidden lg:block pointer-events-none">
            
            {/* ПЛАШКА 1: Google Rating (Кристальное iOS-стекло, выныривает слева от смартфона) */}
            <div 
              className="absolute top-[25%] left-[-20px] bg-white/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.06),0_0_1px_rgba(0,0,0,0.05)] rounded-[22px] p-4 border border-white/40 flex items-center space-x-3.5 w-[230px] transition-all duration-300 pointer-events-auto"
              style={{ 
                opacity: overlayOpacity,
                transform: `translateY(${(1 - overlayOpacity) * 25}px)`
              }}
            >
              <div className="bg-white shadow-[0_3px_10px_rgba(0,0,0,0.03)] w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 flex-shrink-0 font-black text-xl text-blue-500">
                G
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-1">
                  <span className="font-black text-base text-[#0F172A] leading-none">4.8</span>
                  <div className="text-amber-400 text-[10px] tracking-tighter flex space-x-0.5 pb-0.5">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-[9px] text-[#94A3B8] font-bold mt-1 flex items-center gap-1">
                  +124 new reviews this month <span className="text-green-500 text-[10px]">📈</span>
                </p>
              </div>
            </div>

            {/* ПЛАШКА 2: New Customer Added (Появляется чуть ниже) */}
            <div 
              className="absolute bottom-[25%] left-[-35px] bg-white/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.06),0_0_1px_rgba(0,0,0,0.05)] rounded-[22px] p-3.5 border border-white/40 flex items-center space-x-3.5 w-[230px] transition-all duration-300 pointer-events-auto"
              style={{ 
                opacity: overlayOpacity,
                transform: `translateY(${(1 - overlayOpacity) * 25}px)`
              }}
            >
              <div className="bg-emerald-50 text-emerald-500 w-9 h-9 rounded-xl flex items-center justify-center text-sm border border-emerald-100/30 flex-shrink-0 shadow-inner">
                👤
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[8px] text-[#94A3B8] font-black uppercase tracking-wider">New customer added</p>
                <p className="text-xs font-black text-[#0F172A] mt-0.5 tracking-tight">sophie@email.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Преимущества с галочками, которые идут под экраном при дальнейшем скролле наружу */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 -mt-20 pb-12 hidden lg:block">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-bold text-[#94A3B8] pt-6 border-t border-slate-100 max-w-[400px]">
          <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-sm">✓</span> No setup fees</span>
          <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-sm">✓</span> Cancel anytime</span>
          <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-sm">✓</span> Ready in minutes</span>
        </div>
      </div>

      {/* Мобильная адаптация плашек (без скролл-эффектов, просто чистая разметка снизу) */}
      <div className="lg:hidden px-6 pb-12 bg-white space-y-4 relative z-20">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-[#94A3B8] pt-4 pb-6 border-b border-slate-100">
          <span>✓ No setup fees</span>
          <span>✓ Cancel anytime</span>
          <span>✓ Ready in minutes</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <div className="bg-white shadow-md border border-slate-100 rounded-2xl p-3.5 flex items-center space-x-3 w-full">
            <span className="font-black text-blue-500 text-sm">G</span>
            <span className="font-bold text-slate-900 text-xs">4.8 ★★★★★</span>
          </div>
          <div className="bg-white shadow-md border border-slate-100 rounded-2xl p-3.5 flex items-center space-x-3 w-full">
            <span className="text-emerald-500">👤</span>
            <span className="text-[10px] font-black text-slate-900">sophie@email.com</span>
          </div>
        </div>
      </div>

    </div>
  );
}
