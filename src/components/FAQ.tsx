"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Are your medicines genuine?",
    answer: "Yes, absolutely. We source all our medicines directly from authorized manufacturers and verified distributors. Every product undergoes strict quality checks."
  },
  {
    question: "How fast is the delivery?",
    answer: "We offer express delivery within 24-48 hours for most major cities. Standard delivery takes 3-5 business days depending on your location."
  },
  {
    question: "Do I need a prescription to order?",
    answer: "Only for prescription-only medicines (Rx). You can easily upload a valid prescription during checkout, and our pharmacists will verify it before processing your order."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 7 days of delivery for unopened, undamaged products. However, temperature-controlled medicines and opened products cannot be returned for safety reasons."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500">Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${isOpen ? 'border-primary/30 bg-primary/5 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-5 pt-0 text-slate-600 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
