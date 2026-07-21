import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Maaxicare Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted online pharmacy. We deliver genuine medicines and healthcare products right to your doorstep with care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Shop Products</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/offers" className="hover:text-primary transition-colors">Special Offers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Top Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/categories/diabetes-care" className="hover:text-primary transition-colors">Diabetes Care</Link></li>
              <li><Link href="/categories/heart-care" className="hover:text-primary transition-colors">Heart Care</Link></li>
              <li><Link href="/categories/vitamins" className="hover:text-primary transition-colors">Vitamins & Supplements</Link></li>
              <li><Link href="/categories/personal-care" className="hover:text-primary transition-colors">Personal Care</Link></li>
              <li><Link href="/categories/baby-care" className="hover:text-primary transition-colors">Baby Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>123 Health Avenue, Medical District, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>support@maaxicare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Maaxicare Pharmacy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
