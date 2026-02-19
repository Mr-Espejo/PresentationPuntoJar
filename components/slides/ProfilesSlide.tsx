import React from 'react';
import Slide from '../Slide';

interface ProfilesSlideProps {
    active: boolean;
}

const ProfilesSlide: React.FC<ProfilesSlideProps> = ({ active }) => {
    return (
        <Slide active={active}>
            <h2 className="text-5xl font-black text-[#5d2b12] mb-12 text-center uppercase tracking-tighter">Ecosistema Punto Jar</h2>
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="p-12 bg-white/90 backdrop-blur rounded-[4rem] shadow-xl border-t-8 border-[#f7b731] flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-[#f7b731] rounded-3xl mb-8 flex items-center justify-center text-white shadow-lg rotate-3">
                        <span className="text-5xl">🍺</span>
                    </div>
                    <h4 className="text-3xl font-black text-[#5d2b12] mb-4">El Explorador</h4>
                    <p className="text-gray-600 mb-6">Encuentra su 'punto' ideal, suma insignias por cada ruta completada y accede a eventos exclusivos de barrio.</p>
                    <div className="w-full h-px bg-gray-100 my-4"></div>
                    <p className="text-[#5d2b12] font-bold uppercase text-xs tracking-widest italic">Beneficio: Recompensas Reales</p>
                </div>
                <div className="p-12 bg-[#5d2b12] rounded-[4rem] shadow-2xl text-white flex flex-col items-center text-center relative overflow-hidden">
                    <div className="w-24 h-24 bg-white/10 rounded-3xl mb-8 flex items-center justify-center text-white shadow-inner -rotate-3">
                        <span className="text-5xl">🤝</span>
                    </div>
                    <h4 className="text-3xl font-black text-[#f7b731] mb-4">El Socio</h4>
                    <p className="opacity-80 mb-6">Visibiliza su marca, publica eventos en tiempo real y recibe data inteligente sobre sus clientes y la competencia.</p>
                    <div className="w-full h-px bg-white/10 my-4"></div>
                    <p className="text-[#e6c888] font-bold uppercase text-xs tracking-widest italic">Beneficio: Alcance Estratégico</p>
                </div>
            </div>
        </Slide>
    );
};

export default ProfilesSlide;
