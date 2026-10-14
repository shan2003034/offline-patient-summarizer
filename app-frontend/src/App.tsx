import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history'>('dashboard');
  const [patientNotes, setPatientNotes] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState('');

  const handleGenerate = () => {
    if (!patientNotes.trim()) return;
    setIsGenerating(true);
    
    
    setTimeout(() => {
      setSummary(''); // real result 
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#1E293B] font-sans flex overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        {activeTab === 'dashboard' ? (
          <Dashboard 
            patientNotes={patientNotes}
            setPatientNotes={setPatientNotes}
            isGenerating={isGenerating}
            summary={summary}
            handleGenerate={handleGenerate}
          />
        ) : (
          <History />
        )}
      </div>
    </div>
  );
}

export default App;