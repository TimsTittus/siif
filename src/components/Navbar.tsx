"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Incubation", href: "#incubation" },
  { name: "Programs", href: "#programs" },
  { name: "Startups", href: "#startups" },
  { name: "Schemes", href: "#schemes" },
  { name: "Gallery", href: "#gallery" },
  { name: "Careers", href: "#careers" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="w-full h-auto py-4 flex items-center justify-between px-5 md:px-12 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-black tracking-tighter text-black" style={{ fontFamily: 'var(--font-hanken-grotesk)' }}>
            SIIF<span className="text-primary">.</span>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex ml-auto max-w-none">
          <NavigationMenuList className="gap-8">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent hover:text-primary focus:bg-transparent px-2 w-auto justify-start"
                    )}
                    style={{
                      color: '#000',
                      fontFamily: '"Hanken Grotesk", sans-serif',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '1.2',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {link.name}<span className="text-primary ml-0.5">.</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div 
          className="flex items-center lg:hidden cursor-pointer p-2 -mr-2 text-black hover:text-[#F12837] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-black/5 flex flex-col items-center py-2 px-6 shadow-xl lg:hidden transition-all duration-300 ease-out -z-10",
          isMobileMenuOpen 
            ? "opacity-100 transform-none pointer-events-auto" 
            : "opacity-0 -translate-y-6 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-4 text-[17px] font-bold text-black/80 hover:text-black transition-colors border-b border-black/5 last:border-0"
            style={{ fontFamily: '"Hanken Grotesk", sans-serif', letterSpacing: '-0.5px' }}
          >
            {link.name}<span className="text-[#F12837] ml-0.5">.</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
