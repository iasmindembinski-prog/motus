"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.error("Video auto-play failed", e);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/BookIntro.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        muted
        playsInline
        onEnded={() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }}
      />
      
      {/* Overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.h1 
          className="text-7xl md:text-9xl font-heading text-[var(--background)] lowercase tracking-widest drop-shadow-2xl"
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          motus
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[var(--background)]/80 text-sm tracking-widest uppercase text-xs">Descubra</span>
        <motion.div 
          className="w-[1px] h-12 bg-[var(--background)]/50"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}
