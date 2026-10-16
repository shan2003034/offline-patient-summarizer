import { Activity } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8 sm:pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <Activity className="h-6 w-6 text-slate-900" />
              <h2 className="font-extrabold text-xl tracking-tight text-slate-900">PatientFlow</h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              100% Offline AI Clinical Summarizer. Translating unstructured physician notes into structured medical records locally, ensuring maximum patient data privacy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-row gap-12 sm:gap-16 w-full md:w-auto">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Product</h3>
              <a href="#features" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Features</a>
              <a href="#requirements" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Requirements</a>
              <a href="#download" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Download</a>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Legal</h3>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Copyright & Domain */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-xs text-slate-400 font-medium text-center md:text-left gap-4 md:gap-0">
          <p>© {currentYear} PatientFlow. All rights reserved.</p>
          <p>Hosted on <span className="text-slate-600 font-bold">patientflow.tech</span></p>
        </div>
      </div>
    </footer>
  );
}