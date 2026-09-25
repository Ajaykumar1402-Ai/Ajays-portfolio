import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeUrl = '/Ajaykumar_K_Resume.pdf';

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-8">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Content Box - Fullscreen on mobile, rounded dialog on tablet/desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative bg-[#0f0f0f] border-0 sm:border border-white/10 rounded-none sm:rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-5xl h-[100dvh] sm:h-[90vh] flex flex-col overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Actions Bar */}
            <div className="px-3.5 py-3 sm:px-6 sm:py-4 bg-[#161616] border-b border-white/10 flex items-center justify-between gap-2 sm:gap-4 shrink-0">
              
              {/* Title & Status */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-pulse shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-white font-medium text-xs sm:text-base tracking-tight truncate">
                    Ajaykumar K — Resume
                  </h3>
                  <p className="text-[11px] text-neutral-400 hidden sm:block">
                    AI & ML Enthusiast · PDF Document
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                {/* Open in New Tab Button - visible on both mobile and desktop */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-white/20 text-white/90 text-[11px] sm:text-xs md:text-sm font-medium hover:bg-white/10 active:bg-white/20 transition-colors"
                  title="Open PDF in new tab"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="hidden sm:inline">Open Tab</span>
                  <span className="sm:hidden">Open</span>
                </a>

                {/* Download Button */}
                <a
                  href={resumeUrl}
                  download="Ajaykumar_K_Resume.pdf"
                  className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#ff2a2a] text-white text-[11px] sm:text-xs md:text-sm font-medium hover:bg-[#e02020] active:scale-95 transition-all shadow-lg shadow-red-900/30"
                  title="Download Resume PDF"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Helper Banner - Shown on small screens for seamless navigation */}
            <div className="sm:hidden px-3.5 py-2 bg-neutral-900/90 border-b border-white/5 flex items-center justify-between text-[11px] text-neutral-300 shrink-0">
              <span className="flex items-center gap-1.5 text-neutral-400 truncate mr-2">
                <svg className="w-3.5 h-3.5 text-[#ff2a2a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>For full multi-page zoom:</span>
              </span>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff2a2a] font-medium hover:underline flex items-center gap-0.5 shrink-0"
              >
                Open Fullscreen
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full bg-[#1c1c1c] relative overflow-hidden flex flex-col items-center justify-center">
              <iframe
                src={`${resumeUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Ajaykumar K Resume PDF Viewer"
              />

              {/* Mobile Fallback Overlay */}
              <noscript>
                <div className="p-8 text-center text-white">
                  <p className="mb-4">Your browser does not support inline PDFs.</p>
                  <a
                    href={resumeUrl}
                    download="Ajaykumar_K_Resume.pdf"
                    className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white"
                  >
                    Download Resume PDF
                  </a>
                </div>
              </noscript>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
