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
                <h2 className="text-8xl md:text-9xl font-black text-[#5d2b12] mb-4 tracking-tighter">¡Hagámoslo juntos!</h2>
                <p className="text-2xl text-[#d4a017] font-bold uppercase tracking-[0.2em]">Punto Jar: Donde Bogotá se encuentra.</p>
            </div>
        </Slide>
    );
};

export default ClosingSlide;
