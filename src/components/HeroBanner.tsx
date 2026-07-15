"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Users, Smartphone } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "NEW",
    title1: "Premium for",
    title2: "Daily Health",
    subtitle: "Complete Performance & Recovery Supplement",
    buttonText: "SHOP NOW",
    buttonLink: "/categories/vitamins",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80",
    bgClass: "bg-gradient-to-br from-[#fcf5ef] to-[#f4e2d3]",
    splashColor: "bg-orange-500",
  },
  {
    id: 2,
    tag: "OFFER",
    title1: "20% Off on",
    title2: "All Medicines",
    subtitle: "Genuine medicines delivered securely to your door.",
    buttonText: "ORDER NOW",
    buttonLink: "/medicines",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80",
    bgClass: "bg-gradient-to-br from-[#f0f7ff] to-[#dbeafe]",
    splashColor: "bg-blue-500",
  },
  {
    id: 3,
    tag: "DISCOUNT",
    title1: "Advanced",
    title2: "Personal Care",
    subtitle: "Up to 30% off on premium skincare and grooming.",
    buttonText: "EXPLORE",
    buttonLink: "/categories/personal-care",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    bgClass: "bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]",
    splashColor: "bg-emerald-500",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white pb-12 pt-6">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Slider Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm h-[380px] sm:h-[400px] lg:h-[480px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              } ${slide.bgClass}`}
            >
              <div className="relative w-full h-full flex items-center justify-between">
                
                {/* Text Content */}
                <div className="relative z-20 flex flex-col justify-center px-8 sm:px-12 lg:px-24 w-full sm:w-1/2 lg:w-[55%]">
                  <div className="bg-[#e1251b] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-sm w-fit mb-4 sm:mb-5 uppercase tracking-wider">
                    {slide.tag}
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-4 tracking-tight">
                    <span className="font-light">{slide.title1}</span> <br/>
                    <span className="font-extrabold">{slide.title2}</span>
                  </h2>
                  
                  <p className="text-slate-700 text-sm sm:text-[15px] font-medium mb-8 max-w-[260px] sm:max-w-[320px] leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  <Link
                    href={slide.buttonLink}
                    className="bg-white text-slate-900 font-extrabold text-[12px] sm:text-[13px] tracking-wide px-8 py-3.5 rounded-full w-fit hover:scale-105 transition-transform shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] uppercase"
                  >
                    {slide.buttonText}
                  </Link>
                </div>

                {/* Styled Product Image Section */}
                <div className="absolute right-[-10%] sm:right-4 lg:right-20 top-1/2 -translate-y-1/2 w-[300px] sm:w-[350px] lg:w-[450px] h-[300px] sm:h-[350px] lg:h-[450px] z-10 pointer-events-none opacity-60 sm:opacity-100 flex items-center justify-center">
                  
                  {/* Dynamic Splash/Glow behind the product */}
                  <div className={`absolute w-[80%] h-[80%] ${slide.splashColor} opacity-20 blur-3xl rounded-full`}></div>
                  <div className={`absolute w-[60%] h-[60%] ${slide.splashColor} opacity-30 blur-2xl rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] animate-pulse`}></div>
                  
                  {/* Circular Fade Mask for Unsplash Placeholders (no harsh rectangular edges!) */}
                  <div className="relative w-[85%] h-[85%]" style={{ WebkitMaskImage: "radial-gradient(circle, black 45%, transparent 70%)", maskImage: "radial-gradient(circle, black 45%, transparent 70%)" }}>
                    <Image
                      src={slide.image}
                      alt={slide.title2}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      priority={index === 0}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-6 bg-slate-800" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>


      </div>
    </div>
  );
}
