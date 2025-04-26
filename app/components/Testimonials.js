"use client"
import { cn } from "@/cn";
import { MultilayerCardV_1 } from "./comments";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from 'lucide-react';
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonialData = [
  {
    name: "Fred O.",
    testimonial:
      "Life-Changing Training! WestK9 transformed my dog's behavior in just a few sessions! He used to be shy and timid, now he is confident and very obedient. Recommend!",
    imageUrl: "/path/to/fred-image.jpg",
  },
  {
    name: "Mark O.",
    testimonial:
      "Best Decision Ever! Our rescue dog had severe anxiety, but thanks to WestK9, he's now confident and well-behaved. The trainers truly care and work wonders!",
    imageUrl: "/path/to/marko-image.jpg",
  },
  {
    name: "Edgar N.",
    testimonial:
      "Professional & Effective! WestK9's positive reinforcement methods worked like magic. My puppy learned commands quickly, and the training sessions were fun and engaging!",
    imageUrl: "/path/to/edgar-image.jpg",
  },
  {
    name: "kennedy M.",
    testimonial:
      "Amazing Results! I was struggling with my dog's aggression issues, but WestK9's expert trainers gave me the tools and confidence to manage him. Huge difference!",
    imageUrl: "/path/to/kennedy-image.jpg",
  },
  {
    name: "Ann M.",
    testimonial:
      "Highly Recommend! WestK9 helped us train our stubborn Rottweiller. Now, she listens, walks nicely, and even enjoys socializing with other dogs. Best investment ever!",
    imageUrl: "/path/to/ann-image.jpg",
  },
];

const CardBody = ({ className = "", title, description }) => (
  <div className={cn(className)}>
    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-400">{description}</p>
  </div>
);

const TestimonialCard = ({ testimonial, name, imageUrl, className = "" }) => (
  <div className={`p-4 md:p-6 lg:p-8 rounded-xl shadow-xl bg-slate-900 dark:bg-gray-800 transform transition hover:scale-105 ${className}`}>
    <div className="flex items-center mb-4 md:mb-6">
      {/* Uncomment and update the image if you decide to use it */}
      {/* {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
        />
      )} */}
      <div className="ml-2 md:ml-4">
        <p className="text-lg md:text-xl font-semibold text-neutral-300 dark:text-gray-100">
          {name}
        </p>
      </div>
    </div>
    <div className="relative">
      <Quote size={48} className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-neutral-200 opacity-20" />
      <p className="pl-8 md:pl-16 text-sm md:text-base italic text-neutral-300 dark:text-gray-300 leading-relaxed">
        {testimonial}
      </p>
    </div>
  </div>
);

// Create custom autoplay plugin with options
const autoplayOptions = {
  delay: 2000,
  stopOnInteraction: true,
  stopOnMouseEnter: true,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};

const Testimonials = () => {
  // Create embla carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: false,
    }, 
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-slate-950 dark:bg-zinc-900">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-emerald-400 dark:text-gray-100 mb-6 md:mb-10 px-4">
        What Our Clients Say
      </h2>
      
      <div className="px-4 max-w-screen-xl mx-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonialData.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
              >
                <MultilayerCardV_1 className="text-neutral-300 h-full">
                  <TestimonialCard
                    testimonial={testimonial.testimonial}
                    name={testimonial.name}
                    className="px-4 py-6 md:px-6 md:py-8 relative mx-auto h-full text-neutral-300 rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
                  />
                </MultilayerCardV_1>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons - different positioning for mobile vs desktop */}
        <div className="flex justify-center mt-4 md:hidden gap-2">
          <button 
            onClick={() => emblaApi?.scrollPrev()} 
            className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-800/50 hover:bg-slate-800 text-neutral-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => emblaApi?.scrollNext()} 
            className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-800/50 hover:bg-slate-800 text-neutral-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
        
        {/* Only visible on md screens and up, positioned absolutely */}
        <div className="hidden md:block">
          <button 
            onClick={() => emblaApi?.scrollPrev()} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full flex items-center justify-center bg-slate-800/50 hover:bg-slate-800 text-neutral-300 z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => emblaApi?.scrollNext()} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-10 w-10 rounded-full flex items-center justify-center bg-slate-800/50 hover:bg-slate-800 text-neutral-300 z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;