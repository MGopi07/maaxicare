import React from "react";
import { Smartphone, Stethoscope, Users } from "lucide-react";

export default function TrustBadges() {
  const features = [
    {
      icon: Smartphone,
      titleMobile: "10L+ Customers",
      titleDesktop: "10L+ Customers",
      description: "Trust us for their health needs daily",
      bgClasses: "bg-[#f0f6ff] sm:bg-gradient-to-br sm:from-blue-50 sm:to-blue-100 sm:group-hover:from-blue-500 sm:group-hover:to-blue-600 sm:shadow-blue-200/50",
      iconClasses: "text-slate-600 sm:text-blue-600 sm:group-hover:text-white"
    },
    {
      icon: Stethoscope,
      titleMobile: "High Quality\nIngredients",
      titleDesktop: "High Quality Ingredients",
      description: "100% authentic and verified products",
      bgClasses: "bg-[#f0f6ff] sm:bg-gradient-to-br sm:from-emerald-50 sm:to-emerald-100 sm:group-hover:from-emerald-500 sm:group-hover:to-emerald-600 sm:shadow-emerald-200/50",
      iconClasses: "text-slate-600 sm:text-emerald-600 sm:group-hover:text-white"
    },
    {
      icon: Users,
      titleMobile: "Trusted by Men",
      titleDesktop: "Trusted by Men",
      description: "Recommended by healthcare experts",
      bgClasses: "bg-[#f0f6ff] sm:bg-gradient-to-br sm:from-indigo-50 sm:to-indigo-100 sm:group-hover:from-indigo-500 sm:group-hover:to-indigo-600 sm:shadow-indigo-200/50",
      iconClasses: "text-slate-600 sm:text-indigo-600 sm:group-hover:text-white"
    }
  ];

  return (
    <section className="py-6 sm:py-20 bg-white sm:bg-gradient-to-b sm:from-white sm:to-slate-50/50 relative overflow-hidden">
      {/* Subtle dotted background pattern - desktop only */}
      <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.4]"></div>
      
      <div className="container mx-auto px-2 sm:px-8 relative z-10">
        <div className="grid grid-cols-3 gap-2 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group cursor-pointer 
                           bg-transparent sm:bg-white/80 sm:backdrop-blur-sm sm:rounded-[2rem] 
                           p-1 sm:p-10 
                           shadow-none sm:shadow-[0_2px_20px_rgb(0,0,0,0.04)] sm:hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                           transition-all duration-500 
                           border-none sm:border sm:border-slate-100 sm:hover:-translate-y-2 sm:hover:border-slate-200"
              >
                {/* Icon Container */}
                <div 
                  className={`
                    w-20 h-20 sm:w-24 sm:h-24 
                    rounded-2xl sm:rounded-3xl 
                    flex items-center justify-center 
                    mb-3 sm:mb-6 
                    transition-all duration-500 
                    shadow-none sm:shadow-sm 
                    sm:group-hover:scale-110 sm:group-hover:-rotate-3 sm:group-hover:shadow-lg sm:group-hover:rounded-2xl
                    ${feature.bgClasses}
                  `}
                >
                  <IconComponent className={`h-8 w-8 sm:h-9 sm:w-9 transition-colors duration-300 ${feature.iconClasses}`} strokeWidth={1.5} />
                </div>
                
                {/* Desktop Title */}
                <h3 className="hidden sm:block text-lg sm:text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                  {feature.titleDesktop}
                </h3>
                
                {/* Mobile Title */}
                <h3 className="block sm:hidden text-[13px] leading-[1.3] font-medium text-slate-800 whitespace-pre-line px-1">
                  {feature.titleMobile}
                </h3>
                
                {/* Desktop Description */}
                <p className="hidden sm:block text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
