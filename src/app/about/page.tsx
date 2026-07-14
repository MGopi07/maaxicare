import Image from "next/image";
import { CheckCircle2, Users, Activity, HeartPulse } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About Maaxicare</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to make healthcare accessible, affordable, and convenient for everyone by providing authentic medicines right to your doorstep.
          </p>
        </div>
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <Image 
              src="https://images.unsplash.com/photo-1551076805-e1869043e560?w=800&q=80" 
              alt="Pharmacy Team" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Founded in 2020, Maaxicare started with a simple idea: no one should have to struggle to get their essential medications. We realized that for many, visiting a physical pharmacy is not always possible or convenient.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Since then, we've grown into a trusted online pharmacy, serving thousands of customers daily. Our platform is built on transparency, reliability, and a deep commitment to our customers' health and well-being.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">1M+</h4>
                <p className="text-slate-500 font-medium">Orders Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-secondary mb-2">50k+</h4>
                <p className="text-slate-500 font-medium">Products Available</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do at Maaxicare.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
              <div className="h-16 w-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Authenticity</h3>
              <p className="text-slate-600">We source all our products directly from manufacturers and authorized distributors to guarantee 100% genuine medicines.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
              <div className="h-16 w-16 bg-green-50 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Customer First</h3>
              <p className="text-slate-600">Your health and convenience are our top priorities. Our support team is always ready to assist you with any questions or concerns.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
              <div className="h-16 w-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Innovation</h3>
              <p className="text-slate-600">We constantly improve our platform and logistics to ensure faster deliveries, better recommendations, and a seamless user experience.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
