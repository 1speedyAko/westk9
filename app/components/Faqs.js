"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How do I teach my dog basic commands like sit, stay, and come?",
    answer: "Use positive reinforcement: say the command, lure your dog with a treat into the right position, and reward immediately. Practice consistently until it becomes second nature.",
  },
  {
    question: "How long does it take to train a dog?",
    answer: "It varies by age, breed, and training consistency. Basic commands can be learned in days to weeks, while advanced training might take months.",
  },
  {
    question: "What's the best way to potty train a dog?",
    answer: "Take your dog out regularly — especially after meals — reward them for going outside, and maintain a consistent schedule. Avoid punishment for accidents.",
  },
  {
    question: "How do I stop my dog from jumping on people?",
    answer: "Ignore the jumping behavior and reward calm greetings. Teach an alternative like sitting and reinforce it with treats and praise.",
  },
  {
    question: "How can I train my dog to walk on a leash without pulling?",
    answer: "Use a no-pull harness, stop walking when your dog pulls, and reward them for staying by your side. Keep walks structured and consistent.",
  },
  {
    question: "How do I stop my dog from barking too much?",
    answer: "Identify the trigger — boredom, excitement, or fear — teach a 'quiet' command, and reward your dog when they remain calm.",
  },
  {
    question: "Why does my dog chew on everything, and how do I stop it?",
    answer: "Chewing stems from boredom, teething, or anxiety. Provide appropriate chew toys, redirect when they chew wrong items, and offer mental stimulation.",
  },
  {
    question: "How can I stop my dog from digging in the yard?",
    answer: "Designate a specific digging area, ensure your dog gets enough exercise, and use interactive toys. If they dig to cool off, offer a shaded spot.",
  },
  {
    question: "How do I train my dog to stop begging for food?",
    answer: "Ignore begging at the table, avoid feeding from your plate, and establish a structured feeding routine with a designated spot for your dog.",
  },
  {
    question: "What should I do if my dog growls or snaps at me?",
    answer: "Don't punish your dog — growling is often a warning. Identify the trigger (fear, pain, or resource guarding) and consult a trainer if needed.",
  },
  {
    question: "Can old dogs still be trained?",
    answer: "Yes! Older dogs can learn new tricks with extra patience, consistency, and motivation such as treats or playtime.",
  },
  {
    question: "How do I socialize my puppy properly?",
    answer: "Gradually introduce your puppy to new people, other dogs, and different environments. Use positive reinforcement to build confidence and prevent fear.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left py-4 text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors duration-200 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 text-emerald-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Smooth expand/collapse using max-height transition */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-slate-400 text-sm leading-relaxed pb-5 pr-6">{answer}</p>
      </div>
    </div>
  );
}

const half = Math.ceil(faqItems.length / 2);
const leftColumn = faqItems.slice(0, half);
const rightColumn = faqItems.slice(half);

const Faq = () => {
  // Track open item per column independently: [leftOpenIndex, rightOpenIndex]
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  return (
    <div className="bg-slate-900 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Help Center</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
          <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Everything you need to know about dog training. Can&apos;t find the answer? Feel free to contact us.
          </p>
        </div>

        {/* Two-column FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* Left column */}
          <div>
            {leftColumn.map((item, i) => (
              <FaqItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openLeft === i}
                onToggle={() => setOpenLeft(openLeft === i ? null : i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div>
            {rightColumn.map((item, i) => (
              <FaqItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openRight === i}
                onToggle={() => setOpenRight(openRight === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;