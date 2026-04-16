import React from 'react'
import Card from './Card'

function CardSection() {
  return (
    <div className="bg-slate-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Training Plans</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Find the right plan for your dog
          </h2>
          <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
          <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            From foundational basics to advanced protection training — we have a program suited to every dog and every goal.
          </p>
        </div>

        <Card />
      </div>
    </div>
  )
}

export default CardSection