
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, MapPin, Euro, Users, ChevronRight, Mail, Star, Info } from 'lucide-react';
import { Creator } from '../types';

interface CollaborateCreatorsViewProps {
  onBack: () => void;
}

const CREATORS: Creator[] = [
  {
    id: 'nasdas',
    name: 'Nasdas',
    city: 'Perpignan',
    avgPrice: 6000,
    subscribers: '9,4 millions',
    description: '2ᵉ influenceur de France',
    contact: 'nasdascollab@gmail.com',
    imageUrl: 'https://image.noelshack.com/fichiers/2026/09/1/1771883541-136782524-847171155854426-8932989962663449589-n.jpg'
  },
  {
    id: 'hachemi',
    name: 'Hachemi',
    city: 'Paris',
    avgPrice: 6000,
    subscribers: '12,7 millions',
    description: 'Expert en divertissement et lifestyle',
    contact: 'contact@hachemisb.com',
    imageUrl: 'https://image.noelshack.com/fichiers/2026/09/1/1771883844-hachemi-b-studio.jpg'
  }
];

const CollaborateCreatorsView: React.FC<CollaborateCreatorsViewProps> = ({ onBack }) => {
  const [searchCity, setSearchCity] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  const hasFilter = useMemo(() => {
    return searchCity.trim() !== '' || searchPrice.trim() !== '';
  }, [searchCity, searchPrice]);

  const filteredCreators = useMemo(() => {
    if (!hasFilter) return [];
    
    return CREATORS.filter(creator => {
      const matchCity = searchCity ? creator.city.toLowerCase().includes(searchCity.toLowerCase()) : true;
      const matchPrice = searchPrice ? creator.avgPrice <= parseInt(searchPrice) : true;
      return matchCity && matchPrice;
    });
  }, [hasFilter, searchCity, searchPrice]);

  if (selectedCreator) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 pb-24">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 px-1">
          <button 
            onClick={() => setSelectedCreator(null)}
            className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Profil Créateur</h2>
            <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">{selectedCreator.name}</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile Card */}
          <div className="glass-card overflow-hidden rounded-[48px] border-white/10 bg-white/5">
            <div className="aspect-square relative">
              <img 
                src={selectedCreator.imageUrl} 
                alt={selectedCreator.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white mb-2">{selectedCreator.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="bg-[#FFB000] text-black px-3 py-1 rounded-full text-[10px] font-black italic uppercase">Vérifié</span>
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest italic flex items-center gap-1">
                    <MapPin size={12} /> {selectedCreator.city}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Abonnés</p>
                  <p className="text-xl font-black text-white italic">{selectedCreator.subscribers}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Prix Moyen</p>
                  <p className="text-xl font-black text-[#FFB000] italic">{selectedCreator.avgPrice} €</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic flex items-center gap-2">
                  <Info size={14} /> À propos
                </h4>
                <p className="text-gray-300 font-bold italic leading-relaxed">
                  {selectedCreator.description}
                </p>
              </div>

              {/* Contact */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <button 
                  onClick={() => {
                    const snapHandle = selectedCreator.id === 'nasdas' ? 'naslachiente' : 'hachemi95';
                    window.open(`https://www.snapchat.com/add/${snapHandle}`, '_blank');
                  }}
                  className="w-full bg-[#FFFC00] text-black py-6 rounded-[28px] font-black uppercase text-[13px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#FFB000] transition-colors"
                >
                  <Star size={20} fill="currentColor" />
                  Voir le Snapchat
                </button>

                <a 
                  href={`mailto:${selectedCreator.contact}`}
                  className="w-full bg-white text-black py-6 rounded-[28px] font-black uppercase text-[13px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#FFB000] transition-colors"
                >
                  <Mail size={20} fill="currentColor" />
                  Contact collaboration
                </a>
                <p className="text-center mt-4 text-[10px] text-gray-500 font-black uppercase tracking-widest italic">
                  {selectedCreator.contact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Collaborer</h2>
          <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">Trouvez votre créateur</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Filters Card */}
        <div className="glass-card p-8 rounded-[40px] border-white/10 bg-white/5 space-y-6">
          <div className="space-y-4">
            {/* City Filter */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="RECHERCHE PAR VILLE"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-[10px] font-black uppercase tracking-widest focus:border-[#FFB000] outline-none transition-all"
              />
            </div>

            {/* Price Filter */}
            <div className="relative">
              <Euro className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="number" 
                placeholder="PRIX MAXIMUM (€)"
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-[10px] font-black uppercase tracking-widest focus:border-[#FFB000] outline-none transition-all"
              />
            </div>
          </div>

          {!hasFilter && (
            <div className="text-center py-4">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">
                Remplissez au moins un critère pour voir les résultats
              </p>
            </div>
          )}
        </div>

        {/* Results Section */}
        {hasFilter && (
          <div className="space-y-4">
            <h3 className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic px-2">
              Résultats ({filteredCreators.length})
            </h3>
            
            {filteredCreators.length > 0 ? (
              <div className="space-y-4">
                {filteredCreators.map(creator => (
                  <div 
                    key={creator.id}
                    onClick={() => setSelectedCreator(creator)}
                    className="glass-card p-6 rounded-[32px] border-white/10 bg-white/5 flex items-center justify-between group cursor-pointer hover:border-[#FFB000]/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                        <img 
                          src={creator.imageUrl} 
                          alt={creator.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-black uppercase italic tracking-tighter text-white">{creator.name}</h4>
                        <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">{creator.subscribers} abonnés</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-gray-600 group-hover:text-[#FFB000] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 glass-card rounded-[40px] border-white/5 bg-white/5">
                <Search size={40} className="mx-auto text-gray-700 mb-4" />
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Aucun créateur ne correspond à vos critères</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollaborateCreatorsView;
