"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, ShoppingCart, Heart, ChevronRight } from "lucide-react";
import medicines from "@/data/medicines.json";
import { useCart } from "@/context/CartContext";
import MedicineCard from "@/components/MedicineCard";

export default function MedicineDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  
  const medicine = medicines.find((m) => m.slug === slug);
  
  if (!medicine) {
    notFound();
  }
  
  const relatedMedicines = medicines.filter(m => m.categoryId === medicine.categoryId && m.id !== medicine.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(medicine as any, quantity);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/categories/${medicine.categoryId}`} className="hover:text-primary">{medicine.category}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-800 font-medium">{medicine.name}</span>
        </div>

        <div className="bg-white rounded-3xl p-6 lg:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Image Gallery */}
            <div>
              <div className="relative h-80 lg:h-[500px] w-full bg-slate-50 rounded-2xl flex items-center justify-center p-8 mb-4 border border-slate-100">
                {medicine.prescriptionRequired && (
                  <span className="absolute top-4 left-4 bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wider z-10">
                    Rx Required
                  </span>
                )}
                <Image 
                  src={medicine.image} 
                  alt={medicine.name} 
                  fill 
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="flex gap-4">
                <button className="h-20 w-20 rounded-xl bg-slate-50 border-2 border-primary overflow-hidden relative">
                  <Image src={medicine.image} alt="Thumbnail 1" fill sizes="80px" className="object-contain p-2" />
                </button>
                <button className="h-20 w-20 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden relative opacity-70 hover:opacity-100">
                  <Image src={medicine.image} alt="Thumbnail 2" fill sizes="80px" className="object-contain p-2" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm text-primary font-medium">{medicine.manufacturer}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{medicine.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full text-yellow-700">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  <span className="font-bold text-sm">{medicine.rating}</span>
                </div>
                <span className="text-slate-500 text-sm hover:underline cursor-pointer">{medicine.reviewsCount} Ratings & Reviews</span>
              </div>
              
              <div className="mb-8">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-4xl font-bold text-slate-900">${medicine.discountPrice.toFixed(2)}</span>
                  {medicine.discountPrice < medicine.price && (
                    <>
                      <span className="text-xl text-slate-400 line-through mb-1">${medicine.price.toFixed(2)}</span>
                      <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded mb-1">
                        {Math.round(((medicine.price - medicine.discountPrice) / medicine.price) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs text-slate-500">Inclusive of all taxes</p>
              </div>

              {/* Add to Cart Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-10 pt-8 border-t border-slate-100">
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary hover:bg-primary-dark text-white h-12 rounded-full font-bold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                
                <button className="h-12 w-12 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-slate-50 p-6 rounded-2xl">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">100% Genuine</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm">
                    <RotateCcw className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Easy Returns</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Info Tabs */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div className="flex overflow-x-auto border-b border-slate-100 hide-scrollbar">
            {['description', 'ingredients', 'how-to-use', 'side-effects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-5 font-medium text-sm whitespace-nowrap transition-colors relative ${
                  activeTab === tab 
                    ? "text-primary" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>
                )}
              </button>
            ))}
          </div>
          <div className="p-8 lg:p-12 text-slate-600 leading-relaxed max-w-4xl">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Product Overview</h3>
                <p className="mb-6">{medicine.description}</p>
                <h4 className="font-semibold text-slate-900 mb-2">Key Benefits</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {medicine.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Active Ingredients</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  {medicine.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "how-to-use" && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">How to Use</h3>
                <p className="mb-6">{medicine.howToUse}</p>
                <h4 className="font-semibold text-slate-900 mb-2">Recommended Dosage</h4>
                <p className="bg-slate-50 p-4 rounded-lg border border-slate-100 inline-block">{medicine.dosage}</p>
              </div>
            )}
            {activeTab === "side-effects" && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Possible Side Effects</h3>
                <p className="mb-4">While generally safe, you may experience some of the following side effects. Consult a doctor if they persist.</p>
                <ul className="list-disc pl-5 space-y-2">
                  {medicine.sideEffects.map((effect, i) => (
                    <li key={i}>{effect}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Medicines */}
        {relatedMedicines.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedMedicines.map((m) => (
                <MedicineCard key={m.id} medicine={m as any} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
