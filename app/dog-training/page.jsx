import React from "react";
import Image from "next/image";

const Training = () => {
  const trainingRates = [
    {
      category: "PRIVATE TRAINING SESSIONS (Owner & Dog)",
      services: [
        { name: "Initial Consultation (60-90 mins)", price: "ksh 2,000" },
        { name: "Single Private Session (60 mins)", price: "ksh 2,500" },
        { name: "3-Session Package", price: "ksh 6,500" },
        { name: "5-Session Package", price: "ksh 10,500" },
        { name: "10-Session Package", price: "ksh 22,500" },
      ],
    },
    {
      category: "PUPPY TRAINING",
      services: [
        { name: "Puppy Basics (8-16 weeks old)", price: "ksh 1,500 per session" },
        { name: "Puppy Socialization Package (4 sessions)", price: "ksh 5,500" },
      ],
    },
    {
      category: "OBEDIENCE & MANNERS",
      services: [
        { name: "Basic Obedience (Sit, Stay, Recall, Leash Walking, etc.)", price: "ksh 2,000 per session" },
        { name: "Advanced Obedience", price: "ksh 2,350 per session" },
        { name: "Obedience Package (5 Sessions)", price: "ksh 8,000" },
      ],
    },
    {
      category: "BEHAVIOR MODIFICATION",
      services: [
        { name: "Reactivity Training (Aggression, Fear, Anxiety)", price: "ksh 2,350 per session" },
        { name: "Separation Anxiety Program", price: "ksh 2,000 per session" },
        { name: "Custom Behavior Plan (Includes Consultation & Sessions)", price: "ksh 3,000" },
      ],
    },
    {
      category: "BOARD & TRAIN PROGRAMS",
      services: [
        { name: "2-Week Obedience Bootcamp", price: "ksh 23,500" },
        { name: "3-Week Behavior Modification Camp", price: "ksh 35,250" },
        { name: "Custom Stay & Train Program", price: "Contact for Pricing" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen pt-20 pb-20 bg-slate-900 flex flex-col justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-8 px-6 flex-grow">
        {/* Image Section */}
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
            We provide top-notch dog training services tailored to your dog's needs. Whether it's obedience training, 
            behavior modification, or specialized training, we have a program suited for every dog!
          </p>
        </div>
      </div>

      {/* Training Rates Section */}
      <div className="mt-12 px-6">
        <h3 className="text-white text-3xl font-bold text-center mb-8">WestK9 Training Rates</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {trainingRates.map((category, index) => (
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
    </div>
  );
};

export default Training;
