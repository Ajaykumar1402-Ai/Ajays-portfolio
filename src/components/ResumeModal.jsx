import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeUrl = `${import.meta.env.BASE_URL}Ajaykumar_K_Resume.pdf`;

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Actions Bar */}
            <div className="px-5 py-4 sm:px-6 sm:py-4 bg-[#181818] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              
              {/* Title & Status */}
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-pulse" />
                <div>
                  <h3 className="text-white font-medium text-sm sm:text-base tracking-tight">
                    Ajaykumar K — Resume
                  </h3>
                  <p className="text-xs text-neutral-400 hidden sm:block">
                    AI & ML Enthusiast · PDF Document
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Download Button */}
                <a
                  href={resumeUrl}
                  download="Ajaykumar_K_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2a2a] text-white text-xs sm:text-sm font-medium hover:bg-[#e02020] transition-colors shadow-lg shadow-red-900/30"
                  title="Download Resume PDF"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </a>

                {/* Open in New Tab Button */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/20 text-white/90 text-xs sm:text-sm hover:bg-white/10 transition-colors"
                  title="Open in new window"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open Tab</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full bg-[#222] relative overflow-hidden flex flex-col items-center justify-center">
              <iframe
                src={`${resumeUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Ajaykumar K Resume PDF Viewer"
              />

              {/* Mobile Fallback Overlay (displayed below if iframe fails to load on touch mobile) */}
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
