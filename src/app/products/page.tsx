import React from "react";
import MedicineCard from "@/components/MedicineCard";
import CategoryCard from "@/components/CategoryCard";
import medicines from "@/data/medicines.json";
import categories from "@/data/categories.json";

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">All Products</h1>
          <p className="text-slate-600">
            Browse our complete catalog of premium health, wellness, and medical products.
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* All Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">All Products</h2>
            <div className="text-sm text-slate-500 font-medium">{medicines.length} items</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {medicines.map((medicine: any) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
