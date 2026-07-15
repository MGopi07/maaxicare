import React from "react";
import { Smartphone, Stethoscope, Users } from "lucide-react";

export default function TrustBadges() {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-[#2b4c7e]" strokeWidth={1.5} />,
      title: "10L+ Customers",
    },
    {
      icon: <Stethoscope className="h-6 w-6 sm:h-8 sm:w-8 text-[#2b4c7e]" strokeWidth={1.5} />,
      title: "Genuine Medicines",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#2b4c7e]" strokeWidth={1.5} />,
      title: "Trusted by Doctors",
    }
  ];

  return (
    <section className="py-6 sm:py-10 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-row items-start justify-center gap-4 sm:gap-12 md:gap-20">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group w-[30%] sm:w-auto">
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#f0f6ff] rounded-2xl sm:rounded-3xl flex items-center justify-center mb-3 sm:mb-4 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-[10px] sm:text-sm md:text-base font-semibold text-slate-800 leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
