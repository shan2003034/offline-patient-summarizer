import { useState } from 'react';
import { Activity, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 p-2 rounded-xl text-white">
            <Activity className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <h1 className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">PatientFlow</h1>
          </div>
          <span className="hidden sm:inline-block ml-2 text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2.5 py-1 rounded-full border border-emerald-100">
            Offline AI
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#requirements" className="hover:text-slate-900 transition-colors">System Requirements</a>
          <a href="#install" className="hover:text-slate-900 transition-colors">How to Install</a>
        </div>

        {/* Download CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href="/offline-patient-summarizer.exe"
            download="offline-patient-summarizer.exe"
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-slate-200 hover:shadow-slate-300 hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline-block">Download .exe</span>
            <span className="sm:hidden">Download</span>
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl absolute w-full left-0 animate-fadeIn">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold text-slate-600">
            <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-slate-900 transition-colors block py-2 border-b border-slate-100">Features</a>
            <a href="#requirements" onClick={() => setIsOpen(false)} className="hover:text-slate-900 transition-colors block py-2 border-b border-slate-100">System Requirements</a>
            <a href="#install" onClick={() => setIsOpen(false)} className="hover:text-slate-900 transition-colors block py-2">How to Install</a>
          </div>
        </div>
      )}
    </nav>
  );
}