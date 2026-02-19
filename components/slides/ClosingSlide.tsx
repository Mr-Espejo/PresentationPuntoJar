import React from 'react';
import Slide from '../Slide';

interface ClosingSlideProps {
    active: boolean;
    logoUrl: string;
}

const ClosingSlide: React.FC<ClosingSlideProps> = ({ active, logoUrl }) => {
    return (
        <Slide active={active}>
            <div className="text-center relative z-10">
                <div className="w-48 h-48 mx-auto mb-12 animate-float">
                    <img src={logoUrl} className="w-full h-full drop-shadow-[0_20px_50px_rgba(93,43,18,0.3)]" alt="Icono Final" />
                </div>
                <h2 className="text-8xl md:text-9xl font-black text-[#5d2b12] mb-4 tracking-tighter">¡Hagamos Punto!</h2>
                <p className="text-2xl text-[#d4a017] font-bold uppercase tracking-[0.2em] mb-16">Punto Jar: Donde Bogotá se encuentra.</p>
                <div className="flex flex-wrap justify-center gap-8">
                    <button className="bg-[#5d2b12] text-white px-14 py-5 rounded-3xl font-black text-xl hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95">Invertir en Punto Jar</button>
                    <button className="bg-white text-[#5d2b12] border-4 border-[#5d2b12] px-14 py-5 rounded-3xl font-black text-xl hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 active:scale-95">Pre-registro App</button>
                </div>
            </div>
        </Slide>
    );
};

export default ClosingSlide;
