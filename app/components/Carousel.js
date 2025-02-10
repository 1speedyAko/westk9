"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useState, useEffect } from "react"

const ImageSlider = () => {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  

  const images = [
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
  ]

  return (
        <div className="w-full max-w-5xl mx-auto px-4">
        <Carousel 
        setApi={setApi}
        className="w-full"
        opts={{
            align: "start",
            loop: true,
        }}
        >
        <CarouselContent>
            {images.map((image, index) => (
            <CarouselItem key={index}>
                <div className="p-1">
                <Card className="border-0">
                    <CardContent className="relative aspect-[16/9] p-0">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg"
                        priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                        <p className="text-white text-lg font-semibold">
                        {image.caption}
                        </p>
                    </div>
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
        </div>
    </div>
      )
    }
    
    export default ImageSlider