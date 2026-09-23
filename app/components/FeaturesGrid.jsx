export default function FeaturesGrid() {
  const feats = [
    { t: 'Google Reviews', d: 'Get more 5-star reviews', idx: '⭐' },
    { t: 'Customer Database', d: 'Collect valuable contacts', idx: '👥' },
    { t: 'WhatsApp & SMS', d: 'Automated follow-ups', idx: '📱' },
    { t: 'Marketing Campaigns', d: 'Bring customers back', idx: '📊' },
    { t: 'Analytics', d: 'Track your growth', idx: '📈' },
    { t: 'All in One System', d: 'No need for a separate CRM', idx: '⚙️' },
  ];

  return (
    <section className="border-t border-b border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-8 grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
        {feats.map((f, i) => (
          <div key={i} className="space-y-2.5 group cursor-pointer">
            <div className="text-xl mx-auto w-11 h-11 flex items-center justify-center bg-slate-50 rounded-xl border border-gray-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all duration-300 shadow-sm">
              {f.idx}
            </div>
            <h4 className="text-[13px] font-extrabold text-slate-900 tracking-tight leading-none">{f.t}</h4>
            <p className="text-[11px] text-gray-400 font-semibold leading-tight">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
