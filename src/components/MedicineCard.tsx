"use client";

import Image from "next/image";
import Link from "next/link";
import { Medicine } from "@/types";
import { ShoppingCart, Star, Heart, Activity } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function MedicineCard({ medicine }: { medicine: Medicine }) {
  const { addToCart } = useCart();
  
  if (!medicine) return null;
  
  const price = Number(medicine.price) || 0;
  const offerPriceRaw = medicine.offer_price ?? medicine.discount_price ?? medicine.discountPrice;
  const discountPrice = offerPriceRaw != null ? Number(offerPriceRaw) : price;
  const hasDiscount = discountPrice < price && price > 0;
  
  return (
    <div className="group bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col h-full relative">
      
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {hasDiscount && (
          <span className="bg-gradient-to-r from-rose-500 to-red-600 text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-md shadow-red-500/20 tracking-wide border border-white/20 backdrop-blur-md">
            {Math.round(((price - discountPrice) / price) * 100)}% OFF
          </span>
        )}
        {medicine.prescriptionRequired && (
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1 border border-white/10">
            <Activity className="w-3 h-3 text-blue-400" /> Rx Only
          </span>
        )}
      </div>

      {/* Image */}
      <Link href={`/products/${medicine.slug}`} className="relative h-60 w-full bg-slate-50/50 overflow-hidden block rounded-t-[1.5rem]">
        <Image 
          src={medicine.image} 
          alt={medicine.name} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
          unoptimized
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Rating Badge on Hover */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xl shadow-black/5 border border-white/50 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
            <span className="text-xs font-bold text-slate-700">{medicine.rating}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-slate-50/30">
        <div className="flex items-center justify-between mb-3.5">
           <Link href="/products" className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/5 text-[10px] text-primary font-black uppercase tracking-widest hover:bg-primary/10 transition-colors">
             {medicine.category && typeof medicine.category === 'object' ? medicine.category.name : medicine.category}
           </Link>
           {/* Static Rating (Fades out on hover when floating badge appears) */}
           <div className="flex items-center gap-1 text-amber-500 group-hover:opacity-0 transition-opacity duration-300">
             <Star className="h-3.5 w-3.5 fill-amber-400" />
             <span className="text-xs font-bold text-slate-700">{medicine.rating}</span>
           </div>
        </div>
        
        <Link href={`/products/${medicine.slug}`} className="text-[1.1rem] font-bold text-slate-900 mb-1.5 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
          {medicine.name}
        </Link>
        
        <p className="text-sm text-slate-500 mb-6 font-medium">{medicine.manufacturer}</p>
        
        <div className="mt-auto pt-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 border-t border-slate-200/60">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-slate-400 font-bold mb-0.5 uppercase tracking-widest">Price</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-xl font-black text-slate-900 tracking-tight">${discountPrice.toFixed(2)}</span>
              {hasDiscount && (
                <span className="text-xs font-semibold text-slate-400 line-through decoration-slate-300">${price.toFixed(2)}</span>
              )}
            </div>
          </div>
          
          <Link 
            href={`/products/${medicine.slug}`}
            className="group/btn relative h-10 px-4 shrink-0 bg-slate-900 text-white text-sm font-bold rounded-xl flex items-center justify-center overflow-hidden shadow-md shadow-slate-900/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-1.5 whitespace-nowrap">
              Buy Now
              <ShoppingCart className="w-3.5 h-3.5 translate-x-0 opacity-70 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
