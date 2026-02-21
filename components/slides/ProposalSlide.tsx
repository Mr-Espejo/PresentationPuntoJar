import React from 'react';
import Slide from '../Slide';

interface ProposalSlideProps {
    active: boolean;
    logoUrl: string;
}

const ProposalSlide: React.FC<ProposalSlideProps> = ({ active, logoUrl }) => {
    const phases = [
        {
            number: "01",
            title: "Fase 1 – Piloto Oficial IDT",
            duration: "3 meses",
            color: "bg-blue-600",
            lightColor: "bg-blue-50",
            items: [
                "20 cervecerías seleccionadas",
                "Ruta oficial avalada",
                "Badge “Ruta Oficial IDT”",
                "Evento de lanzamiento",
                "Medición de resultados"
            ]
        },
        {
            number: "02",
            title: "Fase 2 – Integración Institucional",
            duration: "Consolidación",
            color: "bg-orange-600",
            lightColor: "bg-orange-50",
            items: [
                "API o acceso a data agregada",
                "Dashboard para IDT",
                "Métricas mensuales",
                "Reporte de impacto económico"
            ]
        },
        {
            number: "03",
            title: "Fase 3 – Escalamiento",
            duration: "Expansión",
            color: "bg-emerald-600",
            lightColor: "bg-emerald-50",
            items: [
                "Ruta cervecera promocionada en ferias",
                "Inclusión en material oficial",
                "Posible expansión a otras ciudades"
            ]
        }
    ];

    return (
        <Slide active={active}>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
                    <h2 className={`text-6xl font-black text-[#5d2b12] transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        Hoja de <span className="text-[#d4a017]">Ruta</span>
                    </h2>
                    <div className={`flex items-center gap-3 bg-[#5d2b12] px-6 py-3 rounded-2xl shadow-xl transition-all duration-700 delay-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-2 h-2 bg-[#f7b731] rounded-full animate-ping"></div>
                        <span className="text-white font-black uppercase tracking-widest text-sm">Propuesta</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#5d2b12]/5 -translate-y-1/2 hidden lg:block z-0"></div>

                    {phases.map((phase, idx) => (
                        <div
                            key={idx}
                            className={`relative z-10 flex flex-col transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${(idx + 1) * 300}ms` }}
                        >
                            {/* Phase Card */}
                            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden group hover:-translate-y-4 transition-transform duration-500 flex-1 border border-[#5d2b12]/5">
                                <div className={`${phase.color} p-6 text-white relative`}>
                                    <span className="absolute top-4 right-6 text-6xl font-black opacity-20">{phase.number}</span>
                                    <h3 className="text-xl font-black uppercase tracking-tighter relative z-10 pr-12 leading-tight">
                                        {phase.title}
                                    </h3>
                                    <div className="mt-4 inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">
                                        {phase.duration}
                                    </div>
                                </div>

                                <div className="p-8 space-y-4">
                                    <ul className="space-y-4">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start group/item">
                                                <div className={`w-5 h-5 rounded-full ${phase.lightColor} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`}>
                                                    <div className={`w-2 h-2 rounded-full ${phase.color}`}></div>
                                                </div>
                                                <span className="text-sm font-bold text-[#5d2b12]/70 group-hover/item:text-[#5d2b12] transition-colors leading-tight">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Phase Joiner (Mobile/Tablet) */}
                            {idx < phases.length - 1 && (
                                <div className="h-8 w-1 bg-[#5d2b12]/10 mx-auto lg:hidden"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="inline-block px-8 py-4 bg-[#f7b731] text-[#5d2b12] font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        Comencemos a construir el mapa cervecero de Bogotá
                    </p>
                </div>
            </div>
        </Slide>
    );
};

export default ProposalSlide;
