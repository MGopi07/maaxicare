"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import MedicineCard from "./MedicineCard";
import { api } from "@/services/api";

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState<string | number>("All");
  const [medicinesData, setMedicinesData] = useState<any[]>([]);
  const [categoriesData, setCategoriesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.products.getAll(), api.categories.getAll()])
      .then(([medsRes, catsRes]) => {
        setMedicinesData(medsRes?.data || medsRes || []);
        setCategoriesData(catsRes?.data || catsRes || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const displayMedicines = activeCategory === "All" 
    ? [...medicinesData].slice(0, 4) 
    : medicinesData.filter((med: any) => {
        const catId = typeof med.category === 'object' ? med.category?.id : med.categoryId;
        return String(catId) === String(activeCategory);
      }).slice(0, 4);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-[10px] md:text-xs mb-3 md:mb-4 border border-secondary/20 shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5" />
            Trending Now
          </div>
          
          <div className="flex flex-row items-end justify-between gap-4 mb-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Best Sellers</span>
            </h2>
            
            <Link href="/products" className="group inline-flex items-center gap-1.5 md:gap-2 text-primary font-bold bg-primary/5 hover:bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 border border-primary/10 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 text-sm md:text-base shrink-0 mb-1 md:mb-0">
              <span className="hidden sm:inline">View All Products</span>
              <span className="sm:hidden">View All</span>
              <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl">
            Discover our most popular health and wellness products, chosen by our community.
          </p>
        </div>

        {/* Custom Tabs UI */}
        <div className="flex overflow-x-auto gap-2 mb-10 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          <div className="flex bg-white p-2 rounded-full border border-slate-100 shadow-[0_2px_15px_rgb(0,0,0,0.03)] w-max">
            <button
              onClick={() => setActiveCategory("All")}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative ${
                activeCategory === "All" 
                  ? "bg-primary text-white shadow-md shadow-primary/30" 
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              All
            </button>
            {categoriesData.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative ${
                    isActive 
                      ? "bg-primary text-white shadow-md shadow-primary/30" 
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-6">
          {displayMedicines.map((medicine: any, idx: number) => (
            <div 
              key={`${medicine.id}-${activeCategory}-${idx}`} 
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
