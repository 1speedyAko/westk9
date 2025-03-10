"use client"
import React from 'react'
import { ReactTyped } from 'react-typed';
import Image from 'next/image';

function Hello() {
  return (
    <div className='relative min-h-screen bg-slate-600'>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
      <Image 
          src='/IMG_0810.JPG'
          alt='backgroundImage'
          fill
          quality={100}
          className="w-full h-full object-cover scale-x-[-1]" // Flips image horizontally
        />

      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start min-h-screen p-10 text-white">
        <h1 className="text-3xl font-bold capitalize">
          <ReactTyped strings={['Who are we?']} typeSpeed={100} loop /> 
        </h1>
        <p className="mt-5 text-lg leading-relaxed max-w-3xl">
          Welcome to West K9, where we believe in the ability of every dog to be
          a well-behaved and happy member of your family. Founded in 2018, our
          sole dedication is to provide top-notch training services to dogs of
          all ages, breeds, and temperaments in Kisumu County, Kenya.
        </p>
        <p className="mt-3 text-lg leading-relaxed max-w-3xl">
          Our mission at WK9 is to enhance the bond between dogs and their owners through 
          effective, compassionate techniques. We strive to create a positive and supportive 
          environment where dogs can learn and grow together.
        </p>
        <p className="mt-3 text-lg leading-relaxed max-w-3xl">
          At our facility, our team of experienced trainers brings a wealth of knowledge and 
          passion to every training session. We stay up-to-date with the latest training methods 
          to ensure we offer the best possible guidance and support for our furry friends.
        </p>
      </div>
    </div>
  )
}

export default Hello;
