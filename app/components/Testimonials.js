"use client"
import { Quote } from 'lucide-react';
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonialData = [
  {
    name: "Fred O.",
    role: "Dog Owner",
    initials: "FO",
    testimonial:
      "Life-Changing Training! WestK9 transformed my dog's behavior in just a few sessions! He used to be shy and timid, now he is confident and very obedient. Highly recommend!",
  },
  {
    name: "Mark O.",
    role: "Rescue Dog Owner",
    initials: "MO",
    testimonial:
      "Best Decision Ever! Our rescue dog had severe anxiety, but thanks to WestK9, he's now confident and well-behaved. The trainers truly care and work wonders!",
  },
  {
    name: "Edgar N.",
    role: "First-Time Owner",
    initials: "EN",
    testimonial:
      "Professional & Effective! WestK9's positive reinforcement methods worked like magic. My puppy learned commands quickly and the training sessions were fun and engaging!",
  },
  {
    name: "Kennedy M.",
    role: "Dog Owner",
    initials: "KM",
    testimonial:
      "Amazing Results! I was struggling with my dog's aggression issues, but WestK9's expert trainers gave me the tools and confidence to manage him. Huge difference!",
  },
  {
    name: "Ann M.",
    role: "Rottweiler Owner",
    initials: "AM",
    testimonial:
      "Highly Recommend! WestK9 helped us train our stubborn Rottweiler. Now she listens, walks nicely, and even enjoys socialising with other dogs. Best investment ever!",
  },
];

const autoplayOptions = {
  delay: 3000,
  stopOnInteraction: true,
  stopOnMouseEnter: true,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};

const TestimonialCard = ({ testimonial, name, role, initials }) => (
  <div className="h-full flex flex-col bg-slate-900 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
    {/* Quote icon */}
    <Quote className="w-7 h-7 text-emerald-500/40 mb-4 flex-shrink-0" />

    {/* Testimonial text */}
    <p className="text-slate-300 text-sm leading-relaxed italic flex-1">
      &ldquo;{testimonial}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
      <div className="w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
        <span className="text-emerald-400 text-xs font-bold">{initials}</span>
      </div>
      <div>
        <p className="text-white text-sm font-semibold">{name}</p>
        <p className="text-slate-500 text-xs">{role}</p>
      </div>
      {/* Stars */}
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="bg-slate-950 py-20">
      {/* Section header */}
      <div className="text-center mb-14 px-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Testimonials</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
        <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
      </div>

      <div className="px-4 max-w-screen-xl mx-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-0">
            {testimonialData.map((t, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
              >
                <TestimonialCard
                  testimonial={t.testimonial}
                  name={t.name}
                  role={t.role}
                  initials={t.initials}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation — mobile */}
        <div className="flex justify-center mt-6 md:hidden gap-3">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-300 hover:text-white transition-all"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-300 hover:text-white transition-all"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Navigation — desktop */}
        <div className="hidden md:block">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-10 w-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-emerald-500 border border-white/10 text-slate-300 hover:text-slate-950 transition-all duration-200 z-10"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-10 w-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-emerald-500 border border-white/10 text-slate-300 hover:text-slate-950 transition-all duration-200 z-10"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;