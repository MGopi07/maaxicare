"use client";

import React, { useRef } from 'react';
import ReviewCard from './ReviewCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: "r1",
    name: "Sarah Jenkins",
    rating: 5,
    text: "Maaxicare has completely changed how I get my prescriptions. The delivery is incredibly fast, and the packaging is always secure. I love the discounts!",
    date: "2 days ago"
  },
  {
    id: "r2",
    name: "David Chen",
    rating: 5,
    text: "Finding genuine medicines online used to be a worry for me, but the verified products and excellent customer service here have won my complete trust.",
    date: "1 week ago"
  },
  {
    id: "r3",
    name: "Emily Rodriguez",
    rating: 4,
    text: "The website is so easy to use, especially on my phone. The only reason for 4 stars is that I wish they had a few more organic skincare brands.",
    date: "2 weeks ago"
  },
  {
    id: "r4",
    name: "Michael Chang",
    rating: 5,
    text: "Excellent selection of vitamins and supplements. The prices are unbeatable and I appreciate the fast shipping. Highly recommend!",
    date: "3 weeks ago"
  },
  {
    id: "r5",
    name: "Jessica Alverez",
    rating: 5,
    text: "I was skeptical about ordering medications online at first, but Maaxicare made the process seamless and stress-free. Very reliable.",
    date: "1 month ago"
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by one card width (approximate, using clientWidth of container divided by visible items could work, or just container width)
      // Since it snaps, scrolling by clientWidth / 2 ensures it moves nicely.
      const scrollAmount = current.clientWidth > 768 ? current.clientWidth / 2 : current.clientWidth;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-slate-500">Don't just take our word for it. Join thousands of satisfied customers who trust us with their healthcare needs.</p>
          </div>
          <div className="hidden md:flex gap-3 shrink-0">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {reviews.map(review => (
              <div 
                key={review.id} 
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center md:snap-start"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex md:hidden justify-center gap-4 mt-2">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
}
