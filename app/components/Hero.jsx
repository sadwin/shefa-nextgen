import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full bg-[#FCFCFC] overflow-hidden font-sans antialiased">
      
      {/* ПРЕМИУМ ФОН: Ложится под первый экран */}
      <div className="absolute top-0 inset-x-0 h-[680px] lg:h-[800px] z-0 pointer-events-none">
        <Image
          src="/hero-3d-perfect.jpg"
          alt="SHEFA NextGen Premium Environment"
          fill
          priority
          className="object-cover object-left lg:object-[-120px_center] scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FCFCFC]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Контентная зона первого экрана */}
        <div className="min-h-[580px] lg:min-h-[700px] flex flex-col justify-center pt-20 lg:pt-24 max-w-[550px]">
          <div className="text-[11px] font-black tracking-[0.25em] text-slate-500 uppercase drop-shadow-sm">
            AUTOMATE • CONNECT • GROW
          </div>
          
          {/* Глубокий цвет + drop-shadow для 100% читаемости на фоне дерева */}
          <h1 className="text-[56px] font-black text-slate-900 tracking-tight leading-[1.01] mt-5 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
            Turn every <br />
            customer visit <br />
            <span className="text-slate-950">into growth.</span>
          </h1>
          
          <p className="text-[15px] text-slate-800 max-w-[400px] leading-relaxed font-bold mt-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          {/* УЛЬТРА-ПРЕМИУМ КНОПКА С ЭФФЕКТОМ БЛИКА */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mt-2">
            <button className="relative overflow-hidden bg-slate-950 hover:bg-black text-white text-[13px] font-bold py-4 px-10 rounded-full shadow-[0_20px_40px_rgba(15,23,42,0.25)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,23,42,0.35)] group">
              {/* Анимация бегущей глянцевой полосы при наведении */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]" />
              <span className="relative z-10 flex items-center space-x-1">
                <span>See How It Works</span>
                <span className="text-sm">→</span>
              </span>
            </button>
            
            <button className="flex items-center space-x-3 text-slate-950 text-[13px] font-black hover:opacity-80 px-4 py-3 transition-opacity drop-shadow-sm">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 bg-white/90 backdrop-blur-sm shadow-sm pl-0.5 text-xs">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Преимущества с галочками */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-black text-slate-500 pt-8 mt-6 border-t border-slate-300/60 drop-shadow-sm">
            <span className="flex items-center gap-1.5"><span className="text-slate-950 text-xs font-black">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-950 text-xs font-black">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-950 text-xs font-black">✓</span> Ready in minutes</span>
          </div>
        </div>
        {/* ВТОРАЯ ЧАСТЬ СЕКЦИИ: Смартфон и тейбл-тент. 
            Благодаря классу `lg:hidden`, этот блок полностью СКРЫТ НА ПК, 
            но отображается на телефонах при обычной прокрутке вниз. */}
        <div className="w-full pt-8 pb-16 flex justify-center items-center relative z-20 lg:hidden">
          
          {/* Изометрический контейнер с легким наклоном для мобилок */}
          <div className="relative w-full max-w-[480px] aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_30px_60px_-10px_rgba(15,23,42,0.12)] border border-slate-100 bg-white">
            
            <Image
              src="/hero-3d-perfect.jpg"
              alt="SHEFA NextGen Device Showcase"
              fill
              priority
              className="object-cover object-right scale-105"
              sizes="(max-w: 1024px) 100vw, 480px"
            />

            {/* Мягкий блик поверх экрана */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Чтобы анимация блика на кнопке (shimmer) завелась в Tailwind, 
          мы добавляем временный инлайн-стиль для ключевых кадров анимации */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
