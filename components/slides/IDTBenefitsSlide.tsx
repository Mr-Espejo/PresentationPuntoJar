import React from 'react';
import Slide from '../Slide';

interface IDTBenefitsSlideProps {
    active: boolean;
    logoUrl: string;
}

const IDTBenefitsSlide: React.FC<IDTBenefitsSlideProps> = ({ active, logoUrl }) => {
    const benefits = [
        {
            title: "Competitividad",
            icon: "🏆",
            items: ["Ranking por experiencia", "Mejora continua basada en feedback"],
            color: "border-emerald-400"
        },
        {
            title: "Data Estratégica",
            icon: "📊",
            items: ["Zonas más activas", "Días de mayor flujo", "Perfil demográfico consumidor"],
            color: "border-amber-400"
        },
        {
            title: "Marca Ciudad",
            icon: "✨",
            items: ["“Bogotá Beer Passport”", "Integración futura con Visit Bogotá"],
            color: "border-[#d4a017]",
            highlight: true
        }
    ];

    return (
        <Slide active={active}>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h4 className={`text-[#d4a017] font-black uppercase tracking-[0.3em] text-sm mb-4 transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
                        Valor Estratégico
                    </h4>
                    <h2 className={`text-5xl md:text-6xl font-black text-[#5d2b12] leading-tight transition-all duration-700 delay-100 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        ¿Por qué articularnos <br /> <span className="text-[#d4a017]">al IDT?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className={`bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border-t-8 ${benefit.color} shadow-2xl transition-all duration-1000 group hover:-translate-y-2 cursor-default ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-black text-[#5d2b12] uppercase tracking-tighter mb-4">
                                {benefit.title}
                            </h3>
                            <ul className="space-y-3">
                                {benefit.items.map((item, i) => (
                                    <li key={i} className={`text-sm font-bold leading-tight ${item.includes("Visit Bogotá") ? 'text-[#d4a017] underline decoration-2 underline-offset-4' : 'text-[#5d2b12]/70'}`}>
                                        • {item}
                                    </li>
                                ))}
                            </ul>

                            {benefit.highlight && (
                                <div className="mt-8 pt-6 border-t border-[#5d2b12]/10">
                                    <div className="flex items-center gap-2 bg-[#5d2b12] px-4 py-2 rounded-xl text-white">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest">Enfoque: Visit Bogotá</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Integration Banner */}
                <div className={`mt-12 bg-[#5d2b12] p-8 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-1000 delay-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4a017]/10 rounded-full -ml-24 -mb-24"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl text-center md:text-left">
                            <h4 className="text-[#f7b731] font-black uppercase tracking-widest text-xs mb-2">Visión de Ecosistema</h4>
                            <p className="text-white text-xl font-bold leading-relaxed">
                                Punto Jar no es solo una app; es la infraestructura digital que alimenta el turismo en la ciudad.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <span className="text-white font-black text-2xl tracking-tighter uppercase">Visit Bogotá</span>
                            </div>
                            <span className="text-[#f7b731] text-[10px] font-black uppercase tracking-[0.3em]">Marca</span>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default IDTBenefitsSlide;
