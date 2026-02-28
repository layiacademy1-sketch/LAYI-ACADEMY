
import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, Zap, MessageSquare, Layout, Code, AppWindow } from 'lucide-react';

interface WebsitePresentationViewProps {
  onBack: () => void;
}

const WebsitePresentationView: React.FC<WebsitePresentationViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = () => {
    const message = encodeURIComponent("Bonjour, j’aimerais avoir plus de renseignements afin de pouvoir m’inscrire à l'offre de création de site internet.");
    window.open(`https://wa.me/33757828250?text=${message}`, '_blank');
  };

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
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Création site internet</h2>
          <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">L'expertise RAPIDES</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Intro Card */}
        <div className="glass-card p-8 rounded-[48px] border-4 bg-black animate-gold-border relative overflow-hidden text-center">
          <div className="absolute -top-10 -right-10 opacity-10 text-[#FFB000]">
            <Layout size={120} fill="currentColor" />
          </div>
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFB000]/10 border border-[#FFB000]/20 px-4 py-1.5 rounded-full">
              <Sparkles size={14} className="text-[#FFB000]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB000]">NOS OFFRES WEB</span>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-3xl font-[950] text-white italic tracking-tighter uppercase">Formation création site</h3>
              <p className="text-[#FFB000] text-[11px] font-black uppercase tracking-widest italic">Visibilité & Performance</p>
            </div>
          </div>
        </div>

        {/* Offers Section */}
        <div className="space-y-6 px-2">
          {/* Offre Unique */}
          <div className="glass-card p-8 rounded-[40px] border-[#FFB000]/20 bg-gradient-to-br from-[#FFB000]/5 to-transparent space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 shadow-lg">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase italic tracking-tighter text-white">Formation Site Internet</h4>
                  <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest italic">Durée : 5h</span>
                </div>
              </div>
              <span className="text-2xl font-black text-[#FFB000] italic">365 €</span>
            </div>
            
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#FFB000]/10 rounded-lg flex items-center justify-center text-[#FFB000] shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-[12px] text-gray-300 font-bold italic">Choix de l’hébergeur du site</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#FFB000]/10 rounded-lg flex items-center justify-center text-[#FFB000] shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-[12px] text-gray-300 font-bold italic">Choix du nom de domaine</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#FFB000]/10 rounded-lg flex items-center justify-center text-[#FFB000] shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-[12px] text-gray-300 font-bold italic">Choix du design</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#FFB000]/10 rounded-lg flex items-center justify-center text-[#FFB000] shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-[12px] text-gray-300 font-bold italic">Méthode de référencement Google</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#FFB000]/10 rounded-lg flex items-center justify-center text-[#FFB000] shrink-0">
                  <Code size={14} />
                </div>
                <p className="text-[12px] text-gray-300 font-bold italic">Formation création rapide de site avec IA</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#FFB000]/10 rounded-lg flex items-center justify-center text-[#FFB000] shrink-0">
                  <AppWindow size={14} />
                </div>
                <p className="text-[12px] text-gray-300 font-bold italic">Création d’applications web personnalisées</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4 px-2">
          <button 
            onClick={handleRegister}
            className="button-glow w-full bg-[#FFB000] text-black py-6 rounded-[28px] font-black uppercase text-[13px] tracking-[0.2em] active:scale-95 transition-all flex items-center justify-center gap-3 relative overflow-hidden shadow-[0_10px_40px_rgba(255,176,0,0.3)]"
          >
            <MessageSquare size={20} fill="currentColor" />
            <span className="relative z-10">S’inscrire</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsitePresentationView;
