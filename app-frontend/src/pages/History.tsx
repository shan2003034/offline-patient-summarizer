import React from 'react';
import { Plus } from 'lucide-react';

export default function History() {
  // place a empty arry for a real data
  const records: any[] = []; 

  return (
    <main className="flex-1 p-8 overflow-y-auto max-w-7xl w-full mx-auto flex flex-col gap-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">Patient Records History</h2>
        <p className="text-xs text-[#64748B] mt-1">Review, filter, and access past generated patient notes and AI clinical outputs.</p>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#F1F5F9] flex justify-between items-center bg-[#F8FAFC]">
          <span className="text-sm font-bold text-[#0F172A]">Recent Saved Summaries</span>
          <button className="flex items-center gap-1.5 bg-[#0F172A] hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition">
            <Plus className="h-3.5 w-3.5" />
            Add New Record
          </button>
        </div>
        
        {records.length > 0 ? (
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[#E2E8F0] text-[#64748B] font-semibold">
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Patient Name</th>
                <th className="py-4 px-6">Age / Sex</th>
                <th className="py-4 px-6">Diagnosis</th>
                <th className="py-4 px-6 text-center">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]">
              {/* data */}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-xs text-[#64748B]">
            No records found. Saved summaries will appear here.
          </div>
        )}
      </div>
    </main>
  );
}