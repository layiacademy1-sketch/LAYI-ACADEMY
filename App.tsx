
import React, { useState, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';
import { View, Profile, ProfileStatus, Gender, Introducer } from './types';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import SplashScreen from './components/SplashScreen';
import MemberAccessView from './components/MemberAccessView';
import MemberSpaceView from './components/MemberSpaceView';
import PresentationView from './components/PresentationView';
import IndividualAdminView from './components/IndividualAdminView';
import RegisterIntroducerView from './components/RegisterIntroducerView';
import IntroducerDetailsView from './components/IntroducerDetailsView';
import TrainingLivesView from './components/TrainingLivesView';
import MembershipOfferView from './components/MembershipOfferView';
import AllFormationsView from './components/AllFormationsView';
import TrustUsView from './components/TrustUsView';
import AdminDashboardView from './components/AdminDashboardView';
import PrivateSaleView from './components/PrivateSaleView';
import DiscoverFormationsView from './components/DiscoverFormationsView';
import WebsitePresentationView from './components/WebsitePresentationView';
import CollaborateCreatorsView from './components/CollaborateCreatorsView';

const SESSION_KEY = 'layi_member_session';
const SESSION_DURATION = 60 * 60 * 1000; // 1 heure en millisecondes

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [pendingView, setPendingView] = useState<View | null>(null);
  const [isAppReady, setIsAppReady] = useState(false);
  const [memberUser, setMemberUser] = useState<string | null>(null);
  const [authenticatedAdminName, setAuthenticatedAdminName] = useState<string | null>(null);
  const [selectedIntroducer, setSelectedIntroducer] = useState<Introducer | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  useEffect(() => {
    // Check for existing valid session
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const { name, timestamp } = JSON.parse(saved);
        if (Date.now() - timestamp < SESSION_DURATION) {
          setMemberUser(name);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } catch (e) {
        localStorage.removeItem(SESSION_KEY);
      }
    }

    const timer = setTimeout(() => setIsAppReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroducerSelect = (intro: Introducer) => {
    setSelectedIntroducer(intro);
    setView('introducer_details');
  };

  const handleTrainingLivesClick = () => {
    setView('training_lives');
  };

  const handleLoginRequired = (targetView: View) => {
    setPendingView(targetView);
    setView('member_access');
  };

  const handleMemberValidated = (name: string) => {
    setMemberUser(name);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ name, timestamp: Date.now() }));
    if (pendingView) {
      setView(pendingView);
      setPendingView(null);
    } else {
      setView('member_space');
    }
  };

  const handleLogout = () => {
    setAuthenticatedAdminName(null);
    setMemberUser(null);
    localStorage.removeItem(SESSION_KEY);
    setView('home');
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomeView 
          onRegisterIntroducer={() => setView('register_introducer')}
          onTrainingLivesClick={handleTrainingLivesClick}
          onMemberAccessClick={() => setView('member_access')}
          onIntroducerDetails={handleIntroducerSelect}
          onPresentationClick={() => setView('presentation')}
          onMembershipOfferClick={() => setView('discover_formations')}
          onAllFormationsClick={() => setView('trust_us')}
          onAdminDashboardClick={() => setView('admin_dashboard')}
          onCollaborateClick={() => setView('collaborate_creators')}
          isMember={!!memberUser}
        />;
      case 'discover_formations':
        return <DiscoverFormationsView 
          onBack={() => setView('home')} 
          onSnapchatClick={() => setView('presentation')}
          onWebsiteClick={() => setView('website_presentation')}
        />;
      case 'register_introducer':
        return <RegisterIntroducerView onBack={() => setView('home')} />;
      case 'introducer_details':
        return selectedIntroducer ? 
          <IntroducerDetailsView introducer={selectedIntroducer} onBack={() => setView('home')} /> : 
          null;
      case 'training_lives':
        return <TrainingLivesView 
          onBack={() => setView('home')} 
          isMember={!!memberUser} 
          onLoginRequired={() => handleLoginRequired('training_lives')}
        />;
      case 'member_access':
        return <MemberAccessView onValidated={handleMemberValidated} />;
      case 'member_space':
        return memberUser ? <MemberSpaceView memberName={memberUser} onViewPrivateSale={() => setView('private_sale')} /> : null;
      case 'private_sale':
        return <PrivateSaleView onBack={() => setView('member_space')} />;
      case 'admin':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="glass-card p-10 rounded-[40px] w-full max-sm space-y-6 text-center border-[#FFB000]/20">
               <h2 className="text-2xl font-black uppercase italic text-white tracking-tighter">Accès ADMIN</h2>
               <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-relaxed italic">Espace restreint aux administrateurs LAYI</p>
               <button onClick={() => setView('home')} className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl text-[10px] font-black uppercase">Retour Accueil</button>
             </div>
          </div>
        );
      case 'admin_individual':
        return authenticatedAdminName ? <IndividualAdminView adminName={authenticatedAdminName} onLogout={handleLogout} /> : null;
      case 'presentation':
        return <PresentationView 
          onBack={() => setView('discover_formations')} 
          onWebsiteClick={() => setView('website_presentation')}
          onJoinMember={() => {}} 
        />;
      case 'website_presentation':
        return <WebsitePresentationView 
          onBack={() => setView('discover_formations')} 
        />;
      case 'membership_offer':
        return <MembershipOfferView 
          onBack={() => setView('presentation')} 
          onViewFormations={() => setView('all_formations')}
        />;
      case 'all_formations':
        return <AllFormationsView onBack={() => setView('membership_offer')} />;
      case 'trust_us':
        return <TrustUsView onBack={() => setView('home')} />;
      case 'collaborate_creators':
        return <CollaborateCreatorsView onBack={() => setView('home')} />;
      case 'admin_dashboard':
        return <AdminDashboardView onBack={() => setView('home')} />;
      default:
        return <HomeView 
          onRegisterIntroducer={() => setView('register_introducer')} 
          onTrainingLivesClick={handleTrainingLivesClick} 
          onMemberAccessClick={() => setView('member_access')} 
          onIntroducerDetails={handleIntroducerSelect} 
          onPresentationClick={() => setView('presentation')}
          onMembershipOfferClick={() => setView('discover_formations')}
          onAllFormationsClick={() => setView('trust_us')}
          onAdminDashboardClick={() => setView('admin_dashboard')}
          onCollaborateClick={() => setView('collaborate_creators')}
          isMember={!!memberUser} 
        />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFB000] selection:text-black pb-10">
      <SplashScreen />
      {isAppReady && (
        <>
          <Navbar 
            currentView={view} 
            setView={setView} 
            isAdmin={!!authenticatedAdminName || !!memberUser}
            onLogout={handleLogout}
          />
          <main className="max-w-md mx-auto pt-6 px-4">
            {renderView()}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
