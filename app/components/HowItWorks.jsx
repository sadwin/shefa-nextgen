export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">How It Works</p>
      <h2 className="text-3xl font-black text-slate-900 mb-16 tracking-tight">Get more reviews and customers in 3 simple steps</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Контейнер с шагами */}
        <div className="lg:col-span-9 flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-6">
          
          {/* Шаг 1 */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-4xl font-black text-gray-200">01</span>
              <span className="text-lg bg-gray-50 p-2 rounded-xl">📅</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Visit completed</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Customer finishes their appointment or purchase.</p>
          </div>

          <div className="hidden md:block self-center pt-4 text-gray-300 text-xl">→</div>

          {/* Шаг 2 */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-4xl font-black text-gray-200">02</span>
              <span className="text-lg bg-gray-50 p-2 rounded-xl">💬</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Automatic message</h3>
            <p className="text-xs text-gray-500 leading-relaxed">We send a WhatsApp or SMS message at the perfect time.</p>
          </div>

          <div className="hidden md:block self-center pt-4 text-gray-300 text-xl">→</div>

          {/* Шаг 3 */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-4xl font-black text-gray-200">03</span>
              <span className="text-lg bg-gray-50 p-2 rounded-xl">⭐</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">Get feedback & reviews</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Happy customers leave a Google review and can also share their contact details.</p>
          </div>

        </div>

        {/* Наклонный курсив справа */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end pt-4 lg:pt-0">
          <div className="transform -rotate-6 font-serif italic text-2xl text-slate-800 leading-tight border-l-2 border-slate-950 pl-4 py-1">
            More reviews.<br />
            More customers.<br />
            More revenue.
          </div>
        </div>
      </div>
    </section>
  );
}
