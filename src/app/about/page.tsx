import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Activity, HeartPulse, ShieldCheck, Truck, Clock, Sparkles, Target, Lightbulb, ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-secondary/20 to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold tracking-wider uppercase text-slate-200">Our Journey</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">Healthcare</span> Accessibility
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-12">
              We are on a mission to make healthcare accessible, affordable, and convenient for everyone by providing authentic medicines and wellness products right to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section overlapping Hero */}
      <section className="relative z-20 -mt-16 mb-24 container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="bg-white/80 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-2xl border border-white grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-100">
          <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl lg:text-5xl font-black text-primary mb-2">2M+</h4>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Happy Customers</p>
          </div>
          <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl lg:text-5xl font-black text-secondary mb-2">50k+</h4>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Products Available</p>
          </div>
          <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl lg:text-5xl font-black text-amber-500 mb-2">99%</h4>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">On-time Delivery</p>
          </div>
          <div className="text-center px-4 hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl lg:text-5xl font-black text-emerald-500 mb-2">24/7</h4>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Expert Support</p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="container mx-auto px-4 lg:px-8 max-w-7xl mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] transform -rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-100" />
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80" 
                alt="Pharmacy Team" 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-2xl font-bold leading-relaxed shadow-sm">"Bringing care closer to home, one prescription at a time."</p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 h-48 w-48 bg-white p-2 rounded-3xl shadow-xl hidden md:block border border-slate-100 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-500">
               <div className="relative w-full h-full rounded-2xl overflow-hidden">
                 <Image 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80" 
                  alt="Laboratory" 
                  fill 
                  className="object-cover"
                />
               </div>
            </div>
          </div>
          
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
              <span className="w-8 h-0.5 bg-primary rounded-full"></span>
              Our Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              A commitment to better health, <br/> <span className="text-primary">since 2020.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 2020 during a time of global uncertainty, Maaxicare started with a simple yet powerful idea: no one should have to struggle to get their essential medications. We realized that for many—the elderly, busy professionals, and those in remote areas—visiting a physical pharmacy is not always possible or convenient.
              </p>
              <p>
                What began as a small local delivery service has rapidly grown into a trusted national online pharmacy. Today, we serve thousands of customers daily, ensuring they never miss a dose. 
              </p>
              <p>
                Our platform is built on transparency, unshakeable reliability, and a deep, enduring commitment to our customers' health and well-being. We're not just delivering medicine; we're delivering peace of mind.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50/50 hover:bg-blue-50 p-6 rounded-2xl border border-blue-100 transition-colors duration-300">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-sm text-slate-600 leading-relaxed">To democratize access to authentic medicines and healthcare products.</p>
              </div>
              <div className="bg-emerald-50/50 hover:bg-emerald-50 p-6 rounded-2xl border border-emerald-100 transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-emerald-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-sm text-slate-600 leading-relaxed">To be the world's most customer-centric health and wellness platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20">
             <div className="mb-4 inline-flex items-center gap-2 text-secondary font-bold tracking-wider uppercase text-sm justify-center w-full">
              <span className="w-8 h-0.5 bg-secondary rounded-full"></span>
              Why Choose Us
              <span className="w-8 h-0.5 bg-secondary rounded-full"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">The unwavering principles that guide every decision we make at Maaxicare.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <div className="h-16 w-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Authentic</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">We source strictly from manufacturers and authorized distributors. No compromises on quality or safety.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <div className="h-16 w-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                <HeartPulse className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer First</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">Your health is our priority. Our compassionate support team is available around the clock to assist you.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <div className="h-16 w-16 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Swift Delivery</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">Advanced logistics and fulfillment networks ensure your medications arrive on time, every time.</p>
            </div>

            {/* Value 4 */}
            <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <div className="h-16 w-16 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">We leverage the latest technology to improve our platform, offering smart refills and better recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 lg:px-8 max-w-5xl">
         <div className="bg-gradient-to-br from-primary to-blue-700 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to experience better healthcare?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">Join thousands of satisfied customers who trust Maaxicare with their daily health and wellness needs.</p>
              <Link 
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Products
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
