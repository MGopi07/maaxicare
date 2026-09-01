"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Search, ShoppingCart, Heart, User, Menu, X, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo (Left) */}
            <div className="flex-1 flex items-center justify-start">
              <Link href="/" className="flex items-center gap-2 group shrink-0">
                <Image 
                  src="/images/logo.png" 
                  alt="Maaxicare Logo" 
                  width={250} 
                  height={80} 
                  className="h-14 sm:h-16 w-auto object-contain" 
                  style={{ width: 'auto' }}
                  priority 
                />
              </Link>
            </div>

            {/* Desktop Navigation (Center) */}
            <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 font-medium">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className={`transition-all duration-300 relative px-2 py-1 ${
                      isActive ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions (Right) */}
            <div className="flex-1 flex items-center justify-end gap-4 lg:gap-6">
              
              <Link 
                href="/contact" 
                className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </Link>
              {/* Temporarily hidden Search Bar
              <form onSubmit={handleSearch} className="hidden lg:flex w-full max-w-xs relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </form>
              */}
              {/* Temporarily hidden as requested
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
              */}

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
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 bg-slate-50 focus:outline-none focus:border-primary transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </form>
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
            <Image 
              src="/images/logo.png" 
              alt="Maaxicare Logo" 
              width={200} 
              height={60} 
              className="h-12 sm:h-14 w-auto object-contain" 
              style={{ width: 'auto' }}
              priority 
            />
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
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-slate-700 hover:bg-primary/5 hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
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
