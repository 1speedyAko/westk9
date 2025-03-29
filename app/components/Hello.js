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
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWG3G1Qtmq7MiOe5Z//9k="
        className="w-full h-full object-cover scale-x-[-1]" // Flips image horizontally
      />

      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      {/* Text Content */}
      <div className="pt-20 md:pt-20 relative z-10 flex flex-col justify-center items-start min-h-screen p-10 text-white">
        <h1 className="text-3xl font-bold capitalize">
          <ReactTyped strings={['Who are we?']} typeSpeed={100} loop /> 
        </h1>
        <p className="mt-5 text-2xl leading-relaxed max-w-3xl">
        At West K9, we believe that every dog has the potential to be well-behaved, confident, and a joy to be
        around. Based in Kisumu County, Kenya, we specialize in professional dog training, behavior
        modification, grooming, and breeding, ensuring that every dog gets the best care and guidance.
        </p>
        <p className="mt-3 text-2xl leading-relaxed max-w-3xl">
        Our approach goes beyond simple commands—we focus on building a strong bond between you and
        your dog through science-backed training methods tailored to your dog’s unique personality and needs.
        Whether you have a playful puppy, a rescue dog needing rehabilitation, or a working dog requiring
        specialized training, we are here to help.
          </p>
        <p className="mt-3 text-2xl leading-relaxed max-w-3xl">
        With years of experience in canine behavior and training, we have transformed countless dogs into well-
        mannered companions. Our passion is helping you unlock your dog’s full potential, creating a happier
        and more harmonious home.
        </p>

      </div>
    </div>
  )
}

export default Hello;
