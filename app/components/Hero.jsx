import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full bg-[#FDFDFD] overflow-hidden font-sans antialiased">
      
      {/* ПРЕМИУМ ФОН: Левая часть твоей 4K-картинки ложится под весь первый экран */}
      <div className="absolute top-0 inset-x-0 h-[680px] lg:h-[750px] z-0 pointer-events-none">
        <Image
          src="/hero-3d-perfect.jpg"
          alt="SHEFA NextGen Premium Environment"
          fill
          priority
          className="object-cover object-left scale-110 lg:scale-100 transition-transform duration-700"
          sizes="100vw"
        />
        {/* Мягкое затемнение снизу, чтобы бесшовно перейти к следующей секции */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFDFD]" />
      </div>

      {/* РЕАЛЬНАЯ СЕТКА КОНТЕНТА */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Контентная зона первого экрана */}
        <div className="min-h-[580px] lg:min-h-[660px] flex flex-col justify-center pt-20 lg:pt-28 max-w-[550px]">
          <div className="text-[11px] font-black tracking-[0.25em] text-slate-400 uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          
          <h1 className="text-[56px] font-black text-slate-900 tracking-tight leading-[1.01] mt-5">
            Turn every <br />
            customer visit <br />
            <span className="text-slate-900">into growth.</span>
          </h1>
          
          <p className="text-[16px] text-slate-600 max-w-[420px] leading-relaxed font-medium mt-6">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          
          {/* Кнопки в премиальных глубоких тонах */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mt-2">
            <button className="bg-slate-950 hover:bg-black text-white text-[13px] font-bold py-4 px-9 rounded-full shadow-lg shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5">
              See How It Works →
            </button>
            <button className="flex items-center space-x-3 text-slate-950 text-[13px] font-black hover:opacity-80 px-4 py-3 transition-opacity">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm pl-0.5 text-xs">
                ▶
              </span>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Преимущества с галочками */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-extrabold text-slate-400 pt-8 mt-6 border-t border-slate-200/60">
            <span className="flex items-center gap-1.5"><span className="text-slate-900 text-xs font-black">✓</span> No setup fees</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-900 text-xs font-black">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-slate-900 text-xs font-black">✓</span> Ready in minutes</span>
          </div>
        </div>
        {/* СЛЕДУЮЩАЯ СЕКЦИЯ: Объёмный 3D-смартфон и тейбл-тент, выезжающие при обычной прокрутке */}
        <div className="w-full pt-16 pb-24 flex justify-center items-center relative z-20">
          
          {/* Изометрический контейнер с наклоном под углом и глубокой мягкой тенью */}
          <div className="relative w-full max-w-[850px] aspect-[16/9] rounded-[32px] overflow-hidden shadow-[0_45px_95px_-20px_rgba(15,23,42,0.15)] border border-slate-100/80 bg-white transform -rotate-1 lg:-rotate-2 transition-transform duration-500 hover:rotate-0 group">
            
            {/* Сама 3D-картинка, сфокусированная на правой части со смартфоном */}
            <Image
              src="/hero-3d-perfect.jpg"
              alt="SHEFA NextGen Device Showcase"
              fill
              priority
              className="object-cover object-right scale-105 transition-transform duration-700 group-hover:scale-100"
              sizes="(max-w: 1024px) 100vw, 850px"
            />

            {/* Элегантный глянцевый блик поверх дисплея для эффекта стекла */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            
            {/* Тонкая внутренняя виньетка для глубины */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />

          </div>
          
          {/* Каллиграфический декоративный элемент из макета, парящий под блоком */}
          <div className="absolute right-8 bottom-4 hidden xl:block transform -rotate-3 select-none pointer-events-none opacity-40">
            <span className="font-serif italic text-[24px] text-slate-400">
              More reviews. More customers. More revenue.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
