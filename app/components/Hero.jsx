'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Высчитываем, насколько пролистал пользователь в зоне главного экрана
      const heroSection = document.getElementById('hero-scroll-container');
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      
      if (totalHeight > 0) {
        // Переводим скролл в процент от 0 до 100
        const scrolled = Math.min(Math.max(-rect.top / totalHeight, 0), 1);
        setScrollPercent(scrolled * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Высчитываем сдвиг картинки влево на десктопе на основе скролла
  // Изначально показываем левую часть, при скролле она уезжает влево, выкатывая телефон
  const imageTranslateX = Math.max(25 - (scrollPercent * 0.25), 0); 
  // Эффект появления плашек (opacity от 0 до 1)
  const overlayOpacity = Math.min(Math.max((scrollPercent - 40) / 40, 0), 1);

  return (
    <div id="hero-scroll-container" className="relative w-full h-[180vh] bg-white">
      
      {/* Закрепленный контейнер, который «застывает» на экране при прокрутке */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center">
        
        {/* ПАНОРАМНЫЙ БЭКГРАУНД: Твоя 4K-картинка на весь экран */}
        <div 
          className="absolute inset-0 w-[140vw] h-full z-0 transition-transform duration-100 ease-out will-change-transform hidden lg:block"
          style={{ transform: `translateX(-${imageTranslateX}%)` }}
        >
          <Image
            src="/hero-3d-perfect.jpg"
            alt="SHEFA NextGen Premium Background"
            fill
            priority
            className="object-cover object-center select-none pointer-events-none"
            sizes="140vw"
          />
        </div>

        {/* Мобильный фоллбэк: на телефонах панорамный скролл отключаем, чтобы не ломать верстку */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <Image
            src="/hero-3d-perfect.jpg"
            alt="SHEFA NextGen Premium Background"
            fill
            className="object-cover object-left opacity-20"
          />
        </div>

        {/* Левый градиент-затемнение под текст для идеальной читаемости */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/70 to-transparent z-10 hidden lg:block" />

        {/* СЕТКА С КОНТЕНТОМ */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* ЛЕВАЯ ЧАСТЬ — Живой заголовок и кнопки */}
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
          {/* ПРАВАЯ ЧАСТЬ — Контейнер для фиксации координат плашек */}
          <div className="lg:col-span-7 relative h-[60%] w-full hidden lg:block pointer-events-none">
            
            {/* ПЛАШКА 1: Google Rating (Плавно проявляется слева от смартфона) */}
            <div 
              className="absolute top-[20%] left-[8%] bg-white/90 backdrop-blur-md shadow-[0_20px_40px_rgba(15,23,42,0.08)] rounded-[22px] p-4 border border-slate-100 flex items-center space-x-3.5 w-[235px] transition-all duration-300 pointer-events-auto"
              style={{ 
                opacity: overlayOpacity,
                transform: `translateY(${(1 - overlayOpacity) * 20}px)`
              }}
            >
              <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 flex-shrink-0">
                <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.67z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.93 12c0-.79.13-1.57.39-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.46l4.11-3.22z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.46l4.11 3.22c.94-2.85 3.57-4.93 6.68-4.93z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-black text-[15px] text-[#0F172A] tracking-tight leading-none">4.8</span>
                  <div className="text-amber-400 text-[11px] tracking-tighter flex space-x-0.5 pb-0.5">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p className="text-[9px] text-[#64748B] font-bold mt-1 flex items-center gap-1">
                  +124 new reviews this month <span className="text-emerald-500 font-extrabold text-[10px]">📈</span>
                </p>
              </div>
            </div>

            {/* ПЛАШКА 2: New Customer Added (Плавно проявляется ниже первой) */}
            <div 
              className="absolute bottom-[20%] left-[5%] bg-white/90 backdrop-blur-md shadow-[0_20px_40px_rgba(15,23,42,0.08)] rounded-[22px] p-3.5 border border-slate-100 flex items-center space-x-3.5 w-[235px] transition-all duration-300 pointer-events-auto"
              style={{ 
                opacity: overlayOpacity,
                transform: `translateY(${(1 - overlayOpacity) * 20}px)`
              }}
            >
              <div className="bg-gradient-to-b from-emerald-50 to-emerald-100/50 text-emerald-600 w-9 h-9 rounded-xl flex items-center justify-center text-sm border border-emerald-200/40 flex-shrink-0 shadow-inner">
                👤
              </div>
              <div>
                <p className="text-[8px] text-[#94A3B8] font-black uppercase tracking-wider">New customer added</p>
                <p className="text-xs font-black text-[#0F172A] mt-0.5 tracking-tight">sophie@email.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Мобильная версия плашек (рендерится только на смартфонах статично внизу) */}
      <div className="lg:hidden px-6 pb-12 bg-white space-y-4 relative z-20">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-white shadow-md border border-slate-100 rounded-2xl p-3 flex items-center space-x-3 w-full">
            <span className="font-black text-blue-500 text-sm">G</span>
            <span className="font-bold text-slate-900 text-xs">4.8 ★★★★★</span>
          </div>
          <div className="bg-white shadow-md border border-slate-100 rounded-2xl p-3 flex items-center space-x-3 w-full">
            <span className="text-emerald-500">👤</span>
            <span className="text-[10px] font-black text-slate-900">sophie@email.com</span>
          </div>
        </div>
      </div>

    </div>
  );
}
