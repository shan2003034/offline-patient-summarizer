import { motion } from 'framer-motion';
import { Download, Terminal, PlayCircle, Settings } from 'lucide-react';

export default function InstallGuide() {
  const steps = [
    {
      step: "01",
      icon: <Terminal className="h-6 w-6 text-slate-700" />,
      title: "Install & Configure Ollama",
      description: (
        <div className="space-y-3 mt-2 text-sm text-slate-600 leading-relaxed flex-1">
          <p>PatientFlow relies on Ollama for offline AI processing. First, download and install it from <a href="https://ollama.com/download" target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">ollama.com</a>.</p>
          <p>After installation, open your <strong>Command Prompt (CMD)</strong> and run the following command to download the required AI model:</p>
          <div className="bg-slate-900 text-emerald-400 p-3 rounded-lg font-mono text-xs shadow-inner">
            ollama pull llama3
          </div>
          <p className="text-xs text-slate-500 bg-slate-100 p-2 rounded border border-slate-200">
            <strong>Note:</strong> If you face connection issues, set the System Environment Variable <code className="bg-slate-200 px-1 rounded text-slate-800 font-mono">OLLAMA_HOST</code> to <code className="bg-slate-200 px-1 rounded text-slate-800 font-mono">127.0.0.1:11434</code>.
          </p>
        </div>
      ),
    },
    {
      step: "02",
      icon: <Download className="h-6 w-6 text-slate-700" />,
      title: "Download PatientFlow",
      description: (
        <div className="space-y-3 mt-2 text-sm text-slate-600 leading-relaxed flex-1">
          <p>Download our standalone executable file. There is no complex installation wizard required for the application.</p>
          <p>Simply save the <strong className="text-slate-800">offline-patient-summarizer.exe</strong> file to a dedicated folder on your computer (for example, Documents/PatientFlow).</p>
          <div className="pt-2">
            <a href="/offline-patient-summarizer.exe" download className="inline-flex items-center text-sm font-bold bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors">
              Download .exe File →
            </a>
          </div>
        </div>
      )
    },
    {
      step: "03",
      icon: <Settings className="h-6 w-6 text-slate-700" />,
      title: "Run the Application",
      description: (
        <div className="space-y-3 mt-2 text-sm text-slate-600 leading-relaxed flex-1">
          <p>Make sure the Ollama application is actively running in your system tray.</p>
          <p>Next, double-click the downloaded <strong className="text-slate-800">offline-patient-summarizer.exe</strong> file.</p>
          <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">
            <strong>Important:</strong> A background terminal/console window will open. This starts the local Spring Boot server and initializes your secure SQLite database. <strong>Do not close this window</strong> while using the app.
          </p>
        </div>
      )
    },
    {
      step: "04",
      icon: <PlayCircle className="h-6 w-6 text-slate-700" />,
      title: "Start Summarizing",
      description: (
        <div className="space-y-3 mt-2 text-sm text-slate-600 leading-relaxed flex-1">
          <p>Open your preferred web browser (Chrome, Edge, Safari) and navigate to the local server address:</p>
          <div className="bg-slate-100 border border-slate-200 text-slate-800 p-3 rounded-lg font-mono text-sm font-bold text-center shadow-sm">
            http://localhost:8080
          </div>
          <p><strong>How to use:</strong> Paste your unstructured physician notes into the input area, click <strong>Summarize</strong>, and instantly get structured clinical data. You can view history, delete records, and print the reports directly from the dashboard!</p>
        </div>
      )
    }
  ];

  return (
    <section id="install" className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Complete Installation Guide</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Follow these step-by-step instructions to properly setup the local AI environment and start using PatientFlow on your machine.</p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white w-12 h-12 rounded-full shadow-sm flex items-center justify-center border border-slate-100">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-black text-slate-200">{item.step}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}