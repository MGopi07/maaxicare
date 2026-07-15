"use client";

import Image from "next/image";
import Link from "next/link";
import { Medicine } from "@/types";
import { ShoppingCart, Star, Heart, Activity } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function MedicineCard({ medicine }: { medicine: Medicine }) {
  const { addToCart } = useCart();
  
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col h-full relative">
      
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
        {medicine.discountPrice < medicine.price && (
          <span className="bg-red-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-sm tracking-wide">
            {Math.round(((medicine.price - medicine.discountPrice) / medicine.price) * 100)}% OFF
          </span>
        )}
        {medicine.prescriptionRequired && (
          <span className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1">
            <Activity className="w-3 h-3" /> Rx
          </span>
        )}
      </div>
      
      <button className="absolute top-3 right-3 z-20 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
        <Heart className="h-4 w-4" />
      </button>

      {/* Image */}
      <Link href={`/products/${medicine.slug}`} className="relative h-56 w-full bg-slate-50 overflow-hidden block">
        <Image 
          src={medicine.image} 
          alt={medicine.name} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
           <Link href="/products" className="text-[11px] text-primary font-bold uppercase tracking-wider hover:text-blue-700 transition-colors">
             {medicine.category}
           </Link>
           <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-600">
             <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
             <span className="text-xs font-bold">{medicine.rating}</span>
           </div>
        </div>
        
        <Link href={`/products/${medicine.slug}`} className="font-bold text-slate-900 mb-1.5 line-clamp-2 hover:text-primary transition-colors leading-snug">
          {medicine.name}
        </Link>
        
        <p className="text-xs text-slate-500 mb-4">{medicine.manufacturer}</p>
        
        <div className="mt-auto pt-4 flex items-end justify-between gap-2 border-t border-slate-100 border-dashed">
          <div>
            <div className="text-[11px] text-slate-400 font-medium mb-0.5 uppercase tracking-wider">Price</div>
            <div className="flex items-baseline gap-2">
              <div className="text-lg font-black text-slate-900">${medicine.discountPrice.toFixed(2)}</div>
              {medicine.discountPrice < medicine.price && (
                <div className="text-xs font-semibold text-slate-400 line-through">${medicine.price.toFixed(2)}</div>
              )}
            </div>
          </div>
          <button 
            onClick={(e) => { e.preventDefault(); addToCart(medicine); }}
            className="group/btn h-10 w-10 shrink-0 bg-slate-900 text-white hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
}
