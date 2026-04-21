"use client"
import React from 'react'
import { ReactTyped } from 'react-typed';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

function Hello() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='relative min-h-screen bg-slate-950 overflow-hidden'>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src='/gallery1.jpeg'
          alt='West K9 hero background'
          fill
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWG3G1Qtmq7MiOe5Z//9k="
          className="w-full h-full object-cover scale-x-[-1] scale-105"
          priority
        />
      </div>

      {/* Gradient overlay - multi-layer for depth */}
      <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30' />
      <div className='absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20' />

      {/* Decorative emerald glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-24 pt-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">Kisumu County, Kenya</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            <span className="block">Professional</span>
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              <ReactTyped
                strings={['Dog Training.', 'Dog Grooming.', 'Dog Breeding.', 'Handler Training.']}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            At West K9, we transform dogs into well-behaved, confident companions.
            Using science-backed methods tailored to your dog's unique personality — from puppies to working dogs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '40+', label: 'Adoptions' },
              { value: '7+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-400 hover:text-emerald-400 transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  )
}

export default Hello;
