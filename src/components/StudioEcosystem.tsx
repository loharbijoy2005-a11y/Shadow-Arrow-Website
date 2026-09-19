import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { MagneticButton } from './MagneticButton';
import { 
  Layers, 
  Cloud, 
  ShoppingBag, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Server,
  CheckCircle2
} from 'lucide-react';

export const StudioEcosystem: React.FC = () => {
  const pillarCards = [
    {
      id: 'fullstack',
      icon: Layers,
      category: 'ENGINEERING PILLAR',
      title: 'Full-Stack Platforms',
      description: 'Production-grade React 19 and Next.js app engines built with strict TypeScript typing, server-side rendering, and ultra-fast micro-frontend architectures.',
      tags: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
      stat: 'Sub-100ms TTFB'
    },
    {
      id: 'cloud',
      icon: Cloud,
      category: 'INFRASTRUCTURE PILLAR',
      title: 'Cloud Infrastructure',
      description: 'Scalable backend services, Docker container orchestration, Redis multi-region edge caching, and serverless API gateways designed for high concurrency.',
      tags: ['Node.js', 'Python FastAPI', 'Docker', 'Redis', 'Supabase'],
      stat: '99.99% Uptime SLA'
    },
    {
      id: 'commerce',
      icon: ShoppingBag,
      category: 'COMMERCE PILLAR',
      title: 'Digital Commerce Solutions',
      description: 'Headless e-commerce engines with real-time cart state, Razorpay/Stripe automated GST invoicing, dynamic checkout flows, and ERP integrations.',
      tags: ['Headless Cart', 'Razorpay GST', 'Stripe Payments', 'PostgreSQL', 'Webhooks'],
      stat: 'Sub-Second Checkout'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-white border-t border-slate-200/80 relative z-10 overflow-hidden">
      
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Studio Ecosystem & Systems Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Performance Web Architecture & Internal Ecosystems
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Shadow Arrow engineers high-availability systems, cloud infrastructure, and proprietary digital platforms built for maximum scale, sub-second speed, and B2B security.
          </p>
        </motion.div>

        {/* 3 Technical Expertise Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <SpotlightCard className="flex flex-col justify-between h-full bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 transition-all p-7">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-wider font-mono uppercase bg-slate-200/80 text-slate-700 px-2.5 py-1 rounded-md">
                        {card.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 mb-4">
                      {card.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-mono font-medium bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md shadow-2xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80">
                        ⚡ {card.stat}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Internal Ecosystem Showcase: NexusKart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-semibold">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>FLAGSHIP INTERNAL ECOSYSTEM PROJECT</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  NexusKart <span className="text-slate-400 text-2xl sm:text-3xl font-normal">— Powered by Shadow Arrow</span>
                </h3>
                <p className="text-xs font-mono text-emerald-400 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Engineered & Maintained by Shadow Arrow Core Architecture</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                NexusKart is Shadow Arrow’s flagship internal e-commerce engine and digital marketplace platform. Engineered from the ground up using headless microservices, real-time edge inventory sync, and automated GST tax invoicing, NexusKart serves as our benchmark for high-concurrency web systems.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Page Latency</span>
                  <span className="text-base font-extrabold font-mono text-emerald-400">&lt; 85ms</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Architecture</span>
                  <span className="text-base font-extrabold font-mono text-blue-400">Headless</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">GST Billing</span>
                  <span className="text-base font-extrabold font-mono text-indigo-400">Automated</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">State Sync</span>
                  <span className="text-base font-extrabold font-mono text-purple-400">Real-Time</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <span>Request E-Commerce Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
                <a
                  href="#architecture"
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                >
                  View Tech Architecture Specs →
                </a>
              </div>
            </div>

            {/* Right Interactive Mock Card */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Server className="w-4 h-4 text-blue-400" />
                  <span>nexuskart.internal.sys</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  LIVE ECOSYSTEM
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Internal Engine:</span>
                  <span className="text-white font-bold">Shadow Arrow Core v4.2</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Database Layer:</span>
                  <span className="text-blue-400 font-bold">PostgreSQL + Redis Edge</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Payment Gateway:</span>
                  <span className="text-indigo-400 font-bold">Razorpay / Stripe B2B</span>
                </div>
              </div>

              <div className="bg-blue-950/40 border border-blue-800/60 p-3 rounded-xl text-[11px] text-blue-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% Contract & SLA Protected Enterprise Project</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
