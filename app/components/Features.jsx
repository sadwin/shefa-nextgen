export default function Features() {
  const items = [
    { icon: "⭐", title: "Google Reviews", desc: "Get more 5-star reviews" },
    { icon: "👥", title: "Customer Database", desc: "Collect valuable contacts" },
    { icon: "📱", title: "WhatsApp & SMS", desc: "Automated follow-ups" },
    { icon: "📊", title: "Marketing Campaigns", desc: "Bring customers back" },
    { icon: "📈", title: "Analytics", desc: "Track your growth" },
    { icon: "⚙️", title: "All in One System", desc: "No need for a separate CRM" },
  ];

  return (
    <section className="border-t border-b border-gray-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <span className="text-xl mb-1">{item.icon}</span>
            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
