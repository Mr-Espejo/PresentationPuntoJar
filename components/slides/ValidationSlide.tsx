import React from 'react';
import Slide from '../Slide';

interface ValidationSlideProps {
    active: boolean;
    logoUrl: string;
}

const ValidationSlide: React.FC<ValidationSlideProps> = ({ active, logoUrl }) => {
    return (
        <Slide active={active}>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                    <div>
                        <h2 className={`text-5xl font-black text-[#5d2b12] transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Presentación Oficial: <span className="text-[#d4a017]">Punto Jar</span>
                        </h2>
                        <p className={`text-[#5d2b12]/60 font-bold uppercase tracking-widest text-sm mt-2 transition-all duration-700 delay-100 ${active ? 'opacity-100' : 'opacity-0'}`}>
                            Alianza Estratégica IDT
                        </p>
                    </div>
                    <div className={`bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-[#5d2b12]/10 shadow-lg text-right transition-all duration-700 delay-200 ${active ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-xs font-black text-[#5d2b12] uppercase opacity-40">Misión IDT</p>
                        <p className="text-sm font-bold text-[#5d2b12] max-w-[300px]">
                            Promover a Bogotá como un destino turístico sostenible, competitivo, seguro e incluyente.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Left Column: Official Presentation */}
                    <div className={`lg:col-span-5 space-y-4 transition-all duration-1000 delay-300 ${active ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
                        <div className="bg-[#5d2b12] p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group flex flex-col items-center justify-center min-h-[350px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20 animate-pulse"></div>

                            <div className="relative z-10 flex flex-col items-center gap-8">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-[#f7b731] p-4 bg-white/10 backdrop-blur-md shadow-2xl animate-float">
                                    <img src={logoUrl} className="w-full h-full object-contain" alt="Punto Jar Logo" />
                                </div>

                                <div className="text-center">
                                    <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                                        <div className="w-8 h-8 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.977.977 1.257 2.245 1.32 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.32 3.608-.977.977-2.245 1.257-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.32-.977-.977-1.257-2.245-1.32-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.32-3.608.977-.977 2.245-1.257 3.608-1.32 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.201 6.78-2.619 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                        <span className="text-xl font-black tracking-tighter">@Punto.Jar</span>
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] mt-4 opacity-40">Síguenos en Instagram</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { t: "Gamificación", v: "Permanencia" },
                                { t: "Check-ins", v: "Data" },
                                { t: "XP", v: "Fidelización" },
                                { t: "Analítica", v: "Política Pública" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-[#5d2b12]/5 shadow-md flex flex-col justify-center">
                                    <span className="text-[10px] uppercase font-black text-[#d4a017] tracking-widest">{item.t}</span>
                                    <span className="text-lg font-black text-[#5d2b12] uppercase tracking-tighter leading-none">= {item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column: What is Punto Jar & Now */}
                    <div className={`lg:col-span-4 space-y-4 transition-all duration-1000 delay-500 ${active ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-[#5d2b12]/10 shadow-xl h-full flex flex-col relative overflow-hidden group">
                            {/* Stylized Mockup Background Element */}
                            <div className="absolute -right-20 -bottom-20 w-64 h-96 bg-[#5d2b12]/5 rounded-[3rem] rotate-12 border-4 border-[#5d2b12]/10 p-4">
                                <div className="w-full h-full bg-white/50 rounded-[2rem] border border-[#5d2b12]/5"></div>
                            </div>

                            <h4 className="text-xl font-black text-[#5d2b12] uppercase tracking-tighter mb-4 relative z-10">¿Qué es Punto Jar?</h4>
                            <p className="text-sm text-[#5d2b12]/70 font-medium leading-relaxed mb-6 relative z-10">
                                La app que te guía por la escena cervecera local de forma inteligente, social y gamificada.
                            </p>

                            <div className="space-y-4 flex-1 relative z-10">
                                <div className="p-4 bg-orange-50/80 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-sm hover:translate-x-2 transition-transform">
                                    <h5 className="font-black text-[#5d2b12] text-xs uppercase mb-2 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#d4a017] rounded-full"></div>
                                        Para Beer Lovers
                                    </h5>
                                    <ul className="text-[11px] text-[#5d2b12]/80 space-y-1 font-bold">
                                        <li>• Rutas inteligentes por gusto y ubicación</li>
                                        <li>• Mapa en vivo de locales y estilos</li>
                                        <li>• Recomendaciones con motor de IA</li>
                                        <li>• Descubrimiento de microcervecerías</li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-amber-50/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-sm hover:translate-x-2 transition-transform">
                                    <h5 className="font-black text-[#5d2b12] text-xs uppercase mb-2 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#5d2b12] rounded-full"></div>
                                        Para Locales
                                    </h5>
                                    <ul className="text-[11px] text-[#5d2b12]/80 space-y-1 font-bold">
                                        <li>• Onboarding rápido de negocios</li>
                                        <li>• Gestión de menú y promociones</li>
                                        <li>• Fidelización por QR y Gamificación</li>
                                        <li>• Analítica real de visitas e interés</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-[#5d2b12]/5 flex items-center justify-between opacity-50 relative z-10">
                                <span className="text-[8px] font-black uppercase tracking-[0.2em]">Bogotá D.C.</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-[#5d2b12] rounded-full"></div>
                                    <div className="w-4 h-1 bg-[#5d2b12] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Future & Tech */}
                    <div className={`lg:col-span-3 space-y-4 transition-all duration-1000 delay-700 ${active ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-[#f7b731]/10 backdrop-blur-sm p-6 rounded-[2rem] border border-[#f7b731]/30">
                            <h4 className="text-sm font-black text-[#5d2b12] uppercase mb-4 flex items-center justify-between">
                                Próximamente
                                <span className="bg-[#f7b731] text-[#5d2b12] px-2 py-0.5 rounded text-[8px]">ROAMAP</span>
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Check-ins interactivos por mesa",
                                    "Chat interno para envío de puntos",
                                    "Canales oficiales de locales",
                                    "Juegos por territorio (conquista de zonas)"
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <div className="w-5 h-5 bg-[#5d2b12] rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold">
                                            {i + 1}
                                        </div>
                                        <p className="text-xs font-bold text-[#5d2b12]/70 leading-tight pt-0.5">{step}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-[#5d2b12]/5">
                            <h4 className="text-[10px] font-black text-[#d4a017] uppercase tracking-widest mb-3">Motor de Recomendación</h4>
                            <div className="space-y-2">
                                {["Preferencias declaradas", "Comportamiento real", "Contexto geográfico"].map((t, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1 h-3 bg-[#5d2b12]/20 rounded-full"></div>
                                        <span className="text-[11px] font-black text-[#5d2b12]/60 uppercase">{t}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#5d2b12]/5 text-center">
                                <p className="text-[10px] font-black text-[#5d2b12] uppercase opacity-30 italic">Infraestructura Social</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default ValidationSlide;
