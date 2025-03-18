import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Services() {
  const services = [
    {
      title: "Dog Grooming",
      image: "/cougar.JPG",
      details: "Nail clipping, Full body wash"
    },
    {
      title: "Dog Training",
      image: "/blook.JPG",
      details: "Basic to advanced training"
    },
    {
      title: "Handler Training",
      image: "/taliban.JPG",
      details: "Understanding behaviour and communication"
    },
    {
      title: "Dog Breeding",
      image: "/lookup.JPG",
      details: "Stud services, Puppy rehoming"
    }
  ];

  return (
    <div className="bg-emerald-200 py-8 w-full">
      <h1 className="text-black text-3xl text-center pb-8 font-bold">Our Services</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 px-4">
        {services.map((service, index) => (
          <Card key={index}
          className="shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-64">
              <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
            </div>
            <CardContent className="p-4 text-center">
              <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              <p className="text-black text-sm mt-2">{service.details}</p>
              <Button className="mt-4 transition duration-300 transform hover:scale-105 hover:bg-emerald-600 hover:text-white">Read More</Button>
              </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;
