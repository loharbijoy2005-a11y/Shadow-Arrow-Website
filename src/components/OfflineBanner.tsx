import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Wifi, Zap, CheckCircle2 } from 'lucide-react';

export const OfflineBanner: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showRestored, setShowRestored] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
      setShowRestored(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowRestored(true);
      const timer = setTimeout(() => setShowRestored(false), 4000);
      return () => clearTimeout(timer);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <AnimatePresence>
      {/* Offline Status Warning Bar */}
      {isOffline && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed top-0 left-0 right-0 z-[99999] bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white px-4 py-2.5 shadow-xl border-b border-amber-400/40 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold font-mono">
            <div className="flex items-center gap-2.5">
              <span className="p-1 rounded-lg bg-black/20 flex items-center justify-center animate-pulse">
                <WifiOff className="w-4 h-4 text-amber-200" />
              </span>
              <span>
                Offline Mode Active • <span className="font-normal text-amber-100 hidden sm:inline">Shadow Arrow is cached &amp; operating seamlessly without internet connection!</span>
              </span>
            </div>

            <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full text-[11px] text-amber-200 shrink-0">
              <Zap className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
              <span>Service Worker Cache v1.0</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Online Restored Toast */}
      {!isOffline && showRestored && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed top-0 left-0 right-0 z-[99999] bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-4 py-2.5 shadow-xl border-b border-emerald-400/40 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold font-mono">
            <div className="flex items-center gap-2.5">
              <span className="p-1 rounded-lg bg-black/20 flex items-center justify-center">
                <Wifi className="w-4 h-4 text-emerald-200 animate-pulse" />
              </span>
              <span>Connection Restored • You are back online!</span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-100 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Live Sync Active</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
