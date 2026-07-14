import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import MedicineCard from "@/components/MedicineCard";
import BrandCard from "@/components/BrandCard";

// Mock Data Imports
import categories from "@/data/categories.json";
import medicines from "@/data/medicines.json";
import brands from "@/data/brands.json";
import healthTips from "@/data/healthTips.json";

export default function Home() {
  return (
    <div>
      <HeroBanner />

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

      {/* Featured Medicines */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Featured Medicines</h2>
            <Link href="/medicines" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {medicines.slice(0, 5).map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine as any} />
            ))}
          </div>
        </div>
      </section>

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
          <div className="flex animate-marquee whitespace-nowrap gap-6 py-4 w-max hover:[animation-play-state:paused]">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <BrandCard key={`${brand.id}-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-16 bg-white">
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
                  <Image src={tip.image} alt={tip.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-xs text-primary font-medium mb-2">{tip.date}</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{tip.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2">{tip.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-slate-400 mb-8">Get the latest health tips, product updates, and exclusive offers straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full bg-white border-2 border-transparent focus:outline-none focus:border-primary text-slate-900 placeholder:text-slate-400 shadow-lg transition-colors" 
            />
            <button type="button" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
