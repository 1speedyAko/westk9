import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Grooming() {
  // Grooming price data
  const groomingData = [
    {
      size: 'Small',
      weight: '1 - 9 kg',
      basicGrooming: 3000,
      fullGrooming: 4000,
      deluxeSpa: 5000
    },
    {
      size: 'Medium',
      weight: '10 - 23 kg',
      basicGrooming: 3500,
      fullGrooming: 4500,
      deluxeSpa: 5500
    },
    {
      size: 'Large',
      weight: '24 - 41 kg',
      basicGrooming: 5000,
      fullGrooming: 5500,
      deluxeSpa: 6000
    },
    {
      size: 'Giant',
      weight: '42+ kg',
      basicGrooming: 6000,
      fullGrooming: 6500,
      deluxeSpa: 7000
    }
  ];

  return (
    <div className='w-full min-h-screen pt-20 bg-slate-900 flex flex-col items-center justify-center'>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 items-center gap-8 px-6'>
        {/* Image Section - Centered */}
        <div className='flex justify-center items-center'>
          <Image 
            src='/uprightdog.png'
            alt='dog'
            width={250}
            height={450}
            className='object-contain'
            quality={70}
          />
        </div>

        {/* Text Section */}
        <div className='text-center md:text-left'>
          <h2 className='text-3xl font-bold text-white'>Dog Grooming</h2>
          <p className='font-semibold text-neutral-200'>
            Pamper your pup with luxury grooming! Our services range from basic grooming to a deluxe spa package.
          </p>
        </div>
      </div>  

      {/* Rate Card Section */}
      <Card className='mt-12 bg-slate-800 text-white p-6 rounded-lg shadow-lg w-full max-w-3xl'>
        <CardHeader>
          <CardTitle className='text-center text-2xl font-bold'>Westk9 Grooming Rate Card</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Responsive Horizontal Scrolling Table */}
          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-700'>
                  <th className='p-2 border border-slate-600 whitespace-nowrap'>Dog Size</th>
                  <th className='p-2 border border-slate-600 whitespace-nowrap'>Weight (kg)</th>
                  <th className='p-2 border border-slate-600 whitespace-nowrap'>Basic Grooming</th>
                  <th className='p-2 border border-slate-600 whitespace-nowrap'>Full Grooming</th>
                  <th className='p-2 border border-slate-600 whitespace-nowrap'>Deluxe Spa Package</th>
                </tr>
              </thead>
              <tbody>
                {groomingData.map((dog, index) => (
                  <tr key={dog.size} className={index % 2 === 1 ? 'bg-slate-700' : ''}>
                    <td className='p-2 border border-slate-600 whitespace-nowrap'>{dog.size}</td>
                    <td className='p-2 border border-slate-600 whitespace-nowrap'>{dog.weight}</td>
                    <td className='p-2 border border-slate-600 whitespace-nowrap'>Ksh {dog.basicGrooming}</td>
                    <td className='p-2 border border-slate-600 whitespace-nowrap'>Ksh {dog.fullGrooming}</td>
                    <td className='p-2 border border-slate-600 whitespace-nowrap'>Ksh {dog.deluxeSpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className='text-center text-gray-300 mt-4'>
            <strong>Service Breakdown:</strong> <br />
            <span className='font-semibold'>Basic Grooming</span> – Bath, nail trim, ear cleaning, blow-dry. <br />
            <span className='font-semibold'>Full Grooming</span> – Basic grooming + haircut & styling. <br />
            <span className='font-semibold'>Deluxe Spa Package</span> – Full grooming + teeth brushing, deep conditioning, and paw massage.
          </p>
          <p className='text-center text-gray-400 mt-4'>
            💦 Add-Ons Available: De-shedding, flea treatment, specialty shampoos, and more!
          </p>
          <p className='text-center text-blue-400 font-bold mt-6'>📍 Book your pet's spa day today! Westk9 has got you covered.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Grooming;