import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <>
        <div className=" py-20 z-8 w-full text-white pb-10 bg-slate-800 px-10">
        <h1 className="text-center text-4xl mb-4 py-10 font-bold text-emerald-600">About Us</h1>
        <div className="grid 3/4-h text-center px-3 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div className=" gap-3">
          <h2 className="text-3xl ">Why us?</h2>
        <p className="container mt-4">
            At WK9, we understand that grooming is an esseential part of your dogs overall health and well-being.
            Our comprehensive grooming services are designed to keep your dog looking and feeling their best while ensuring a comftable
            and stress free for both you and your pet.
            Here at WK9, our basic obedience training program is tailored to establish a strong foundation of good behaviours
            and communication between you and your dog.
            At WK9, we specialize in providing top notch handler training to ensure that your dog is well behaved, obedient and you have no problem during engagement.
          </p>
        </div>
          
          <div className='grid place-content-center'>
            <Image
              src="/snifferup.JPG"
              alt="dog pet"
              width={500}
              height = {550}
              className=''
            />
          </div>
        </div>
        {/* <div className="text-center text-4xl mb-4 text-bold py-10">
          <h1>Meet Our Team</h1>
        </div> */}
        {/* <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {infoList.map((item, index) => (
            <Card key={index} info={item} />
          ))}
        </div> */}
      </div>
    </>
  )
}

export default About