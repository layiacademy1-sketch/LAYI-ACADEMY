
import React, { useState } from 'react';
import { ArrowLeft, Search, MapPin, Tag, ChevronRight, Star, ShieldCheck, Instagram, Linkedin, Globe, MessageCircle, MessageSquare, Mail, Phone } from 'lucide-react';

interface TrustUsViewProps {
  onBack: () => void;
}

const TRUSTED_PROFILES = [
  { id: '1', name: 'Nasdas', city: 'Perpignan', country: 'France', handle: '@naslachiente', category: 'Influenceur', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771883541-136782524-847171155854426-8932989962663449589-n.jpg' },
  { id: '2', name: 'Hachemi', city: 'Paris', country: 'France', handle: 'hachemi95', category: 'Influenceur', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771883844-hachemi-b-studio.jpg' },
  { id: '5', name: 'SULTAN', city: 'Paris', country: 'France', handle: 'sultan-92013', category: 'Chanteur', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771857527-design-sans-titre-22.png' },
  { id: '3', name: 'SAVEURS DE YEMMA', city: 'Paris', country: 'France', handle: '@saveursdeyemma', category: 'Restaurant', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771884319-341130623-1614889092269959-379359339281702788-n.jpg' },
  { id: '4', name: 'Zeyro', city: 'Le Havre', country: 'France', handle: 'le_zeyro', category: 'Création', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771884474-572138931-17852985210568999-4014642941472065520-n.jpg' },
  { id: '6', name: 'LE H', city: 'Paris', country: 'France', handle: 'hachim269', category: 'Conciergerie', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771856360-design-sans-titre-16.png' },
  { id: '7', name: 'COLOMBIANA', city: 'Perpignan', country: 'France', handle: 'mendozatereza25', category: 'Influenceuse', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771857223-design-sans-titre-21.png' },
  { id: '8', name: 'MELLI', city: 'Paris', country: 'France', handle: 'melli-creation', category: 'Formation et Création', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771858924-design-sans-titre-24.png' },
  { id: '9', name: 'SOPHIE LA S', city: 'Paris', country: 'France', handle: 'sophie-zina', category: 'Formation et Création', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771858671-design-sans-titre-20.png' },
  { id: '10', name: 'SAIDA', city: 'Rennes', country: 'France', handle: 'saida-75', category: 'Formation', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771860074-design-sans-titre-25.png' },
  { id: '11', name: 'CAMILLA', city: 'Paris', country: 'France', handle: 'camillalougayne', category: 'Influenceuse', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771858537-design-sans-titre-23.jpg' },
  { id: '12', name: 'La Plume de la Réussite', city: 'Le Havre', country: 'France', handle: 'laplumedlr', category: 'Formation', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771884625-design-sans-titre-14.png' },
  { id: '13', name: 'DECOWITHZALY', city: 'Paris', country: 'France', handle: 'decowithzaly', category: 'Décoratrice d’intérieur', image: 'https://image.noelshack.com/fichiers/2026/09/1/1771858026-design-sans-titre-19.png' },
  { id: '14', name: 'ANYBAAL', city: 'Rouen', country: 'France', handle: 'anybaal', category: 'Créateur' },
  { id: '15', name: 'Maître Kada SADOUNI', city: 'Nice', country: 'France', handle: 'ks-avocat', category: 'Avocat' },
  { id: '16', name: 'API IMMO', city: 'Le Mans', country: 'France', handle: 'api.immo', category: 'Formation' },
  { id: '17', name: 'AC BOSS', city: 'Paris', country: 'France', handle: 'iamcherine2021', category: 'Créatrice' },
  { id: '18', name: 'MOUSSA', city: 'Paris', country: 'France', handle: 'moussa.a92', category: 'Créateur' },
  { id: '19', name: 'LAYI.FR', city: 'Paris', country: 'France', handle: 'layi.fr', category: 'Créateur' },
  { id: '20', name: 'LAYI-LIFE', city: 'Paris', country: 'France', handle: 'layi-life', category: 'Créateur' },
  { id: '21', name: 'SAMI', city: 'Paris', country: 'France', handle: 'sami.officiel', category: 'Créateur' },
  { id: '22', name: 'ZORA', city: 'Strasbourg', country: 'France', handle: 'zoraslh', category: 'Influenceuse', image: 'https://image.noelshack.com/fichiers/2026/09/4/1772119644-design-sans-titre-28.png' },
  { id: '23', name: 'INDA', city: 'Strasbourg', country: 'France', handle: 'indaslh', category: 'Créatrice' },
  { id: '24', name: 'BW TRANSPORT', city: 'Guangzhou', country: 'Chine', handle: 'lachine75000', category: 'société/entreprise' },
];

const CATEGORIES = [
  "Toutes les catégories",
  "Chanteur",
  "Influenceur",
  "Influenceuse",
  "Création",
  "Formation",
  "Créateur de contenu",
  "Restaurant",
  "Formation et Création",
  "Décoratrice d’intérieur",
  "Créateur",
  "Avocat",
  "Créatrice",
  "société/entreprise",
  "Conciergerie"
];

const TrustUsView: React.FC<TrustUsViewProps> = ({ onBack }) => {
  const [searchCity, setSearchCity] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProfileClick = (profile: typeof TRUSTED_PROFILES[0]) => {
    const detailedProfiles = ['Zeyro', 'La Plume de la Réussite', 'Maître Kada SADOUNI', 'API IMMO', 'SAIDA', 'Nasdas', 'Hachemi', 'SAVEURS DE YEMMA'];
    if (detailedProfiles.includes(profile.name)) {
      setSelectedProfileId(profile.id);
    } else {
      const pseudo = profile.handle.startsWith('@') ? profile.handle.substring(1) : profile.handle;
      window.open(`https://www.snapchat.com/add/${pseudo}`, '_blank');
    }
  };

  const selectedProfile = TRUSTED_PROFILES.find(p => p.id === selectedProfileId);

    if (selectedProfile && ['Zeyro', 'La Plume de la Réussite', 'Maître Kada SADOUNI', 'API IMMO', 'SAIDA', 'Nasdas', 'Hachemi', 'SAVEURS DE YEMMA'].includes(selectedProfile.name)) {
    const name = selectedProfile.name;
    
    let details: any = {};
    
    if (name === 'Zeyro') {
      details = {
        description: "Création de tout type de vêtements sportifs (maillots de football, basketball, etc.).",
        snapchat: "le_zeyro",
        snapchatUrl: "https://www.snapchat.com/add/le_zeyro",
        instagram: "https://www.instagram.com/le_zeyro",
        tiktok: "https://www.tiktok.com/@le.zeyro",
        linkedin: "https://www.linkedin.com/company/zeyro-ind",
        whatsapp: "https://wa.me/33652887494?text=Bonjour%2C%20je%20souhaite%20plus%20d%27informations%20sur%20vos%20services",
        website: "https://zeyro.fr"
      };
    } else if (name === 'La Plume de la Réussite') {
      details = {
        description: "Cours d’arabe en présentiel et à distance.",
        snapchat: "laplumedlr",
        snapchatUrl: "https://www.la-plume-de-la-reussite.com",
        instagram: "https://www.instagram.com/la.plume.de.la.reussite/?utm_source=qr&igsh=MWRueGsycW9jYTR3Yg%3D%3D",
        tiktok: "https://www.tiktok.com/@la.plume.de.la.reussite",
        linkedin: null,
        whatsapp: "https://wa.me/33757828250?text=Bonjour%2C%20je%20souhaite%20plus%20d%27informations%20sur%20vos%20services",
        website: "https://www.la-plume-de-la-reussite.com"
      };
    } else if (name === 'Maître Kada SADOUNI') {
      details = {
        description: "Avocat pénaliste situé au 11 bis Boulevard Dubouchage à Nice.",
        snapchat: "ks-avocat",
        snapchatUrl: "https://www.snapchat.com/add/ks-avocat",
        email: "ksadouni.avocat@gmail.com",
        phone: "09 87 57 83 72",
        whatsapp: "https://wa.me/33987578372?text=Bonjour%2C%20je%20souhaite%20plus%20d%27informations%20sur%20vos%20services"
      };
    } else if (name === 'API IMMO') {
      details = {
        description: "Investisseur immobilier, formation et accompagnement pour investir dans l’immobilier.",
        snapchat: "api.immo",
        snapchatUrl: "https://www.snapchat.com/add/api.immo",
        tiktok: "https://www.tiktok.com/@api.immo",
        website: "https://apiimmo.fr"
      };
    } else if (name === 'SAIDA') {
      details = {
        description: "Formation et accompagnement personnalisé.",
        snapchat: "saida-75",
        snapchatUrl: "https://www.snapchat.com/add/saida-75",
        whatsapp: "https://wa.me/33757828250?text=Bonjour%2C%20je%20souhaite%20plus%20d%27informations%20sur%20vos%20services"
      };
    } else if (name === 'Nasdas') {
      details = {
        description: "Le plus grand influenceur de France, direct de Perpignan.",
        snapchat: "naslachiente",
        snapchatUrl: "https://www.snapchat.com/add/naslachiente",
        instagram: "https://www.instagram.com/nasdas_off"
      };
    } else if (name === 'Hachemi') {
      details = {
        description: "Influenceur et créateur de contenu basé à Paris.",
        snapchat: "hachemi95",
        snapchatUrl: "https://www.snapchat.com/add/hachemi95",
        instagram: "https://www.instagram.com/hachemi_off"
      };
    } else if (name === 'SAVEURS DE YEMMA') {
      details = {
        description: "Restaurant traditionnel proposant des saveurs authentiques à Paris.",
        snapchat: "saveursdeyemma",
        snapchatUrl: "https://www.snapchat.com/add/saveursdeyemma",
        instagram: "https://www.instagram.com/saveursdeyemma"
      };
    }

    return (
      <div className="animate-in fade-in slide-in-from-right-6 duration-700 pb-24">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 px-1">
          <button 
            onClick={() => setSelectedProfileId(null)}
            className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">{selectedProfile.name}</h2>
            <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">{selectedProfile.category}</p>
          </div>
        </div>

        <div className="space-y-8 px-1">
          {/* Description Card */}
          <div className="glass-card p-8 rounded-[40px] border-white/10 bg-gradient-to-br from-white/5 to-transparent space-y-6">
            <div className="w-20 h-20 bg-[#FFB000]/10 rounded-3xl flex items-center justify-center text-[#FFB000] shadow-2xl mb-4 overflow-hidden">
              {selectedProfile.image ? (
                <img 
                  src={selectedProfile.image} 
                  alt={selectedProfile.name} 
                  className="w-full h-full object-cover rounded-full animate-pulse"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Star size={40} fill="currentColor" className="animate-pulse" />
              )}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[10px] text-[#FFB000] font-black uppercase tracking-[0.3em] italic">À propos</h3>
              <p className="text-lg font-bold text-white uppercase tracking-tight leading-relaxed italic">
                {details.description}
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] italic">Contact & Réseaux</h3>
              
              {/* Snapchat Button */}
              <button 
                onClick={() => window.open(details.snapchatUrl, '_blank')}
                className="w-full bg-[#FFFC00] text-black py-5 rounded-[24px] font-black uppercase text-[12px] tracking-[0.15em] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[#FFFC00]">
                  <Star size={16} fill="currentColor" />
                </div>
                Notre Snapchat : {details.snapchat}
              </button>

              <div className="grid grid-cols-2 gap-3">
                {/* Instagram */}
                {details.instagram && (
                  <button 
                    onClick={() => window.open(details.instagram, '_blank')}
                    className="bg-white/5 border border-white/10 p-4 rounded-[24px] flex flex-col items-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <Instagram size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">Instagram</span>
                  </button>
                )}

                {/* TikTok */}
                {details.tiktok && (
                  <button 
                    onClick={() => window.open(`https://www.tiktok.com/${details.tiktok}`, '_blank')}
                    className="bg-white/5 border border-white/10 p-4 rounded-[24px] flex flex-col items-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-6 h-6 flex items-center justify-center text-white font-black text-xs group-hover:scale-110 transition-transform">
                      TT
                    </div>
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">TikTok</span>
                  </button>
                )}

                {/* LinkedIn */}
                {details.linkedin && (
                  <button 
                    onClick={() => window.open(details.linkedin, '_blank')}
                    className="bg-white/5 border border-white/10 p-4 rounded-[24px] flex flex-col items-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <Linkedin size={24} className="text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">LinkedIn</span>
                  </button>
                )}

                {/* WhatsApp */}
                {details.whatsapp && (
                  <button 
                    onClick={() => window.open(details.whatsapp, '_blank')}
                    className="bg-white/5 border border-white/10 p-4 rounded-[24px] flex flex-col items-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <MessageCircle size={24} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">WhatsApp</span>
                  </button>
                )}

                {/* Email */}
                {details.email && (
                  <button 
                    onClick={() => window.open(`mailto:${details.email}`, '_blank')}
                    className="bg-white/5 border border-white/10 p-4 rounded-[24px] flex flex-col items-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <Mail size={24} className="text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">Email</span>
                  </button>
                )}

                {/* Phone */}
                {details.phone && (
                  <button 
                    onClick={() => window.open(`tel:${details.phone.replace(/\s/g, '')}`, '_blank')}
                    className="bg-white/5 border border-white/10 p-4 rounded-[24px] flex flex-col items-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <Phone size={24} className="text-sky-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">Appeler</span>
                  </button>
                )}
              </div>

              {/* Website Button */}
              {details.website && (
                <button 
                  onClick={() => window.open(details.website, '_blank')}
                  className="w-full bg-white/5 border border-white/10 text-white py-5 rounded-[24px] font-black uppercase text-[11px] tracking-[0.2em] active:scale-95 transition-all flex items-center justify-center gap-3 hover:bg-white/10"
                >
                  <Globe size={18} className="text-[#FFB000]" />
                  Site internet
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isSearching = searchCity.trim() !== '' || searchCountry.trim() !== '' || searchCategory.trim() !== '';

  const filteredProfiles = TRUSTED_PROFILES.filter(profile => 
    profile.city.toLowerCase().includes(searchCity.toLowerCase()) &&
    profile.country.toLowerCase().includes(searchCountry.toLowerCase()) &&
    (searchCategory === '' || searchCategory === 'Toutes les catégories' || profile.category === searchCategory)
  );

  const displayProfiles = isSearching ? filteredProfiles : filteredProfiles.slice(0, 5);

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
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Ils nous ont fait confiance</h2>
          <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">Nos partenaires & succès</p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="space-y-4 mb-10 px-1">
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#FFB000] transition-colors">
            <MapPin size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Recherche par ville"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-[24px] py-5 pl-14 pr-6 text-[13px] font-bold text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFB000]/50 focus:bg-white/10 transition-all italic"
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#FFB000] transition-colors">
            <Globe size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Recherche par pays"
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-[24px] py-5 pl-14 pr-6 text-[13px] font-bold text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFB000]/50 focus:bg-white/10 transition-all italic"
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#FFB000] transition-colors">
            <Tag size={18} />
          </div>
          <select 
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-[24px] py-5 pl-14 pr-6 text-[13px] font-bold text-white focus:outline-none focus:border-[#FFB000]/50 focus:bg-white/10 transition-all italic appearance-none cursor-pointer"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat} className="bg-gray-900 text-white">{cat}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-500">
            <ChevronRight size={18} className="rotate-90" />
          </div>
        </div>
      </div>

      {/* Profiles List */}
      <div className="space-y-4">
        <h3 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] italic px-2 mb-6">
          {displayProfiles.length} Profils affichés
        </h3>

        {displayProfiles.map((profile) => (
          <button 
            key={profile.id}
            onClick={() => handleProfileClick(profile)}
            className="w-full glass-card p-6 rounded-[32px] border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-between group hover:border-[#FFB000]/20 transition-all shadow-xl text-left"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#FFB000]/10 rounded-2xl flex items-center justify-center text-[#FFB000] shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
                {profile.image ? (
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="w-full h-full object-cover rounded-full animate-pulse"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Star size={24} fill="currentColor" className="animate-pulse" />
                )}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="text-[17px] font-black uppercase italic tracking-tighter text-white">{profile.name}</h4>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{profile.city}, {profile.country}</span>
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                  <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">{profile.handle}</p>
                </div>
                <p className="text-[9px] text-sky-400 font-black uppercase tracking-widest italic mt-1">{profile.category}</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-600 group-hover:text-[#FFB000] group-hover:translate-x-1 transition-all" />
          </button>
        ))}

        {displayProfiles.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-600">
              <Search size={32} />
            </div>
            <p className="text-gray-500 font-black uppercase italic text-[10px] tracking-widest">Aucun profil ne correspond à votre recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustUsView;
