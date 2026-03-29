"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Code, 
  Briefcase 
} from "lucide-react";

const services = [
  { icon: Rocket, title: "Incubation", description: "Early stage support" },
  { icon: Lightbulb, title: "Ideation", description: "Refining your concept" },
  { icon: Users, title: "Mentorship", description: "Expert guidance" },
  { icon: TrendingUp, title: "Scaling", description: "Growth strategies" },
  { icon: Briefcase, title: "Funding", description: "Capital access" },
  { icon: Code, title: "Tech Support", description: "Infrastructure" },
];

export const ServicesHub = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 uppercase tracking-tighter">
            What We <span className="text-primary italic">Offer</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg md:text-xl">
            Comprehensive support systems designed to accelerate your startup's growth.
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* SVG for Curved Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(196,30,58,0.1)" />
                <stop offset="50%" stopColor="rgba(196,30,58,0.3)" />
                <stop offset="100%" stopColor="rgba(196,30,58,0.1)" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="300" r="150" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="10 10" className="opacity-50" />
            <circle cx="400" cy="300" r="250" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="10 10" className="opacity-30" />
          </svg>

          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative z-20 w-48 h-48 md:w-64 md:h-64"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <Image 
              src="/assets/Frame 11.png"
              alt="Central Hub"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <span className="text-xl md:text-2xl font-black text-zinc-900">SIIF</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">ECOSYSTEM</span>
            </div>
          </motion.div>

          {/* Satellite Nodes */}
          {services.map((service, index) => {
            const angle = (index / services.length) * 2 * Math.PI;
            const radius = 260; // Distance from center
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="absolute z-30"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="group relative flex flex-col items-center">
                   {/* Tooltip/Description on Hover */}
                  <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white p-3 rounded-xl text-xs font-medium whitespace-nowrap z-40 shadow-xl pointer-events-none">
                    {service.description}
                  </div>

                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-zinc-100 rounded-[1.5rem] flex items-center justify-center p-4 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500">
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <span className="mt-4 text-sm md:text-base font-bold text-zinc-500 group-hover:text-zinc-900 transition-colors uppercase tracking-tight">
                    {service.title}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Connectors (Simplified for implementation) */}
          {/* For a high-fidelity look, I'd use SVG paths connecting centers, but for now circles suffice for the "hub" feel */}
        </div>
      </div>
    </section>
  );
};
