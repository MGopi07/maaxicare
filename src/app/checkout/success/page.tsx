import Link from "next/link";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";

export default function OrderSuccessPage() {
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 py-12 px-4">
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 max-w-2xl w-full text-center">
        
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping opacity-20"></div>
            <CheckCircle2 className="h-12 w-12" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-slate-500 mb-8 text-lg">
          Thank you for choosing Maaxicare. Your order <span className="font-bold text-slate-900">{orderNumber}</span> has been confirmed and is being processed.
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-around gap-6 border border-slate-100">
          <div className="flex flex-col items-center text-center">
            <Package className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm text-slate-500">Estimated Delivery</span>
            <span className="font-bold text-slate-900">Tomorrow by 8 PM</span>
          </div>
          <div className="h-px sm:h-12 w-full sm:w-px bg-slate-200"></div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-sm text-slate-500">Payment Status</span>
            <span className="font-bold text-slate-900">Paid Successfully</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/medicines" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
            Continue Shopping <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="/" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all">
            Back to Home
          </Link>
        </div>
        
      </div>
    </div>
  );
}
