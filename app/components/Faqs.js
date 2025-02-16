// components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      question: "How long does it take to teach basic obedience ?",
      answer:
        "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.",
    },
    {
      question: "How much does it cost to have my dog trained ?",
      answer:
        "You can install Shadcn UI by following the installation instructions provided in the official documentation.",
    },
    {
      question: "What are the best and healthy meals for my dog ?",
      answer:
        "Yes, Shadcn UI is framework-agnostic and can be used with any React-based framework or library.",
    },
    {
      question: "Is regular exercise important for my dog ?",
      answer:
        "Yes, Shadcn UI is open-source and free to use under the MIT license.",
    },
  ];

  return (
    <div className="bg-slate-900">
      <h2 className=" text-center text-2xl font-bold text-neutral-300">FAQs</h2>
    <Accordion type="single" collapsible className="w-full px-4">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg text-neutral-300">{item.question}</AccordionTrigger>
          <AccordionContent className="text-neutral-300">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
   
  );
};
export default Faq