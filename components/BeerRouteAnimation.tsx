import React from 'react';

const GooglePin: React.FC<{ color?: string }> = ({ color = "#EA4335" }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={color} />
        <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
);

const BeerRouteAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-[450px] bg-[#e5e3df] rounded-[3rem] shadow-2xl border-l-[12px] border-[#5d2b12] flex items-center justify-center overflow-hidden">

            {/* MAP BACKGROUND DESIGN */}
            <div className="absolute inset-0 opacity-40">
                {/* Roads */}
                <div className="absolute top-1/4 left-0 w-full h-10 bg-white -rotate-6 shadow-sm"></div>
                <div className="absolute top-0 left-1/4 w-12 h-full bg-white rotate-12 shadow-sm"></div>
                <div className="absolute bottom-1/3 left-0 w-full h-12 bg-white rotate-3 shadow-sm"></div>
                <div className="absolute top-0 right-1/4 w-8 h-full bg-white shadow-sm"></div>

                {/* Parks / Blocks */}
                <div className="absolute top-10 right-10 w-32 h-24 bg-[#c8e6c9] rounded-xl"></div>
                <div className="absolute bottom-20 left-10 w-20 h-32 bg-[#fff9c4] rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-20 bg-[#f5f5f5] rounded-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative w-full h-full p-10 z-10">
                {/* SVG Path Animation */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="animate-draw-path"
                        d="M 50 250 Q 100 50 200 150 T 350 100"
                        stroke="#5d2b12"
                        strokeWidth="4"
                        strokeDasharray="10 10"
                        strokeLinecap="round"
                    />

                    <circle r="5" fill="#d4a017" className="animate-pulse">
                        <animateMotion
                            path="M 50 250 Q 100 50 200 150 T 350 100"
                            dur="5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>

                {/* Location Pins & Beer Icons */}

                {/* Start Point */}
                <div className="absolute left-[30px] bottom-[20px] animate-bounce-slow flex flex-col items-center">
                    <GooglePin color="#5d2b12" />
                    <p className="mt-1 text-[10px] font-black text-[#5d2b12] uppercase bg-white/90 px-2 py-0.5 rounded shadow-sm">Inicio</p>
                </div>

                {/* Beer Stop 1 */}
                <div className="absolute left-[110px] top-[60px] animate-float delay-150 flex flex-col items-center group">
                    <div className="w-14 h-14 bg-[#f7b731] rounded-2xl shadow-xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500 border-2 border-white">
                        <span className="text-3xl">🍺</span>
                    </div>
                    <div className="mt-2 bg-[#EA4335] w-2 h-2 rounded-full shadow-sm"></div>
                </div>

                {/* Middle Point */}
                <div className="absolute left-[200px] top-[130px] animate-bounce-slow delay-300 flex flex-col items-center">
                    <GooglePin color="#d4a017" />
                    <p className="mt-1 text-[10px] font-black text-[#5d2b12] uppercase bg-white/90 px-2 py-0.5 rounded shadow-sm">Punto Pro</p>
                </div>

                {/* Match Point */}
                <div className="absolute right-[50px] top-[70px] animate-float-slow delay-500 flex flex-col items-center">
                    <div className="relative">
                        <div className="w-16 h-16 bg-[#5d2b12] rounded-2xl shadow-2xl flex items-center justify-center border-4 border-[#f7b731] animate-pulse">
                            <span className="text-4xl">🍺</span>
                        </div>
                        <div className="absolute -top-3 -right-3">
                            <GooglePin />
                        </div>
                    </div>
                    <p className="mt-3 text-[10px] font-black text-[#5d2b12] uppercase bg-[#f7b731] px-3 py-1 rounded-full shadow-lg italic">¡Match!</p>
                </div>

                {/* Map Label Overlay */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Mapa en tiempo real</p>
                    <p className="text-xs font-black text-[#5d2b12]">Chapinero Central</p>
                </div>
            </div>

            <style>{`
        @keyframes drawPath {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-draw-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawPath 12s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(-4deg); }
          50% { transform: translate(5px, -15px) rotate(4deg); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default BeerRouteAnimation;
