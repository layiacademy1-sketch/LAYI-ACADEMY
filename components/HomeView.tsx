
import React, { useState } from 'react';
import { ChevronRight, Calendar, ShieldCheck, Sparkles, Video, Eye, Star } from 'lucide-react';
import { Introducer } from '../types';

interface HomeViewProps {
  onRegisterIntroducer: () => void;
  onTrainingLivesClick: () => void;
  onMemberAccessClick: () => void;
  onIntroducerDetails: (intro: Introducer) => void;
  onPresentationClick: () => void;
  onMembershipOfferClick: () => void;
  onAllFormationsClick: () => void;
  onAdminDashboardClick: () => void;
  onCollaborateClick: () => void;
  isMember?: boolean;
}

const HomeView: React.FC<HomeViewProps> = ({ 
  onRegisterIntroducer, 
  onTrainingLivesClick, 
  onMemberAccessClick,
  onIntroducerDetails,
  onPresentationClick,
  onMembershipOfferClick,
  onAllFormationsClick,
  onAdminDashboardClick,
  onCollaborateClick,
  isMember = false
}) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Admin & Member Access Section */}
      <div className="px-1 pt-2 space-y-4">
        <button 
          onClick={onAdminDashboardClick}
          className="w-full py-4 rounded-[28px] border border-blue-500/20 bg-blue-500/5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/70 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 transition-all flex items-center justify-center gap-3 group active:scale-95 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
          <ShieldCheck size={16} className="text-blue-400/50 group-hover:text-white transition-colors" />
          <span className="relative z-10">Accès Admin</span>
        </button>

        {/* ESPACE Membre Shortcut - Moved below Admin */}
        <button 
          onClick={onMemberAccessClick}
          className="w-full glass-card p-6 rounded-[40px] border-[#FFB000]/40 bg-gradient-to-br from-[#FFB000]/10 to-transparent flex items-center justify-between group active:scale-95 transition-all shadow-xl"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#FFB000] rounded-2xl flex items-center justify-center text-black shadow-lg shadow-[#FFB000]/20 group-hover:rotate-12 transition-transform">
              <Star size={28} fill="currentColor" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Espace Membre</h3>
              <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">{isMember ? 'Accès rapide à votre compte' : 'Espace privé & sécurisé'}</p>
            </div>
          </div>
          <ChevronRight size={24} className="text-[#FFB000] group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Ils nous ont fait confiance Shortcut */}
        <button 
          onClick={onAllFormationsClick}
          className="w-full glass-card p-6 rounded-[40px] border-white/10 bg-white/5 flex items-center justify-between group active:scale-95 transition-all shadow-xl"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-[#FFB000] shadow-lg group-hover:rotate-12 transition-transform">
              <Eye size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Ils nous ont fait confiance</h3>
            </div>
          </div>
          <ChevronRight size={24} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Collaborer avec un créateur Shortcut */}
        <button 
          onClick={onCollaborateClick}
          className="w-full glass-card p-6 rounded-[40px] border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent flex items-center justify-between group active:scale-95 transition-all shadow-xl"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 shadow-lg group-hover:rotate-12 transition-transform">
              <Video size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Collaborer avec un créateur</h3>
            </div>
          </div>
          <ChevronRight size={24} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative rounded-[48px] overflow-hidden bg-white p-10 mt-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center border-b-8 border-black/5">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#FFB000]/10 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/5 rounded-full blur-[80px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-8">
          <div className="bg-black px-8 py-2 rounded-full border border-white/10 shadow-2xl scale-90 animate-float">
            <span className="text-[#FFB000] font-black italic text-xl tracking-tighter">LAYI</span>
          </div>

          <div className="space-y-6 w-full">
            <h1 className="flex flex-col items-center gap-2">
              <span className="text-[32px] font-[950] leading-tight tracking-tighter text-black uppercase italic text-center">
                Formation Snapchat <br />
                <span className="text-[#FFB000] animate-pulse inline-block transform hover:scale-110 transition-transform duration-500">N°1 en France</span>
              </span>
            </h1>
            
            <div className="pt-2">
              <button 
                onClick={onPresentationClick}
                className="button-glow w-full bg-black text-[#FFB000] py-6 rounded-[28px] font-black uppercase text-[13px] tracking-[0.2em] active:scale-95 transition-all mt-2 border-t border-white/20 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                   En savoir plus <ChevronRight size={18} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="px-1 space-y-4">
        {/* S'inscrire Shortcut */}
        <button 
          onClick={onMembershipOfferClick}
          className="w-full glass-card p-6 rounded-[40px] border-[#FFB000]/40 bg-gradient-to-br from-[#FFB000]/20 to-transparent flex items-center justify-between group active:scale-95 transition-all shadow-xl animate-pulse"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black shadow-lg group-hover:rotate-12 transition-transform">
              <Sparkles size={28} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">S'inscrire à notre formation</h3>
            </div>
          </div>
          <ChevronRight size={24} className="text-[#FFB000] group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </div>
  );
};

export default HomeView;
