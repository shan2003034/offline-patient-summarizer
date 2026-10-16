import  { useState, useEffect } from 'react';
import { Clock, Calendar, Activity } from 'lucide-react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <header className="bg-white border-b border-[#E2E8F0] px-8 py-4 flex justify-between items-center shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
      <div className="flex items-center gap-3">
        <div className="text-xs font-medium text-[#64748B] flex items-center gap-1.5">
          <Activity className="h-4 w-4 text-indigo-600" />
          <span className="text-[#0F172A] font-bold">Medical AI Dashboard</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-medium bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full text-[#64748B]">
          <Calendar className="h-3.5 w-3.5 text-indigo-500" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold bg-[#0F172A] text-white px-4 py-1.5 rounded-full shadow-md shadow-slate-200 transition-all">
          <Clock className="h-3.5 w-3.5 text-amber-300" />
          <span className="w-[85px] text-center">{formattedTime}</span>
        </div>
      </div>
    </header>
  );
}