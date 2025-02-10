"use client"
import React from 'react'
import ImageSlider from './Carousel'
import { ReactTyped } from 'react-typed';

function Hello() {
  return (
    <div className='w-full bg-slate-600'>
        <div className="relative z-10">
            <h1 className="text-gray-300 text-2xl capitalize font-bold pt-40 px-10">
              <ReactTyped strings={['Who are we ?']} typeSpeed={100} loop /> 
            </h1>
            <div className="block px-10 mt-5 font-medium text-slate-100">
              <p className=''> 
                Welcome to West k9, where we believe in the ability of every dog to be
                a well-behaved and happy member of your family. Founded in ____, our
                sole dedication is to provide top-notch training services to dogs of
                all ages, breeds, and temperaments. Our mission at WK9 is to enhance
                the bond between dogs and their owners through effective, compassionate
                techniques. We strive to create a positive and supportive environment
                where dogs can learn and grow together.
                <br />
                At our facility, our team of experienced and certified trainers brings
                a wealth of knowledge and passion to every training session. The team
                endeavors to stay up to date with the most recent training methods and
                industry standards to ensure we offer the finest possible guidance &
                support.
              </p>
            </div>
            {/* {/* <ImageSlider/> */}
    </div>

    </div>
  )
}

export default Hello