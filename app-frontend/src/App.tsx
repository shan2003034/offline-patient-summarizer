import  { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history'>('dashboard');
  const [patientNotes, setPatientNotes] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState('');

  const handleGenerate = async () => {
    if (!patientNotes.trim()) {
      toast.error('Please enter patient notes first!');
      return;
    }
    
    setIsGenerating(true);
    setSummary(''); // delete old report

    try {
      
      const response = await axios.post('http://localhost:8080/api/summarize', {
        notes: patientNotes
      });

      setSummary(response.data.summary);
      toast.success('Summary generated successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to connect to AI server. Is Backend running?');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
  try {
    await axios.post('http://localhost:8080/api/save', {
      rawNotes: patientNotes,
      summary: summary
    });
    toast.success('Patient record saved successfully!');
    setPatientNotes('');
    setSummary('');
    setActiveTab('history'); 
  } catch (error) {
    console.error(error);
    toast.error('Failed to save record to database.');
  }
};

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#1E293B] font-sans flex overflow-hidden">
      {/* Toast message place */}
      <Toaster position="top-right" toastOptions={{ className: 'text-sm font-medium' }} />
      
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
            handleSave={handleSave}
          />
        ) : (
          <History />
        )}
      </div>
    </div>
  );
}

export default App;