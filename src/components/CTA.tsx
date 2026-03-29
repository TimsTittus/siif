"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent skew-y-3 translate-y-20 opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="bg-zinc-50 border border-zinc-200 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative shadow-sm">
          {/* Subtle logo watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-zinc-200/40 select-none pointer-events-none uppercase tracking-tighter">
            SIIF
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-zinc-900 mb-8 uppercase tracking-tighter"
          >
            Ready to <span className="text-primary italic">Build</span>?
          </motion.h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the most vibrant startup ecosystem. We provide more than just space 
            — we provide the foundation for your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-lg font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
              Apply for Incubation
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-300 text-zinc-900 hover:bg-zinc-100 rounded-full px-12 py-8 text-lg font-bold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
