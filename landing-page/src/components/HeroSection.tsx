import { motion } from 'framer-motion';
import { Download, ShieldCheck, Cpu, Zap } from 'lucide-react';
import heroImage from '../assets/hero-image.webp';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 min-h-screen flex items-center">
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-bold text-slate-700">PatientFlow v1.0.0 is Live</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Offline AI Clinical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">Summarizer</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Translate unstructured physician notes into structured, printable medical records instantly. Powered by local LLMs (Ollama) to ensure maximum patient data privacy with zero cloud connectivity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <a 
  href="/offline-patient-summarizer.exe"
  download="offline-patient-summarizer.exe"
  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
>
  <Download className="h-5 w-5" />
  <span>Download for Windows (.exe)</span>
</a>
            <a 
              href="#install"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:bg-slate-50"
            >
              How to Install
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="h-4 w-4 text-indigo-500" />
              <span>Local Processing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>Instant Generation</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
         
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-lg flex items-center justify-center"
          >
            
            <img 
              src={heroImage} 
              alt="PatientFlow AI" 
              className="w-full h-auto object-cover mix-blend-multiply [mask-image:radial-gradient(circle_at_center,black_40%,transparent_75%)]"
            />
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
          >
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">SQLite Connected</p>
              <p className="text-[10px] text-slate-500">Local Database</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}