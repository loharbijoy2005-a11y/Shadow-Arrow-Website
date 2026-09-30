import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Technical' | 'Compliance' | 'Process';
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services does Shadow Arrow provide?',
    answer: 'Shadow Arrow is an elite web engineering studio led by Bijoy Lohar. We specialize in custom full-stack web applications, Next.js 14 and React 19 platforms, headless e-commerce engines, sub-second speed optimization (TTFB < 100ms), and GST-compliant B2B systems.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Who leads web engineering at Shadow Arrow?',
    answer: 'Every project at Shadow Arrow is architected, code-reviewed, and deployed under the direct leadership of founder Bijoy Lohar. We eliminate middleman agency bloat, giving you direct 1-on-1 engineering access and uncompromised software quality.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'Does Shadow Arrow provide tax-compliant GST invoicing?',
    answer: 'Yes! Shadow Arrow is a verified GST-registered enterprise entity (GSTIN: 19BVKPL6301H1ZH). We provide official tax invoices for all Indian B2B clients, enabling seamless input tax credit (ITC) claims.',
    category: 'Compliance'
  },
  {
    id: 'faq-4',
    question: 'What is the typical turnaround time for custom web applications?',
    answer: 'Our standard production sprint ranges from 2 to 4 weeks depending on application scope, custom API requirements, and system integrations. We follow a 4-milestone roadmap (Blueprint, Core Engine, Performance Audit, Live Launch).',
    category: 'Process'
  },
  {
    id: 'faq-5',
    question: 'How does Shadow Arrow guarantee sub-second performance & SEO rank?',
    answer: 'We build with zero-bloat modern stacks (Next.js 14 App Router, React 19, Tailwind, Vite, FastAPI), enforcing strict Core Web Vitals targets: LCP < 1.2s, FID < 50ms, CLS = 0. All pages feature full server/static pre-rendering, rich JSON-LD schema markup, and geo-targeted meta descriptors for #1 Google ranking.',
    category: 'Technical'
  },
  {
    id: 'faq-6',
    question: 'Do you offer ongoing post-launch SLA support & maintenance?',
    answer: 'Yes. Every project includes 30 to 90 days of complimentary post-launch technical support, bug fixing, and continuous performance monitoring. Retainer plans are available for enterprise scaling.',
    category: 'Process'
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Technical', 'Compliance', 'Process'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Search &amp; Engineering Knowledge Base</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-mono">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-400">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Everything you need to know about our web engineering standards, founder-led delivery, GST compliance, and speed optimization.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700/80 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <SpotlightCard
                key={faq.id}
                className="bg-slate-800/50 border border-slate-700/70 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-200"
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-700/50 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600/20 text-blue-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 font-normal">
                        <p>{faq.answer}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                          <Sparkles className="w-3 h-3 text-blue-400" />
                          <span>Verified Shadow Arrow Standard • Founder Approved</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-800/80 to-slate-900 border border-blue-500/30 text-center space-y-4 shadow-2xl">
          <h3 className="text-xl font-bold text-white">Have a specific custom requirement?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Get in direct contact with founder <strong className="text-white">Bijoy Lohar</strong> for custom architecture scoping, system quotes, or tech consultation.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold font-mono px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Schedule Engineering Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
