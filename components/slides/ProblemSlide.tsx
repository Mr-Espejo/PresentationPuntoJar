import React from 'react';
import Slide from '../Slide';

interface ProblemSlideProps {
    active: boolean;
    logoUrl: string;
}

const ProblemSlide: React.FC<ProblemSlideProps> = ({ active, logoUrl }) => {
    const systemicGaps = [
        { icon: "🗺️", text: "Sin Mapa Oficial", color: "gray" },
        { icon: "📉", text: "Data de Comportamiento Ciega", color: "gray" },
        { icon: "👀", text: "Talento Increíble Invisibilizado", color: "gray" },
        { icon: "🔒", text: "Rutas Privadas y Cerradas", color: "gray" },
        { icon: "🏛️", text: "Vacío de Apoyo Institucional", color: "gray" },
        { icon: "🔄", text: "Pub Crawls Limitados", color: "gray" }
    ];

    return (
        <Slide active={active}>
            <div className="relative z-10 w-full">
                <h2 className={`text-6xl font-black text-[#5d2b12] mb-12 leading-tight text-center transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    El Problema: <br /><span className="text-[#d4a017]">Un Ecosistema Fragmentado</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                    {/* existing card 1 */}
                    <div className={`bg-white/70 backdrop-blur-sm p-6 rounded-3xl border-l-[12px] border-[#d4a017] shadow-xl transition-all duration-700 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h4 className="font-black text-2xl text-[#5d2b12] mb-4 uppercase tracking-tighter">Frustración del Usuario</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start">
                                <span className="text-[#d4a017] font-bold">●</span>
                                <p className="text-gray-700 leading-tight">No encuentra experiencias que hagan "match" real con su gusto.</p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#d4a017] font-bold">●</span>
                                <p className="text-gray-700 leading-tight">Desconexión emocional: la cerveza artesanal no le cuenta una historia.</p>
                            </li>
                            <li className="flex gap-3 items-start text-xs opacity-60">
                                <span className="text-[#d4a017] font-bold">●</span>
                                <p>Búsqueda sin rumbo, calidad incierta y falta de comunidad.</p>
                            </li>
                        </ul>
                    </div>

                    {/* existing card 2 */}
                    <div className={`bg-white/70 backdrop-blur-sm p-6 rounded-3xl border-l-[12px] border-[#5d2b12] shadow-xl transition-all duration-700 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h4 className="font-black text-2xl text-[#5d2b12] mb-4 uppercase tracking-tighter">Barreras del Negocio</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start">
                                <span className="text-[#5d2b12] font-bold">●</span>
                                <p className="text-gray-700 leading-tight">Productos increíbles que permanecen <span className="font-bold">invisibles</span> por falta de vitrina.</p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-[#5d2b12] font-bold">●</span>
                                <p className="text-gray-700 leading-tight">Marketing disperso y dificultad crítica para la fidelización.</p>
                            </li>
                            <li className="flex gap-3 items-start text-xs opacity-60">
                                <span className="text-[#5d2b12] font-bold">●</span>
                                <p>Invisibilidad ante nuevos públicos y dependencia de pub crawls cerrados.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* New section: Systemic Gaps (Small pills around) */}
                <div className={`transition-all duration-1000 delay-700 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <p className="text-[#5d2b12] font-black uppercase text-xs tracking-[0.3em] mb-6 text-center opacity-40 italic">Brechas del Sistema</p>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {systemicGaps.map((gap, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-[#5d2b12]/5 border border-[#5d2b12]/10 py-2 px-4 rounded-full hover:bg-[#d4a017]/10 transition-colors group cursor-default"
                            >
                                <span className="text-lg group-hover:scale-125 transition-transform">{gap.icon}</span>
                                <span className="text-xs font-bold text-[#5d2b12]/70 uppercase tracking-wider">{gap.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-10 text-center transition-all duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-[#d4a017] font-medium text-sm italic max-w-2xl mx-auto">
                        "La cerveza artesanal es identidad y cultura de Bogotá, pero hoy su potencial turístico está fragmentado y sin apoyo institucional."
                    </p>
                </div>
            </div>

            {/* Background Graphic */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                <img src={logoUrl} className="w-[800px] h-[800px]" alt="" />
            </div>
        </Slide>
    );
};

export default ProblemSlide;
