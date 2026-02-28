
import React from 'react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

interface PrivateSaleViewProps {
  onBack: () => void;
}

const PrivateSaleView: React.FC<PrivateSaleViewProps> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 pb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 px-1">
        <button 
          onClick={onBack}
          className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Ventes Privées</h2>
          <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">Jusqu'à -70% de réduction</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="w-20 h-20 bg-white/5 rounded-[32px] flex items-center justify-center text-gray-600 border border-white/5 shadow-inner">
          <ShoppingCart size={40} />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-black uppercase italic text-white tracking-tighter">Ventes Privées</h3>
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Bientôt disponible</p>
        </div>
      </div>
    </div>
  );
};

export default PrivateSaleView;
