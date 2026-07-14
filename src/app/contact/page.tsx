import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about an order, our products, or need health advice? Our support team is here to help you 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="h-14 w-14 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600 mb-1">Toll-Free Customer Service</p>
                <p className="text-xl font-bold text-primary">+1 (800) 123-4567</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="h-14 w-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 mb-1">We typically reply within 2 hours</p>
                <p className="text-lg font-bold text-secondary">support@maaxicare.com</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="h-14 w-14 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
                <p className="text-slate-600 leading-relaxed">
                  123 Health Avenue<br />
                  Medical District, Suite 100<br />
                  New York, NY 10001, USA
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="h-14 w-14 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Business Hours</h3>
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-800">Support:</span> 24/7 Online<br />
                  <span className="font-semibold text-slate-800">Deliveries:</span> Mon - Sat, 8AM - 8PM
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option>Order Inquiry</option>
                    <option>Product Information</option>
                    <option>Returns & Refunds</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold shadow-md transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
