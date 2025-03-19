import React from 'react';
import Image from 'next/image';

function Training() {
  return (
    <div className="w-full min-h-screen pt-20 pb-20 bg-slate-900 flex flex-col justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-8 px-6 flex-grow">

        {/* Image Section - Add Space on Small Screens */}
        <div className="flex justify-center items-center sm:mb-6">
          <Image 
            src="/training.jpg"
            alt="dog"
            width={240}
            height={450}
            className="object-contain max-w-full sm:w-3/4"
            quality={70}
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-white">Dog Training</h2>
          <p className="font-semibold text-neutral-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat soluta sunt quibusdam dolores suscipit?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi quas excepturi sit veniam eligendi placeat optio nemo sunt dicta. Quas dolorem odit consequatur iure blanditiis.
          </p>
        </div>

      </div>  
    </div>
  );
}

export default Training;
