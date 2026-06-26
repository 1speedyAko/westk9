"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Download, ExternalLink, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const images = [
  { src: "/gallery4.jpeg", alt: "Trainer with two dogs in the forest" },
  { src: "/gallery2.jpeg", alt: "Rottweiler resting outdoors" },
  { src: "/verthos.jpeg", alt: "Belgian Malinois portrait" },
  // { src: "/gallery1.jpeg", alt: "Handler and dog on the move" },
  { src: "/shakira.jpeg", alt: "GSD puppy running" },
  // { src: "/twins.jpeg", alt: "Two black German Shepherds" },
  // { src: "/gallery3.jpeg", alt: "Black GSD standing tall" },
  // { src: "/gallery5.jpeg", alt: "Dog training session" },
  // { src: "/gallery6.jpeg", alt: "Dog obedience work" },
];

export default function PricingPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [pdfOpen, setPdfOpen] = useState(false);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 px-4 text-center overflow-hidden">
        {/* subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
          Our Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Transparent Plans,{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Real Results
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed">
          Every dog is different. Our pricing reflects the personalised,
          science-backed care we put into each training, grooming, and breeding
          package.
        </p>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-100">
            See Our Work in Action
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Click any photo to view full-screen
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative group cursor-zoom-in overflow-hidden rounded-xl"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PDF SECTION ── */}
      <section className="px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Card header */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md glow-emerald">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100">
                    Full Pricing Brochure
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Detailed packages for training, grooming &amp; breeding
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setPdfOpen((v) => !v)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500/25 transition-colors"
                >
                  {pdfOpen ? (
                    <>
                      <X className="w-4 h-4" /> Hide Preview
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" /> Preview PDF
                    </>
                  )}
                </button>
                <a
                  href="/pricing.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            </div>

            {/* Inline PDF Preview */}
            {pdfOpen && (
              <div className="w-full h-[75vh] transition-all duration-300">
                <iframe
                  src="/pricing.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  className="w-full h-full border-0"
                  title="West K9 Pricing Brochure"
                />
              </div>
            )}

            {!pdfOpen && (
              <div className="p-6 flex flex-col items-center justify-center gap-3 py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-emerald-400/60" />
                </div>
                <p className="text-slate-400 text-sm max-w-xs">
                  Click <span className="text-emerald-400 font-medium">Preview PDF</span> to view our full pricing brochure right here, or{" "}
                  <span className="text-emerald-400 font-medium">Download</span> a copy to keep.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[90vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={1400}
              className="object-contain max-h-[90vh] rounded-xl shadow-2xl"
            />
            <p className="text-center text-slate-400 text-sm mt-3">
              {images[lightboxIndex].alt}
            </p>
            <p className="text-center text-slate-600 text-xs mt-1">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
}
