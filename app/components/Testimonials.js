import { cn } from "@/cn";
import { MultilayerCardV_1 } from "./comments";

const testimonialData = [
  {
    name: "John Doe",
    testimonial: "This is an amazing service! Highly recommended.",
    imageUrl: "/path/to/john-image.jpg",
  },
  {
    name: "Jane Smith",
    testimonial: "A game changer for our team. We've seen great results!",
    imageUrl: "/path/to/jane-image.jpg",
  },
  {
    name: "Mark Johnson",
    testimonial: "The best decision I made for my business. 10/10.",
    imageUrl: "/path/to/mark-image.jpg",
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
  <CardBody
    className={className}
    title={name} // passing name as title
    description={testimonial} // passing testimonial as description
  >
    <div className="flex items-center space-x-4 mb-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </p>
      </div>
    </div>
  </CardBody>
);

const Testimonials = () => {
  return (
    <div className="py-20 bg-slate-950 dark:bg-zinc-900">
      <h2 className="text-3xl text-center font-bold text-neutral-300 dark:text-gray-100 mb-10">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-10 px-6">
        {testimonialData.map((testimonial, index) => (
          <MultilayerCardV_1 key={index}>
            <TestimonialCard
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              imageUrl={testimonial.imageUrl}
              className="px-6 py-10 relative mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
            />
          </MultilayerCardV_1>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
