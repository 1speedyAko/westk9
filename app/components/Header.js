"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const navigationItems = [
    { name: "Home", section: "home", type: "scroll" },
    { name: "About", section: "about", type: "scroll" },
    { name: "Services", section: "services", type: "scroll" },
    { name: "Contact", section: "contact", type: "scroll" },
    { name: "Gallery", route: "/gallery", type: "route" },
    { name: "Pricing", route: "/pricing", type: "route" },
  ];

  const renderNavLink = (item, isMobile = false) => {
    const base = isMobile
      ? "w-full justify-start text-base font-medium py-3 px-4 rounded-lg transition-all duration-200"
      : "relative text-sm font-medium transition-all duration-200 px-1 py-2";

    const activeStyle = isMobile
      ? "bg-emerald-500/10 text-emerald-400"
      : "text-emerald-400";

    const defaultStyle = isMobile
      ? "text-slate-300 hover:bg-slate-800 hover:text-white"
      : "text-slate-300 hover:text-white";

    // Active only makes sense on the homepage
    const isActive = isHomePage && item.section === activeSection;
    const className = `${base} ${isActive ? activeStyle : defaultStyle}`;

    // External route (Gallery, Pricing)
    if (item.type === "route") {
      const isCurrentRoute = pathname === item.route;
      return (
        <Link key={item.name} href={item.route}>
          {isMobile ? (
            <div className={`${base} ${isCurrentRoute ? activeStyle : defaultStyle}`}>{item.name}</div>
          ) : (
            <span className={`${base} ${isCurrentRoute ? activeStyle : defaultStyle} relative`}>
              {item.name}
              {isCurrentRoute && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
              )}
            </span>
          )}
        </Link>
      );
    }

    // Scroll-type: on homepage → smooth scroll; elsewhere → link back to /#section
    if (!isHomePage) {
      const href = item.section === "home" ? "/" : `/#${item.section}`;
      return (
        <Link key={item.section} href={href}>
          {isMobile ? (
            <div className={`${base} ${defaultStyle}`}>{item.name}</div>
          ) : (
            <span className={`${base} ${defaultStyle}`}>{item.name}</span>
          )}
        </Link>
      );
    }

    return (
      <button
        key={item.section}
        onClick={() => scrollToSection(item.section)}
        className={className}
      >
        {item.name}
        {!isMobile && isActive && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
        )}
      </button>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/whitelogo.svg"
              alt="West K9 logo"
              width={280}
              height={240}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => renderNavLink(item))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-slate-950 border-slate-800 w-[280px]"
              >
                <SheetHeader className="mb-6">
                  <SheetTitle>
                    <Image
                      src="/whitelogo.svg"
                      alt="West K9 logo"
                      width={160}
                      height={50}
                      className="object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1">
                  {navigationItems.map((item) => renderNavLink(item, true))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;