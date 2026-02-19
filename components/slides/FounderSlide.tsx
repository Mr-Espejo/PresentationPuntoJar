import React from 'react';
import Slide from '../Slide';

interface FounderSlideProps {
    active: boolean;
    logoUrl: string;
}

const FounderSlide: React.FC<FounderSlideProps> = ({ active, logoUrl }) => {
    return (
        <Slide active={active}>
            <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
                <div className="relative">
                    <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-[12px] border-[#5d2b12] shadow-2xl relative z-10">
                        <img src="https://picsum.photos/seed/daniel_jar/800/800" alt="Daniel Galvis" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7b731] rounded-full z-20 flex items-center justify-center shadow-2xl border-4 border-white">
                        <img src={logoUrl} className="w-20 h-20" alt="" />
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-6xl font-black text-[#5d2b12] mb-2 uppercase tracking-tighter leading-none">Daniel Galvis</h2>
                    <p className="text-[#d4a017] text-2xl font-bold mb-8 uppercase tracking-[0.3em]">Cofundador & Data Architect</p>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-2xl">
                        <p>Experto en analítica de datos y devoto de la cultura local. He recorrido el mundo buscando la perfección en cada jarra, pero siempre vuelvo a Bogotá para encontrar la verdadera esencia.</p>
                        <p className="font-bold border-l-4 border-[#5d2b12] pl-6">"Punto Jar nace de la necesidad de dar orden al caos, de mapear el talento independiente y de decir: aquí hay buena pola."</p>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default FounderSlide;
