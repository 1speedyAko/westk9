"use client"
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    if (!isHomePage) return;
    const sectionIds = ["home", "about", "services", "testimonials", "faqs", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 64; // matches h-16
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
    setMobileOpen(false);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const navigationItems = [
    { name: "Home", section: "home", type: "scroll" },
    { name: "About", section: "about", type: "scroll" },
    { name: "Services", section: "services", type: "scroll" },
    { name: "Contact", section: "contact", type: "scroll" },
    { name: "Gallery", route: "/gallery", type: "route" },
    { name: "Pricing", route: "/pricing", type: "route" },
  ];

  /* ─── Desktop nav link ─────────────────────────────────────── */
  const renderDesktopLink = (item) => {
    const base = "relative text-sm font-medium transition-colors duration-200 px-1 py-2";
    const isActive =
      item.type === "route"
        ? pathname === item.route
        : isHomePage && item.section === activeSection;

    const cls = `${base} ${isActive ? "text-emerald-400" : "text-slate-300 hover:text-white"}`;
    const underline = isActive && (
      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
    );

    if (item.type === "route") {
      return (
        <Link key={item.name} href={item.route} className={cls}>
          {item.name}{underline}
        </Link>
      );
    }

    if (!isHomePage) {
      const href = item.section === "home" ? "/" : `/#${item.section}`;
      return (
        <Link key={item.section} href={href} className={cls}>
          {item.name}
        </Link>
      );
    }

    return (
      <button key={item.section} onClick={() => scrollToSection(item.section)} className={cls}>
        {item.name}{underline}
      </button>
    );
  };

  /* ─── Mobile nav link ──────────────────────────────────────── */
  const renderMobileLink = (item) => {
    const isActive =
      item.type === "route"
        ? pathname === item.route
        : isHomePage && item.section === activeSection;

    const cls = `flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${isActive
      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
      }`;

    if (item.type === "route") {
      return (
        <Link key={item.name} href={item.route} className={cls} onClick={closeMobile}>
          {item.name}
        </Link>
      );
    }

    if (!isHomePage) {
      const href = item.section === "home" ? "/" : `/#${item.section}`;
      return (
        <Link key={item.section} href={href} className={cls} onClick={closeMobile}>
          {item.name}
        </Link>
      );
    }

    return (
      <button
        key={item.section}
        onClick={() => scrollToSection(item.section)}
        className={cls}
      >
        {item.name}
      </button>
    );
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center h-full" onClick={closeMobile}>
              <Image
                src="/whitelogo.svg"
                alt="West K9 logo"
                width={200}
                height={200}
                style={{ width: 'auto', height: '250px' }}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => renderDesktopLink(item))}
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ───────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMobile}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col bg-slate-950 border-l border-white/5 shadow-2xl transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <Image
            src="/whitelogo.svg"
            alt="West K9 logo"
            width={140}
            height={140}
            style={{ width: 'auto', height: '40px' }}
            className="object-contain"
          />
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1.5">
          {navigationItems.map((item) => renderMobileLink(item))}
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-5 border-t border-white/5">
          <p className="text-slate-600 text-xs text-center">West K9 — Kisumu County, Kenya</p>
        </div>
      </div>
    </>
  );
};

export default Header;