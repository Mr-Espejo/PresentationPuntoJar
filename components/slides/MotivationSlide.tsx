import React from 'react';
import Slide from '../Slide';

interface MotivationSlideProps {
    active: boolean;
    logoUrl: string;
}

const MotivationSlide: React.FC<MotivationSlideProps> = ({ active, logoUrl }) => {
    return (
        <Slide active={active}>
            <div className="relative z-10 w-full max-w-5xl mx-auto">
                <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl md:text-7xl font-black text-[#5d2b12] mb-6 leading-none tracking-tighter">
                        Bogotá: <span className="text-[#d4a017]">Cultura</span> sin <span className="text-[#d4a017]">Estructura</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                        Bogotá ya tiene cultura cervecera. Lo que aún no tiene es una estructura que la convierta en producto turístico.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1: El Diagnóstico */}
                    <div className={`bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-xl transition-all duration-1000 delay-500 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="w-12 h-12 bg-[#5d2b12] rounded-full flex items-center justify-center mb-6 shadow-lg">
                            <span className="text-2xl">📍</span>
                        </div>
                        <h4 className="text-xl font-black text-[#5d2b12] mb-4 uppercase tracking-tight">El Diagnóstico</h4>
                        <div className="space-y-3 text-gray-700">
                            <p className="flex items-center gap-2 font-bold"><span className="text-[#d4a017]">✓</span> Tiene microcervecerías.</p>
                            <p className="flex items-center gap-2 font-bold"><span className="text-[#d4a017]">✓</span> Tiene turismo.</p>
                            <p className="mt-4 p-3 bg-[#5d2b12] text-white rounded-xl text-center font-black">Bogotá tiene oferta, pero NO tiene sistema.</p>
                        </div>
                    </div>

                    {/* Card 2: El Propósito */}
                    <div className={`bg-[#5d2b12] p-8 rounded-[2rem] shadow-2xl transition-all duration-1000 delay-700 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} relative overflow-hidden group`}>
                        <img src={logoUrl} className="absolute -right-8 -top-8 w-32 h-32 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700" alt="" />
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="text-2xl">🏙️</span>
                        </div>
                        <h4 className="text-xl font-black text-[#f7b731] mb-4 uppercase tracking-tight">El Propósito</h4>
                        <p className="text-white/90 text-lg leading-relaxed italic mb-4">
                            "No venimos a vender una idea. Venimos a construir ciudad."
                        </p>
                        <p className="text-[#e6c888] font-bold text-sm">
                            Punto Jar nace para convertir esa cultura dispersa en infraestructura digital para la ciudad.
                        </p>
                    </div>

                    {/* Card 3: El Nuevo Turismo */}
                    <div className={`bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-xl transition-all duration-1000 delay-900 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="w-12 h-12 bg-[#d4a017] rounded-full flex items-center justify-center mb-6 shadow-lg">
                            <span className="text-2xl">✨</span>
                        </div>
                        <h4 className="text-xl font-black text-[#5d2b12] mb-4 uppercase tracking-tight">Experiencias</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            El turismo moderno no busca lugares. Busca <span className="font-bold text-[#5d2b12]">experiencias auténticas</span> y comunidades.
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-200/50">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2 opacity-60">Referente actual:</p>
                            <p className="text-sm font-black text-[#5d2b12]">Tour cervecero por Chapinero by Distrito Chapinero</p>
                        </div>
                    </div>
                </div>

                <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
                    <p className="text-gray-500 font-medium italic">
                        "Queremos que en torno a la cerveza, la identidad de nuestros barrios se intensifique."
                    </p>
                </div>
            </div>
        </Slide>
    );
};

export default MotivationSlide;
