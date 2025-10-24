import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is We Think AI?",
    answer:
      "We Think AI is your strategic partner in AI transformation. We help enterprises design, deploy, and scale AI solutions — from strategy to governance, agents to analytics — with a focus on measurable ROI and ethical adoption.",
  },
  {
    question: "How can AI help my business?",
    answer:
      "AI automates repetitive tasks, predicts customer behavior, optimizes supply chains, detects fraud in real-time, and generates personalized content — saving costs, boosting revenue, and improving decision speed.",
  },
  {
    question: "Do you offer custom AI solutions?",
    answer:
      "Yes. We build fully custom AI systems tailored to your data, workflows, and goals — including autonomous AI agents, fine-tuned LLMs (RAG), computer vision models, and MLOps pipelines.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve Finance (fraud detection, credit scoring), Healthcare (diagnostics, patient triage), E-commerce (recommendations, churn prediction), Logistics (route optimization), and Manufacturing (predictive maintenance).",
  },
  {
    question: "How long does AI implementation take?",
    answer:
      "Timeline depends on scope:\n• Proof of Concept (POC): 2–4 weeks\n• MVP Deployment: 6–10 weeks\n• Enterprise Rollout: 3–6 months\nWe follow agile sprints with weekly demos.",
  },
  {
    question: "What’s the cost of AI consulting?",
    answer:
      "We offer flexible models:\n• Fixed-price POCs: $15K–$40K\n• Monthly retainers: $10K–$25K\n• Project-based: Quoted after discovery\nFirst AI Readiness Assessment is FREE.",
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
