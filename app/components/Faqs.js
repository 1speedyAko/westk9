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
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.",
    },
    {
      question: "How do I install Shadcn UI?",
      answer:
        "You can install Shadcn UI by following the installation instructions provided in the official documentation.",
    },
    {
      question: "Can I use Shadcn UI with other frameworks?",
      answer:
        "Yes, Shadcn UI is framework-agnostic and can be used with any React-based framework or library.",
    },
    {
      question: "Is Shadcn UI free to use?",
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