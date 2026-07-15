"use client";

import { useState } from "react";
import MedicineCard from "@/components/MedicineCard";
import { Filter, ChevronDown, Search } from "lucide-react";
import medicines from "@/data/medicines.json";
import categories from "@/data/categories.json";
import brands from "@/data/brands.json";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">All Products</h1>
            <p className="text-slate-500">Showing {medicines.length} results</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            
            <button className="md:hidden p-2 bg-white border border-slate-200 rounded-lg text-slate-600" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
              <Filter className="h-5 w-5" />
            </button>
            
            <div className="hidden md:flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg">
              <span className="text-sm text-slate-500">Sort by:</span>
              <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>New Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filter */}
          <div className={`w-full lg:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24">
              
              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                  Categories <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                      <span className="text-sm text-slate-600 hover:text-primary">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6 pt-6 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                  Price Range <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-4">
                  <input type="range" min="0" max="1000" className="w-full accent-primary" />
                  <div className="flex items-center justify-between gap-4">
                    <input type="text" placeholder="Min" className="w-full px-3 py-1.5 border border-slate-200 rounded-md text-sm" />
                    <span className="text-slate-400">-</span>
                    <input type="text" placeholder="Max" className="w-full px-3 py-1.5 border border-slate-200 rounded-md text-sm" />
                  </div>
                </div>
              </div>
              
              <div className="mb-6 pt-6 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                  Brands <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand.id} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                      <span className="text-sm text-slate-600 hover:text-primary">{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary/10 text-primary font-semibold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {medicines.map((medicine) => (
                <MedicineCard key={medicine.id} medicine={medicine as any} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">&laquo;</button>
              <button className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold">1</button>
              <button className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">2</button>
              <button className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">3</button>
              <button className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">&raquo;</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
