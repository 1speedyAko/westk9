import React from 'react'
import Image from 'next/image'
import { Shield, Target, Star, Users } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: "Stress-Free Grooming",
    desc: "Our professional grooming keeps your dog clean, healthy, and comfortable — a smooth experience for both of you.",
  },
  {
    icon: Target,
    title: "Effective Obedience Training",
    desc: "We lay the foundation for good behavior and clear communication so your dog listens reliably in any situation.",
  },
  {
    icon: Users,
    title: "Handler Training",
    desc: "We don't just train dogs — we empower owners. Gain the skills and confidence to guide your dog effectively.",
  },
  {
    icon: Star,
    title: "Partnership for Life",
    desc: "With WK9 you get more than training — you get a dedicated partnership for your dog's long-term success.",
  },
]

function About() {
  return (
    <div className="bg-slate-900 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Our Story</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">About West K9</h2>
          <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image with floating badge */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/5">
              <Image
                src="/snifferup.JPG"
                alt="West K9 dog"
                width={700}
                height={600}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-slate-950 border border-emerald-500/20 rounded-xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-bold text-emerald-400">6+</p>
              <p className="text-xs text-slate-400 mt-0.5">Years of Excellence</p>
            </div>
          </div>

          {/* Right — content */}
          <div className="lg:pl-4">
            <h3 className="text-xl font-semibold text-white mb-3">Why Choose West K9?</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              At WK9, we know that your dog is more than just a pet — they're family. That's why we provide
              expert care and training designed to make life easier for both of you. Based in Kisumu County,
              Kenya, we've transformed countless dogs into well-mannered, confident companions.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div
                    key={i}
                    className="group p-5 rounded-xl bg-slate-800/50 border border-white/5 hover:border-emerald-500/20 hover:bg-slate-800 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="text-white text-sm font-semibold">{r.title}</h4>
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{r.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About