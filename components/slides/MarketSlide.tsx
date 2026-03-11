import React from 'react';
import Slide from '../Slide';

interface MarketSlideProps {
    active: boolean;
}

const MarketSlide: React.FC<MarketSlideProps> = ({ active }) => {
    const photos = [
        { url: "https://firebasestorage.googleapis.com/v0/b/studio-7377357488-df5a7.firebasestorage.app/o/Punto%20Jar%2FWhatsApp%20Image%202026-03-10%20at%2011.31.39%20PM%20(1).jpeg?alt=media&token=c20b7011-7db9-4130-ae44-6674a690aded", rotation: "-rotate-6", delay: "delay-[200ms]" },
        { url: "https://firebasestorage.googleapis.com/v0/b/studio-7377357488-df5a7.firebasestorage.app/o/Punto%20Jar%2FWhatsApp%20Image%202026-03-10%20at%2011.23.48%20PM.jpeg?alt=media&token=7bcd080c-8a85-40bd-90e2-6533326de6c4", rotation: "rotate-3", delay: "delay-[400ms]" },
        { url: "https://firebasestorage.googleapis.com/v0/b/studio-7377357488-df5a7.firebasestorage.app/o/Punto%20Jar%2FWhatsApp%20Image%202026-03-10%20at%2011.23.46%20PM%20(2).jpeg?alt=media&token=f35e0480-35e8-4661-9f15-b8257151e6ae", rotation: "-rotate-3", delay: "delay-[600ms]" },
        { url: "https://firebasestorage.googleapis.com/v0/b/studio-7377357488-df5a7.firebasestorage.app/o/Punto%20Jar%2FWhatsApp%20Image%202026-03-10%20at%2011.23.47%20PM%20(1).jpeg?alt=media&token=4253f52b-1168-4ef9-b732-24ab43dd3eb5", rotation: "rotate-6", delay: "delay-[800ms]" },
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
