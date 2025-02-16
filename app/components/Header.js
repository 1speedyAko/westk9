"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { name: "Home", section: "home", type: "scroll" },
    { name: "Services", section: "services", type: "scroll" },
    { name: "About", section: "about", type: "scroll" },
    { name: "Testimonials", section: "testimonials", type: "scroll" },
    { name: "FAQs", section: "faqs", type: "scroll" },
    {name: "Contact", section:"contact", type:"scroll"},
    { name: "Gallery", route: "/gallery", type: "route" },
  ];

  const renderNavigationButton = (item) => {
    if (item.type === "route") {
      return (
        <Link href={item.route} key={item.name}>
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-slate-600 text-lg"
          >
            {item.name}
          </Button>
        </Link>
      );
    }

    return (
      <Button
        key={item.section}
        variant="ghost"
        onClick={() => scrollToSection(item.section)}
        className="text-gray-300 hover:text-slate-600 text-lg"
      >
        {item.name}
      </Button>
    );
  };

  const renderMobileNavigationButton = (item) => {
    if (item.type === "route") {
      return (
        <Link href={item.route} key={item.name}>
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white text-lg justify-start w-full"
          >
            {item.name}
          </Button>
        </Link>
      );
    }

    return (
      <Button
        key={item.section}
        variant="ghost"
        onClick={() => scrollToSection(item.section)}
        className="text-gray-300 hover:text-white text-lg justify-start w-full"
      >
        {item.name}
      </Button>
    );
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex-shrink-0">
              <Image
                src="/profile.png"
                alt="logo"
                width={90}
                height={70}
                className="w-auto"
              />
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => renderNavigationButton(item))}
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-800 w-[300px] border-gray-700">
                <SheetHeader>
                  <SheetTitle className="text-white">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navigationItems.map((item) => renderMobileNavigationButton(item))}
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