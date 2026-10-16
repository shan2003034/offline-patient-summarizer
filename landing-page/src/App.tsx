import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Features from './components/Features';
import Requirements from './components/Requirements';
import InstallGuide from './components/InstallGuide';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <HeroSection />
        <Features/>
        <Requirements/>
        <InstallGuide/>
      </main>
      <Footer />
    </div>
  );
}

export default App;