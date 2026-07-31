import { useEffect, useState } from 'react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SingleImageShowcase({
  src,
  alt,
  projectName,
  categoryLabel,
}: {
  src: string;
  alt: string;
  projectName: string;
  categoryLabel: string;
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  // ESC key listener to close lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-[680px] mx-auto select-none">
      {/* Main Preview with subtle floating motion */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-full aspect-[16/10] rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10 dark:border-white/5 shadow-premium cursor-pointer transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1.5 flex items-center justify-center bg-transparent group"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain rounded-[28px] md:rounded-[32px] select-none pointer-events-none"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-[28px] md:rounded-[32px]">
          <span className="px-4 py-2 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md text-caption-text font-bold text-white border border-white/20 shadow-md">
            Click to Expand
          </span>
        </div>

        {/* Dark & light responsive glassmorphic overlay borders */}
        <div className="absolute inset-0 rounded-[28px] md:rounded-[32px] ring-1 ring-white/15 dark:ring-white/5 pointer-events-none" />
      </motion.div>

      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => {
              setIsLightboxOpen(false);
              setZoomed(false);
            }}
          >
            {/* Modal Controls Header */}
            <div 
              className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-accent">
                  Project Inspection
                </span>
                <span className="text-[14px] md:text-[16px] font-bold text-white">
                  {categoryLabel} &rarr; {alt}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setZoomed(!zoomed)}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white cursor-pointer shadow-md flex items-center justify-center"
                  title={zoomed ? "Zoom Out" : "Zoom In"}
                >
                  {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>
                <button
                  onClick={() => {
                    setIsLightboxOpen(false);
                    setZoomed(false);
                  }}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white cursor-pointer shadow-md flex items-center justify-center"
                  title="Close (ESC)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Image container */}
            <div 
              className={`relative max-w-full max-h-[85vh] flex items-center justify-center transition-transform duration-300 ${
                zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setZoomed(!zoomed);
              }}
            >
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ 
                  scale: zoomed ? 1.35 : 1, 
                  opacity: 1 
                }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                src={src}
                alt={`${projectName} Lightbox`}
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-2xl border border-white/10 bg-slate-950/40 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
