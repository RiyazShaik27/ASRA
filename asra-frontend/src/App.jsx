import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Search, History as HistoryIcon, Sun, Moon, 
  AlertTriangle, CheckCircle, Lightbulb, Calendar, 
  ArrowRight, Cpu, Eye, Fingerprint, Activity, 
  Trash2, Zap, BarChart3, Globe, Info 
} from 'lucide-react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// --- 1. THEME STORAGE ---
const useThemeStore = create(persist((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}), { name: 'asra-theme-persistent' }));

// --- 2. PAGE: METHODOLOGY ---
const AboutPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-20 pb-32 text-center">
    <h1 className="text-6xl font-black tracking-tighter mb-12 italic uppercase">Trio-Fusion Methodology</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-white/10 shadow-2xl">
        <Cpu className="text-blue-500 mb-6 mx-auto" size={48} />
        <h3 className="text-xl font-black mb-3 uppercase">Semantic (BERT)</h3>
        <p className="text-sm text-slate-400 font-medium">Understands word context to detect deceptive intent.</p>
      </div>
      <div className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-white/10 shadow-2xl">
        <Fingerprint className="text-indigo-500 mb-6 mx-auto" size={48} />
        <h3 className="text-xl font-black mb-3 uppercase">Visual (CNN)</h3>
        <p className="text-sm text-slate-400 font-medium">Scans for character tricks like typosquatting and symbols.</p>
      </div>
      <div className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-white/10 shadow-2xl">
        <Globe className="text-teal-500 mb-6 mx-auto" size={48} />
        <h3 className="text-xl font-black mb-3 uppercase">Identity (WHOIS)</h3>
        <p className="text-sm text-slate-400 font-medium">Exposes brand-new domains registered for fraud.</p>
      </div>
    </div>
  </motion.div>
);

// --- 3. PAGE: GLOSSARY ---
const GlossaryPage = () => {
  const terms = [
    { title: "Typosquatting", real: "google.com", fake: "g00gle.com", trick: "Replacing 'o' with zero", icon: <Fingerprint className="text-blue-400" /> },
    { title: "Homograph", real: "apple.com", fake: "аpple.com", trick: "Non-English identical chars", icon: <Eye className="text-purple-400" /> },
    { title: "Obfuscation", real: "amazon.com/pay", fake: "amazon.com@verify.tk", trick: "Symbols hide destination", icon: <Zap className="text-yellow-400" /> }
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20 pb-32">
      <h2 className="text-5xl font-black text-center mb-20 tracking-tighter italic uppercase">Threat Encyclopedia</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {terms.map((t, i) => (
          <div key={i} className="p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-white/10 shadow-xl">
            <div className="mb-6">{t.icon}</div>
            <h3 className="text-2xl font-black mb-4 tracking-tight">{t.title}</h3>
            <div className="text-[11px] font-bold text-emerald-500 bg-emerald-500/5 p-3 rounded-lg mb-2 truncate">SAFE: {t.real}</div>
            <div className="text-[11px] font-bold text-red-500 bg-red-500/5 p-3 rounded-lg mb-4 truncate">FAKE: {t.fake}</div>
            <p className="text-[9px] font-black uppercase text-blue-500 italic flex items-center gap-2"><Info size={12}/> {t.trick}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// --- 4. PAGE: ANALYTICS (LIVE SYNC) ---
function AnalyticsView() {
  const [history, setHistory] = useState([]);

  const refresh = async () => {
    try {
      const r = await fetch('http://localhost:8000/history');
      const d = await r.json();
      setHistory(d || []);
    } catch (e) { console.error("Sync error:", e); }
  };

  const wipe = async () => {
    try {
      await fetch('http://localhost:8000/clear_history');
      setHistory([]);
    } catch (e) { console.error("Clear error:", e); }
  };

  useEffect(() => { refresh(); }, []);

  const stats = useMemo(() => {
    const phish = history.filter(h => h.status === 'PHISHING').length;
    const safe = history.length - phish;
    return [
      { name: 'Phishing', value: phish || 0, color: '#ef4444' }, 
      { name: 'Safe', value: safe || 0, color: '#10b981' }
    ];
  }, [history]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-10 space-y-10">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-4xl font-black italic tracking-tighter uppercase">Audit Analytics</h2>
        <button onClick={wipe} className="text-[10px] font-black text-red-500 flex items-center gap-2 underline uppercase hover:opacity-70 transition-opacity">
          <Trash2 size={14}/> Wipe records
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0a0f1e] p-8 rounded-[3rem] border border-white/5 shadow-2xl flex flex-col items-center">
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={stats} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {stats.map((e, i) => (<Cell key={i} fill={e.color}/>))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-[10px] font-black uppercase text-slate-500 tracking-widest italic">Neural Threat Distribution</p>
        </div>
        <div className="flex flex-col gap-4">
           <div className="bg-red-500/10 p-10 rounded-[2.5rem] border border-red-500/10 flex justify-between items-center"><span className="text-[10px] font-black uppercase text-red-500 tracking-widest">Threats caught</span><span className="text-5xl font-black text-red-500">{stats[0].value}</span></div>
           <div className="bg-emerald-500/10 p-10 rounded-[2.5rem] border border-emerald-500/10 flex justify-between items-center"><span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Safe sessions</span><span className="text-5xl font-black text-emerald-500">{stats[1].value}</span></div>
        </div>
      </div>

      <div className="space-y-3 pb-20">
        {history.map((item, i) => (
          <div key={i} className="p-6 bg-white dark:bg-white/5 border border-white/5 rounded-3xl flex justify-between items-center group hover:border-blue-500/30 transition-all">
            <div className="truncate w-[65%] font-bold text-sm tracking-tight">{item.url}</div>
            <div className={`px-5 py-2 rounded-xl text-[10px] font-black text-white ${item.status === 'PHISHING' ? 'bg-red-500' : 'bg-emerald-500'}`}>{item.status}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// --- 5. PAGE: SCANNER VIEW ---
function ScannerView() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const scan = async (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true); setResult(null);
    try {
      const r = await fetch(`http://127.0.0.1:8000/scan?url=${encodeURIComponent(url)}`);
      const d = await r.json();
      setResult(d);
    } catch (e) { alert("Backend Offline: Run asra_api.py"); }
    finally { setLoading(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-10">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-7xl font-black tracking-tighter italic uppercase mb-4 text-slate-900 dark:text-white">ASRA <span className="text-blue-600">Audit.</span></h2>
        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">Autonomous Neural Forensics Layer</p>
      </div>
      <form onSubmit={scan} className="max-w-4xl mx-auto mb-20 relative group px-4">
        <div className="flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-[3rem] p-3 shadow-2xl border border-slate-200 dark:border-white/10 group-focus-within:border-blue-500/50 transition-all">
          <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Forensic URL analysis..." className="flex-1 px-8 py-5 bg-transparent outline-none font-bold text-lg dark:text-white" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-[2.5rem] font-black uppercase italic tracking-widest active:scale-95 transition-all">
            {loading ? "AUDITING..." : "Scan"}
          </button>
        </div>
      </form>
      {result && !loading && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto p-1 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-700 mx-4">
          <div className="bg-white dark:bg-[#020617] rounded-[3.8rem] p-10 shadow-inner">
             <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-10 border-b border-white/5 gap-6">
                <h3 className={`text-6xl font-black italic tracking-tighter ${result.status === 'PHISHING' ? 'text-red-500' : 'text-emerald-500'}`}>{result.status}</h3>
                <div className="text-right flex flex-col items-center md:items-end">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Risk Index</p>
                   <p className="text-5xl font-mono font-black text-slate-900 dark:text-white">{result.probability}</p>
                </div>
             </div>
             <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-white/5 flex gap-4 items-start">
               <Lightbulb className="text-blue-500 shrink-0" />
               <p className="font-bold italic text-md leading-relaxed text-slate-700 dark:text-slate-300 italic">"{result.tips}"</p>
             </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// --- 6. NAVIGATION COMPONENT ---
function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const loc = useLocation();
  const navItems = [
    { n: 'Scanner', p: '/' },
    { n: 'Methodology', p: '/about' },
    { n: 'Glossary', p: '/glossary' },
    { n: 'Analytics', p: '/history' }
  ];
  return (
    <nav className="flex justify-between items-center mb-16 backdrop-blur-3xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 md:p-5 rounded-[2.5rem] shadow-2xl mx-4">
      <Link to="/" className="p-3 px-8 bg-blue-600 rounded-full text-white font-black italic tracking-tighter text-xl shadow-lg">ASRA</Link>
      <div className="hidden md:flex items-center gap-8 text-[11px] font-black tracking-widest uppercase">
        {navItems.map(item => (
          <Link key={item.p} to={item.p} className={`${loc.pathname === item.p ? 'text-blue-500' : 'text-slate-500'} transition-all hover:text-blue-500`}>
            {item.n}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="text-orange-400 hover:scale-110 transition-transform">
          {theme === 'light' ? <Moon size={22}/> : <Sun size={22}/>}
        </button>
      </div>
    </nav>
  );
}

// --- 7. MAIN APP CONTROLLER ---
export default function App() {
  const { theme } = useThemeStore();
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-700 font-sans ${theme === 'dark' ? 'dark bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
        <div className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-10 bg-[radial-gradient(circle_at_50%_0%,#3b82f6,transparent_50%)]" />
        <div className="max-w-6xl mx-auto p-4 md:p-8 relative z-10">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<ScannerView />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/history" element={<AnalyticsView />} />
            </Routes>
          </AnimatePresence>
          <footer className="mt-40 pb-20 text-center border-t border-white/5 pt-10 px-4">
             <p className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase">Autonomous Security & Risk Analytics • Pro v4.5</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}