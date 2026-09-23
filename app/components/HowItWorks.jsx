export default function HowItWorks() {
  const steps = [
    { 
      num: '01', 
      title: 'Visit completed', 
      desc: 'Customer finishes their appointment or purchase.' 
    },
    { 
      num: '02', 
      title: 'Automatic message', 
      desc: 'We send a WhatsApp or SMS message at the perfect time.' 
    },
    { 
      num: '03', 
      title: 'Get feedback & reviews', 
      desc: 'Happy customers leave a Google review and can also share their contact details. You can then keep in touch.' 
    }
  ];

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-8 py-24 relative overflow-visible bg-white text-[#090F1C]">
      {/* Заголовок */}
      <div className="mb-16">
        <h2 className="text-[42px] font-black tracking-tight text-slate-900 leading-none">How It Works</h2>
        <p className="text-gray-400 text-[14px] font-bold mt-2">Get more reviews and customers in 3 simple steps</p>
      </div>

      {/* Сетка шагов */}
      <div className="grid md:grid-cols-3 gap-12 relative z-10 max-w-[85%] lg:max-w-[75%]">
        {steps.map((item, i) => (
          <div key={i} className="relative space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-black text-slate-400 bg-slate-50 border border-slate-200 rounded-full w-9 h-9 flex items-center justify-center shadow-inner shrink-0">
                {item.step || item.num}
              </span>
              <h3 className="text-[18px] font-black tracking-tight text-slate-900 leading-none">{item.title}</h3>
            </div>
            <p className="text-[13px] text-gray-400 font-semibold leading-relaxed pl-13">
              {item.desc}
            </p>
            {/* Стрелочка перехода между шагами на десктопе */}
            {i < 2 && (
              <div className="hidden md:block absolute top-2.5 -right-6 text-slate-200 text-lg font-light select-none">
                ➔
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Рукописный блок «лестница» справа */}
      <div className="absolute right-8 top-20 hidden xl:block font-handwritten text-[28px] text-slate-400 space-y-0.5 transform rotate-[2deg] leading-tight select-none">
        <div className="transition-all hover:text-slate-600">More reviews.</div>
        <div className="pl-6 text-slate-600 transition-all hover:text-slate-800">More customers.</div>
        <div className="pl-12 font-black text-black text-[38px] tracking-tight leading-none">
          More revenue.
        </div>
      </div>
    </section>
  );
}
