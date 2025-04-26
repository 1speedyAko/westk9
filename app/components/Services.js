import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Services() {
  const services = [
    {
      title: "Dog Grooming",
      image: "/cougar.JPG",
      details: "Nail clipping, Full body wash",
      route: "/dog-grooming",
    },
    {
      title: "Dog Training",
      image: "/blook.JPG",
      details: "Basic to advanced training",
      route: "/dog-training",
    },
    {
      title: "Handler Training",
      image: "/taliban.JPG",
      details: "Understanding behaviour and communication",
      route: "/handler-training",
    },
    {
      title: "Dog Breeding",
      image: "/lookup.JPG",
      details: "Stud services, Puppy rehoming",
      route: "/dog-breeding",
    },
  ];

  return (
    <div className="bg-slate-800 py-8 w-full">
      <h1 className="text-emerald-400 text-3xl text-center pb-8 font-bold">Our Services</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 px-4">
        {services.map((service, index) => (
          <Card key={index} className="shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative w-full h-64">
              <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
            </div>
            <CardContent className="p-4 text-center">
              <CardTitle className="text-white text-xl font-bold">{service.title}</CardTitle>
              <p className="text-white text-sm mt-2">{service.details}</p>
              <Link href={service.route}>
                <Button className="text-white mt-4 transition duration-300 transform hover:scale-105 hover:bg-emerald-600 hover:text-white">
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;
