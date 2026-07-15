"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0f172a] mb-1 sm:mb-2 tracking-tight">Best Sellers</h2>
            <p className="text-slate-500 text-sm max-w-[200px] sm:max-w-none leading-snug">Browse our best sellers that matter to you</p>
          </div>
          <Link href="/medicines" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm shrink-0 mt-1 sm:mt-0">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Custom Tabs UI (Horizontally scrollable on mobile) */}
        <div className="flex overflow-x-auto gap-2 sm:gap-3 mb-8 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none' }}>
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <div key={category} className="relative shrink-0">
                <button
                  onClick={() => setActiveTab(category)}
                  className={`px-5 sm:px-7 py-2.5 rounded-lg text-[13px] sm:text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? "bg-[#1a2e4a] text-white shadow-md" 
                      : "bg-[#f4f7fb] text-[#334b6c] hover:bg-[#e6edf5]"
                  }`}
                >
                  {category}
                </button>
                {/* Active indicator triangle */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1a2e4a]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayMedicines.map((medicine: any) => (
            <div key={medicine.id} className="animate-in fade-in zoom-in-95 duration-300">
               <MedicineCard medicine={medicine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
