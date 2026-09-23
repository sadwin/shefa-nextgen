export default function Brands() {
  const list = ['SØSTRENE BEAUTY STUDIO', 'THE BARBER AMSTERDAM', 'Bloom RESTAURANT', 'DENTAL CARE', 'CLEANPRO'];
  return (
    <footer className="bg-white border-t border-gray-100 py-10 text-center">
      <span className="text-[10px] font-extrabold tracking-widest text-gray-300 block mb-4 uppercase">TRUSTED BY LOCAL BUSINESSES</span>
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap items-center justify-center gap-10 md:gap-14 opacity-40 select-none">
        {list.map((b, i) => (
          <span key={i} className="text-xs font-black tracking-wider text-slate-600 hover:text-black transition-colors cursor-pointer">
            {b}
          </span>
        ))}
        <span className="text-[10px] font-bold text-gray-400">AND MANY MORE</span>
      </div>
    </footer>
  );
}
