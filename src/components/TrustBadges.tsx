import React from "react";
import { Smartphone, Stethoscope, Users } from "lucide-react";

export default function TrustBadges() {
  const features = [
    {
      icon: Smartphone,
      titleMobile: "10L+ Customers",
      titleDesktop: "10L+ Customers",
      description: "Trust us for their health needs daily",
      bgClasses: "bg-primary/5 sm:bg-gradient-to-br sm:from-primary/10 sm:to-primary/20 sm:group-hover:from-primary sm:group-hover:to-primary-dark sm:shadow-primary/50",
      iconClasses: "text-primary sm:group-hover:text-white"
    },
    {
      icon: Stethoscope,
      titleMobile: "High Quality\nIngredients",
      titleDesktop: "High Quality Ingredients",
      description: "100% authentic and verified products",
      bgClasses: "bg-secondary/5 sm:bg-gradient-to-br sm:from-secondary/10 sm:to-secondary/20 sm:group-hover:from-secondary sm:group-hover:to-secondary-dark sm:shadow-secondary/50",
      iconClasses: "text-secondary sm:group-hover:text-white"
    },
    {
      icon: Users,
      titleMobile: "Trusted by Men",
      titleDesktop: "Trusted by Men",
      description: "Recommended by healthcare experts",
      bgClasses: "bg-primary/5 sm:bg-gradient-to-br sm:from-primary/10 sm:to-primary/20 sm:group-hover:from-primary sm:group-hover:to-primary-dark sm:shadow-primary/50",
      iconClasses: "text-primary sm:group-hover:text-white"
    }
  ];

  return (
    <section className="py-6 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      
      {/* Subtle dotted background pattern - desktop only */}
      <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(theme(colors.primary.DEFAULT)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-3 gap-3 sm:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group cursor-pointer relative
                           bg-transparent sm:bg-white sm:rounded-[2.5rem] 
                           p-2 sm:p-12 
                           shadow-none sm:shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] 
                           transition-all duration-500 
                           border-none sm:border sm:border-slate-100 sm:hover:-translate-y-3 sm:hover:border-primary/20"
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
