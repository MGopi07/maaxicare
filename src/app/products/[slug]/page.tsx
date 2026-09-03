"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, ShoppingCart, Heart, ChevronRight, MessageCircle } from "lucide-react";
import { api } from "@/services/api";
import { useCart } from "@/context/CartContext";
import MedicineCard from "@/components/MedicineCard";

export default function MedicineDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  
  const [medicine, setMedicine] = useState<any>(null);
  const [relatedMedicines, setRelatedMedicines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.products.getSingle(slug, 4)
      .then((res) => {
        const data = res?.data || res;
        setMedicine(data?.product || data);
        setRelatedMedicines(data?.related || []);
      })
      .catch((err) => console.error("Error fetching product", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500 font-medium">Loading product details...</div>;
  }

  if (!medicine) {
    notFound();
  }

  const price = Number(medicine.price) || 0;
  const offerPriceRaw = medicine.offer_price ?? medicine.discount_price ?? medicine.discountPrice;
  const discountPrice = offerPriceRaw != null ? Number(offerPriceRaw) : price;
  const hasDiscount = discountPrice < price && price > 0;

  const handleAddToCart = () => {
    addToCart(medicine as any, quantity);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/categories/${medicine.categoryId}`} className="hover:text-primary">{medicine.category && typeof medicine.category === 'object' ? medicine.category.name : medicine.category}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-800 font-medium">{medicine.name}</span>
        </div>

        <div className="bg-white rounded-3xl p-6 lg:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Image Gallery */}
            <div>
              <div className="relative h-80 lg:h-[500px] w-full bg-slate-50 rounded-2xl flex items-center justify-center p-8 mb-4 border border-slate-100">
                {medicine.prescriptionRequired && (
                  <span className="absolute top-4 left-4 bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wider z-10">
                    Rx Required
                  </span>
                )}
                <Image 
                  src={medicine.image} 
                  alt={medicine.name} 
                  fill 
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="flex gap-4">
                <button className="h-20 w-20 rounded-xl bg-slate-50 border-2 border-primary overflow-hidden relative">
                  <Image src={medicine.image} alt="Thumbnail 1" fill sizes="80px" className="object-contain p-2" />
                </button>
                <button className="h-20 w-20 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden relative opacity-70 hover:opacity-100">
                  <Image src={medicine.image} alt="Thumbnail 2" fill sizes="80px" className="object-contain p-2" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm text-primary font-medium">{medicine.manufacturer}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{medicine.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full text-yellow-700">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  <span className="font-bold text-sm">{medicine.rating}</span>
                </div>
                <span className="text-slate-500 text-sm hover:underline cursor-pointer">{medicine.reviewsCount} Ratings & Reviews</span>
              </div>
              
              <div className="mb-8">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-4xl font-bold text-slate-900">${discountPrice.toFixed(2)}</span>
                  {hasDiscount && (
                    <>
                      <span className="text-xl text-slate-400 line-through mb-1">${price.toFixed(2)}</span>
                      <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded mb-1">
                        {Math.round(((price - discountPrice) / price) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs text-slate-500">Inclusive of all taxes</p>
              </div>

              {/* Add to Cart Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-10 pt-8 border-t border-slate-100">
                {/* Temporarily hidden Add to Cart & Wishlist 
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary hover:bg-primary-dark text-white h-12 rounded-full font-bold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                
                <button className="h-12 w-12 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all">
                  <Heart className="h-5 w-5" />
                </button>
                */}

                <a 
                  href={`https://wa.me/1234567890?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(medicine.name)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 bg-[#25D366] hover:bg-[#1DA851] text-white h-14 rounded-full font-extrabold text-lg shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.45)] flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-slate-50 p-6 rounded-2xl">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">100% Genuine</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Free Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm">
                    <RotateCcw className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Easy Returns</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Info Tabs */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div className="flex overflow-x-auto border-b border-slate-100 hide-scrollbar">
            {['description', 'ingredients', 'how-to-use', 'advantages'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-5 font-medium text-sm whitespace-nowrap transition-colors relative ${
                  activeTab === tab 
                    ? "text-primary" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>
                )}
              </button>
            ))}
          </div>
          <div className="p-8 lg:p-12 text-slate-600 leading-relaxed max-w-4xl">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Product Overview</h3>
                <p className="mb-6">{medicine.description}</p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Active Ingredients</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  {medicine.ingredients?.map((ingredient: string, i: number) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "how-to-use" && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">How to Use</h3>
                <p className="mb-6">{medicine.howToUse}</p>
                <h4 className="font-semibold text-slate-900 mb-2">Recommended Dosage</h4>
                <p className="bg-slate-50 p-4 rounded-lg border border-slate-100 inline-block">{medicine.dosage}</p>
              </div>
            )}
            {activeTab === "advantages" && (
              <div>
                {/* <h3 className="text-xl font-bold text-slate-900 mb-4">Advantages</h3> */}
                <p className="mb-4">Here are the key advantages of this product:</p>
                <ul className="list-disc pl-5 space-y-2">
                  {medicine.benefits?.map((benefit: string, i: number) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Medicines */}
        {relatedMedicines.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedMedicines.map((m) => (
                <MedicineCard key={m.id} medicine={m as any} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
