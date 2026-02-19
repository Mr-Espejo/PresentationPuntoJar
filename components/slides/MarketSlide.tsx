import React from 'react';
import Slide from '../Slide';

interface MarketSlideProps {
    active: boolean;
}

const MarketSlide: React.FC<MarketSlideProps> = ({ active }) => {
    const photos = [
        { url: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&q=80&w=400", rotation: "-rotate-6", delay: "delay-[200ms]" },
        { url: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=80&w=400", rotation: "rotate-3", delay: "delay-[400ms]" },
        { url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=400", rotation: "-rotate-3", delay: "delay-[600ms]" },
        { url: "https://images.unsplash.com/photo-1436018626274-89acd1d6ec9d?auto=format&fit=crop&q=80&w=400", rotation: "rotate-6", delay: "delay-[800ms]" },
    ];

    return (
        <Slide active={active}>
            <div className="grid md:grid-cols-5 gap-8 items-center relative z-10 w-full">

                {/* Text Content (Left side 3 columns) */}
                <div className="md:col-span-3">
                    <h2 className={`text-6xl font-black text-[#5d2b12] mb-8 uppercase leading-tight transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        Validación: <br /><span className="text-[#d4a017]">Trabajo de Campo</span>
                    </h2>

                    <div className={`space-y-6 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            No nos quedamos tras un escritorio. Hemos recorrido las calles de Bogotá para entender el corazón latente de la industria.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/80 backdrop-blur p-6 rounded-3xl border-l-4 border-[#5d2b12] shadow-sm">
                                <h4 className="font-black text-[#5d2b12] text-lg uppercase mb-2">Historias Reales</h4>
                                <p className="text-sm text-gray-600">Escuchamos a los maestros que ponen su vida en cada lote, entendiendo su pasión y su lucha por la visibilidad.</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur p-6 rounded-3xl border-l-4 border-[#d4a017] shadow-sm">
                                <h4 className="font-black text-[#5d2b12] text-lg uppercase mb-2">Desafíos Críticos</h4>
                                <p className="text-sm text-gray-600">Identificamos las barreras reales: costos de marketing, falta de digitalización y la soledad del emprendedor independiente.</p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-[#5d2b12] text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <p className="text-2xl font-black mb-2 italic">"Punto Jar nace de las calles, no de una oficina."</p>
                                <p className="opacity-70 text-sm">Cada establecimiento visitado es una historia que merece ser contada y mapeada.</p>
                            </div>
                            <div className="absolute -right-4 -bottom-4 text-8xl opacity-10 font-black">JAR</div>
                        </div>
                    </div>
                </div>

                {/* Scattered Photos (Right side 2 columns) */}
                <div className="md:col-span-2 relative h-[500px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {photos.map((photo, i) => (
                            <div
                                key={i}
                                className={`absolute w-48 h-56 bg-white p-3 shadow-2xl rounded-sm transition-all duration-1000 ${photo.rotation} ${photo.delay} ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                                style={{
                                    left: `${(i % 2) * 40}%`,
                                    top: `${Math.floor(i / 2) * 40}%`,
                                    zIndex: 10 - i,
                                    transformOrigin: 'center center'
                                }}
                            >
                                <div className="w-full h-40 bg-gray-200 overflow-hidden rounded-xs">
                                    <img src={photo.url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Trabajo de campo" />
                                </div>
                                <div className="mt-3 h-4 w-3/4 bg-gray-100 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 w-64 h-64 bg-[#d4a017]/10 blur-3xl rounded-full"></div>
                </div>

            </div>
        </Slide>
    );
};

export default MarketSlide;
