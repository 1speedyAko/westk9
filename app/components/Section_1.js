import React from 'react'
import Image from 'next/image'

function Section_1() {
  return (
    <div className='w-full'>
        
      <div className="p-10 px-10 bg-emerald-200 grid lg:grid-cols-3 md:grid-cols-2  gap-10 ">
        <div>
          
          <p>
          At the heart of our training philosophy is the belief that positive reinforcement is key to ethical and
          effective dog training. We work closely with you to create customized programs that fit your lifestyle and
          training goals, ensuring a happy, well-behaved dog and a stronger bond between you both.
                    
          </p>
        </div>
        <div>
          
          <p>
           {/*  image here, */}
           <Image className=""
           src="/sable.JPG"
           height={200}
           width={300}
           alt="dog"
           priority={true}
           blurDataURL='/sable.JPG'
           quality={50}
           />
          </p>
        </div>
        <div className="mb-4">
          
          <p className="">
            We focus on clear communication and mutual understanding, helping you and your dog build trust and
            confidence. Our goal is to create a training experience that feels natural, effective, and rewarding for both
            of you.
          
           
          </p>
        </div>
    </div>
    </div>
  )
}

export default Section_1