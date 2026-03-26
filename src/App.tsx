/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  Target, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Clock,
  ChevronRight,
  Mail
} from "lucide-react";
import { useState, FormEvent } from "react";

const CONTENT_IDEAS = [
  {
    id: 1,
    title: "The Spreadsheet Trap",
    description: "Why manual tracking is killing your scale and how to break free.",
    category: "Broken Systems",
    isTop: true,
    hook: "Your business isn't growing because it's trapped in a cell. B12, to be exact.",
    structure: "Problem (Manual errors) → Agitation (Lost time) → Solution (Axon Automation).",
    cta: "Join the Axon Waitlist"
  },
  {
    id: 2,
    title: "Clarity as a Service",
    description: "The ROI of knowing exactly what happens next in every department.",
    category: "Lack of Clarity",
    isTop: true,
    hook: "What if you could see your entire business in one heartbeat?",
    structure: "The Fog of War → The Axon Pulse → Real-time ROI.",
    cta: "Secure your spot"
  },
  {
    id: 3,
    title: "The Ghost in the Machine",
    description: "Why your team is busy but output is stagnant. Solving system friction.",
    category: "Broken Systems",
    isTop: true,
    hook: "You hired 5 people, but output stayed the same. Here's why.",
    structure: "System Friction → The Axon Override → Scalable Flow.",
    cta: "Get early access"
  },
  {
    id: 4,
    title: "Automation vs. Delegation",
    description: "Why you can't hire your way out of a bad system. Build first, hire second.",
    category: "Automation Wins"
  },
  {
    id: 5,
    title: "The 'Single Source of Truth' Myth",
    description: "Why your data is lying to you and how Axon creates a unified reality.",
    category: "Lack of Clarity"
  },
  {
    id: 6,
    title: "Axon: The Central Nervous System",
    description: "Integrating every limb of your business into a single, responsive core.",
    category: "Automation Wins"
  },
  {
    id: 7,
    title: "From Chaos to Clockwork",
    description: "A 30-day system audit to identify and eliminate operational leaks.",
    category: "Broken Systems"
  },
  {
    id: 8,
    title: "The Cost of 'Just One More Tool'",
    description: "Tool fatigue is real. Axon replaces the clutter with a system.",
    category: "Lack of Clarity"
  },
  {
    id: 9,
    title: "Invisible Inefficiency",
    description: "Finding the hidden leaks in your operations before they sink you.",
    category: "Broken Systems"
  },
  {
    id: 10,
    title: "The Waitlist Strategy",
    description: "Why the future of SMB growth is system-first, not marketing-first.",
    category: "Automation Wins"
  }
];

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-[#0a0a0a] font-sans selection:bg-[#0a0a0a] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#0a0a0a]/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight text-xl">AXON</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-60">
          <a href="#systems" className="hover:opacity-100 transition-opacity">Systems</a>
          <a href="#clarity" className="hover:opacity-100 transition-opacity">Clarity</a>
          <a href="#automation" className="hover:opacity-100 transition-opacity">Automation</a>
        </div>
        <button 
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#0a0a0a] text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform active:scale-95"
        >
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section - Split Layout */}
      <main className="pt-24 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-24 flex flex-col justify-center border-r border-[#0a0a0a]/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0a0a0a]/40 mb-6 block">
              System-Level Solutions
            </span>
            <h1 className="text-6xl lg:text-8xl font-semibold leading-[0.9] tracking-tighter mb-8">
              Broken systems <br />
              <span className="text-[#0a0a0a]/30 italic">fixed at the core.</span>
            </h1>
            <p className="text-xl text-[#0a0a0a]/60 max-w-md mb-10 leading-relaxed">
              Axon is the central nervous system for your business. We replace chaos with clarity and manual toil with automation wins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group"
              >
                View Content Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#0a0a0a]/20 px-8 py-4 rounded-full font-medium hover:bg-white transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#0a0a0a] p-8 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Atmospheric background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <AlertCircle />, label: "Broken Systems", value: "Fixed" },
                { icon: <Target />, label: "Lack of Clarity", value: "Resolved" },
                { icon: <Zap />, label: "Automation", value: "Active" },
                { icon: <ShieldCheck />, label: "Security", value: "Verified" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="text-white/40 mb-4">{stat.icon}</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-white text-2xl font-medium">{stat.value}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="text-white w-5 h-5 animate-pulse" />
                <span className="text-white font-medium">Axon Pulse Monitor</span>
              </div>
              <div className="space-y-4">
                {[75, 45, 90].map((w, i) => (
                  <div key={i} className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full bg-white/40"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Content Strategy Section */}
      <section id="strategy" className="py-24 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0a0a0a]/40 mb-4 block">
              The Strategy
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              10 Content Pillars for Axon
            </h2>
            <p className="text-[#0a0a0a]/60 mt-4 max-w-xl">
              Speaking directly to SMB pain points while positioning Axon as the system-level solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTENT_IDEAS.map((idea) => (
              <motion.div
                key={idea.id}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl border transition-all ${
                  idea.isTop 
                    ? "bg-[#0a0a0a] text-white border-[#0a0a0a]" 
                    : "bg-[#f5f5f4] border-[#0a0a0a]/5 text-[#0a0a0a]"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${
                    idea.isTop ? "bg-white/10 text-white/60" : "bg-[#0a0a0a]/5 text-[#0a0a0a]/40"
                  }`}>
                    {idea.category}
                  </span>
                  {idea.isTop && <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />}
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{idea.title}</h3>
                <p className={`text-sm leading-relaxed ${idea.isTop ? "text-white/60" : "text-[#0a0a0a]/60"}`}>
                  {idea.description}
                </p>
                {idea.isTop && (
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    Top Priority <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 3 Breakdown */}
      <section className="py-24 px-6 lg:px-24 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">
              Deep Dive
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              Execution Frameworks
            </h2>
          </div>

          <div className="space-y-12">
            {CONTENT_IDEAS.filter(i => i.isTop).map((idea, index) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className={`lg:col-span-5 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="text-6xl font-serif italic text-white/10 mb-4">0{index + 1}</div>
                  <h3 className="text-3xl font-semibold mb-4">{idea.title}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">The Hook</h4>
                      <p className="text-lg font-medium leading-tight italic">"{idea.hook}"</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">The Structure</h4>
                      <p className="text-white/70 leading-relaxed">{idea.structure}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">The CTA</h4>
                      <div className="flex items-center gap-2 text-white font-bold">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        {idea.cta}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-7 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                    <Layers className="w-12 h-12 text-white/20 mb-4" />
                    <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Visual Representation of System Flow</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-6 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3">
            <Mail className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter mb-6">
            Ready to fix your <br /> systems?
          </h2>
          <p className="text-xl text-[#0a0a0a]/60 mb-10">
            Axon is currently in private beta. Join the waitlist to be the first to know when we open for new SMB partners.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <input 
              type="email" 
              required
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#f5f5f4] border border-[#0a0a0a]/10 rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 transition-all"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-[#0a0a0a] text-white px-6 rounded-full font-medium hover:scale-105 transition-transform active:scale-95"
            >
              Join
            </button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-green-600 font-medium flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                You're on the list!
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-16 pt-16 border-t border-[#0a0a0a]/5 grid grid-cols-3 gap-8">
            {[
              { label: "Waitlist", value: "1,240+" },
              { label: "Systems Fixed", value: "48" },
              { label: "Efficiency Gain", value: "320%" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#0a0a0a]/40 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-24 border-t border-[#0a0a0a]/5 bg-[#f5f5f4]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0a0a0a] rounded-full flex items-center justify-center">
              <Cpu className="text-white w-4 h-4" />
            </div>
            <span className="font-semibold tracking-tight">AXON</span>
          </div>
          <div className="text-[#0a0a0a]/40 text-xs font-medium uppercase tracking-widest">
            © 2026 AXON SYSTEMS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-[#0a0a0a]/40 hover:text-[#0a0a0a] transition-colors">
            <Clock className="w-5 h-5 cursor-pointer" />
            <ShieldCheck className="w-5 h-5 cursor-pointer" />
            <Activity className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
