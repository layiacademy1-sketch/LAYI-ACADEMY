
import React, { useState } from 'react';
import { ArrowLeft, Zap, ChevronRight, Globe, Layout, Sparkles, ChevronDown, CheckCircle2, Code, AppWindow } from 'lucide-react';

interface DiscoverFormationsViewProps {
  onBack: () => void;
  onSnapchatClick: () => void;
  onWebsiteClick: () => void;
}

const DiscoverFormationsView: React.FC<DiscoverFormationsViewProps> = ({ onBack, onSnapchatClick, onWebsiteClick }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 pb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 px-1">
        <button 
          onClick={onBack}
          className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">
            LA Référence des formations <span className="text-[#FFB000] animate-pulse inline-block">rapides</span>
          </h2>
          <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">Choisissez votre expertise</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Snapchat Formation */}
        <div 
          onClick={onSnapchatClick}
          className="glass-card p-8 rounded-[40px] border-white/10 bg-white/5 flex items-center justify-between group cursor-pointer hover:border-[#FFB000]/30 transition-all animate-in zoom-in-95 duration-500"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#FFFC00]/10 rounded-3xl flex items-center justify-center text-[#FFFC00] shadow-lg group-hover:rotate-12 transition-transform">
              <Zap size={32} fill="currentColor" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Snapchat</h3>
                <span className="bg-[#FFB000] text-black px-3 py-1 rounded-full text-[10px] font-black italic">2H</span>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Devenez un expert certifié</p>
            </div>
          </div>
          <ChevronRight size={24} className="text-gray-600 group-hover:text-[#FFB000] group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverFormationsView;
