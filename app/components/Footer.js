import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/whitelogo.svg"
              alt="West K9 logo"
              width={160}
              height={50}
              style={{ width: 'auto', height: '300px' }}
              className="object-contain mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional dog training, grooming, and breeding in Kisumu County, Kenya. Transforming dogs into confident companions.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61582369095665"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200"
                aria-label="Facebook"
              >
                <BsFacebook className="text-base" />
              </Link>
              <Link
                href="https://www.instagram.com/westk.9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <AiFillInstagram className="text-base" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200"
                aria-label="Twitter"
              >
                <BsTwitter className="text-base" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Gallery", href: "/gallery" },
                { label: "Pricing", href: "/pricing" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Dog Grooming", href: "/dog-grooming" },
                { label: "Dog Training", href: "/dog-training" },
                { label: "Handler Training", href: "/handler-training" },
                { label: "Dog Breeding", href: "/dog-breeding" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">Stay Updated</h4>
            <p className="text-slate-500 text-xs mb-4 leading-relaxed">
              Subscribe for training tips and updates from West K9.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-slate-800 border border-white/5 text-slate-200 placeholder:text-slate-600 text-sm px-3 py-2.5 rounded-lg focus:outline-none focus:border-emerald-500/40 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-200 flex-shrink-0"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {year} West K9. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Site crafted by{" "}
            <Link
              href="https://www.digitalcheuxes.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 transition-colors duration-200"
            >
              digitalcheuxes
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
