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
        At WK9, we know that your dog is more than just a pet—they're family. That’s why we provide expert care and training designed to make life easier for both you and your dog.

🐶 Stress-Free Grooming – Our professional grooming services ensure your dog stays clean, healthy, and comfortable, making the experience smooth and enjoyable for both of you.

🎯 Effective Obedience Training – We help lay the foundation for good behavior and clear communication, so your dog listens and responds reliably in any situation.

🦴 Handler Training for Confidence & Control – We don’t just train dogs; we empower owners. Our handler training ensures you have the skills and confidence to guide your dog effectively in any setting.

With WK9, you get more than just training—you get a partnership dedicated to your dog’s success and well-being.

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