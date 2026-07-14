"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "Are all medicines on Maaxicare genuine?",
      answer: "Yes, absolutely. We source all our medicines directly from authorized manufacturers and verified distributors to ensure 100% authenticity."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery typically takes 2-4 business days. We also offer Express Delivery which ensures your medicines reach you by the next day before 8 PM in select cities."
    },
    {
      question: "Do I need a prescription to order medicines?",
      answer: "Only for medicines marked as 'Rx Required'. You can easily upload a valid prescription during the checkout process for our pharmacists to verify."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery for damaged, defective, or incorrect items. Some medicines, due to health and safety reasons, are non-returnable."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use 256-bit encryption for all transactions. Your payment details are processed securely through our trusted payment gateways and are never stored on our servers."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-slate-600 text-center mb-12">Have a question? We're here to help.</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary shadow-md' : 'border-slate-200 shadow-sm'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 px-6 ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
