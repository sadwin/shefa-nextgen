export default function Hero() {
  return (
    <header className="mx-auto max-w-7xl px-8 pt-16 pb-24 grid lg:grid-cols-12 gap-8 items-center bg-[#FAFCFF] relative overflow-visible font-sans text-[#090F1C]">
      
      {/* Левый текст */}
      <div className="lg:col-span-5 space-y-6">
        <span className="text-[11px] font-black tracking-[0.25em] text-[#94A3B8] uppercase block">AUTOMATE • CONNECT • GROW</span>
        <h1 className="text-[56px] lg:text-[66px] font-black tracking-tight text-[#090F1C] leading-[1.02]">
          Turn every <br />
          <span className="text-black">customer visit</span> <br />
          into growth.
        </h1>
        <p className="text-[15px] text-[#64748B] font-medium leading-[1.6] max-w-[420px]">
          SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <button className="bg-[#090F1C] hover:bg-slate-800 text-white px-8 py-4 rounded-full font-black text-[14px] flex items-center gap-2 transition-all shadow-[0_12px_30px_rgba(9,15,28,0.15)]">
            See How It Works ➔
          </button>
          <button className="flex items-center gap-3 font-black text-[14px] text-slate-800 hover:text-black px-4 py-2 transition-colors">
            <span className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[11px] bg-white shadow-sm">▶</span> Watch Video
          </button>
        </div>
        <div className="flex items-center gap-6 pt-4 text-[12px] font-extrabold text-[#94A3B8]">
          <span className="flex items-center gap-2"><span className="text-emerald-500 text-sm">✓</span> No setup fees</span>
          <span className="flex items-center gap-2"><span className="text-emerald-500 text-sm">✓</span> Cancel anytime</span>
          <span className="flex items-center gap-2"><span className="text-emerald-500 text-sm">✓</span> Ready in minutes</span>
        </div>
      </div>

      {/* Правая часть: Настоящая Pixel-Perfect Сцена */}
      <div className="lg:col-span-7 relative h-[520px] w-full flex justify-center lg:justify-end select-none overflow-visible">
        
        {/* Кастомная маркерная надпись сверху */}
        <div className="absolute right-[250px] -top-6 font-handwritten text-[24px] text-[#1E293B] transform rotate-[-6deg] leading-[1.2] text-center">
          Happy <br /> customers. <br />
          <span className="font-bold text-black relative">
            Stronger
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-amber-400 -z-10 rounded"></span>
          </span> <br />
          businesses.
        </div>

        {/* СЛОЙ 1: Смартфон (WhatsApp Мокап) в центре */}
        <div className="absolute left-[18%] top-10 w-[240px] bg-[#090F1C] p-[10px] rounded-[44px] shadow-[0_30px_70px_-15px_rgba(9,15,28,0.35)] z-20">
          <div className="bg-white rounded-[35px] p-3.5 min-h-[365px] flex flex-col justify-between">
            <div className="space-y-3">
              {/* Шапка чата */}
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs">🏢</div>
                <div className="leading-none">
                  <div className="text-[11px] font-black text-slate-900">Your Business</div>
                  <span className="text-[8px] text-emerald-500 font-black">online</span>
                </div>
              </div>
              {/* Входящее сообщение */}
              <div className="bg-[#F1F5F9] p-2.5 rounded-2xl rounded-tl-none text-[10px] text-[#334155] font-semibold leading-normal max-w-[90%]">
                Hi Sarah! 👋 Thanks for visiting Luna Beauty Amsterdam. How was your experience?
              </div>
              {/* Интерактивные кнопки квиза */}
              <div className="space-y-1.5 pt-1">
                <div className="w-full text-center bg-[#FFFBEB] text-[#B45309] py-2 rounded-xl text-[10px] font-black border border-[#FDE68A] shadow-sm cursor-pointer hover:bg-[#FEF3C7] transition-all">
                  🟡 Could be better
                </div>
                <div className="w-full text-center bg-[#ECFDF5] text-[#065F46] py-2 rounded-xl text-[10px] font-black border border-[#A7F3D0] shadow-sm cursor-pointer hover:bg-[#D1FAE5] transition-all">
                  </div>
              </div>
            </div>
            {/* Ответ системы (как на макете) */}
            <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-[9px] text-slate-500 font-medium">
              We're so glad! 🎉 Would you like to leave us a quick review on Google?
              <span className="text-[#2563EB] font-black block mt-1 cursor-pointer hover:underline">➔ Leave a Google Review</span>
            </div>
          </div>
        </div>

        {/* СЛОЙ 2: Деревянная NFC-стойка (справа на заднем плане) */}
        <div className="absolute right-[10%] bottom-2 w-[165px] bg-white p-4.5 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] z-10 border border-slate-100/60 text-center transform rotate-[1.5deg]">
          <span className="font-black text-[13px] tracking-[0.18em] text-slate-800 block">SHEFA</span>
          <span className="text-[7px] tracking-[0.22em] text-[#94A3B8] font-black block -mt-0.5 mb-3">NEXTGEN SYSTEMS</span>
          <div className="w-28 h-28 bg-[#F8FAFC] mx-auto rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center p-2.5 shadow-inner">
            <div className="w-full h-full bg-slate-200 rounded opacity-60 flex items-center justify-center text-[10px] font-mono font-bold text-slate-400">[QR CODE]</div>
          </div>
          <p className="text-[10px] text-[#1E293B] font-black mt-3 leading-tight">Share your feedback <br /> & help us grow!</p>
          <span className="text-[8px] bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded-full inline-block mt-2">📋 Scan me</span>
        </div>

        {/* СЛОЙ 3: Панель Google Rating (справа на переднем плане) */}
        <div className="absolute right-[-10px] top-12 bg-white px-4 py-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] z-30 flex items-center gap-3 border border-slate-50/50">
          <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-xs font-black border text-slate-700 shadow-inner">G</div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold text-[#94A3B8]">Google Rating</span>
              <span className="text-[15px] font-black text-slate-900">4.8</span>
            </div>
            <div className="text-amber-400 text-[10px] tracking-tight mt-0.5">★★★★★</div>
            <div className="text-[9px] text-emerald-500 font-extrabold mt-0.5">+124 new reviews <span className="text-[#94A3B8] font-medium">this month 📈</span></div>
          </div>
        </div>

        {/* СЛОЙ 4: Лог добавления контакта Sophie (справа по центру) */}
        <div className="absolute right-[-30px] top-[185px] bg-white p-3 rounded-2xl shadow-xl border border-slate-50 z-30 flex items-center gap-3 w-[190px]">
          <div className="w-8 h-8 rounded-full bg-[#ECFDF5] text-emerald-600 flex items-center justify-center text-sm font-bold shadow-inner">👤</div>
          <div className="text-[10px] leading-tight">
            <div className="font-black text-slate-900">New customer added</div>
            <div className="text-[#94A3B8] font-bold mt-0.5">sophie@email.com</div>
          </div>
        </div>

      </div>
    </header>
  );
}
