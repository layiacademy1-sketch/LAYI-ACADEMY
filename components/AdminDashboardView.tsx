
import React, { useState } from 'react';
import { ArrowLeft, Users, UserPlus, Calendar, Phone, MessageSquare, MapPin, CreditCard, FileText, Plus, Trash2, Tag, ChevronRight, Sparkles, Globe } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  phone: string;
  address: string;
  amountPaid: string;
  serviceType: string;
  description: string;
  tarifs?: string[];
  snapchat?: string;
  email?: string;
  status: 'to_contact' | 'registered';
  assignedTo: 'djo' | 'hajar' | 'rabab';
}

interface Event {
  id: string;
  date: string;
  title: string;
  description?: string;
}

interface AdminDashboardViewProps {
  onBack: () => void;
}

const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'contact' | 'info'>('contact');
  const [activeSubTab, setActiveSubTab] = useState<'djo' | 'hajar' | 'rabab'>('djo');
  const [activeInfoTab, setActiveInfoTab] = useState<'snapchat' | 'site' | 'admin' | 'formation_site'>('snapchat');
  
  // Mock data
  const [clients, setClients] = useState<Client[]>([
    {
      id: 'bw-transport',
      name: 'BW TRANSPORT',
      phone: '+86 198 6407 3740',
      address: 'Guangzhou, Chine',
      email: 'Non communiqué',
      snapchat: 'lachine75000',
      amountPaid: '0',
      serviceType: 'Formation Snapchat',
      description: 'Client basé en Chine, spécialisé dans le transport de marchandises vers la France.',
      status: 'registered',
      assignedTo: 'rabab'
    },
    {
      id: 'dalila',
      name: 'DALILA',
      phone: '07 68 57 99 93',
      address: 'Non communiqué',
      email: 'Non communiqué',
      snapchat: 'dzdal',
      amountPaid: 'Payé',
      serviceType: 'Création de site internet',
      description: 'Elle a déjà payé et souhaite maintenant réaliser son site internet. Le paiement a été effectué par une autre personne pour elle. La cliente a uniquement payé pour un site vitrine, donc il faut parler seulement du site vitrine. Si elle souhaite ajouter une partie vente (e-commerce), prends les informations nécessaires et dis-lui que tu vas en parler avec le designer. Pense aussi à t’excuser pour le retard : tu devais l’appeler, mais malheureusement, suite à un décès, tu n’as pas pu le faire.',
      status: 'registered',
      assignedTo: 'hajar'
    },
    {
      id: 'peperos',
      name: 'PEPEROS',
      phone: 'Non communiqué',
      address: 'Non communiqué',
      email: 'Non communiqué',
      snapchat: 'ppepeross_off',
      amountPaid: '250 €',
      serviceType: 'Formation Snapchat',
      description: 'Il va nous tenir informé pour début mars, à contacté le 10 mars si pas de retour.',
      status: 'to_contact',
      assignedTo: 'djo'
    },
    {
      id: 'mat',
      name: 'MAT',
      phone: '06 79 88 06 25',
      address: 'Non communiqué',
      email: 'Non communiqué',
      snapchat: 'Non communiqué',
      amountPaid: '0',
      serviceType: 'Formation Snapchat',
      description: 'Il a indiqué qu’il allait nous contacter début mars. Si nous n’avons pas de nouvelles, il faudra le recontacter vers le 5 mars.',
      status: 'to_contact',
      assignedTo: 'djo'
    },
    {
      id: 'lavage',
      name: 'LAVAGE',
      phone: 'Non communiqué',
      address: 'Non communiqué',
      email: 'Non communiqué',
      snapchat: 'lavage782',
      amountPaid: '0',
      serviceType: 'Formation Snapchat',
      description: 'Le client est actuellement à l’étranger et revient le 12 mars. Il faudra donc le contacter le 15 mars concernant la formation Snapchat.',
      status: 'to_contact',
      assignedTo: 'djo'
    },
    {
      id: 'derka',
      name: 'DERKA',
      phone: 'Non communiqué',
      address: 'Non communiqué',
      email: 'Non communiqué',
      snapchat: 'derkafuego',
      amountPaid: '150 €',
      serviceType: 'Formation Snapchat',
      description: 'À contacter vers le 10 mars. Un tarif préférentiel lui a été accordé : 150 € au lieu de 250 € pour la formation.',
      status: 'to_contact',
      assignedTo: 'djo'
    },
    {
      id: 'lelbinav',
      name: 'LELBINAV',
      phone: '07 64 44 85 76',
      address: 'Non communiqué',
      email: 'Non communiqué',
      snapchat: 'Non communiqué',
      amountPaid: '160 €',
      serviceType: 'Création de site internet',
      description: 'Il doit nous contacter vers le 4 mars. Sans nouvelles, il faudra le contacter le 5 mars afin qu’il puisse effectuer un paiement de 60 €. Il souhaite également la création d’un Google Business, pour un tarif total de 160 €.',
      status: 'to_contact',
      assignedTo: 'djo'
    }
  ]);

  const [events, setEvents] = useState<Event[]>([]);

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0612') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 animate-in fade-in duration-700">
        <div className="w-full max-w-sm glass-card p-8 rounded-[40px] border-[#FFB000]/20 space-y-6 text-center">
          <div className="w-20 h-20 bg-[#FFB000] rounded-3xl flex items-center justify-center text-black mx-auto shadow-2xl shadow-[#FFB000]/20">
            <Users size={40} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">Accès Admin</h2>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest italic">Veuillez entrer le mot de passe</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Mot de passe..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-center text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FFB000]/50 transition-all"
            />
            {error && <p className="text-red-500 text-[10px] font-black uppercase italic">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-[#FFB000] text-black py-4 rounded-2xl font-black uppercase text-[12px] tracking-widest hover:scale-105 active:scale-95 transition-all"
            >
              Se connecter
            </button>
          </form>
          
          <button onClick={onBack} className="text-[10px] text-gray-500 font-black uppercase tracking-widest hover:text-white transition-colors">
            Retour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <button onClick={onBack} className="p-3 bg-white/5 rounded-2xl border border-white/10 text-white">
          <ArrowLeft size={20} />
        </button>
        <div className="text-right">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">Formation Snapchat</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-[24px] border border-white/10 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setActiveTab('contact')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'contact' ? 'bg-[#FFB000] text-black' : 'text-gray-400 hover:text-white'}`}
        >
          <Users size={14} /> Clients
        </button>
        <button 
          onClick={() => setActiveTab('info')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'info' ? 'bg-[#FFB000] text-black' : 'text-gray-400 hover:text-white'}`}
        >
          <Sparkles size={14} /> Infos utiles
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'contact' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Sub-tabs */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/5">
              {(['djo', 'hajar', 'rabab'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeSubTab === tab ? 'bg-white/10 text-[#FFB000] border border-[#FFB000]/20' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] italic">Clients {activeSubTab}</h3>
                <span className="bg-[#FFB000]/10 text-[#FFB000] px-3 py-1 rounded-full text-[10px] font-black italic">
                  {clients.filter(c => c.assignedTo === activeSubTab).length} En attente
                </span>
              </div>

              {clients.filter(c => c.assignedTo === activeSubTab).length > 0 ? (
                <div className="space-y-3">
                  {clients.filter(c => c.assignedTo === activeSubTab).map(client => (
                    <div 
                      key={client.id} 
                      onClick={() => setSelectedClient(selectedClient?.id === client.id ? null : client)}
                      className="glass-card p-5 rounded-[24px] border-white/10 bg-white/5 space-y-4 group cursor-pointer transition-all hover:border-[#FFB000]/30"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#FFB000]/10 rounded-2xl flex items-center justify-center text-[#FFB000] border border-[#FFB000]/20">
                            <Users size={24} />
                          </div>
                          <div>
                            <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">{client.name}</h4>
                            <p className="text-[10px] text-[#FFB000] font-black uppercase tracking-widest italic">{client.serviceType}</p>
                          </div>
                        </div>
                        <ChevronRight size={18} className={`text-gray-600 transition-transform ${selectedClient?.id === client.id ? 'rotate-90' : ''}`} />
                      </div>

                      {selectedClient?.id === client.id && (
                        <div className="pt-4 border-t border-white/10 space-y-4 animate-in slide-in-from-top-2 duration-300">
                          <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-3">
                              <h5 className="text-[9px] text-gray-500 font-black uppercase tracking-[0.2em] italic">Informations</h5>
                              <div className="space-y-2">
                                <div className="flex items-center gap-3 text-white">
                                  <Users size={14} className="text-[#FFB000]" />
                                  <span className="text-[11px] font-bold italic">Nom : {client.name}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white">
                                  <FileText size={14} className="text-[#FFB000]" />
                                  <span className="text-[11px] font-bold italic">Mail : {client.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white group/phone cursor-pointer" onClick={(e) => {
                                  e.stopPropagation();
                                  let cleanPhone = client.phone.replace(/\s/g, '');
                                  if (cleanPhone.startsWith('0')) {
                                    cleanPhone = '+33' + cleanPhone.substring(1);
                                  }
                                  window.open(`https://wa.me/${cleanPhone.replace('+', '')}`, '_blank');
                                }}>
                                  <Phone size={14} className="text-[#FFB000]" />
                                  <span className="text-[11px] font-bold italic group-hover/phone:text-[#FFB000] transition-colors">Téléphone : {client.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white">
                                  <MessageSquare size={14} className="text-[#FFB000]" />
                                  <span className="text-[11px] font-bold italic">Snapchat : {client.snapchat}</span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h5 className="text-[9px] text-gray-500 font-black uppercase tracking-[0.2em] italic">Informations client</h5>
                              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-[10px] text-gray-300 font-medium italic leading-relaxed">
                                  {client.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-3 bg-white/5 rounded-[32px] border border-dashed border-white/10">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-600">
                    <Users size={24} />
                  </div>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Aucun client en attente</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'info' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Info Sub-tabs */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
              {[
                { id: 'snapchat', label: 'Snapchat' },
                { id: 'site', label: 'Création de site' },
                { id: 'admin', label: 'Gestion administrative' },
                { id: 'formation_site', label: 'Formation Site Internet' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveInfoTab(tab.id as any)}
                  className={`py-2.5 px-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeInfoTab === tab.id ? 'bg-white/10 text-[#FFB000] border border-[#FFB000]/20' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeInfoTab === 'site' && (
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-[32px] border-white/10 bg-white/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                        <Globe size={20} />
                      </div>
                      <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">Offre 1 — Site vitrine : 199,99 €</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[10px] text-gray-400 font-bold italic">
                        <div className="w-1 h-1 bg-[#FFB000] rounded-full"></div>
                        Toutes les modifications passent par nous.
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-400 font-bold italic">
                        <div className="w-1 h-1 bg-[#FFB000] rounded-full"></div>
                        Le site est développé sous codage avec IA.
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-400 font-bold italic">
                        <div className="w-1 h-1 bg-[#FFB000] rounded-full"></div>
                        Chaque modification supplémentaire se fait uniquement sur devis.
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card p-6 rounded-[32px] border-white/10 bg-white/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                        <CreditCard size={20} />
                      </div>
                      <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">Offre 2 — Site vitrine avec accès : 250 €</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[10px] text-gray-400 font-bold italic">
                        <div className="w-1 h-1 bg-[#FFB000] rounded-full"></div>
                        Vous avez accès aux identifiants pour modifier le site vous-même si vous le souhaitez.
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-400 font-bold italic">
                        <div className="w-1 h-1 bg-[#FFB000] rounded-full"></div>
                        Le site sera réalisé sur une plateforme internationale de création de sites, comme WordPress.
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeInfoTab === 'snapchat' && (
                <div className="glass-card p-8 rounded-[40px] border-white/10 bg-white/5 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#FFFC00]/10 rounded-3xl flex items-center justify-center text-[#FFFC00] mx-auto">
                    <MessageSquare size={32} fill="currentColor" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black uppercase italic tracking-tighter text-white">Formation Snapchat</h4>
                    <p className="text-2xl font-black text-[#FFB000] italic">250 €</p>
                  </div>
                </div>
              )}

              {activeInfoTab === 'formation_site' && (
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-[32px] border-[#FFB000]/20 bg-gradient-to-br from-[#FFB000]/5 to-transparent space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">Formation Site Internet</h4>
                      <span className="text-[#FFB000] font-black italic">365 €</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[10px] text-gray-300 font-bold italic">
                        <Sparkles size={12} className="text-[#FFB000]" />
                        Choix de l’hébergeur du site
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-300 font-bold italic">
                        <Sparkles size={12} className="text-[#FFB000]" />
                        Choix du nom de domaine
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-300 font-bold italic">
                        <Sparkles size={12} className="text-[#FFB000]" />
                        Choix du design
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-300 font-bold italic">
                        <Sparkles size={12} className="text-[#FFB000]" />
                        Méthode de référencement Google
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-300 font-bold italic">
                        <Sparkles size={12} className="text-[#FFB000]" />
                        Formation création rapide de site avec IA
                      </li>
                      <li className="flex items-center gap-2 text-[10px] text-gray-300 font-bold italic">
                        <Sparkles size={12} className="text-[#FFB000]" />
                        Création d’applications web
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeInfoTab === 'admin' && (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-3 bg-white/5 rounded-[32px] border border-dashed border-white/10">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-600">
                    <FileText size={24} />
                  </div>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Contenu à venir</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboardView;
