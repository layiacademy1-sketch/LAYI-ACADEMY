
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, MapPin, Users, Banknote, ChevronRight, Mail, Star, Filter } from 'lucide-react';

interface Creator {
  id: string;
  name: string;
  subscribers: string;
  avgPrice: number;
  city: string;
  description: string;
  contact: string;
  rank?: string;
}

interface CreatorCollabViewProps {
  onBack: () => void;
}

const creators: Creator[] = [
  {
    id: 'nasdas',
    name: 'Nasdas',
    subscribers: '9,4 millions',
    avgPrice: 6000,
    city: 'Perpignan',
    description: '2ème influenceur de France',
    contact: 'nasdascollab@gmail.com',
    rank: '2ème influenceur de France'
  },
  {
    id: 'hachemi',
    name: 'Hachemi',
    subscribers: '12,7 millions',
    avgPrice: 6000,
    city: 'Paris',
    description: 'Créateur de contenu lifestyle et divertissement',
    contact: 'contact@hachemisb.com'
  }
];

const CreatorCollabView: React.FC<CreatorCollabViewProps> = ({ onBack }) => {
  const [searchCity, setSearchCity] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [searchAvgPrice, setSearchAvgPrice] = useState('');
  const [searchSubscribers, setSearchSubscribers] = useState('');
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hasFilter = searchCity || searchPrice || searchAvgPrice || searchSubscribers;

  const filteredCreators = creators.filter(creator => {
    if (!hasFilter) return false;
    
    let matches = true;
    if (searchCity && !creator.city.toLowerCase().includes(searchCity.toLowerCase())) matches = false;
    if (searchAvgPrice && creator.avgPrice > Number(searchAvgPrice)) matches = false;
    if (searchSubscribers && !creator.subscribers.toLowerCase().includes(searchSubscribers.toLowerCase())) matches = false;
    
    return matches;
  });

  if (selectedCreator) {
    return (
      <div className="animate-in fade-in slide-in-from-right duration-500 pb-24">
        <div className="flex items-center gap-4 mb-10 px-1">
          <button 
            onClick={() => setSelectedCreator(null)}
            className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">{selectedCreator.name}</h2>
            <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">Profil Créateur</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8 rounded-[48px] border-4 bg-black animate-gold-border relative overflow-hidden text-center">
            <div className="absolute -top-10 -right-10 opacity-10 text-[#FFB000]">
              <Star size={120} fill="currentColor" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-24 h-24 bg-[#FFB000] rounded-full flex items-center justify-center text-black mx-auto shadow-2xl text-3xl font-black italic">
                {selectedCreator.name[0]}
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-[950] text-white italic tracking-tighter uppercase">{selectedCreator.name}</h3>
                {selectedCreator.rank && (
                  <p className="text-[#FFB000] text-[12px] font-black uppercase tracking-widest italic">{selectedCreator.rank}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-2">
            <div className="glass-card p-6 rounded-[32px] border-white/10 bg-white/5 text-center space-y-2">
              <Users size={20} className="text-[#FFB000] mx-auto" />
              <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Abonnés</p>
              <p className="text-lg font-black text-white italic">{selectedCreator.subscribers}</p>
            </div>
            <div className="glass-card p-6 rounded-[32px] border-white/10 bg-white/5 text-center space-y-2">
              <Banknote size={20} className="text-[#FFB000] mx-auto" />
              <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Prix Moyen</p>
              <p className="text-lg font-black text-white italic">{selectedCreator.avgPrice} €</p>
            </div>
          </div>

          <div className="px-2 space-y-6">
            <div className="glass-card p-8 rounded-[40px] border-white/10 bg-white/5 space-y-4">
              <h4 className="text-sm font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                <Filter size={16} className="text-[#FFB000]" /> Description
              </h4>
              <p className="text-[13px] text-gray-400 font-bold italic leading-relaxed">
                {selectedCreator.description}
              </p>
            </div>

            <div className="glass-card p-8 rounded-[40px] border-[#FFB000]/20 bg-gradient-to-br from-[#FFB000]/10 to-transparent space-y-4">
              <h4 className="text-sm font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                <Mail size={16} className="text-[#FFB000]" /> Contact Collaboration
              </h4>
              <a 
                href={`mailto:${selectedCreator.contact}`}
                className="block w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-[12px] tracking-widest text-center hover:scale-105 transition-all"
              >
                {selectedCreator.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 pb-24">
      <div className="flex items-center gap-4 mb-10 px-1">
        <button 
          onClick={onBack}
          className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Collaborer avec un créateur</h2>
          <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">Trouvez votre partenaire idéal</p>
        </div>
      </div>

      <div className="space-y-6 px-1">
        {/* Search & Filters */}
        <div className="glass-card p-6 rounded-[40px] border-white/10 bg-white/5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-2">Ville</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input 
                  type="text" 
                  placeholder="Paris..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-10 pr-4 text-[11px] text-white focus:outline-none focus:border-[#FFB000]/30 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-2">Prix Max</label>
              <div className="relative">
                <Banknote size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input 
                  type="number" 
                  placeholder="7000..."
                  value={searchAvgPrice}
                  onChange={(e) => setSearchAvgPrice(e.target.value)}
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-10 pr-4 text-[11px] text-white focus:outline-none focus:border-[#FFB000]/30 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-2">Abonnés</label>
              <div className="relative">
                <Users size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input 
                  type="text" 
                  placeholder="9,4 millions..."
                  value={searchSubscribers}
                  onChange={(e) => setSearchSubscribers(e.target.value)}
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-10 pr-4 text-[11px] text-white focus:outline-none focus:border-[#FFB000]/30 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-2">Recherche</label>
              <div className="relative">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input 
                  type="text" 
                  placeholder="Nom..."
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-10 pr-4 text-[11px] text-white focus:outline-none focus:border-[#FFB000]/30 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] italic ml-2">Résultats</h3>
          
          {!hasFilter ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white/5 rounded-[40px] border border-dashed border-white/10">
              <Search size={40} className="text-gray-700" />
              <p className="text-[11px] text-gray-500 font-black uppercase tracking-widest italic max-w-[200px]">
                Veuillez renseigner au moins un critère pour voir les résultats.
              </p>
            </div>
          ) : filteredCreators.length > 0 ? (
            <div className="space-y-3">
              {filteredCreators.map(creator => (
                <div 
                  key={creator.id}
                  onClick={() => setSelectedCreator(creator)}
                  className="glass-card p-6 rounded-[32px] border-white/10 bg-white/5 flex items-center justify-between group cursor-pointer hover:border-[#FFB000]/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#FFB000]/10 rounded-2xl flex items-center justify-center text-[#FFB000] font-black italic">
                      {creator.name[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">{creator.name}</h4>
                      <div className="flex items-center gap-2 text-[9px] text-gray-500 font-black uppercase tracking-widest italic">
                        <Users size={10} /> {creator.subscribers}
                        <span className="text-gray-700">•</span>
                        <MapPin size={10} /> {creator.city}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-600 group-hover:text-[#FFB000] group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white/5 rounded-[40px] border border-dashed border-white/10">
              <p className="text-[11px] text-gray-500 font-black uppercase tracking-widest italic">
                Aucun créateur ne correspond à vos critères.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorCollabView;
