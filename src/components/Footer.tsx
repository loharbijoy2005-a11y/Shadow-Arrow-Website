import React from 'react';
import { ShieldCheck, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight font-mono leading-none">
                SHADOW<span className="text-blue-400">ARROW</span>
              </span>
              <span className="text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase mt-1 font-mono">
                WEB ENGINEERING & SAAS SOLUTIONS
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Elite high-performance web engineering, SaaS, and systems development firm legally anchored to founder <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-semibold hover:text-blue-400 hover:underline">Bijoy Lohar</a>.
            </p>

            {/* GST Tax Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GST Registered • Verified Tax Invoices Provided</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a></li>
              <li><a href="#architecture" className="hover:text-blue-400 transition-colors">Architecture</a></li>
              <li><a href="#ecosystem" className="hover:text-blue-400 transition-colors">Ecosystem</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Registered Address */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Corporate Desk & Address
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:support@shadowarrow.in" className="hover:text-white transition-colors">
                  support@shadowarrow.in
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Bishnupur, Bankura, West Bengal, 722157, India</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">Verified B2B Entity SLA</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
              >
                <span>Schedule Architecture Review</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Shadow Arrow. All Rights Reserved. • Lead Developer: <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">Bijoy Lohar</a>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <button onClick={onOpenPrivacy} className="hover:text-slate-200 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-slate-200 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-slate-200 transition-colors cursor-pointer">
              GST Tax Compliance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
