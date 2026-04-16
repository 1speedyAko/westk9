"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDog, faClock } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const stats = [
  {
    icon: faUsers,
    value: 65,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Dogs and owners living their best lives',
  },
  {
    icon: faDog,
    value: 30,
    suffix: '+',
    label: 'Adoptions',
    description: 'Dogs rehomed into loving families',
  },
  {
    icon: faClock,
    value: 6,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Dedicated to canine excellence',
  },
];

function Section_2() {
  return (
    <div className="bg-slate-950 py-12 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-px bg-white/5">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center py-12 px-8 bg-slate-950 hover:bg-slate-900/60 transition-colors duration-300 relative"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            </div>

            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors duration-300">
              <FontAwesomeIcon icon={stat.icon} className="text-emerald-400 text-xl" />
            </div>

            <div className="flex items-end gap-0.5">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                delay={0}
                className="text-4xl font-bold text-white"
              />
              <span className="text-2xl font-bold text-emerald-400 mb-0.5">{stat.suffix}</span>
            </div>

            <p className="mt-2 text-base font-semibold text-emerald-400">{stat.label}</p>
            <p className="mt-1 text-xs text-slate-500">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_2;
