"use client";

import Link from "next/link";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import medicines from "@/data/medicines.json";
import MedicineCard from "@/components/MedicineCard";

export default function WishlistPage() {
  // Mock wishlist data using some medicines
  const wishlistItems = medicines.slice(1, 4);

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-300 mb-6">
          <Heart className="h-10 w-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your wishlist is empty</h2>
        <p className="text-slate-500 mb-8 text-center max-w-md">Save items you like in your wishlist to review or buy them later.</p>
        <Link href="/medicines" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 transition-all">
          Explore Medicines
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Heart className="h-8 w-8 text-red-500 fill-red-500" /> My Wishlist
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((medicine) => (
            <div key={medicine.id} className="relative group">
              <button className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur h-8 w-8 rounded-full flex items-center justify-center text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white">
                <Trash2 className="h-4 w-4" />
              </button>
              <MedicineCard medicine={medicine as any} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
