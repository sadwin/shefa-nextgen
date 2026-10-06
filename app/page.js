<section
  id="features"
  className="bg-[#F7F7F5] px-6 py-28"
>
  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B7837]">
        ONE SYSTEM
      </p>

      <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#11110F] md:text-5xl">
        Everything you need to grow
        <br />
        customer relationships.
      </h2>

      <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#6D6D67]">
        From the first visit to the next purchase,
        SHEFA keeps your customer journey connected.
      </p>
    </div>

    <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          number: '01',
          title: 'Get more Google reviews',
          text: 'Automatically ask customers for feedback at the right moment.',
        },
        {
          number: '02',
          title: 'Build your customer database',
          text: 'Turn every interaction into a valuable customer relationship.',
        },
        {
          number: '03',
          title: 'WhatsApp & SMS',
          text: 'Reach customers directly without manual follow-ups.',
        },
        {
          number: '04',
          title: 'Bring customers back',
          text: 'Automatically remind customers when it is time to return.',
        },
        {
          number: '05',
          title: 'Measure what works',
          text: 'See reviews, customers and campaigns in one dashboard.',
        },
        {
          number: '06',
          title: 'One simple system',
          text: 'Everything your local business needs in one place.',
        },
      ].map((item) => (
        <div
          key={item.number}
          className="group rounded-[28px] border border-[#E6E4DE] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,17,15,0.08)]"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8A45D]">
            {item.number}
          </span>

          <h3 className="mt-12 text-xl font-bold tracking-tight text-[#11110F]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#6D6D67]">
            {item.text}
          </p>

          <div className="mt-8 text-[#C8A45D] transition-transform group-hover:translate-x-1">
            →
          </div>
        </div>
      ))}

    </div>
  </div>
</section>