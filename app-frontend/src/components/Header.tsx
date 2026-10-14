import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-[#E2E8F0] px-8 py-4 flex justify-between items-center shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
      <div className="flex items-center gap-3">
        <div className="text-xs font-medium text-[#64748B] flex items-center gap-1.5">
          <span>Patient Details</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#0F172A] font-semibold">New Record</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-xs font-medium bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full text-[#64748B]">
          <Calendar className="h-3.5 w-3.5" />
          <span>Today</span>
        </div>
        <div className="flex items-center gap-3 border-l border-[#E2E8F0] pl-6">
          <div className="bg-[#0F172A] text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md shadow-slate-200">
            DR
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0F172A]">Dr. Prasanna</h4>
            <p className="text-[10px] text-[#64748B]">General Physician</p>
          </div>
        </div>
      </div>
    </header>
  );
}