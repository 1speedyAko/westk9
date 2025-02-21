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
      question: "How do I teach my dog basic commands like sit, stay, and come?",
      answer:
        "Use positive reinforcement: say the command, lure your dog with a treat into the right position, and reward immediately. Practice consistently until it becomes second nature.",
    },
    {
      question: "How long does it take to train a dog?",
      answer:
        "It varies by age, breed, and training consistency. Basic commands can be learned in days to weeks, while advanced training might take months.",
    },
    {
      question: "What’s the best way to potty train a dog?",
      answer:
        "Take your dog out regularly—especially after meals—reward them for going outside, and maintain a consistent schedule. Avoid punishment for accidents.",
    },
    {
      question: "How do I stop my dog from jumping on people?",
      answer:
        "Ignore the jumping behavior and reward calm greetings. Teach an alternative greeting like sitting and reinforce it with treats and praise.",
    },
    {
      question: "How can I train my dog to walk on a leash without pulling?",
      answer:
        "Use a no-pull harness, stop walking when your dog pulls, and reward them for staying by your side. Keep walks structured and consistent.",
    },
    {
      question: "How do I stop my dog from barking too much?",
      answer:
        "Identify the trigger—whether it's boredom, excitement, or fear—teach a 'quiet' command, and reward your dog when they remain calm.",
    },
    {
      question: "Why does my dog chew on everything, and how do I stop it?",
      answer:
        "Chewing can stem from boredom, teething, or anxiety. Provide appropriate chew toys, redirect them when they chew the wrong items, and offer mental stimulation.",
    },
    {
      question: "How can I stop my dog from digging in the yard?",
      answer:
        "Designate a specific digging area, ensure your dog gets enough exercise, and use interactive toys. If they dig to cool off, offer a shaded spot.",
    },
    {
      question: "How do I train my dog to stop begging for food?",
      answer:
        "Ignore begging at the table, avoid feeding from your plate, and establish a structured feeding routine with a designated spot for your dog.",
    },
    {
      question: "What should I do if my dog growls or snaps at me?",
      answer:
        "Don't punish your dog—growling is often a warning. Identify the trigger (fear, pain, or resource guarding) and consult a trainer if needed.",
    },
    {
      question: "How do I teach my dog to come when called?",
      answer:
        "Use a happy, encouraging tone, reward with treats and praise, and start training in low-distraction environments before moving to busier areas.",
    },
    {
      question: "How do I stop my dog from running out the door?",
      answer:
        "Teach a 'wait' or 'stay' command before opening the door, and reward your dog for staying put.",
    },
    {
      question: "Can old dogs still be trained?",
      answer:
        "Yes, older dogs can learn new tricks with extra patience, consistency, and motivation, such as treats or playtime.",
    },
    {
      question: "How do I train my dog to stop chasing things?",
      answer:
        "Work on impulse control with commands like 'leave it' and 'stay.' Use a long leash during training to maintain control and reinforce good behavior.",
    },
    {
      question: "How do I teach my dog to be calm around guests?",
      answer:
        "Exercise your dog before guests arrive, use a leash if necessary, and train a 'place' command to help them settle and remain calm.",
    },
    {
      question: "How do I socialize my puppy properly?",
      answer:
        "Gradually introduce your puppy to new people, other dogs, and different environments. Use positive reinforcement to build confidence and prevent fear.",
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