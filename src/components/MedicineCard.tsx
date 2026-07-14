"use client";

import Image from "next/image";
import Link from "next/link";
import { Medicine } from "@/types";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function MedicineCard({ medicine }: { medicine: Medicine }) {
  const { addToCart } = useCart();
  
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full relative">
      
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {medicine.discountPrice < medicine.price && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
            {Math.round(((medicine.price - medicine.discountPrice) / medicine.price) * 100)}% OFF
          </span>
        )}
        {medicine.prescriptionRequired && (
          <span className="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wider">
            Rx Required
          </span>
        )}
      </div>
      
      <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm opacity-0 group-hover:opacity-100">
        <Heart className="h-4 w-4" />
      </button>

      {/* Image */}
      <Link href={`/medicines/${medicine.slug}`} className="relative h-48 w-full bg-slate-50 flex items-center justify-center p-4">
        <Image 
          src={medicine.image} 
          alt={medicine.name} 
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/categories/${medicine.categoryId}`} className="text-xs text-primary font-medium mb-1 hover:underline">
          {medicine.category}
        </Link>
        <Link href={`/medicines/${medicine.slug}`} className="font-bold text-slate-800 mb-1 line-clamp-2 hover:text-primary transition-colors">
          {medicine.name}
        </Link>
        <p className="text-xs text-slate-500 mb-3">{medicine.manufacturer}</p>
        
        <div className="flex items-center gap-1 mb-4">
          <div className="flex items-center text-yellow-400">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-bold text-slate-700 ml-1">{medicine.rating}</span>
          </div>
          <span className="text-xs text-slate-400">({medicine.reviewsCount})</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900">${medicine.discountPrice.toFixed(2)}</div>
            {medicine.discountPrice < medicine.price && (
              <div className="text-xs text-slate-400 line-through">${medicine.price.toFixed(2)}</div>
            )}
          </div>
          <button 
            onClick={() => addToCart(medicine)}
            className="h-10 w-10 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
