import React from 'react';
import { FileText, Sparkles, Activity, Save, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DashboardProps {
  patientNotes: string;
  setPatientNotes: (notes: string) => void;
  isGenerating: boolean;
  summary: string;
  handleGenerate: () => void;
  handleSave: () => void;
}

export default function Dashboard({ patientNotes, setPatientNotes, isGenerating, summary, handleGenerate, handleSave }: DashboardProps) {
  return (
    <main className="flex-1 p-8 overflow-y-auto max-w-7xl w-full mx-auto flex flex-col gap-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">AI Clinical Summarizer</h2>
        <p className="text-xs text-[#64748B] mt-1">Translate unstructured physician notes into structured, searchable medical records instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch flex-1">
        
        {/* Left Side: Raw Notes */}
        <div className="lg:col-span-2 bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold text-[#0F172A]">Raw Patient Notes</span>
            </div>
          </div>
          <textarea 
            value={patientNotes}
            onChange={(e) => setPatientNotes(e.target.value)}
            className="flex-1 w-full min-h-[400px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-xs leading-relaxed text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0F172A]/5 focus:border-[#0F172A]/30 resize-none placeholder-[#94A3B8]"
            placeholder="Type or paste doctor's hand-written or dictated raw notes here..."
          ></textarea>
          <div className="flex justify-end pt-2">
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !patientNotes.trim()}
              className={`flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-xl transition shadow-lg shadow-slate-200 hover:shadow-slate-300 disabled:opacity-50 disabled:pointer-events-none`}
            >
              {isGenerating ? (
                <>
                  <div className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing notes...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  <span>Generate Summary</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: AI Output */}
        <div className="lg:col-span-3 bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
                <Activity className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold text-[#0F172A]">Structured Medical Summary</span>
            </div>
            {summary && (
    <button 
      onClick={handleSave} 
      className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3 py-1.5 rounded-lg text-xs font-bold transition">
      <Save className="h-3.5 w-3.5" />
      Save Patient Record
    </button>
  )}
          </div>
          
          <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 overflow-y-auto min-h-[400px]">
            {summary ? (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-lg font-bold text-[#0F172A] mb-3 mt-4 first:mt-0" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-base font-bold text-[#0F172A] mb-3 mt-4" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-sm font-bold text-[#0F172A] mb-2 mt-4" {...props} />,
                  p: ({node, ...props}) => <p className="text-xs text-[#334155] leading-relaxed mb-3" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-1 mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-5 space-y-1 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="text-xs text-[#334155] leading-relaxed" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-[#0F172A]" {...props} />,
                }}
              >
                {summary}
              </ReactMarkdown>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-3 my-auto">
                <div className="bg-[#F1F5F9] p-4 rounded-full text-[#94A3B8]">
                  <Clock className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-bold text-[#334155]">No Summary Generated yet</h4>
                <p className="text-xs text-[#64748B] max-w-[280px]">Please enter patient raw notes on the left and click 'Generate' to see the AI structured summary here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}