import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Dog Grooming",
    image: "/gallery4.jpeg",
    details: "Nail clipping, full body wash, and coat care to keep your dog looking and feeling their best.",
    route: "/dog-grooming",
    badge: "Most Popular",
  },
  {
    title: "Dog Training",
    image: "/gallery5.jpeg",
    details: "From basic commands to advanced obedience — we build confident, well-mannered dogs.",
    route: "/dog-training",
    badge: null,
  },
  {
    title: "Handler Training",
    image: "/gallery6.jpeg",
    details: "Empower yourself with the skills and confidence to communicate effectively with your dog.",
    route: "/handler-training",
    badge: null,
  },
  {
    title: "Dog Breeding",
    image: "/gallery1.jpeg",
    details: "Stud services and responsible puppy rehoming — quality bloodlines, healthy pups.",
    route: "/dog-breeding",
    badge: null,
  },
];

function Services() {
  return (
    <div className="bg-slate-950 py-20 px-4 md:px-8">
      {/* Section header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">What We Offer</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Our Services</h2>
        <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
        <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
          Comprehensive care for every dog — whatever stage of life, whatever the challenge.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.route}
            className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 flex flex-col bg-slate-900"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

              {/* Badge */}
              {service.badge && (
                <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-full">
                  {service.badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-white font-semibold text-lg">{service.title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed flex-1">{service.details}</p>
              <div className="mt-5 flex items-center gap-1.5 text-emerald-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
