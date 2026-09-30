import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Search, ChevronDown, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Services' | 'Delivery' | 'Compliance' | 'Support';
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of web applications and software systems does Shadow Arrow build?',
    answer: 'Shadow Arrow specializes in high-performance web engineering. We build custom full-stack web applications, enterprise SaaS platforms, headless e-commerce engines, real-time analytics dashboards, and scalable API microservices using React 19, Next.js 14, Node.js, Python FastAPI, and PostgreSQL / Supabase.',
    category: 'Services'
  },
  {
    id: 'faq-2',
    question: 'How are project timelines and production milestones managed?',
    answer: 'Every project follows a structured 4-phase milestone process: 1) Requirement Scoping & Technical Architecture Blueprint, 2) Core Frontend & Backend Engineering, 3) Performance Audit & Security Testing, and 4) Production Deployment & Handover. Standard production sprints take 2 to 4 weeks based on project scope.',
    category: 'Delivery'
  },
  {
    id: 'faq-3',
    question: 'Will my business receive full ownership of the source code and IP?',
    answer: 'Yes, 100%. Upon completion of final delivery and milestone sign-off, all source code repositories, intellectual property rights, database schemas, and deployment assets are fully transferred to your business with zero lock-in.',
    category: 'Compliance'
  },
  {
    id: 'faq-4',
    question: 'How are GST invoices and B2B contract agreements handled?',
    answer: 'Shadow Arrow is a registered corporate GST B2B entity (GSTIN: 19BVKPL6301H1ZH). We issue formal, legally binding project contracts and tax invoices with complete GST details, enabling seamless input tax credit (ITC) claims for Indian enterprises.',
    category: 'Compliance'
  },
  {
    id: 'faq-5',
    question: 'What post-launch technical support and maintenance is included?',
    answer: 'All projects include 30 to 90 days of complimentary post-launch technical support. This covers bug remediation, server infrastructure monitoring, performance optimization, and minor UI adjustments. Ongoing monthly maintenance retainers are also available.',
    category: 'Support'
  },
  {
    id: 'faq-6',
    question: 'How do we track development progress and communicate during the build?',
    answer: 'You receive direct access to founder Bijoy Lohar and our development team via dedicated WhatsApp / Slack channels and email. We provide weekly staging environment previews and GitHub commit tracking so you have complete visibility over build progress.',
    category: 'Delivery'
  }
];

export const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = ['All', 'Services', 'Delivery', 'Compliance', 'Support'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleContactClick = () => {
    onClose();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden my-6 max-h-[90vh] flex flex-col text-white"
        >
          {/* Modal Header */}
          <div className="bg-slate-950 p-6 sm:p-8 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight font-mono text-white">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Shadow Arrow Engineering Knowledge Base • Technical &amp; Delivery Specifications
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close FAQ Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="p-6 bg-slate-900/90 border-b border-slate-800 space-y-4 shrink-0">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions, services, GST invoices, timelines, source code..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 font-mono"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all duration-200 border ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable FAQ Accordions List */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <p className="text-slate-400 text-sm">No questions found matching "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="text-xs text-blue-400 font-mono underline hover:text-blue-300"
                >
                  Reset search filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpenFaq = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        {faq.question}
                      </span>
                      <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform duration-300 ${isOpenFaq ? 'rotate-180 bg-blue-600/30 text-blue-400' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpenFaq && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 font-normal">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Need a custom architecture estimate? Schedule a direct engineering review.</span>
            </div>

            <button
              onClick={handleContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
