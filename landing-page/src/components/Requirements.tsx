import { motion } from 'framer-motion';
import { Monitor, HardDrive, MemoryStick } from 'lucide-react';

export default function Requirements() {
  return (
    <section id="requirements" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">System Requirements</h2>
          <p className="text-slate-600">Ensure your machine meets these specifications to run the local AI models smoothly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <Monitor className="h-8 w-8 text-indigo-500 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Operating System</h3>
            <p className="text-sm text-slate-600">Windows 10 or Windows 11 (64-bit)</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center border-t-4 border-t-emerald-500">
            <MemoryStick className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">RAM (Memory)</h3>
            <p className="text-sm text-slate-600">8GB Minimum <br/><span className="font-semibold text-emerald-600">16GB Recommended for AI</span></p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <HardDrive className="h-8 w-8 text-amber-500 mx-auto mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Storage</h3>
            <p className="text-sm text-slate-600">500MB for App + <br/>~4GB for Ollama AI Models</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}