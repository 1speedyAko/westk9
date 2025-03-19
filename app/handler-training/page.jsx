import React from 'react';
import Image from 'next/image';

function Handler() {
  const trainingOptions = [
    {
      category: "IN-PERSON TRAINING CLASSES",
      services: [
        { name: "Puppy Socialization Class (4 Weeks)", price: "ksh 20,000" },
        { name: "Basic Obedience Class (6 Weeks)", price: "ksh 45,000" },
        { name: "Advanced Obedience Class (6 Weeks)", price: "ksh 60,000" },
      ],
    },
    {
      category: "VIRTUAL TRAINING SESSIONS",
      services: [
        { name: "30-Minute Virtual Session", price: "ksh 1,600" },
        { name: "60-Minute Virtual Session", price: "ksh 3,000" },
        { name: "Virtual Training Package (4 Sessions)", price: "ksh 5,500" },
      ],
    },
    {
      category: "ADD-ONS & EXTRAS",
      services: [
        { name: "Additional Dog (for Multi-Dog Households)", price: "+ksh 1,500 per session" },
        { name: "In-Home Training Fee (If applicable)", price: "+ksh 2,350" },
        { name: "Training Equipment (Leash, Treats, etc.)", price: "Varies" },
      ],
    },
  ];

  return (
    <div className='w-full min-h-screen pt-20 pb-20 bg-slate-900 flex flex-col items-center justify-center px-6'>
      <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-8 w-full max-w-5xl'>
        
        {/* Image Section */}
        <div className='flex justify-center items-center'>
          <Image 
            src="/black.jpg"
            alt='dog'
            width={250}
            height={450}
            className='object-contain'
            quality={70}
          />
        </div>

        {/* Text Section */}
        <div className='text-center md:text-left space-y-4'>
          <h2 className="text-3xl font-bold text-white">Handler Training</h2>
          <p className='font-semibold text-neutral-200'>
            Whether you are a new dog owner or an experienced handler, our training programs will help you build a strong bond 
            with your dog while improving obedience and behavior.
          </p>
        </div>

      </div>

      {/* Training Rates Section */}
      <div className="mt-12 w-full max-w-5xl">
        <h3 className="text-white text-3xl font-bold text-center mb-8">Training Programs & Rates</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {trainingOptions.map((category, index) => (
            <div key={index} className="bg-gray-800 text-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4">{category.category}</h4>
              <ul className="space-y-2">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex justify-between border-b border-gray-700 pb-2">
                    <span>{service.name}</span>
                    <span className="font-semibold">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Information */}
      <div className="mt-12 text-center text-white">
        <h3 className="text-2xl font-bold">BOOK YOUR SESSION TODAY!</h3>
        
      </div>
    </div>
  );
}

export default Handler;
