import React from 'react'
import Image from 'next/image'

function Section_1() {
  return (
    <div className='w-full'>
        
      <div className="p-10 px-10 bg-emerald-200 grid lg:grid-cols-3 md:grid-cols-2  gap-10 ">
        <div>
          
          <p>
            Central to our training philosophy is the belief that the reinforcement is key to successful and ethical dog training.
            We work closely with you to develop customized training programs that fit your lifestyle and goals ensuring that both you and your dog 
                    
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
          We prioritize understanding the unique needs of both our 
          canines and human clients to provide training solutions that work best for your
          and your dog. 
 
           
          </p>
        </div>
    </div>
    </div>
  )
}

export default Section_1