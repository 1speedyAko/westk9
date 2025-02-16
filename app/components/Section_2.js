"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDog, faClock } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

function Section_2() {
  return (
    <div className="bg-slate-800 p-30 grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10">
      <div className="flex flex-col items-center">
        <p className="order-1 text-5xl text-emerald-400 font-bold">Happy Clients</p>
        <FontAwesomeIcon icon={faUsers} className="order-2 text-5xl text-blue-500 p-9" />
        <div className="order-3 text-3xl text-white">
          <CountUp start={0} end={65} duration={2} delay={0} className="text-4xl font-bold" />+
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="order-1 text-5xl text-emerald-400 font-bold">Adoptions</p>
        <FontAwesomeIcon icon={faDog} className="order-2 text-5xl text-blue-500 p-9" />
        <div className="order-3 text-3xl text-white">
          <CountUp start={0} end={30} duration={2} delay={0} className="text-4xl font-bold" />+
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="order-1 text-5xl text-emerald-400 text-center font-bold">Years</p>
        <FontAwesomeIcon icon={faClock} className="order-2 text-6xl text-blue-500 p-9" />
        <div className="order-3 text-3xl text-white">
          <CountUp start={0} end={6} duration={5} delay={0} className="text-4xl font-bold" />+
        </div>
      </div>
    </div>
  );
}

export default Section_2;
