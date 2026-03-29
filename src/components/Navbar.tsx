"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="w-full h-auto py-4 flex items-center justify-between px-12 bg-white/80 backdrop-blur-md">
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

        <div className="flex items-center lg:hidden">
          {/* Mobile menu could be added here */}
          <Link href="/" className="text-sm font-bold text-black lg:hidden">
            MENU
          </Link>
        </div>
      </div>
    </header>
  );
}
