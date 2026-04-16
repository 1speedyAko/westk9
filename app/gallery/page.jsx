'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react'

const galleryItems = [
  { id: 1,  image: '/IMG_0734.JPG',   category: 'Training',  caption: 'On-field obedience session' },
  { id: 2,  image: '/IMG_0810.JPG',   category: 'Training',  caption: 'Advanced handler work' },
  { id: 3,  image: '/IMG_0811.JPG',   category: 'Training',  caption: 'Focused command training' },
  { id: 4,  image: '/sleeve.JPG',     category: 'Training',  caption: 'Protection sleeve work' },
  { id: 5,  image: '/IMG_0825.JPG',   category: 'Dogs',      caption: 'West K9 family member' },
  { id: 6,  image: '/IMG_0839.JPG',   category: 'Dogs',      caption: 'Our happy graduates' },
  { id: 7,  image: '/blook.JPG',      category: 'Dogs',      caption: 'Working dog in action' },
  { id: 8,  image: '/cougar.JPG',     category: 'Grooming',  caption: 'Post-grooming glow-up' },
  { id: 9,  image: '/lookup.JPG',     category: 'Breeding',  caption: 'Prized bloodline' },
  { id: 10, image: '/sable.JPG',      category: 'Dogs',      caption: 'Sable coat beauty' },
  { id: 11, image: '/snifferup.JPG',  category: 'Training',  caption: 'Tracking & scent work' },
  { id: 12, image: '/taliban.JPG',    category: 'Training',  caption: 'Advanced protection dog' },
]

const categories = ['All', 'Training', 'Dogs', 'Grooming', 'Breeding']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1))
  }, [filtered.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1))
  }, [filtered.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, prev, next])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <div className="min-h-screen bg-slate-950">

      {/* ── Hero header ── */}
      <div className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
            <Images className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Our Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Life at{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              West K9
            </span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            A look at our training sessions, grooming days, and the incredible dogs we work with every week.
          </p>
        </div>
      </div>

      {/* ── Filter tabs ── */}
      <div className="flex items-center justify-center gap-2 flex-wrap px-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-800/60 text-slate-400 border border-white/5 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {cat}
            {cat === 'All' && (
              <span className="ml-1.5 text-[11px] opacity-70">({galleryItems.length})</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={item.image}
                alt={item.caption}
                width={600}
                height={400}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                quality={75}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">{item.category}</span>
                    <p className="text-white text-sm font-medium mt-0.5">{item.caption}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-800/80 border border-white/10 rounded-full px-4 py-1.5 text-slate-400 text-xs z-10">
            {lightboxIndex + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 w-11 h-11 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 w-11 h-11 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].caption}
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-xl"
              quality={90}
              priority
            />
            {/* Caption */}
            <div className="mt-3 text-center">
              <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">
                {filtered[lightboxIndex].category}
              </span>
              <p className="text-slate-300 text-sm mt-0.5">{filtered[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
