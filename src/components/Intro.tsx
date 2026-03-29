"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Intro = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className="font-semibold mb-8 mx-auto flex items-center justify-center overflow-visible"
            style={{
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontSize: '36px',
              lineHeight: '98.155%',
              letterSpacing: '-1.44px',
              color: '#848484',
              width: '207px',
              height: '23px',
              fontStyle: 'normal',
              textTransform: 'none'
            }}
          >
            What is SIIF?
          </h2>
          <h3
            className="font-semibold mx-auto"
            style={{
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontSize: 'clamp(1.5rem, 4vw, 53px)',
              lineHeight: '98.155%',
              letterSpacing: '-2.12px',
              color: '#656565',
              textAlign: 'center',
              width: '998px',
              height: 'auto', // Let it overflow or wrap naturally
              minHeight: '180px',
              maxWidth: '100%'
            }}
          >
            SJCET's structured home for early-stage <br />
            <span style={{ color: '#F12837' }}>founders mentorship</span>,
            <span style={{ color: '#F12837' }}> prototyping</span>,
            <span style={{ color: '#F12837' }}> funding</span>, <br />
            and a community that pushes back.
          </h3>
        </div>

        <div className="relative h-[600px] w-full mt-10">
          {/* Left Side: Green Cube Platform */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-[-5%] top-[20%] w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          >
            <Image
              src="/assets/Rectangle(3).png"
              alt="Platform"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Center: Main SIIF Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-20"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Label on the node is "SIIF" as per image */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <span className="text-6xl md:text-8xl font-black text-zinc-400/80 rotate-[-15deg]">SIIF</span>
              </div>
              <Image
                src="/assets/Rectangle(1).png"
                alt="SIIF Node"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Side Upper: Stacked Platform */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute right-[-10%] top-[30%] w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          >
            <Image
              src="/assets/Rectangle(2).png"
              alt="Blue Stack"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Far Right: Additional Cube Platform */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute right-[5%] bottom-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] z-10"
          >
            <Image
              src="/assets/Mask group(3).png"
              alt="Translucent Cube"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Far Left: Floating Bit */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-[10%] bottom-[5%] w-[100px] h-[100px] z-20"
          >
            <Image
              src="/assets/Mask group(1).png"
              alt="Small Node"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="text-center mt-32">
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs max-w-sm mx-auto leading-relaxed opacity-70">
            If you have a problem worth solving, <br />
            we have everything else.
          </p>
        </div>
      </div>
    </section>
  );
};
