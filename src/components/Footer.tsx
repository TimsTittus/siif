"use client";

import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 relative pt-24 pb-12 overflow-hidden">
      {/* "START SOMETHING" Watermark */}
      <div className="absolute top-0 left-0 w-full text-center select-none pointer-events-none py-10">
        <span className="text-[12vw] font-black text-zinc-100 tracking-tighter opacity-100 uppercase leading-none">
          START <span className="text-primary/10">SOMETHING</span>
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="flex flex-col space-y-6">
            <span className="text-3xl font-bold tracking-tighter text-zinc-900">
              SIIF<span className="text-primary">.</span>
            </span>
            <p className="text-zinc-500 max-w-xs leading-relaxed">
              Leading the way in innovation and entrepreneurship. Empowering the 
              next generation of founders to change the world.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:border-primary hover:text-primary transition-all">
                <Globe size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:border-primary hover:text-primary transition-all">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 font-bold mb-6 uppercase tracking-wider text-sm">Programs</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Pre-Incubation</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Incubation</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Acceleration</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Virtual Incubation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-zinc-900 font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Schemes</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-zinc-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-900 font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-zinc-600">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>SIIF, SSCBS, Rohini Sector 17, New Delhi, 110089</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>info@siifssbs.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+91 999 999 9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} SIIF. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
