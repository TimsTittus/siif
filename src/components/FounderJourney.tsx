"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const stages = [
  {
    title: "The Vision",
    description: "Every great venture starts with a bold idea. We help you refine that vision into a viable business model.",
    image: "/assets/Rectangle(3).png", // Archway
    tag: "Stage 01"
  },
  {
    title: "Product Building",
    description: "Transform your concepts into real products. Access our technical resources and prototyping labs.",
    image: "/assets/Rectangle(2).png", // Platform
    tag: "Stage 02"
  },
  {
    title: "Market Launch",
    description: "Scale your solution to the world. We provide the mentorship and market access to ensure a successful launch.",
    image: "/assets/Rectangle(1).png", // SIIF Node
    tag: "Stage 03"
  }
];

export const FounderJourney = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 uppercase tracking-tighter">
            Founder <span className="text-primary italic font-serif">Journey</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl text-lg">
            Success is a deliberate path. We've mapped out the key stages to help you navigate 
            the complexities of building a startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}
            >
              <Card className="flex-1 bg-white border-zinc-200 overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="relative h-64 w-full bg-zinc-100/50 flex items-center justify-center p-8 overflow-hidden">
                  {/* Subtle movement on hover */}
                  <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
                    <Image 
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {stage.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
