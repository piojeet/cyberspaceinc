import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is We Think AI?",
    answer:
      "We Think AI is a digital transformation partner that helps businesses leverage artificial intelligence for automation, data analytics, and smarter decision-making.",
  },
  {
    question: "How can AI help my business?",
    answer:
      "AI can optimize your workflows, predict trends, and improve customer experiences by automating repetitive tasks and generating actionable insights.",
  },
  {
    question: "Do you offer custom AI solutions?",
    answer:
      "Yes, we specialize in creating tailor-made AI systems — from chatbots and recommendation engines to predictive analytics — based on your business goals.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across multiple industries including finance, healthcare, e-commerce, marketing, and logistics — providing scalable AI solutions for each sector.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1440px] w-full lg:p-8 p-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-manrope text-center font-bold">
          Our Core AI Transformation Services
        </h2>
        <p className="font-manrope text-lg text-gray-600 text-center mt-4 max-w-[700px] mx-auto">
          Explore how AI can reshape your business with automation, insights, and innovation.
        </p>

        <div className="max-w-[800px] w-full mx-auto pt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg transition-all duration-300 border border-gray-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-5 text-left cursor-pointer focus:outline-none"
              >
                <span className="text-lg md:text-xl font-manrope font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-600" : "rotate-0 text-gray-600"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 font-manrope leading-relaxed p-5 pt-0">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
