import { cn } from "@/cn";
import { MultilayerCardV_1 } from "./comments";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from 'lucide-react';


const testimonialData = [
  {
    name: "Fred O.",
    testimonial:
      "Life-Changing Training! WestK9 transformed my dog's behavior in just a few sessions! He used to be shy and timid, now he is confident and very obedient. Recommend!",
    imageUrl: "/path/to/fred-image.jpg",
  },
  {
    name: "Mark O.",
    testimonial:
      "Best Decision Ever! Our rescue dog had severe anxiety, but thanks to WestK9, he's now confident and well-behaved. The trainers truly care and work wonders!",
    imageUrl: "/path/to/marko-image.jpg",
  },
  {
    name: "Edgar N.",
    testimonial:
      "Professional & Effective! WestK9’s positive reinforcement methods worked like magic. My puppy learned commands quickly, and the training sessions were fun and engaging!",
    imageUrl: "/path/to/edgar-image.jpg",
  },
  {
    name: "kennedy M.",
    testimonial:
      "Amazing Results! I was struggling with my dog’s aggression issues, but WestK9’s expert trainers gave me the tools and confidence to manage him. Huge difference!",
    imageUrl: "/path/to/kennedy-image.jpg",
  },
  {
    name: "Ann M.",
    testimonial:
      "Highly Recommend! WestK9 helped us train our stubborn Rottweiller. Now, she listens, walks nicely, and even enjoys socializing with other dogs. Best investment ever!",
    imageUrl: "/path/to/ann-image.jpg",
  },
];


const CardBody = ({ className = "", title, description }) => (
  <div className={cn(className)}>
    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-400">{description}</p>
  </div>
);

const TestimonialCard = ({ testimonial, name, imageUrl, className = "" }) => (
  <div className={`p-8 rounded-xl shadow-xl bg-slate-900 dark:bg-gray-800 transform transition hover:scale-105 ${className}`}>
    <div className="flex items-center mb-6">
      {/* Uncomment and update the image if you decide to use it */}
      {/* {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      )} */}
      <div className="ml-4">
        <p className="text-xl font-semibold text-neutral-300 dark:text-gray-100">
          {name}
        </p>
      </div>
    </div>
    <div className="relative">
      <Quote size={64} className="absolute -top-4 -left-4 text-neutral-200 opacity-20" />
      <p className="pl-16 italic text-neutral-300 dark:text-gray-300 leading-relaxed">
        {testimonial}
      </p>
    </div>
  </div>
);


const Testimonials = () => {
  return (
    <div className="py-20 bg-slate-950 dark:bg-zinc-900">
      <h2 className="text-3xl text-center font-bold text-neutral-300 dark:text-gray-100 mb-10">
        What Our Clients Say
      </h2>

      {/* Moved the Carousel to wrap all items */}
      <Carousel className="max-w-4xl mx-auto ">
        <CarouselContent>
          {testimonialData.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-1/3 gap-4">
              <MultilayerCardV_1 className="text-neutral-300">
                <TestimonialCard
                  testimonial={testimonial.testimonial}
                  name={testimonial.name}
                  // imageUrl={testimonial.imageUrl}
                  className="px-6 py-10 relative mx-auto text-neutral-300 rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
                />
              </MultilayerCardV_1>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-neutral-300"/>
        <CarouselNext className="text-neutral-300" />
      </Carousel>
    </div>
  );
};

export default Testimonials;
