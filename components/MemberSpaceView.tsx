
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, Gift, Car, Hotel, Star, Calendar, Users, 
  Wallet, History, ArrowDownLeft, ArrowUpRight, 
  ChevronRight, User, MapPin, ArrowLeft, Send, BarChart3, Heart, Share2, Video, Banknote, PlusCircle, Sparkles, TrendingUp,
  Clock, Layout
} from 'lucide-react';

interface MemberSpaceViewProps {
  memberName: string;
  initialTab?: 'avantages' | 'events' | 'tools';
  onViewPrivateSale?: () => void;
}

const MemberSpaceView: React.FC<MemberSpaceViewProps> = ({ memberName, initialTab, onViewPrivateSale }) => {
  const [activeTab, setActiveTab] = useState<'avantages' | 'events'>('avantages');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  
  useEffect(() => {
    if (initialTab && initialTab !== 'tools') {
      setActiveTab(initialTab as 'avantages' | 'events');
    }
  }, [initialTab]);

  const handleContact = (number: string, customMessage: string) => {
    const centralNumber = "33757828250";
    const message = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${centralNumber}?text=${message}`, '_blank');
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || isNaN(Number(withdrawAmount))) {
      alert("Veuillez saisir un montant valide.");
      return;
    }
    const message = `Bonjour, je souhaite retirer ${withdrawAmount} €`;
    handleContact("33757828250", message);
  };

  const handleAddToCalendar = (title: string, date: string) => {
    alert(`L'événement "${title}" du ${date} a été ajouté à votre calendrier.`);
  };

  // Simulation de gains pour le design
  const generatedEarnings = "1 450,00";

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      <div className="space-y-2 px-1 text-center">
        <div className="bg-[#FFB000]/10 w-16 h-16 rounded-3xl flex items-center justify-center text-[#FFB000] mx-auto mb-4 border border-[#FFB000]/20 shadow-[0_0_20px_rgba(255,176,0,0.1)] animate-float">
          <Star size={32} fill="#FFB000" />
        </div>
        <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">Espace {memberName}</h2>
        <div className="flex items-center justify-center gap-2">
           <div className="h-[1px] w-4 bg-[#FFB000]/30"></div>
           <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-[0.3em] italic">Membre Privilégié LAYI</p>
           <div className="h-[1px] w-4 bg-[#FFB000]/30"></div>
        </div>
      </div>

      <div className="bg-white/5 p-1 rounded-[24px] flex gap-1 border border-white/5 shadow-inner">
        <button 
          onClick={() => setActiveTab('avantages')}
          className={`flex-1 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'avantages' ? 'bg-[#FFB000] text-black shadow-lg shadow-[#FFB000]/20' : 'text-gray-400 hover:text-white'}`}
        >
          Avantages
        </button>
        <button 
          onClick={() => setActiveTab('events')}
          className={`flex-1 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'events' ? 'bg-[#FFB000] text-black shadow-lg shadow-[#FFB000]/20' : 'text-gray-400 hover:text-white'}`}
        >
          Événements
        </button>
      </div>

      <div className="animate-in slide-in-from-right duration-500">
        {activeTab === 'avantages' && (
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-[40px] border-[#FFB000]/30 bg-gradient-to-br from-[#FFB000]/10 to-transparent space-y-4 overflow-hidden relative group">
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700 text-[#FFB000]">
                <Gift size={120} />
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-[#FFB000]/20 text-[#FFB000] rounded-2xl flex items-center justify-center border border-[#FFB000]/20">
                  <Gift size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase italic text-white tracking-tighter">Vente privée</h4>
                  <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest">Jusqu’à -70 % de réduction</p>
                </div>
              </div>
              <button 
                onClick={onViewPrivateSale}
                className="w-full bg-[#FFB000] text-black py-5 rounded-[24px] font-black uppercase text-[11px] tracking-widest relative z-10 active:scale-95 transition-all shadow-xl shadow-[#FFB000]/20"
              >
                Voir
              </button>
            </div>

            <div className="glass-card p-6 rounded-[40px] border-white/10 space-y-4 overflow-hidden relative group">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Hotel size={120} />
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-purple-500/20 text-purple-500 rounded-2xl flex items-center justify-center border border-purple-500/20"><Hotel size={28} /></div>
                <div>
                  <h4 className="text-xl font-black uppercase italic text-white tracking-tighter">Hôtels Accor</h4>
                  <p className="text-[10px] text-purple-500 font-black uppercase tracking-widest">Réductions jusqu'à -70%</p>
                </div>
              </div>
              <button 
                onClick={() => handleContact('33757828250', "Bonjour, je souhaite bénéficier de l'offre membre LAYI pour les hôtels Accor.")}
                className="w-full bg-white text-black py-5 rounded-[24px] font-black uppercase text-[11px] tracking-widest relative z-10 active:scale-95 transition-all shadow-xl"
              >
                Réserver mon hôtel
              </button>
            </div>

            <div className="glass-card p-6 rounded-[40px] border-white/10 space-y-4 overflow-hidden relative group">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Car size={120} />
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center border border-blue-500/20"><Car size={28} /></div>
                <div>
                  <h4 className="text-xl font-black uppercase italic text-white tracking-tighter">Europcar</h4>
                  <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest">Réductions jusqu'à -40%</p>
                </div>
              </div>
              <button 
                onClick={() => handleContact('33757828250', "Bonjour, je souhaite bénéficier de l'offre membre LAYI chez Europcar.")}
                className="w-full bg-white text-black py-5 rounded-[24px] font-black uppercase text-[11px] tracking-widest relative z-10 active:scale-95 transition-all shadow-xl"
              >
                Louer un véhicule
              </button>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 animate-in fade-in duration-700">
            <div className="w-20 h-20 bg-white/5 rounded-[32px] flex items-center justify-center text-gray-600 border border-white/5 shadow-inner">
              <Calendar size={40} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black uppercase italic text-white tracking-tighter">Événements</h3>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Retrouvez bientôt nos prochains événements.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberSpaceView;
