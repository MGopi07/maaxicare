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
          <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-xl text-center md:text-left mb-6 md:mb-0">
              <span className="uppercase tracking-wider text-sm font-bold bg-white/20 px-3 py-1 rounded-full inline-block mb-4">Limited Time Offer</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get 20% Off on Your First Order!</h2>
              <p className="text-blue-100 text-lg">Use code <span className="font-bold text-white bg-black/20 px-2 py-1 rounded">HEALTH20</span> at checkout.</p>
            </div>
            
            <Link href="/medicines" className="relative z-10 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Brands (Slider) */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
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
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Health Tips & Articles</h2>
            <Link href="/blog" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTips.map((tip) => (
              <div key={tip.id} className="group cursor-pointer">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-sm">
                  <Image src={tip.image} alt={tip.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-xs text-primary font-medium mb-2">{tip.date}</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{tip.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2">{tip.excerpt}</p>
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
