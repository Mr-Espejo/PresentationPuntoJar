import React, { useEffect, useState } from 'react';
import Slide from '../Slide';

interface FieldworkAnalysisSlideProps {
    active: boolean;
}

const FieldworkAnalysisSlide: React.FC<FieldworkAnalysisSlideProps> = ({ active }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (active) {
            const timer = setTimeout(() => setAnimate(true), 500);
            return () => clearTimeout(timer);
        } else {
            setAnimate(false);
        }
    }, [active]);

    const stats = [
        { label: "Se sienten perdidos al elegir cerveza artesanal", value: 85, color: "bg-[#d4a017]" },
        { label: "Siempre visitan los mismos 3 lugares industriales", value: 72, color: "bg-[#5d2b12]" },
        { label: "Usarían una App con rutas y recompensas", value: 94, color: "bg-[#f7b731]" },
    ];

    return (
        <Slide active={active}>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className={`text-6xl font-black text-[#5d2b12] uppercase leading-tight transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            Trabajo de <span className="text-[#d4a017]">Campo</span>
                        </h2>
                        <p className={`text-[#5d2b12]/60 font-bold uppercase tracking-widest text-sm mt-4 transition-all duration-700 delay-100 ${active ? 'opacity-100' : 'opacity-0'}`}>
                            Análisis de Mercado & Encuestas 1:1 en Bogotá
                        </p>
                    </div>
                    <div className={`hidden md:block transition-all duration-700 delay-200 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-[#5d2b12]/10 shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-black text-[#5d2b12] tracking-tighter">+120</div>
                                <div className="text-[10px] font-black uppercase text-[#5d2b12]/40 leading-tight">Muestras<br />Presenciales</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Column: The Problem & Method */}
                    <div className={`lg:col-span-5 space-y-6 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-[#5d2b12]/10 shadow-2xl h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-black text-[#5d2b12] uppercase mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-[#5d2b12] text-white rounded-full flex items-center justify-center text-sm">?</span>
                                El Problema Urbano
                            </h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-red-50/50 rounded-2xl border-l-4 border-red-500">
                                    <p className="font-bold text-[#5d2b12] leading-relaxed italic">
                                        "Bogotá tiene cientos de joyas cerveceras, pero la gente termina en el centro comercial de siempre por miedo a lo desconocido."
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { t: "Falta de Visibilidad", d: "El 80% de las microcervecerías no aparecen en búsquedas locales relevantes." },
                                        { t: "Inseguridad de Selección", d: "Los usuarios temen una mala experiencia y optan por lo industrial." },
                                        { t: "Cero Fidelización", d: "No existe un hilo que conecte a los locales entre sí." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-2 h-2 rounded-full bg-[#d4a017] mt-1.5 flex-shrink-0"></div>
                                            <div>
                                                <h4 className="font-black text-xs uppercase text-[#5d2b12]">{item.t}</h4>
                                                <p className="text-xs text-[#5d2b12]/60 font-medium leading-normal">{item.d}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Graphs & Results */}
                    <div className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-[#5d2b12] p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden group h-full flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>

                            <div className="relative z-10 mb-8">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Resultados de la Encuesta</h3>
                                <p className="text-white/50 text-xs font-black uppercase tracking-widest">Validación en Punto de Venta (1:1)</p>
                            </div>

                            <div className="space-y-10 relative z-10 flex-1 flex flex-col justify-center">
                                {stats.map((stat, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-black uppercase tracking-tight max-w-[70%] leading-tight text-white/80">{stat.label}</span>
                                            <span className="text-3xl font-black text-[#f7b731]">{animate ? stat.value : 0}%</span>
                                        </div>
                                        <div className="h-4 bg-white/10 rounded-full overflow-hidden border border-white/5">
                                            <div
                                                className={`h-full ${stat.color} transition-all duration-[1500ms] cubic-bezier(0.34, 1.56, 0.64, 1)`}
                                                style={{ width: animate ? `${stat.value}%` : '0%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#f7b731] flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                                        <span className="text-2xl">📈</span>
                                    </div>
                                    <p className="text-sm font-black text-white/90 leading-tight">
                                        Mercado <span className="text-[#f7b731]">Hambriento</span><br />de Experiencias
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black uppercase opacity-40">Insight Clave</p>
                                    <p className="text-xs font-bold italic text-[#f7b731]">"La gente quiere descubrir, pero necesita una guía confiable."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Quote / Tagline */}
                <div className={`mt-8 text-center transition-all duration-1000 delay-700 ${active ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                    <span className="inline-block px-6 py-2 bg-white/40 backdrop-blur rounded-full text-[10px] font-black text-[#5d2b12] uppercase tracking-[0.3em] border border-[#5d2b12]/5">
                        Bogotá: Ciudad Cervecera en Potencia
                    </span>
                </div>
            </div>
        </Slide>
    );
};

export default FieldworkAnalysisSlide;
