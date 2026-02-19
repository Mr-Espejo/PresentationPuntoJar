import React from 'react';
import Slide from '../Slide';
import BeerRouteAnimation from '../BeerRouteAnimation';

interface SolutionSlideProps {
    active: boolean;
    logoUrl: string;
}

const SolutionSlide: React.FC<SolutionSlideProps> = ({ active, logoUrl }) => {
    return (
        <Slide active={active}>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 md:order-1">
                    <BeerRouteAnimation />
                </div>
                <div className="order-1 md:order-2">
                    <h2 className="text-6xl font-black text-[#5d2b12] mb-8 leading-tight">La Solución <br /><span className="text-[#d4a017]">Punto Jar</span></h2>
                    <p className="text-xl text-gray-700 mb-8 font-medium">Creamos rutas personalizadas que transforman una salida común en una experiencia de descubrimiento.</p>
                    <ul className="space-y-6">
                        {[
                            { t: "Filtro de Afinidad", d: "Encuentra el lugar perfecto según tu estilo de pola." },
                            { t: "Rutas Vivas", d: "Navegación inteligente por los barrios de Bogotá." },
                            { t: "Transparencia Punto Jar", d: "Precios, carta y ambiente actualizados." },
                            { t: "Cultura y Puntos", d: "Cada check-in te acerca a tu próxima recompensa." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#5d2b12] text-white flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform">
                                    <img src={logoUrl} className="w-6 h-6 invert" alt="" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#5d2b12] text-lg">{item.t}</h5>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.d}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Slide>
    );
};

export default SolutionSlide;
