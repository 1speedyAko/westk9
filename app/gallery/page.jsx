import React from 'react';
// import Navbar from '../navbar/Nav';
// import Footer from '../navbar/Footer';
import Image from 'next/image';

const Gallery = () => {
  const cards = [
    { id: 1, image: "/IMG_0734.JPG", name: 'Pet' },
    { id: 2, image: "/IMG_0810.JPG", name: 'Pet Page' },
    { id: 3, image: "/IMG_0811.JPG", name: 'Helen Troy' },
    { id: 4, image: "/sleeve.JPG", name: 'Matthew Perry' },
    { id: 5, image: "/IMG_0825.JPG", name: 'Molly Brown' },
    { id: 6, image: "/IMG_0839.JPG", name: 'Steve Jobs' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
    
      <div className="flex-grow py-16">
        <h1 className="text-3xl text-center py-4 font-bold mt-7">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-10">
          {cards.map((card) => (
            <div key={card.id} className="rounded overflow-hidden shadow-lg">
              <Image
                src={card.image}
                alt={card.name}
                className="w-full h-64 object-cover"
                quality={90}
                height={256}  
                width={400}   
                loading='lazy'
              
              />
              {/* <div className="p-4">
                <h3 className="text-lg font-semibold">{card.name}</h3>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* <Footer />s */}
    </div>
  );
};

export default Gallery;
