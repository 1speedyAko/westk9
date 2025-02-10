'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Card, CardContent } from "@/components/ui/card";

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const slides = [
    {
      src: "https://media.istockphoto.com/id/2151321859/photo/portrait-of-young-belgian-shepherd-malinois-dog.jpg?s=612x612&w=0&k=20&c=6GVtDg_kv0vFlPVUFy65LaTmFFjvg97ojw0eHXbVic4=",
      alt: "Slide 1",
      caption: "Beautiful landscape",
    },
    {
      src: "https://media.istockphoto.com/id/2159498034/photo/purebred-german-shepherd-jumps-and-runs-on-the-meadow.jpg?s=612x612&w=0&k=20&c=j3_4HRObX9kzgr7e3hbebNVipsFoDL9VxNJ9fTPYZl8=",
      alt: "Slide 2",
      caption: "City skyline",
    },
    {
      src: "https://media.istockphoto.com/id/2168021262/photo/close-up-of-dogs-resting-at-park.jpg?s=612x612&w=0&k=20&c=d3TflLZVU-vIw_hDuojhGfCkeQ98AiAmhrGspzmcNhM=",
      alt: "Slide 3",
      caption: "Mountain view",
    },
    {
      src: "https://media.istockphoto.com/id/1313232209/photo/brown-chihuahua-sitting-on-floor-small-dog-in-asian-house-feeling-happy-and-relax-dog.jpg?s=612x612&w=0&k=20&c=lcSklrJbafwStJzKqU68imMG77hlEoCOkCCUeb_TEFk=",
      alt: "Slide 4",
      caption: "Ocean sunset",
    },
  ];

  return (
    <div ref={sliderRef} className="keen-slider max-w-lg mx-auto">
      {slides.map(({ src, alt, caption }, index) => (
        <Card key={index} className="keen-slider__slide">
          <CardContent className="p-0 relative">
            <img src={src} alt={alt} className="w-full h-auto rounded-2xl" />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
              {caption}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
