export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p>Last updated: October 2023</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using Maaxicare, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Use of Service</h2>
          <p>You agree to use our services only for lawful purposes. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Medical Disclaimer</h2>
          <p>The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Pricing and Availability</h2>
          <p>All prices are subject to change without notice. We reserve the right to modify or discontinue any product at any time.</p>
        </div>
      </div>
    </div>
  );
}
