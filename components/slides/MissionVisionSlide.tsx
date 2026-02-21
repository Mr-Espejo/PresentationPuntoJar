import React from 'react';
import Slide from '../Slide';

interface MissionVisionSlideProps {
    active: boolean;
    logoUrl: string;
}

const MissionVisionSlide: React.FC<MissionVisionSlideProps> = ({ active, logoUrl }) => {
    return (
        <Slide active={active}>
            <div className="grid md:grid-cols-2 h-full gap-4 relative z-10">
                <div className="bg-[#5d2b12] text-white p-14 flex flex-col justify-center rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <img src={logoUrl} className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" alt="" />
                    <h3 className="text-5xl font-black mb-6 uppercase tracking-tight">Misión</h3>
                    <p className="text-2xl leading-relaxed opacity-90 font-light italic">
                        "Conectar a quienes hacen la cerveza con quienes la disfrutan, creando rutas y experiencias cercanas,transparentes y seguras que impulsen la cultura cervecera local, fortalezcan la comunidad y dinamicen la economía de los barrios."
                    </p>
                </div>
                <div className="bg-white p-14 flex flex-col justify-center rounded-[3rem] shadow-2xl border-4 border-[#5d2b12] relative overflow-hidden">
                    <img src={logoUrl} className="absolute -left-10 -top-10 w-64 h-64 opacity-5 -rotate-12" alt="" />
                    <h3 className="text-5xl font-black mb-6 uppercase tracking-tight text-[#5d2b12]">Visión</h3>
                    <p className="text-2xl leading-relaxed text-gray-600 font-light">
                        "En 5 años queremos que cualquier turista que aterrice en Bogotá pueda abrir Punto Jar y descubrir una experiencia cervecera auténtica, descentralizada y viva."
                    </p>
                </div>
            </div>
        </Slide>
    );
};

export default MissionVisionSlide;
