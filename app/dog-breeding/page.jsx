import React from 'react';
import Image from 'next/image';

function Breeding() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col justify-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center gap-8 px-6">

        {/* Image Section with Space */}
        <div className="flex justify-center items-center py-10"> {/* Added padding */}
          <Image 
            src="/IMG_0825.JPG"
            alt="dog"
            width={430}
            height={450}
            className="object-contain max-w-full h-auto"
            quality={70}
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left px-6"> {/* Added padding */}
          <h2 className="text-3xl font-bold text-white">Dog Breeding</h2>
          <p className="font-semibold text-neutral-200 mt-4">
           Some info about dog breeding here
          </p>
        </div>

      </div>  
    </div>
  );
}

export default Breeding;
