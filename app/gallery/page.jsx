import React from 'react';
// import Navbar from '../navbar/Nav';
// import Footer from '../navbar/Footer';

const Gallery = () => {
  const cards = [
    { id: 1, image: 'https://images.unsplash.com/photo-1601758176559-76c75ead317a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D', name: 'Pet' },
    { id: 2, image: 'https://images.unsplash.com/photo-1601758176481-e81a6b713126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3N8ZW58MHx8MHx8fDA%3D', name: 'Pet Page' },
    { id: 3, image: 'https://plus.unsplash.com/premium_photo-1668606717900-0ecf91e55655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D', name: 'Helen Troy' },
    { id: 4, image: 'https://images.unsplash.com/photo-1649571068605-844f3be0faa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VybWFuJTIwc2hlcGhlcmQlMjBkb2d8ZW58MHx8MHx8fDA%3D', name: 'Matthew Perry' },
    { id: 5, image: 'https://media.istockphoto.com/id/1445271521/photo/rottweiler-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=0k-POeCB3Wpd1-EQefSQ5rsMI_A3f9_JrVRQLJ3e3Rc=', name: 'Molly Brown' },
    { id: 6, image: 'https://media.istockphoto.com/id/2151321859/photo/portrait-of-young-belgian-shepherd-malinois-dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=nYDbWjFGmHcRA50TkHXthc7250edYt4uEbGbB0VnGxA=', name: 'Steve Jobs' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow py-16">
        <h1 className="text-3xl text-center py-4 font-bold mt-7">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-10">
          {cards.map((card) => (
            <div key={card.id} className="rounded overflow-hidden shadow-lg">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-64 object-cover"
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
