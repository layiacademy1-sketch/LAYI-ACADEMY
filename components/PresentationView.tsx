
import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, Star, Zap, MessageSquare, Info, ChevronDown, ChevronUp, Search, Loader2, XCircle, Layout, Code, AppWindow, Globe, ChevronRight } from 'lucide-react';

interface PresentationViewProps {
  onBack: () => void;
  onJoinMember: () => void;
  onWebsiteClick: () => void;
}

const PresentationView: React.FC<PresentationViewProps> = ({ onBack, onWebsiteClick }) => {
  const [showProInfo, setShowProInfo] = useState(false);
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [showOptionsInfo, setShowOptionsInfo] = useState(false);
  const [showTrendsInfo, setShowTrendsInfo] = useState(false);
  const [showFollowersInfo, setShowFollowersInfo] = useState(false);
  const [showMonetizationInfo, setShowMonetizationInfo] = useState(false);
  const [showCertifInfo, setShowCertifInfo] = useState(false);
  const [showContentInfo, setShowContentInfo] = useState(false);
  const [showAppInfo, setShowAppInfo] = useState(false);
  const [showLivesInfo, setShowLivesInfo] = useState(false);
  const [showPartnersInfo, setShowPartnersInfo] = useState(false);

  // Security Check State
  const [verifyPseudo, setVerifyPseudo] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'secured' | 'not_secured' | null>(null);
  const [showCompleteDetails, setShowCompleteDetails] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyPseudo.trim()) return;

    setIsVerifying(true);
    setVerificationResult(null);

    setTimeout(() => {
      setIsVerifying(false);
      const trustedHandles = [
        'naslachiente', 'hachemi95', 'saveursyemma', 'le_zeyro', 'laplumedlr', 
        'hachim269', 'mendozatereza25', 'melli-creation', 'sophie-zina', 
        'saida-75', 'camillalougayne', 'sultan-92013', 'feliccia_gul',
        'decowithzaly', 'anybaal', 'ks-avocat', 'api.immo', 'iamcherine2021',
        'moussa.a92', 'layi.fr', 'layi-life', 'sami.officiel', 'zoraslh', 'indaslh', 'lachine75000'
      ];
      const cleanPseudo = verifyPseudo.toLowerCase().replace('@', '');
      
      if (trustedHandles.includes(cleanPseudo)) {
        setVerificationResult('secured');
      } else {
        setVerificationResult('not_secured');
      }
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = () => {
    const message = encodeURIComponent("Bonjour, j’aimerais avoir plus de renseignements afin de pouvoir m’inscrire à la formation.");
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
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Formation Snapchat</h2>
          <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">L'expertise RAPIDES</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Pricing Card */}
        <div className="glass-card p-8 rounded-[48px] border-4 bg-black animate-gold-border relative overflow-hidden text-center">
          <div className="absolute -top-10 -right-10 opacity-10 text-[#FFB000]">
            <Zap size={120} fill="currentColor" />
          </div>
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFB000]/10 border border-[#FFB000]/20 px-4 py-1.5 rounded-full">
              <Sparkles size={14} className="text-[#FFB000]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB000]">OFFRE EXCLUSIVE</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-3">
                <span className="text-gray-500 line-through text-2xl font-black italic">365€</span>
                <span className="text-5xl font-[950] text-white italic tracking-tighter">250€</span>
              </div>
              <p className="text-[#FFB000] text-[11px] font-black uppercase tracking-widest italic">Devenez un expert snapchat</p>
            </div>
          </div>
        </div>

        {/* Security Check Section */}
        <div className="px-2 space-y-4">
          <h3 className="text-[10px] text-white font-black uppercase tracking-[0.3em] italic px-2">Vérifier si ce compte est sécurisé</h3>
          
          <div className="glass-card p-6 rounded-[40px] border-white/10 bg-white/5 space-y-4 shadow-xl">
            <form onSubmit={handleVerify} className="relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#FFB000] transition-colors">
                <Search size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Entrez votre pseudo Snapchat..."
                value={verifyPseudo}
                onChange={(e) => setVerifyPseudo(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-[24px] py-5 pl-14 pr-32 text-[13px] font-bold text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFB000]/50 focus:bg-white/10 transition-all italic"
              />
              <button 
                type="submit"
                disabled={isVerifying || !verifyPseudo.trim()}
                className="absolute right-2 top-2 bottom-2 px-6 bg-[#FFB000] text-black rounded-[18px] font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
              >
                {isVerifying ? <Loader2 size={16} className="animate-spin" /> : 'Vérifier'}
              </button>
            </form>

            {isVerifying && (
              <div className="flex flex-col items-center justify-center py-4 space-y-3 animate-pulse">
                <div className="flex items-center gap-2 text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">
                  <Loader2 size={14} className="animate-spin" />
                  Analyse du profil public...
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFB000] animate-[shimmer_2s_infinite]"></div>
                </div>
                <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest italic text-center">
                  Vérification du badge certifié (Étoile jaune), catégorie, ville et bio...
                </p>
              </div>
            )}

            {verificationResult === 'secured' && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-[24px] flex items-center gap-4 animate-in zoom-in duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-2xl flex items-center justify-center relative">
                  <CheckCircle2 size={24} />
                  <div className="absolute -top-1 -right-1 bg-[#FFB000] text-black rounded-full p-0.5 shadow-lg">
                    <Star size={10} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase italic text-emerald-500 tracking-tight">Compte sécurisé</h4>
                  <p className="text-[9px] text-emerald-500/70 font-black uppercase tracking-widest italic">Profil certifié (Étoile jaune) ou présent dans notre base</p>
                </div>
              </div>
            )}

            {verificationResult === 'not_secured' && (
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-[24px] flex items-center gap-4 animate-in zoom-in duration-300">
                <div className="w-12 h-12 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center">
                  <XCircle size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase italic text-red-500 tracking-tight">Compte non sécurisé</h4>
                  <p className="text-[9px] text-red-500/70 font-black uppercase tracking-widest italic">Merci de faire la demande dès maintenant pour éviter tout blocage ou suppression.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Website Creation Section */}
        <div className="px-2">
          <button 
            onClick={onWebsiteClick}
            className="w-full glass-card p-6 rounded-[32px] border-white/10 bg-white/5 flex items-center justify-between group transition-all hover:border-[#FFB000]/30"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shadow-lg group-hover:rotate-12 transition-transform">
                <Globe size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-white">Création site internet</h3>
                <p className="text-[9px] text-[#FFB000] font-black uppercase tracking-widest italic">Découvrir nos offres</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-600 group-hover:text-[#FFB000] group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Features List */}
        <div className="space-y-6 px-2">
          <div className="relative p-8 rounded-[40px] border border-[#FFB000]/30 bg-gradient-to-b from-[#FFB000]/5 to-transparent overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB000]/50 to-transparent"></div>
            
            <h3 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] italic mb-4 text-center">Inclus dans la formation</h3>
            
            <div className="mb-8 space-y-1 text-center">
              <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">Durée de la formation : 2 h à distance</p>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest italic">Possibilité de présentiel : sur demande</p>
            </div>
            
            <div className="grid gap-3">
              {[
                "Passage du compte Snapchat en compte professionnel",
                "Sécurisation du compte Snapchat pour éviter toute perte en cas de signalement",
                "Personnalisation du profil public",
                "Explication des nouvelles options",
                "Méthodes pour apparaître dans les tendances",
                "Méthodes pour obtenir plus d’abonnés",
                "Méthodes pour atteindre la monétisation",
                "Méthode pour demander la certification (si éligible) ⭐",
                "Méthodes pour créer du bon contenu",
                "Accès à l’application pour les membres Layi*",
                "Accès aux différents lives de formation pour rester informé des nouveautés Snapchat (membres Layi)*",
                "Accès à nos avantages partenaires pour les membres Layi (réductions d’hôtel, location de voiture, etc.)"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                  <div className="w-5 h-5 bg-[#FFB000]/10 rounded-full flex items-center justify-center text-[#FFB000] shrink-0 mt-0.5">
                    <CheckCircle2 size={12} />
                  </div>
                  
                  {feature === "Passage du compte Snapchat en compte professionnel" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowProInfo(!showProInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showProInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showProInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showProInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Cela vous permettra d’avoir plus de fonctionnalités, ainsi qu’une catégorie adaptée à votre compte (société, entrepreneur, influenceur, créateur, personnalité publique).
                            <br /><br />
                            Vous aurez également accès à l’algorithme afin d’augmenter vos chances d’être mis en tendance et, par la suite, de pouvoir accéder à la monétisation.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Sécurisation du compte Snapchat pour éviter toute perte en cas de signalement" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowSecurityInfo(!showSecurityInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showSecurityInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showSecurityInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showSecurityInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Une fois votre compte Snapchat passé en professionnel, vous avez la possibilité de le sécuriser au maximum afin d’éviter qu’il ne saute ou qu’il soit bloqué en cas de signalement.
                            <br /><br />
                            Une formation est d’ailleurs spécialement dédiée à cette sécurisation afin de vous accompagner étape par étape.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Personnalisation du profil public" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowProfileInfo(!showProfileInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showProfileInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showProfileInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showProfileInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Une fois que votre compte est passé en professionnel et sécurisé, nous allons personnaliser votre profil public.
                            <br /><br />
                            En effet, la personnalisation du profil est primordiale pour être bien référencé et maximiser vos chances d’apparaître en tendance. C’est d’ailleurs l’un des premiers éléments pris en compte par l’algorithme de Snapchat pour assurer un bon référencement.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Explication des nouvelles options" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowOptionsInfo(!showOptionsInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showOptionsInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showOptionsInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showOptionsInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Cette partie est très importante, car une fois votre compte passé en professionnel, vous bénéficierez de nouvelles fonctionnalités.
                            <br /><br />
                            Par exemple, vous aurez la possibilité de gérer votre compte Snapchat avec d’autres comptes Snapchat, de donner un accès administrateur à d’autres utilisateurs afin qu’ils puissent publier sur votre story, et ainsi mieux organiser la gestion de votre profil.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Méthodes pour apparaître dans les tendances" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowTrendsInfo(!showTrendsInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showTrendsInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showTrendsInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showTrendsInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Cette partie vous permet de comprendre toutes les méthodes ainsi que le fonctionnement de l’algorithme qui vous aide à apparaître dans les tendances.
                            <br /><br />
                            Vous apprendrez les stratégies essentielles pour optimiser votre visibilité et maximiser vos chances d’être mis en avant.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Méthodes pour obtenir plus d’abonnés" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowFollowersInfo(!showFollowersInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showFollowersInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showFollowersInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showFollowersInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Cette partie vous permet, grâce à des techniques simples et efficaces, d’obtenir plus d’abonnés facilement et sur le long terme.
                            <br /><br />
                            Vous découvrirez des stratégies durables pour développer votre audience de manière naturelle et continue.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Méthodes pour atteindre la monétisation" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowMonetizationInfo(!showMonetizationInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showMonetizationInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showMonetizationInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showMonetizationInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Aujourd’hui, contrairement à ce que l’on peut penser, il existe différentes méthodes pour être monétisé grâce à Snapchat.
                            <br /><br />
                            Dans notre formation, nous vous présenterons toutes les méthodes qui vous permettront d’accéder à la monétisation et de générer des revenus avec votre compte.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature.includes("Méthode pour demander la certification") ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          Méthode pour demander la certification (si éligible) <span className="text-yellow-400 animate-pulse inline-block ml-1">★</span>
                        </p>
                        <button 
                          onClick={() => setShowCertifInfo(!showCertifInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showCertifInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showCertifInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showCertifInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Aujourd’hui, de nombreux comptes peuvent être certifiés. Dans notre formation, nous vérifierons ensemble si votre compte est éligible à la certification.
                            <br /><br />
                            Si ce n’est pas le cas, nous vous indiquerons précisément les éléments à améliorer ou à compléter afin de maximiser vos chances d’être certifié un jour.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Méthodes pour créer du bon contenu" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowContentInfo(!showContentInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showContentInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showContentInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showContentInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Aujourd’hui, beaucoup de personnes pensent créer du bon contenu, mais malheureusement, ce n’est pas toujours le cas. Parfois, nous n’avons pas le bon téléphone, ou au contraire, nous possédons un excellent appareil sans savoir l’utiliser correctement.
                            <br /><br />
                            Il arrive même que l’on ne sache pas comment produire du contenu de qualité sans tout créer soi-même.
                            <br /><br />
                            Avec la révolution d’Internet et de l’intelligence artificielle, il est désormais possible d’utiliser de nouveaux outils pour créer du contenu performant et attractif.
                            <br /><br />
                            Dans notre formation, nous vous apprendrons à maîtriser ces méthodes afin de produire un contenu de qualité, efficacement et durablement.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Accès à l’application pour les membres Layi*" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowAppInfo(!showAppInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showAppInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showAppInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showAppInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Après la formation, nous vous enregistrerons sur notre application afin de vous permettre d’être visible et repéré par les autres membres que nous avons formés.
                            <br /><br />
                            Cela vous permettra également d’être référencé en tant que compte Snapchat de confiance et de gagner en crédibilité auprès de la communauté.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Accès aux différents lives de formation pour rester informé des nouveautés Snapchat (membres Layi)*" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowLivesInfo(!showLivesInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showLivesInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showLivesInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showLivesInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Chez Layi, nous ne vous abandonnons pas après la formation. Nous continuons de vous accompagner à travers différents lives et formations, afin de rester à jour sur l’algorithme de Snapchat, de découvrir les nouvelles méthodes et de maximiser vos résultats.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : feature === "Accès à nos avantages partenaires pour les membres Layi (réductions d’hôtel, location de voiture, etc.)" ? (
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                          {feature}
                        </p>
                        <button 
                          onClick={() => setShowPartnersInfo(!showPartnersInfo)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[8px] font-black text-[#FFB000] uppercase tracking-widest italic hover:bg-white/10 transition-all border border-white/5"
                        >
                          {showPartnersInfo ? <ChevronUp size={10} /> : <Info size={10} />}
                          {showPartnersInfo ? "Fermer" : "Plus d'info"}
                        </button>
                      </div>
                      
                      {showPartnersInfo && (
                        <div className="bg-black/40 border border-[#FFB000]/20 p-5 rounded-[24px] animate-in slide-in-from-top-2 duration-500 shadow-2xl">
                          <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed">
                            <span className="text-[#FFB000] font-black uppercase tracking-widest block mb-2">Description :</span>
                            Chez Layi, nous formons une véritable famille. Nous vous recommandons nos partenaires de confiance pour les hôtels, la location de voiture, la mode, et bien plus.
                            <br /><br />
                            La confiance est notre priorité, et c’est pourquoi nous avons l’occasion de vous proposer uniquement des partenaires fiables et recommandés.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tight leading-relaxed italic">
                      {feature.includes('⭐') ? (
                        <>
                          Méthode pour demander la certification (si éligible) <span className="text-yellow-400 animate-pulse inline-block ml-1">★</span>
                        </>
                      ) : feature}
                    </p>
                  )}
                </div>
              ))}
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

export default PresentationView;
