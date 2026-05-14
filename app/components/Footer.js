import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-10">

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Brand (BIG + dominant) */}
          <div>

            <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-sm">
              Professional dog training, grooming, and breeding in Kisumu County, Kenya. Transforming dogs into confident companions.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61582369095665"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition"
              >
                <BsFacebook />
              </Link>

              <Link
                href="https://www.instagram.com/westk.9"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition"
              >
                <AiFillInstagram />
              </Link>

              <Link
                href="https://www.youtube.com/@Westk9"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition"
              >
                <BsYoutube />
              </Link>
            </div>
          </div>

          {/* Links (combined clean columns) */}
          <div className="grid grid-cols-2 gap-10">

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Pricing", href: "/pricing" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-slate-400 hover:text-emerald-400 text-sm transition flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-emerald-400" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Dog Grooming", href: "/dog-grooming" },
                  { label: "Dog Training", href: "/dog-training" },
                  { label: "Handler Training", href: "/handler-training" },
                  { label: "Dog Breeding", href: "/dog-breeding" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-slate-400 hover:text-emerald-400 text-sm transition flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-emerald-400" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Newsletter (more space + clean box feel) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Stay Updated
            </h4>

            <p className="text-slate-500 text-sm mb-5 leading-relaxed">
              Get dog training tips, updates, and offers directly to your inbox.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-slate-800 border border-white/5 text-slate-200 placeholder:text-slate-600 text-sm px-3 py-3 rounded-lg focus:outline-none focus:border-emerald-500/40"
              />
              <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm px-5 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {year} West K9. All rights reserved.
          </p>

          <p className="text-slate-600 text-xs">
            Site crafted by{" "}
            <Link
              href="https://www.digitalcheuxes.co.ke"
              target="_blank"
              className="text-emerald-500 hover:text-emerald-400"
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