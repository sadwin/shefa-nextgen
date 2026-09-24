import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-12 pb-20 bg-white relative overflow-hidden lg:overflow-visible font-sans antialiased">
      
      {/* Рукописный курсив из макета в верхнем правом углу */}
      <div className="absolute right-16 top-6 hidden xl:block transform rotate-[6deg] text-right select-none pointer-events-none z-30">
        <span className="font-serif italic text-[28px] text-[#0F172A] leading-none block">
          Happy customers.
        </span>
        <span className="font-sans font-black text-[12px] tracking-[0.18em] text-[#94A3B8] uppercase block mt-1">
          Stronger businesses.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА — Весь текст, кнопки и теперь плашки (5 колонок) */}
        <div className="lg:col-span-5 space-y-6 z-20">
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
          
          {/* Главные кнопки */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0F172A] hover:bg-black text-white text-[13px] font-bold py-4 px-8 rounded-full flex items-center space-x-2 shadow-lg shadow-slate-900/10 transition-all duration-200">
              <span>See How It Works</span>
              <span className="text-sm">→</span>
            </button>
            <button className="flex items-center space-x-3 text-[#0F172A] text-[13px] font-black hover:opacity-80 px-4 py-3 transition-opacity">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm pl-0.5 text-xs text-slate-800">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Преимущества с галочками */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold text-[#94A3B8] pt-4 border-t border-slate-100">
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Ready in minutes</span>
          </div>

          {/* НИЖНИЙ РЯД ПЛАШЕК — Теперь они тут, аккуратные, резкие и ничего не перекрывают */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            
            {/* Плашка Google */}
            <div className="bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] border border-slate-100 rounded-2xl p-3 flex items-center space-x-3 w-full sm:w-[210px]">
              <div className="bg-slate-50 border w-8 h-8 rounded-lg flex items-center justify-center font-black text-blue-500 text-sm flex-shrink-0">G</div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-black text-slate-900 text-xs">4.8</span>
                  <span className="text-amber-400 text-[9px] flex">★★★★★</span>
                </div>
                <p className="text-[8px] text-slate-400 font-bold mt-0.5">+124 new reviews 📈</p>
              </div>
            </div>

            {/* Плашка Нового клиента */}
            <div className="bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] border border-slate-100 rounded-2xl p-3 flex items-center space-x-3 w-full sm:w-[210px]">
              <div className="bg-emerald-50 text-emerald-500 w-8 h-8 rounded-lg flex items-center justify-center text-xs flex-shrink-0">👤</div>
              <div>
                <p className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">New contact added</p>
                <p className="text-[10px] font-black text-slate-900 mt-0.5">sophie@email.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — Чистая, сочная 3D-картинка без лишних наложений (7 колонок) */}
        <div className="lg:col-span-7 relative w-full flex justify-center items-center mt-6 lg:mt-0 z-10">
          <div className="relative w-full max-w-[620px] aspect-[16/9] rounded-[24px] overflow-hidden shadow-[0_35px_75px_-15px_rgba(0,0,0,0.08)] border border-slate-100/70">
            <Image
              src="/hero-3d-perfect.jpg"
              alt="SHEFA NextGen Premium 3D Scene"
              fill
              priority
              className="object-cover object-center select-none pointer-events-none"
              sizes="(max-w: 1024px) 100vw, 620px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
