
import React, { useState } from 'react';
import { generateBeerRoute } from '../services/geminiService';
import { RouteSuggestion } from '../types';

const InteractiveRoute: React.FC = () => {
  const [pref, setPref] = useState('');
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState<RouteSuggestion[]>([]);
  const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/studio-7377357488-df5a7.firebasestorage.app/o/brew.png?alt=media&token=ffb86629-ed88-48ee-9f8a-16a9576e74de";

  const handleGenerate = async () => {
    if (!pref) return;
    setLoading(true);
    try {
      const data = await generateBeerRoute(pref);
      setRoute(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 rounded-[3rem] shadow-2xl border-l-[12px] border-[#5d2b12] text-left relative overflow-hidden">
      <div className="absolute top-4 right-4 opacity-5 w-24 h-24">
         <img src={LOGO_URL} alt="" />
      </div>
      <h3 className="text-2xl font-black text-[#5d2b12] mb-2 uppercase tracking-tighter">Motor de Afinidad</h3>
      <p className="text-xs text-gray-400 mb-6 uppercase font-bold tracking-widest italic">Powered by Punto Jar AI</p>
      
      <div className="flex flex-col gap-4">
        <input 
          type="text" 
          value={pref}
          onChange={(e) => setPref(e.target.value)}
          placeholder="¿Qué pola te gusta hoy? (Ej: Una Stout densa...)"
          className="p-4 rounded-2xl border-2 border-[#e6c888]/50 focus:border-[#5d2b12] outline-none text-gray-800 bg-gray-50/50"
        />
        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="bg-[#5d2b12] text-white py-4 px-8 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50 shadow-lg active:scale-95"
        >
          {loading ? 'Buscando tu Punto...' : 'Trazar mi Ruta Punto Jar'}
        </button>
      </div>

      {route.length > 0 && (
        <div className="mt-8 space-y-6 animate-fade-in max-h-64 overflow-y-auto pr-2 custom-scrollbar">
          {route.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4 relative group">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-black text-[#d4a017] uppercase tracking-tighter">Punto {idx + 1}</span>
                  <h4 className="font-black text-[#5d2b12] text-lg leading-none mb-1">{item.venueName}</h4>
                </div>
                <span className="text-[10px] font-bold bg-[#f7b731]/10 text-[#d4a017] px-3 py-1 rounded-full border border-[#f7b731]/20">{item.priceRange}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 italic leading-snug">{item.description}</p>
              <div className="mt-3 flex gap-2">
                 <span className="text-[10px] font-black text-[#5d2b12] uppercase tracking-widest bg-gray-100 px-2 py-1 rounded-md">{item.style}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e6c888; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default InteractiveRoute;
