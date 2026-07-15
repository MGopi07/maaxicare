"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  
  const tax = cartTotal * 0.05; // 5% tax
  const deliveryFee = cartTotal > 50 ? 0 : 5.99;
  const grandTotal = cartTotal + tax + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-300 mb-6">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 text-center max-w-md">Looks like you haven't added any medicines or healthcare products to your cart yet.</p>
        <Link href="/medicines" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100">
              <div className="hidden md:grid grid-cols-12 text-sm font-semibold text-slate-400 border-b border-slate-100 pb-4 mb-6">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.medicine.id} className="flex flex-col md:grid md:grid-cols-12 items-center gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    
                    {/* Product */}
                    <div className="col-span-6 flex items-center gap-4 w-full">
                      <div className="relative h-20 w-20 bg-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center border border-slate-100 p-2">
                        <Image src={item.medicine.image} alt={item.medicine.name} fill sizes="100px" className="object-contain p-2" />
                      </div>
                      <div className="flex-1">
                        <Link href={`/medicines/${item.medicine.slug}`} className="font-bold text-slate-900 hover:text-primary transition-colors line-clamp-1 mb-1">
                          {item.medicine.name}
                        </Link>
                        <p className="text-xs text-slate-500 mb-2">{item.medicine.category}</p>
                        <button 
                          onClick={() => removeFromCart(item.medicine.id)}
                          className="text-xs text-red-500 font-medium flex items-center gap-1 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-3 w-3" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-span-2 text-center w-full md:w-auto flex justify-between md:block">
                      <span className="md:hidden text-slate-500 font-medium">Price:</span>
                      <span className="font-bold text-slate-900">${item.medicine.discountPrice.toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center w-full md:w-auto">
                      <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full p-1">
                        <button 
                          onClick={() => updateQuantity(item.medicine.id, item.quantity - 1)}
                          className="h-8 w-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center font-bold text-slate-900 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.medicine.id, item.quantity + 1)}
                          className="h-8 w-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Item Total */}
                    <div className="col-span-2 text-right w-full md:w-auto flex justify-between md:block">
                      <span className="md:hidden text-slate-500 font-medium">Total:</span>
                      <span className="font-bold text-primary">${(item.medicine.discountPrice * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-slate-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (5%)</span>
                  <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-slate-900">
                    {deliveryFee === 0 ? <span className="text-secondary">Free</span> : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
              </div>
              
              {/* Coupon */}
              <div className="mb-6 pb-6 border-b border-slate-100 border-t pt-6">
                <div className="flex gap-2">
                  <input type="text" placeholder="Promo Code" className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">Apply</button>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg text-slate-900">Grand Total</span>
                <span className="font-bold text-2xl text-primary">${grandTotal.toFixed(2)}</span>
              </div>
              
              <Link href="/checkout" className="w-full bg-primary hover:bg-primary-dark text-white h-14 rounded-full font-bold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all">
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Secure checkout powered by Stripe
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
