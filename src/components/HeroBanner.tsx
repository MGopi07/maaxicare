import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 translate-x-20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              <ShieldCheck className="h-4 w-4" />
              <span>100% Genuine Medicines</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Your Trusted <br/>
              <span className="text-primary">Online Pharmacy</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Get authentic medicines, health products, and vitamins delivered straight to your door. Fast, secure, and reliable service you can count on.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/medicines" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/medicines" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all shadow-sm">
                Upload Prescription
              </Link>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-secondary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80" 
              alt="Pharmacy Delivery" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
