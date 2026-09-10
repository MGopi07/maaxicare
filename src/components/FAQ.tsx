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
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-5 border border-primary/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Help Center
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Frequently Asked <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Questions</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium max-w-md mx-auto lg:mx-0 mb-10">
                Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our friendly support team.
              </p>
              
              <div className="hidden lg:block">
                 <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 max-w-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Email Support</h4>
                      <p className="text-sm text-slate-500">support@maaxicare.com</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-3xl transition-all duration-300 overflow-hidden border ${isOpen ? 'border-primary/20 shadow-[0_10px_30px_rgb(0,0,0,0.06)]' : 'border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-slate-200 hover:shadow-md'}`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-800 focus:outline-none group"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className={`pr-4 text-sm md:text-base transition-colors ${isOpen ? 'text-primary' : 'group-hover:text-primary'}`}>{faq.question}</span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-all duration-500 ${isOpen ? 'bg-primary text-white rotate-180 shadow-sm shadow-primary/30' : 'bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="p-5 md:p-6 pt-0 md:pt-0 text-slate-500 leading-relaxed text-sm font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
