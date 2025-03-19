import React from 'react';
import Image from 'next/image';

function Grooming() {
  return (
    <div className='w-full h-screen pt-20 bg-slate-900 flex items-center justify-center'>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 items-center gap-8 px-6'>
        
        {/* Image Section - Centered */}
        <div className='flex justify-center items-center'>
          <Image 
            src="/uprightdog.png"
            alt='dog'
            width={250}
            height={450}
            className='object-contain'
            quality={70}
          />
        </div>

        {/* Text Section */}
        <div className='text-center md:text-left'>
          <h2 className="text-3xl font-bold text-white">Dog Grooming</h2>
          <p className='font-semibold text-neutral-200'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat soluta sunt quibusdam dolores suscipit?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi quas excepturi sit veniam eligendi placeat optio nemo sunt dicta. Quas dolorem odit consequatur iure blanditiis.
          </p>
        </div>

      </div>  
    </div>
  );
}

export default Grooming;
