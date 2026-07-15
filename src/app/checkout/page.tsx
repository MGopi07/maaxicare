"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Check, CreditCard, Wallet, Truck, MapPin, ChevronRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const tax = cartTotal * 0.05;
  const deliveryFee = cartTotal > 50 ? 0 : 5.99;
  const grandTotal = cartTotal + tax + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    router.push("/checkout/success");
  };

  React.useEffect(() => {
    if (cart.length === 0 && step === 1) {
      router.push("/cart");
    }
  }, [cart.length, step, router]);

  if (cart.length === 0 && step === 1) {
    return null;
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center w-full max-w-2xl">
            <div className={`flex flex-col items-center flex-1 ${step >= 1 ? 'text-primary' : 'text-slate-400'}`}>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 1 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white border-2 border-slate-200'}`}>
                {step > 1 ? <Check className="h-5 w-5" /> : "1"}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider">Shipping</span>
            </div>
            <div className={`h-1 flex-1 ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`}></div>
            <div className={`flex flex-col items-center flex-1 ${step >= 2 ? 'text-primary' : 'text-slate-400'}`}>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 2 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white border-2 border-slate-200'}`}>
                {step > 2 ? <Check className="h-5 w-5" /> : "2"}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider">Delivery</span>
            </div>
            <div className={`h-1 flex-1 ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`}></div>
            <div className={`flex flex-col items-center flex-1 ${step >= 3 ? 'text-primary' : 'text-slate-400'}`}>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 3 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white border-2 border-slate-200'}`}>
                3
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider">Payment</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Checkout Area */}
          <div className="flex-1">
            <form onSubmit={step === 3 ? handlePlaceOrder : (e) => { e.preventDefault(); setStep(step + 1); }}>
              
              {/* Step 1: Shipping Address */}
              {step === 1 && (
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" /> Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="Doe" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Street Address</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="123 Health Ave, Suite 100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="New York" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">State / Province</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="NY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">ZIP / Postal Code</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="10001" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="+1 234 567 8900" />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
                      Continue to Delivery <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Delivery Method */}
              {step === 2 && (
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Truck className="h-6 w-6 text-primary" /> Delivery Options
                  </h2>
                  <div className="space-y-4">
                    <label className="flex items-start gap-4 p-5 rounded-2xl border-2 border-primary bg-primary/5 cursor-pointer">
                      <input type="radio" name="delivery" defaultChecked className="mt-1 text-primary focus:ring-primary w-5 h-5" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-slate-900">Standard Delivery</span>
                          <span className="font-bold text-slate-900">{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                        </div>
                        <p className="text-sm text-slate-500">Delivered in 2-4 business days.</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-4 p-5 rounded-2xl border-2 border-slate-200 hover:border-primary/50 cursor-pointer transition-colors">
                      <input type="radio" name="delivery" className="mt-1 text-primary focus:ring-primary w-5 h-5" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-slate-900">Express Delivery</span>
                          <span className="font-bold text-slate-900">$12.99</span>
                        </div>
                        <p className="text-sm text-slate-500">Delivered tomorrow by 8 PM.</p>
                      </div>
                    </label>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-4 rounded-full font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                      Back
                    </button>
                    <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
                      Continue to Payment <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-primary" /> Payment Method
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <button 
                      type="button" 
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                    >
                      <CreditCard className="h-6 w-6" />
                      <span className="font-medium text-sm">Credit Card</span>
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setPaymentMethod("upi")}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'upi' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                    >
                      <Wallet className="h-6 w-6" />
                      <span className="font-medium text-sm">UPI / Wallet</span>
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setPaymentMethod("cod")}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                    >
                      <Truck className="h-6 w-6" />
                      <span className="font-medium text-sm text-center">Cash on Delivery</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="relative">
                        <input type="text" placeholder="Card Number" className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                        <input type="text" placeholder="CVC" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <input type="text" placeholder="Name on Card" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="bg-slate-50 p-6 rounded-2xl text-center text-slate-600 animate-in fade-in duration-300 border border-slate-200">
                      <p>You can pay via Cash or UPI at the time of delivery.</p>
                      <p className="text-sm mt-2 text-slate-500">Please keep exact change ready.</p>
                    </div>
                  )}

                  <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center">
                    <button type="button" onClick={() => setStep(2)} className="px-6 py-4 rounded-full font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                      Back
                    </button>
                    <button type="submit" className="bg-secondary hover:bg-secondary-dark text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-secondary/30 transition-all flex items-center gap-2 text-lg">
                      Place Order - ${grandTotal.toFixed(2)}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Mini Cart Summary */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">Order Summary ({cart.length} items)</h3>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.medicine.id} className="flex gap-3">
                    <div className="relative h-12 w-12 bg-slate-50 rounded-lg flex-shrink-0 border border-slate-100">
                      <Image src={item.medicine.image} alt={item.medicine.name} fill sizes="80px" className="object-contain p-1" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900 line-clamp-1">{item.medicine.name}</p>
                      <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      ${(item.medicine.discountPrice * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 text-sm text-slate-600 mb-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold text-slate-900">{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <span className="font-bold text-slate-900">Total</span>
                <span className="font-bold text-xl text-primary">${grandTotal.toFixed(2)}</span>
              </div>
              
              <div className="mt-6 flex items-center gap-2 justify-center text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                256-bit Secure Checkout
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
