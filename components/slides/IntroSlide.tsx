import React from 'react';
import Slide from '../Slide';

interface IntroSlideProps {
    active: boolean;
    logoUrl: string;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ active, logoUrl }) => {
    return (
        <Slide active={active}>
            <div className="text-center relative z-10">
                <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-8xl md:text-9xl font-black text-[#5d2b12] font-black tracking-tighter mb-0 leading-none drop-shadow-sm">Punto</h1>
                        <div className="flex items-center justify-center gap-4">
                            <h1 className="text-8xl md:text-9xl font-black text-[#5d2b12] font-black tracking-tighter leading-none drop-shadow-sm">Jar</h1>
                            <div className="w-24 h-24 md:w-32 md:h-32 mt-4 drop-shadow-2xl">
                                <img src={logoUrl} className="w-full h-full object-contain animate-float" alt="Icono Jar" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-2xl md:text-3xl font-medium text-[#d4a017] tracking-[0.2em] uppercase mt-4">Posicionando a Bogotá como el destino líder en cultura cervecera de la región.</p>
                <div className="mt-12 h-1 w-24 bg-[#5d2b12] mx-auto opacity-50"></div>
                <p className="mt-8 text-lg text-gray-700 max-w-lg mx-auto font-medium bg-white/30 backdrop-blur-sm py-2 px-4 rounded-full border border-white/50">
                    Descubre los rincones más auténticos de Bogotá, una pola a la vez.
                </p>
            </div>
        </Slide>
    );
};

export default IntroSlide;
