import React from 'react';
import { Activity, ClipboardList, History, Database } from 'lucide-react';

interface SidebarProps {
  activeTab: 'dashboard' | 'history';
  setActiveTab: (tab: 'dashboard' | 'history') => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-[#E2E8F0] p-6 flex flex-col justify-between shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#0F172A] p-2.5 rounded-xl text-white">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-[#0F172A]">PatientFlow</h1>
            <span className="text-[10px] bg-emerald-50 text-emerald-600 font-semibold px-2 py-0.5 rounded-full">Offline AI</span>
          </div>
        </div>
        
        <nav className="flex flex-col gap-1.5">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'dashboard' ? 'bg-[#F1F5F9] text-[#0F172A]' : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'}`}
          >
            <ClipboardList className="h-4 w-4" />
            <span>Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'history' ? 'bg-[#F1F5F9] text-[#0F172A]' : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'}`}
          >
            <History className="h-4 w-4" />
            <span>Patient History</span>
          </button>
        </nav>
      </div>
      
      <div className="flex flex-col gap-2 pt-6 border-t border-[#F1F5F9]">
         <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg">
            <Database className="h-3.5 w-3.5" />
            <span className="text-xs font-bold">SQLite Connected</span>
         </div>
      </div>
    </aside>
  );
}