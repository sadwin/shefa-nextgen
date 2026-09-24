import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24 bg-[#FCFCFC] relative overflow-hidden lg:overflow-visible font-sans antialiased">
      
      {/* Декоративный наклонный текст в верхнем правом углу */}
      <div className="absolute right-16 top-6 hidden xl:block transform rotate-[6deg] text-right select-none pointer-events-none z-30">
        <span className="font-serif italic text-[28px] text-[#0F172A] leading-none block">
          Happy customers.
        </span>
        <span className="font-sans font-black text-[12px] tracking-[0.18em] text-[#94A3B8] uppercase block mt-1">
          Stronger businesses.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА — Текст и кнопки (5 колонок из 12) */}
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

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold text-[#94A3B8] pt-6 border-t border-slate-100">
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-[#0F172A] text-xs font-black">✓</span> Ready in minutes</span>
          </div>
        </div>
                      {/* ПРАВАЯ КОЛОНКА — Картинка смартфона и сочные дизайнерские оверлеи */}
        <div className="lg:col-span-7 relative w-full flex justify-center items-center mt-8 lg:mt-0 z-10">
          
          {/* Контейнер с пропорциями изображения и мягким свечением стола на фоне */}
          <div className="relative w-full max-w-[640px] aspect-[16/9] rounded-[24px] shadow-[0_35px_80px_-15px_rgba(15,23,42,0.12)] border border-slate-200/50 group">
            
            {/* Твоё качественное ИИ-изображение смартфона и тейбл-тента */}
            <Image
              src="/hero-3d-perfect.jpg"
              alt="SHEFA NextGen Premium 3D Scene"
              fill
              priority
              className="object-cover object-center select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.01]"
              sizes="(max-w: 1024px) 100vw, 620px"
            />

            {/* Глянцевый блик поверх всей сцены для эффекта дороговизны */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

            {/* ПЛАШКА 1: Google Rating (Ультра-сочная, эффект матового стекла + цветной контур) */}
            <div className="absolute top-[24%] left-[-45px] hidden xl:flex bg-white/85 backdrop-blur-lg shadow-[0_20px_40px_-5px_rgba(15,23,42,0.1),0_0_1px_rgba(0,0,0,0.1)] rounded-[22px] p-4 border border-blue-500/10 flex items-center space-x-3.5 w-[235px] z-30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-5px_rgba(59,130,246,0.15)]">
              <div className="bg-gradient-to-b from-white to-slate-50 shadow-[0_4px_12px_rgba(0,0,0,0.04)] w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 flex-shrink-0">
                <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.67z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.93 12c0-.79.13-1.57.39-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.46l4.11-3.22z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.46l4.11 3.22c.94-2.85 3.57-4.93 6.68-4.93z"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
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

            {/* ПЛАШКА 2: New Customer Added (Матовое стекло + изумрудный контур) */}
            <div className="absolute bottom-[20%] left-[2.5%] xl:left-[-35px] bg-white/85 backdrop-blur-lg shadow-[0_20px_40px_-5px_rgba(15,23,42,0.1),0_0_1px_rgba(0,0,0,0.1)] rounded-[22px] p-3.5 border border-emerald-500/10 flex items-center space-x-3.5 w-[235px] z-30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-5px_rgba(16,185,129,0.15)]">
              <div className="bg-gradient-to-b from-emerald-50 to-emerald-100/50 text-emerald-600 w-9 h-9 rounded-xl flex items-center justify-center text-sm border border-emerald-200/40 flex-shrink-0 shadow-inner">
                👤
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[8px] text-[#94A3B8] font-black uppercase tracking-wider">New customer added</p>
                <p className="text-xs font-black text-[#0F172A] mt-0.5 tracking-tight">sophie@email.com</p>
              </div>
            </div>

            {/* Адаптив под мобилки */}
            <div className="xl:hidden absolute bottom-3 inset-x-3 flex justify-center gap-2.5">
              <div className="bg-white/90 backdrop-blur-sm py-1.5 px-3 rounded-xl border border-slate-200/60 text-[9px] font-black text-slate-800 shadow-sm flex items-center space-x-1">
                <span className="text-blue-500">G</span> <span>4.8</span> <span className="text-amber-400">★★★★★</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm py-1.5 px-3 rounded-xl border border-slate-200/60 text-[9px] font-black text-slate-800 shadow-sm flex items-center space-x-1">
                <span className="text-emerald-500">👤</span> <span>Contact Added</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
