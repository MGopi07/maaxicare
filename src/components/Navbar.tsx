"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, Heart, User, Menu, X, Pill } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            <div className="flex items-center gap-8 xl:gap-12">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group shrink-0">
                <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Pill className="h-6 w-6 text-primary" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Maaxicare
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-slate-600 shrink-0">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <Link href="/medicines" className="hover:text-primary transition-colors">Medicines</Link>
                <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                <Link href="/offers" className="text-secondary hover:text-secondary-dark transition-colors">Offers</Link>
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              </nav>
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
              <input
                type="text"
                placeholder="Search for medicines, health products..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 lg:gap-6">
              <Link href="/wishlist" className="hidden sm:flex flex-col items-center text-slate-600 hover:text-primary transition-colors">
                <Heart className="h-5 w-5" />
                <span className="text-[10px] font-medium mt-1">Wishlist</span>
              </Link>
              
              <Link href="/cart" className="flex flex-col items-center text-slate-600 hover:text-primary transition-colors relative">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium mt-1 hidden sm:block">Cart</span>
              </Link>

              <Link href="/login" className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-sm shadow-primary/30">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar (Visible only on mobile) */}
          <div className="lg:hidden pb-4 pt-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 bg-slate-50 focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Off-Canvas Mobile Menu Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 w-[280px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Pill className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Maaxicare
            </span>
          </Link>
          <button 
            className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          <Link href="/" className="px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-xl font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/medicines" className="px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-xl font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Medicines</Link>
          <Link href="/products" className="px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-xl font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link href="/offers" className="px-4 py-3 text-secondary hover:bg-secondary/5 rounded-xl font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Offers</Link>
          <Link href="/about" className="px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-xl font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        </nav>
        
        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <Link href="/login" className="w-full bg-primary text-white px-4 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-sm shadow-primary/30" onClick={() => setIsMobileMenuOpen(false)}>
            <User className="h-5 w-5" />
            Login / Register
          </Link>
        </div>
      </div>
    </>
  );
}
