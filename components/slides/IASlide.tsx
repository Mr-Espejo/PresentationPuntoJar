import React, { useState, useEffect } from 'react';
import Slide from '../Slide';

interface IASlideProps {
    active: boolean;
    logoUrl: string;
}

const IASlide: React.FC<IASlideProps> = ({ active, logoUrl }) => {
    const [chatStep, setChatStep] = useState(0);

    const chatMessages = [
        { type: 'user', text: 'Busco algo cerca de Chapinero, me gustan las IPA amargas...' },
        { type: 'ai', text: 'Analizando tus gustos... Te recomiendo "Cervecería X", tienen una West Coast IPA con 70 IBUs que te encantará.' },
        { type: 'user', text: '¡Genial! ¿Hay alguna ruta que incluya ese lugar?' },
        { type: 'ai', text: 'Sí, la "Ruta Pioneros" tiene 3 sedes cerca y hoy hay evento de cata.' }
    ];

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                setChatStep(prev => (prev + 1) % (chatMessages.length + 1));
            }, 3000);
            return () => clearInterval(interval);
        } else {
            setChatStep(0);
        }
    }, [active]);

    const features = [
        { title: "Data Estratégica", items: ["Zonas más activas", "Días de mayor flujo", "Perfil demográfico"] },
        { title: "Marca Ciudad", items: ["Bogotá Beer Passport", "Diferenciación Regional", "Fidelización Global"] },
        { title: "Métricas Reales", items: ["Visitas georreferenciadas", "Consumo experiencial", "Feedback continuo"] }
    ];

    return (
        <Slide active={active}>
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <h2 className={`text-6xl font-black text-[#5d2b12] mb-12 text-center transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
                    Todo Potenciado <span className="text-[#d4a017]">con IA</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Virtual Assistant Animation */}
                    <div className={`bg-[#5d2b12] p-8 rounded-[3rem] shadow-2xl relative overflow-hidden h-[450px] flex flex-col transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <img src={logoUrl} className="w-6 h-6" alt="AI" />
                            </div>
                            <div>
                                <p className="text-white font-black text-sm uppercase tracking-widest">Asistente Punto Jar</p>
                                <p className="text-[#f7b731] text-[10px] font-bold animate-pulse uppercase">En línea • Inteligencia Urbana</p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                            {chatMessages.slice(0, chatStep).map((msg, i) => (
                                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-white/10 text-white border border-white/20' : 'bg-[#f7b731] text-[#5d2b12] font-bold shadow-lg'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {chatStep < chatMessages.length && (
                                <div className="flex justify-start opacity-50">
                                    <div className="bg-white/5 p-3 rounded-full flex gap-1">
                                        <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                                        <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-4 bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/10">
                            <p className="text-white/30 text-xs italic">Escribe tu preferencia...</p>
                            <div className="w-8 h-8 bg-[#f7b731] rounded-full flex items-center justify-center text-white">
                                <span className="text-sm">➡️</span>
                            </div>
                        </div>
                    </div>

                    {/* Strategic Features */}
                    <div className="space-y-8">
                        {features.map((group, idx) => (
                            <div
                                key={idx}
                                className={`bg-white/60 backdrop-blur-md p-6 rounded-3xl border-l-8 border-[#d4a017] shadow-xl transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                                style={{ transitionDelay: `${(idx + 1) * 300}ms` }}
                            >
                                <h4 className="font-black text-xl text-[#5d2b12] mb-3 uppercase tracking-tighter">{group.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item, i) => (
                                        <span key={i} className="text-[10px] font-bold bg-[#5d2b12]/5 text-[#5d2b12]/70 px-3 py-1 rounded-full border border-[#5d2b12]/10">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className={`pt-4 transition-all duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-sm font-black text-[#d4a017] uppercase tracking-[0.3em] border-t border-[#d4a017]/20 pt-4 text-center">
                                Diferenciación vs otras ciudades importantes de Latinoamérica
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default IASlide;
