import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Printer, Database } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
    title: "100% Offline & Private",
    description: "Zero cloud connectivity required. All patient data stays strictly on your local machine, ensuring complete data privacy and compliance.",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-100"
  },
  {
    icon: <Cpu className="h-6 w-6 text-indigo-600" />,
    title: "Powered by Local AI",
    description: "Utilizes Ollama to run advanced LLMs directly on your hardware. Experience lightning-fast clinical summarization without the internet.",
    bg: "bg-indigo-50",
    borderColor: "border-indigo-100"
  },
  {
    icon: <Printer className="h-6 w-6 text-amber-600" />,
    title: "Seamless Export & Print",
    description: "Generate structured, print-ready clinical reports with a single click. Clean, professional layouts designed specifically for medical records.",
    bg: "bg-amber-50",
    borderColor: "border-amber-100"
  },
  {
    icon: <Database className="h-6 w-6 text-rose-600" />,
    title: "Local SQLite Database",
    description: "Built-in lightweight database to securely store, retrieve, and manage past patient summaries instantly within the application.",
    bg: "bg-rose-50",
    borderColor: "border-rose-100"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
       
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Enterprise-grade Clinical AI, <br /> Built for Local Privacy
            </h2>
            <p className="text-slate-600">
              PatientFlow combines the power of advanced language models with the uncompromising security of an offline architecture.
            </p>
          </motion.div>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white border ${feature.borderColor} rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}