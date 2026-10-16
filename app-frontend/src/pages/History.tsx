import React, { useState, useEffect } from 'react';
import { Plus, X, Activity, Printer, Trash2, Eye } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function History() {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedRecord, setSelectedRecord] = useState<any | null>(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/history');
      setRecords(response.data);
    } catch (error) {
      console.error('Failed to fetch records', error);
      toast.error('Failed to load history');
    } finally {
      setLoading(false);
    }
  };

  const handleViewReport = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/history/${id}`);
      setSelectedRecord(response.data);
    } catch (error) {
      console.error('Failed to fetch the record', error);
      toast.error('Failed to load the specific report');
    }
  };

  const handleDelete = async (id: number) => {
  
  if (window.confirm('Are you sure you want to delete this patient record? This action cannot be undone.')) {
    try {
      await axios.delete(`http://localhost:8080/api/history/${id}`);
      toast.success('Record deleted successfully');
      fetchRecords(); 
    } catch (error) {
      console.error('Failed to delete the record', error);
      toast.error('Failed to delete record');
    }
  }
};

  
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto max-w-7xl w-full mx-auto flex flex-col gap-8 animate-fadeIn relative print:p-0">
      
      
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
            font-size: 14px;
            color: black;
          }
          /* මුද්‍රණයේදී අනවශ්‍ය scrollbars සහ බොත්තම් ඉවත් කිරීම */
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="print:hidden">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">Patient Records History</h2>
          <p className="text-xs text-[#64748B] mt-1">Review, filter, and access past generated patient notes and AI clinical outputs.</p>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden mt-8">
          <div className="px-6 py-4 border-b border-[#F1F5F9] flex justify-between items-center bg-[#F8FAFC]">
            <span className="text-sm font-bold text-[#0F172A]">Recent Saved Summaries</span>
            <button className="flex items-center gap-1.5 bg-[#0F172A] hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition">
              <Plus className="h-3.5 w-3.5" />
              Add New Record
            </button>
          </div>
          
          {loading ? (
            <div className="p-8 text-center text-xs text-[#64748B]">
              Loading patient records...
            </div>
          ) : records.length > 0 ? (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E2E8F0] text-[#64748B] font-semibold">
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Record ID</th>
                  <th className="py-4 px-6">Raw Notes Snippet</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {records.map((record) => (
                  <tr key={record.id} className="hover:bg-[#F8FAFC]/50 transition text-[#334155]">
                    <td className="py-4 px-6 font-semibold text-[#64748B]">
                      {new Date(record.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#0F172A]">#PTN-{record.id}</td>
                    <td className="py-4 px-6 truncate max-w-[250px]">
                      {record.rawNotes.substring(0, 60)}...
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-emerald-50 text-emerald-600 font-bold px-2.5 py-1 rounded-full text-[10px]">
                        Saved
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
  <div className="flex items-center justify-end gap-3">
    <button 
      onClick={() => handleViewReport(record.id)}
      className="text-[#0F172A] hover:text-indigo-600 hover:underline font-bold transition"
    >
      <Eye className="h-4 w-4" />
    </button>
    <button 
      onClick={() => handleDelete(record.id)}
      className="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-1.5 rounded-md transition"
      title="Delete Record"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  </div>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center text-xs text-[#64748B]">
              No records found. Saved summaries will appear here.
            </div>
          )}
        </div>
      </div>

      
      {selectedRecord && (
        <div className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn print:static print:bg-white print:p-0">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl print:max-h-none print:shadow-none print:rounded-none">
            
           
            <div className="px-6 py-4 border-b border-[#F1F5F9] flex justify-between items-center bg-[#F8FAFC] rounded-t-2xl no-print">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Activity className="h-4 w-4" />
                </div>
                <span className="text-sm font-bold text-[#0F172A]">Record #PTN-{selectedRecord.id}</span>
              </div>
              <button 
                onClick={() => setSelectedRecord(null)}
                className="p-1.5 text-[#64748B] hover:bg-[#E2E8F0] rounded-lg transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            
            <div id="print-area" className="p-8 overflow-y-auto flex-1 bg-white print:overflow-visible">
              
              
              <div className="hidden print:block border-b-2 border-slate-900 pb-4 mb-6">
                <h1 className="text-xl font-bold text-slate-900">PATIENT CLINICAL SUMMARY REPORT</h1>
                <p className="text-xs text-slate-600 mt-1">Generated by PatientFlow Offline AI</p>
                <div className="mt-3 grid grid-cols-2 text-xs gap-1">
                  <div><strong>Record ID:</strong> #PTN-{selectedRecord.id}</div>
                  <div><strong>Date:</strong> {new Date(selectedRecord.createdAt).toLocaleDateString()}</div>
                </div>
              </div>

              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-lg font-bold text-[#0F172A] mb-3 mt-4 first:mt-0 print:text-black" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-base font-bold text-[#0F172A] mb-3 mt-4 print:text-black" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-sm font-bold text-[#0F172A] mb-2 mt-4 print:text-black print:border-b print:pb-1" {...props} />,
                  p: ({node, ...props}) => <p className="text-xs text-[#334155] leading-relaxed mb-3 print:text-black" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-1 mb-4 print:text-black" {...props} />,
                  li: ({node, ...props}) => <li className="text-xs text-[#334155] leading-relaxed print:text-black" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-[#0F172A] print:text-black" {...props} />,
                }}
              >
                {selectedRecord.generatedSummary}
              </ReactMarkdown>
            </div>
            
            
            <div className="px-6 py-4 border-t border-[#F1F5F9] bg-[#F8FAFC] rounded-b-2xl flex justify-end gap-3 no-print">
              <button 
                onClick={() => setSelectedRecord(null)}
                className="bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F1F5F9] px-4 py-2 rounded-lg text-xs font-bold transition"
              >
                Close View
              </button>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-1.5 bg-[#0F172A] hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold transition shadow-lg shadow-slate-200"
              >
                <Printer className="h-3.5 w-3.5 text-amber-300" />
                Print Report
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}