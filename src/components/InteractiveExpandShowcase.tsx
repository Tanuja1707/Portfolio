import { useEffect, useState, useRef } from 'react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ScreenshotItem {
  src: string;
  label: string;
}

export default function InteractiveExpandShowcase({
  screenshots,
  projectName,
  categoryLabel,
}: {
  screenshots: ScreenshotItem[];
  projectName: string;
  categoryLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cooldown, setCooldown] = useState(0); // Cooldown in ms

  // Refs to avoid re-creating the interval when state updates
  const isHoveredRef = useRef(isHovered);
  const cooldownRef = useRef(cooldown);
  const isLightboxOpenRef = useRef(isLightboxOpen);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    cooldownRef.current = cooldown;
  }, [cooldown]);

  useEffect(() => {
    isLightboxOpenRef.current = isLightboxOpen;
  }, [isLightboxOpen]);

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

  // Slideshow auto-play and cooldown loop - runs exactly once on mount
  useEffect(() => {
    const timer = setInterval(() => {
      if (isLightboxOpenRef.current) return;

      if (cooldownRef.current > 0) {
        setCooldown((prev) => {
          const next = Math.max(0, prev - 100);
          cooldownRef.current = next;
          return next;
        });
        setProgress(0);
      } else if (!isHoveredRef.current) {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((idx) => (idx + 1) % screenshots.length);
            return 0;
          }
          return prev + 2; // 2% increments every 100ms = 5000ms total
        });
      }
    }, 100);

    return () => clearInterval(timer);
  }, [screenshots.length]);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    const newCooldown = 8000;
    setCooldown(newCooldown); // 8 seconds cooldown on manual interaction
    cooldownRef.current = newCooldown;
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[680px] mx-auto select-none">
      {/* Small label & progress indicator above the preview */}
      <div className="flex flex-col gap-2 px-1">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-accent block">
              Currently Viewing
            </span>
            <h4 className="text-[14px] font-bold text-text-primary">
              {categoryLabel} &rarr; <span className="text-text-accent">{screenshots[activeIndex].label}</span>
            </h4>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-text-muted select-none">
            {cooldown > 0 ? "Manual Lock (8s)" : isHovered ? "Paused" : "Autoplay"}
          </span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-[3px] bg-white/5 dark:bg-black/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-color-muted-lavender via-color-mauve-pink to-color-soft-pink transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-full aspect-[16/10] rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10 dark:border-white/5 shadow-premium cursor-pointer transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1.5 flex items-center justify-center bg-transparent group"
      >
        {/* AnimatePresence crossfade & scale/slide transition */}
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={screenshots[activeIndex].src}
            alt={`${projectName} - ${screenshots[activeIndex].label}`}
            initial={{ opacity: 0, scale: 0.96, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.04, x: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full object-contain rounded-[28px] md:rounded-[32px] select-none pointer-events-none"
          />
        </AnimatePresence>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-[28px] md:rounded-[32px]">
          <span className="px-4 py-2 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md text-caption-text font-bold text-white border border-white/20 shadow-md">
            Click to Expand
          </span>
        </div>

        {/* Dark & light responsive glassmorphic overlay borders */}
        <div className="absolute inset-0 rounded-[28px] md:rounded-[32px] ring-1 ring-white/15 dark:ring-white/5 pointer-events-none" />
      </motion.div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-5 gap-2 md:gap-3 w-full">
        {screenshots.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 bg-slate-950/10 ${
                isActive 
                  ? 'ring-2 ring-color-mauve-pink shadow-premium scale-[1.04] opacity-100' 
                  : 'hover:scale-[1.03] opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={item.src}
                alt={`Thumbnail ${item.label}`}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              {/* Glow overlay for active thumbnail */}
              {isActive && (
                <div className="absolute inset-0 ring-1 ring-inset ring-color-mauve-pink/40 bg-color-muted-lavender/5 mix-blend-overlay" />
              )}
            </button>
          );
        })}
      </div>

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
                  {categoryLabel} &rarr; {screenshots[activeIndex].label}
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
                src={screenshots[activeIndex].src}
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
