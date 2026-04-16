"use client"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const cardInfo = [
  {
    tier: "Starter",
    price: "2,500",
    currency: "KSH",
    description: "per session",
    info: "Foundational & Basic Training",
    sessions: "2 months",
    highlight: false,
    services: [
      "Socialization",
      "Basic Obedience (sit, stay, come, down, leave it)",
      "Handling and grooming",
      "House Training",
    ],
    button: "Get Started",
    route: "/contact",
  },
  {
    tier: "Growth",
    price: "2,500",
    currency: "KSH",
    description: "per session",
    info: "Intermediate Training",
    sessions: "5 months",
    highlight: true,
    services: [
      "Advanced obedience (heel, wait, place, recall)",
      "Distraction training",
      "Impulse control",
      "Continued socialization",
      "Leash Training & Kennel Manners",
    ],
    button: "Get Started",
    route: "/contact",
  },
  {
    tier: "Elite",
    price: null,
    currency: null,
    description: "Custom pricing",
    info: "Advanced Training",
    sessions: "10 months",
    highlight: false,
    services: [
      "Functional Obedience in real-life scenarios",
      "Introduction to Protection Training",
      "Confidence Building",
      "Advanced Protection (bitework, threat recognition)",
      "Real-Life Scenario Training",
      "Physical Conditioning",
    ],
    button: "Contact Us",
    route: "/contact",
  },
];

const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {cardInfo.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
            item.highlight
              ? "border-emerald-500/50 bg-gradient-to-b from-slate-800 to-slate-900 shadow-xl shadow-emerald-500/10"
              : "border-white/5 bg-slate-900 hover:border-white/10"
          }`}
        >
          {/* Popular badge */}
          {item.highlight && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                Most Popular
              </span>
            </div>
          )}

          <div className="p-7 flex flex-col h-full">
            {/* Tier & label */}
            <div className="mb-6">
              <span className={`text-xs font-semibold uppercase tracking-widest ${item.highlight ? 'text-emerald-400' : 'text-slate-500'}`}>
                {item.tier}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">{item.info}</h3>
              <p className={`text-xs mt-1 ${item.highlight ? 'text-emerald-400/70' : 'text-slate-500'}`}>{item.sessions}</p>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-white/5">
              {item.price ? (
                <div className="flex items-end gap-1.5">
                  <span className="text-sm text-slate-400">{item.currency}</span>
                  <span className="text-3xl font-bold text-white">{item.price}</span>
                  <span className="text-sm text-slate-400 mb-0.5">{item.description}</span>
                </div>
              ) : (
                <p className="text-slate-400 text-sm italic">{item.description}</p>
              )}
            </div>

            {/* Feature list */}
            <ul className="space-y-3 flex-1">
              {item.services.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <span className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${item.highlight ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>
                    <FontAwesomeIcon icon={faCheck} className="text-[9px]" />
                  </span>
                  <span className="text-slate-300 leading-snug">{service}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link href={item.route}>
              <button className={`mt-8 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                item.highlight
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-white/5'
              }`}>
                {item.button}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
