import React from 'react';
import Slide from '../Slide';

interface TeamSlideProps {
    active: boolean;
    logoUrl: string;
}

const TeamSlide: React.FC<TeamSlideProps> = ({ active, logoUrl }) => {
    const founders = [
        {
            name: "Andres Espejo",
            role: "Cofundador",
            bio: "Matemático apasionado por el emprendimiento y la arquitectura de negocios. Su enfoque en la lógica y la escalabilidad es el motor que transforma una idea en infraestructura digital para la ciudad.",
            img: "https://picsum.photos/seed/andres_jar/800/800",
            color: "#d4a017"
        },
        {
            name: "Daniel Galvis",
            role: "Cofundador",
            bio: "Desarrollador con 7 años de experiencia. Matemático, contador, con postgrado en Analítica/Big Data y maestría en Ciberseguridad. Socio de Cocoon On SAS, apasionado por viajar y descubrir nuevas experiencias cerveceras.",
            img: "https://picsum.photos/seed/daniel_jar/800/800",
            color: "#5d2b12"
        }
    ];

    return (
        <Slide active={active}>
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <h2 className={`text-5xl md:text-6xl font-black text-[#5d2b12] mb-12 text-center uppercase tracking-tighter transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
                    El Equipo: <br /><span className="text-[#d4a017]">Mentes Detrás del Punto</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {founders.map((founder, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center text-center group transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${(idx + 1) * 300}ms` }}
                        >
                            <div className="relative mb-8">
                                {/* Photo Frame */}
                                <div className={`w-56 h-56 md:w-72 md:h-72 rounded-full p-2 border-[10px] shadow-2xl transition-transform duration-500 group-hover:scale-105`}
                                    style={{ borderColor: founder.color }}>
                                    <img
                                        src={founder.img}
                                        alt={founder.name}
                                        className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                {/* Badge Icon */}
                                <div className="absolute -bottom-2 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4"
                                    style={{ borderColor: founder.color }}>
                                    <img src={logoUrl} className="w-10 h-10" alt="Jar Logo" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-black text-[#5d2b12] uppercase tracking-tighter mb-2">{founder.name}</h3>
                                <p className="text-lg font-bold uppercase tracking-[0.2em] mb-4" style={{ color: founder.color }}>{founder.role}</p>
                                <div className="w-12 h-1 bg-gray-200 mx-auto mb-4"></div>
                                <p className="text-gray-600 leading-relaxed max-w-sm italic">
                                    "{founder.bio}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-sm font-black text-[#5d2b12]/40 uppercase tracking-[0.4em]">Arquitectos de una nueva Bogotá</p>
                </div>
            </div>
        </Slide>
    );
};

export default TeamSlide;
