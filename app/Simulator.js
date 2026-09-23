'use client';
import { useState } from 'react';

export default function Simulator() {
  const [simStep, setSimStep] = useState('buttons');

  return (
    <div className="flex flex-col items-center space-y-4 mx-auto">
      <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 backdrop-blur-md">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        <span>Live Interactive Demo</span>
      </div>

      {/* Корпус из матового стекла (Glassmorphism) с неоновым свечением */}
      <div className="w-[305px] h-[520px] bg-slate-900/60 border border-slate-700/50 rounded-[44px] shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden relative flex flex-col backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_60px_rgba(16,185,129,0.2)]">
        <div className="w-28 h-4 bg-slate-900 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl z-20" />
        
        <div className="bg-slate-900/80 px-4 pt-6 pb-3 flex items-center space-x-3 border-b border-slate-800/80 backdrop-blur-md">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-sm shadow-md">☕</div>
          <div>
            <p className="text-xs font-bold text-white tracking-wide">Amsterdam Café</p>
            <p className="text-[10px] text-emerald-400 font-semibold tracking-wide flex items-center space-x-1">
              <span className="w-1 h-1 bg-emerald-400 rounded-full inline-block animate-ping duration-1000" />
              <span>online</span>
            </p>
          </div>
        </div>

        <div className="flex-1 bg-slate-950/40 p-4 space-y-3.5 overflow-y-auto text-xs text-left">
          <div className="bg-slate-900/80 text-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[85%] border border-slate-800">
            Hi! I want to leave feedback for Amsterdam Café <span className="text-emerald-400 font-mono">#id105</span>
          </div>

          {simStep === 'buttons' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto font-medium shadow-lg shadow-emerald-950/50">
                Thanks for visiting us today! How was your experience with us?
              </div>
              <div className="space-y-2 pt-2 max-w-[85%] ml-auto">
                <button onClick={() => setSimStep('positive')} className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black p-3 rounded-xl text-center shadow-[0_0_20px_rgba(52,211,153,0.3)] cursor-pointer text-sm transition transform active:scale-95">
                  🟢 Super! (5 Stars)
                </button>
                <button onClick={() => setSimStep('negative')} className="w-full bg-slate-900 border border-rose-500/30 text-rose-400 hover:bg-rose-950/20 font-bold p-3 rounded-xl text-center cursor-pointer text-sm transition transform active:scale-95">
                  🔴 Could be better...
                </button>
              </div>
            </div>
          )}

          {simStep === 'positive' && (
            <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-200">
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2.5 rounded-xl max-w-[85%] ml-auto text-right font-bold">Selected: 🟢 Super!</div>
              <div className="bg-slate-900/90 text-slate-100 p-3.5 rounded-2xl rounded-tl-none max-w-[85%] border border-slate-800 shadow-xl">
                Awesome! Google Maps is opening automatically. Please leave your 5 stars there! ⭐⭐⭐⭐⭐
              </div>
              <button onClick={() => setSimStep('buttons')} className="text-[11px] text-slate-500 hover:text-emerald-400 font-semibold pt-2 cursor-pointer">← Test other button</button>
            </div>
          )}

          {simStep === 'negative' && (
            <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-200">
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-2.5 rounded-xl max-w-[85%] ml-auto text-right font-bold">Selected: 🔴 Could be better</div>
              <div className="bg-slate-900/90 text-slate-100 p-3.5 rounded-2xl rounded-tl-none max-w-[85%] border border-slate-800 shadow-xl">
                We are truly sorry. Please let us know what went wrong privately so we can fix it instantly: 
                <span className="text-cyan-400 block font-medium underline mt-1.5 break-all">://shefa-nextgen.com</span>
              </div>
              <button onClick={() => setSimStep('buttons')} className="text-[11px] text-slate-500 hover:text-emerald-400 font-semibold pt-2 cursor-pointer">← Test other button</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
