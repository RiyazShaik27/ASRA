import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Eye, Fingerprint, Zap, Lock, Globe, Database, Network } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <section className="text-center mb-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black tracking-widest uppercase mb-8">
              <Network size={14} /> The Intelligence Behind ASRA
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent leading-[0.9]">
              Trio-Fusion <br/> Methodology.
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              ASRA transitions from traditional "Blacklist" security to modern Autonomous Neural Threat Intelligence, analyzing the fundamental DNA of a URL in real-time.
            </p>
          </FadeIn>
        </section>

        {/* --- THE THREE BRAINS SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          
          {/* SEMANTIC BRAIN */}
          <FadeIn delay={0.2}>
            <div className="group h-full p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all shadow-2xl relative overflow-hidden">
              <div className="p-4 bg-blue-600 rounded-2xl w-fit text-white mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                <Cpu size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Semantic <br/> Intelligence</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Powered by <strong>BERT Transformers</strong>, this branch understands the "Intent" behind the words. It detects deceptive language context to identify if a URL is mimicking corporate login portals.
              </p>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu size={200} />
              </div>
            </div>
          </FadeIn>

          {/* VISUAL BRAIN */}
          <FadeIn delay={0.4}>
            <div className="group h-full p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all shadow-2xl relative overflow-hidden">
              <div className="p-4 bg-indigo-600 rounded-2xl w-fit text-white mb-8 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                <Fingerprint size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Visual & <br/> Sequential Logic</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Using <strong>CNN-LSTM</strong> units, ASRA scans for character-level trickery. It identifies Typosquatting and obfuscation symbols like (@ or %) that hide a URL's true destination.
              </p>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Fingerprint size={200} />
              </div>
            </div>
          </FadeIn>

          {/* IDENTITY BRAIN */}
          <FadeIn delay={0.6}>
            <div className="group h-full p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-teal-500/50 transition-all shadow-2xl relative overflow-hidden">
              <div className="p-4 bg-teal-600 rounded-2xl w-fit text-white mb-8 shadow-lg shadow-teal-600/20 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Identity <br/> Verification</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                The final truth layer. By performing an <strong>Identity Audit</strong> via WHOIS, ASRA detects if a domain claiming to be a major brand was registered just hours ago.
              </p>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe size={200} />
              </div>
            </div>
          </FadeIn>

        </div>

        {/* --- KEY INNOVATIONS SECTION --- */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">Neutralizing threats <br/> before they exist.</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 p-3 bg-blue-500/10 rounded-xl text-blue-500 h-fit"><Zap size={24}/></div>
                  <div>
                    <h4 className="font-black text-lg mb-1">Proactive Detection</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Unlike blacklists, ASRA identifies malicious <i>patterns</i>, allowing it to stop "Zero-Day" attacks that have never been seen before.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 p-3 bg-indigo-500/10 rounded-xl text-indigo-500 h-fit"><Lock size={24}/></div>
                  <div>
                    <h4 className="font-black text-lg mb-1">SSL Anti-Bias Shield</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Specially trained to look past the "HTTPS" certificate to find hidden danger symbols, breaking the psychological trust humans place in the green padlock.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 p-3 bg-teal-500/10 rounded-xl text-teal-500 h-fit"><Database size={24}/></div>
                  <div>
                    <h4 className="font-black text-lg mb-1">Forensic Explainability</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Every scan result includes a technical breakdown of the methodology, providing users with actionable intelligence and education.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="relative p-1 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-600 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                <div className="bg-[#020617] rounded-[3.8rem] p-12 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b,transparent)] opacity-50" />
                   <div className="relative z-10 flex flex-col items-center text-center">
                     <Shield size={80} className="text-blue-500 mb-8 animate-pulse" />
                     <h3 className="text-3xl font-black text-white mb-4 italic">Autonomous Defense</h3>
                     <p className="text-slate-400 text-sm font-medium">ASRA is built to be a self-evolving security layer, constantly adapting its weights to catch new obfuscation techniques.</p>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
  );
}