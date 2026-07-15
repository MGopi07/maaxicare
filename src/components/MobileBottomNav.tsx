"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, LayoutGrid, Mail, Phone, ChevronUp } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Spacer to prevent content from hiding behind the fixed bottom nav on mobile */}
      <div className="h-20 md:hidden" />

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.03)] border-t border-slate-200">
        <div className="flex justify-between items-center h-16 px-2 relative max-w-md mx-auto">

          {/* Home */}
          <Link href="/" className="flex flex-col items-center justify-center w-16 gap-1 group">
            <Home className={`h-6 w-6 transition-colors ${pathname === "/" ? "text-secondary" : "text-slate-500 group-hover:text-slate-700"}`} strokeWidth={pathname === "/" ? 2.5 : 2} />
            <span className={`text-[11px] font-medium transition-colors ${pathname === "/" ? "text-secondary" : "text-slate-500 group-hover:text-slate-700"}`}>
              Home
            </span>
          </Link>

          {/* Profile */}
          <Link href="/profile" className="flex flex-col items-center justify-center w-16 gap-1 group">
            <User className={`h-6 w-6 transition-colors ${pathname === "/profile" ? "text-secondary" : "text-slate-500 group-hover:text-slate-700"}`} strokeWidth={pathname === "/profile" ? 2.5 : 2} />
            <span className={`text-[11px] font-medium transition-colors ${pathname === "/profile" ? "text-secondary" : "text-slate-500 group-hover:text-slate-700"}`}>
              Profile
            </span>
          </Link>

          {/* Center Space for floating button */}
          <div className="w-16"></div>

          {/* Contact Us */}
          <Link href="/contact" className="flex flex-col items-center justify-center w-16 gap-1 group">
            <Mail className={`h-6 w-6 transition-colors ${pathname === "/contact" ? "text-secondary" : "text-slate-500 group-hover:text-slate-700"}`} strokeWidth={pathname === "/contact" ? 2.5 : 2} />
            <span className={`text-[11px] font-medium transition-colors ${pathname === "/contact" ? "text-secondary" : "text-slate-500 group-hover:text-slate-700"}`}>
              Contact Us
            </span>
          </Link>

          {/* Call Us */}
          <a href="tel:+91 9876543210" className="flex flex-col items-center justify-center w-16 gap-1 group">
            <Phone className="h-6 w-6 transition-colors text-slate-500 group-hover:text-slate-700" strokeWidth={2} />
            <span className="text-[11px] font-medium text-slate-500 group-hover:text-slate-700">
              Call Us
            </span>
          </a>

          {/* Floating Action Button (Our Range) */}
          <Link href="/products" className="absolute left-1/2 -translate-x-1/2 -top-[22px] flex flex-col items-center group">
            <div className="w-[60px] h-[60px] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_-3px_6px_rgba(0,0,0,0.06)] border border-slate-200 z-10 relative">
              {/* Overlay to hide the border at the bottom so it blends with navbar */}
              <div className="absolute -bottom-[2px] left-[15%] right-[15%] h-[4px] bg-white z-20"></div>

              <div className="relative z-30 flex flex-col items-center justify-center w-full h-full mt-1">
                <ChevronUp className="h-4 w-4 text-secondary -mb-1.5 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
                <LayoutGrid className={`h-[26px] w-[26px] transition-colors ${pathname === "/products" ? "text-secondary fill-secondary/20" : "text-secondary"}`} strokeWidth={1.5} />
              </div>
            </div>
            <span className={`text-[11px] font-medium mt-1.5 transition-colors ${pathname === "/products" ? "text-secondary" : "text-slate-500 group-hover:text-slate-700"}`}>
              Products
            </span>
          </Link>

        </div>
      </div>
    </>
  );
}
