import React from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const pillars = [
  "Positive reinforcement — no fear, no force",
  "Customized programs that fit your lifestyle",
  "Clear communication between you and your dog",
  "Programs for puppies, rescues & working dogs",
]

function Section_1() {
  return (
    <div className='w-full bg-slate-950 py-20 px-4 md:px-16'>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — image */}
        <div className="relative group order-2 lg:order-1">
          <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/30 to-teal-500/10 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/sable.JPG"
              height={500}
              width={700}
              alt="West K9 dog training"
              className="w-full h-80 object-cover"
              quality={80}
              priority
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3">
              <p className="text-xs text-slate-400 uppercase tracking-widest">Our Method</p>
              <p className="text-white font-semibold text-sm mt-0.5">Science-Backed Training</p>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Our Philosophy</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            Training built on <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">trust & science</span>
          </h2>
          <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full" />
          <p className="mt-6 text-slate-400 leading-relaxed">
            At the heart of our training philosophy is the belief that positive reinforcement is the most
            ethical and effective path to a well-behaved dog. We work closely with you to create
            customized programs that fit your lifestyle and training goals.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            We focus on clear communication and mutual understanding — helping you and your dog build
            the trust and confidence to thrive together in any environment.
          </p>

          <ul className="mt-8 space-y-3">
            {pillars.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Section_1