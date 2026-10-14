import React from 'react';
import { Activity, Search, ClipboardList, History, Settings, LogOut } from 'lucide-react';

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
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#94A3B8]" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#0F172A]/10 placeholder-[#94A3B8]"
          />
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
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-rose-500 hover:bg-rose-50/50 transition">
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}