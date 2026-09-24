import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Html } from '@react-three/drei';

export default function Hero3D() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24 bg-[#FCFCFC] font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА: Текст сайта */}
        <div className="lg:col-span-5 space-y-6 z-10">
          <div className="text-[11px] font-black tracking-[0.25em] text-gray-450 uppercase">
            AUTOMATE • CONNECT • GROW
          </div>
          <h1 className="text-[54px] font-black text-[#0F172A] tracking-tight leading-[1.02]">
            Turn every <br />
            customer visit <br />
            <span className="text-[#0F172A]">into growth.</span>
          </h1>
          <p className="text-[15px] text-gray-500 max-w-[390px] leading-relaxed">
            SHEFA NextGen Systems helps local businesses get more Google reviews, collect customer contacts and bring clients back – automatically via WhatsApp or SMS.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0F172A] hover:bg-black text-white text-sm font-bold py-4 px-8 rounded-full shadow-lg shadow-slate-900/10 transition-all">
              See How It Works →
            </button>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: Настоящий трехмерный Canvas */}
        <div className="lg:col-span-7 w-full h-[580px] relative">
          <Canvas 
            camera={{ position:, fov: 45 }}
            gl={{ antialias: true }}
          >
            {/* Студийное освещение для бликов на металле */}
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={1} />

            <Suspense fallback={<Html center>Загрузка 3D сцены...</Html>}>
              {/* Группа объектов с изометрическим поворотом сцены */}
              <group rotation={[0.2, -0.4, 0]}>
                {/* 1. Модель Смартфона (iPhone) */}
                <mesh position={[-1, 0, 0]} rotation={[0, 0, 0]}>
                  {/* Базовый закругленный бокс, имитирующий корпус смартфона */}
                  <boxGeometry args={[2.2, 4.5, 0.15]} />
                  {/* Металлический материал корпуса для реалистичных отражений боковой грани */}
                  <meshStandardMaterial 
                    color="#1E293B" 
                    roughness={0.15} 
                    metalness={0.85} 
                  />
                  
                  {/* Натягиваем HTML-интерфейс чата прямо на переднюю грань экрана телефона */}
                  <Html
                    transform
                    occlude
                    position={[0, 0, 0.08]}
                    distanceFactor={4.5}
                    className="w-[240px] h-[490px] bg-[#ECEFF1] rounded-[28px] p-3 pt-6 flex flex-col justify-between font-sans select-none overflow-hidden"
                  >
                    {/* Контент чата WhatsApp */}
                    <div className="bg-white border-b border-slate-200 absolute top-0 inset-x-0 pt-4 pb-2 px-3 flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">🏢</div>
                      <span className="font-bold text-slate-800 text-[9px]">Your Business</span>
                    </div>

                    <div className="space-y-2.5 flex-1 flex flex-col justify-end pb-2">
                      <div className="bg-white p-2.5 rounded-xl rounded-tl-none border border-slate-100 shadow-sm text-[9px] text-slate-700 leading-snug">
                        Hi Sarah! 👋 Thanks for visiting Luna Beauty Amsterdam. How was your experience?
                        <div className="space-y-1 mt-2">
                          <div className="w-full bg-white border border-amber-200 text-amber-600 font-bold py-1 rounded-md text-center text-[8px]">
                            🟡 Could be better
                          </div>
                          <div className="w-full bg-[#10B981] text-white font-bold py-1 rounded-md text-center text-[8px]">
                            🟢 Great!
                          </div>
                        </div>
                      </div>
                    </div>
                  </Html>
                </mesh>

                {/* 2. Тейбл-тент (Матовая картонная коробка) */}
                <mesh position={[1.5, -0.5, -0.5]} rotation={[0, -0.2, 0]}>
                  <boxGeometry args={[1.4, 2.2, 0.5]} />
                  <meshStandardMaterial 
                    color="#FFFFFF" 
                    roughness={0.9} 
                    metalness={0.0} 
                  />
                  {/* Контент на передней грани картонной коробки */}
                  <Html
                    transform
                    position={[0, 0, 0.26]}
                    distanceFactor={2.2}
                    className="w-[130px] text-center p-3 font-sans select-none flex flex-col items-center"
                  >
                    <span className="text-[8px] font-black text-slate-900 tracking-wider">SHEFA</span>
                    <div className="w-14 h-14 bg-slate-900 my-2 rounded-md p-1 grid grid-cols-2 gap-0.5">
                      <div className="bg-white w-2 h-2 rounded-sm"></div>
                      <div className="bg-white w-2 h-2 rounded-sm justify-self-end"></div>
                    </div>
                    <p className="text-[8px] font-bold text-slate-800 leading-tight">Share your feedback & help us grow!</p>
                  </Html>
                </mesh>

                {/* 3. Летающая плашка Google Rating (Привязана к 3D-координатам слева) */}
                <Html position={[-2.3, 1.2, 0.5]} distanceFactor={5} className="w-[210px] pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-3 border border-slate-100 flex items-center space-x-3">
                    <div className="bg-white border w-8 h-8 rounded-lg flex items-center justify-center font-black text-blue-500 text-sm">G</div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-black text-slate-900 text-xs">4.8</span>
                        <span className="text-amber-400 text-[9px]">★★★★★</span>
                      </div>
                      <p className="text-[8px] text-slate-400 font-bold mt-0.5">+124 new reviews</p>
                    </div>
                  </div>
                </Html>

                {/* 4. Летающая плашка Новый клиент (Привязана справа внизу) */}
                <Html position={[2.4, -1.2, 0.2]} distanceFactor={5} className="w-[190px] pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-3 border border-slate-100 flex items-center space-x-2">
                    <div className="bg-emerald-50 text-emerald-500 w-7 h-7 rounded-lg flex items-center justify-center text-xs">👤</div>
                    <div>
                      <p className="text-[7px] text-slate-400 font-bold uppercase">New customer added</p>
                      <p className="text-[10px] font-black text-slate-900">sophie@email.com</p>
                    </div>
                  </div>
                </Html>

              </group>
              <OrbitControls enableZoom={false} autoRotate={false} />
            </Suspense>
          </Canvas>
        </div>

      </div>
    </section>
  );
}
