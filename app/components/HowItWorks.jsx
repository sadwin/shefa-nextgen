export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Customer visits',
      text: 'A customer finishes an appointment or purchase.',
    },
    {
      number: '02',
      title: 'SHEFA follows up',
      text: 'WhatsApp or SMS is sent automatically at the right moment.',
    },
    {
      number: '03',
      title: 'Customer responds',
      text: 'Happy customers are guided to leave a Google review.',
    },
    {
      number: '04',
      title: 'Customer returns',
      text: 'Follow-up campaigns bring customers back again.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="border-y border-[#e8e5dd] bg-[#f5f3ed] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#9d7a2d]">
              How it works
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-.04em] text-[#171717] sm:text-5xl">
              One visit.
              <br />
              Four opportunities to grow.
            </h2>
          </div>

          <p className="max-w-sm self-end text-sm leading-6 text-[#77756f]">
            SHEFA turns the moments after a customer visit into an
            automated growth engine.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-[#e1ddd3] bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold tracking-[-.06em] text-[#d8d4cb]">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="hidden text-[#c9a24a] lg:block">→</span>
                )}
              </div>

              <h3 className="mt-12 font-extrabold text-[#171717]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#77756f]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}