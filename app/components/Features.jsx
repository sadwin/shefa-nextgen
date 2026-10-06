export default function Features() {
  const items = [
    {
      number: '01',
      title: 'Get more Google reviews',
      desc: 'Automatically ask customers for feedback at the right moment.',
    },
    {
      number: '02',
      title: 'Build your customer database',
      desc: 'Turn every visit into a valuable customer relationship.',
    },
    {
      number: '03',
      title: 'WhatsApp & SMS',
      desc: 'Reach customers directly without manual follow-ups.',
    },
    {
      number: '04',
      title: 'Bring customers back',
      desc: 'Create campaigns that turn first-time visitors into regulars.',
    },
    {
      number: '05',
      title: 'Understand your growth',
      desc: 'See reviews, customers and retention in one dashboard.',
    },
    {
      number: '06',
      title: 'One system',
      desc: 'Everything your local business needs in one place.',
    },
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#9d7a2d]">
            Everything connected
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-.04em] text-[#171717] sm:text-5xl">
            One system.
            <br />
            Every customer.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#e7e4dc] bg-[#e7e4dc] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.number}
              className="group bg-[#fafaf8] p-8 transition hover:bg-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-[#b1aea6]">
                  {item.number}
                </span>

                <span className="text-[#c9a24a] transition group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-12 text-lg font-extrabold tracking-tight text-[#171717]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#77756f]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}