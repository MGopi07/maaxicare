import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import MedicineCard from "@/components/MedicineCard";
import BrandCard from "@/components/BrandCard";
import BestSellers from "@/components/BestSellers";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

// Mock Data Imports
import categories from "@/data/categories.json";
import medicines from "@/data/medicines.json";
import brands from "@/data/brands.json";
import healthTips from "@/data/healthTips.json";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <TrustBadges />

      {/* Shop by Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Shop by Category</h2>
            <Link href="/categories" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <BestSellers />

      {/* Discount Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#f4f7ff] rounded-[2.5rem] p-8 lg:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden border border-blue-50/80">
            {/* Bright Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-gradient-to-br from-blue-300/30 to-indigo-300/30 blur-[80px]" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-gradient-to-tr from-emerald-300/30 to-teal-300/30 blur-[80px]" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            </div>

            <div className="relative z-10 max-w-xl text-center md:text-left mb-10 md:mb-0 md:pr-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100 mb-6 text-blue-700 font-semibold text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Limited Time Offer
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 leading-[1.15] tracking-tight">
                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">20% Off</span> on<br/> Your First Order!
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                Start your health journey today. Use code <span className="font-bold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200/50 mx-1">HEALTH20</span> at checkout to claim your discount.
              </p>
              
              <Link href="/medicines" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-full shadow-[0_8px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative z-10 w-full max-w-sm md:max-w-none md:w-[45%] flex justify-center md:justify-end">
               <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                 {/* Main Image Container */}
                 <div className="absolute inset-0 rounded-[2.5rem] rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border-[8px] border-white shadow-2xl group cursor-pointer z-10">
                   <Image src="/images/discount-banner.jpg" alt="Special Offer" fill sizes="(max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
                 
                 {/* Floating Elements */}
                 <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '4s' }}>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                       ✓
                     </div>
                     <div>
                       <p className="text-xs text-slate-500 font-medium">Genuine</p>
                       <p className="text-sm font-bold text-slate-800">Medicines</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="absolute -top-4 -right-4 z-0 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands (Slider) */}
      <section className="py-16 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 border-y border-blue-100/50 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Trusted Partners</h2>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-4 py-4 w-max hover:[animation-play-state:paused]">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <BrandCard key={`${brand.id}-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Health Tips */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Health Tips & Articles</h2>
            <Link href="/blog" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTips.map((tip) => (
              <div key={tip.id} className="group cursor-pointer bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600 transition-all p-4 rounded-3xl">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-sm">
                  <Image src={tip.image} alt={tip.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-xs text-cyan-400 font-medium mb-2 px-1">{tip.date}</div>
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors text-lg px-1">{tip.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed px-1">{tip.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

    </div>
  );
}
