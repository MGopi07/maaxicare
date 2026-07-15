"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import MedicineCard from "./MedicineCard";
import medicinesData from "@/data/medicines.json";

const categories = ["Nutrition", "Hair", "Beard", "Performance", "Hygiene", "Skin"];

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState("Nutrition");

  // Deterministic filtering: shift the array based on the active tab index 
  // to show UI changes without causing hydration errors (no Math.random() in render).
  const tabIndex = categories.indexOf(activeTab);
  const displayMedicines = [...medicinesData]
    .slice(tabIndex * 2)
    .concat([...medicinesData])
    .slice(0, 5);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs mb-4 border border-blue-100 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Trending Now
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Best Sellers</h2>
            <p className="text-slate-500 text-base md:text-lg">Discover our most popular health and wellness products, chosen by our community.</p>
          </div>
          <Link href="/medicines" className="group inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl hover:border-primary hover:text-primary hover:shadow-md transition-all text-sm shrink-0">
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Custom Tabs UI */}
        <div className="flex overflow-x-auto gap-2 mb-10 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          <div className="flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60 w-max shadow-sm">
            {categories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                    isActive 
                      ? "text-slate-900 shadow-sm bg-white" 
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-6">
          {displayMedicines.map((medicine: any, idx: number) => (
            <div 
              key={`${medicine.id}-${activeTab}-${idx}`} 
              className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
              style={{ animationDelay: `${idx * 75}ms` }}
            >
               <MedicineCard medicine={medicine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
